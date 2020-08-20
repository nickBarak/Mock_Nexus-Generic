import Headlines from '../components/Headlines';
import CategoryPreview from '../components/CategoryPreview';
import { queryDB } from '../db';
import Layout from '../layouts';
import Link from 'next/link';
import { useEffect } from 'react';
import { uuid } from 'uuidv4';

function App({ categories, headlines }) {
	useEffect(_ => {
		if (!sessionStorage.getItem('noticeSeen')) {
			alert(
				'NOTICE:\n\nThis site is an imitation of that of the university newspaper at the University of California, Santa Barbara - the Daily Nexus - and exists solely to demonstrate the abilities of the creator with regard to software development. Express written permission is being sought to host this mock site during the interview process and the site will be removed thereafter. Please support the Daily Nexus and the creators of the original site by visiting www.dailynexus.com.'
			);
			sessionStorage.setItem('noticeSeen', true);
		}
	}, []);

	return (
		<>
			<Layout>
				<div className="home">
					<Link href="/articles/1843">
						<a className="banner">
							<span>
								LIVE: Updates on Coronavirus in Santa Barbara
								County, on UCSB Operations
							</span>
							<span className="banner-read-more">
								click to read more
							</span>
						</a>
					</Link>
					<Headlines articles={headlines} />
					<div className="home-by-category"
						style={{
							fontSize: '1.5rem',
							fontWeight: 'bold',
						}}>
						By Category
					</div>
					<ul className="home-category-previews">
						{categories.map((category, i) => (
							<li key={uuid()}>
								<CategoryPreview category={category} />
							</li>
						))}
					</ul>
				</div>
			</Layout>
			<style jsx global>{`
				.home-category-previews {
					display: grid;
					row-gap: 4rem;
					column-gap: 0.5rem;
				}

				.banner {
					display: flex;
					flex-direction: column;
					padding: 0.75rem;
					font-size: 2rem;
					color: white;
					background-color: var(--theme-blue);
					text-align: center;
					margin-bottom: 0.5rem;
					margin-right: 0.5rem;
				}

				.banner-read-more {
					font-size: 1.5rem;
					margin-top: 2px;
				}
			`}</style>
		</>
	);
}

export async function getStaticProps() {
	let [headlineIDs] = await queryDB(
			"SELECT articles FROM categories WHERE title = 'Headlines'"
		),
		headlines = await queryDB('SELECT * FROM articles WHERE id = ANY($1)', [
			headlineIDs.articles,
		]);

	let categories = [
			'Artsweek',
			'Multimedia',
			'News',
			'Nexustentialism',
			'On the Menu',
			'Opinion',
			'Science & Tech',
			'Sports',
		],
		articles;
	for (let i = 0; i < categories.length; i++) {
		articles = await queryDB(
			`SELECT * FROM articles WHERE category = '${categories[i]}' ORDER BY publish_date DESC FETCH FIRST 3 ROWS ONLY`
		);

		categories.splice(i, 1, {
			title: categories[i],
			articles
		});
	}

	return { props: JSON.parse(JSON.stringify({ categories, headlines })) };
}

export default App;
