// 회원가입 페이지
import CopyRights from "public/copyRights.svg";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "@components/Layout";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@components/Button";
import { useRouter } from "next/router";
import useMutation from "@libs/client/useMutation";

interface SignUpForm {
  account: string;
  password: string;
  name: string;
  birth: string;
  email: string;
  gender: boolean;
  phone: string;
  aptHo: string;
  aptDong: string;
  agree: boolean;
}

interface MutationResult {
  ok: Boolean;
  message?: string;
}

const Register: NextPage = () => {
  const [signUp, { loading, data, error }] =
    useMutation<MutationResult>("/api/users/signUp");
  const { register, handleSubmit, watch, reset } = useForm<SignUpForm>();
  const [mustAgree, setMustAgree] = useState(true);
  const [checkPassword, setCheckPassword] = useState("");
  const onValid = (validForm: SignUpForm) => {
    // if (loading) return;
    // 형식적 validation
    // signUp(validForm);
    console.log(validForm);
  };
  useEffect(() => {
    const check = watch((data) => console.log(data));
  }, [watch]);

  return (
    <Layout
      title={"회원가입"}
      canGoBack
      alarmBtnDisable
    >
      <Head>
        <title>Register</title>
      </Head>

      <div className={"flex flex-col items-center mt-3 divide-y w-full"}>
        <form
          onSubmit={handleSubmit(onValid)}
          className="flex flex-col mx-2 space-y-2"
        >
          <h2 className="font-black">아이디</h2>
          <p>
            <input
              className="w-full placeholder-gray-300 rounded-xl border-gray-300"
              type="text"
              placeholder="영문,소문자,숫자 조합"
              {...register("account", {
                required: true,
              })}
            ></input>
          </p>
          <h2 className="font-black">비밀번호</h2>
          <p>
            <input
              className="w-full placeholder-gray-300 rounded-xl border-gray-300"
              type="password"
              size={40}
              placeholder="8~20자리 영문,숫자 조합"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 20,
              })}
            ></input>
          </p>
          <p>
            <input
              className="w-full placeholder-gray-300 mt-3 rounded-xl border-gray-300"
              type="password"
              size={40}
              placeholder="다시 입력해 주세요"
              onChange={(data) => setCheckPassword(data.target.value)}
            ></input>
          </p>
          <h2 className="font-black">이름</h2>
          <p>
            <input
              className="w-full placeholder-gray-300 rounded-xl border-gray-300"
              type="text"
              size={40}
              placeholder="이름을 입력하세요"
              {...register("name", {
                required: true,
              })}
            ></input>
          </p>
          <h2 className="font-black">생년월일</h2>
          <p>
            <input
              className="w-full placeholder-gray-300 rounded-xl border-gray-300"
              type="date"
              size={40}
              placeholder="날짜선택"
              {...register("birth", {
                required: true,
              })}
            ></input>
          </p>
          <h2 className="font-black mx-2">이메일</h2>
          <p>
            <input
              className="w-full placeholder-gray-300 rounded-xl border-gray-300"
              type="email"
              size={40}
              placeholder="이메일을 입력해주세요,예:aaa111@gmail.com"
              {...register("email", {
                required: true,
              })}
            ></input>
          </p>
          <h2 className="font-black">성별</h2>
          <div className="grid grid-cols-2 ext-lg items-center space-x-1">
            <div>
              <input
                id="male"
                className="peer/male hidden"
                type="radio"
                value="MALE"
                checked
                {...register("gender", {
                  required: true,
                })}
              />
              <label
                htmlFor="male"
                className="border border-gray-300 block cursor-pointer select-none rounded-xl p-2 text-center peer-checked/male:bg-pantone peer-checked/male:text-white"
              >
                남성
              </label>
            </div>
            <div>
              <input
                id="female"
                className="peer/female hidden"
                type="radio"
                value="FEMALE"
                {...register("gender", {
                  required: true,
                })}
              />
              <label
                htmlFor="female"
                className="border border-gray-300 block cursor-pointer select-none rounded-xl p-2 text-center peer-checked/female:bg-pantone p peer-checked/female:text-white"
              >
                여성
              </label>
            </div>
          </div>
          <h2 className="font-black ">휴대폰번호</h2>
          <p>
            <input
              className="w-full placeholder-gray-300 rounded-xl border-gray-300"
              type="text"
              placeholder="'-'를 제외한 숫자만 입력해주세요"
              {...register("phone", {
                required: true,
              })}
            ></input>
          </p>
          <h2 className="font-black">주소</h2>
          <p className="flex justify-between">
            <input
              className="w-1/2 placeholder-gray-300 justify-self-auto rounded-xl border-gray-300 text-center"
              type="text"
              size={18}
              placeholder="동"
              {...register("aptDong", {
                required: true,
              })}
            ></input>
            &nbsp;&nbsp;&nbsp;
            <input
              className="w-1/2 placeholder-gray-300 justify-self-auto rounded-xl border-gray-300 text-center"
              type="text"
              size={18}
              placeholder="호"
              {...register("aptHo", {
                required: true,
              })}
            ></input>
          </p>
          <h2 className="font-black">약관 동의</h2>
          <label className="space-x-2">
            <input
              type="checkbox"
              checked={mustAgree}
              onChange={() => setMustAgree(!mustAgree)}
            />
            <span>[필수] 집키미 이용약관 및 개인정보처리방침 이용 동의</span>
          </label>

          <label className="space-x-2">
            <input
              type="checkbox"
              {...register("agree", {})}
            />
            <span>[선택] 푸시 알람 수신 동의</span>
          </label>
          <div className="py-4 font-bold">
            <Button
              large
              text={loading ? "회원가입 중" : "회원가입"}
            />
          </div>
        </form>
        <div className="flex flex-col items-center mb-2">
          <CopyRights />
        </div>
      </div>
    </Layout>
  );
};

export default Register;
