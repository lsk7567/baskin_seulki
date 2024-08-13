import React from 'react';
import "../css/pages.css";
import {useState, useEffect} from 'react'
import axios from 'axios'
 
export function PraiseForm(){
const [praise, setPrasie] = useState([])
    useEffect(()=>{
        axios.get('/data/praise.json')
            .then(res=>{
                const data =res.data;
                console.log('praisedata->', data.year);
                setPrasie(data) 
            })
            .catch(error=>console.log(error))
    },[])

const changeList = praise.filter((item)=> 
    item.year === '2023-03')

    return(   <>
                <ul className='praiselists'>
            {changeList.map((item)=>(
                <li className='praise_list'>
                    <div className='praise_box'>
                    <img src="/images/praise/img_default.jpg" alt="praiseimg" 
                           className='praise_img'/>
                    <div className='praise_contents'>
                <p className='praise_id'>칭찬점포{item.id}</p>
                <p className='praise_store'>{item.shop}점을 칭찬합니다.</p>
                <br />
                <p>{item.content}</p>
                </div>
                </div>
                </li>
))}
    
    </ul>
        </>
    )
}