import React from "react";
import s from "./post.module.css";

const Post = (props) => {
    return (
        <div className={s.postDiv}>
            <div>
                <img
                    className={s.postImage}
                    src="https://library.kissclipart.com/20181001/wbw/kissclipart-gsmnet-ro-clipart-computer-icons-user-avatar-4898c5072537d6e2.png"
                    alt="avatarLogo" />
            </div>

            <div className={s.postMsg}>{props.msg}
                <p>likes {props.likesCount}</p>
            </div>
        </div>
    );
};

export default Post;
