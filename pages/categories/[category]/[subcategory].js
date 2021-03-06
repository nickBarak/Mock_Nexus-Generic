import { queryDB } from '../../../db';
import ArticleDisplay from '../../../components/ArticleDisplay';
import Layout from '../../../layouts';
import { convertToPath, convertFromPath } from '../../../Functions';

export async function getStaticPaths() {
	let categories = await queryDB(
			"SELECT title, subcategories FROM categories WHERE title <> 'Labyrinth' AND title <> 'Headlines'"
		),
		/* Generates path for all subcategories of all categories */
		paths = categories.reduce(
			(acc, category) => [
				...acc,
				...Object.keys(category.subcategories).map(subcategory => ({
					params: {
						category: convertToPath(category.title),
						subcategory: convertToPath(subcategory),
					},
				})),
			],
			[]
		);

	return { paths, fallback: false };
}

export async function getStaticProps({ params: { category, subcategory } }) {
	let [
			subcategories,
		] = await queryDB(
			'SELECT subcategories FROM categories WHERE title = $1',
			[convertFromPath(category)]
		),
		articles = await queryDB(
			'SELECT * FROM articles WHERE id = ANY($1) ORDER BY publish_date DESC FETCH FIRST 15 ROWS ONLY',
			[subcategories.subcategories[convertFromPath(subcategory)]]
		);

	return {
		props: JSON.parse(
			JSON.stringify({
				heading: convertFromPath(subcategory),
				articles,
				footerData: {
					page: 1,
					route: '/categories/' + category + '/' + subcategory,
					highestPage: Math.ceil(
						subcategories.subcategories[
							convertFromPath(subcategory)
						].length / 15
					),
				},
			})
		),
	};
}

/* Very similar to /categories/[category]/[subcategory] and /authors/[id] routes */
/* Shows previews for all articles in a subcategory by most recent (15 per page) */
function Subcategory({ heading, articles, footerData }) {
	return (
		<Layout footerData={footerData}>
			<ArticleDisplay
				type={'subcategory'}
				heading={heading}
				articles={articles}
				page={footerData.page}
			/>
		</Layout>
	);
}

export default Subcategory;
