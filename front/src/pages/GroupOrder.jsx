import React from "react";
import "../css/seulki.css";
import { Link } from "react-router-dom";
import { OrderMenubar2 } from "../components/OrderMenubar.jsx";
import SeulkiHeader from "../components/SeulkiHeader.jsx";

export default function GroupOrder() {
  return (
    <div className="content delivery_form">
      <OrderMenubar2 />

      <SeulkiHeader title={"단체주문"} />
      <div>
        <p className="delivery_header_font">
          단체주문도 언제나, 어디서나 배스킨라빈스!
        </p>
      </div>

      <div className="login_line"></div>

      <section className="grouporder_section1">
        <h3 className="grouporder_section1_h3">
          특별한 날, 이벤트 행사 등 단체 선물이 필요할 때 <br />
          배스킨라빈스 단체주문 혜택도 받고 편하게 받아보세요!
        </h3>
        {/* <button className="step3-button" type="button" onClick={handleLogin}>
          로그인
        </button> */}

        <div className="grouporder_button_div">
          <Link to="/store/catering-order">
            <button className="grouporder_button">
              주문서 접수하기 &nbsp;&nbsp;&nbsp;{">"}
            </button>
          </Link>
          <p className="grouporder_section1_p1">
            수령일 기준 최소 3일전 주문 가능
          </p>
        </div>

        <div className="grouporder_main">
          <div className="grouporder_main_detail">
            <img
              className="grouporder_section1_img"
              src="/images/grouporder/img_info_item_1.png"
              alt=""
            />
            <div className="grouporder_main_1_div">
              <p className="grouporder_p">
                <span className="grouporder_span_b">아이스크림 제품</span>
                <br />
                <p className="grouporder_p_hight">
                  회사, 관공서, 은행, 학교 등 <br />
                  <span className="grouporder_span_p">한 장소로 일괄배송</span>
                </p>
              </p>

              <div className="grouporder_mini_div">
                <div className="grouporder_mini_div_1">
                  <div className="grouporder_mini">할인 및 혜택</div>
                  <p className="grouporder_mini_p">
                    할인혜택 &nbsp;
                    <span className="grouporder_mini_point">별도협의 필요</span>
                  </p>
                  <p className="grouporder_mini_p">
                    50만원 이상 &nbsp;
                    <span className="grouporder_mini_point">
                      배송/배달 서비스
                    </span>
                  </p>
                </div>
                <div className="grouporder_mini_div_2">
                  <p>
                    <div className="grouporder_mini">결제방식</div>
                  </p>
                  <p className="grouporder_mini_p">
                    현금 (계좌이체) / 카드 (전화결제)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grouporder_main_detail grouporder_main_m">
            <img
              className="grouporder_section2_img"
              src="/images/grouporder/img_info_item_2.png"
              alt=""
            />
            <div className="grouporder_main_1_div">
              <p className="grouporder_p">
                <span className="grouporder_span_b">아이스크림 제품</span>
                <br />
                <p className="grouporder_p_hight">
                  전국 VIP 고객에게 원하는 시간 / 장소로 배달 <br />
                  <span className="grouporder_span_p">여러곳 배달</span>
                </p>
              </p>

              <div className="grouporder_mini_div">
                <div className="grouporder_mini_div_1">
                  <div className="grouporder_mini">할인 및 혜택</div>
                  <p className="grouporder_mini_p">
                    50만원 이상&nbsp;
                    <span className="grouporder_mini_point">5%</span>
                  </p>
                  <p className="grouporder_mini_p">
                    100만원 이상&nbsp;
                    <span className="grouporder_mini_point">
                      별도 협의 필요
                    </span>
                  </p>
                  <p className="grouporder_mini_p">
                    50만원 이상&nbsp;
                    <span className="grouporder_mini_point">주문가능</span>
                  </p>
                </div>
                <div className="grouporder_mini_div_2">
                  <p>
                    <div className="grouporder_mini">결제방식</div>
                  </p>
                  <p className="grouporder_mini_p">카드 (전화결제)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grouporder_main_detail grouporder_main_m">
            <img
              className="grouporder_section3_img"
              src="/images/grouporder/img_info_item_3.png"
              alt=""
            />
            <div className="grouporder_main_1_div">
              <p className="grouporder_p">
                <span className="grouporder_span_b">온/오프라인 상품권</span>
                <br />
                <p className="grouporder_p_hight">
                  매장, 해피오더, 배달앱 다양한 채널 결제 가능 <br />
                  <span span className="grouporder_span_p">
                    모바일 교환권
                  </span>
                </p>
              </p>

              <div className="grouporder_mini_div">
                <div className="grouporder_mini_div_1">
                  <div className="grouporder_mini">할인 및 혜택</div>
                  <p className="grouporder_mini_p">
                    500만원 이상 &nbsp;
                    <span className="grouporder_mini_point">1%</span>
                  </p>
                  <p className="grouporder_mini_p">
                    <span className="grouporder_mini_point">발송료 무료</span>
                    (건당 50원)
                  </p>
                </div>
                <div className="grouporder_mini_div_2">
                  <p>
                    <div className="grouporder_mini">결제방식</div>
                  </p>
                  <p className="grouporder_mini_p">
                    현금 (계좌이체) / <br /> 법인카드 (전화결제)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grouporder_main_detail grouporder_main_m">
            <img
              className="grouporder_section4_img"
              src="/images/grouporder/img_info_item_4.png"
              alt=""
            />
            <div className="grouporder_main_1_div">
              <p className="grouporder_p">
                <span className="grouporder_span_b">온/오프라인 상품권</span>
                <br />
                <p className="grouporder_p_hight">
                  모바일사용이 익숙지 않은 분께 감사의 마음을 전하고 싶다면?
                  <br />
                  <span className="grouporder_span_p">지류상품권</span>
                </p>
              </p>

              <div className="grouporder_mini_div">
                <div className="grouporder_mini_div_1">
                  <div className="grouporder_mini">할인 및 혜택</div>
                  <p className="grouporder_mini_p">
                    300만원 이상&nbsp;
                    <span className="grouporder_mini_point">2%</span>
                  </p>
                  <p className="grouporder_mini_p">
                    500만원 이상&nbsp;
                    <span className="grouporder_mini_point">3%</span>
                  </p>
                  <p className="grouporder_mini_p">
                    포장봉투 제공 / 등기발송 (1곳)
                  </p>
                </div>
                <div className="grouporder_mini_div_1">
                  <p>
                    <div className="grouporder_mini">결제방식</div>
                  </p>
                  <p className="grouporder_mini_p">
                    현금 (계좌이체) / <br /> 법인카드 (전화결제)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grouporder_main_detail grouporder_main_m">
            <img
              className="grouporder_section5_img"
              src="/images/grouporder/img_info_item_5.png"
              alt=""
            />
            <div className="grouporder_main_1_div">
              <p className="grouporder_p">
                <span className="grouporder_span_b">아이스크림, 음료 제품</span>
                <br />
                <p className="grouporder_p_hight">
                  실내외 공연, 연예인, 축제 등 이벤트 장소 케이터링
                  <br />
                  <span className="grouporder_span_p">아이스크림 트레일러</span>
                </p>
              </p>

              <div className="grouporder_mini_div">
                <div className="grouporder_mini_div_2">
                  <div className="grouporder_mini">할인 및 혜택</div>
                  <p className="grouporder_mini_p">별도 협의 필요</p>
                </div>
                <div className="grouporder_mini_div_2">
                  <p>
                    <div className="grouporder_mini">결제방식</div>
                  </p>
                  <p className="grouporder_mini_p">1 : 1 문의 (400만원 이상)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grouporder_section2">
        <h3 className="delivery_h3">HOW TO ORDER</h3>
        <ul className="delivery_section3_ul">
          <li className="delivery_section3_li">
            <img
              className="section3_img grouporder_section2_circle1"
              src="/images/grouporder/img_order_item_1.png"
              alt=""
            />
            <span className="grouporder_section2_step">STEP 1</span>
            <p className="grouporder_section2_p">
              배스킨라빈스 홈페이지에서 <br /> 원하는 메뉴를 골라주세요
            </p>
          </li>
          <img
            className="delivery_arrow"
            src="/images/grouporder/img_order_arrow.png"
            alt=""
          />
          <li className="delivery_section3_li">
            <img
              className="section3_img grouporder_section2_circle2"
              src="/images/grouporder/img_order_item_2.png"
              alt=""
            />
            <span className="grouporder_section2_step">STEP 2</span>
            <p className="grouporder_section2_p">
              원하는 방법을 <br /> 선택해주세요
            </p>
          </li>
          <img
            className="delivery_arrow"
            src="/images/grouporder/img_order_arrow.png"
            alt=""
          />
          <li className="delivery_section3_li">
            <img
              className="section3_img grouporder_section2_circle3"
              src="/images/grouporder/img_order_item_3.png"
              alt=""
            />
            <span className="grouporder_section2_step">STEP 3</span>
            <p className="grouporder_section2_p">
              주문서 접수하기를 남겨주세요 <br /> 주문서 접수하시면 확인 후
              연락드려요
            </p>
          </li>
        </ul>

        <div className="delivery_section3_refer">
          <ul className="delivery_section3_refer_ul">
            <li>
              ※ 배달 서비스는 인근 매장에서 진행되며, 단체 주문 시 배달비 무료
              혜택을 드립니다. (단, 매장 상황에 따라 배달 서비스가 제한될 수
              있습니다.)
            </li>
            <li>※ 문의 : 월~금 AM 9:00 ~ PM 6:00</li>
            <li>※ 연락처 : 010-1234-5678</li>
          </ul>
          <Link to="/store/catering-order">
            <button className="grouporder_button">
              주문서 접수하기 &nbsp;&nbsp;&nbsp;{">"}
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
