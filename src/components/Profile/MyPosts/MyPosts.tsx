import React, {useRef} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";


export type MyPosts = {
    posts: PostType[]
}

export const MyPosts = ({posts}: MyPosts) => {


    let postsElements =
        posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const textereaRef = useRef<HTMLTextAreaElement>(null);

    const addPost = () => {
        if (textereaRef.current) {
            alert(textereaRef.current.value)
            textereaRef.current.value = ''
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={textereaRef}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
