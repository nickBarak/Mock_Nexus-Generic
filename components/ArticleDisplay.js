function ArticleDisplay({ type, heading, articles }) {
    return (
        <div className={type}>
            <div>{heading}</div>
            <ul>
                {articles.slice(0, 10).map((article, i) =>
                    <li key={i}> <ArticlePreview article={article} /> </li>
                )}
            </ul>
        </div>
    )
}

export default ArticleDisplay