import 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { Simulate } from 'react-dom/test-utils';

function CommentInputs({ following, articleID, setMessage, parent, embedded, firstComment, mainInput }) {
    const [user, setUser] = useState(null);

    useEffect(_=> {
        sessionStorage.getItem('email') && setUser({ name: sessionStorage.getItem('name'), email: sessionStorage.getItem('email') });
        console.log(user);
    }, []);

    async function postComment(e, setMessage, article_id, parent=null) {
        e.persist();
        e.preventDefault();
        const [content, name, email] = [0, 1, 2].map(i => e.target.children[i].children[1].value);
        if (!content || !name || !email) { return setMessage('There is an empty field') }
        let response = await fetch('http://localhost:3000/api/post-comment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                article_id,
                name,
                email,
                content,
                parent,
                post_date: Date.now()
            })
        });

        let status = await response.json(),
            msg;
        switch (status) {
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
                break;
            default:
                console.log(status);
        }
        msg && setMessage(msg);
        if (!status || status === 3) {
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('name', name);
        }
        e.target.reset();
        document.location.reload();
    }

    return (<>
        <form style={{ position: 'relative', marginBottom: '2.35rem', marginTop: '1rem', maxWidth: '55rem' }} onSubmit={e => postComment(e, setMessage, articleID, parent)}>
            <div style={{ position: 'relative' }}>
                <img className="input-large-img" src="https://secure.gravatar.com/avatar/?s=40&d=mm&r=g" alt="user" />
                <input type="text" placeholder={`${firstComment ? 'Start' : 'Join'} the discussion...`} />
            </div>
            <div style={{ position: 'relative', display: user ? 'none' : 'block' }}>
                <i className="fas fa-user input-icon"></i>
                <input className="input-small" type="text" placeholder="Name*" />
            </div>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
                <i className="fas fa-at input-icon"></i>
                <input className="input-small" type="text" placeholder="Email*" />
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    {mainInput && <span tabIndex={0} onFocus={e => { e.target.style.border = '1px solid black' }} onBlur={e => { e.target.style.border = 'none' }} onKeyDown={e => e.keyCode === 13 && Simulate.click(e.target)} onClick={async e => {
                        e.persist();
                        e.preventDefault();
                        const form = e.currentTarget.parentElement.parentElement.parentElement;
                        let email = user ? user.email
                            : e.currentTarget.parentElement.parentElement.children[1].value,
                        name =  user ? user.name
                            : e.currentTarget.parentElement.parentElement.parentElement.children[1].children[1].value;
                        if (email && name) {
                            let response = await fetch('http://localhost:3000/api/follow-article', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ name, email, articleID, following })
                            }),
                                status = await response.json(),
                                msg;
                            console.log(status);
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
                                alert(`Imagine your email being ${following ? 'unsubscribed from' : 'subscribed to'} this article\'s comment activity`);
                                form.reset();
                                document.location.reload();
                            }
                        } else alert('Enter your name and email in the boxes to the left to follow this article');
                    }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <i className={`fas ${following ? "fa-bell-slash" : "fa-bell"}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#eee', width: '2rem', height: '2rem', color: '#999', marginRight: '.85rem', border: '1px solid #ddd', cursor: 'pointer' }}></i>
                    </span>}
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
                    width: 100%;
                    margin-bottom: .6rem;
                    font-size: ${embedded ? '1rem' : '1.15rem'};
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

                .input-small:nth-child(2),
                .input-icon {
                    ${user ? 'visibility: hidden;' : ''}
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
