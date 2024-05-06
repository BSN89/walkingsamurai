import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    let dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"},
    ]


    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra"},
        {id: 3, message: "Hello"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"},
    ]


    let messageElements = messages.map(m => <Message message = {m.message} id={m.id}/>)
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                { dialogsElements }

            </div>
            <div className={s.messages}>

                { messageElements }

            </div>
        </div>
    )
}