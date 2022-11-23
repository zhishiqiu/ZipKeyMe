import type {NextPage} from 'next'
import Layout from "@components/Layout";
import Head from "next/head";

const Ask: NextPage = () => {
	return (
		<Layout title={"문의하기"} hasTabBar canGoBack>
			<Head><title>문의하기</title></Head>
			<div className={"flex flex-col space-y-5 divide-y"}>
				문의하기
			</div>
		</Layout>
	);
}

export default Ask;