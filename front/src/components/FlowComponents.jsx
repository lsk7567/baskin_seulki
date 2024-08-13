import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {Map,MapMarker} from 'react-kakao-maps-sdk'

export function FlowInfo({title,desc}){
    return(
        <>
        <h3 className="info_title">{title}</h3>
        <p className="info_desc">{desc}</p>
        </>
    )
};

export function FlowStores(){
    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(true)
        document.body.style.overflow = 'hidden'
    }
    const closeModal = () =>{
        setShowModal(false)
        document.body.style.overflow = 'unset'
    }
    return(
        <li className="flow_store_box">
            <h3 className="flow_store_name">flow 위례</h3>
            <button className="flowstoremap" onClick={openModal}>지도보기</button>
            {showModal === true ?<ModalPage
                                            openModal={openModal}
                                            closeModal={closeModal}/>:null}
            <div className="flow_store_order">
                <p className="flow_store_row">매장주소</p>
                <p>경기 성남시 수정구 위례광장로 320(창곡동, 아이에스센트럴타워) 1층</p>
            </div>
            <div className="flow_store_order">
                <p className="flow_store_row">운영시간</p>
                <p>AM 10 ~ PM 11</p>
            </div>
            <div className="flow_store_order">
                <p className="flow_store_row store_number">연락처</p>
                <p className="flow_real_number">02-409-7737</p>
            </div>
        </li>
    )
};

export function ModalPage({openModal,closeModal}){
    return(
        <div className='modal_out'onClick={closeModal}>
            <div className='modal_container' onClick={(e)=>e.stopPropagation()}>
                <button className="close" onClick={closeModal}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <div className='modal_content'>
                    <Map center={{// 지도의 중심좌표
                                    lat: 37.4722438981494,
                                    lng: 127.142949569878,
                                }}
                        style={{// 지도의 크기
                                width: "100%",
                                height: "450px",
                                }}
                        level={3}>
                        <MapMarker // 마커를 생성합니다
                            position={{
                            // 마커가 표시될 위치입니다
                            lat: 37.4722438981494,
                            lng: 127.142949569878,
                            }}/></Map>
                </div>
            </div>
        </div>
    )
};