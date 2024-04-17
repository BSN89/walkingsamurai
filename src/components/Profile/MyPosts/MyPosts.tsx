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
               <Post/>
               <Post/>
               <Post/>
            </div>
        </div>
    )
}
