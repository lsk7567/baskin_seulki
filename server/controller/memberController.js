import * as repository from "../repository/memberRepository.js";

//TODO 로그인처리
export const getLogin = async (req, res) => {
  const { id, pw } = req.body; //! ★ 구조분해할당시, 넘어오는 곳에서 지정한 이름과 동일하게 받아야함!
  const result = await repository.getLogin(id, pw);
  // console.log("result ==> ", id, pw);
  res.json(result);
  res.end();
};

//TODO 아이디 중복확인
export const getIdCheck = async (req, res) => {
  const { userId } = req.body; //! ★ 구조분해할당시, 넘어오는 곳에서 지정한 이름과 동일하게 받아야함!
  const result = await repository.getIdCheck(userId);
  res.json(result);
  res.end();
};

//TODO 회원가입
export const getSignup = async (req, res) => {
  const formData = req.body; // 받을정보가 많을 경우 구조분해할당보다는 통째로 받는게 좋음
  // console.log("controller ==> ", formData); // 통째로 받기
  // console.log("controller ==> ", formData.userId); // 통째중에 userId부분만 받기
  const result = await repository.getSignup(formData);
  res.json(result);
  res.end();
};
