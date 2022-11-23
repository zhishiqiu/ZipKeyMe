import type {NextPage} from 'next'
import Layout from "@components/Layout";
import Head from "next/head";

const ChangeEmail: NextPage = () => {
	return (
		<Layout title={"이메일 변경"} hasTabBar canGoBack>
			<Head><title>이메일 변경</title></Head>
			<div className={"flex flex-col space-y-5 divide-y"}>
				이메일 변경
			</div>
		</Layout>
	);
}

export default ChangeEmail;