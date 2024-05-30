import React from "react";
import s from "./MyPosts.module.css"
import {Post, PostType} from "./Post/Post";
type MyPostsProps = {
    posts: PostType[]
}

export const MyPosts = ({posts}: MyPostsProps) => {
    // let posts = [
    //     {id: 1, message: "Hi, how are you?", likesCount: 12},
    //     {id: 2, message: "Hello my friend", likesCount: 11},
    // ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>

            <h3>My posts</h3>

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

                {postsElements}


            </div>
        </div>
    )
}
