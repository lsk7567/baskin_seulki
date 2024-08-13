import React from "react";
import  '../css/pages.css'
import { useState } from "react";
 import { NavbarStory } from "../components/Navbar"
import {ModalDream, ModalFarm, ModalLink} from '../components/Modal.jsx'


export default function Bebetter(){
const [showModal, setShowModal] =useState(false)
const [modalType, setModalType]=useState('')


const openModal = (mname) => {
    setModalType(mname)
    setShowModal(true)
    document.body.style.overflow = 'hidden'}

    const closeModal = () =>{
    setShowModal(false)
    setModalType("")
    document.body.style.overflow='unset'} 

    return (
    <div className="content">
 <NavbarStory/>

<div className="page_top">
<h2 className="title">Be Better</h2>
<p className="title_sub">배라가 사회와 함께 하는 방법,<br/> 가치있는 같이 </p>
</div>

<section className="bebetter_contents">

<div className="bebetter">
<img className="bebetter_img" src="/images/img_dream.png" alt='bebetterimg'/>
<div className="bebetter_content">
    <p className="bebetter_subtitle sub1">핑크드림 캠페인이란?</p>
    <p className="bebetter_subinfo">배라와 소비자가 함 만드는 따뜻한 31데이!&nbsp;&nbsp;
    <button className='bebetter_btn' type='button' 
        onClick={()=>openModal('dream')}>더보기</button></p>

 {showModal === true && modalType === 'dream' ?
        <ModalDream closeModal={closeModal}
                    type='dream'/> 
                    : null}  

    <p className="bebetter_subdescri">
핑크드림 캠페인은 브랜드와 소비자가 함께<br/>
도움이 필요한 이웃을 지원하는 사회공헌 활동입니다.<br/>
배스킨라빈스는 2023년부터 핑크드림 캠페인의 일환으로 월드비전과 협업해<br/>
브랜드의 대표적 행사인 '31데이' 수익의 3.1%를 기부금으로 적립하고 있습니다 </p>

<ul className="sub1">
    <li>✔️31명의 자립준비청년 선발해 생애최초 종합건강검진 및 장학금 지원</li>
    <li>✔️자립준비청년 대상 주거 환경 개선비 및 역량강화 교육비 지급</li>
    <li>✔️핑크스푼 업사이클링 및 어린이 놀이터 환경 조성 사업 진행</li>
</ul>
</div>
</div>

<div className="bebetter">
<img  className="bebetter_img" src="/images/img_farm.png" />
<div className="bebetter_content">
<p className="bebetter_subtitle sub2">핑크팜 캠페인이란?</p>
<p className="bebetter_subinfo">지역 농가 상생 프로젝트 &nbsp;&nbsp;
<button className='bebetter_btn' type='button' onClick={()=>openModal('modalfarm')}  >더보기</button></p>
{showModal === true && modalType === 'modalfarm' ?
        <ModalFarm openModal={openModal}
                        closeModal={closeModal}
                        /> : null}


<p className="bebetter_subdescri">
    핑크팜 캠페인은 배스킨라빈스와 지역농가 청년농부지원을 위한 콜라보레이션<br/>
상생 프로젝트 입니다. 지역농가 지원을 위한 상품개발부터 원료 수급,특화 제품 개발,<br/>
홍보까지 지역농가 지원을 위한캠페인을 진행하고 있습니다.</p>
<ul className="sub2">
    <li>✔️지역농가, 청년농부 지원 콜라보레이션 제품 출시</li>
</ul>
</div>
</div>

<div className="bebetter">
<img  className="bebetter_img" src="/images/img_link.png" />
<div className="bebetter_content">
<p className="bebetter_subtitle sub3">핑크링크 캠페인이란?</p>
<p className="bebetter_subinfo">중소 기업 콜라보 프로젝트&nbsp;&nbsp;
<button className='bebetter_btn' type='button' onClick={()=>openModal('modallink')} >더보기</button></p>
{showModal === true && modalType === 'modallink' ?
 <ModalLink openModal={openModal}
                        closeModal={closeModal}
                        /> : null}
<p className="bebetter_subdescri">
    핑크링크 캠페인은 배스킨라빈스에서 중소기업 지원을 위해 진행하는<br/>
콜라보레이션 상생 프로젝트입니다. 제품 개발부터, 전국 매장 제품 출시 및 광고 지원까지<br/>
중소기업과 함께 상생하기 위해 노력합니다.</p>
<ul className="sub3">
    <li>✔️31명의 자립준비청년 선발해 생애최초 종합건강검진 및 장학금 지원</li>
</ul>
</div>
</div>

</section>
    </div>
    )}

