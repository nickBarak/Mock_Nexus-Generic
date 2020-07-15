import { queryDB } from '../../../db';
import ArticleDisplay from '../../../components/ArticleDisplay';

export async function getStaticProps({ params }) {
    let res = await queryDB('SELECT * FROM categories WHERE title = $1', [params.category]),
        category = res.json();

    return { props: { type: params.subcategory, category } }
}

export default ({ type, category }) => <ArticleDisplay type={type} category={category} />