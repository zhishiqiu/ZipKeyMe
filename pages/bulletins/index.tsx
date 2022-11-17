import type {NextPage} from 'next'
import Layout from "../../components/layout";
import Head from "next/head";

const Bulletins: NextPage = () => {
  return (
    <Layout title={"게시판"} canGoBack hasTabBar>
      <Head><title>Bulletins</title></Head>
      <div className={"flex flex-col space-y-5 divide-y"}>
        게시판
      </div>
    </Layout>
  );
}

export default Bulletins;

