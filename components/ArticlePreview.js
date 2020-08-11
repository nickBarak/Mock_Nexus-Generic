import Link from 'next/link';
import { convertDate } from '../Functions';

function ArticlePreview({ article, imageLeft, labyrinth }) {
    return (<>
        <div className="article-preview">
            {imageLeft &&
                <picture>
                    <source srcSet={article.full_thumbnail} />
                    <source srcSet="/img/nexus-fallback.webp" style={{ width: '20rem', height: '15rem' }} type="image/webp" />
                    <img alt="thumbnail" />
                </picture>
            }
            <div className="article-preview-words">
                <div><Link href={`/articles/${article.id}`}><a className="article-preview-title">{article.title}</a></Link></div>
                <div className="date-and-author">{convertDate(article.publish_date)} by <Link href={`/authors/${article.author.id}`}><a className="article-preview-author">{article.author.name}</a></Link></div>
                <div>{article.description}</div>
                <Link href={`/articles/${article.id}`}><a className="read-more">read more</a></Link>
            </div>
            {!imageLeft &&
                <picture>
                    <source srcSet={article.full_thumbnail} />
                    <source srcSet="/img/nexus-fallback.webp" style={{ width: '20rem', height: '15rem' }} type="image/webp" />
                    <img alt="thumbnail" />
                </picture>
            }
        </div>

        <style jsx>{`
            .article-preview {
                display: flex;
                margin: 2.5rem 0;
                justify-content: flex-end;
                position: relative;
            }

            .article-preview::after {
                content: '';
                position: absolute;
                background-color: #eaeaea;
                height: 2px;
                width: 97.5%;
                bottom: -1.25rem;
                left: 2.5%;
            }

            .article-preview-words {
                display: flex;
                flex-direction: column;
                ${imageLeft ? '' : 'align-items: flex-end'};
                margin: 0 .75rem;
                width: ${labyrinth ? '60%' : '80%'};
            }

            .article-preview-title {
                color: black;
                font-size: 1.75rem;
                font-weight: 600;
                ${labyrinth ? 'font-size: 1.5rem;' : ''}
            }

            .article-preview-author {
                color: gray;
                font-style: italic;
            }

            a:hover {
                color: var(--link-hover);
            }
        `}</style>
    </>)
}

export default ArticlePreview