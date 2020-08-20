import Link from 'next/link';
import { convertDate } from '../Functions';

/* Displays image on variable side */
function ArticlePreview({ article, imageLeft, labyrinth }) {
	return (
		<>
			<div className="article-preview">
				{imageLeft && (
					<picture>
						<source srcSet={article.full_thumbnail} />
						<source
							srcSet="/img/nexus-fallback.webp"
							type="image/webp"
						/>
						<img alt="thumbnail" />
					</picture>
				)}
				<div className="article-preview-words">
					<div>
						<Link href={`/articles/${article.id}`}>
							<a className={`article-preview-title${labyrinth ? ' labyrinth-title' : ''}`}>
								{article.title}
							</a>
						</Link>
					</div>
					<div className="date-and-author">
						{convertDate(article.publish_date)} by{' '}
						<Link href={`/authors/${article.author.id}`}>
							<a className="article-preview-author">
								{article.author.name}
							</a>
						</Link>
					</div>
					<div>{article.description}</div>
					<Link href={`/articles/${article.id}`}>
						<a className="read-more">read more</a>
					</Link>
				</div>
				{!imageLeft && (
					<picture>
						<source srcSet={article.full_thumbnail} />
						<source
							srcSet="/img/nexus-fallback.webp"
							type="image/webp"
						/>
						<img alt="thumbnail" />
					</picture>
				)}
			</div>

			<div className="article-preview-mobile">
				<picture>
					<source srcSet={article.mobile_thumbnail}/>
					<source
						srcSet="/img/nexus-fallback.webp"
						type="image/webp"
					/>
					<img alt="thumbnail" style={{ maxWidth: '100%' }}/>
				</picture>
				<div className="article-preview-words">
					<div>
						<Link href={`/articles/${article.id}`}>
							<a className={`article-preview-title${labyrinth ? ' labyrinth-title' : ''}`}>
								{article.title}
							</a>
						</Link>
					</div>
					<div className="date-and-author">
						{convertDate(article.publish_date)} by{' '}
						<Link href={`/authors/${article.author.id}`}>
							<a className="article-preview-author">
								{article.author.name}
							</a>
						</Link>
					</div>
					{/* <div>{article.description}</div>
					<Link href={`/articles/${article.id}`}>
						<a className="read-more">read more</a>
					</Link> */}
				</div>
			</div>

			{/* Labyrinth has slightly different formatting (thinner and always with image to left) */}
			<style jsx>{`
				.article-preview {
					margin: 2.5rem 0;
					justify-content: flex-end;
					position: relative;
				}

				.article-preview-mobile {
					margin: 2.5rem 0;
					position: relative;
					display: flex;
					flex-direction: column;
				}

				.article-preview-mobile .article-preview-words {
					margin-top: .4rem;
					margin-left: 0;
				}

				.article-preview-mobile .article-preview-title {
					font-size: 1.5rem;
				}

				.article-preview-mobile::after {
					content: '';
					width: 100%;
					height: 2px;
					background-color: #ddd;
					position: absolute;
					bottom: -.65rem;
					left: 0;
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
					margin: 0 0.75rem;
					width: ${labyrinth ? '60%' : '80%'};
				}

				.article-prevew .artilce-preview-words {
					${imageLeft ? '' : 'align-items: flex-end'};
				}

				.article-preview-title {
					color: black;
					font-weight: 600;
				}

				.article-preview-author {
					color: gray;
					font-style: italic;
				}

				a:hover {
					color: var(--link-hover);
				}
			`}</style>
		</>
	);
}

export default ArticlePreview;
