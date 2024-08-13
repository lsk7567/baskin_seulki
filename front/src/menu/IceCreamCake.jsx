import React, { useEffect, useState } from "react";
import { MenuNavbar4 } from "../components/MenuNavbar";
import MenuListHr from "../components/MenuListHr";
import "../css/hyerim.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function IceCreamCake() {
  const navigate = useNavigate();
  const [icecreamcakelist, setIceCreamCakeList] = useState([]);

  useEffect(() => {
    const url = "http://127.0.0.1:8080/menu/icecreamcake";
    let startIndex = 1;
    let endIndex = 30;
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
        //console.log(res.data);
        setIceCreamCakeList(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  //console.log("icecreamcake", icecreamcakelist);

  const rows = [];
  for (let i = 0; i < icecreamcakelist.length; i += 5) {
    rows.push(icecreamcakelist.slice(i, i + 5));
  }

  const handleDetail = (id) => {
    //alert(id);
    navigate(`/menu/icecreamcakedetail/${id}`, {
      state: { list: icecreamcakelist },
    });
  };

  return (
    <div className="content">
      <MenuNavbar4 />
      <div className="menu_page_content">
        <h2 className="menu_page_name">Ice Cream Cake</h2>
        <p className="menu_page_description">
          축하하고 싶은 날에도, 위로가 필요한 날에도, 그 모든 순간 함께 할
          아이스크림 케이크.
        </p>
        <p className="menu_page_description">
          달콤한 아이스크림 케이크로 당신의 특별한 날을 더욱더 특별하게
          만들어드릴게요.
        </p>
      </div>

      <div className="menulisthr_content">
        {rows.map((row, index) => (
          <ul className="menulisthr" key={index}>
            {row.map((icecreamcake) => (
              //<Link to={`/menu/icecreamcakedetail/${icecreamcake.id}`}>
              <div onClick={() => handleDetail(icecreamcake.id)}>
                <li key={icecreamcake.id}>
                  <MenuListHr
                    name={icecreamcake.name}
                    image={icecreamcake.image}
                    hash={icecreamcake.hash}
                    label={icecreamcake.label}
                    bgcolor={icecreamcake.bgcolor}
                    hashcolor={icecreamcake.hashcolor}
                  />
                </li>
              </div>
              //</Link>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
