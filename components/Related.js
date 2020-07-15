import Link from 'next/link';

function Related({ articles }) {
    return (
        <div className="related">
            <div>Related</div>
            <ul>
                {articles.map((article, i) =>
                    <li key={i}>
                        <Link to={`/articles/${article.id}`}>{article.title}</Link>
                        <div>{article.publish_date}</div>
                        <div>In "{article.category}"</div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Related