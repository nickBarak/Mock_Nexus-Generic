import Link from 'next/link';
import { convertDate, convertToPath } from '../Functions';
import { uuid } from 'uuidv4';

/* Displays 3 most recent articles in category */
function CategoryPreview({ category: { title, articles } }) {
	return (
		<div className="category-preview">
			<Link href={`/categories/${convertToPath(title)}`}>
				<label>{title}</label>
			</Link>
			<ul>
				{articles.map((article, i) => (
					<li key={uuid()}>
						<div style={{ fontWeight: 600, fontSize: '1.2rem' }}>
							<Link href={`/articles/${article.id}`}>
								<a className="article-preview-title">
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
						<div className="category-preview-details">
							<div style={{ display: 'flex' }}>
								<span className="category-preview-img" style={{ overflow: 'hidden' }}>
									<picture>
										<source srcSet={article.full_thumbnail} />
										<source
											srcSet="/img/nexus-fallback.webp"
											type="image/webp"
										/>
										<Link href={`/articles/${article.id}`}><img className="category-preview-img" alt="thumbnail" /></Link>
									</picture>
								</span>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										marginLeft: '.4rem',
										fontSize: '.9rem',
									}}>
									<span>{article.description}</span>
									<Link href={`/articles/${article.id}`}>
										<a className="read-more">read more</a>
									</Link>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
			<style jsx>{`
				ul {
					display: flex;
					flex-direction: column;
					position: relative;
				}

				${/* right-side soft-border */ ''}
				li:nth-child(1)::before {
					content: '';
					position: absolute;
					height: 515px;
					background-color: #ddd;
					right: -0.4rem;
					top: 0.5rem;
				}

				li {
					margin: 1rem;
					position: relative;
				}

				li:nth-child(1)::after,
				li:nth-child(2)::after {
					position: absolute;
					content: '';
					height: 1px;
					width: 99%;
					left: 0;
					bottom: -1.2rem;
					background-color: #ddd;
				}

				label {
					margin-left: 1rem;
					position: relative;
					font-size: 1.75rem;
					padding: 4px 0;
					display: block;
					font-weight: 600;
					cursor: pointer;
				}

				label::before,
				label::after {
					position: absolute;
					content: '';
					height: 2px;
					width: 100%;
					background-color: var(--theme-gold);
					left: -0.65rem;
				}

				label::before {
					top: 0;
				}

				label::after {
					bottom: 0;
				}

				.article-preview-title {
					color: black;
				}

				.article-preview-author {
					color: gray;
					font-style: italic;
				}

				a:hover {
					color: var(--link-hover);
				}

				img {
					cursor: pointer;
					transition: transform 100ms ease-out;
				}

				img:hover {
					transform: scale(1.175);
				}
			`}</style>
		</div>
	);
}

export default CategoryPreview;
