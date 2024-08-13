import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {Map,MapMarker} from 'react-kakao-maps-sdk'
export function FlavorImage ({image1,title1,info1,image2,title2,info2}){
    return(
        <>
            <li className="left">
                <img src={image1} alt="" />
                <span className="imagetext">
                    <p className="imagetitle">{title1}</p>
                    <p className="imageinfo">{info1}</p>
                </span>
            </li>
            <li className="right">
                <span className="imagetext">
                    <p className="imagetitle">{title2}</p>
                    <p className="imageinfo">{info2}</p>
                </span>
                <img src={image2} alt="" />
            </li>
        </>
    );
}

export function StoreInfo({store}){
    let storeinfo = {...store}
    let map = storeinfo.map
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
        <>
        <li className="store_info_list">
            <h3 className="store_info_name">{store.name}</h3>
            <button className="flavor_map"
                onClick={openModal}>지도보기</button>
            {showModal === true ?<ModalPage
                                            openModal={openModal}
                                            closeModal={closeModal}
                                            lat={map[0].lat}
                                            long={map[0].long}
                                            />:null}
        </li>
        <li className="store_info_list" >
            <p className="store_info_title">매장주소</p>
            <p className="store_info_address">{store.address}</p>
        </li>
        <li className="store_info_list">
            <p className="store_info_title">전화번호</p>
            <p className="store_info_number store_info_result">{store.number}</p>
        </li>
        <li className="store_info_list">
            <p className="store_info_title">운영시간</p>
            <p className="store_info_number store_info_result">{store.time}</p>
        </li>
        <li className="store_info_list">
            <p className="store_info_title">스페셜 메뉴</p>
            <p className="store_info_menu store_info_result">{store.menu}</p>
        </li>
        <li className="store_info_list">
            <p className="store_info_title">매장 서비스</p>
            <p className="store_info_service store_info_result">{store.service}</p>
        </li>
        </>
    )
};
export function StoreCarousel({store}){
    let storeinfo = {...store}
    let carouselinfo = storeinfo.etc
    return(
        <>
            {carouselinfo.map((menu)=>(
                <li>
                <img src={menu.img}/>
                <p className="carousel_menu">{menu.special}</p>
                <p className="carousel_desc">{menu.desc}</p>
                </li>
            ))}
        </>
    )
};

export function Dots({store,click,index}){
    let test = store[0]
    let dot = {...test}.etc
    console.log(dot)
    const sendingIndex = (index) =>{
        click(index)
    }
    const currentIndex = {index}
    return(
        <>
        {dot&&dot.map((item,index)=>(
            <li className="lil">
                <button className={ currentIndex.index === index ? " dot_active":"dot_unactive"} 
                    onClick={()=>sendingIndex(index)}>●</button>
            </li>
            ))}
        </>
    )
};
export function ModalPage({openModal,closeModal,lat,long}){
    const maplat = {lat}
    const maplong = {long}
    console.log('lat',maplat.lat)
    return(
        <div className='modal_out'onClick={closeModal}>
            <div className='modal_container' onClick={(e)=>e.stopPropagation()}>
                <button className="close" onClick={closeModal}>
                <FontAwesomeIcon icon={faXmark} />
                </button>
                <div className='modal_content'>
                <Map center={{// 지도의 중심좌표
                                lat: maplat.lat,
                                lng: maplong.long,
                            }}
                    style={{// 지도의 크기
                            width: "100%",
                            height: "450px",
                            }}
                    level={3}>
                    <MapMarker // 마커를 생성합니다
                        position={{
                        // 마커가 표시될 위치입니다
                        lat: maplat.lat,
                        lng: maplong.long,
                        }}/></Map>
                </div>
            </div>
        </div>
    )
};