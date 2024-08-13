import '../css/style.css'
import '../css/main/main_commons.css'
import '../css/event/brrecipe.css'
import { Navbar } from '../components/MainComponents'
import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function BRRecipeDetail(){
    const {id} = useParams()
    const [recipecontent, setRecipeContent] = useState({})
    useEffect(()=>{
        axios({
            method:'get',
            url:`http://127.0.0.1:8080/play/brrecipe/detail/${id}`
        })
        .then(response=>setRecipeContent(response.data))
        .catch(error=>console.log)
    },[])
    const eventnavlist = [
        {name:"이벤트", path:"/play/event"},
        {name:"BR 레시피", path:"/play/brreipe/all"}
    ]
    let iceinfo = {...recipecontent}.ice
    let ingredients = {...recipecontent}.ingredients
    let howtomake = {...recipecontent}.recipe
    return(
        <div id='recipe_detail'>
            <div className='content'>
                <ul className='navbarlist'>
                    {eventnavlist.map((item)=>(
                        <li className='navbarrecipe'>
                                <Navbar
                                    title={item.name}
                                    path={item.path}/>
                        </li>
                    ))}
                </ul>
                <h1 className='recipedetail_bigtitle'>BR Recipe</h1>
                <h2 className='recipedetail_biginfo'>다양한 전문가들이 제안하는 배라 행복 레시피</h2>
                <hr/>
                <p className='recipedetail_category'>{recipecontent.category}</p>
                <h3 className='recipedetail_eng'>{recipecontent.engtitle}</h3>
                <h3 className='recipedetail_ko'>{recipecontent.kotitle}</h3>
                <p className='recipedetail_by'>Recipe by {recipecontent.author}</p>
                <p className='recipedetail_reason'>{recipecontent.intro}</p>
                <img className="recipedetail_mainimg" src={recipecontent.mainimg} alt="" />
                <div >
                    <ul className='recipedetail_iceinfo'>
                        {iceinfo&&iceinfo.map((item)=>(
                            <li className="recipe_ices">
                                <img className='recipedetail_smallimg' src={item.iceimg} alt="" />
                                <div className='iceinfos'>
                                    <p className='iceinfo_title'>{item.name}</p>
                                    <p>{item.info}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='recipedetail_ingredient'>
                    <p className='recipedetail_ingre_title'>재료준비(1인분)</p>
                            <ul className='ingredientsList'>
                                {ingredients&&ingredients.map((item)=>(
                                    <li className='ingredient'>{item}</li>
                                ))}
                            </ul>
                </div>
                <div className='recipedetail_make'>
                    <p className='recipe_title'>how to make</p>
                        <ul className='recipeLists'>
                            {howtomake&&howtomake.map((item)=>(
                                <li className='recipe_content'>{item}</li>
                            ))}
                        </ul>
                </div>
                <Link to="/play/brrecipe">
                    <button className='backbtndetail'>목록</button>
                </Link>
            </div>
        </div>
    )
};