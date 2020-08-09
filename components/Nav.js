import Link from 'next/link';
import { convertToPath } from '../Functions';

const categories = [{"title":"Artsweek","subcategories":["Feature","Film and TV","Literature","Music","Performing Art","Previews: What's Going On","Visual Art"]},{"title":"Labyrinth","link":"/categories/labyrinth"},{"title":"Multimedia","subcategories":["Comics","Photo","Video"]},{"title":"News","subcategories":["Campus","County","Crime","Feature","Isla Vista","Student Gov","UC News","UCSB COLA Movement"]},{"title":"Nexustentialism","subcategories":["Nexustentialism"]},{"title":"On the Menu","subcategories":["Coffee Column","First Bites","Meal Prep Mondays","On the Road","Recipes","The Beet"]},{"title":"Opinion","subcategories":["Argument in the Office","Ask AJ","Flesh Prison","Global Gauchos","Hyphenated American","Letters to the Editor","Living","Politics","Therapeutic Thoughts","Virtual Reality","Wednesday Hump"]},{"title":"Science & Tech","subcategories":["Health & Wellness"]},{"title":"Sports","subcategories":["Baseball","Basketball","Columns/Features","Cross Country","Golf","Soccer","Softball","Sports Blogs","Swim and Dive","Tennis","Track and Field","Volleyball","Water Polo"]}];

function Nav() {
    const timeouts = [];
    
    return (<>
        <ul className="nav">
            {[
                ...categories,
                {title: 'About', subcategories: [
                    {Advertising: 'advertising'},
                    {Classifieds: 'classified-ads'},
                    {Donate: 'donate'},
                    {FAQ: 'faq'},
                    {"Staff/Contact": 'staff-contact'}
                ]}
            ].map((category, i) =>
                <li key={i}>
                    {category.subcategories
                        ? (<>
                        <Link href={`/categories/${category.title.toLowerCase().replace(/ /g, '-')}`}><a onMouseOver={e => {
                            timeouts[i] && clearTimeout(timeouts[i]);
                            let { style } = e.currentTarget.parentElement.children[1];
                            style.opacity = 1;
                            style.pointerEvents = 'auto';
                        }} onMouseOut={e => {
                            let { style } = e.currentTarget.parentElement.children[1];
                            timeouts[i] = setTimeout(_=> {
                                style.opacity = 0;
                                style.pointerEvents = 'none';
                            }, 0);
                        }}>{category.title}</a></Link>
                        <ul className="nav-subcategories" onMouseMove={_=> timeouts[i] && clearTimeout(timeouts[i])} onMouseOut={e => {
                            let { style } = e.currentTarget;
                            timeouts[i] = setTimeout(_=> {
                                style.opacity = 0;
                                style.pointerEvents = 'none';
                            }, 0);
                        }}>
                            {category.subcategories.map((subcategory, j) =>
                                <li key={j}><Link href={category.title !== 'About' ? category.title === 'Nexustentialism' ? `/categories/nexustentialism` : `/categories/${convertToPath(category.title)}/${convertToPath(subcategory)}` : `/about/${category.subcategories[subcategory]}`}><a className="subcategory-link">{category.title !== 'About' ? subcategory : Object.keys(subcategory)[0]}</a></Link></li>)}
                        </ul>
                        </>)
                        : <Link href={category.link}><a>{category.title}</a></Link>
                    }
                </li>)
            }
            <li key="-2" style={{ position: 'relative' }}>
                <i className="search fas fa-search" onClick={e => {
                    let { style } = e.currentTarget.parentElement.children[1];
                    style.display = (style.display === 'none') ? 'block' : 'none'
                }}></i>
                <input type="text" placeholder="Looking for something?" style={{ display: 'none', position: 'absolute', right: '150%', top: '-15%', padding: '.2rem .4rem' }}/>
            </li>
        </ul>

        <style jsx>{`
            .nav {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                height: 3rem;
                text-transform: uppercase;
            }

            .nav li {
                position: relative;
            }

            .nav li:hover ul {
                max-height: 1000px;
            }

            a {
                color: black;
                font-family: Lato, sans-serif;
            }

            a:hover {
                color: var(--link-hover);
            }

            .nav-subcategories {
                padding: 1.25rem .6rem .5rem .6rem;
                font-weight: 300;
                background-color: #fff;
                opacity: 0;
                pointer-events: none;
                position: absolute;
                top: 85%;
                transition: opacity 250ms ease-in;
                font-size: 15px;
                z-index: 5;
            }

            .nav-subcategories li {
                margin-top: 7px;
                cursor: pointer;
            }

            .nav-subcategories li:nth-child(1) {
                margin-top: 0;
            }

            .nav-subcategories li:hover {
                color: var(--link-hover);
            }

            .subcategory-link {
                color: black;
            }

            .subcategory-link:hover {
                color: var(--link-hover);
            }

            .search {
                cursor: pointer;
            }
        `}</style>
    </>)
}

export default Nav
