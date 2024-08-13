import React, { useState } from "react";
import  '../css/header.css'
import { Link,useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { getUser, removeUser } from "../util/localStorage.js"; 

export default function Header({cartCount} ) {

const [isOpen, setIsOpen] = useState(false)
const openBox = () => {setIsOpen(true)}
 const navigate = useNavigate(); //! use들어가는건 맨 상단에 써주기!
const userInfo = getUser(); 

 //TODO 로그아웃 버튼기능
  const handleLogout = () => {
    removeUser();
    navigate("/"); // 로그아웃 후 메인페이지로 이동
  };


  return (
    <>
 
    <div className="header_outer">
      <div className="header_left">
        <Link to="/">
        <img className="header_logo" src="/images/header_brlogo_white.png" />
        </Link>

<ul className="header_titles">
 <li className="header_title menu">

  <Link to='/menu/icecream'><p className="title_text">Menu</p></Link>

      <ul className="header_drops submenu">
        <li><Link to='/menu/monthflavor'>
            <p className="submenu_title">이달의 맛</p></Link></li>
        <li><Link to='/menu/icecream'>
          <p className="submenu_title">아이스크림</p></Link></li>
        <li><Link to='/menu/prepack'>
          <p className="submenu_title">프리팩</p></Link></li>
        <li><Link to='/menu/icecreamcake'>
          <p className="submenu_title">아이스크림 케이크</p></Link></li>
      </ul>
  </li> 

    
 <li className="header_title play">
  <Link to='/play/event'><p className="title_text">BR Play</p></Link> 
  <ul className="header_drops subplay">
          <div className="header_drop_sub1">   
            <li><Link to='/play/event'>
                <p className="submenu_title">이벤트</p></Link></li>
          <div className="header_drop_sub">
            <li className="header_drop">
              <Link to='/play/event'>
              <p className="submenu_sub">프로모션</p></Link></li>
            <li className="header_drop">
              <Link to='/play/event'>
              <p className="submenu_sub">제휴혜택</p></Link></li>
            </div>
                        </div>
              <div>
                  <li><Link to='/play/brrecipe'>
                    <p className="submenu_title">BR Play</p></Link></li>
                  <div className="header_drop_sub">
                  <li className="header_drop">
                    <Link to='/play/brrecipe'>
                  <p className="submenu_sub">BR레시피</p></Link></li>

                  </div>
              </div>
                </ul>
                </li>

 <li className="header_title story">
  <Link to='/story/story'><p className="title_text">BR Story</p></Link>
  <ul className="header_drops substory">
                  <li className="header_drop"><Link to='/story/story'>
                    <p className="submenu_title">브랜드 스토리</p></Link></li>
                  <li className="header_drop"><Link to='/story/history'>
                    <p className="submenu_title">이달의 맛 히스토리</p></Link></li>
                  <li className="header_drop"><Link to='/story/bebetter'>
                    <p className="submenu_title">Be Better</p></Link></li>
                </ul>
                </li>

 <li className="header_title store">
  <Link to='/store/flavor'><p className="title_text">Delivery/Store</p></Link>
  <ul className="header_drops substore">
  <div className="header_drop_sub1">   
      <li><Link to='/store/flavor'>
        <p className="submenu_title">Store</p></Link></li>
            <div className="header_drop_sub">
                <li className="header_drop"><Link to='/store/flavor'>
                <p className="submenu_sub">100flavor 플래그십스토어</p></Link></li>
                <li className="header_drop"><Link to='/store/flow'>
                <p className="submenu_sub">flow매장</p></Link></li>
                <li className="header_drop"><Link to='/store/openstore'>
                <p className="submenu_sub">점포개설문의</p> </Link></li>
            </div>
          </div>
          <div>
          <li><Link to='/store/delivery'><p className="submenu_title">Delivery</p></Link></li>
          <div className="header_drop_sub">
                  <li className="header_drop"><Link to='/store/delivery'>
                    <p className="submenu_sub">배달주문</p></Link></li>
                  <li className="header_drop"><Link to='/store/catering'>
                  <p className="submenu_sub">단체주문</p>
                    </Link></li>
  </div>
          </div>

                </ul>
                </li>

</ul>
      </div>
 
      <div className="header_right">

{userInfo ? (
            <>
              <Link to="/carts">
                <FontAwesomeIcon className="carts" icon={faCartShopping} />
                <span className="cartscount_text">({cartCount})</span>
              </Link>
              <FontAwesomeIcon
                className="customer"
                icon={faUser}
                onClick={openBox}
              />
              {isOpen && (
                <ul className="customer_dropboxs">
                  <li className="customer_dropbox">
                    <button type="button"
                    onClick={handleLogout}>Logout </button>
                  </li>
                  <li className="customer_dropbox">
                    <Link to="/cscenter">CS Center</Link>
                  </li>
                </ul>
              )}
            </>
          ) : (
            <>
              <FontAwesomeIcon
                className="customer"
                icon={faUser}
                onClick={openBox}
              />
              {isOpen && (
                <ul className="customer_dropboxs">
                  <li className="customer_dropbox">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="customer_dropbox">
                    <Link to="/signup">Join</Link>
                  </li>
                  <li className="customer_dropbox">
                    <Link to="/cscenter">CS Center</Link>
                  </li>
                </ul>
              )}
            </>
          )}
          
          
          </div>

    </div>
    <div>




</div>
</>

);
}
