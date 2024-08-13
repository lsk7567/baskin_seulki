// import { promises as fspromises } from "fs"; //! 안쓰는 import는 주석처리해두기
import { db } from "../db/database_mysql80.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//TODO 로그인처리
export const getLogin = async (userId, userPass) => {
  let login_result = 0;
  let login_token = "";

  const sql = `select count(user_id) as cnt, any_value(user_pass) as user_pass 
              from br_member 
              where user_id = ?`;
  //! MySQL 로그인처리 부분 코드 그대로 복사해서사용. id부분은 파라미터라 ?넣어주기

  try {
    const [result] = await db.execute(sql, [userId]);
    console.log("result ==>", result); // [{cnt:1, user_pass:~}]

    if (result[0].cnt === 1) {
      const passCheck = bcrypt.compareSync(userPass, result[0].user_pass);
      if (passCheck) login_result = 1;

      // ↓ 토큰생성하기 (jsonwebtoken 사용)
      login_token = jwt.sign({ userId: userId }, "MTIzNA==");
      console.log("token ==>", jwt_token);
    }
    //* 로그인 실패하면 login_sesult = 0 줘야하는데 위에서 기본값 0으로 설정해줘서 else 구간은 생략함
  } catch (error) {}

  return { cnt: login_result, token: login_token };
};

//   //* 패스워드 체크 후 cnt숫자로 결과전송 (cnt는 이름 임의로 정한것임. 다른이름으로 정하기도 가능!)
//   //* 로그인 성공히면 : {cnt : 1}
//   //* 로그인 실패하면 : {cnt : 0}
//   //* --> cnt 결과는 Login.jsx에서 사용함!

//TODO 아이디 중복확인
export const getIdCheck = async (userId) => {
  const sql = `
select count(user_id) as cnt from br_member where user_id = ?
`; //! MySQL 아이디중복체크부분 코드 그대로 복사해서사용. id부분은 파라미터라 ?넣어주기

  return db.execute(sql, [userId]).then((result) => result[0][0]); // result => [rows[0], fields[0]]
  //* result => [rows[{user_id : 1 또는 0}], fields[]]
  //* -> { cnt : 1 } 또는 { cnt : 0 } 로 반환됨
};

//TODO 회원가입
export const getSignup = async (formData) => {
  let result_rows = 0;

  console.log("formData ==> ", formData);

  //TODO phone : "010-1234-1234" 로 세팅하기
  const phone1 = formData.phoneNumber1;
  let phone2 = "";
  let phone3 = "";

  // 전화번호 가운데자리는 3~4자리여서 두가지 경우 세팅법이 다름
  if (formData.phoneNumber2.length === 8) {
    phone2 = formData.phoneNumber2.slice(0, 4);
    phone3 = formData.phoneNumber2.slice(4);
  } else {
    phone2 = formData.phoneNumber2.slice(0, 3);
    phone3 = formData.phoneNumber2.slice(3);
  }

  console.log("phone ==> ", phone1.concat("-", phone2, "-", phone3));

  // 패스워드 암호화 테스트
  // const hpass = bcrypt.hashSync(formData.userPass, 7);
  // console.log("hash ==> ", hpass);
  // console.log("hash length ==> ", hpass.length);

  //TODO db연동하기
  const params = [
    formData.userId,
    // formData.userPass, // 패스워드 암호화 사용전
    bcrypt.hashSync(formData.userPass, 7), // 패스워드 암호화
    formData.userName,
    formData.emailId,
    formData.emailDomain,
    phone1.concat("-", phone2, "-", phone3),
    formData.zipcode,
    formData.address.concat("", formData.detailAddress),
  ];

  const sql = `
insert into br_member(  user_id,
                            user_pass,
                            user_name,
                            email_id,
                            email_domain,
                            phone,
                            zipcode,
                            address,
                            signup_date
                          )
                    values( ?,?,?,?,?,?,?,?,now())
`;

  // console.log("sql ==> ", sql);
  try {
    const [result] = await db.execute(sql, params);
    result_rows = result.affectedRows;
    console.log("rows ==>", result.affectedRows);
  } catch (error) {
    console.log(error);
  }

  return { cnt: result_rows }; // db에서 오류발생하면 리액트에서도 가입완료페이지로 못넘어가게 하기
};
