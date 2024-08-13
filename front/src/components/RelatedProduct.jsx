import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

/**
 * RelatedProduct
 */
export function RelatedProduct({ id, type, list }) {
  const navigate = useNavigate();

  const [relatedProduct, setRelatedProduct] = useState([]);
  //const [preRelatedProduct, setPreRelatedProduct] = useState([]);

  useEffect(() => {
    axios({
      method: "post",
      url: `http://127.0.0.1:8080/option/relatedproduct`,
      data: {
        id: id,
        type: type,
      },
    })
      .then((res) => {
        //console.log(res.data);
        setRelatedProduct(res.data);
      })
      .catch((error) => console.log(error));
    // axios
    //   .get(`http://127.0.0.1:8080/menu/prepackrelatedproduct/${id}`)
    //   .then((res) => {
    //     setPreRelatedProduct(res.data);
    //   })
    //   .catch((error) => console.log(error));
  }, [id]);

  // console.log(relatedproduct);

  const handleDetail = (linkid, linkname) => {
    //alert(linkid + linkname);
    navigate(`/menu/${linkname}detail/${linkid}`, {
      state: { list: list },
    });
  };

  return (
    <div className="relatedproduct">
      {relatedProduct.length !== 0 && (
        <h3 className="relatedproduct_title">관련상품</h3>
      )}
      <div className="relatedproducts">
        {relatedProduct.map((product, index) => (
          <div className="relatedproduct_box" key={index}>
            {/*       <Link to={`/menu/${product.linkname}detail/${`${product.linkid}`}`}> */}
            <div onClick={() => handleDetail(product.linkid, product.linkname)}>
              <img
                className="relatedproduct_image"
                src={product.relatedimage}
              ></img>
              <span className="relatedproduct_name">{product.relatedname}</span>
              {/*      </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
