import { queryDB, getCategories } from '../../../../../db';
import ArticleDisplay from '../../../../../components/ArticleDisplay';
import Layout from '../../../../../layouts';
import { convertToPath, convertFromPath } from '../../../../../Functions';

export async function getStaticPaths() {
    let categories = await queryDB("SELECT title, subcategories FROM categories WHERE title <> 'Labyrinth' AND title <> 'Headlines'"),
        paths = categories
            .reduce((acc, category) => [
                ...acc,
                Object.entries(category.subcategories)
                    .map(([key, val]) => new Array(Math.ceil(val.length/15)).fill(true).map((id, i) =>
                        ({ params: { category: convertToPath(category.title), subcategory: convertToPath(key), page: i+1 } }))
                    )
            ], []);

    return { paths, fallback: false }
}

export async function getStaticProps({ params: { category, subcategory, page } }) {
    let subcategories = await queryDB('SELECT subcategories FROM categories WHERE title = $1', [convertFromPath(category)]),
        articles = await queryDB('SELECT * FROM articles WHERE id = ANY($1) ORDER BY publish_date DESC', [ subcategories[0].subcategories[convertFromPath(subcategory)] ]);

    return {
        props: JSON.parse(JSON.stringify({
            heading: convertFromPath(subcategory),
            articles,
            categories: await getCategories(),
            footerData: {
                page: Number(page),
                route: '/categories/' + subcategory,
                highestPage: Math.ceil(articles.length / 15)
            }
        }))
    }
}

export default ({ heading, articles, categories, footerData }) => <Layout categories={categories} footerData={footerData}> <ArticleDisplay type={'subcategory'} heading={heading} articles={articles} page={footerData.page} /> </Layout>