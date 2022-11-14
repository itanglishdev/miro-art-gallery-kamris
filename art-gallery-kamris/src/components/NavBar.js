import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

function NavBar() {
    return ( 
        <Fragment>
            <div className="navbar">
                    <Link className="navbar__link" to='/'>home</Link>
                    <Link className="navbar__link" to='/about'>about</Link>
                    <Link className="navbar__link" to='/contact'>contact us</Link>
                    {/* <Link className="" to='/about/:id' /> */}
            </div>
            <Outlet/>
        </Fragment>
     );
}

export default NavBar;