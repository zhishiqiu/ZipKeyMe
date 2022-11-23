import type {NextPage} from 'next'
import Layout from "@components/Layout";
import Head from "next/head";

const Terms: NextPage = () => {
	return (
		<Layout title={"서비스 이용약관"} hasTabBar canGoBack>
			<Head><title>서비스 이용약관</title></Head>
			<div className={"flex flex-col space-y-5 divide-y"}>
				서비스 이용약관
			</div>
		</Layout>
	);
}

export default Terms;