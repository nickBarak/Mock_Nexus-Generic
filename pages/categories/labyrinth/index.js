import { queryDB } from '../../../db';
import ArticlePreview from '../../../components/ArticlePreview';
import Link from 'next/link';
import Footer from '../../../components/Footer';
import Head from 'next/head';

export async function getStaticProps() {
    let [articleIDs] = await queryDB("SELECT articles FROM categories WHERE title = 'Labyrinth'"),
        articles = await queryDB('SELECT * FROM articles WHERE id = ANY($1) ORDER BY publish_date DESC FETCH FIRST 11 ROWS ONLY', [articleIDs.articles]);

    return {
        props: JSON.parse(JSON.stringify({ articles, footerData: {
            page: 1,
            highestPage: Math.ceil(articleIDs.articles.length / 11),
            route: '/categories/labyrinth'
        } }))
    }
}

function Labyrinth({ articles, footerData }) {
    return (<>
    <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"></link>
        <link rel="shortcut icon" href="/favicon.ico"></link>
        <title>Mock Nexus</title>
    </Head>
    <img src="https://dailynexus.com/wp-content/themes/dailynexus/graphics/labyrinthmasthead.png" alt="labyrinth" style={{ width: '100%', height: '20rem', objectFit: 'fill' }} />
    <div className="labyrinth-nav" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1.25rem 1.25rem 1.25rem', backgroundColor: 'beige', position: 'relative' }}>
        <span>
            <Link href="/"><a style={{ color: 'black', cursor: 'pointer' }}>Home</a></Link>
        </span>
        <span>
            <Link href="https://dailynexus.com/2018-04-25/resolutions-on-the-table/"><a style={{ color: 'black', cursor: 'pointer' }}>A.S. Senate Bill Tracker</a></Link>
            <Link href="/about"><a style={{ color: 'black', marginLeft: '3rem', cursor: 'pointer' }}>About</a></Link>
        </span>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul style={{ width: '60%' }}>
            {articles.slice(0, 11).map((article, i) =>
                <li key={i}><ArticlePreview labyrinth article={article} imageLeft /></li>
            )}
        </ul>
    </div>
    <Footer footerData={footerData} />

    <style jsx>{`
        .labyrinth-nav::before {
            content: '';
            background-color: beige;
            height: 5px;
            width: 100%;
            position: absolute;
            top: -5px;
            left: 0;
        }
    `}</style>
</>)
}

export default Labyrinth