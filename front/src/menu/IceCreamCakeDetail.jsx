import React from "react";
import { MenuViewTop } from "../components/MenuViewTop";
import { MenuviewImage } from "../components/MenuviewImage";
import { RelatedProduct } from "../components/RelatedProduct";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function IceCreamCakeDetail({ addCartCount }) {
  const { id } = useParams();

  const { state } = useLocation();
  const { list } = state;
  const [icecreamcakedetail, setIceCreamCakeDetail] = useState({});
  //const [icecreamcakeingredients, setIceCreamCakeIngredients] = useState([]);
  // const [icecreamcakesizecheck, setIceCreamCakeSizeCheck] = useState([]);
  // const [icecreamcakerelatedproduct, setIceCreamCakeRelatedProduct] = useState(
  //   []
  // );

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8080/menu/icecreamcakedetail/${id}`)
      .then((res) => setIceCreamCakeDetail(res.data));
    // axios
    //   .get(`http://127.0.0.1:8080/menu/icecreamcakeingredients/${id}`)
    //   .then((res) => {
    //     setIceCreamCakeIngredients(res.data);
    //   });
    // axios
    //   .get(`http://127.0.0.1:8080/menu/icecreamcakesizecheck/${id}`)
    //   .then((res) => {
    //     setIceCreamCakeSizeCheck(res.data);
    //   });
    // axios
    //   .get(`http://127.0.0.1:8080/menu/icecreamcakerelatedproduct/${id}`)
    //   .then((res) => {
    //     setIceCreamCakeRelatedProduct(res.data);
    //   })
    //   .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="content">
      <MenuViewTop
        icecreamimage={icecreamcakedetail.icecreamimage}
        bgcolor={icecreamcakedetail.bgcolor}
        line={icecreamcakedetail.line}
        engname={icecreamcakedetail.engname}
        korname1={icecreamcakedetail.korname1}
        korname2={icecreamcakedetail.korname2}
        dep={icecreamcakedetail.dep}
        price={icecreamcakedetail.price}
        //ingredients={icecreamcakeingredients}
        //sizecheck={icecreamcakesizecheck}
        btnleft={icecreamcakedetail.btnleft}
        btnright={icecreamcakedetail.btnright}
        id={id}
        addCartCount={addCartCount}
        list={list}
      />
      <h3 className="menuview_cake_title">어떤 맛이 들어있을까?</h3>
      <MenuviewImage menuviewimage={icecreamcakedetail.menuviewimage} />
      <RelatedProduct id={id} type={"cake"} list={list} />
    </div>
  );
}
