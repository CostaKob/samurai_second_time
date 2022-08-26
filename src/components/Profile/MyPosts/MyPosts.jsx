import React from "react";
import styles from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove Post</button>
            </div>
            <div className={styles.posts}>
                <Post message="This is my first post"/>
                <Post message="Hi, How Are you?" />
                <Post message="Thanks" />
                <Post message="Let's do it!" />
            </div>
        </div>
    );
}

export default MyPosts;