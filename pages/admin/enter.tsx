// 관리자 로그인 페이지

import type {NextPage} from 'next'
import Layout from "@components/Layout";
import Head from "next/head";

const Enter: NextPage = () => {
	return (
		<Layout title={"관리자 로그인"} hasTabBar>
			<Head><title>Admin</title></Head>
			<div className={"flex flex-col space-y-5 divide-y"}>
				관리자 로그인
			</div>
		</Layout>
	);
}

export default Enter;