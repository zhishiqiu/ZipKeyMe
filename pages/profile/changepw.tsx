import type {NextPage} from 'next'
import Layout from "@components/Layout";
import Head from "next/head";

const ChangePW: NextPage = () => {
	return (
		<Layout title={"비밀번호 변경"} hasTabBar canGoBack>
			<Head><title>비밀번호 변경</title></Head>
			<div className={"flex flex-col space-y-5 divide-y"}>
				비밀번호 변경
			</div>
		</Layout>
	);
}

export default ChangePW;