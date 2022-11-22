import type {NextPage} from 'next'
import Layout from "@components/Layout";
import Head from "next/head";

const FarePay: NextPage = () => {
	return (
		<Layout title={"요금 납부"} hasTabBar>
			<Head><title>Fare pay</title></Head>
			<div className={"flex flex-col space-y-5 divide-y"}>
				요금 납부
			</div>
		</Layout>
	);
}

export default FarePay;