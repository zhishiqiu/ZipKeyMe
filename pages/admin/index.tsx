import type { NextPage } from "next";
import Layout from "@components/Layout";
import Head from "next/head";

const admin: NextPage = () => {
  return (
    <Layout
      title={"관리자 페이지"}
      alarmBtnDisable
    >
      <Head>
        <title>admin</title>
      </Head>
    </Layout>
  );
};

export default admin;
