import Link from 'next/link';

function ArticlePreview({ article }) {
    return (
        <div className="article-preview">
            <img src={article.thumbnail} alt="thumbnail" />
            <div>
                <div><Link to={`/articles/${article.id}`}>{article.title}</Link></div>
                <div>{article.publish_date} by <Link to={`/author/${article.author.id}`} className="author-link">{article.author.name}</Link></div>
                <div>{article.description}</div>
                <Link to={`/articles/${article.id}`}>read more</Link>
            </div>
        </div>
    )
}