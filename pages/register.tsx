// 회원가입 페이지
import CopyRights from "public/copyRights.svg";
import type {NextPage} from 'next';
import Head from "next/head";
import BACKICON from "public/back_icon.svg"
const Register: NextPage = () => {
	return (
		<div>
			<Head><title>Register</title></Head>
			
			<div>
			
				<p className="ml-2 mt-5 inline-block"><BACKICON/></p>
				<span className="ml-1 text-[#6667ab] text-lg font-black">  회원가입</span>
				   
			</div>
			<div className={"flex flex-col space-y-5 divide-y "}>
				<form className="leading-10 ml-0.5" >
				<h2 className="font-black">아이디</h2>
				<p><input className="placeholder-gray-400 rounded border-gray-400" type="text" size={40}  name="text" placeholder="영문,소문자,숫자 조합" ></input></p>
				<h2 className="font-black">비밀번호</h2>
				<p><input className="placeholder-gray-400 rounded border-gray-400" type="text" size={40} name="text" placeholder="8~20자리 영문,숫자 조합" ></input></p>
				<p><input className="placeholder-gray-400 rounded border-gray-400" type="text"size={40} name="text" placeholder="다시 입력해 주세요" ></input></p>
				<h2 className="font-black">이름</h2>
				<p><input className="placeholder-gray-400 rounded border-gray-400" type="text" size={40} name="text" placeholder="이름을 입력하세요" ></input></p>
				<h2 className="font-black">생년월일</h2>
				<p><input className="placeholder-gray-400 rounded border-gray-400" type="text" size={40} name="text" placeholder="생년월일을 입력해주세요,예:19990110" ></input></p>
				<h2 className="font-black">이메일</h2>
				<p><input className="placeholder-gray-400 rounded border-gray-400" type="text" size={40} name="text" placeholder="이메일을 입력해주세요,예:111@gmail.com" ></input></p>
				<h2 className="font-black">성별</h2>
				
				<p><input className="placeholder-gray-400 rounded border-gray-400" type="text"  size={17}name="text" placeholder="남성" ></input>&nbsp;&nbsp;&nbsp;
					<input className="placeholder-gray-400 rounded border-gray-400" type="text" size={17} name="text" placeholder="여성" ></input>
				</p>
				
				<h2 className="font-black">휴대폰번호</h2>
				<p><input className="placeholder-gray-400 rounded border-gray-400" type="text" size={40} name="text" placeholder="'-'를 제외한 숫자만 입력해주세요" ></input></p>
				<h2 className="font-black">주소</h2>
				<p><input className="placeholder-gray-400 rounded border-gray-400" type="text"  size={17}name="text" placeholder="동(스크롤로 선택)" ></input>&nbsp;&nbsp;&nbsp;
					<input className="placeholder-gray-400 rounded border-gray-400" type="text" size={17} name="text" placeholder="호(스크롤로 선택)" ></input></p>
				<h2 className="font-black">약관 동의</h2>
				<div className='choose'>
				<p><input className="w-6 h-6" type="checkbox" name="choose1" value="choose1"></input>&nbsp;&nbsp;
					<label className="font-medium text-sm">[필수]집키미 이용약관 및 개인정보처리방침 이용 동의</label></p>
				
				<input className="w-6 h-6" type="checkbox" name="choose2" value="choose2"></input>&nbsp;&nbsp;
					<label className="font-medium text-sm">[선택]푸시 알림 수신 동의</label>
				</div>
				<div className='w-80 h-14 font-black bg-[#6667ab] ml-4 mt-3 rounded'>
				<p className="text-white text-center text-lg "><input className="mt-3" type="submit" value="회원가입"></input></p>
				</div>
				<div className='mt-5 ml-14'>
				<CopyRights />	
				</div>
				</form>
			</div>
		</div>
	);
}

export default Register;