import React from "react";
import nav from "./Navbar.module.css"




export const Navbar = () => {
    return(
        <nav className={nav.nav}>
            <div className={nav.item}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={nav.item}>
                <a href='dialogs'>Message</a>
            </div>
            <div className={nav.item}>
                <a href='news'>News</a>
            </div>
            <div className={nav.item}>
                <a href='music'>Music</a>
            </div>
            <div className={nav.item}>
                <a href='settings'>Settings</a>
            </div>
        </nav>

    )
}