import React,{useState,useEffect} from "react";
import axios from "axios";
import "../css/pages.css";

export function HistoryDefaultForm(){
    const [topic, setTopic] = useState({type:'year', theme:2024})
    const[historyImgList, setHistoryImgList] = useState([])
/*     const [datayear, setDataYear] = useState(2024) */


    const typeList = [
        {   "typetitle" : "연도별 보기",
            "typevalue" :"year"
        },
        {   "typetitle" : "테마별 보기",
            "typevalue" :"theme"
        },]


    useEffect(()=>{
        axios.get('/data/history2.json')
            .then(result=>{
                if(topic.type === 'year'){
                    const filterType = result.data.filter(obj=>(obj.type === 'year'&& obj.year===topic.theme))
                                    console.log('filterType->',filterType);
                                    setHistoryImgList(filterType[0].list) 
                } else {
                    const filterType = result.data.filter(obj=>(obj.type === 'theme'&& obj.subject===topic.theme))
                                    console.log('filterType->',filterType);
                                    setHistoryImgList(filterType[0].list) 
                }
            })
            .catch(error=>console.log(error))
    },[topic])
/* console.log(historyImg); */
/* const historyImgList = historyImg.filter((item)=> item.year === datayear)[0].list  */
console.log(topic)
const handleNav = (item) => {
    setTopic({...topic, theme:item})
}

const handleType =(item) =>{
    if(item === 'year'){
        setTopic({type:item, theme:2024})
    } else if(item=== 'theme'){
        setTopic({type:item, theme:'isback'})
    }
}


  const rows =[];
    for(let i=0; i<historyImgList.length; i+=5){
        rows.push(historyImgList.slice(i, i+5)) 
    }   

const yearNavList = [2024,2023,2022]
const themeNavList = [
    { "title" : "배라이즈백",
    "img" : "/images/history/icon_is_back.png",
    "value":"isback"},
    {"title": "레전더리플레이버",
    "img" : "/images/history/icon_legend.png",
    "value":"legend"},
    {"title": "그래이맛어워드",
    "img" : "/images/history/icon_gray.png",
    "value":"gray"}]

    return(
        <>
    <nav className="history_btns">
    
    {typeList.map(item=>( 
        <button className={topic.type ===item.typevalue ?'history_btn_active':'history_btn' }
                type='button' value={item.typevalue}
                onClick={()=>handleType(item.typevalue)}>
            <p>{item.typetitle}</p>
        </button>
    ))}
    
            </nav>

<div className="history_navs">
    {topic.type === 'year'?
        yearNavList.map(item=>(
        <button className={topic.theme===item?"history_nav_active":"history_nav"} 
                type="button"
            onClick={()=>handleNav(item)}>{item}</button>
        )): 
        themeNavList.map(item=>(
            <div>
                <button className={topic.theme === item.value ? "history_theme_nav_active": "history_theme_nav" }
                type="button"  value={item.value}
                      onClick={()=>handleNav(item.value)} >
                <img className="history_nav_img" src={item.img} alt="history_nav_img"/>
                {item.title}
</button></div>
       ))
        }

</div>
<div>
 <ul className='history_imges'>
    {rows.map((items)=>(
        <li>
        {items.map((item)=>(
            <img key={item.id} src={item.image} className='history_img' alt='historyimg'/>
    ))}
        </li>
    ))}
</ul>
</div>    
        </>
    )}
