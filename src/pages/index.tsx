import Head from "next/head";
import styles from "@/styles/Home.module.css";
import componentStyles from "@/styles/component.module.css";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { PostSkeleton } from "@/components/post-skeleton";

export const PostList = dynamic(
  () => import("../components/post-list").then((mod) => mod.PostList),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Head>
        <title>React Suspense Test</title>
        <meta
          name="description"
          content="An app to try React Suspense component"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Suspense
            fallback={
              <div className={componentStyles.postWrapper}>
                {Array.from({ length: 9 }, (x, i) => i).map((key) => (
                  <PostSkeleton key={key} />
                ))}
              </div>
            }
          >
            <PostList />
          </Suspense>
        </div>
      </main>
    </>
  );
}
