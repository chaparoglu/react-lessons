import { Link } from "react-router-dom"

function NavbarComponent() {
    return (
        <>
        <nav className="navbar sticky-top navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Əsas səhifə</Link>
                <Link className="navbar-brand" to="/posts">Postlar</Link>
                <Link className="navbar-brand" to="/todos">Görüləcək işlər</Link>
                <Link className="navbar-brand" to="/currency">Valyuta məzənnəsi</Link>
            </div>
        </nav>
        </>
    )
}

export default NavbarComponent