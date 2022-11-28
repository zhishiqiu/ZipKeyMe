import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import apiHandler from "@libs/server/apiHandler";
import { withSession } from "@libs/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    account,
    password,
    name,
    birth,
    email,
    gender,
    phone,
    aptHo,
    aptDong,
    agree,
  } = req.body;

  //<회원가입 절차>
  // 아래 사항은 프론트에서 submit 전에 확인한다.
  // 1. 비밀번호 1차 입력과 2차 입력의 동일 유무
  // 2. 주소가 올바른 형식으로 작성되었는지 (ex. "104/404", 미정이지만 이런 식으로 입력하게 끔 placehold로 예시를 보여주면 될 듯.)
  // 3. 생년월일(올바른 형식과 과거의 날짜가 맞는지)[필수], email[선택], 전화번호("010"포함, "-"미포함 11글자)의 형식을 지키는 지[선택]
  //
  // 아래 사항은 본 파일에서 확인한다.
  // 1. 해당 계정의 중복 유무 검사
  // 1-a. 중복되는 계정이 없으면 2로 진행
  // 1-b. 중복되는 계정이 있으면 message와 함께 response.
  // 2. 주소에서 동, 호수를 추출하여 해당 Household가 있는지 확인
  // 2-a. 있으면 해당 houseId를 FK로 하기
  // 2-b. 없으면 새로운 HouseHold 생성 (이때 해당 가구의 aptDong이 관계를 맺은 Apartment테이블에 존재하지 않을 경우, 새로운 Apartment 또한 생성한다.)
  // 3. Apartment의 aptDong을 참조하는 HouseHold의 houseId를 참조하는 User 생성
  const foundUser = await client.user.findMany({
    where: {
      id: account,
    },
    select: {
      id: true,
    },
  });
  if (foundUser.length > 0)
    return res.json({ ok: false, message: "Duplicate account" });
  const registerUser = await client.user.create({
    data: {
      id: account,
      pwd: password,
      name,
      phone,
      email,
      gender,
      birth: birth + "T00:00:00.000Z",
      pushAgree: agree,
      household: {
        connectOrCreate: {
          where: {
            aptHo_aptDong: { aptHo, aptDong },
          },
          create: {
            aptHo,
            holder: name,
            apartment: {
              connectOrCreate: {
                where: {
                  aptDong,
                },
                create: {
                  aptDong,
                },
              },
            },
          },
        },
      },
    },
    include: {
      household: {
        include: {
          apartment: true,
        },
      },
    },
  });
  return res.json({ ok: true });
}

export default withSession(apiHandler({ method: ["POST"], handler }));
