import type {NextPage} from 'next'
import Layout from "@components/Layout";
import Head from "next/head";

const Policy: NextPage = () => {
	return (
		<Layout title={"개인정보 처리방침"} hasTabBar canGoBack>
			<Head><title>개인정보 처리방침</title></Head>
			<div className={"flex flex-col space-y-5 divide-y"}>
				개인정보 처리방침
			</div>
		</Layout>
	);
}

export default Policy;