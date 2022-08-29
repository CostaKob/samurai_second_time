import React from "react";
import avatar from "../../img/avatar.png"
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css"

const Profile = () => {
  return (
    <div>
      <div>
        <img src='#' />
      </div>
      <div>
        <div className={styles.avatar}><img src={avatar} /></div>
        <div>Description</div>
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;