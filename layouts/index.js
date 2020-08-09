import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useEffect } from 'react'
import Footer from '../components/Footer';
import Head from 'next/head';

function Layout({ footerData, children }) {
    
    useEffect(_=> {
        window.addEventListener('scroll', _=> { document.getElementById('__next').children[2].children[0].style.display = 'flex' }, false);
    }, []);

    return (<>
        <Head>
            <script src="https://kit.fontawesome.com/7cab195da1.js" crossOrigin="anonymous"></script>
            <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"></link>
        </Head>
        <div style={{ backgroundColor: '#444', color: '#fff', height: '6rem', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}><span style={{ border: '2px dotted white', width: '45rem', height: '5.35rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: 'none' }}>
            <span>Ad Space</span>
        </span></div>
        <div className="main">
            <Header />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: 'calc(100% - 18.75rem)' }}>{children}</div>
                <div style={{  width: '18.25rem' }}><Sidebar /></div>
            </div>
            <Footer footerData={footerData} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ backgroundColor: '#444', color: '#fff', height: '7rem', justifyContent: 'center', alignItems: 'center', position: 'fixed', bottom: 0, width: '45rem', zIndex: 3, display: 'none' }}>
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
