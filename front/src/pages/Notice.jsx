import '../css/style.css'
import '../css/main/main_commons.css'
import '../css/cscenter/cscenter.css'
import { Navbar } from '../components/MainComponents'
import { BigTitleNInfo } from '../components/MainComponents'
import { NoticeList } from '../components/CScenterComponents'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Pagination from 'rc-pagination'


export default function Notice(){
    const [noticeList, setNoticeList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    useEffect(()=>{
        const url = "http://127.0.0.1:8080/cscenter/notice"
        axios({
            method:'get',
            url : url
        })
        .then(response=>{setNoticeList(response.data)
            setTotalCount(Math.floor(response.data.length/10+1))
        })
        .catch(error=>console.log(error))
    },[currentPage])

    let startIndex = 0;
    let endIndex = 0;
    startIndex = (currentPage-1) * pageSize + 1
    endIndex = currentPage * pageSize;
    let currentContent = noticeList.slice(startIndex-1,endIndex)
    const cscenter = [
        {title:"고객센터",path:"/cscenter"},
        {title:"소비자중심경영(CCM)" ,path:"/cscenter/ccm"},
        {title:"칭찬첨포", path:"/cscenter/praise"},
        {title:"공지사항", path:"/cscenter/notice"},
    ]
    return(
        <div id="notice">
            <div className="content">
                <ul className='navbarlist'>
                    {cscenter.map((item)=>(
                        <li className='noticebar'>
                            <Navbar
                                title={item.title}
                                path={item.path}/>
                        </li>
                    ))}
                </ul>
                <BigTitleNInfo
                    title="공지사항"
                    info="배스킨라빈스의 신제품 안내, 신규 CF등 다양한 소식을 알려드립니다!"/>
                <ul className='noticecontent'>
                    <p className='noticecount'>총 <span className='countnumber'>{noticeList.length}</span>건</p>
                    {currentContent.map((item)=>(
                        <>
                        <NoticeList list={item}/>
                        </>
                    ))}
                </ul>
                <Pagination
                    current={currentPage}
                    total={noticeList.length}
                    pageSize={pageSize}
                    onChange={(page)=>{setCurrentPage(page)}}/>
            </div>
        </div>
    )
};