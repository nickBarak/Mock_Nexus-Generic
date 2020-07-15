import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Layout({ children }) {
    return (
        <div>
            <Header />
            <div>
                {children}
                <Sidebar />
            </div>
        </div>
    )
}

export default Layout
