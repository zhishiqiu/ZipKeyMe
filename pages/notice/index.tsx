import type {NextPage} from 'next'
import Layout from "../../components/layout";
import Head from "next/head";

const Notice: NextPage = () => {
	return (
		<Layout title={"공지사항"} hasTabBar>
			<Head><title>Notice</title></Head>
			<div className={"flex flex-col space-y-5 divide-y"}>
				공지사항
			</div>
		</Layout>
	);
}

export default Notice;