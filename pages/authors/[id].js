import { queryDB, getCategories } from "../../db";
import ArticleDisplay from '../../components/ArticleDisplay';
import Layout from "../../layouts";

export async function getStaticPaths() {
    let ids = await queryDB('SELECT id FROM authors'),
        paths = ids.map(id => ({ params: { id: String(id.id) } }));

    return { paths, fallback: false }
}

export async function getStaticProps({ params: { id } }) {
    let [author] = await queryDB('SELECT * FROM authors WHERE id = $1', [id]),
        articles = await queryDB("SELECT * FROM articles WHERE author = $1 ORDER BY publish_date DESC", [JSON.stringify({ "id": Number(id), "name": author.name })]);

    return { props: JSON.parse(JSON.stringify({ author: author.name, articles, categories: await getCategories(), footerData: {
        page: 1,
        highestPage: Math.ceil(articles.length / 15),
        route: '/authors/' + id
    } })) }
}

export default ({ author, articles, categories, footerData }) => <Layout categories={categories}>
<ArticleDisplay type="author-page" heading={author} articles={articles} footerData={footerData} />
</Layout>