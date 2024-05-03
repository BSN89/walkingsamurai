import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";


type PostDate = {
    id: number,
    message: string,
    likesCount: number
}

export const MyPosts = ( {id, message, likesCount}: PostDate) => {

    let postData = [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "Hello my friend", likesCount: 30},

    ]

    return (
        <div className={s.postBlock}>
            <h3> My posts</h3>

            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>remove</button>
                </div>

            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} like={postData[0].likesCount}/>
                <Post message={postData[1].message} like={postData[1].likesCount}/>

            </div>
        </div>
    )
}
