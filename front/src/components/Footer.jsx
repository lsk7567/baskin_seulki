import React, { useState } from "react";
import { Link } from "react-router-dom";
import  '../css/footer.css'
import MenuList from "./MenuList.jsx";


export default function Footer() {

  // select box 
  const selectList = [
    {value :'', name : 'FAMILY SITE'},
    {value :'https://www.spc.co.kr/', name : 'SPC그룹사이트'},
    {value :'https://www.spcmagazine.com/', name : 'SPC MAGAZINE'},
    {value :'https://www.happypointcard.com/page/main/index.spc;jsessionid=CCBA4D2721ACDE8DA5605FFE0E96E5AC', name : '해피포인트카드'},
    {value :'https://www.caffe-pascucci.co.kr/', name : '파스쿠찌'},
    {value :'https://spcsamlip.co.kr/', name : '삼립'},
    {value :'https://www.paris.co.kr/', name : '파리바게트'},
    {value :'https://www.dunkindonuts.co.kr/', name : '던킨도너츠'},
  ]

  const handleSelect = (e) => {
/*     console.log('e->', e.target.value); */
    window.open(e.target.value)
  }

  

  return (
    <div className="footer_outer">
   {/*    <div className="footer"> */}
      <div>
        <nav>
          <ul className="footer_top_navs">
<li><Link to="/store/newstore"><p className="footer_top_nav">신규직영점 입점제의</p></Link></li>
<li><Link to="/store/openstore"><p className="footer_top_nav">점포개설문의</p></Link></li>
<li><a href="https://spc.recruiter.co.kr/appsite/company/index"><p className="footer_top_nav">채용문의</p></a></li>
<li><a href="https://www.spc.co.kr/share/right-mng/spc-operation/"><p className="footer_top_nav">윤리신고센터</p></a></li>
<li><a href="https://www.happypointcard.com/page/customer/term.spc"><p className="footer_top_nav">해피포인트카드 이용약관</p></a></li>
<li><Link to="/cscenter/policy-reward"><p className="footer_top_nav">베스킨라빈스 리워드 이용약관</p></Link></li>
<li><Link to="/cscenter/policy"><p className="footer_top_nav">개인정보처리방침</p></Link></li>
<li><Link to="/cscenter/policy-cctv"><p className="footer_top_nav">영상정보처리기기운영관리방침</p></Link></li>
<li><Link to="/cscenter/safety-management"><p className="footer_top_nav">안전보건 경영방침</p></Link></li>
          </ul> 
        </nav>
      </div>
<div className="footer_mid">  
  <div>
        <ul className="footer_mid_left">
          <li>
            <img className="footer_logo" src="/images/footer_brlogo.png" />
          </li>
          <li>사업자 등록번호 : 303-81-09535</li>
          <li>비알코리아(주)대표이사 도세호</li>
          <li>서울특별시 서초구 남부순환로 2620(양재동 11-149번지)</li>
          <li>TEL : 080-555-3131</li>
          <li>개인정보관리책임자 : 조성희/상무보</li>
   <br/> <br/>
          <li>Copyright © 2023 BRKOREA Company. All Rights Reserved.</li>
        </ul>
      </div>
      <div><MenuList /></div>
</div>
    

      <div className="footer_bottom">
        <div>
          <a href="https://www.happypointcard.com/page/main/index.spc">
            <img className="footer_bottom_img" src="/images/btn_happy_point.png" />
          </a>

          <a href="https://m.celectory.com/mobile/gift/recommend;jsessionid=fnRBrqkBa13UVG3epczaA1KY-Yl9C_13mIwvfMYAc1aaIg6mxo5E!1522053897!84788894">
            <img className="footer_bottom_img" src="/images/btn_happy_market.png" />
          </a>
          <a href="https://www.spc.co.kr/share/spc-foundation/introduction/">
            <img className="footer_bottom_img" src="/images/btn_spc_story.png" />
          </a>
          <a href="https://knqa.ksa.or.kr/knqa/2276/subview.do">
            <img className="footer_bottom_img" src="/images/btn_ksa.png" />
          </a>
          <a href="https://www.kca.go.kr/ccm/">
            <img className="footer_bottom_img" src="/images/btn_ccm.png" />
          </a>
        </div>


        <div className="footer_bottom_right">
          <a href="https://www.instagram.com/baskinrobbinskorea/">
              <img className="footer_bottom_img" src="/images/btn_instagram.png"  />
          </a>
          <a href="https://www.youtube.com/channel/UCdUlCaxi7gx9Q-WDVDe30YA">
              <img className="footer_bottom_img" src="/images/btn_youtube.png"  />
          </a>
          <a href="https://www.facebook.com/baskinrobbinskr/?locale=ko_KR">
              <img className="footer_bottom_img" src="/images/btn_facebook.png"  />
          </a>

<select className="footer_selectbox" 
        onChange={handleSelect}>
  {selectList.map((item)=>(
    <option value={item.value} key={item.value}>{item.name}</option>
  ))}
  </select>



        </div>
      </div>
     {/*  </div> */}
    </div>
  );
}
