import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    name: string
    id: number
}

export const DialogItem = ({name, id}: DialogItemProps) => {
    return (
        <div>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={'/dialogs/' + id }>{name}</NavLink>
            </div>
        </div>
    );
};