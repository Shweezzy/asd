import React from "react";
import s from "./profile.module.css";
import ProfileInfo from "./ProfileInfo/profileInfo";
import MyPosts from "./MyPosts/myPosts";

const Content = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Content;
