import type {NextPage} from 'next'
import Layout from "@components/Layout";
import Head from "next/head";

const NotificationDetail: NextPage = () => {
	return (
		<Layout title={"알림 상세"} hasTabBar>
			<Head><title>Notification Detail</title></Head>
			
			<div className='bg-[#f5f5f5] h-screen'>
			<div className={"flex flex-col space-y-5 divide-y "}>
			<section className={"bg-white border-1 rounded-2xl px-7  pb-4  w-80   border-b-gray-300  mt-28 my-auto mx-auto"}>
				<p className='font-black text-lg mt-5'>관리비 정보</p>
				<p className='font-light mt-8 w-4/6' >2022년 11월분 관리비가 청구되었어요.</p>
				<p className='text-gray-300 float-buttom mt-48'>2022.12.01</p>
			</section>
				
			</div>
			</div>
			
			
		</Layout>
	);
}

export default NotificationDetail;