import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Post} from "./components/Profile/MyPosts/Post/Post";
import {MyPosts} from "./components/Profile/MyPosts/MyPosts";

export const App = () => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route exact path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/news' component={Post}/>
                    <Route path='/music' component={MyPosts}/>
                    <Route path='/settings' component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


