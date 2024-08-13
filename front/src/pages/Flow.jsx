import '../css/style.css'
import '../css/main/main_commons.css'
import '../css/store/flow.css'
import { Navbar, BigTitleNInfo } from '../components/MainComponents'
import { FlowInfo, FlowStores } from '../components/FlowComponents'
import { Link } from 'react-router-dom'

export default function Flow(){
    const storecategories = [
        {name:"100 flavor",path:"/store/flavor"},
        {name:"flow",path:"/store/flow"},
        {name:"배달주문",path:"/store/delivery"},
        {name:"단체주문",path:"/store/catering"}
        ]
    const flowstore=[
        {
            store:"flow 도곡",
            address:"서울 강남구 도곡동 902-2 지상1층 102호",
            time :"AM 10~PM 11",
            number:""
        },
        {
            store:"flow 위례",
            address:"경기 성남시 수정구 위례광장로 320 (창곡동, 아이에스센트럴타워) 1층",
            time :"AM 10~PM 11",
            number:"02-409-7737"
        },
    ]
    return(
        <div id="flow">
            <div className="content">
                <ul className='navbarlist'>
                    {storecategories.map((item)=>(
                        <li className='navbar_flow'>
                                <Navbar
                                    title={item.name}
                                    path={item.path}/>
                        </li>
                    ))}
                </ul>
                <BigTitleNInfo
                title="Flow"
                info="배스킨라빈스가 자신있게 선사하는 새로운아이스크림 경험
                배스킨라빈스 무인매장, 플로우24
                flow24"/>
                <div className='flow_content'>
                    <h3 className='flow_title'>
                        <span>Flow</span>
                    </h3>
                    <div className='info1'>
                        <FlowInfo
                            title="365일 24시간 끊이지 않는 즐거움"
                            desc="‘플로우(flow)’는 밤낮없이 매장 결제, 배달 등 모든 서비스를 비대면으로 물 흐르듯
                            편리하게 사용할 수 있다는 의미가 담겨있어요. 끊이지 않는 즐거움
                            이라는 콘셉트로 고객의 라이프 스타일에 딱 맞는 다채로운 경험과 서비스를 제공합니다."/>
                    </div>
                    <div className='info2'>
                        <FlowInfo
                            title="취향대로 고르는 120여종의 다양한 제품"
                            desc="오가닉, 딜라이트, 프로바이오틱스 등 다양한 맛의 아이스크림부터 마카롱·모찌·롤과 같은 각종 아이스 디저트, 플로우에서만 판매되는 아이스크림 케이크, 아이스크림 피자까지 플로우에서 색다른 맛을 경험해보세요."/>
                    </div>
                    <div className='info3'>
                        <FlowInfo
                        title="스낵류부터 파티용품까지 누구나 쉽고 간편하게"
                        desc="아이스크림에 곁들여 먹을 수 있는 시리얼, 스낵류와 파티용품도 준비되어 있어요. 제품을 다 고르셨다면 키오스크(무인 단말기)에서 셀프 결제 시스템으로 누구나 쉽게 이용하실 수 있어요."/>
                    </div>
                </div>
                <div className='flow_store'>
                    <h3 className='flow_store_title'>FLOW 매장찾기</h3>
                    <ul className='flowstores'>
                        <FlowStores/>
                    </ul>
                </div>
            </div>
        </div>
    )
};