import { queryDB, getCategories } from "../../db";
import ArticleDisplay from '../../components/ArticleDisplay';
import Layout from "../../layouts";

export async function getStaticPaths() {
    let authors = await queryDB('SELECT id, articles FROM authors'),
        paths = authors.map(({id, articles}) => new Array(Math.ceil(articles/15)).fill(true).map((_, i) => ({ params: { id: String(id.id), page: String(i+1) } })));

    return { paths, fallback: false }
}

export async function getStaticProps({ params: { id, page } }) {
    let [author] = await queryDB('SELECT * FROM authors WHERE id = $1', [id]),
        articles = await queryDB("SELECT * FROM articles WHERE author = $1 ORDER BY publish_date DESC", [JSON.stringify({ "id": Number(id), "name": author.name })]);

    return { props: JSON.parse(JSON.stringify({ author: author.name, articles, categories: await getCategories(), footerData: {
        page: Number(page),
        highestPage: Math.ceil(articles.length / 15),
        route: '/authors/' + id
    } })) }
}

export default ({ author, articles, categories, footerData }) => <Layout categories={categories}>
<ArticleDisplay type="author-page" heading={author} articles={articles} footerData={footerData} />
</Layout>