import './navbar.css'

function Navbar () {


    return (

        <nav className="navbar">
            <ul className="nav-list">
                <li><button className="navbar-btn">About</button></li>
                <li><button className="navbar-btn">Features</button></li>
                <li><button className="navbar-btn">Products</button></li>
                <li><button className="navbar-btn">Newspaper</button></li>
                <li><button className="navbar-btn">Cart</button></li>
            </ul>
        </nav>


    );



}

export default Navbar;