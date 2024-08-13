import React, { useEffect, useState } from "react";
import { MenuNavbar2 } from "../components/MenuNavbar";
import MenuListHr from "../components/MenuListHr";
import "../css/hyerim.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function IceCream() {
  const navigate = useNavigate();
  const [icecreamlist, setIceCreamList] = useState([]);

  useEffect(() => {
    const url = "http://127.0.0.1:8080/menu/icecream";
    let startIndex = 1;
    let endIndex = 50;
    axios({
      method: "post",
      url: url,
      data: {
        startIndex: startIndex,
        endIndex: endIndex,
      },
    })
      .then((res) => {
        //const data = res.data;
        // console.log(res.data);
        setIceCreamList(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  //출력리스트 갯수 정의

  const rows = [];
  for (let i = 0; i < icecreamlist.length; i += 5) {
    rows.push(icecreamlist.slice(i, i + 5));
  }

  const handleDetail = (id) => {
    //alert(id);
    navigate(`/menu/icecreamdetail/${id}`, {
      state: { list: icecreamlist },
    });
  };
  return (
    <div className="content">
      <MenuNavbar2 />
      <div className="menu_page_content">
        <h2 className="menu_page_name">Ice Cream</h2>
        <p className="menu_page_description">
          한 입에 물면 달콤하게 사르르 녹는 아이스크림.
        </p>
        <p className="menu_page_description">
          당신이 어떤 기분이든 그 아이스크림을 따라 당신의 기분은 아마
          달콤해졌을 거예요.
        </p>
      </div>

      <div className="menulisthr_content">
        {rows.map((row, index) => (
          <ul className="menulisthr" key={index}>
            {row.map((icecream) => (
              // <Link to={`/menu/icecreamdetail/${icecream.id}`}>
              <div onClick={() => handleDetail(icecream.id)}>
                <li key={icecream.id}>
                  <MenuListHr
                    name={icecream.name}
                    image={icecream.image}
                    hash={icecream.hash}
                    label={icecream.label}
                    bgcolor={icecream.bgcolor}
                    hashcolor={icecream.hashcolor}
                  />
                </li>
              </div>
              // </Link>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
