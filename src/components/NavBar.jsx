import ImgCart from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-items">
            <li className="nav-item"><img src="../images/logo-mym.svg" alt="logo" className='logomym' /></li>
            <li className="nav-item-list">Hogar</li>
            <li className="nav-item-list">Baño</li>
            <li className="nav-item-list">Fragancias</li>
                <ImgCart/>
            </ul>
        </nav>
    )
}
export default NavBar;

