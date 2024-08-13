import '../css/style.css'
import '../css/main/main_commons.css'
import '../css/cscenter/cscenter.css'
import { Navbar,BigTitleNInfo } from '../components/MainComponents'
import { Channel, Question, VOC } from '../components/CScenterComponents'
import { useEffect, useState } from 'react'

export default function CScenter(){
    const [csfaq,setCsfaq] = useState([])
    useEffect(()=>{
        fetch('data/cs_center.json')
            .then(response=>response.json())
            .then(result=>setCsfaq(result))
            .catch(error=>console.log(error))
    },[])
    const helpList = [];
    for(let i =0; i<csfaq.length; i+=2){
        helpList.push(csfaq.slice(i,i+2))
    }
    const cscenter = [
        {title:"고객센터",path:"/cscenter"},
        {title:"소비자중심경영(CCM)" ,path:"/cscenter/ccm"},
        {title:"칭찬첨포", path:"/cscenter/praise"},
        {title:"공지사항", path:"/cscenter/notice"},
    ]
    const channel = [
        {
            channel:"전화",
            img:"images/cs_center/icon_channel_1.png",
            way:"080-555-3131",
            etc:"(주말·공휴일 휴무 / 수신자 부담)"
        },
        {
            channel:"홈페이지",
            img:"images/cs_center/icon_channel_2.png",
            way:"상담 접수 시간 : 24시간",
            etc:""
        },
        {
            channel:"점포",
            img:"images/cs_center/icon_channel_3.png",
            way:"구매점포 연락처 확인 ",
            etc:""
        },
    ]
    const process = ["01 고객소리 접수","02 고객상담", "03 현업부서 전달", "04 원인규명", "05 개선 대책","06 개선 및 반영"]
    return(
        <div id="cscenter">
            <div className="content">
                <ul className='navbarlist'>
                    {cscenter.map((item)=>(
                        <li className='cnavbar'>
                            <Navbar 
                            title={item.title}
                            path={item.path}/>
                        </li>
                    ))}
                </ul>
                <BigTitleNInfo
                    title="고객 센터"
                    info="고객의 소리를 적극 경청하고 소비자중심경영 활동을 지속적으로 실천합니다."/>
                <ul className='helpList'>
                    {helpList.map((items)=>(
                        <li className='helpListItem'>
                            {items.map((item)=>(
                                    <Question
                                        img={item.img}
                                        title={item.title}
                                        info={item.info}
                                        btn={item.btn}
                                        link={item.link}/>
                                    ))}
                                </li>
                    ))}
                </ul>
                <h3 className='cs_center_title'>고객 문의 접수 채널</h3>
                <ul className='channelList'>
                    {channel.map((item)=>(
                        <li>
                            <Channel
                                title={item.channel}
                                img={item.img}
                                way={item.way}
                                etc={item.etc}/>
                        </li>
                    ))}
                </ul>
                <h3 className='cs_center_title'>VOC 처리 프로세스 </h3>
                <div className='processbox'>
                    <ul className='processList'>
                        {process.map((process)=>(
                            <VOC process={process}/>
                        ))}
                    </ul>
                    <p className='process_notice'>※ 문제 발생 건에 대해서는 공정거래위원회 고시 소비자분쟁기준에 의거하여 신속하게 처리됩니다.</p>
                </div>
            </div>
        </div>
    )
};