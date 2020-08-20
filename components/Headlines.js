import Link from 'next/link';
import { convertDate } from '../Functions';
import { uuid } from 'uuidv4';

/* Displays 4 articles, first is emphasized */
function Headlines({ articles }) {
	return (
		<>
			<div className="headlines">
				<ul>
					<li key={uuid()}>
						<Link href={`/articles/${articles[0].id}`}>
							<img
								src={articles[0].full_thumbnail}
								alt="headline"
							/>
						</Link>
						<div className="category-and-date">
							<span className="article-preview-category">
								{articles[0].category} |
							</span>{' '}
							{convertDate(articles[0].publish_date)}
						</div>
						<Link href={`/articles/${articles[0].id}`}>
							<a className="article-preview-title">
								{articles[0].title}
							</a>
						</Link>
						<div className="date-and-author">
							by{' '}
							<Link href={`/authors/${articles[0].author.id}`}>
								<a className="article-preview-author">
									{articles[0].author.name}
								</a>
							</Link>
						</div>
						<div className="article-preview-description">
							{articles[0].description}
						</div>
						<Link href={`/articles/${articles[0].id}`}>
							<a className="read-more">read more</a>
						</Link>
					</li>
					<li key={uuid()}>
						<ul>
							{articles.slice(1, 4).map((article, i) => (
								<li key={uuid()}>
									<div>
										<span className="article-preview-category">
											{article.category} |
										</span>{' '}
										{convertDate(article.publish_date)}
									</div>
									<Link href={`/articles/${article.id}`}>
										<a className="article-preview-title">
											{article.title}
										</a>
									</Link>
									<div className="date-and-author">
										by{' '}
										<Link
											href={`/authors/${article.author.id}`}>
											<a className="article-preview-author">
												{article.author.name}
											</a>
										</Link>
									</div>
									<div className="article-preview-description">
										{article.description}
									</div>
									<Link href={`/articles/${article.id}`}>
										<a className="read-more">read more</a>
									</Link>
								</li>
							))}
						</ul>
					</li>
				</ul>
			</div>

			<div className="headlines-mobile">
				<ul>
					<li key={uuid()}>
						<Link href={``}>
							<img
								src={articles[0].mobile_thumbnail}
								alt="headline"
								style={{ width: '99%', marginBottom: '.5rem' }}
							/>
						</Link>
						<Link href={`/articles/${articles[0].id}`}>
							<a className="article-preview-title">
								{articles[0].title}
							</a>
						</Link>
						<div className="date-and-author">
							{convertDate(articles[0].publish_date)} by{' '}
							<Link href={`/authors/${articles[0].author.id}`}>
								<a className="article-preview-author">
									{articles[0].author.name}
								</a>
							</Link>
						</div>
						<div className="article-preview-description">
							{articles[0].description}
						</div>
						<Link href={`/articles/${articles[0].id}`}>
							<a className="read-more">read more</a>
						</Link>
					</li>
					{articles.slice(1, 4).map((article, i) => (
						<li key={uuid()}>
							<Link href={`/articles/${article.id}`}>
								<a className="article-preview-title">
									{article.title}
								</a>
							</Link>
							<div className="date-and-author">
								{convertDate(article.publish_date)} by{' '}
								<Link
									href={`/authors/${article.author.id}`}>
									<a className="article-preview-author">
										{article.author.name}
									</a>
								</Link>
							</div>
						</li>
					))}
				</ul>
			</div>

			<style jsx>{`
				.headlines, .headlines-mobile {
					margin-bottom: 3.5rem;
				}

				ul {
					display: flex;
				}

				li ul,
				.headlines-mobile ul {
					flex-direction: column;
				}

				li {
					margin: 0.5rem;
					position: relative;
					font-size: 0.9rem;
				}

				li div:nth-child(1) {
					margin-bottom: 3px;
				}

				li ul li:nth-child(1)::before,
				li ul li:nth-child(2)::before,
				.headlines-mobile ul li:nth-child(1)::before,
				.headlines-mobile ul li:nth-child(2)::before,
				.headlines-mobile ul li:nth-child(3)::before {
				content: '';
					height: 1px;
					width: 99%;
					left: 0;
					bottom: -0.5rem;
					background-color: #ddd;
					position: absolute;
				}

				.category-and-date {
					margin-top: 5px;
					margin-bottom: 3px;
				}

				.article-preview-title {
					color: black;
					font-weight: bold;
					font-size: 1.275rem;
				}

				.article-preview-title:hover,
				.article-preview-author:hover {
					color: var(--link-hover);
				}

				.article-preview-author {
					color: gray;
					font-style: italic;
				}

				.article-preview-category {
					font-weight: bold;
					font-size: 14px;
					text-transform: uppercase;
				}

				.date-and-author {
					margin-top: 2px;
					margin-bottom: 7px;
				}

				.article-preview-description {
					margin-bottom: 2px;
				}

				ul li:nth-child(1) {
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
				}
			`}</style>
		</>
	);
}

export default Headlines;
