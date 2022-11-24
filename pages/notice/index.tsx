import type {NextPage} from 'next'
import Layout from "@components/Layout";
import Head from "next/head";
import NOTICEICON from "public/notice_icon.svg"
import Link from "next/link";

const Notice: NextPage = () => {
	return (
		<Layout title={"공지사항"} hasTabBar canGoBack>
			<Head><title>Notice</title></Head>
			<Link className='bg-[#6667ab]  visited:bg-[#FFFFFF]' href={"/notice/[id].tsx" } legacyBehavior>
			<div className={"flex flex-col space-y-0 divide-y "}>
				{/* 공지내용6 */}
			<section className={"bg-[#6667ab] bg-opacity-20 px-3 h-28 border-gray-300 "}>
			 	<p className='font-black text-xl mt-10 ml-2'> <span className='inline-block' ><NOTICEICON/></span> [공지] 공지내용 6</p>
			</section>
				{/* 공지내용5 */}
			<section className={"bg-white bg-opacity-20 px-3 h-28 border-gray-300"}>
			 	<p className='font-black text-xl mt-10 ml-2'> <span className='inline-block' ><NOTICEICON/></span> [공지] 공지내용 5</p>
			</section>
				{/* 공지내용4 */}
			<section className={"bg-white bg-opacity-20 px-3 h-28 border-gray-300"}>
			 	<p className='font-black text-xl mt-10 ml-2'> <span className='inline-block' ><NOTICEICON/></span> [공지] 공지내용 4</p>
			</section>
				{/* 공지내용3 */}
			<section className={"bg-white bg-opacity-20 px-3 h-28 border-gray-300 "}>
			 	<p className='font-black text-xl mt-10 ml-2'> <span className='inline-block' ><NOTICEICON/></span> [공지] 공지내용 3</p>
			</section>
				{/* 공지내용2 */}
			<section className={"bg-white bg-opacity-20 px-3 h-28 border-gray-300 "}>
			 	<p className='font-black text-xl mt-10 ml-2'> <span className='inline-block' ><NOTICEICON/></span> [공지] 공지내용 2</p>
			</section>
				{/* 공지내용1 */}
			<section className={"bg-white bg-opacity-20 px-3 h-28 border-gray-300 "}>
			 	<p className='font-black text-xl mt-10 ml-2'> <span className='inline-block' ><NOTICEICON/></span> [공지] 공지내용 1</p>
			</section>
						
			</div>
			</Link>
		</Layout>
	);
}

export default Notice;