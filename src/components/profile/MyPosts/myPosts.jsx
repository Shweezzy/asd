import React from "react";
import s from "./myPosts.module.css";
import Post from "./post/post";

const MyPosts = (props) => {

    let postsData = [
        {
            id: 0,
            message: "hello",
            likesCount: 10
        }, {
            id: 1,
            message: "hi",
            likesCount: 11
        }

    ]

    return (
        <div className={s.postsBlock}>
            <h3>My Posts:</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add Posts</button>
            </div>
            <div className={s.posts}>
                <Post msg={postsData[0].message} likesCount={postsData[0].likesCount} />
                <Post msg={postsData[1].message} likesCount={postsData[1].likesCount} />
            </div>
        </div>
    );
};

export default MyPosts;
