import type {NextPage} from 'next'
import Layout from "@components/Layout";
import Head from "next/head";

const Withdrawal: NextPage = () => {
	return (
		<Layout title={"회원 탈퇴"} hasTabBar canGoBack>
			<Head><title>회원 탈퇴</title></Head>
			<div className={"flex flex-col space-y-5 divide-y"}>
				회원 탈퇴
			</div>
		</Layout>
	);
}

export default Withdrawal;