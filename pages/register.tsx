// 회원가입 페이지

import type {NextPage} from 'next'
import Layout from "../components/layout";
import Head from "next/head";

const Register: NextPage = () => {
	return (
		<Layout title={"회원가입"} hasTabBar>
			<Head><title>Register</title></Head>
			<div className={"flex flex-col space-y-5 divide-y"}>
				<form>
				<h2>아이디</h2>
				<p><input type="text" size={40}  name="text" placeholder="영문,소문자,숫자 조합" ></input></p>
				<h2>비밀번호</h2>
				<p><input type="text" size={40} name="text" placeholder="8~20자리 영문,숫자 조합" ></input></p>
				<p><input type="text"size={40} name="text" placeholder="다시 입력해 주세요" ></input></p>
				<h2>이름</h2>
				<p><input type="text" size={40} name="text" placeholder="이름을 입력하세요" ></input></p>
				<h2>생년월일</h2>
				<p><input type="text" size={40} name="text" placeholder="생년월일을 입력해주세요,예:19990110" ></input></p>
				<h2>이메일</h2>
				<p><input type="text" size={40} name="text" placeholder="이메일을 입력해주세요,예:111@gmail.com" ></input></p>
				<h2>성별</h2>
				
				<p><input type="text"  size={17}name="text" placeholder="남성" ></input>&nbsp;&nbsp;&nbsp;
					<input type="text" size={17} name="text" placeholder="여성" ></input>
				</p>
				
				<h2>휴대폰번호</h2>
				<p><input type="text" size={40} name="text" placeholder="'-'를 제외한 숫자만 입력해주세요" ></input></p>
				<h2>주소</h2>
				<p><input type="text" size={40} name="text" placeholder="주소를 입력해주세요,예:1071동201호" ></input></p>
				<h2>약관 동의</h2>
				<div className='choose'>
				<p><input type="checkbox" name="choose1" value="choose1"></input>&nbsp;&nbsp;
					<label>[필수]집키미 이용약관 및 개인정보처리방침 이용 동의</label></p>
				
				<input type="checkbox" name="choose2" value="choose2"></input>&nbsp;&nbsp;
					<label>[선택]푸시 알림 수신 동의</label>
				</div>
				<div className='memberjoin'>
				<p><input type="submit" value="회원가입"></input></p>
				</div>
				
				</form>
			</div>
		</Layout>
	);
}

export default Register;