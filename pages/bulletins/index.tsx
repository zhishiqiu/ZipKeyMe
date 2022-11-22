import type {NextPage} from 'next'
import Layout from "@components/Layout";
import Head from "next/head";
import Bulletin from "@components/Bulletin";

const Bulletins: NextPage = () => {
  return (
    <Layout title={"게시판"} canGoBack hasTabBar>
      <Head><title>Bulletins</title></Head>
      <section className={"divide-y"}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
          <Bulletin
            key={i}
            id={i}
            title={"데이터베이스"}
            content={"IC-PBL 최종 발표"}
            createdAt={"2022-10-25"}
            comments={1}
            hearts={1}
            userId={1}
          />
        ))}
      </section>
    </Layout>
  );
}

export default Bulletins;

