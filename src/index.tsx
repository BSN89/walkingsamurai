import React from 'react';
import './index.css';
import {StateType, store} from "./redux/state";
import ReactDOM from "react-dom";
import {App} from "./App";





export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPost={store.addPost.bind(store)} addNewMessage={store.addNewMessage.bind(store)}/>,
        document.getElementById('root'))
}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)


