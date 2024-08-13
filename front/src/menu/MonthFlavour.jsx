import React from "react";
import "../css/hyerim.css";
import { MenuNavbar1 } from "../components/MenuNavbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MonthFlavour() {
  const navigate = useNavigate();
  const [icecreamlist, setIceCreamList] = useState([]);
  const [icecreamcakelist, setIceCreamCakeList] = useState([]);

  useEffect(() => {
    const url1 = "http://127.0.0.1:8080/menu/icecream";
    const url2 = "http://127.0.0.1:8080/menu/icecreamcake";
    let startIndex = 1;
    let endIndex = 50;
    axios({
      method: "post",
      url: url1,
      data: {
        startIndex: startIndex,
        endIndex: endIndex,
      },
    })
      .then((res) => {
        setIceCreamList(res.data);
      })
      .catch((error) => console.log(error));
    axios({
      method: "post",
      url: url2,
      data: {
        startIndex: startIndex,
        endIndex: endIndex,
      },
    })
      .then((res) => {
        setIceCreamCakeList(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDetail1 = () => {
    //alert(id);
    navigate(`/menu/icecreamdetail/33`, {
      state: { list: icecreamlist },
    });
  };

  const handleDetail2 = () => {
    //alert(id);
    navigate(`/menu/icecreamcakedetail/19`, {
      state: { list: icecreamcakelist },
    });
  };

  //console.log("lisdt ===>", icecreamlist);

  return (
    <div className="content">
      <MenuNavbar1 />
      <div className="monthflavour_content">
        <h2 className="monthflavour_header">5월 이달의 맛</h2>
      </div>
      <div className="monthflavour_form">
        <header className="monthflavour_box">
          <p className="monthflavor_title_eng">Shooting Star in Wonderland</p>
          <h3 className="monthflavour_title_kor">이상한 나라의 슈팅스타</h3>
          <p className="monthflavour_description">
            딸기와 블루베리가 들어간 솜사탕 아이스크림에 톡톡 튀는 팝핑캔디로
            입안 가득 즐거운 맛
          </p>
        </header>

        <div className="monthflavour_bar"></div>

        <ul className="monthflavour_items">
          <li>
            <img src="/images/monthflavour/blueberry.png" />
            <p className="monthflavour_item_name">블루베리</p>
          </li>
          <li>
            <img src="/images/monthflavour/strawberry.png" />
            <p className="monthflavour_item_name">딸기</p>
          </li>
          <li>
            <img src="/images/monthflavour/candy.png" />
            <p className="monthflavour_item_name">팝핑 캔디</p>
          </li>
        </ul>
      </div>
      <div>
        <img
          className="monthflavour_product"
          src="/images/monthflavour/shootingstarview.jpg"
        />
      </div>

      <div>
        <header>
          <h4 className="monthflavour_new_title">이달의 신제품</h4>
        </header>
        <ul className="monthflavour_new_items">
          <div onClick={handleDetail1}>
            <li className="monthflavour_new_item">
              <img
                className="monthflavour_new_img"
                src="/images/monthflavour/shootingstar.jpg"
              />
              <p className="monthflavour_new_item_name">
                이상한 나라의 슈팅스타
              </p>
            </li>
          </div>
          <div onClick={handleDetail2}>
            <li className="monthflavour_new_item">
              <img
                className="monthflavour_new_img happyjoy"
                src="/images/monthflavour/happyjoy.png"
              />
              <p className="monthflavour_new_item_name">해피 조이 큐브</p>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
