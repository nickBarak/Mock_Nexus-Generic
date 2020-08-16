import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Head from 'next/head';

function Layout({ footerData, children }) {
    const [showBottomAd, setShowBottomAd] = useState(true);

    function updateBottomAd() {
        document.getElementById('__next').children[2].children[0].style.display = showBottomAd ? 'flex' : 'none';
    }

    /* Bottom ad set to display: none when overlapping footer */
    function toggleShowBottomAdListener() {
        setShowBottomAd(!showBottomAd);
        window.removeEventListener('scroll', updateBottomAd, false);
        window.addEventListener('scroll', updateBottomAd, false);
    }
    
    /* Bottom ad only appears after scrolling */
    useEffect(_=> toggleShowBottomAdListener(), []);

    return (<>
        <Head>
            <script src="https://kit.fontawesome.com/7cab195da1.js" crossOrigin="anonymous"></script>
            <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"></link>
            {/* <link rel="shortcut icon" href="/nexus-favicon.webp"></link> */}
            <title>Mock Nexus</title>
        </Head>
        <div style={{ backgroundColor: '#444', color: '#fff', height: '6rem', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
            {/* v Span won't show if class or id attached for unknown reason v */}
            <span style={{ border: '2px dotted white', width: '45rem', height: '5.35rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: 'none' }}>
                <span>Ad Space</span>
            </span>
        </div>
        <div className="main">
            <Header />
            {/* Flexible styles to children div to fill page */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: 'calc(100% - 18.75rem)' }}>{children}</div>
                <div style={{  width: '18.25rem' }}><Sidebar /></div>
            </div>
            {/* Bottom ad hidden if overlapping the footer */}
            <Footer footerData={footerData} toggleShowBottomAdListener={toggleShowBottomAdListener} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* v Div won't show if class or id attached for unknown reason v */}
            <div style={{ backgroundColor: '#444', color: '#fff', height: '7rem', justifyContent: 'center', alignItems: 'center', position: 'fixed', bottom: 0, width: '45rem', zIndex: 10, display: 'none' }}>
                <span>Ad Space</span>
                <button className="bottom-ad-button" onClick={e => { e.target.parentElement.parentElement.style.display = 'none' }}>x</button>
            </div>
        </div>

        <style jsx>{`            
            * {
                font-family: Lato, sans-serif;
            }

           .main {
               margin: 0 1rem 1rem 1rem;
           }

           .bottom-ad-button {
               background-color: coral;
               cursor: pointer;
               border: 1px solid white;
               color: white;
               font-size: .75rem;
               padding: 0 .25rem;
               position: absolute;
               top: 5px;
               right: 5px;
           }
        `}</style>
    </>)
}

export default Layout
