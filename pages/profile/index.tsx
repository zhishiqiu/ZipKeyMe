import type {NextPage} from 'next'
import Layout from "@components/Layout";
import Head from "next/head";

const Profile: NextPage = () => {
  return (
    <Layout title={"마이페이지"} hasTabBar>
      <Head><title>Profile</title></Head>
      <div className={"flex flex-col space-y-5 divide-y"}>
        마이페이지
      </div>
    </Layout>
  );
}

export default Profile;
