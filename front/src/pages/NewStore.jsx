import React, { useState } from "react";
import "../css/seulki.css";
import { OrderMenubar3 } from "../components/OrderMenubar.jsx";
import SeulkiHeader from "../components/SeulkiHeader.jsx";

export default function NewStore() {
  const [agreed, setAgreed] = useState(false);

  const handleClick = () => {
    if (!agreed) {
      alert("신청에 동의해주세요!");
    } else {
      alert("입점 신청하기가 완료되었습니다!");
      window.location.reload();
    }
  };

  const handleAgreeChange = (e) => {
    setAgreed(e.target.checked);
  };

  return (
    <div className="content store_form_s">
      <OrderMenubar3 />
      <SeulkiHeader title={"신규 직영점 입점 제의"} />
      <div>
        <p className="delivery_header_font">
          아이스크림 전문기업 배스킨라빈스
          <br />
          한달 31일 내내 새로운 맛을 선사한다 (One flavor each day of the
          month)라는 의미가 '31' 이라는 숫자로
          <br />
          널리 알려진 배스킨라빈스는 세계 35개국에 점포를 운영하고 있는 세계No.1
          아이스크림 브랜드 입니다.
        </p>
      </div>

      <div className="newstore_offer">
        <img
          className="newstore_main_img"
          src="/images/newstore/img_offer.png"
          alt=""
        />
        <div className="newstore_offer_div">
          {/* ---------섹션1 */}
          <div className="newstore_offer_content1">
            <img src="/images/newstore/img_title_1.png" alt="" />
            <h3 className="newstore_offer_h3">운영방식</h3>
            <div>
              <p className="newstore_offer_p">
                배스킨라빈스는 당사(비알코리아㈜)가 운영하는 직영점과 가맹 계약
                체결 후 개인(또는 법인)이 운영하는 가맹점 운영 중입니다.
                <br />
                전국 가맹 상담은 본 홈페이지 상 가맹점 개발담당자를 통해
                가능하시며, <br />
                따라서 해당 페이지는 당사가 운영하는 직영기준으로 신규 입점
                제의하는 목적으로 운영됨을 안내드립니다
              </p>
            </div>
          </div>
          {/* -------섹션2 */}
          <div className="newstore_offer_content2">
            <img src="/images/newstore/img_title_2.png" alt="" />
            <h3 className="newstore_offer_h3">임대차방식</h3>
            <div>
              <ul className="newstore_offer_ul">
                <li>● 보증금 /고정 월세</li>
                <li>● 보증금 /변동 월세(수수료방식)</li>
              </ul>
              <div className="newstore_dash"></div>
              <div className="newstore_dash_p">
                <p className="newstore_dash_title">수수료 방식이란?</p>
                <p>
                  월 순 매출의 일정 비율을 임대인에게 임대료로 지급하는 방식
                  <br /> 예) 월 순 매출금액 X 수수료율 (VAT 별도)
                </p>
              </div>
            </div>
          </div>
          {/* -------섹션3 */}
          <div className="newstore_offer_content3">
            <img src="/images/newstore/img_title_3.png" alt="" />
            <h3>입점 제의 안내</h3>
            <div>
              <p className="newstore_offer_p">
                배스킨라빈스 직영점 입점에 관심이 있으신 분은 [입점 제의 상담
                신청] 버튼을 눌러 신청해 주시면
                <br /> 친절하고 상세하게 상담해 드리겠습니다.
              </p>
              <div className="newstore_dash"></div>
              <div className="newstore_dash_p">
                <p className="newstore_dash_title">
                  상담 신청 전 꼭 확인해 주세요.
                </p>
                <p>
                  답변 시 입점 불가 사유, 상권분석 등을 유선 설명해 드리지
                  않습니다.
                  <br />
                  입점 제의 주소가 불분명할 경우 검토가 불가하므로 반드시
                  확인하시기 바랍니다
                </p>
              </div>
            </div>
          </div>
          {/* -------섹션4 */}
          <div className="newstore_offer_content4">
            <p className="newstore_offer_content4_p">
              ※ 상기 사항 확인하였으며, 신청에 동의합니다.
            </p>
            <div className="newstore_offer_content4_div">
              <input className="newstore_input" type="radio" name="offer" />
              <span className="newstore_offer_content4_span">
                동의하지 않습니다
              </span>
              <input
                className="newstore_input"
                id="agree"
                type="radio"
                name="offer"
                onChange={handleAgreeChange}
              />
              <span>동의합니다</span>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="delivery_form_button_b"
        onClick={handleClick}
      >
        입점 신청하기
      </button>
    </div>
  );
}
