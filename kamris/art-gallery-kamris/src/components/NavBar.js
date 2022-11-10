import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import {GiPaintedPottery} from 'react-icons/gi'

function NavBar() {
    return ( 
        <Fragment>
            <div className="navbar">
                    <Link className="navbar__link" to='/'>home</Link>
                    <Link className="navbar__link" to='/about'>about</Link>
                    <Link className="navbar__link" to='/contact'>contact us</Link>
            </div>
            <Outlet/>
        </Fragment>
     );
}

export default NavBar;