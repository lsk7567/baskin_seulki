import React, { useEffect, useState } from 'react';
import '../css/style.css'
import '../css/event/event.css'
import '../css/main/main_commons.css'
import { BigTitleNInfo, Navbar,EventCategoris } from '../components/MainComponents';
import { Box} from '../components/EventComponents';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Event() {
  const [title,setTitle] = useState('전체')
  const [eventList, setEventList] = useState([]);
  useEffect(()=>{
    const url = "http://127.0.0.1:8080/play"
    axios({
      method:'get',
      url:url
    })
    .then(response=>{
      if(title === "전체"){
        setEventList(response.data)
      } else{
        setEventList(response.data.filter(item=>item.category === title))
      }
    })
    .catch(error=>console.log(error))
  },[title])
  
  const eventnavlist = [
    {name:"이벤트", path:"/play/event"},
    {name:"BR 레시피", path:"/play/brrecipe"}]
    
  const eventcategoryList =["전체","프로모션","제휴혜택"]
  
  const changeContents= (type) =>{
    setTitle(type)
  }
  

  const eventListOrder = [];
  for(let i =0; i<eventList.length; i+=2){
    eventListOrder.push(eventList.slice(i,i+2))
  }

  return (
    <div id='event'>
      <div className='content'>
        <ul className="navbarlist">
        {eventnavlist.map((item)=>(
          <li className='eventbar'>
              <Navbar title={item.name} path={item.path}/>
          </li>
        ))}
        </ul>
        <BigTitleNInfo
          title="EVENT"
          info="배스킨라빈스와 함께 해피포인트앱/오프라인 매장에서 진행하는 다양한 이벤트를 확인해보세요"/>
        <ul className='eventcategory'>
          {eventcategoryList.map((item,index)=>(
            <li className='category'>
              <EventCategoris
                eventcategoryList={item} 
                click={changeContents}
                className={title === item ? "event_active": "unactive"}/>
            </li>
          ))}
        </ul>
        <ul className="orderList">
          {eventListOrder.map((items)=>(
            <li className='order'>
              {items.map((item)=>(
                <Link to={`/play/event/detail/${item.id}`}>
                  <Box list={item}
                        classname={item.category === "프로모션" ? "boxcategorypm":"boxcategorybn"}/>
                </Link>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
);
}