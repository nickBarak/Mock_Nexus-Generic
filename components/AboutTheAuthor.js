import Link from 'next/link';

function AboutTheAuthor({ author }) {
	return (
		<div className="about-the-author">
			<picture>
				<source srcSet={author.portrait} />
				<source srcSet="/img/nexus-fallback.webp" type="image/webp" />
				<Link href={'/authors/' + author.id}>
					<img alt="author" />
				</Link>
			</picture>
			<div>
				<div>
					<Link href={`/authors/${author.id}`}>
						<a>{author.name}</a>
					</Link>
				</div>
				<div>{author.biography === 'Not available' ? 'Biography not available' : author.biography}</div>
			</div>
			<style jsx>{`
				.about-the-author {
					display: flex;
					margin: 2rem 0;
				}

				picture {
					margin-right: 1.25rem;
					min-width: 6.5rem;
				}

				img {
					object-fit: contain;
					height: 6.5rem;
					cursor: pointer;
				}

				.about-the-author > div {
					display: flex;
					flex-direction: column;
				}

				.about-the-author > div > div:nth-child(1) {
					font-size: 1.2rem;
					margin-bottom: 0.5rem;
				}

				.about-the-author > div > div:nth-child(2) {
					font-size: 0.95rem;
				}

				a {
					color: var(--link-hover);
				}
			`}</style>
		</div>
	);
}

export default AboutTheAuthor;
