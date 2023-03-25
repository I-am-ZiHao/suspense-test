import React from "react";
import styles from "@/styles/component.module.css";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function fetchPosts() {
  let status = "pending";
  let result: Post[] = [];
  let error: any;

  let fetching = fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  })
    .then((res) => res.json())
    .then((success) => {
      new Promise((resolve) => {
        setTimeout(() => {
          status = "fulfilled";
          result = success;
          resolve(success);
        }, 2000);
      });
    })
    .catch((err) => {
      status = "rejected";
      error = err;
    });

  return () => {
    if (status === "pending") {
      throw fetching; // Suspend (to tell React data is still fetching)
    } else if (status === "rejected") {
      throw error; // Result is an error
    } else if (status === "fulfilled") {
      return result; // Result is a fulfilled promise
    }
  };
}

const getPosts = fetchPosts();

export const PostList = React.memo(function PostList() {
  const posts = getPosts();

  return (
    <div className={styles.postWrapper}>
      {posts?.map((post) => (
        <div className={styles.post} key={post.id}>
          <h3>{post.title}</h3>
          <div className={styles.divider} />
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
});
