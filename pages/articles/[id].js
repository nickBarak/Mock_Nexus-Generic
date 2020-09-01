import Link from 'next/link';
import AboutTheAuthor from '../../components/AboutTheAuthor';
import Related from '../../components/Related';
import CommentSection from '../../components/CommentSection';
import { convertDate } from '../../Functions';
import { queryDB } from '../../db';
import Layout from '../../layouts';
import { useEffect, useState } from 'react';

function Article({ article, author, related }) {

	/* Content styles must be added after render as article.content includes the HTML */
	useEffect(_ => {
		let contentDiv = document.getElementsByClassName(
			'single-post-content'
		)[0];
		[
			...contentDiv.getElementsByTagName('p'),
			...contentDiv.getElementsByTagName('span'),
		].forEach(p => {
			p.style.margin = '1rem 0';
			p.style.fontFamily = 'Times New Roman, Georgia';
			p.style.fontSize = '1.225rem';
			p.style.lineHeight = '150%';
		});

		/* hide unwanted content */
		[
			document.getElementById('jp-relatedposts'),
			document.getElementsByClassName('saboxplugin-wrap')[0],
			document.getElementsByClassName('h5ab-print-button-container')[0],
		].forEach(el => {
			if (el) el.style.display = 'none';
		});

		/* Attempt to make any image collections look decent */
		document.getElementsByClassName(
			'single-post-content'
		)[0].style.fontFamily = 'Times New Roman, Georgia';
		[...document.getElementsByClassName('gallery-row')].forEach(gallery => {
			gallery.style.display = 'grid';
			gallery.style.gridTemplateColumns = 'repeat(3, 1fr)';
		});
		[...document.getElementsByClassName('tiled-gallery-caption')].forEach(
			caption => {
				caption.style.backgroundColor = 'rgb(230, 230, 230, .95)';
				caption.style.fontSize = '.75rem';
				caption.style.width = '100%';
				caption.style.padding = '.5rem';
				caption.style.position = 'absolute';
				caption.style.bottom = `3px`;
			}
		);
		[...document.getElementsByClassName('tiled-gallery-item')].forEach(
			item => {
				item.style.position = 'relative';
				item.children[1].style.transform = 'scaleY(0)';
				item.children[1].style.transition =
					'transform 190ms ease-in-out';
				item.children[1].style.transformOrigin = 'bottom';
				item.addEventListener('mouseover', e => {
					e.currentTarget.children[1].style.transform = 'scaleY(1)';
				});
				item.addEventListener('mouseout', e => {
					e.currentTarget.children[1].style.transform = 'scaleY(0)';
				});
			}
		);

		[...document.getElementsByClassName('sd-content')[0].children].forEach(
			ul => {
				ul.style.display = 'flex';
				ul.style.justifyContent = 'space-between';
				ul.style.width = '10rem';
				ul.style.marginTop = '.5rem';
			}
		);

		[
			document.getElementsByClassName('article-page-content')[0],
			contentDiv,
			...contentDiv.getElementsByClassName('wp-caption'),
			...contentDiv.getElementsByTagName('a'),
			...contentDiv.getElementsByTagName('img'),
		].forEach(el => {
			el.style.maxWidth = '100%';
		});
		[...contentDiv.getElementsByTagName('img')].forEach(img => {
			img.style.objectFit = 'cover';
		});
		[...document.getElementsByClassName('share-icon')].forEach(icon => {
			let [site] = [...icon.classList].filter(
					className =>
						className.startsWith('share-') &&
						className.slice(
							className.length - 5,
							className.length
						) !== '-icon'
				),
				el = document.createElement('i'),
				bgColor;
			site = site.split('-')[1];
			el.classList.add('fa');
			el.classList.add(`fa-${site}`);
			el.style.color = 'white';
			el.style.borderRadius = '50%';
			el.style.width = el.style.height = '2rem';
			el.style.display = 'flex';
			el.style.justifyContent = el.style.alignItems = 'center';
			el.style.cursor = 'pointer';
			switch (site) {
				default:
					break;
				case 'facebook':
					bgColor = 'rgba(24, 119, 242, 1)';
					break;
				case 'twitter':
					bgColor = 'rgba(0, 172, 238, 1)';
					break;
				case 'tumblr':
					bgColor = 'rgba(44, 71, 98, 1)';
					break;
				case 'reddit':
					bgColor = 'rgba(255, 0, 0, 1)';
					break;
			}
			el.style.backgroundColor = bgColor;
			el.addEventListener('mouseover', e => {
				e.target.style.backgroundColor =
					bgColor.slice(0, bgColor.length - 2) + '.75)';
			});
			el.addEventListener('mouseout', e => {
				e.target.style.backgroundColor = bgColor;
			});
			el.addEventListener('click', _ =>
				alert(
					`Imagine ${
						site[0].toUpperCase() + site.slice(1)
					} popping up`
				)
			);
			icon.replaceWith(el);
		});
	}, []);

	return (
		<>
			<Layout>
				<div className="article">
					<div className="article-page-subcategory">
						{article.subcategory}
					</div>
					<div className="article-page-details">
						<div className="article-page-title">
							{article.title}
						</div>
						<div>
							{(_ => {
								let date = new Date(article.publish_date);
								/* Supposed to show exact minute published but I think either this doesn't work or minute value is not available in article.publish_date */
								let at =
									date.getHours() === 0
										? ''
										: ` at ${date.getHours()}:${
												String(date.getMinutes())
													.length === 1
													? '0'
													: '' + date.getMinutes()
										  }${
												date.getHours() < 12
													? date.getHours() + ' am'
													: 24 -
													  date.getHours() +
													  ' pm'
										  }`;
								return convertDate(article.publish_date) + at;
							})()}{' '}
							by{' '}
							<Link href={`/authors/${author.id}`}>
								<a className="article-page-author-name">
									{author.name}
								</a>
							</Link>
						</div>
					</div>
					<div
						className="article-page-content"
						dangerouslySetInnerHTML={{ __html: article.content }}
					/>

					<AboutTheAuthor author={author} />
					<Related articles={related} />
					<CommentSection
						articleID={article.id}
						articleTitle={article.title}
						articleFollowers={article.followers}
					/>
				</div>
			</Layout>

			<style jsx>{`
				.article {
					max-width: calc(100% - 2rem);
				}

				.article-page-subcategory {
					position: relative;
					font-weight: bold;
					font-size: 1.2rem;
					text-transform: uppercase;
				}

				.article-page-subcategory::before,
				.article-page-subcategory::after {
					content: '';
					height: 2px;
					width: 100%;
					position: absolute;
					background-color: #ddd;
					left: 0;
				}

				.article-page-subcategory::before {
					top: -5px;
				}

				.article-page-subcategory::after {
					bottom: -5px;
				}

				.article-page-title {
					font-size: 2.5rem;
					font-weight: 600;
					font-family: Times New Roman;
					margin-bottom: 0.65rem;
				}

				.article-page-author-name {
					color: black;
				}

				.article-page-author-name:hover {
					color: var(--link-hover);
				}

				.article-page-details {
					margin: 2.5rem 0 3.5rem 0;
					position: relative;
				}

				.article-page-details::after {
					content: '';
					height: 1px;
					width: 100%;
					background-color: #eee;
					position: absolute;
					bottom: -7.5%;
					left: 0;
				}

				.article-page-details > div:nth-child(2),
				.article-page-author-name {
					font-family: Times New Roman;
					font-size: 1.1rem;
				}

				.article-page-content {
					margin: 0 0.5rem;
				}
			`}</style>
		</>
	);
}

export async function getStaticPaths() {
	let ids = await queryDB('SELECT id FROM articles'),
		paths = ids.map(id => ({ params: { id: String(id.id) } }));

	return { paths, fallback: false };
}

export async function getStaticProps({ params: { id } }) {
	let [article] = await queryDB('SELECT * FROM articles WHERE id = $1', [id]),
		related = await queryDB('SELECT * FROM articles WHERE id = ANY($1)', [
			article.related,
		]),
		[author] = await queryDB('SELECT * FROM authors WHERE name = $1', [
			article.author.name,
		]);
	return { props: JSON.parse(JSON.stringify({ article, author, related })) };
}

export default Article;
