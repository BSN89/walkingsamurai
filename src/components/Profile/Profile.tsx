import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType} from "../../redux/state";



export type ProfilePropsType = {
    profileState: ProfilePageType
    addPost: (postMessage: string) => void
}

export const Profile = ({profileState, addPost}: ProfilePropsType) => {

    return (

        <div>
            <ProfileInfo/>
            <MyPosts posts={profileState.posts} addPost={addPost}/>
        </div>

    )
}