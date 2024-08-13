// Step1 유효성 체크 (체크박스 둘 다 체크되어있는지 확인)
// -> 체크 안되어있는 박스는 빨간테두리 출력
//! 험수형태라서 파라미터 중괄호로 감싸기 X!!
export const validateCheckStep1 = (next, formData) => {
  if (!formData.service) {
    alert("회원이용약관에 동의해주세요");
    document.getElementById("service").style.outline = "2px solid red";
  } else if (!formData.personal) {
    alert("개인정보 수집 및 이용동의 약관에 동의해주세요");
    document.getElementById("personal").style.outline = "2px solid red";
  } else {
    next();
  }
};

// Step1 유효성 체크 실행 후 체크했을때 빨간테두리(outline) 해제
export const handleFocus = (type) => {
  if (type === "service") {
    document.getElementById("service").style.outline = "none";
  } else if (type === "personal") {
    document.getElementById("personal").style.outline = "none";
  } else if (type === "all") {
    document.getElementById("service").style.outline = "none";
    document.getElementById("personal").style.outline = "none";
  }
};

//TODO Step2 유효성체크
export const validateCheckStep2 = (formData, refs, setFormError) => {
  let checkFlag = true;
  const errors = {};

  if (refs.userIdRef.current.value === "") {
    //* ↑ refs 이용한 조건작성 방법
    // if (!formData.userId.trim()) { //* formData 이용한 조건작성 방법
    alert("아이디를 입력해주세요");
    errors.id = "아이디를 입력해주세요!";
    refs.userIdRef.current.focus();
    checkFlag = false;
  } else if (!formData.userPass.trim()) {
    alert("비밀번호를 입력해주세요");
    errors.pw = "비밀번호를 입력해주세요!";
    refs.userPassRef.current.focus();
    checkFlag = false;
  } else if (!formData.userPassCheck.trim()) {
    alert("비밀번호 확인을 입력해주세요");
    errors.pwc = "비밀번호 확인을 입력해주세요!";
    refs.userPassCheckRef.current.focus();
    checkFlag = false;
  } else if (!formData.userName.trim()) {
    alert("이름을 입력해주세요");
    errors.name = "이름을 입력해주세요!";
    refs.userNameRef.current.focus();
    checkFlag = false;
  } else if (!formData.emailId.trim()) {
    alert("이메일 아이디를 입력해주세요");
    errors.email = "이메일 아이디를 입력해주세요!";
    refs.emailIdRef.current.focus();
    checkFlag = false;
  } else if (refs.emailDomainRef.current.value === "") {
    alert("이메일 주소를 입력해주세요");
    errors.email = "이메일 주소를 입력해주세요!";
    refs.emailDomainRef.current.focus();
    checkFlag = false;
  } else if (!formData.phoneNumber2.trim()) {
    alert("휴대폰 뒷자리를 입력해주세요");
    errors.phone = "휴대폰 번호를 입력해주세요!";
    refs.phoneNumber2Ref.current.focus();
    checkFlag = false;
  }

  setFormError(errors);
  return checkFlag;
};

//TODO Step2 비밀번호와 비밀번호 확인이 일치하는지 체크
export const passCheck = (refs) => {
  let checkFlag = true;

  const pass = refs.userPassRef.current;
  const passCheck = refs.userPassCheckRef.current;

  if (pass.value !== passCheck.value) {
    alert("비밀번호가 일치하지 않습니다");
    pass.value = "";
    passCheck.value = "";
    pass.focus();
    checkFlag = false;
  } else {
    alert("비밀번호가 일치합니다!");
  }
  return checkFlag;
};

//TODO Step2 선택한 이메일도메인이 출력되게하기
export const emailDomain = (e, refs, handleChange) => {
  const name = e.target.name;
  const value = e.target.value;
  if (value === "self") {
    refs.emailDomainRef.current.value = "";
    refs.emailDomainRef.current.focus();
  } else {
    refs.emailDomainRef.current.value = value;
    handleChange(e);
  }
};
