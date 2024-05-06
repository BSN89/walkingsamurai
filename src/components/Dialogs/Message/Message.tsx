import React from 'react';
import s from "../Dialogs.module.css";

type MessageProps = {
    message: string
    id: number
}

export const Message = ({message, id}: MessageProps) => {
    return (
        <div>
            <div key={id} className={s.message}>{message}</div>

        </div>
    );
};