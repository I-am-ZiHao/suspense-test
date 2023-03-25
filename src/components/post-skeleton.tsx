import React from "react";
import styles from "@/styles/component.module.css";

export const PostSkeleton = React.memo(function PostSkeleton() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeletonTitle} />
      <div className={styles.divider} />
      <div className={styles.skeletonText} />
      <div className={styles.skeletonText} />
      <div className={styles.skeletonText} />
      <div className={styles.skeletonText} />
      <div className={styles.skeletonText} />
    </div>
  );
});
