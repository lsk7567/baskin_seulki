import '../css/style.css'
import '../css/main/main_commons.css'
import '../css/event/event.css'
import { Navbar } from '../components/MainComponents'
import { DetailNotice, DetailTitle } from '../components/EventDetailComponents'
import { Link, useParams } from 'react-router-dom'
import { FaQbox } from '../components/CScenterComponents'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function EventDetail(){
    const [eventDetail, setEventDetail] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        axios({
            method:'get',
            url:`http://127.0.0.1:8080/play/event/detail/${id}`
        })
        .then(response=>setEventDetail(response.data))
        .catch(error=>console.log(error))
    },[])
    const eventDetailNav = [
        {"name":"이벤트",
        "path":"/play/event"},
        {"name":"BR 레시피",
        "path":"/play/brrecipe"},
    ]
    return(
        <div id='eventDetail'>
            <div className='content'>
                <ul className='navbarlist'>
                    {eventDetailNav.map((item)=>(
                        <li className='navbar eventdetailnavbar'>
                            <Navbar
                                title={item.name}
                                path={item.path}/>
                        </li>
                    ))}
                </ul>
                <DetailTitle content={eventDetail}/>
                <hr/>
                <img className='detailimg' src={eventDetail.detailimg}alt="" />
                <hr/>
                <DetailNotice content={eventDetail}/>
                <hr/>
                <button className='backbtn'><Link to="/play/event"
                className='btncontent'>목록</Link></button>
            </div>
        </div>
    )
};