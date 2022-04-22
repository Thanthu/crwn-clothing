import { Link, Outlet } from "react-router-dom";

function NavBar() {
    return (
        <>
            <div className="navbar">
                <Link className="logo-container" to="/">
                    <div>Logo</div>
                </Link>
                <div className="links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default NavBar;