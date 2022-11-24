import type { NextPage } from "next";
import Layout from "@components/Layout";
import Head from "next/head";
import Bulletin from "@components/Bulletin";
import useUser from "@libs/client/useUser";
import useSWR from "swr";
import { type } from "os";

type Post = {
  postId: number;
  title: string;
  id: string | null;
  content: string;
  postAt: Date;
  isNotice: boolean;
  _count: {
    reples: number;
    likes: number;
  };
};

interface PostsResponse {
  ok: boolean;
  posts: Post[];
}

const Bulletins: NextPage = () => {
  const { user, isLoading } = useUser();
  const { data } = useSWR<PostsResponse>("/api/bulletins/posts");
  console.log(data);
  return (
    <Layout
      title={"게시판"}
      canGoBack
      hasTabBar
    >
      <Head>
        <title>Bulletins</title>
      </Head>
      <section className={"divide-y"}>
        {data?.posts?.map((post) => (
          <Bulletin
            key={post.postId}
            id={post.postId}
            title={post.title}
            content={post.content}
            createdAt={post.postAt.substring(10)}
            comments={post._count.reples}
            hearts={post._count.likes}
            userId={post.id}
          />
        ))}
      </section>
    </Layout>
  );
};

export default Bulletins;
