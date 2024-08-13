import '../css/style.css'
import '../css/main/main_commons.css'
import '../css/cscenter/cscenter.css'
import { NoticeDetailContent } from '../components/CScenterComponents'
import { Link, Navigate, useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function NoticeDetail(){
    const {id} = useParams()
    const [noticedetail,SetnoticeDetail] = useState({})
        useEffect(()=>{
            axios({
                method:'get',
                url : `http://127.0.0.1:8080/cscenter/notice/detail/${id}`
            })
            .then(response=>{SetnoticeDetail(response.data)})
            .catch(error=>console.log(error))
    },[])
    console.log(noticedetail)
    const navigator = Navigate
    return(
        <div id="noticedetail">
            <div className="content">
                <h2 className='noticedetailtitle'>공지사항</h2>
                <NoticeDetailContent noticecontent={noticedetail}/>
                <Link to="/cscenter/notice">
                    <button className='backbtndetail'>목록</button>
                </Link>
            </div>
        </div>
    )
};