import React, { useEffect, useState } from "react";
import "../css/seulki.css";
import SeulkiHeader from "../components/SeulkiHeader.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function MyCart({ removeCartCount }) {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const url = "http://127.0.0.1:8080/carts";

    axios({
      method: "post",
      url: url,
      // data: { items: cartItems },
    })
      .then((res) => setCartList(res.data))
      .catch((error) => console.log(error));
  }, []);

  const calcul = () => {
    return cartList.reduce(
      (total, item) =>
        total + parseInt(item.price.replace(/,/g, ""), 10) * item.qty,
      0
    );
  };

  const handleClick = () => {
    alert("주문이 완료되었습니다!");
  };

  //TODO 장바구니 삭제버튼기능 만들기 (정보는 삭제안되서 계속 남아있음)
  const handleDelete = (cid, qty) => {
    alert("해당 상품을 삭제하시겠습니까?");
    const removeIndex = cartList.findIndex((item) => item.cid === cid);
    const updateCartList = cartList.filter((item, i) => i !== removeIndex); //! "!==" 사용해서 삭제할 아이템 제외하고 나머지 반환
    //                                     (item,i)의 i는 index정보임
    setCartList(updateCartList);
    removeCartCount(qty);
  };

  return (
    <div className="content cart_form">
      <SeulkiHeader title={"장바구니"} />
      <div>
        <p className="delivery_header_font">
          지금 주문하시고 배스킨라빈스와 달콤한 시간을 즐겨보세요
          <span className="exclamation_mark">!</span>
        </p>
      </div>
      <div className="login_line"></div>

      <table className="cart_table">
        <thead>
          <tr>
            <th>제품 정보</th>
            <th>제품명</th>
            <th>수량</th>
            <th>가격( 개당 )</th>
            <th>구분</th>
            <th>삭제하기</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((item) => (
            <tr>
              <td>
                <img
                  src={`http://localhost:3000${item.image}`}
                  style={{ width: "150px" }}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
              <td>{item.size}</td>
              <td>
                <button
                  className="cart_delete_btn"
                  type="button"
                  onClick={() => handleDelete(item.cid, item.qty)}
                >
                  <FontAwesomeIcon icon={faX} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart_table2_div">
        <table className="cart_table2">
          <tr>
            <th className="cart_table2_th1">총 결제금액</th>
            <th>
              <span className="cart_table2_span">
                {calcul().toLocaleString()}원
              </span>
            </th>
          </tr>
        </table>
      </div>

      <p className="delivery_form_bottom_p">
        ※ 아이스크림은 싱글사이즈만 주문 가능합니다
      </p>

      <button className="cart_button" type="submit" onClick={handleClick}>
        주문하기
      </button>
    </div>
  );
}
