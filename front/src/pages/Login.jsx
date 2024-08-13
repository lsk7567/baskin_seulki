import React, { useState, useRef } from "react";
import axios from "axios";
import * as cookie from "../util/cookies.js";
import { jwtDecode } from "jwt-decode";
import login from "../video/login3.mp4";
import "../css/seulki.css";
import "../css/animation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpoon } from "@fortawesome/free-solid-svg-icons/faSpoon";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ id: "", pw: "" });
  const userIdRef = useRef(null);
  const userPwRef = useRef(null);
  const navigate = useNavigate();

  const videoRef = useRef();
  const setPlayBackRate = () => {
    videoRef.current.setPlayBackRate = 0.5;
  };

  //TODO 변화감지
  const handleChange = (e) => {
    const { name, value } = e.target; //! {name:value} 형태 고정
    setFormData({ ...formData, [name]: value }); // ...formData 이걸로 처음 데이터 저장해두고, [name]: value로 바뀐값만 변경해줌
  };

  //TODO 서버전송 (★서버전송전에 유효성검사는 필수사항!)
  /* 서버에 전송하는 방법 두가지
  GET 방식 : 패킷의 header 부분에 붙어서 넘어감 [url] => axios.get() ==> /:id
  POST 방식 : 패킷의 body부분에 붙어서 넘어감 => axios.post()
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationCheck()) {
      console.log(formData); // formData 안에 있는것 -> id랑 pw
      const url = "http://127.0.0.1:8080/member/login";

      //! 보내야 할 데이터가 많은 경우에는 POST방식을 사용해야 함!
      axios({
        method: "POST",
        url: url,
        data: formData,
      })
        .then((res) => {
          // console.log("res ==> ", res.data);
          if (res.data.cnt === 1) {
            console.log("token ==>", res.data.token);
            // ↓ 쿠키에 토큰 저장하기
            cookie.setCookie("x-auth-jwt", res.data.token); //* localStorage.js의 getCookie에 설정한 이름
            // ↓ 토큰에서 userInfo 정보를 로컬스토리지에 저장하기
            const userInfo = jwtDecode(res.data.token);
            // alert(JSON.stringify(userInfo));
            localStorage.setItem("userInfo", JSON.stringify(userInfo)); // ★리액트에서 제공되는 함수. localStorage.js랑 다른거임!!

            alert("로그인 성공! 메인으로 이동합니다");
            navigate("/"); // 메인화면으로 이동
          } else {
            alert("아이디와 패스워드를 확인해주세요");
            // userIdRef.current.value = ""; // 이렇게 입력하면 히스토리에 기록이 남음
            // userPwRef.current.value = "";
            setFormData({ id: "", pw: "" }); // 입력했던 값들이 히스토리에 남지않도록 하기
            userIdRef.current.focus();
          }
        })
        .catch((error) => console.log(error));
    }
  };

  //TODO 유효성 검사
  const validationCheck = () => {
    let checkFlag = true;
    if (!formData.id.trim()) {
      alert("아이디를 입력해주세요");
      userIdRef.current.focus();
      checkFlag = false;
    } else if (!formData.pw.trim()) {
      alert("패스워드를 입력해주세요");
      userPwRef.current.focus();
      checkFlag = false;
    }
    return checkFlag;
  };

  return (
    <div className="content login_form">
      <div>
        <video
          muted
          autoPlay
          loop
          ref={videoRef}
          onCanPlay={() => setPlayBackRate()}
          width="600px"
          height="160px"
        >
          <source src={login} type="video/mp4" />
        </video>
        <div className="word1">
          <span>We make people happy!</span>
          <span>한달 31일 내내 새로운 맛을 선사합니다</span>
        </div>
      </div>
      <div className="login_line"></div>
      <form onSubmit={handleSubmit}>
        <ul className="login_form_ul">
          <li>
            <input
              className="login_input"
              type="text"
              name="id"
              value={formData.id}
              placeholder="아이디"
              onChange={handleChange}
              ref={userIdRef}
            ></input>
          </li>
          <li>
            <input
              className="login_input"
              type="password"
              name="pw"
              value={formData.pw}
              placeholder="비밀번호"
              onChange={handleChange}
              ref={userPwRef}
            ></input>
          </li>
          <li>
            <button className="login_button" type="submit">
              로그인
            </button>
          </li>
        </ul>

        <p className="word3">
          베스킨라빈스 회원이 아니시라면 지금 베스킨라빈스에
          <br />
          가입하시고 다양한 혜택을 경험하세요
        </p>
        <div>
          <Link to="/signup">
            <button className="signup_button">
              <FontAwesomeIcon icon={faSpoon} className="login_spoon" />
              &nbsp; 베스킨라빈스 가입
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
