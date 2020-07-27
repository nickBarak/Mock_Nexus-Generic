import { queryDB, getCategories } from '../../../../db';
import ArticleDisplay from '../../../../components/ArticleDisplay';
import Layout from '../../../../layouts';
import { convertToPath, convertFromPath } from '../../../../Functions';

export async function getStaticPaths() {
    let categories = await queryDB("SELECT title, articles FROM categories WHERE title <> 'Labyrinth' AND title <> 'Headlines'"),
        paths = categories.map(({title, articles}) =>
            (new Array(Math.ceil(articles.length/15)).fill(true).map((_, i) =>
                ({ params: { category: convertToPath(title), page: String(i+1) } })
            ))
        );
    paths = paths.reduce((acc, cur) => [...cur, ...acc], []);

    console.log(JSON.stringify(paths))

    return { paths, fallback: false }
}

export async function getStaticProps({ params: { category, page } }) {
    let [articleIDs] = await queryDB('SELECT articles FROM categories WHERE title = $1', [convertFromPath(category)]),
        articles = await queryDB('SELECT * FROM articles WHERE id = ANY($1) ORDER BY publish_date DESC', [articleIDs.articles]);

        return {
        props: JSON.parse(JSON.stringify({
            heading: convertFromPath(category),
            articles,
            categories: await getCategories(),
            footerData: {
                route: '/categories/' + category,
                page: Number(page),
                highestPage: Math.ceil(articles.length / 15)
            }
        }))
    }
}

export default ({ heading, articles, categories, footerData }) => <Layout categories={categories} footerData={footerData}> <ArticleDisplay type="category" heading={heading} articles={articles} page={footerData.page} /> </Layout>