import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType} from "../../redux/state";



export type ProfilePropsType = {
    profileState: ProfilePageType
}

export const Profile = ({profileState}: ProfilePropsType) => {

    return (

        <div>
            <ProfileInfo/>
            <MyPosts posts={profileState.posts}/>
        </div>

    )
}