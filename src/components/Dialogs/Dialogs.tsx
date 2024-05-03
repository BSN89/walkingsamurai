import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogProps = {
    name: string
    id: string
}
type MessageProps = {
    message: string
}

const DialogItem = ({name, id}: DialogProps) => {
    let path = '/dialogs/' + id
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {name}</NavLink>
        </div>
    )
}

const Message = ({message}: MessageProps) => {
    return(
        <div className={s.message}>{message}</div>
    )
}


type DialogsDate = {
    id: number,
    name: string
}

export const Dialogs = ( {id, name}: DialogsDate) => {

    let dialogsData: DialogsDate[] = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"},
    ]
    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra"},
        {id: 3, message: "Hello"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={s.messages}>
                <Message message = {messagesData[0].message} />
                <Message message = {messagesData[1].message}/>
                <Message message = {messagesData[2].message}/>
                <Message message = {messagesData[3].message}/>
                <Message message = {messagesData[4].message}/>

            </div>
        </div>
    )
}