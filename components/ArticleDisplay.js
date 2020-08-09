import ArticlePreview from './ArticlePreview';

function ArticleDisplay({ type, heading, articles }) {
    return (<>
        <div className={type} style={{ marginRight: '2rem', marginLeft: '1rem' }}>
            <div className="category-heading" style={{ fontSize: '2.5rem', textTransform: 'uppercase', marginTop: '.75rem' }}>{heading}</div>
            <ul>
                {articles.map((article, i) =>
                    <li key={i}> <ArticlePreview article={article} imageLeft={!(i % 2)} /> </li>
                )}
            </ul>
        </div>

        <style jsx>{`
            .category-heading {
                position: relative;
            }

            .category-heading::before,
            .category-heading::after {
                content: '';
                width: 100%;
                height: 2px;
                background-color: #ddd;
                position: absolute;
                left: 0;
            }

            .category-heading::before {
                top: -5px;
            }
            
            .category-heading::after {
                bottom: -5px;
            }
            `}</style>
    </>)
}

export default ArticleDisplay