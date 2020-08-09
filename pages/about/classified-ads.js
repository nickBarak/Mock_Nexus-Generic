import Layout from '../../layouts';
import About from '../../components/About';

function ClassifiedAds() {
    return (
    <Layout>
        <About heading="Classified Ads">
            <div id="Partner_API_CampusAve" partnerid="24" partnerdomain="https://dailynexus.campusave.com/">
            <table id="campusave-api-main-container" width="590" cellspacing="0" cellpadding="0" border="0">
            <tbody><tr>
            <td valign="top">

            <div className="header">
            <div className="top-header-v3-inner">
          
            <div className="top-mobile mobile_version clear">
                <div className="campus-user-login-info float_r"> <nobr><a className="header-link" href="javascript:;" onClick="showLoginDialog();return false;">Classifieds Login</a></nobr></div>
            </div>
          
            <div className="login-block-top campus-phone-big">
                <form className="form-post-btn" action="https://dailynexus.campusave.com/post_ads.htm" method="GET">
                    <input type="submit" value="Post Classifieds" className="btn btn-orange campus-post-ads-button campus-post-ads-button-online-print" options="login-required" onClick="return CampusQuickPostAds(this,event);"/>
                <input type="hidden" name="verification" value="1"/></form>
                
            </div>

            <div className="clear login-info">
                <div className="campus-user-login-info float_r"> <nobr><a className="header-link" href="javascript:;" onClick="showLoginDialog();return false;">Classifieds Login</a></nobr></div>
            </div>

            <div className="main-title title-block">
                <h1>UCSB Classifieds</h1>
            </div>
            </div>     

            <div style={{width:'590px'}} className="inner-table-api">

            <div className="main_CampusAve_api clear">
            <div className="home_center_column domain" id="campus-center-column">
        
            <div id="campus-ave-api-content">
                <div className="campus-view-index-categories-new"></div>
            
                <div className="hero">
                <div className="hero-inner centerContent">
                <h1><span>Welcome to The Daily Nexus Classifieds!</span></h1>
                <p></p>

                <form id="search-form" className="search" name="search" method="GET" action="https://dailynexus.campusave.com/search.htm" onSubmit="CampusAveStartShortSearch(event,this);">
                    <div className="input-wrap">
                        <span id="location-error"></span>
                        <input name="s" id="search_input" className="input location_input" placeholder="Search The Daily Nexus Marketplace" value="" autoComplete="off" type="text"/>
                        <span className="s_preload"></span>
                        <button id="search-submit" className="btn submit button" onClick="if(!document.getElementById('search_input').value) return false;CampusAveSubmitMainSearchForm(this.form,'search.htm');return false;" name="search-submit" type="submit"><i className="i-search"></i><i className="text-search">Search</i></button>
                        <div className="clear"></div>
                    </div>
                    <div className="location_container" id="search_container" style={{display:'none'}}></div>
                <input type="hidden" name="verification" value="1"/></form>
                </div>
                </div>

                <div className="home_center_column center_column_school clear">
                <div className="campus-view-index-category" style={{backgroundImage: 'url(https://dailynexus.campusave.com/images/v4/dom-cat-housing.jpg)'}}><img className="campus-view-index-category-img" src="https://dailynexus.campusave.com/images/v4/ico-housing.png"/><a className="campus-view-index-category-title" href="https://dailynexus.campusave.com/housing/"><h2>Housing (51)</h2></a><br/>
                    <ul className="campus-view-index-category-links">
                        <li><a href="https://dailynexus.campusave.com/housing/apartments-amp-houses-6645/"><h3>apartments &amp; houses</h3></a></li>
                        <li><a href="https://dailynexus.campusave.com/housing/roommates-11/"><h3>roommates</h3></a></li>
                        <li><a href="https://dailynexus.campusave.com/housing/sublets-2347/"><h3>sublets</h3></a></li>
                        <li><a href="https://dailynexus.campusave.com/services/storage-6353/"><h3>storage</h3></a></li>
                        <li><a href="https://dailynexus.campusave.com/housing/moving/"><h3>moving</h3></a></li>
                    </ul><a href="https://dailynexus.campusave.com/housing/" className="campus-view-more-link">Search Housing » </a></div><div className="campus-view-index-category" style={{backgroundImage: 'url(https://dailynexus.campusave.com/images/v4/dom-cat-jobs.jpg)'}}><img className="campus-view-index-category-img" src="https://dailynexus.campusave.com/images/v4/ico-jobs.png"/><a className="campus-view-index-category-title" href="https://dailynexus.campusave.com/jobs/"><h2>Jobs (3,707)</h2></a><br/>
                <ul className="campus-view-index-category-links">
                    <li><a href="https://dailynexus.campusave.com/jobs/part-time-jobs-67/"><h3>part-time jobs</h3></a></li>
                    <li><a href="https://dailynexus.campusave.com/jobs/full-time-jobs-6643/"><h3>full-time jobs</h3></a></li>
                    <li><a href="https://dailynexus.campusave.com/jobs/internships-62/"><h3>internships</h3></a></li>
                    <li><a href="https://dailynexus.campusave.com/jobs/babysitting-jobs-55/"><h3>babysitting jobs</h3></a></li>
                    <li><a href="https://dailynexus.campusave.com/jobs/tutoring-jobs-6644/"><h3>tutoring jobs</h3></a></li>
                </ul><a href="https://dailynexus.campusave.com/jobs/" className="campus-view-more-link">Search Jobs » </a></div><div className="campus-view-index-category" style={{backgroundImage: 'url(https://dailynexus.campusave.com/images/v4/dom-cat-sale.jpg)'}}><img className="campus-view-index-category-img" src="https://dailynexus.campusave.com/images/v4/ico-sale.png"/><a className="campus-view-index-category-title" href="https://dailynexus.campusave.com/for-sale/"><h2>For Sale (507)</h2></a><br/>
                <ul className="campus-view-index-category-links">
                    <li><a href="https://dailynexus.campusave.com/for-sale/antiques-2268/"><h3>antiques</h3></a></li><li><a href="https://dailynexus.campusave.com/for-sale/appliances-2269/"><h3>appliances</h3></a></li><li><a href="https://dailynexus.campusave.com/for-sale/art--music-25/"><h3>art / music</h3></a></li><li><a href="https://dailynexus.campusave.com/for-sale/auto-28/"><h3>auto</h3></a></li><li><a href="https://dailynexus.campusave.com/for-sale/bikes-26/"><h3>bikes</h3></a></li>
                </ul><a href="https://dailynexus.campusave.com/for-sale/" className="campus-view-more-link">Search For Sale » </a></div><div className="campus-view-index-category" style={{backgroundImage: 'url(https://dailynexus.campusave.com/images/v4/dom-cat-services.jpg)'}}><img className="campus-view-index-category-img" src="https://dailynexus.campusave.com/images/v4/ico-services.png"/><a className="campus-view-index-category-title" href="https://dailynexus.campusave.com/services/"><h2>Services</h2></a><br/>
                <ul className="campus-view-index-category-links">
                    <li><a href="https://dailynexus.campusave.com/services/automotive-82/"><h3>automotive</h3></a></li><li><a href="https://dailynexus.campusave.com/services/cleaning-83/"><h3>cleaning</h3></a></li><li><a href="https://dailynexus.campusave.com/services/computers-42/"><h3>computers</h3></a></li><li><a href="https://dailynexus.campusave.com/services/daycare-84/"><h3>daycare</h3></a></li><li><a href="https://dailynexus.campusave.com/student-travel/"><h3>student travel</h3></a></li>
                </ul><a href="https://dailynexus.campusave.com/services/" className="campus-view-more-link">Search Services » </a></div><div className="campus-view-index-category" style={{backgroundImage: 'url(https://dailynexus.campusave.com/images/v4/dom-cat-town.jpg)'}}><img className="campus-view-index-category-img" src="https://dailynexus.campusave.com/images/v4/ico-town.png"/><a className="campus-view-index-category-title" href="https://dailynexus.campusave.com/around-town/"><h2>Around Town (752)</h2></a><br/>
                <ul className="campus-view-index-category-links">
                    <li><a href="https://dailynexus.campusave.com/around-town/spring-break-22/"><h3>spring break</h3></a></li><li><a href="https://dailynexus.campusave.com/around-town/announcements-1629/"><h3>announcements</h3></a></li><li><a href="https://dailynexus.campusave.com/around-town/auctions-1630/"><h3>auctions</h3></a></li><li><a href="https://dailynexus.campusave.com/around-town/carpools-15/"><h3>carpools</h3></a></li><li><a href="https://dailynexus.campusave.com/around-town/clubs--orgs-16/"><h3>clubs / orgs</h3></a></li>
                </ul><a href="https://dailynexus.campusave.com/around-town/" className="campus-view-more-link">Search Around Town » </a></div><div className="campus-view-index-category" style={{backgroundImage: 'url(https://dailynexus.campusave.com/images/v4/dom-cat-ratings.jpg)'}}><img className="campus-view-index-category-img" src="https://dailynexus.campusave.com/images/v4/ico-ratings.png"/><a className="campus-view-index-category-title" href="https://dailynexus.campusave.com/college-ratings/"><h2>College Ratings (4,404)</h2></a><br/>
                    <ul className="campus-view-index-category-links">
                        <li><a href="https://dailynexus.campusave.com/professors/"><h3>Professor ratings</h3></a></li>
                        <li><a href="https://dailynexus.campusave.com/courses/"><h3>Course ratings</h3></a></li>
                        <li><a href="https://dailynexus.campusave.com/businesses/"><h3>Business ratings</h3></a></li>
                    </ul>
                    <a href="https://dailynexus.campusave.com/college-ratings/" className="campus-view-more-link">Search College Ratings » </a></div><div className="campus-view-index-category" style={{backgroundImage: 'url(https://dailynexus.campusave.com/images/v4/dom-cat-press.jpg)'}}><img className="campus-view-index-category-img" src="https://dailynexus.campusave.com/images/v4/ico-press.png"/><a className="campus-view-index-category-title" href="https://dailynexus.campusave.com/around-town/press-releases-6163/"><h2>Press Releases (393)</h2></a><br/><p><span>Monday, October 05</span><br/>Amazon is awarding Amazon Student <br/>members with $250,000 in...</p><a href="https://dailynexus.campusave.com/around-town/press-releases-6163/" className="campus-view-more-link">Search Press Releases » </a></div>
                </div>  

                <div className="home_center_column center_column_school clear">

                </div>

                    </div>
                </div>
                </div>
                </div>

                <div className="footer-api">

            <a href="https://dailynexus.campusave.com/contactus.htm" className="campus-phone-big">Contact Us</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="https://dailynexus.campusave.com/faq.htm" className="campus-phone-big">FAQs&nbsp;/&nbsp;Help</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="https://dailynexus.campusave.com/policy.htm" className="campus-phone-big">Privacy Policy</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="https://dailynexus.campusave.com/terms.htm" className="campus-phone-big">Terms Of Use</a>&nbsp;&nbsp;
                </div>
                </div>

                </td></tr></tbody></table>
            </div>

            <p><script type="text/javascript" src="https://dailynexus.campusave.com/includes/api.js"></script></p>
            <div id="Partner_API_CampusAve_BI"><a href="https://ucsb.uloop.com" target="_blank" rel="noopener noreferrer"><img src="https://i2.wp.com/dailynexus.campusave.com/images/powered-by-uloop3.gif?w=888&amp;ssl=1" alt="UCSB Classifieds in Santa Barbara, California" title="UCSB Classifieds in Santa Barbara, California" width="589" height="69"/></a></div>
        </About>
    </Layout>
    )
}

export default ClassifiedAds