import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { ProfilePageType} from "../../redux/state";



export type ProfilePropsType = {
    profileState: ProfilePageType
    addPost: () => void
    addNewMessage: (postMessage: string) => void
}

export const Profile = ({profileState, addPost, addNewMessage}: ProfilePropsType) => {

    return (

        <div>
            <ProfileInfo/>
            <MyPosts posts={profileState.posts} addPost={addPost} addNewMessage={addNewMessage}/>
        </div>

    )
}