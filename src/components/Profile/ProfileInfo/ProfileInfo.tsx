import React from "react";
import s from "./ProfileInfo.module.css"



export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="data:image/jpeg;base64,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"
                    alt="ho"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>

        </div>

    )
}