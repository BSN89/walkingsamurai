import React from 'react';
import './index.css';
import {addNewMessage, addPost, state, StateType, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import {App} from "./App";





export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} addNewMessage={addNewMessage}/>,
        document.getElementById('root'))
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree)


