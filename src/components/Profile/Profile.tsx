import React from "react";
import cont from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = () => {
    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "Hello my friend", likesCount: 11},
    ]
    return (

        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>

    )
}