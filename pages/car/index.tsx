// 차량 등록 페이지

import type {NextPage} from 'next'
import Layout from "@components/Layout";
import Head from "next/head";

const Car: NextPage = () => {
	return (
		<Layout title={"차량 등록"} hasTabBar canGoBack>
			<Head><title>Car</title></Head>
			<div className={"flex flex-col space-y-5 divide-y"}>
				<form>
				<div>
					<h2 className='mt-5 ml-3 font-bold'>차량번호</h2>
					<p className='ml-2'>
						<input className='placeholder-gray-300 rounded border-gray-300 text-center' type='text' size={8} name="text" placeholder='ex)12'></input>
						<input className='ml-6 placeholder-gray-300 rounded border-gray-300 text-center' type='text' size={8} name="text" placeholder='가'></input>
						<input className='ml-6 placeholder-gray-300 rounded border-gray-300 text-center' type='text' size={8} name="text" placeholder='1234'></input>
					</p>
				</div>
				<div>
					<h2 className='mt-5 ml-3 font-bold'>동·호수</h2>
					<p>
						<input className='ml-2 placeholder-gray-300 rounded border-gray-300 text-center' type='text' size={16} name="text" placeholder='동'></input>
						<input className='ml-7 placeholder-gray-300 rounded border-gray-300 text-center' type='text' size={15} name="text" placeholder='호수'></input>
					</p>
				</div>
				<div>
					<h2 className='mt-5 ml-3 font-bold'>이름</h2>
					<p>
						<input className='ml-2 placeholder-gray-300 rounded border-gray-300' type="text" size={39} name='text' placeholder='이름을 입력하세요.'></input>
					</p>
				</div>
				<div>
					<h2 className='mt-5 ml-3 font-bold'>전화번호</h2>
					<p>
						<input className='ml-2 placeholder-gray-300 rounded border-gray-300' type="text" size={39} name='text' placeholder='전화번호을 입력하세요.'></input>
					</p>
				</div>
				<div className='w-60 h-14 font-black bg-[#6667ab] ml-14 mt-40 rounded-lg opacity-80 '>
				<p className="text-white text-center text-lg "><input className="mt-3" type="submit" value="등록"></input></p>
				</div>
				</form>
			</div>
		</Layout>
	);
}

export default Car;