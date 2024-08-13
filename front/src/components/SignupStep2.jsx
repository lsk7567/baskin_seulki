import React from "react";
import "../css/seulki.css";
import { useRef, useState } from "react";
import {
  validateCheckStep2,
  passCheck,
  emailDomain,
} from "../apis/seulkiValidate.js";
import axios from "axios";
import DaumPostcode from "react-daum-postcode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

export default function SignupStep2({
  pre,
  next,
  formData,
  handleChange,
  handleAddress,
}) {
  const refs = {
    // 항목이 많으면 이렇게 쟁반에 담아서 꺼내쓰기 권장
    userIdRef: useRef(null),
    userPassRef: useRef(null),
    userPassCheckRef: useRef(null),
    userNameRef: useRef(null),
    emailIdRef: useRef(null),
    emailDomainRef: useRef(null),
    phoneNumber1Ref: useRef(null),
    phoneNumber2Ref: useRef(null),
    zipcodeRef: useRef(null),
    addressRef: useRef(null),
    detailAddressRef: useRef(null),
  };

  //TODO 주소검색버튼 Toggle
  const [isOpen, setIsOpen] = useState(false); // 기본값 false로 설정해서 처음에는 주소검색창 안보이게 하기

  //TODO 필수항목 변화감지
  const [formError, setFormError] = useState({
    id: "",
    pw: "",
    pwc: "",
    name: "",
    email: "",
    phone: "",
  });

  //TODO 주소검색버튼
  const handleToggle = () => {
    setIsOpen(true);
  };

  //TODO ★ DaumPostcode 관련 디자인 및 이벤트
  const themeObj = {
    bgColor: "#FFFFFF", // 바탕 배경색
    pageBgColor: "#FFFFFF", // 페이지 배경색
    postcodeTextColor: "#C05850", // 우편번호 글자색
    emphTextColor: "#222222", // 강조글자색
  };

  const postCodeStyle = {
    width: "360px",
    height: "480px",
  };

  const completeHandler = (data) => {
    const { address, zonecode } = data; //! {address,zonecode} 이름고정. 임의로 변경하면 안됨!!
    handleAddress({ zipcode: zonecode, address: address });
  };

  const closeHandler = (state) => {
    if (state === "FORCE_CLOSE") {
      setIsOpen(false);
    } else if (state === "COMPLETE_CLOSE") {
      setIsOpen(false);
      // refs.detailAddressRef.current.value = ""; 실행이 안되서 일단 보류처리
      refs.detailAddressRef.current.focus();
    }
  };

  //TODO 서버전송
  const handleSubmit = () => {
    if (validateCheckStep2(formData, refs, setFormError)) {
      //* ↑ 파라미터 두개중에 refs만 쓰는경우는 if(validateCheckStep2(refs)) 이렇게 작성하면 됨!
      if (passCheck(refs)) {
        //서버전송 : formData ==> 서버(NodeJS/Java/C#) ==> DB(MySQL) 저장
        //성공 -> next()
        //실패 -> 에러페이지
        console.log("submit ===>", formData);

        const url = "http://127.0.0.1:8080/member/signup";

        axios({
          method: "POST",
          url: url,
          data: formData,
        })
          .then((res) => {
            if (res.data.cnt === 1) {
              alert("회원가입을 축하합니다!");
              next();
            } else {
              alert("회원가입 실패");
            }
          })
          .catch((error) => console.log(error));

        next();
      }
    }
  };

  //TODO 아이디 중복확인 버튼
  const handleIdCheck = () => {
    if (refs.userIdRef.current.value === "") {
      alert("아이디를 입력해주세요");
      refs.userIdRef.current.focus();
    } else {
      //서버연동 -> 사용중 : {cnt : 1}, 사용가능 : {cnt : 0}
      const url = "http://127.0.0.1:8080/member/idCheck";
      const userId = refs.userIdRef.current.value;
      axios({
        method: "POST",
        url: url,
        data: { userId: userId },
      })
        .then((res) => {
          console.log(res.data);
          if (res.data.cnt === 1) {
            alert("이미 사용중인 아이디 입니다. 다시 입력해주세요");
            refs.userIdRef.current.focus(); // 아예 빈칸으로 다시만들어주기보다는 입력한아이디를 변경할 수 있도록 해주는게 좋아보임
          } else {
            alert("사용 가능한 아이디입니다.");
            refs.userPassRef.current.focus();
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="signup_form">
      <h2 className="step1_title">
        약관동의
        <FontAwesomeIcon className="signup_icon" icon={faRightLong} />
        <span className="signup_point">정보입력</span>
        <FontAwesomeIcon className="signup_icon" icon={faRightLong} />
        가입완료
      </h2>
      <div className="step2_div">
        <div>
          <h3>회원정보입력</h3>
          <div className="step2_div_p">
            <p>회원가입에 필요한 정보를 입력합니다</p>
            <p>
              <span className="uni_s">*</span>은 필수항목 입니다
            </p>
          </div>
        </div>
        <form>
          <ul className="signup_info">
            <li>
              <p className="step2_info_p">
                <span className="uni_s">*</span>아이디
                <span className="uni_s step2_error">{formError.id}</span>
              </p>
              <input
                type="text"
                name="userId"
                value={formData.userId}
                placeholder=" 6~12자, 영문자, 숫자"
                onChange={handleChange}
                ref={refs.userIdRef}
              />
              <button
                className="step1_desc_btn step2_id_btn"
                type="button"
                onClick={handleIdCheck}
              >
                중복확인
              </button>
            </li>
            <li>
              <p className="step2_info_p">
                <span className="uni_s">*</span>비밀번호
                <span className="uni_s step2_error">{formError.pw}</span>
              </p>
              <input
                type="text"
                name="userPass"
                value={formData.userPass}
                placeholder=" 8~16자리 영문자, 숫자, 특수문자 중 2개 조합"
                onChange={handleChange}
                ref={refs.userPassRef}
              />
            </li>
            <li>
              <p className="step2_info_p">
                <span className="uni_s">*</span>비밀번호 확인
                <span className="uni_s step2_error">{formError.pwc}</span>
              </p>
              <input
                type="text"
                name="userPassCheck"
                value={formData.userPassCheck}
                placeholder=" 비밀번호 재입력"
                onChange={handleChange}
                ref={refs.userPassCheckRef}
              />
            </li>
            <li>
              <p className="step2_info_p">
                <span className="uni_s">*</span>이름
                <span className="uni_s step2_error">{formError.name}</span>
              </p>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                placeholder=" 한글/영문으로 입력해주세요"
                onChange={handleChange}
                ref={refs.userNameRef}
              />
            </li>
            <li>
              <p className="step2_info_p">
                <span className="uni_s">*</span>이메일
                <span className="uni_s step2_error">{formError.email}</span>
              </p>
              <input
                className="step2_email_input"
                type="text"
                name="emailId"
                value={formData.emailIdRef}
                onChange={handleChange}
                ref={refs.emailIdRef}
              />
              @
              <input
                className="step2_email_input"
                type="text"
                name="emailDomain"
                value={formData.emailDomain}
                onChange={handleChange}
                ref={refs.emailDomainRef}
              />
              <select
                className="step2_email"
                name="emailDomain"
                onChange={(e) => emailDomain(e, refs, handleChange)}
              >
                <option value="self">직접입력</option>
                <option value="naver.com">naver.com</option>
                <option value="gmail.com">gmail.com</option>
              </select>
            </li>
            <li>
              <p className="step2_info_p">
                <span className="uni_s">*</span>휴대폰 번호
                <span className="uni_s step2_error">{formError.phone}</span>
              </p>
              <select className="step2_phone" name="phoneNumber1">
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="012">012</option>
                <option value="013">013</option>
              </select>
              <input
                type="text"
                name="phoneNumber2"
                value={formData.phoneNumber2}
                placeholder=" - 없이 입력해주세요"
                onChange={handleChange}
                ref={refs.phoneNumber2Ref}
              ></input>
            </li>
            <li>
              <p className="step2_info_p">주소</p>
              <div>
                <input
                  className="step2_zipcode_input"
                  type="text"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  placeholder=" 우편번호"
                ></input>
                <button
                  className="step1_desc_btn step2_id_btn"
                  type="button"
                  onClick={handleToggle}
                >
                  주소검색
                </button>
              </div>

              <input
                className="step2_addrres_input"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder=" 기본주소를 입력하세요"
              />
              <input
                type="text"
                name="detailAddress"
                value={formData.detailAddress}
                onChange={handleChange}
                ref={refs.detailAddressRef}
                placeholder=" 상세주소를 입력하세요"
              />

              {isOpen && (
                /* [ isOpen && ]을 안쓰면 주소검색창이 계속 떠있게 됨! */
                <div>
                  {/* ★중요!! Postcode 사용시 <div>로 꼭 감싸줘야함!!!! */}
                  <DaumPostcode
                    className="delivery_postmodal"
                    theme={themeObj}
                    style={postCodeStyle}
                    onComplete={completeHandler}
                    onClose={closeHandler}
                  />
                </div>
              )}
            </li>
          </ul>
        </form>
      </div>
      <div className="step2_button_div">
        <button className="step1_button_gray" type="button" onClick={pre}>
          이전페이지로
        </button>
        <button className="step1_button" type="button" onClick={handleSubmit}>
          가입완료
        </button>
      </div>
    </div>
  );
}
