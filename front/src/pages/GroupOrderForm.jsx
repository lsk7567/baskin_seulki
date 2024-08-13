import React, { useRef, useState } from "react";
import "../css/seulki.css";
import { OrderMenubar2 } from "../components/OrderMenubar.jsx";
import SeulkiHeader from "../components/SeulkiHeader.jsx";
import DaumPostcode from "react-daum-postcode";
import { SeulkiModal } from "../components/SeulkiModal.jsx";
import { SeulkiMap1, SeulkiMap2 } from "../components/SeulkiMap.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function GroupOrderForm() {
  const navigate = useNavigate();

  const [agreed, setAgreed] = useState(false); //* 필수약관 동의

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zipcode: "",
    address: "",
    detailAddress: "",
  });

  const refs = {
    nameRef: useRef(null),
    emailRef: useRef(null),
    phoneRef: useRef(null),
  };

  const detailAddressRef = useRef(null);
  const [showModal, setShowModal] = useState(false); //* 혜택팝업
  const [selectedValues, setSelectedValues] = useState([]); //* 구매희망 상품군

  //* 필수약관 동의
  const handleAgreeChange = (e) => {
    setAgreed(e.target.checked);
  };

  //* 변화감지
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //* ↓ 구매희망 상품군
  const handleInputChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter((val) => val !== value));
    }
  };

  // 구매희망상품군 삭제버튼
  const handleRemoveItem = (index) => {
    const updatedValues = [...selectedValues];
    const checkbox = document.getElementById(index);

    updatedValues.splice(index, 1);
    setSelectedValues(updatedValues);
    checkbox.checked = false;
  };

  //* ↓ 혜택팝업
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  //TODO 주소검색버튼 Toggle
  const [isOpen, setIsOpen] = useState(false); // 기본값 false로 설정해서 처음에는 주소검색창 안보이게 하기

  //TODO 주소검색버튼
  const handleToggle = () => {
    setIsOpen(true);
  };

  //TODO ★DaumPostcode 관련 디자인 및 이벤트
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
    setFormData({ zipcode: zonecode, address: address });
  };

  const closeHandler = (state) => {
    if (state === "FORCE_CLOSE") {
      setIsOpen(false);
    } else if (state === "COMPLETE_CLOSE") {
      setIsOpen(false);
      detailAddressRef.current.focus();
    }
  };

  //TODO 제출하기 버튼
  const handleClick = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("개인정보 수집, 이용 동의에 동의해주세요");
      document.getElementById("service").style.outline = "2px solid red";
      window.scrollTo(0, 0);
    } else if (validationCheck()) {
      alert("단체주문 주문서가 접수되었습니다!");
      navigate("/store/catering");
    }
  };

  //TODO 필수동의 체크 후 빨간테두리 해제
  const handleFocus = (type) => {
    if (type === "agree") {
      document.getElementById("service").style.outline = "none";
    }
  };

  //TODO 유효성 검사
  const validationCheck = () => {
    let checkFlag = true;

    if (!formData.name.trim()) {
      alert("이름을 입력해주세요");
      refs.nameRef.current.focus();
      checkFlag = false;
    } else if (!formData.email.trim()) {
      alert("신청자 이메일을 입력해주세요");
      refs.emailRef.current.focus();
      checkFlag = false;
    } else if (!formData.phone.trim()) {
      alert("연락처를 입력해주세요");
      refs.phoneRef.current.focus();
      checkFlag = false;
    } else if (!formData.detailAddress.trim()) {
      alert("우편번호 찾기 후 상세 주소를 입력해주세요");
      detailAddressRef.current.focus();
      checkFlag = false;
    }
    return checkFlag;
  };

  return (
    <div className="content delivery_form">
      <OrderMenubar2 />
      <SeulkiHeader title={"단체주문서 작성"} />
      <div>
        <p className="delivery_header_font">
          단체주문도 언제나, 어디서나 배스킨라빈스
          <span className="exclamation_mark">!</span>
        </p>
      </div>

      <div className="delivery_form_content">
        <form className="delivery_form_detail" onSubmit={handleClick}>
          <section className="delivery_form_section1">
            <div className="d_f_section1">
              <h3 className="delivery_form_h3">
                개인정보 수집, 이용 동의(필수)
              </h3>
              <button
                className="delivery_form_button_s"
                type="button"
                onClick={openModal}
              >
                단체주문 혜택보기
              </button>
              {showModal === true ? (
                <SeulkiModal openModal={openModal} closeModal={closeModal} />
              ) : null}
            </div>

            <p className="delivery_form_p1">
              배스킨라빈스 단체주문 서비스 회원 가입, 고객상담, 고지사항
              전달등을 위해 아래와 같이 개인정보를 수집 이용 합니다
            </p>
            <table className="delivery_section1_table">
              <thead>
                <tr>
                  <th>수집목적</th>
                  <th>필수수집항목</th>
                  <th>보유.이용기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>회원식별 및 서비스 제공</td>
                  <td>성명,전화번호,주소,이메일</td>
                  <td rowSpan={2}>동의 철회시</td>
                </tr>
                <tr>
                  <td>서비스 변경 및 고지사항 전달</td>
                  <td>이메일</td>
                </tr>
              </tbody>
            </table>

            <div className="d_f_section1_div">
              <p className="delivery_form_p2">
                동의를 거부할 권리가 있습니다. 다만, 필수 동의 거부시 서비스가
                반드시 제한 될 수 있습니다.
                <br />위 개인정보 수집,이용에 동의 합니다
              </p>
              <div className="delivery_input_1">
                <input
                  className="delivery_radio_input"
                  type="radio"
                  name="is_policy"
                  id="service"
                  onChange={handleAgreeChange}
                  onFocus={() => handleFocus("agree")}
                />
                <span className="delivery_radio_text">동의합니다</span>
                <input
                  className="delivery_radio_input"
                  type="radio"
                  name="is_policy"
                />
                <span className="delivery_radio_text">동의하지 않습니다</span>
              </div>
            </div>
          </section>
          <div className="delivery_line"></div>

          {/* 섹션2 */}
          <section className="delivery_form_section2">
            <div className="d_f_section1">
              <h3 className="delivery_form_h3 delivery_form_h3_color">
                개인정보 제3자 제공(선택)
              </h3>
            </div>

            <p className="delivery_form_p1">
              동의를 거부할 권리 있으며,제3자 제공의 동의 여부와 관계없이
              서비스를 가능하나 개인정보 제3자 제공 동의 거부시 , 금액 할인에
              대한 서비스를 받으실 수 없습니다.
            </p>
            <table className="delivery_section1_table">
              <thead>
                <tr>
                  <th>제공처</th>
                  <th>필수수집항목</th>
                  <th>제공항목</th>
                  <th>이용기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>해피오더</td>
                  <td>금액할인,이벤트참여,경품발송</td>
                  <td>성명,전화번호,이메일,주소</td>
                  <td rowSpan={2}>동의 철회시</td>
                </tr>
                <tr>
                  <td>쿠프마케팅</td>
                  <td>금액할인,이벤트참여,경품발송</td>
                  <td>성명,전화번호</td>
                </tr>
              </tbody>
            </table>

            <div className="d_f_section1_div">
              <p className="delivery_form_p2">
                위 개인정보 수집,이용에 동의 합니다
              </p>
              <div className="delivery_input_2">
                <input
                  className="delivery_radio_input"
                  type="radio"
                  name="is_policy"
                />
                <span className="delivery_radio_text">동의합니다</span>
                <input
                  className="delivery_radio_input"
                  type="radio"
                  name="is_policy"
                />
                <span className="delivery_radio_text">동의하지 않습니다</span>
              </div>
            </div>
          </section>
          <div className="delivery_line2"></div>

          {/* 섹션3 */}
          <section className="delivery_form_section3">
            <div className="d_f_section1">
              <h3 className="delivery_form_h3 delivery_form_h3_color">
                마케팅 및 광고 활용 동의(선택)
              </h3>
            </div>

            <p className="delivery_form_p1">
              배스킨라빈스 에서 제공하는 이벤트 및 서비스(제휴서비스포함) 안내를
              광고성 정보를 받으시려면 마케팅 이용 동의 하여 주시기 바랍니다.
              <br />
              동의 거부시 금액 할인에 대한 서비스및 경품 지급을 받으실 수
              없습니다
            </p>
            <table className="delivery_section1_table">
              <thead>
                <tr>
                  <th>수집목적</th>
                  <th>필수수집항목</th>
                  <th>보유.이용기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>이벤트 참여 기회 제공</td>
                  <td>성명,전화번호,이메일</td>
                  <td rowSpan={2}>동의 철회시</td>
                </tr>
                <tr>
                  <td>이벤트,광고,프로모션 안내</td>
                  <td>성명,전화번호,이메일</td>
                </tr>
              </tbody>
            </table>

            <div className="d_f_section1_div">
              <p className="delivery_form_p2">
                동의를 거부할 권리가 있으며,마케팅등의 여부와 관계없이 단체
                주문은 가능합니다. <br /> 다만 거부시 , 상기 목적에 명시된
                서비스를 받으실 수 없습니다. <br />위 마케팅 및 광고 활용 이용에
                동의 합니다
              </p>
              <div className="delivery_input_3">
                <input
                  className="delivery_radio_input"
                  type="radio"
                  name="is_policy"
                />
                <span className="delivery_radio_text">동의합니다</span>
                <input
                  className="delivery_radio_input"
                  type="radio"
                  name="is_policy"
                />
                <span className="delivery_radio_text">동의하지 않습니다</span>
              </div>
            </div>
          </section>

          {/* 섹션4 */}
          <section className="delivery_form_section4">
            <div className="d_f_section1">
              <h3 className="delivery_form_h3">
                단체주문 주문서 작성자 정보(필수)
              </h3>
            </div>
            <div className="delivery_form_section4_form1">
              <ul className="delivery_form_section4_form1_ul">
                <li>
                  <lable>이름</lable>
                  <input
                    className="d_f_input_color"
                    name="name"
                    value={formData.name}
                    ref={refs.nameRef}
                    onChange={handleChange}
                    type="text"
                    placeholder="   이름 또는 업체명을 입력해 주세요"
                  />
                </li>
                <li>
                  <lable>신청자 이메일</lable>
                  <input
                    className="d_f_input_color"
                    name="email"
                    value={formData.email}
                    ref={refs.emailRef}
                    onChange={handleChange}
                    type="text"
                    placeholder="   이메일 입력"
                  />
                  &nbsp;
                  <span>
                    * 필독 ! 작성하신 주소로 세부 내용이 안내 됩니다. 정확한
                    이메일 주소를 입력해주세요
                  </span>
                </li>
                <li>
                  <lable>신청자 연락처</lable>
                  <input
                    className="d_f_input_color"
                    name="phone"
                    value={formData.phone}
                    ref={refs.phoneRef}
                    onChange={handleChange}
                    type="text"
                  />
                  &nbsp;
                  <span>
                    휴대폰번호 또는 유선전화 중 연락 가능한 전화번호를
                    입력해주세요
                  </span>
                </li>
                <li>
                  <lable>배송 희망 주소</lable>

                  <input
                    className="d_f_input_color"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleChange}
                    type="text"
                    placeholder="   우편번호"
                  ></input>
                  <button
                    className="d_f_input_button"
                    type="button"
                    onClick={handleToggle}
                  >
                    우편번호 찾기
                  </button>
                  <li>
                    <lable></lable>
                    <input
                      className="d_f_input_color"
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="   기본 주소를 입력하세요."
                    />
                  </li>
                  <li>
                    <lable></lable>
                    <input
                      className="d_f_input_color"
                      type="text"
                      name="detailAddress"
                      onChange={handleChange}
                      ref={detailAddressRef}
                      placeholder="   상세 주소를 입력하세요"
                    />
                  </li>
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
            </div>
          </section>

          {/* 섹션5 */}
          <section className="delivery_form_section5">
            <div className="d_f_section1">
              <h3 className="delivery_form_h3">
                단체주문 주문서 세부내용 작성
              </h3>
              <p className="d_f_p">
                * 주문서 세부내용 작성은 유선상담 후에도 가능합니다
              </p>
            </div>
            <table className="delivery_section2_table">
              <tbody className="delivery_section2_table_tbody1">
                <tr>
                  <th>제품 수령 방식</th>
                  <td>
                    <div>
                      <label>
                        <input
                          className="delivery_radio_input"
                          type="radio"
                          name="get_product"
                          value="a"
                        />
                        <span>한곳으로 배송</span>
                      </label>
                      <label>
                        <input
                          className="delivery_radio_input"
                          type="radio"
                          name="get_product"
                          value="b"
                        />
                        <span>여러곳 배달</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          className="delivery_radio_input"
                          type="radio"
                          name="get_product"
                          value="c"
                        />
                        <span>모바일 교환권</span>
                      </label>
                      <label>
                        <input
                          className="delivery_radio_input"
                          type="radio"
                          name="get_product"
                          value="d"
                        />
                        <span>지류상품권</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          className="delivery_radio_input"
                          type="radio"
                          name="get_product"
                          value="e"
                        />
                        <span>기타</span>
                      </label>
                      <input className="d_f_input_color" type="text" />
                    </div>
                  </td>
                </tr>

                <tr>
                  <th>구매 희망 상품군</th>
                  <td>
                    <div>
                      <div className="seulki_flex">
                        <p>중복 선택가능</p>
                        <Link to="/menu/icecream">
                          <button
                            className="delivery_form_button_s"
                            type="button"
                          >
                            제품 이미지로 보기
                          </button>
                        </Link>
                      </div>
                      <div>
                        <label>
                          <input
                            id="0"
                            type="checkbox"
                            value="아이스크림 케이크"
                            onChange={handleInputChange}
                          />
                          <span>아이스크림 케이크</span>
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            id="1"
                            type="checkbox"
                            value="블록팩 (싱글 레귤러 크기, 170ml)"
                            onChange={handleInputChange}
                          />
                          <span>블록팩 (싱글 레귤러 크기, 170ml)</span>
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            id="2"
                            type="checkbox"
                            value="레디팩 (파인트크기 474ml)"
                            onChange={handleInputChange}
                          />
                          <span>레디팩 (파인트크기 474ml)</span>
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            id="3"
                            type="checkbox"
                            value="레디팩 미니 (260ml)"
                            onChange={handleInputChange}
                          />
                          <span>레디팩 미니 (260ml)</span>
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            id="4"
                            type="checkbox"
                            value="디저트류 (모찌, 마카롱, 스틱바 등)"
                            onChange={handleInputChange}
                          />
                          <span>디저트류 (모찌, 마카롱, 스틱바 등)</span>
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            id="5"
                            type="checkbox"
                            value="기타"
                            onChange={handleInputChange}
                          />
                          <span>기타</span>
                        </label>
                        <input className="d_f_input_color" type="text" />
                      </div>
                      <p className="d_f_p">
                        * 구매를 원하시는 정확한 상품명을 기재해 주시면,
                        단체주문이 원활히 이루어 집니다.
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>제품 수령 희망 일자</th>
                  <td>
                    <div>
                      <input
                        className="d_f_input_color d_f_input_date"
                        type="date"
                      />
                      <SeulkiMap1 />
                      <span className="openstore_s1_time_span">시</span>
                      <SeulkiMap2 />
                      <span className="openstore_s1_time_span">분</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="delivery_form_section6">
            <table className="delivery_section2_table">
              <tbody>
                <tr>
                  <th>주문정보</th>
                  <td>
                    <div>
                      {selectedValues.map((value, index) => (
                        <p key={index}>
                          {<span className="seulki_map_span">{value}</span>}
                          <span>
                            <input className="seulki_map_input" type="text" />
                            &nbsp;
                            <span>개</span>
                          </span>
                          <button
                            className="seulki_map_button"
                            type="button"
                            onClick={() => handleRemoveItem(index)}
                          >
                            <img src="/images/grouporder/icon_delete.jpg" />
                          </button>
                        </p>
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="delivery_form_section7">
            <table className="delivery_section2_table">
              <tbody>
                <tr>
                  <th>요청사항</th>
                  <td>
                    <div>
                      <textarea
                        className="d_f_input_color d_f_textarea"
                        placeholder="요청 사항 혹은 문의 내용을 입력 해주세요. 해당 내용에 대한 답변은 세부내용 안내 시 함께 답변 드립니다."
                      ></textarea>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <div className="delivery_form_bottom seulki_flex">
            <div className="delivery_form_bottom_div">
              <p className="delivery_form_bottom_p">* 제출 전 읽어주세요 !</p>
              <ul>
                <li>
                  제품을 준비 할 수 있는 넉넉한 기간은 3일입니다 최소 3일전에
                  접수 부탁 드립니다. (공휴일제외)
                </li>
                <li>
                  단체주문 일정이 급하신 고객님은 유선으로 전화상담 해주시면,
                  친절히 도와 드리겠습니다.
                </li>
                <li>
                  트레일러 / 이동식 부스 / 저장고 등의 설치비용은 유상서비스로
                  별도 청구 됩니다.
                </li>
                <li>
                  본사와 사전에 협의되지 않는 내용에 대한 서비스는 제한 될 수
                  있습니다.
                </li>
              </ul>
            </div>
            <button type="submit" className="delivery_form_button_b">
              제출하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
