import type {NextPage} from 'next'
import Layout from "@components/Layout";
import Head from "next/head";

const Chats: NextPage = () => {
  return (
    <Layout title={"관리자 채팅"} hasTabBar>
      <Head><title>Chats</title></Head>
      <div className={"flex flex-col space-y-5 divide-y"}>
        관리자 채팅
      </div>
    </Layout>
  );
}

export default Chats;
