import '../css/style.css'
import '../css/main/main_commons.css'
import '../css/cscenter/faq.css'
import { BigTitleNInfo,EventCategoris } from '../components/MainComponents'
import { useEffect, useState } from 'react'
import { FaQbox } from '../components/CScenterComponents'
import axios from 'axios'
import Pagination from 'rc-pagination'
import { useRef } from 'react'

export default function FaQ(){
    const [type,setType] = useState('전체')
    const [faqList, setFaqList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [btnOpen, setBtnOpen] = useState(null)


    const questionCategory = ["전체","제품",'포인트','회원','기타']

    useEffect(()=>{
        const url = "http://127.0.0.1:8080/cscenter/faq"
        axios({
            method:'get',
            url:url
        })
        .then(response => {
            if(type === '전체'){
                setFaqList(response.data)
            } else{
                setFaqList(response.data.filter(item=>item.category === type))
            }})
        .catch(error=>error)
    },[type])

    let startIndex = 0;
    let endIndex = 0;
    startIndex = (currentPage-1) * pageSize + 1
    endIndex = currentPage * pageSize;

    let currentContent = faqList.slice(startIndex-1,endIndex)
    const changeContents = (type) =>{
    setType(type)
    setCurrentPage(1)
    setBtnOpen(null)
    }
    const click = (index)=>{
        if(btnOpen === index){
            return setBtnOpen(null)
        }
        setBtnOpen(index)
    }


    return(
        <div id='faq'>
            <div className='content'>
                <BigTitleNInfo
                    title="자주하는 질문"
                    info="고객의 소리를 적극 경청하고 고객만족향상 활동을 지속적으로 실천합니다."/>
                <ul className='eventcategory'>
                    {questionCategory.map((item,index)=>(
                        <li className='category'>
                        <EventCategoris
                            eventcategoryList={item} 
                            click={changeContents}
                            className={type === item ? "event_active": "unactive"}/>
                        </li>
                    ))}
                </ul>
                <ul className='faqLists'>
                    {currentContent.map((content, index)=>(
                        <>
                            <FaQbox index={index} content={content} click={click}
                                className={btnOpen === index ? "answers_open" :"answers"} test={btnOpen === index ? '-':'+'}/>
                        </>
                    ))}
                </ul>
                <Pagination current={currentPage}
                    total={faqList.length}
                    pageSize={pageSize}
                    onChange={(page)=>{setCurrentPage(page)}}/>
            </div>
        </div>
    )
};