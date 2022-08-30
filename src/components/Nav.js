import React from "react";
import { Link } from "react-router-dom";
const Nav =() =>{
    return(
        <nav>
            <div>Logo</div>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/about">about us</Link>
                </li>
                <li>
                    <Link to="/portfolio">portfolio</Link>
                </li>
                <li>
                    <Link to="/contact">contact us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;