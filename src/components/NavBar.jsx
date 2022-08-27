    import ImgCart from './CartWidget';

    const NavBar = () => {
        return (
            <nav className="navbar">
                <div className="navbar-items">
                <img src="../images/logo-mym.svg" alt="logo" className='logomym' />
                <a href='www.google.com' className='nav-link'>Hogar</a>
                <a href='www.google.com' className='nav-link'> Baño</a>
                <a href='www.google.com' className='nav-link'>Fragancias</a>
                    <ImgCart/>
                </div>
            </nav>
        )
    }
    export default NavBar;

