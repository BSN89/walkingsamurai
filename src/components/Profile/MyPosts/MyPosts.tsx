import React from "react";
import cont from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return(
        <div>
            My posts

            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>remove</button>
            </div>
            <div className={cont.posts}>
               <Post message='Hi, how are you?' like={20}/>
               <Post message='Hello my friend' like={15}/>

            </div>
        </div>
    )
}
