import Nav from './Nav';
import Link from 'next/link';

function Header() {
    return (<>
        <div className="header">
            <div className="full-logo"><Link href="/"><a>MOCK <img className="logo" src="/img/nexus-logo.png" alt="logo" /> NEXUS </a></Link></div>
            <div className="under-logo">
                <span>{new Date().toLocaleDateString('default', { weekday: 'long', month: 'long', year: 'numeric', day: 'numeric' })}</span>
                <div>UNIVERSITY OF CALIFORNIA, SANTA BARBARA</div>
                <span>
                    <Link href="https://facebook.com/dailynexus"><a target="_blank" rel="noreferrer noopener"><i className="fab fa-facebook-square"></i></a></Link>
                    <Link href="https://twitter.com/dailynexus"><a target="_blank" rel="noreferrer noopener"><i className="fab fa-twitter"></i></a></Link>
                    <Link href="https://instagram.com/dailynexus"><a target="_blank" rel="noreferrer noopener"><i className="fab fa-instagram"></i></a></Link>
                </span>
            </div>
            <Nav />
        </div>
        <style jsx>{`
            * {
                font-family: Lato, sans-serif;
            }

            .logo {
                width: 5.5rem;
                height: 6.5rem;
                transform: translateY(1.55rem);
            }

            .full-logo {
                text-align: center;
            }

            .full-logo a {
                font-size: 4.5rem;
                font-family: Times New Roman;
                color: black;
            }

            .under-logo {
                position: relative;
                text-align: center;
                font-size: .825rem;
                padding: 4px;
            }

            .under-logo span {
                position: absolute;
            }

            .under-logo span:nth-child(1) {
                left: 5px;
            }

            .under-logo span:nth-child(3) {
                right: 8px;
                top: 4px;
            }

            .under-logo::before,
            .under-logo::after {
                width: 100%;
                content: '';
                position: absolute;
                left: 0;
            }

            .under-logo::before {
                background-color: var(--theme-blue);
                height: 1px;
                top: 0;
            }

            .under-logo::after {
                height: 3px;
                bottom: 0;
                background-color: var(--theme-gold); 
            }

            i {
                font-size: 1rem;
                margin-left: .5rem;
                color: gray;
                transition: color 200ms ease-in;
                cursor: pointer;
            }

            i:hover {
                color: black;
            }
        `}</style>
    </>)
}

export default Header