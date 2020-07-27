import { queryDB, getCategories } from '../../../db';
import ArticleDisplay from '../../../components/ArticleDisplay';
import Layout from '../../../layouts';
import { convertToPath, convertFromPath } from '../../../Functions';

export async function getStaticPaths() {
    let categories = await queryDB("SELECT title, subcategories FROM categories WHERE title <> 'Labyrinth' AND title <> 'Headlines'"),
        paths = categories
            .reduce((acc, category) => [
                ...acc,
                ...Object.keys(category.subcategories)
                    .map(subcategory => ({ params: { category: convertToPath(category.title), subcategory: convertToPath(subcategory) } }))
            ], []);

    return { paths, fallback: false }
}

export async function getStaticProps({ params: { category, subcategory } }) {
    let subcategories = await queryDB('SELECT subcategories FROM categories WHERE title = $1', [convertFromPath(category)]),
        articles = await queryDB('SELECT * FROM articles WHERE id = ANY($1) ORDER BY publish_date DESC', [ subcategories[0].subcategories[convertFromPath(subcategory)] ]);

    return {
        props: JSON.parse(JSON.stringify({
            heading: convertFromPath(subcategory),
            articles,
            categories: await getCategories(),
            footerData: {
                page: 1,
                route: '/categories/' + subcategory,
                highestPage: Math.ceil(articles.length / 15)
            }
        }))
    }
}

export default ({ heading, articles, categories, footerData }) => <Layout categories={categories} footerData={footerData}> <ArticleDisplay type={'subcategory'} heading={heading} articles={articles} page={footerData.page} /> </Layout>