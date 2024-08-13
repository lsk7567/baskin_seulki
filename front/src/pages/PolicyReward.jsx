import React from "react";
import "../css/pages.css";

export default function PolicyReward (){
    return(
        <div className="content">

<div className="page_top">
<h2 className="title">BR리워드 이용약관</h2>
</div>
<div className="policyes_content_div">
    <select className="policyes_select">
        <option value="">시행일자  :   2023-11-23</option>
    </select>
<div className="policyes_content policyreward_box">
<p className="policeyes_text1">
    수집하는 개인정보의 항목 <br/>
    회사는 다양한 서비스 제공을 위하여, 적합한 수단을 통하여 아래와 같은 회원정보를 수집하고 있습니다.  <br/>
    ▶ 필수항목 : 아이디, 이름, 암호화된 동일인 식별번호(CI), 생년월일 및 성별(주민번호 앞7자리), 
    비밀번호, 자택주소, 이동통신사 정보, 핸드폰번호, 이메일, <br/>
    이메일/SMS/DM/TM 수신여부, 접속록, 접속IP 정보 및 쿠키 등의 정보 
</p>
</div>
</div>

</div>
    )
}