import type {NextPage} from 'next'
import Layout from "../../components/layout";
import Head from "next/head";

const Fare: NextPage = () => {
  return (
    <Layout title={"요금 조회"} hasTabBar>
      <Head><title>Fare Check</title></Head>
      <div className={"flex flex-col space-y-5 divide-y"}>
        요금 조회
      </div>
    </Layout>
  );
}

export default Fare;