import type {NextPage} from 'next'
import Layout from "@components/Layout";
import Head from "next/head";

const SIC: NextPage = () => {
	return (
		<Layout title={"정보 동의 설정"} hasTabBar canGoBack>
			<Head><title>정보 동의 설정</title></Head>
			<div className={"flex flex-col space-y-5 divide-y"}>
				정보 동의 설정
			</div>
		</Layout>
	);
}

export default SIC;