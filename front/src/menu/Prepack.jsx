import React, { useEffect, useState } from "react";
import { MenuNavbar3 } from "../components/MenuNavbar";
import MenuListHr from "../components/MenuListHr";
import "../css/hyerim.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Prepack() {
  const navigate = useNavigate();
  const [prepacklist, setPrepackList] = useState([]);

  useEffect(() => {
    const url = "http://127.0.0.1:8080/menu/prepack";
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
        //console.log(res.data);
        setPrepackList(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  //출력리스트 갯수 정의

  const rows = [];
  for (let i = 0; i < prepacklist.length; i += 5) {
    rows.push(prepacklist.slice(i, i + 5));
  }

  const handleDetail = (id) => {
    //alert(id);
    navigate(`/menu/prepackdetail/${id}`, {
      state: { list: prepacklist },
    });
  };
  return (
    <div className="content">
      <MenuNavbar3 />
      <div className="menu_page_content">
        <h2 className="menu_page_name">Prepack</h2>
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
            {row.map((prepack) => (
              //<Link to={`/menu/prepackdetail/${prepack.id}`}>
              <div onClick={() => handleDetail(prepack.id)}>
                <li key={prepack.id}>
                  <MenuListHr
                    name={prepack.name}
                    image={prepack.image}
                    hash={prepack.hash}
                    label={prepack.label}
                    bgcolor={prepack.bgcolor}
                    hashcolor={prepack.hashcolor}
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
