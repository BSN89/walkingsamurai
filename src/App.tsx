import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addNewMessage, addPost, StateType} from "./redux/state";

export type AppPropsType = {
    state: StateType
    addPost: () => void
    addNewMessage: (postMessage: string) => void
}
export const App = ({state}: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/dialogs' render={() => <Dialogs dialogsState={state.messagesPage}/>}/>
                    <Route path='/profile' render={() => <Profile profileState={state.profilePage}
                                                                  addPost={addPost}
                                                                  addNewMessage={addNewMessage}
                    />}/>


                </div>
            </div>
        </BrowserRouter>
    );
}


