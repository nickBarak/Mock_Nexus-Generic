import 'isomorphic-unfetch';
import { postComment } from '../Functions';

function CommentInputs({ following, articleID, setMessage, parent }) {
    return (<>
        <form style={{ position: 'relative', marginBottom: '2.35rem', marginTop: '1rem', maxWidth: '55rem' }} onSubmit={e => postComment(e, setMessage, articleID, parent)}>
            <div style={{ position: 'relative' }}>
                <img className="input-large-img" src="https://secure.gravatar.com/avatar/?s=40&d=mm&r=g" alt="user" />
                <input type="text" placeholder="Join the discussion..." />
            </div>
            <div style={{ position: 'relative' }}>
                <i className="fas fa-user input-icon"></i>
                <input className="input-small" type="text" placeholder="Name*" />
            </div>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
                <i className="fas fa-at input-icon"></i>
                <input className="input-small" type="text" placeholder="Email*" />
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <span onClick={async e => {
                        e.persist();
                        e.preventDefault();
                        let email = sessionStorage.getItem('email')
                            || e.currentTarget.parentElement.parentElement.children[1].value,
                        name = sessionStorage.getItem('name')
                            || e.currentTarget.parentElement.parentElement.parentElement.children[1].children[1].value;
                        if (email && name) {
                            let response = await fetch('/api/follow-article', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: { name, email, articleID, following }
                            }),
                                status = response.json(),
                                msg;
                            switch (status) {
                                default:
                                    console.log(status);
                                    msg = 'Error Following Article'
                                    break;
                                case 0:
                                    setMessage('');
                                    break;
                                case 1:
                                    msg = 'Invalid email address';
                                    break;
                                case 2:
                                    msg = 'This email is registered with a different name';
                                    break;
                                case 3:
                                    msg = 'New user created';
                            }
                            msg && setMessage(msg);
                            if (!status || status === 3) {
                                if (!sessionStorage.getItem('email')) {
                                    sessionStorage.setItem('email', email);
                                    sessionStorage.setItem('name', name);
                                }
                                // e.target.style.transform = 'scaleY(0)';
                                alert(`Imagine your email being ${following ? 'unsubscribed from' : 'subscribed to'} this article\'s comment activity`);
                                e.target.parentElement.parentElement.parentElement.reset();
                            } else {
                                alert('Enter your name and email in the boxes to the left to follow this article');
                            }
                        }
                    }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <i className={`fas ${following ? "fa-bell-slash" : "fa-bell"}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#eee', width: '2rem', height: '2rem', color: '#999', marginRight: '.85rem', border: '1px solid #ddd', cursor: 'pointer' }}></i>
                    </span>
                    <button className="post-comment-button">Post Comment</button>
                </span>
            </div>

            <style jsx>{`
                .post-comment-button {
                    background-color: #555;
                    color: white;
                    font-size: .925rem;
                    padding: .5rem 1.25rem;
                    cursor: pointer;
                    border: none;
                }
    
                .post-comment-button:hover,
                .post-comment-button:focus {
                    background-color: #404040;
                }

                input {
                    padding: 1.7rem;
                    padding-left: 5rem;
                    border: 1px solid #ddd;
                    color: #888;
                    font-family: monospace;
                    font-size: 1.15rem;
                    width: 100%;
                    margin-bottom: .6rem;
                }
    
                .input-large-img {
                    position: absolute;
                    top: 1rem;
                    left: 1rem;
                    box-shadow: 0 0 4px 2px #d8d8d8;
                }
    
                .input-small {
                    font-size: .9rem;
                    padding: .5rem 1.9rem;
                    width: 50%;
                    font-family: Lato;
                }

                .input-icon {
                    color: #aaa;
                    position: absolute;
                    top: .65rem;
                    left: .5rem;
                }
            `}</style>
        </form>
    </>)
}

export default CommentInputs
