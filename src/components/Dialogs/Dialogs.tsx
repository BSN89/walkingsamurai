import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesPageType} from "../../redux/state";
import {useRef} from "react";


export type DialogsTypeProps = {
    dialogsState: MessagesPageType
}

export const Dialogs = ({dialogsState}: DialogsTypeProps) => {


    let messageElements = dialogsState.messages.map(m => <Message message={m.message} id={m.id}/>)
    let dialogsElements = dialogsState.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    const inputRef = useRef<HTMLInputElement>(null)
const addMessageHandler = () => {
        if(inputRef.current){
           alert(inputRef.current.value)
            inputRef.current.value = ''
        }
}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messageElements}
                <input ref={inputRef}/>
                <button onClick={addMessageHandler}>go</button>
            </div>
        </div>
    )
}