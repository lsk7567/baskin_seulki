import "../css/style.css"
import "../css/main/main_commons.css"
import "../css/store/flavor.css"
import { BigTitleNInfo, EventCategoris, Navbar } from "../components/MainComponents";
import { FlavorImage, StoreInfo, StoreCarousel, Dots } from "../components/FlavorComponents";
import { useEffect, useRef, useState } from "react";
import '../css/store/modal_y.css'
import { Link } from "react-router-dom";
import axios from "axios";

export default function Flavor(){
    const [flavorStores, setFlavorStores] = useState([]);
    const [type,setType]=useState("부산서면중앙점")
    const [currentIndex,setCurrentIndex] = useState(0);
    const slideRef = useRef(null);
    const changeContent = (type)=>{
        setType(type)
    }
    useEffect(()=>{
        const url = "http://127.0.0.1:8080/store/flavor"
        axios({
            method:"get",
            url:url
        })
        .then(response=>{
            setFlavorStores(response.data.filter(item=>item.name === type))
        })
    },[type])

    console.log(type)
    const storecategories = [
        {name:"100 flavor",path:"/store/flavor"},
        {name:"flow",path:"/store/flow"},
        {name:"배달주문",path:"/store/delivery"},
        {name:"단체주문",path:"/store/catering"}
        ]
    const flavorinfo = {
        "image1":"http://localhost:3000/images/brstore/brstore_100flavor_item1.png",
        "image2":"http://localhost:3000/images/brstore/brstore_100flavor_item2.png",
        "title1":"베라에서 만나는 아르데코 스타일의 공간",
        "title2":"취향대로 고르는 100가지 아이스크림",
        "info1":"글로벌 인테리어 디자인 브랜드 오스모스(OSMOSE)사와 협업해 우아한 라인과 기하학적 디자인의 아르데코 스타일을 현대적으로 구현했습니다. 아트슈머까지 만족시킬 예술적인 인테리어가 돋보이는 공간입니다.",
        "info2":"해외 인기 플레이버와 이달의 맛으로 선보였던 히트 메뉴, 트렌드를 반영한 오가닉 및 저칼로리 라인과 파르나스몰점의 시그니처 플레이버 등 풍성하게 준비된 아이스크림 컬렉션을 즐겨보세요."
    }
    const storeList = ["부산서면중앙점","파르나스몰점","SPC스퀘어점","강남대로점"]
    useEffect(()=>{
            slideRef.current.style.transition = "all 300ms ease-in"
            slideRef.current.style.transform = `translateX(-${currentIndex*48.5}%)`},[currentIndex])

            function useInterval(callback, delay) {
                const savedCallback = useRef();
                // Remember the latest callback.
                useEffect(() => {
                    savedCallback.current = callback;
                }, [callback]);
                // Set up the interval.
                useEffect(() => {
                    function tick() {
                    savedCallback.current();
                    }
                    if (delay !== null) {
                    let id = setInterval(tick, delay);
                    return () => clearInterval(id);
                    }
                }, [delay]);
                }
                useInterval(()=>{
                    if(flavorStores&&currentIndex === flavorStores[0].etc.length-1){
                        setCurrentIndex(0)
                    } else{
                        setCurrentIndex(currentIndex + 1)
                    }
                },3000)
                
    const carouselbtn = (index) =>{
        setCurrentIndex(index)
    } 
    return(
        <div id="flavor">
            <div className="content">
                <ul className="navbarlist">
                {storecategories.map((item)=>(
                    <li className="flavornavbar">
                            <Navbar title={item.name}
                                    path={item.path}/>
                    </li>
                ))}
                </ul>
                <BigTitleNInfo
                title="100 Flavor"
                info="배스킨라빈스 100flavor"/>
                <div className="100flavor_advertisement">
                    <h3 className="adtitles">
                        <span className="flavor_title">All About ICE CREAM 100</span>
                    </h3>
                    <ul className="flavorimages">
                    <FlavorImage
                    image1={flavorinfo.image1}
                    info1={flavorinfo.info1}
                    image2={flavorinfo.image2}
                    info2={flavorinfo.info2}
                    title1={flavorinfo.title1}
                    title2={flavorinfo.title2}/>
                    </ul>
                </div>
                <div className="flavor_carousel">
                <ul className="storeCategories">
                    {storeList.map((item)=>(
                        <li className="category">
                            <EventCategoris
                                click={changeContent}
                                eventcategoryList={item}
                                className={type === item ? "active":"unactive"}
                                />
                        </li>
                    ))}
                </ul>
                <div className="carousel_content">
                    <ul className="flavorstores">
                        {flavorStores.map((store)=>(
                            <>
                            <StoreInfo store={store}/>
                            </>
                        ))}
                    </ul>
                    <div className="display">
                        <ul className="carouselList" ref={slideRef}>
                            {flavorStores.map((store)=>(
                                <StoreCarousel
                                    store={store}/>
                            ))}
                        </ul>
                    </div>
                    <ul className="dotList">
                        <Dots store={flavorStores}
                                index={currentIndex}
                                click={carouselbtn}/>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
}