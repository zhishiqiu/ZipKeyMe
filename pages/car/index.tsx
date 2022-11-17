// 차량 등록 페이지

import type {NextPage} from 'next'
import Layout from "../../components/layout";
import Head from "next/head";

const Car: NextPage = () => {
	return (
		<Layout title={"차량 등록"} hasTabBar>
			<Head><title>Car</title></Head>
			<div className={"flex flex-col space-y-5 divide-y"}>
				차량 등록
			</div>
		</Layout>
	);
}

export default Car;