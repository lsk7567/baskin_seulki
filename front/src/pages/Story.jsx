import React, { useState,useEffect } from "react";
import "../css/pages.css";
import axios from "axios";
import { NavbarStory } from "../components/Navbar.jsx";

export default function Story() {

const[storyContent, setStoryContent] = useState([])
/* const [position, setPosition] = useState(0) */

  
useEffect(()=>{

 axios.get('/data/story.json') 
      .then(res=>{
        const data= res.data
        setStoryContent(data)
      })
      .catch(error=>console.log(error))
     /*  window.addEventListener("scroll",onScroll);
      return()=>{
        window.removeEventListener("scroll",onScroll);
      } */
},[])
/*   const onScroll = () =>{
    setPosition(window.scrollY)
  }
 */

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="content">
      <NavbarStory />
  <div className="page_top">
        <h2 className="title">Brand Story</h2>
        <p className="title_sub">우리와 함께한 배라의 이야기</p>
      </div>

      <div className="story_modal_total">
      <img src="/images/story/bg_logo_story_title_left.png"
            onClick={openModal}
            className="story_modal_ballon"
            alt='storysideballon'/>
      <p onClick={openModal} 
      className="story_modal_ballon_text">LOGO STORY</p>

          {modalOpen && (
            <div className="modaldivtest">
              <img src="/images/story/story_modal_bg_img.png" 
                    alt='storymodalimg'
                  className="story_modal_img"/>
              <button className="story_modal_cls_btn" type='button' 
                    onClick={closeModal}></button>
          
              <div>
              <p className='story_modal_title'>LOGO STORY</p>
                <p className="story_modal_content">
                  배스킨라빈스는 매일매일 다른 맛을 보여주고 싶다는 일념 아래<br/>
                  아이스크림 종류는 31가지에 이르게 됩니다. 이를 모토 삼아 기존<br/>
                  로고에 31이라는 숫자가 부여됐으며 모든 점포에는 계절에 맞춘<br/>
                  31가지 풍미의 아이스크림이 갖춰지기 시작했습니다 31이라는<br/>
                  숫자는 브랜드 로고에도 들어가는데 'B'와 'R'에 각각 '3'과 '1'을<br/>
                  찾아볼 수 있습니다.
                </p>
              </div>
         </div>
          )} 
</div>

  <div className="story_total">
    {/* <img src="/images/story/bg_story.png" 
        className="story_bg" alt="storybgimg" /> 
       */}
          
  <div className="story_side">
          <div className="story_ballons side1">
            <img src="/images/story/img_logo_1945.png"
              className="story_brlogo" alt='storysideballon'/>
            <img src="/images/story/bg_logo_story_year.png"
              className="story_year" alt='storysideballon'/>
            <p className="story_year_text">1945</p>
          </div>
          

          <div className="story_ballons side2">
            <img src="/images/story/img_logo_1945.png" className='story_brlogo'alt="" />
            <img src="/images/story/bg_logo_story_year.png" className='story_year'alt="" />
            <p className="story_year_text">1945</p>
          </div>

          <div className="story_ballons side3">
            <img src="/images/story/img_logo_1960.png"
              className="story_brlogo" />
            <img src="/images/story/bg_logo_story_year.png"
              className="story_year"/>
            <p className="story_year_text">1960</p>
          </div>

          <div className="story_ballons side4">
            <img src="/images/story/img_logo_1960.png"
              className="story_brlogo" />
            <img src="/images/story/bg_logo_story_year.png"
              className="story_year"/>
            <p className="story_year_text">1986</p>
          </div>
          <div className="story_ballons side5">
            <img src="/images/story/img_logo_1997.png"
              className="story_brlogo brlogo97" />
            <img src="/images/story/bg_logo_story_year.png"
              className="story_year"/>
            <p className="story_year_text">1997</p>
          </div>

          <div className="story_ballons side6">
            <img src="/images/story/img_logo_1997.png"
              className="story_brlogo brlogo97"/>
            <img src="/images/story/bg_logo_story_year.png"
              className="story_year"/>
            <p className="story_year_text">2001</p>
          </div>

          <div className="story_ballons side7">
            <img src="/images/story/img_logo_2005.png"
              className="story_brlogo brlogo05" />
            <img src="/images/story/bg_logo_story_year.png"
              className="story_year"/>
            <p className="story_year_text">2005</p>
          </div>
          
          <div className="story_ballons side8">
            <img src="/images/story/img_logo_2005.png"
                 className="story_brlogo brlogo05" />
            <img src="/images/story/bg_logo_story_year.png"
              className="story_year"/>
            <p className="story_year_text">2007</p>
          </div>
    
          <div className="story_ballons side9">
            <img src="/images/story/img_logo_2005.png"
                className="story_brlogo brlogo05"/>
            <img src="/images/story/bg_logo_story_year.png"
              className="story_year"/>
            <p className="story_year_text">2011</p>
          </div>
    
          <div className="story_ballons side10">
            <img src="/images/story/img_logo_2016.png"
              className="story_brlogo" />
            <img src="/images/story/bg_logo_story_year.png"
              className="story_year"/>
            <p className="story_year_text">2016</p>
          </div>
    
          <div className="story_ballons side11">
            <img src="/images/story/img_logo_2016.png"
              className="story_brlogo" />
            <img src="/images/story/bg_logo_story_year.png"
              className="story_year"/>
            <p className="story_year_text">2020</p>
          </div>
    



          </div>

  <div className="story_contents">
    {storyContent.map((item)=>(
        <div className="story_content" /* style={{top:position>1?'8rem':'null'}} */>
          <div className="story_content_text">
          <p className="story_subtitle">{item.subtitle}</p>
          <p className="story_text">{item.text}</p>
          </div>
        <img src={item.img} className="story_img" alt="storyimage"/>
        </div>
    ))}
</div>

</div>


    </section>
  )}
