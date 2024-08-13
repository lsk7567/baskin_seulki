import React, { useState } from "react";
import { validateCheckStep1, handleFocus } from "../apis/seulkiValidate.js";
import { SignupDesc1, SignupDesc2, SignupDesc3 } from "./SignupDesc.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

export default function SignupStep1({ next, formData, handleCheck }) {
  const [showProduct, setShowProduct] = useState(false);
  const [showProduct2, setShowProduct2] = useState(false);
  const [showProduct3, setShowProduct3] = useState(false);

  const handleClick1 = () => setShowProduct(!showProduct);
  const handleClick2 = () => setShowProduct2(!showProduct2);
  const handleClick3 = () => setShowProduct3(!showProduct3);
  // alert(showProduct); -> 현재값 false
  // setShowProduct(true); -> 현재값인 false를 true로 바꿔줌
  // 느낌표! 사용해서 간단하게 반대값으로 바꿔줌

  return (
    <div className="signup_form">
      <h2 className="step1_title">
        <span className="signup_point">약관동의</span>
        <FontAwesomeIcon className="signup_icon" icon={faRightLong} />
        정보입력
        <FontAwesomeIcon className="signup_icon" icon={faRightLong} /> 가입완료
      </h2>

      <div className="step1_div">
        <h3>회원가입에 필요한 약관에 동의합니다</h3>
        <div>
          <div>
            <input
              type="checkbox"
              onChange={(e) => handleCheck("all", e.target.checked)}
              onFocus={() => handleFocus("all")}
            />
            <span>모두 동의합니다</span>
          </div>
          <div>
            <p className="step1_p">
              전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며,
              개별적으로도 동의를 선택하실 수 있습니다. <br />
              선택항목에 대한 동의를 거부하시는 경우여도 서비스는 이용이
              가능합니다.
            </p>
          </div>
        </div>

        <div>
          <div className="seulki_flex step1_desc_header">
            <h4>
              <span className="signup_point">[필수]</span>&nbsp;배스킨라빈스
              회원이용약관
            </h4>
            <button
              className="step1_desc_btn"
              type="button"
              onClick={handleClick1}
            >
              약관보기
            </button>
          </div>

          {showProduct && (
            <div>
              <SignupDesc1 />
            </div>
          )}

          <div>
            <input
              type="checkbox"
              name="service"
              id="service"
              checked={formData.service}
              onChange={() => handleCheck("service")}
              onFocus={() => handleFocus("service")}
            />
            <span>동의합니다</span>
          </div>
        </div>

        <div>
          <div className="seulki_flex step1_desc_header">
            <h4>
              <span className="signup_point">[필수]</span>&nbsp;개인정보 수집 및
              이용동의
            </h4>
            <button
              className="step1_desc_btn"
              type="button"
              onClick={handleClick2}
            >
              약관보기
            </button>
          </div>

          {showProduct2 && (
            <div>
              <SignupDesc2 />
            </div>
          )}

          <div>
            <input
              type="checkbox"
              name="personal"
              id="personal"
              checked={formData.personal}
              onChange={() => handleCheck("personal")}
              onFocus={() => handleFocus("personal")}
            />
            <span>동의합니다</span>
          </div>
        </div>

        <div>
          <div className="seulki_flex step1_desc_header">
            <h4>[선택]&nbsp;위치기반서비스 이용약관</h4>
            <button
              className="step1_desc_btn"
              type="button"
              onClick={handleClick3}
            >
              약관보기
            </button>
          </div>

          {showProduct3 && (
            <div>
              <SignupDesc3 />
            </div>
          )}

          <div>
            <input
              type="checkbox"
              name="choose"
              id="choose"
              checked={formData.choose}
              onChange={() => handleCheck("choose")}
              onFocus={() => handleFocus("choose")}
            />
            <span>동의합니다</span>
          </div>
        </div>
      </div>

      <button
        className="step1_button"
        type="button"
        onClick={() => validateCheckStep1(next, formData)}
      >
        다음
      </button>
    </div>
  );
}
