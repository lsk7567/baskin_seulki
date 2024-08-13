import { useEffect, useState } from "react";
import axios from "axios";
import "../css/pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons/faCircleXmark";
import {faRectangleXmark} from "@fortawesome/free-solid-svg-icons/faRectangleXmark";
import {faSquareXmark} from "@fortawesome/free-solid-svg-icons/faSquareXmark";

export function ModalDream({ closeModal, type }) {
  return (
    <div className="bebetter_modal_out" onClick={closeModal}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}>
        <button className="modal_close_btn" onClick={closeModal}>
        <FontAwesomeIcon className="modal_close_btn_icon" 
            icon={faCircleXmark} style={{color: "#f986bd"}}  onClick={closeModal}/>
        </button>
        <h2>배스킨라빈스의 대표 사회공헌 활동 '핑크드림 캠페인'</h2>

        <div className="bebetter_modal_contents">
          <div className="bebetter_modal_content">
            <img
              className="modal_img"
              src="/images/img_dream_1.jpg"
              alt="modalimg"
            />
            <div className="modal_descri">
              <p className="modal_year">2023</p>
              <p className="modal_title">
                자립준비 청년들의 <br /> 건강한 자립과 꿈 지원
              </p>
              <p className="modal_info">
                전국 자립준비 청년 31명을 모집해
                <br /> 생애 최초 종합건강검진을 제공하고 장학금을 지급했다.
                <br />
                하반기에는 보호 종료 아동의 주거 환경을 개선하고 <br /> 자격증
                취득 관련 IT기기 구입비를 추가 지원했다.
              </p>
            </div>
          </div>

          <div className="bebetter_modal_content">
            <img
              className="modal_img"
              src="/images/img_dream_2.jpg"
              alt="modalimg"/>
            <div className="modal_descri">
              <p className="modal_year">2024</p>
              <p className="modal_title">
                아동의 놀 권리와 환경을 생각하는 <br /> 어린이 놀이터 조성 사업
              </p>
              <p className="modal_info">
                아동의 놀 권리를 보장하는 유엔아동권리협약 제31조에
                <br />
                브랜ㄷ 상징'31'이 있는 것에서 착안, 노후화된 놀이터를
                <br />
                어린이 놀이터로 재정비하는 사업을 기획했다. <br /> 소비자 참여로
                핑크스푼을 수거해 놀이터 소재로 재탄생하는
                <br />
                업사이클링 프로그램도 진행할 계획이다.
              </p>
            </div>
          </div>
        </div>
      </div>                                                                                                              
    </div>
  );
}

export function ModalFarm({ openModal, closeModal }) {
    const [modalList, setModalList] = useState([]);
    useEffect(() => {
      axios
        .get("/data/bebetter.json")
        .then((res) => {
          const data = res.data;
          setModalList(data);
        })
        .catch((error) => console.log(error));
    }, []);

    const resultList = modalList.filter((item)=>
    item.subject==="modalfarm")
  
    const rows = [];
    for (let i = 0; i < resultList.length; i += 2) {
      rows.push(resultList.slice(i, i + 2));
    }
  
  return (
    <div className="bebetter_modal_out" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal_close_btn" onClick={closeModal}>
        <FontAwesomeIcon className="modal_close_btn_icon" 
        icon={faRectangleXmark} style={{color: "#f986bd",}} />
        </button>
        <h2>지역 농가 상생 프로젝트 진행중</h2>

        <div className="bebetter_modal_contents">

<ul className="bebetter_modal_content">
{rows.map((items)=>(
    <li key='modalfarm'>
        {items.map((item)=>(
<div className="modal_call">
<img className="modal_img" src={item.img} alt="modalimg"/>
<div className="modal_descri">
 <p className="modal_year">{item.date} </p>
 <p className="modal_title">{item.title} </p>
<p className="modal_info">{item.content}</p>
                    </div>

</div>
        ))}

    </li>
))}
</ul>
        </div>
      </div>
    </div>
  );
}

export function ModalLink({ openModal, closeModal }) {
  const [modalList, setModalList] = useState([]);
  useEffect(() => {
    axios
      .get("/data/bebetter.json")
      .then((res) => {
        const data = res.data;
        setModalList(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const resultList = modalList.filter((item)=>
    item.subject === 'modallink')

  const rows = [];
  for (let i = 0; i < resultList.length; i += 2) {
    rows.push(resultList.slice(i, i + 2));
  }


  return (
    <div className="bebetter_modal_out" onClick={closeModal}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}>
        <button className="modal_close_btn" onClick={closeModal}>
        <FontAwesomeIcon className="modal_close_btn_icon" 
        icon={faSquareXmark} style={{color: "#f986bd",}} />
          </button>
        <h2>What is kefii?</h2>
        <p>
          {" "}
          씻는 시간, 먹는 시간, 노는 시간을 통해 아이들이 가장행복하고, <br />
          긍정적인 에너지를 품고 성장할수 있도록 재밌는 놀이 문화의 지평을
          열어가고 있습니다.
        </p>

        <div className="bebetter_modal_contents">
          <ul className="bebetter_modal_content">
            {rows.map((items) => (
              <li key="modallink">
                {items.map((linklist) => (
                  <div className="modal_call">
                    <img
                      className="modal_img"
                      src={linklist.img} alt="modalimg"/>
                    <div className="modal_descri">
                      <p className="modal_title">{linklist.title} </p>
                      <p className="modal_info">{linklist.content}</p>
                    </div>
                  </div>
                ))}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
