import Link from 'next/link';

function CategoryPreview({ category: { title, articles } }) {
    return (
        <div className="category-preview">
            <label>{title}</label>
            <ul>
                {/* three most recent articles in category, sort by publish_date*/}
                {articles.slice(0, 3).map((article, i) =>
                    <li key={i}>
                        <div>{article.title}</div>
                        <div>{article.publish_date} by <Link to={`/authors/${article.author.id}`} className="author-link">{article.author.name}</Link></div>
                        <div style={{ display: 'flex' }}>
                            <img src={article.full_thumbnail} alt="thumbnail" />
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span>{article.description}</span>
                                <Link to={`/articles/${article.id}`}>read more</Link>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default CategoryPreview