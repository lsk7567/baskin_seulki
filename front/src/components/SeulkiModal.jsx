import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export function SeulkiModal({ openModal, closeModal }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="modal_out_s" onClick={closeModal}>
      <div className="modal_container_s" onClick={(e) => e.stopPropagation()}>
        <button className="close_s" onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className="modal_content_s">
          <section className="modal_content_section">
            <img
              className="modal_content_section1_img"
              src="/images/grouporder/img_info_item_1.png"
              alt=""
            />
            <p className="modal_content_s_p">
              <span className="grouporder_span_b">아이스크림 제품</span>
              <br />
              <p className="modal_content_p_hight">
                회사, 관공서, 은행, 학교 등 <br />
                <span className="modal_content_span_p">한 장소로 일괄배송</span>
              </p>
            </p>

            <div className="modal_content_mini_div_1">
              <div className="modal_content_mini">할인 및 혜택</div>
              <p className="grouporder_mini_p modal_content_mini_p">
                할인혜택 &nbsp;
                <span className="grouporder_mini_point">별도협의 필요</span>
              </p>
              <p className="grouporder_mini_p">
                50만원 이상 &nbsp;
                <span className="grouporder_mini_point">배송/배달 서비스</span>
              </p>
            </div>
            <div className="modal_content_mini_div_2">
              <p>
                <div className="modal_content_mini">결제방식</div>
              </p>
              <p className="grouporder_mini_p modal_content_mini_p">
                현금 (계좌이체) / 카드 (전화결제)
              </p>
            </div>
          </section>
          {/* ----------------------------------------------------------------2번째 */}
          <section className="modal_content_section">
            <img
              className="modal_content_section2_img"
              src="/images/grouporder/img_info_item_2.png"
              alt=""
            />
            <p className="modal_content_s_p">
              <span className="grouporder_span_b">아이스크림 제품</span>
              <br />
              <p className="modal_content_p_hight">
                전국 VIP 고객에게 원하는 <br />
                시간 / 장소로 배달 <br />
                <span className="modal_content_span_p">여러곳 배달</span>
              </p>
            </p>

            <div className="modal_content_mini_div_1">
              <div className="modal_content_mini">할인 및 혜택</div>
              <p className="grouporder_mini_p modal_content_mini_p">
                50만원 이상 &nbsp;
                <span className="grouporder_mini_point">5%</span>
              </p>
              <p className="grouporder_mini_p">
                100만원 이상 &nbsp;
                <span className="grouporder_mini_point">별도 협의</span>
              </p>
              <p className="grouporder_mini_p">
                50만원 이상 &nbsp;
                <span className="grouporder_mini_point">주문가능</span>
              </p>
            </div>
            <div className="modal_content_mini_div_2 mcmd2">
              <p>
                <div className="modal_content_mini">결제방식</div>
              </p>
              <p className="grouporder_mini_p modal_content_mini_p">
                카드 (전화결제)
              </p>
            </div>
          </section>
          {/* ----------------------------------------------------------------3번째 */}
          <section className="modal_content_section">
            <section className="modal_content_section">
              <img
                className="modal_content_section3_img"
                src="/images/grouporder/img_info_item_3.png"
                alt=""
              />
              <p className="modal_content_s_p">
                <span className="grouporder_span_b">온/오프라인 상품권</span>
                <br />
                <p className="modal_content_p_hight">
                  매장, 해피오더, 배달앱 <br />
                  다양한 채널 결제 가능 <br />
                  <span className="modal_content_span_p">모바일 교환권</span>
                </p>
              </p>

              <div className="modal_content_mini_div_1">
                <div className="modal_content_mini">할인 및 혜택</div>
                <p className="grouporder_mini_p modal_content_mini_p">
                  500만원 이상 &nbsp;
                  <span className="grouporder_mini_point">1%</span>
                </p>
                <p className="grouporder_mini_p_point">
                  발송료 무료 &nbsp;
                  <span className="grouporder_mini_p">(건당 50원)</span>
                </p>
              </div>
              <div className="modal_content_mini_div_2 mcmd3">
                <p>
                  <div className="modal_content_mini">결제방식</div>
                </p>
                <p className="grouporder_mini_p modal_content_mini_p">
                  현금 (계좌이체) / <br /> 법인카드 (전화결제)
                </p>
              </div>
            </section>
          </section>
          {/* ---------------------------------------------섹션4 */}
          <section className="modal_content_section">
            <img
              className="modal_content_section4_img"
              src="/images/grouporder/img_info_item_4.png"
              alt=""
            />
            <p className="modal_content_s_p">
              <span className="grouporder_span_b">온/오프라인 상품권</span>
              <br />
              <p className="modal_content_p_hight">
                모바일사용이 익숙지
                <br />
                않은 분께 감사의 마음을 <br />
                전하고 싶다면?
                <br />
                <span className="modal_content_span_p">지류상품권</span>
              </p>
            </p>

            <div className="modal_content_mini_div_1">
              <div className="modal_content_mini">할인 및 혜택</div>
              <p className="grouporder_mini_p modal_content_mini_p">
                300만원 이상 &nbsp;
                <span className="grouporder_mini_point">2%</span>
              </p>
              <p className="grouporder_mini_p">
                500만원 이상 &nbsp;
                <span className="grouporder_mini_point">3%</span>
              </p>
              <p className="grouporder_mini_p">
                포장봉투 제공 / 등기발송 (1곳)
              </p>
            </div>
            <div className="modal_content_mini_div_2 mcmd4">
              <p>
                <div className="modal_content_mini">결제방식</div>
              </p>
              <p className="grouporder_mini_p modal_content_mini_p">
                현금 (계좌이체) / <br /> 법인카드 (전화결제)
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
