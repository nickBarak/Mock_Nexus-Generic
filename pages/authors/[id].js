import { queryDB } from "../../db";
import ArticlePreview from '../../components/ArticlePreview';

function Author({ author, articles }) {
    return (
        <ul>
            {articles.slice(0, 10).map((article, i) =>
                <li key={i}> <ArticlePreview article={article} /> </li>
            )}
        </ul>
    )
}

export async function getStaticProps({ params: { id } }) {
    let res = await queryDB('SELECT * FROM authors WHERE id = $1', [id]),
        author = await res.json();
    let res = await queryDB('SELECT * FROM articles WHERE author = $1', [JSON.stringify({ id, name: author.name })]),
        articles = await res.json();

    return { props: { author, articles } }
}

export default Author