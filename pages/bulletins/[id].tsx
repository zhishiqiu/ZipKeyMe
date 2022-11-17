// 게시글

import type {NextPage} from 'next'
import Layout from "../../components/layout";
import Head from "next/head";

const BulletinDetail: NextPage = () => {
	return (
		<Layout title={"게시글"} hasTabBar>
			<Head><title>bulletin</title></Head>
			<div className={"flex flex-col space-y-5 divide-y"}>
				게시글 상세
			</div>
		</Layout>
	);
}

export default BulletinDetail;