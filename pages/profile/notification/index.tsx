import type {NextPage} from 'next'
import Layout from "../../../components/layout";
import Head from "next/head";

const Notification: NextPage = () => {
	return (
		<Layout title={"알림 목록"} hasTabBar>
			<Head><title>Notification</title></Head>
			<div className={"flex flex-col space-y-5 divide-y"}>
				알림 목록
			</div>
		</Layout>
	);
}

export default Notification;