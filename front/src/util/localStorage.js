import { getCookie, removeCookies } from "./cookies.js";

// 로그인하기 ( 회원인지 아닌지 구분해줌 )
export const getUser = () => {
  let userInfo =
    localStorage.getItem("userInfo") && getCookie("x-auth-jwt")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;

  return userInfo;
};

// 로그아웃 했을때
export const removeUser = () => {
  removeCookies("x-auth-jwt");
  localStorage.clear();
};
