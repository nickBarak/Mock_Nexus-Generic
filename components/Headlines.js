import Link from 'next/link';

function Headlines({ articles }) {
    return (
        <div className="headlines">
            <ul>
                <li>
                    <Link to={`/articles/${articles[0].id}`}>
                        <img src={articles[0].thumbnail} alt="headline" />
                    </Link>
                    <div>{articles[0].category} | {articles[0].publish_date}</div>
                    <Link to={`/articles/${articles[0].id}`}>{articles[0].title}</Link>
                    <Link to={`/authors/${articles[0].author.id}`}>by {articles[0].author.name}</Link>
                    <div>{articles[0].description}</div>
                    <Link to={`/articles/${articles[0].id}`}>read more</Link>
                </li>
                <li>
                    <ul>
                        {articles.slice(1, 4).map((article, i) =>
                            <li key={i+1}>
                                <div>{article.category} | {article.publish_date}</div>
                                <Link to={`/articles/${article.id}`}>{article.title}</Link>
                                <Link to={`/authors/${article.author.id}`}>by {article.author.name}</Link>
                                <div>{article.description}</div>
                                <Link to={`/articles/${article.id}`}>read more</Link>
                            </li>
                        )}
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Headlines