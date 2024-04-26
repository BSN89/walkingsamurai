import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'> Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'> Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'> Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'> Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'> Valera</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi, im fine</div>
                <div className={s.message}>How is your it-kamasutra</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}