import React, { useState } from "react";
import "../css/seulki.css";
import SeulkiHeader from "../components/SeulkiHeader.jsx";
import SignupStep1 from "../components/SignupStep1.jsx";
import SignupStep2 from "../components/SignupStep2.jsx";
import SignupStep3 from "../components/SignupStep3.jsx";

export default function Signup() {
  const [step, setStep] = useState(1); // 기본값 1로 설정
  const [formData, setFormData] = useState({
    service: false,
    personal: false,
    choose: false,
    userId: "",
    userPass: "",
    userPassCheck: "",
    userName: "",
    emailId: "",
    emailDomain: "",
    phoneNumber1: "010",
    phoneNumber2: "",
    zipcode: "",
    address: "",
    detailAddress: "",
  }); // 각 체크박스의 기본값 false로 설정

  //TODO 이전 & 다음버튼
  const nextStep = () => {
    setStep(step + 1);
  };
  const preStep = () => {
    setStep(step - 1);
  };

  //TODO step1에서 체크박스 이벤트가 발생하면 부모에서 처리하기
  const handleCheck = (type, isChecked) => {
    // 파라미터인 type에 담기는 것 : 서비스,퍼스널 중 선택한 것
    // ※모두동의 체크박스에서는 type에 all이 들어감! handleCheck("all", e.target.checked)
    if (type === "all")
      setFormData({
        ...formData,
        service: isChecked,
        personal: isChecked,
        choose: isChecked,
      });
    else setFormData({ ...formData, [type]: !formData[type] });
  };

  //TODO step2에서 발생하는 폼의 이벤트가 발생하면 부모에서 처리하기
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //* step2의 주소검색부분
  const handleAddress = (e) => {
    setFormData({ ...formData, zipcode: e.zipcode, address: e.address });
  }; //! step2에서 zonecode를 zipcode에 넣었으니까 데이터는 e.zipcode가 됨!!

  return (
    <div>
      <div className="content signup_form">
        <SeulkiHeader title={"회원가입"} />
        <div>
          <p className="delivery_header_font signup_desc">
            We make people happy
            <span className="exclamation_mark">!</span>
            <br />
            한달 31일 내내 새로운 맛을 선사합니다
            <span className="exclamation_mark">!</span>
          </p>
        </div>
        <div className="login_line"></div>
        {step === 1 && (
          <SignupStep1
            next={nextStep}
            formData={formData}
            handleCheck={handleCheck}
          />
        )}
        {step === 2 && (
          <SignupStep2
            pre={preStep}
            next={nextStep}
            formData={formData}
            handleChange={handleChange}
            handleAddress={handleAddress}
          />
        )}
        {step === 3 && <SignupStep3 pre={preStep} />}
      </div>
      {/* step이 숫자 n과 같으면 컴포넌트 실행 */}
    </div>
  );
}
