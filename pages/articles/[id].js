import Link from 'next/link';
import AboutTheAuthor from '../../components/AboutTheAuthor';
import Related from '../../components/Related';
import CommentSection from '../../components/CommentSection';
import { queryDB } from '../../db';

function Article({ article, author }) {
    return (
        <div className="article">
            <div>{article.category}</div>
            <div>{article.title}</div>
            <div>{article.publish_date} by <Link to={`/authors/${author.id}`}>{author.name}</Link></div>
            <div>{article.content}</div>
            <AboutTheAuthor author={author} />
            <Related articles={related} />
            <CommentSection />
        </div>
    )
}

export async function getStaticProps({ params: { id }}) {
    let res = await queryDB('SELECT * FROM articles WHERE id = $1', [id]),
        article = await res.json(),
        res = await ('SELECT * FROM articles WHERE id = ANY($1)', [article.related]),
        related = res.json(),
        res = await queryDB('SELECT * FROM authors WHERE name = $1', [article.author]),
        author = await res.json();

    return { props: { article, author, related } }
}

export default Article;