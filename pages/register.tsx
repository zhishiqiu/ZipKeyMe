// 회원가입 페이지

import type {NextPage} from 'next'
import Layout from "../components/layout";
import Head from "next/head";

const Register: NextPage = () => {
	return (
		<Layout title={"회원가입"} hasTabBar>
			<Head><title>Register</title></Head>
			<div className={"flex flex-col space-y-5 divide-y"}>
				회원가입
			</div>
		</Layout>
	);
}

export default Register;