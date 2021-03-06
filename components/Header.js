import Nav from './Nav';
import MobileNav from './MobileNav';
import Link from 'next/link';
import { useState } from 'react';

function Header() {
	const [scrollY, setScrollY] = useState(0);

	return (
		<>
			<div className="header">
				<div className="full-logo">
					<Link href="/">
						<a>
							MOCK{' '}
							<img
								className="logo"
								src="/img/nexus-logo.png"
								alt="logo"
							/>{' '}
							NEXUS
						</a>
					</Link>
				</div>
				<div className="under-logo">
					<span>
						{new Date().toLocaleDateString('default', {
							weekday: 'long',
							month: 'long',
							year: 'numeric',
							day: 'numeric',
						})}
					</span>
					<div>UNIVERSITY OF CALIFORNIA, SANTA BARBARA</div>
					<span>
						<Link href="https://facebook.com/dailynexus">
							<a target="_blank" rel="noreferrer noopener">
								<i className="fab fa-facebook-square"></i>
							</a>
						</Link>
						<Link href="https://twitter.com/dailynexus">
							<a target="_blank" rel="noreferrer noopener">
								<i className="fab fa-twitter"></i>
							</a>
						</Link>
						<Link href="https://instagram.com/dailynexus">
							<a target="_blank" rel="noreferrer noopener">
								<i className="fab fa-instagram"></i>
							</a>
						</Link>
					</span>
				</div>
				<Nav />
			</div>

			<div className="header-mobile">
				<MobileNav scrollY={scrollY} />
				<span className="full-logo">
					<Link href="/">
						<a>
							MOCK
							<img
								className="logo"
								src="/img/nexus-logo.png"
								alt="logo"
							/>
							NEXUS
						</a>
					</Link>
				</span>
				<span className="hamburger-nav">
					<span
						style={{
							position: 'absolute',
							bottom: '-12px',
							left: 0,
							height: '28px',
							width: '32px',
							cursor: 'pointer',
						}}
						onClick={_ => {
							setScrollY(window.scrollY);
							window.scrollTo(0, 0);
							document.getElementsByClassName(
								'header-mobile'
							)[0].style.position = 'absolute';
							document.getElementsByClassName(
								'nav-mobile'
							)[0].style.transform = 'translateX(0)';
							document.getElementById(
								'__next'
							).children[2].children[0].style.display = 'none';
						}}
					/>
				</span>
			</div>

			<style jsx>{`
				* {
					font-family: Lato, sans-serif;
				}

				.logo {
					width: 5.5rem;
					height: 6.5rem;
				}

				.full-logo {
					text-align: center;
				}

				.full-logo a {
					font-size: 4.5rem;
					font-family: Times New Roman, Georgia, Serif;
					color: black;
				}

				.under-logo {
					position: relative;
					text-align: center;
					font-size: 0.825rem;
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
					margin-left: 0.5rem;
					color: gray;
					transition: color 200ms ease-in;
					cursor: pointer;
				}

				i:hover {
					color: black;
				}

				.header-mobile {
					width: calc(100% + 2rem);
					transform: translateX(-1rem);
					border-bottom: 1px solid black;
					justify-content: space-around;
					align-items: center;
					position: sticky;
					position: -webkit-sticky;
					background-color: white;
					top: 0;
					z-index: 50;
					margin-bottom: 0.75rem;
					padding: 0 0.45rem;
				}

				.header-mobile .full-logo {
					width: 80%;
					text-align: left;
					display: flex;
					align-items: flex-start;
				}

				.header-mobile .full-logo a {
					font-size: 1.75rem;
					display: flex;
					align-items: center;
					justify-content: space-between;
					gap: 0 0.55rem;
					margin-top: 0.65rem;
				}

				.header-mobile .logo {
					width: 2.5rem;
					height: 3rem;
					transform: translateY(-.3rem);
				}

				.hamburger-nav {
					height: 3px;
					width: 27px;
					border-radius: 15px;
					background-color: black;
					position: relative;
				}

				.hamburger-nav::before,
				.hamburger-nav::after {
					content: '';
					width: 100%;
					border-radius: 15px;
					height: 3px;
					background-color: black;
					position: absolute;
				}

				.hamburger-nav::before {
					top: -8px;
				}

				.hamburger-nav::after {
					bottom: -8px;
					left: 0;
				}
			`}</style>
		</>
	);
}

export default Header;
