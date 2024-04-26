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

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={'Dimych'} id={'1'}/>
                <DialogItem name={'Andrey'} id={'2'}/>
                <DialogItem name={'Sveta'} id={'3'}/>
                <DialogItem name={'Sasha'} id={'4'}/>
                <DialogItem name={'Victor'} id={'5'}/>
                <DialogItem name={'Valera'} id={'6'}/>
            </div>
            <div className={s.messages}>
                <Message message = 'Hi'/>
                <Message message = 'How is your it-kamasutra'/>
                <Message message = 'Yo'/>
                <Message message = 'Yo'/>
                <Message message = 'Yo'/>

            </div>
        </div>
    )
}