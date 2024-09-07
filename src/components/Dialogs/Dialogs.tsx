import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../index";


export type DialogsTypeProps = {
    messages: MessagesType[]
    dialogs: DialogsType[]
}

export const Dialogs = ({messages, dialogs}: DialogsTypeProps) => {



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