import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export function HomeImages() {
  return (
    <div className="home_main">
      <div className="home_main_logo"></div>
      <div className="home_main_image">
        <img className="home_image" src="images/main/tastyofmay.jpg" alt="" />
        <HomeEvent/>
      </div>
    </div>
);
}

export function HomeEvent() {
  const[open, setOpen] = useState('true');
  const [defaultStyle, setDefaultStyle] = useState({
    position: "absolute",
    right: 0,
    transition : "all 500ms ease-out"
  })
  const [btnStyle, setBtnStyle] = useState({
    position: "absolute",
    bottom: "5rem",
    right: "21rem;",
    transition : "all 500ms ease-out",
  })
  const showEvent = () =>{

    setOpen(!open)
    if(open === false){
      setDefaultStyle({...defaultStyle, right : "-1rem", opacity: 0})
      setBtnStyle({...btnStyle,right: "10rem",transform: "rotate(45deg)"})
    } else {
      setDefaultStyle({...defaultStyle, right : 0, opacity: 1})
      setBtnStyle({...btnStyle, right:"21rem",transform: "rotate(0deg)"})
    }
  };
  return (
    <>
      <ul className='homeeventlist' style={defaultStyle}>
        <li className='homeevent event1'>
          <img src="/images/main/promotion_rocket.png" alt="" />
        </li>
        <li className='homeevent event2'>
          <img src="/images/main/promotion_maycake.png" alt="" />
        </li>
        <li className='homeevent event3'>
          <img src="/images/main/promotion_tasty.png" alt="" />
        </li>
      </ul>
      <button className='eventbtn' style={btnStyle} onClick={showEvent}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </>
);
}