import React, { useRef, useState } from "react";
import "../css/seulki.css";
import DaumPostcode from "react-daum-postcode";
import { OrderMenubar4 } from "../components/OrderMenubar.jsx";
import SeulkiHeader from "../components/SeulkiHeader.jsx";
import {
  SeulkiMap1,
  SeulkiMap2,
  TwoTierSelect,
} from "../components/SeulkiMap.jsx";
import { useNavigate } from "react-router-dom";

export default function OpenStore() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone1: "",
    phone2: "",
    phone3: "",
    email: "",
    zipcode: "",
    address: "",
    detailAddress: "",
  });

  const refs = {
    nameRef: useRef(null),
    phone1Ref: useRef(null),
    phone2Ref: useRef(null),
    phone3Ref: useRef(null),
    emailRef: useRef(null),
  };

  const detailAddressRef = useRef(null);

  const [agreed, setAgreed] = useState(false); //* 필수약관 동의

  //* 필수약관 동의
  const handleAgreeChange = (e) => {
    setAgreed(e.target.checked);
  };

  //* 변화감지
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  //TODO 등록버튼
  const handleClick = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("개인정보 수집, 이용 동의에 동의해주세요");
      document.getElementById("service").style.outline = "2px solid red";
      window.scrollTo(0, 0);
    } else if (validationCheck()) {
      alert("점포개설문의가 접수되었습니다!");
      window.location.reload();
    }
  };

  //TODO 필수동의 체크 후 빨간테두리 해제
  const handleFocus = (type) => {
    if (type === "agree") {
      document.getElementById("service").style.outline = "none";
    }
  };

  //TODO 취소버튼
  const handleCancle = () => {
    const result = window.confirm(
      "작성 중인 글을 취소하고 메인으로 돌아가시겠습니까?"
    );
    if (result) {
      navigate("/");
    }
  };

  //TODO 유효성 검사
  const validationCheck = () => {
    let checkFlag = true;

    if (!formData.name.trim()) {
      alert("이름을 입력해주세요");
      refs.nameRef.current.focus();
      checkFlag = false;
    } else if (!formData.phone1.trim()) {
      alert("연락처를 입력해주세요");
      refs.phone1Ref.current.focus();
      checkFlag = false;
    } else if (!formData.phone2.trim()) {
      alert("연락처를 입력해주세요");
      refs.phone2Ref.current.focus();
      checkFlag = false;
    } else if (!formData.phone3.trim()) {
      alert("연락처를 입력해주세요");
      refs.phone3Ref.current.focus();
      checkFlag = false;
    } else if (!formData.email.trim()) {
      alert("이메일을 입력해주세요");
      refs.emailRef.current.focus();
      checkFlag = false;
    }
    return checkFlag;
  };

  return (
    <div className="content store_form_s">
      <OrderMenubar4 />
      <SeulkiHeader title={"점포개설문의"} />
      <div>
        <p className="delivery_header_font">
          <span className="delivery_header_span">
            아이스크림 전문기업 배스킨라빈스
          </span>
          <br />
          한달 31일 내내 새로운 맛을 선사한다 (One flavor each day of the
          month)라는 의미가 ‘31’ 이라는 숫자로
          <br />
          널리 알려진 배스킨라빈스는 세계 35개국에 점포를 운영하고 있는 세계No.1
          아이스크림 브랜드 입니다.
        </p>

        <div className="delivery_form_content">
          <form className="delivery_form_detail" onSubmit={handleClick}>
            <section className="delivery_form_section1">
              <div className="d_f_section1">
                <h3 className="delivery_form_h3">
                  배스킨라빈스 가맹점포 창업 문의 개인정보 수집이용 동의안내
                </h3>
              </div>

              <table className="delivery_section1_table">
                <thead>
                  <tr>
                    <th>수집하는 개인정보 항목</th>
                    <th>개인정보 수집 이용목적</th>
                    <th>개인정보 보유 및 이용기간</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>이름, 연락처, 이메일, 희망 창업조건</td>
                    <td>배스킨라빈스 창업 상담</td>
                    <td>창업 상담 신청 후 12개월 또는 동의 철회 시 까지</td>
                  </tr>
                </tbody>
              </table>

              <div className="d_f_section1_div">
                <p className="delivery_form_p2"></p>
                <div className="delivery_input_2">
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

            <p className="openstore_top_p">*표시 항목은 필수 입력 항목입니다</p>

            {/* 섹션1 */}
            <table className="delivery_section2_table">
              <tbody className="delivery_section2_table_tbody1 openstore_s1">
                <tr>
                  <th>* 이름</th>
                  <td>
                    <input
                      className="d_f_input_color"
                      name="name"
                      value={formData.name}
                      ref={refs.nameRef}
                      onChange={handleChange}
                      type="text"
                      placeholder="   이름을 입력하세요"
                    />
                  </td>
                </tr>

                <tr>
                  <th>* 연락처</th>
                  <td className="openstore_s1_tel">
                    <input
                      className="d_f_input_color"
                      name="phone1"
                      value={formData.phone1}
                      ref={refs.phone1Ref}
                      onChange={handleChange}
                      type="text"
                    />
                    &nbsp;&nbsp;
                    <span>-</span>
                    <input
                      className="d_f_input_color"
                      name="phone2"
                      value={formData.phone2}
                      ref={refs.phone2Ref}
                      onChange={handleChange}
                      type="text"
                    />
                    &nbsp;&nbsp;
                    <span>-</span>
                    <input
                      className="d_f_input_color"
                      name="phone3"
                      value={formData.phone3}
                      ref={refs.phone3Ref}
                      onChange={handleChange}
                      type="text"
                    />
                  </td>
                </tr>

                <tr>
                  <th>&nbsp; 연락가능 시간</th>
                  <td className="openstore_s1_time">
                    <SeulkiMap1 />
                    <span className="openstore_s1_time_span">시</span>
                    <SeulkiMap2 />
                    <span className="openstore_s1_time_span">분</span>
                    &nbsp;&nbsp;
                    <span>-</span>
                    &nbsp;&nbsp;
                    <SeulkiMap1 />
                    <span className="openstore_s1_time_span">시</span>
                    <SeulkiMap2 />
                    <span className="openstore_s1_time_span">분</span>
                  </td>
                </tr>

                <tr>
                  <th>* 이메일</th>
                  <td>
                    <input
                      className="d_f_input_color"
                      name="email"
                      value={formData.email}
                      ref={refs.emailRef}
                      onChange={handleChange}
                      type="text"
                      placeholder="   이메일을 입력하세요"
                    />
                  </td>
                </tr>

                <tr>
                  <th>&nbsp; 창업 희망 지역</th>
                  <td>
                    <TwoTierSelect />
                  </td>
                </tr>

                <tr>
                  <th>&nbsp; 기타 문의 내용</th>
                  <td>
                    <div>
                      <textarea
                        className="d_f_input_color d_f_textarea openstore_textarea"
                        placeholder="요청 사항 혹은 문의 내용을 입력 해주세요.
                        해당 내용에 대한답변은 세부내용 안내 시 함께 답변 드립니다."
                      ></textarea>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="delivery_form_bottom_p openstore_p">
              구체적인 의뢰 점포가 있을 시에는 점포주소, 임차조건, 평수를
              작성해주세요
            </p>

            <table className="delivery_section2_table">
              <tbody className="delivery_section2_table_tbody1 openstore_s2">
                <tr>
                  <th>점포 상세 주소</th>
                  <td>
                    <div className="openstore_address">
                      <ul>
                        <li>
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
                  </td>
                </tr>

                <tr>
                  <th>면적 (평수)</th>
                  <td>
                    <select>
                      <option value="평수선택">평수선택</option>
                      <option value="30평이상">30평이상</option>
                      <option value="40평이상">40평이상</option>
                      <option value="50평이상">50평이상</option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <th>희망 임차 조건</th>
                  <td>
                    <div className="openstore_desc">
                      <div className="openstore_desc_1">
                        <p className="openstore_desc_p">점포 개설 희망 시기</p>
                        <div>
                          <div>
                            <input
                              className="delivery_radio_input"
                              type="radio"
                              name="openstore"
                            />
                            <span>즉시</span>
                            <input
                              className="delivery_radio_input"
                              type="radio"
                              name="openstore"
                            />
                            <span>3개월</span>
                            <input
                              className="delivery_radio_input"
                              type="radio"
                              name="openstore"
                            />
                            <span>6개월</span>
                            <input
                              className="delivery_radio_input"
                              type="radio"
                              name="openstore"
                            />
                            <span>1년이상</span>
                          </div>
                          <div>
                            <input
                              className="delivery_radio_input"
                              type="radio"
                              name="openstore"
                            />
                            <span>기타(내용작성)</span>
                            <p>
                              <input
                                className="d_f_input_color openstore_last_input"
                                type="text"
                                placeholder="  내용을 작성해주세요"
                              />
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="openstore_desc_1">
                        <p className="openstore_desc_p">점포 개설 투자 금액</p>
                        <div>
                          <div>
                            <input
                              className="delivery_radio_input"
                              type="radio"
                              name="openstore"
                            />
                            <span>2억 이상</span>
                            <input
                              className="delivery_radio_input"
                              type="radio"
                              name="openstore"
                            />
                            <span>3억 이상</span>
                            <input
                              className="delivery_radio_input"
                              type="radio"
                              name="openstore"
                            />
                            <span>4억 이상</span>
                          </div>
                          <div>
                            <input
                              className="delivery_radio_input"
                              type="radio"
                              name="openstore"
                            />
                            <span>기타 금액(내용작성)</span>
                            <p>
                              <input
                                className="d_f_input_color openstore_last_input"
                                type="text"
                                placeholder="  내용을 작성해주세요"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="delivery_form_bottom seulki_flex openstore_last_div">
              <div className="delivery_form_bottom_div">
                <p className="delivery_form_h3">상담안내</p>
                <p>
                  가맹점 문의/점포개설에 대한 상담은 전화 및 팩스, 이메일 모두
                  가능합니다.
                </p>
              </div>
            </div>
            <div className="delivery_line"></div>
            <div className="openstore_button">
              <button
                type="button"
                className="openstore_button_1"
                onClick={handleCancle}
              >
                취소
              </button>

              <button type="submit" className="delivery_form_button_b">
                등록
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
