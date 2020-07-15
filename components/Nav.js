import Link from 'next/link';
import { useContext } from 'react';
import { CategoryContext } from '../store/Context';

function Nav() {
    const categories = useContext(CategoryContext);
    
    return (
        <ul>
            {categories.map((category, i) =>
                <li key={i}>
                    <Link to={`/categories/${category.title}`}>{category.title}</Link>
                </li>)
            }
            <li><icon src="fa-search" /></li>
        </ul>
    )
}

export default Nav
