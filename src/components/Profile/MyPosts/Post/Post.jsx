import React from "react";
import styles from "./Post.module.css"
import avatar2 from "./../../../../img/avatar2.png"

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src={avatar2} />
            { props.message }
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;