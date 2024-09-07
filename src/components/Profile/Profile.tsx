import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../index";



export type ProfilePropsType = {
    posts: PostType[]
}

export const Profile = ({posts}: ProfilePropsType) => {

    return (

        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>

    )
}