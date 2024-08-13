import React from "react";
import "../css/pages.css";
import "../css/menulist.css";
import { Link } from "react-router-dom";

export default function Ccm(){
    const menu = [
        { path: "/cscenter", name: "고객센터" },
        { path: "/cscenter/ccm", name: "소비자중심경영(CCM)" },
        { path: "/cscenter/praise", name: "칭찬점포" },
        { path: "/cscenter/notice", name: "공지사항" },
      ];
    
    return(
        <div className="content">

<div className="page_navbars_div">
   <ul className="page_navbars">
        {menu.map((item) => (
      <li className="page_navbar page_cscenter_navbar">
      <Link to={item.path} className="page_navbar_text" >
          {item.name}
          </Link>
          </li>
        ))}
      </ul>
    </div>




<div className="page_top">
<h2 className="title">소비자 중심경영 우수기업</h2>

</div>
<div className="ccm_contents">

    <div className="ccm_content">
        <div className="ccm_text">
            <p className="ccm_subtitle">소비자 중심경영 우수기업(CCM)</p>
            <br />
            <p className="ccm_info">
            배스킨라빈스는 고객중심경영 철학을 바탕으로 고객의 소리를 적극 경청하고<br/> 
            ‘소비자 중심경영(CCM)’을 통해 소비자 친화적 경영 노력과 고객만족향상 <br/> 
            활동을 지속적으로 실천하고 있습니다.
            <br /> <br />
            또한, 다양한 고객불만 사전예방 활동과 사후구제, 유지, 개선 프로그램 운영으로<br/>  
            고객 니즈가 현장에서 반영되어 고객만족 향상과 기업의 경쟁력이 제고 될 수 있도록 노력하겠습니다.
            </p>
        </div>
<img src="/images/ccm/ccm_chart.png" alt="ccm_chart" className="ccm_chart_img"/>
    </div>

    <div className="ccm_content">
        <div className="ccm_text">
        <p className="ccm_subtitle">CCM이란?</p>
        <br/>
            <p className="ccm_info">
            CCM은 Consumer Centered Management의 약자로 “소비자 중심경영“ <br/> 
            말합니다.“소비자 중심경영” 이란 기업이 수행하는 모든 활동을 소비자관점에서,<br/>  
            소비자 중심으로 구성하고 관련 경영활동을 지속적으로 개선하고 있는지를<br/>  
            평가하여 인증하는 제도 입니다.
            <br/><br/>
            배스킨라빈스는 공정거래위원회와 한국소비자원으로부터 프랜차이즈 업계<br/> 
            최초로 CCM 기업으로 인증 받았습니다.
            </p>
            </div>
            <div className="ccm_certies">
            <p className="ccm_subtitle">우리의 CCM인증서</p>
            <br />
            <div className="ccm_certi_imgs">    
                <img className="ccm_certi_img"src="/images/ccm/ccm_certificate.png" alt="ccm_certi" />
                <img className="ccm_certi_img"src="/images/ccm/ccm_certificate_en.png" alt="ccm_certi" /></div>
            

            </div>


</div>

</div>

</div>
    )
}