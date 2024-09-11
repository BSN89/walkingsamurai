import React, {useRef, useState, MouseEvent, ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";


export type MyPosts = {
    posts: PostType[]
    addPost: (postMessage: string) => void
}

export const MyPosts = ({posts, addPost}: MyPosts) => {
let [post, setPost] = useState<string>('')
    console.log(post)

    let postsElements =
        posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

   // const textereaRef = useRef<HTMLTextAreaElement>(null);

    const addMyPosts = () => {
        addPost(post)
        setPost('')
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPost(e.currentTarget.value)

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={post} onChange={onChangeHandler}></textarea>
                </div>
                <div>
                    <button onClick={addMyPosts}>Add post</button>
                    <button>remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
