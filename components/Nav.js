import Link from 'next/link';
import { convertToPath, convertDate } from '../Functions';
import 'isomorphic-unfetch';
import { useState } from 'react';

const categories = [{"title":"Artsweek","subcategories":["Feature","Film and TV","Literature","Music","Performing Art","Previews: What's Going On","Visual Art"]},{"title":"Labyrinth","link":"/categories/labyrinth"},{"title":"Multimedia","subcategories":["Comics","Photo","Video"]},{"title":"News","subcategories":["Campus","County","Crime","Feature","Isla Vista","Student Gov","UC News","UCSB COLA Movement"]},{"title":"Nexustentialism","link":"/categories/nexustentialism"},{"title":"On the Menu","subcategories":["Coffee Column","First Bites","Meal Prep Mondays","On the Road","Recipes","The Beet"]},{"title":"Opinion","subcategories":["Argument in the Office","Ask AJ","Flesh Prison","Global Gauchos","Hyphenated American","Letters to the Editor","Living","Politics","Therapeutic Thoughts","Virtual Reality","Wednesday Hump"]},{"title":"Science & Tech","subcategories":["Health & Wellness"]},{"title":"Sports","subcategories":["Baseball","Basketball","Columns/Features","Cross Country","Golf","Soccer","Softball",/*"Sports Blogs",*/"Swim and Dive","Tennis","Track and Field","Volleyball","Water Polo"]}];

function Nav() {
    const [searchResults, setSearchResults] = useState([[], []]);
    const [searchError, setSearchError] = useState(null);
    const [queryTime, setQueryTime] = useState(0);
    const [sortBy, setSortBy] = useState(0);
    const [loadingSearchResults, setLoadingSearchResults] = useState(false);
    const [modalPage, setModalPage] = useState(1);
    const [modalPageSet, setModalPageSet] = useState(0);
    const timeouts = [];
    
    return (<div>
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
                                <li key={j}><Link href={category.title !== 'About' ? `/categories/${convertToPath(category.title)}/${convertToPath(subcategory)}` : `/about/${Object.values(subcategory)[0]}`}><a className="subcategory-link">{category.title !== 'About' ? subcategory : Object.keys(subcategory)[0]}</a></Link></li>)}
                        </ul>
                        </>)
                        : <Link href={category.link}><a>{category.title}</a></Link>
                    }
                </li>)
            }
            <li key="-2" style={{ position: 'relative', textTransform: 'none' }}>
                <i className="search fas fa-search" onClick={e => {
                    let { style } = e.currentTarget.parentElement.children[1];
                    style.display = (style.display === 'none') ? 'block' : 'none'
                }}></i>
                <input type="text" placeholder="Looking for something?" style={{ display: 'none', position: 'absolute', right: '150%', top: '-15%', padding: '.2rem .4rem' }} onKeyDown={e => {
                    e.persist();
                    e.keyCode === 13 && (_=> {
                        let now = Date.now();
                        setLoadingSearchResults(true);
                        fetch('http://localhost:3000/api/search?value=' + e.target.value)
                            .then(res => res.json())
                            .then(rows =>
                                setSearchResults([
                                    rows,
                                    [...rows].sort(({publish_date: a}, {publish_date: b}) => new Date(b) - new Date(a))
                                ])
                                || setLoadingSearchResults(false)
                                || setQueryTime(((Date.now() - now) / 1000).toFixed(2))
                            )
                            .catch(e => console.log(e) || setSearchError('Error fetching results'));
                        let { style } = document.getElementsByClassName('search-results')[0];
                        document.getElementsByClassName('modal-open')[0].style.opacity = '.75';
                        document.getElementsByClassName('modal-open')[0].style.pointerEvents = 'auto';
                        document.body.style.overflow = 'hidden';
                        style.pointerEvents = 'auto';
                        style.opacity = 1;
                        e.target.value = '';
                    })();
                }}/>
            </li>
        </ul>

        <div className="search-results">
            <button className="search-results-button" onClick={e => {
                let { style } = document.getElementsByClassName('search-results')[0];
                style.opacity = 0;
                style.pointerEvents = 'none';
                document.getElementsByClassName('modal-open')[0].style.opacity = 0;
                document.getElementsByClassName('modal-open')[0].style.pointerEvents = 'none';
                document.body.style.overflow = 'visible';
                setSearchResults([[], []]);
                setSearchError(null);
                setModalPage(1);
                setModalPageSet(0);
                setSortBy(0);
                setQueryTime(0);
                e.target.parentElement.children[2].children[1].children[1].selectedIndex = 0;
            }}>x</button>
            <div style={{ color: 'red', fontWeight: 'bold', fontSize: '1.1rem' }}>{searchError}</div>
            <div className="search-results-header">
                <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '.85rem' }}>{!loadingSearchResults ? `${searchResults[0].length} result${searchResults[0].length === 1 ? '' : 's'} (${queryTime} second${queryTime === 1 ? '' : 's'})` : 'Loading articles...'}</span>
                <span>
                    <span style={{ fontSize: '.85rem', marginRight: '.25rem' }}>Sort by: </span>
                    <select onChange={e => console.log(e.target.selectedIndex) || setSortBy(e.target.selectedIndex)} style={{ fontFamily: 'Arial, sans-serif' }}>
                        <option key="0">Relevance</option>
                        <option key="1">Date</option>
                    </select>
                </span>
            </div>
            <ul style={{ position: 'relative', maxHeight: 'calc(100% - 2.25rem - 1.13px - 1.5rem - 2.25rem)', overflowY: 'auto' }}>
                {searchResults[sortBy].slice((modalPage-1)*10, modalPage*10).map((result, i) => 
                    <li key={i} style={{ marginBottom: '.5rem' }}>
                        <div style={{ width: '100%', textAlign: 'center' }}><Link href={'/articles/'+result.id}><a style={{ color: '#0000CC', fontSize: '1rem', fontFamily: 'Arial, sans-serif' }}>{result.title}</a></Link></div>
                        <div style={{ color: '#008000', fontSize: '13px', fontFamily: 'Arial, sans-serif', margin: '.2rem 0'}}>{`http://localhost:3000/articles/${result.id}`}</div>
                        <div style={{ display: 'flex' }}>
                            <Link href={`http://localhost:3000/articles/${result.id}`}><a><picture>
                                <source srcSet={result.mobile_thumbnail} />
                                <source srcSet={'/img/nexus-fallback.webp'} type="image/webp" />
                                <img alt="thumbnail"/>
                            </picture></a></Link>
                            <span style={{ fontSize: '13px', fontFamily: 'Arial, sans-serif', margin: '0 .5rem' }}>
                                <span style={{ fontSize: '13px', fontFamily: 'Arial, sans-serif' }}>{convertDate(result.publish_date)} ... </span>
                                {(result.description) && (result.description.slice(0, 300) + ((result.description.length > 300) ? '...' : ''))}
                            </span>
                        </div>
                    </li>)}
            </ul>
            <ul style={{ marginTop: '1.25rem', display: 'flex', width: '100%', overflowX: 'auto', fontFamily: 'Arial, sans-serif' }}>
                {(modalPageSet > 0) &&
                    <li key="-1" onClick={_=> setModalPageSet(modalPageSet-1)} onMouseOver={e => { e.target.style.textDecoration = 'underline' }} onMouseOut={e => { e.target.style.textDecoration = 'none' }} style={{ color: '#c0c0c0', margin: '0 .25rem', cursor: 'pointer', display: 'flex', alignItems: 'flex-end', fontFamily: 'Arial, sans-serif' }}>...</li>
                }
                {new Array(Math.min(25, Math.ceil(searchResults[0].length/10)-25*modalPageSet)).fill(true).map((_, i) => {
                    let page = modalPageSet*25+i+1;
                    return (
                        <li key={i} onClick={_=> setModalPage(page)} onMouseOver={e => { e.target.style.textDecoration = 'underline' }} onMouseOut={e => { e.target.style.textDecoration = 'none' }} style={{ color: modalPage === page ? '#666' : '#c0c0c0', margin: '0 .25rem', cursor: 'pointer', fontSize: modalPage === page ? '.95rem' : '.8rem', display: 'flex', alignItems: 'flex-end', fontFamily: 'Arial, sans-serif' }}>{page}</li>
                    )}
                )}
                {(Math.ceil(searchResults[0].length/10)-25*modalPageSet > 25) &&
                    <li key="25" onClick={_=> setModalPageSet(modalPageSet+1)} onMouseOver={e => { e.target.style.textDecoration = 'underline' }} onMouseOut={e => { e.target.style.textDecoration = 'none' }} style={{ color: '#c0c0c0', margin: '0 .25rem', cursor: 'pointer', display: 'flex', alignItems: 'flex-end', fontFamily: 'Arial, sans-serif' }}>...</li>
                }
            </ul>
        </div>

        <div className="modal-open"></div>

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

            .search-results {
                font-family: Arial, sans-serif;
                font-size: .8rem;
                width: 75vw;
                height: calc(100vh - 3rem - 7rem - 1.75rem);
                position: fixed;
                top: 3rem;
                left: 12.5vw;
                background-color: #fff;
                padding: 2.25rem 2.25rem .5rem 2.25rem;
                z-Index: 10;
                opacity: 0;
                pointer-events: none;
                transition: opacity 150ms ease-in;
                box-shadow: 0 0 6px 3px #ccc;
            }

            .search-results img {
                border: 1px solid #e2e2e2;
                width: 65px;
                height: 65px;
                object-fit: fill;
                cursor: pointer;
            }

            .search-results-button {
                background-color: coral;
                cursor: pointer;
                border: 1px solid #aaa;
                color: white;
                font-size: .75rem;
                padding: 0 .25rem;
                position: absolute;
                top: 5px;
                right: 5px;
            }

            .search-results select {
                background-color: whiteSmoke;
                background-image: linear-gradient(top, whiteSmoke, #f1f1f1);
                border: 1px solid rgba(0, 0, 0, 0.1);
                border-radius: 2px;
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
                color: #444;
                cursor: default;
                font-size: 11px;
                font-weight: bold;
                height: 27px;
                line-height: 27px;
                max-width: 90%;
                min-width: 54px;
                outline: 0;
                padding: 0 28px 0 6px;
                position: relative;
                text-align: center;
            }

            .search-results option {
                color: #777;
                font-family: Arial, sans-serif;
            }

            .modal-open {
                position: fixed;
                background-color: #fff;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                opacity: 0;
                pointer-events: none;
                z-index: 9;
                transition: opacity 150ms ease-in;
            }

            .search-results-header {
                position: relative;
                margin-bottom: 1.5rem;
                display: flex;
                justify-content: space-between;
                color: #676767;
                fontSize: 13px;
                padding: 4px;
            }

            .search-results-header::after {
                content: '';
                background-color: #e8e8e8;
                width: 100%;
                height: 1px;
                position: absolute;
                left: 0;
                bottom: -.7rem;
            }
        `}</style>
    </div>)
}

export default Nav
