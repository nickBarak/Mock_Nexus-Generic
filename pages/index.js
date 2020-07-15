import Headlines from '../components/Headlines';
import CategoryPreview from '../components/CategoryPreview';
import { queryDB } from '../db';
import Layout from '../layouts';

function App({ categories, headlines }) {
    return (
        <div className="home">
            <Headlines articles={headlines} />
            <ul className="home-category-previews">
                {categories.map((category, i) =>
                    <li key={i}>
                        <CategoryPreview category={category} />
                    </li>
                )}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    let res = await queryDB("SELECT * FROM categories WHERE title <> 'Headlines'"),
        categories = await res.json(),
        res = await queryDB("SELECT * FROM categories WHERE title = 'Headlines'"),
        headlines = res.json();

    return { props: { categories, headlines } }
}

export default <Layout><App /></Layout>