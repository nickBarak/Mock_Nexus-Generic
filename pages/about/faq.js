import Layout from '../../layouts';
import Link from 'next/link';
import About from '../../components/About';

function FAQ() {
    return (
    <Layout>
        <About heading="FAQ">
            <ul>
                <li key="0">
                    <div style={{ fontWeight: 'bold', marginBottom: '.85rem' }}>
                        How often does the <span style={{ fontStyle: 'italic' }}>Daily Nexus</span> print?
                    </div>
                    <div>
                        The newspaper prints on Thursday, with online content produced Monday through Friday during the regular school year except on university holidays. Typically, only one or two issues are published during the summer session.
                    </div>
                </li>
                <li key="1">
                    <div style={{ fontWeight: 'bold', marginBottom: '.85rem' }}>
                        How do I join the <span style={{ fontStyle: 'italic' }}>Daily Nexus</span> staff?
                    </div>
                    <div>
                        The newspaper holds quarterly training sessions for those interested in joining the newspaper staff in the first few weeks of each quarter. No previous experience is required for most sections. After publishing a certain number of articles, which varies by section, a writer may be promoted to the position of staff writer at which point they will be paid per article.
                    </div>
                </li>
                <li key="2">
                    <div style={{ fontWeight: 'bold', marginBottom: '.85rem' }}>
                        Who is in charge of the <span style={{ fontStyle: 'italic' }}>Daily Nexus</span>?
                    </div>
                    <div>
                        The <span style={{ fontStyle: 'italic' }}>Daily Nexus</span> is an independent student-run publication. The editor-in-chief oversees the editorial content of the newspaper, while the managing editor oversees its fiscal operations.
                    </div>
                </li>
                <li key="3">
                    <div style={{ fontWeight: 'bold', marginBottom: '.85rem' }}>
                        Where does the <span style={{ fontStyle: 'italic' }}>Daily Nexus</span> receive its funding?
                    </div>
                    <div>
                        The <span style={{ fontStyle: 'italic' }}>Daily Nexus</span> receives about two thirds of its funds from advertising revenue. The other one third is derived from a quarterly lock-in fee, which is voted upon by students every two years.
                    </div>
                </li>
                <li key="4">
                    <div style={{ fontWeight: 'bold', marginBottom: '.85rem' }}>
                        How do I submit an opinion piece?
                    </div>
                    <div>
                        Opinion columns are 600 to 800 words long. The <span style={{ fontStyle: 'italic' }}>Daily Nexus</span> will not print responses to responses. For example, if someone writes a response to an opinion piece, a second party may not write another letter in response to that secondary piece. This is to prevent constant back and forth arguments between readers so that we may continue to publish fresh and timely material. Readers should submit their pieces to <span style={{ color: 'var(--link-hover)' }}>opinion@dailynexus.com</span>.
                    </div>
                </li>
                <li key="5">
                    <div style={{ fontWeight: 'bold', marginBottom: '.85rem' }}>
                        What is the editorial policy for the opinion section?
                    </div>
                    <div>
                        All submissions become property of the <span style={{ fontStyle: 'italic' }}>Daily Nexus</span> and cannot be printed in other publications without permission. Opinion pieces may be edited for length and clarity. This is to allow the maximum amount of opinion pieces as possible. Brevity is appreciated.
                        <br /><br />
                        The <span style={{ fontStyle: 'italic' }}>Daily Nexus</span> will not publish press releases or pieces that solely serve to advertise an event or organization. The opinion page is for opinions, not ads. Also, since our focus is localized, we will not accept submissions from those outside of the community. We accept submissions from all UCSB staff, students and alumni, as well as those from residents living in Isla Vista, Goleta or Santa Barbara.
                    </div>
                </li>
                <li key="6">
                    <div style={{ fontWeight: 'bold', marginBottom: '.85rem' }}>
                        What is the <span style={{ fontStyle: 'italic' }}>dailynexus.com</span> comment policy?
                    </div>
                    <div>
                        We encourage all of our readers to submit comments on our website. Comments made on <span style={{ fontStyle: 'italic' }}>dailynexus.com</span> are not pre-moderated, but can be removed if they violate the policy that follows. Any comment may be used in the print edition of the Nexus, and we ask that you keep your comments brief and on topic.
                        <br /><br />
                        We will delete comments that:
                        <ul style={{ margin: '1rem 0 1rem 2rem' }}>
                            <li key="1" style={{ listStyleType: 'disc', margin: 0 }}>attacks a named or identified person or group unreasonably.</li>
                            <li key="2" style={{ listStyleType: 'disc', margin: 0 }}>attacks or demeans one’s race, gender, religion, disability, ethnicity, sexual orientation or otherwise.</li>
                            <li key="3" style={{ listStyleType: 'disc', margin: 0 }}>threatens or encourages violence and/or illegal behavior.</li>
                            <li key="4" style={{ listStyleType: 'disc', margin: 0 }}>contains racial epithets, sexual explicitness or excessive obscenities.</li>
                            <li key="5" style={{ listStyleType: 'disc', margin: 0 }}>contains personal information.</li>
                            <li key="6" style={{ listStyleType: 'disc', margin: 0 }}>is completely off-topic or determined to be spam.</li>
                        </ul>
                        Comments may be removed or turned off for an article if there are concerns regarding an individual’s safety. As of May 2020, readers must provide their name and email address in order to post a comment.
                        <br /><br />
                        If you believe that your comment was deleted inappropriately, please email <span style={{ color: 'var(--link-hover)' }}>news@dailynexus.com.</span>
                    </div>
                </li>
                <li key="7">
                    <div style={{ fontWeight: 'bold', marginBottom: '.85rem' }}>
                        How do I submit a complaint, correction or retraction request?
                    </div>
                    <div>
                        All requests can be e-mailed to the editor-in-chief at <span style={{ color: 'var(--link-hover)' }}>eic@dailynexus.com</span> or delivered by phone at (805) 893-2691. If you believe a factual error was made in a <span style={{ fontStyle: 'italic' }}>Daily Nexus</span> article, please call our office immediately. If a correction request is not made within a year of publication, it becomes exceedingly difficult for our staff to investigate your claim. As such, any request made after one year of publication will require the reader to provide the burden of proof.
                        <br /><br />
                        With regards to retraction requests, please know that these are rarely granted. For a retraction to occur, the article in question would have to contain more fallacy than fact or be wrong at its very core. As a newspaper, we are obligated to preserve these historical records. Once an issue is published, you cannot retract an opinion piece or a quote you willingly gave to a reporter. Police reports are also public record. We will not remove any article from our print or online editions unless severe factual errors have occurred. Personal reasons are not acceptable grounds for a retraction.
                    </div>
                </li>
                <li key="8">
                    <div style={{ fontWeight: 'bold', marginBottom: '.85rem' }}>
                        How do I purchase an advertisement?
                    </div>
                    <div>
                        Interested parties can contact our advertising office by phone at (805) 893-3828 or email <span style={{ color: 'var(--link-hover)' }}>production@dailynexus.com.</span>
                    </div>
                </li>
                <li key="9">
                    <div style={{ fontWeight: 'bold', marginBottom: '.85rem' }}>
                        How do I pitch a story idea?
                    </div>
                    <div>
                        The <span style={{ fontStyle: 'italic'}}>Daily Nexus</span> has several desk editors who are assigned to specific sections. The county news editor handles news pertaining to Isla Vista and Santa Barbara County, while the university news editor reports on news related to the campus and the University of California. The sports editors handle sports, and the Artsweek editors report on arts and entertainment.
                        <br /><br />
                        Please call or e-mail your story ideas to these editors with a brief description. Also include any helpful contact information or press releases. All articles are written by <span style={{ fontStyle: 'italic'}}>Nexus</span> staffers. We do not accept freelance work unless it is for the opinion page, which is welcome to all members of the community.
                    </div>
                </li>
                <li key="10">
                    <div style={{ fontWeight: 'bold', marginBottom: '.85rem' }}>
                        Where does the <span style={{ fontStyle: 'italic'}}>Daily Nexus</span> print?
                    </div>
                    <div>
                        Our newspaper is printed at the Santa Barbara News-Press printing facility located in Goleta.
                    </div>
                </li>

                <style jsx>{`
                    li {
                        margin-top: 1.5rem;
                    }
                `}</style>
            </ul>
        </About>
    </Layout>
    )
}

export default FAQ