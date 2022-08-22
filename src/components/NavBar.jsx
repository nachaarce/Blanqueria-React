import ImgCart from './CartWidget';
const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-items">
            <li className="nav-item">Blanqueria MyM.</li>
                <ImgCart/>
            </ul>
        </nav>
    )
}
export default NavBar;