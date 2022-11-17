import type {NextPage} from 'next'
import Layout from "../../components/layout";
import Head from "next/head";

const NoticeDetail: NextPage = () => {
	return (
		<Layout title={"공지사항 상세"} hasTabBar>
			<Head><title>Notice Detail</title></Head>
			<div className={"flex flex-col space-y-5 divide-y"}>
				공지사항 상세
			</div>
		</Layout>
	);
}

export default NoticeDetail;