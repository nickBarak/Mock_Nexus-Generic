import Link from 'next/link';

function Footer({ footerData }) {
    if (footerData) {
        var { page, highestPage, route } = footerData,
            pageNav = [];
        for (let i = page > 5 ? page - 4 : 1; ((i <= page + 4) && i <= highestPage); i++) {
            pageNav.push(i);
        }
    }
    return (
        <div className="footer">
            <ul>
                <li>
                    <ul>
                    {page > 1 && <>
                        <li style={{ alignSelf: 'center', paddingTop: '.1rem' }}><Link href={route}><a style={{ fontSize: '1rem' }}>« First</a></Link></li>
                        <li style={{ alignSelf: 'center', paddingTop: '.1rem' }}><Link href={route + `/page/${page-1}`}><a style={{ fontSize: '1rem', margin: '0 .25rem 0 .5rem' }}>‹ Prev</a></Link></li>
                    </>}
                    </ul>
                </li>
                
                <li>
                    <ul>
                        {footerData &&
                        pageNav.map((pageNum, i) => <li key={i}><Link href={route + ((pageNum === 1) ? '' : `/page/${pageNum}`)}><a style={{ margin: '0 .15rem' }}>{pageNum === page ? <strong style={{ color: 'black', fontSize: '1.3rem' }}>{pageNum}</strong> : pageNum}</a></Link></li>)}
                    </ul>
                </li>
                
                <li>
                    <ul>
                        {page < highestPage && <>
                            <li style={{ alignSelf: 'center', paddingTop: '.1rem' }}><Link href={route + `/page/${page+1}`}><a style={{ fontSize: '1rem', margin: '0 .5rem 0 .25rem' }}>Next ›</a></Link></li>
                            <li style={{ alignSelf: 'center', paddingTop: '.1rem' }}><Link href={route + `/page/${highestPage}`}><a style={{ fontSize: '1rem' }}>Last »</a></Link></li>
                        </>}
                    </ul>
                </li>
            </ul>
            <ul>
                {[
                    ['Home', '/'], ['About', '/about'], ['Join Us', '/about/join'], ['Staff/Contact', '/about/staff-contact'], ['Legal Notices', '/about/legal-notices'], ['FAQ', '/about/faq'], ['Advertising', '/about/advertising']
                ].map(([title, route], i) => <li key={i}><Link href={route}><a>{title}</a></Link></li>)
                }
            </ul>
            <img src="https://pixel.wp.com/g.gif?v=ext&j=1%3A8.1.1&blog=32043259&post=0&tz=-7&srv=dailynexus.com&host=dailynexus.com&ref=https%3A%2F%2Fdailynexus.com%2Faboutcontact%2F&fcp=0&rand=0.4052728025036777" alt="smile!" />

            <style jsx>{`
                .footer {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-top: 1.5rem;
                }
                
                a {
                    color: black;
                }

                ul {
                    display: flex;
                }

                ul:nth-child(1) li ul {
                    display: flex;
                    align-items: flex-end;
                }

                ul:nth-child(1) {
                    display: flex;
                }

                ul:nth-child(1) a {
                    color: var(--link-hover);
                    font-size: 1.1rem;
                }

                ul:nth-child(2) {
                    border: 1px solid #ddd;
                    padding: .5rem .075rem;
                    display: flex;
                    justify-content: space-around;
                    margin: .75rem 0 .85rem 0;
                }

                ul:nth-child(2) li {
                    margin: 0 1.25rem;
                    font-size: 1.2rem;
                }
            `}</style>
        </div>
    )
}

export default Footer
