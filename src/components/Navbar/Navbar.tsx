import React from "react";
import nav from "./Navbar.module.css"
import {NavLink} from "react-router-dom";




export const Navbar = () => {
    return(
        <nav className={nav.nav}>
            <div className={nav.item}>
                <NavLink to='/profile' activeClassName={nav.activeLink}>Profile</NavLink>
            </div>
            <div className={nav.item}>
                <NavLink to='dialogs' activeClassName={nav.activeLink}>Message</NavLink>
            </div>
            <div className={nav.item}>
                <NavLink to='news' activeClassName={nav.activeLink}>News</NavLink>
            </div>
            <div className={nav.item}>
                <NavLink to='music' activeClassName={nav.activeLink}>Music</NavLink>
            </div>
            <div className={nav.item}>
                <NavLink to='settings' activeClassName={nav.activeLink}>Settings</NavLink>
            </div>
        </nav>

    )
}