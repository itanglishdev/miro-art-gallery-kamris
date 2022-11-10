import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import {GiPaintedPottery} from 'react-icons/gi'

function NavBar() {
    return ( 
        <Fragment>
            <div className="navbar">
                <Link to='/'><GiPaintedPottery/></Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <Outlet/>
        </Fragment>
     );
}

export default NavBar;