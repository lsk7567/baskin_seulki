import { useEffect, useState } from "react";

/**
 *  MenuList
 */

export default function MenuListHr({
  name,
  image,
  hash,
  label,
  bgcolor,
  hashcolor,
}) {
  //console.log(image);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  /* namecolor는 bgcolor 사용함  */
  const bgstyle = {
    backgroundColor: isHovered ? `${bgcolor}` : "white",
  };

  const hashstyle = {
    color: isHovered ? `${hashcolor}` : "white",
  };

  const namestyle = {
    color: isHovered ? `${bgcolor}` : "#999",
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="menulisthr_item"
    >
      <div className="menulisthr_item_boxbg">
        <div className="menulisthr_item_box" style={bgstyle}>
          <img className="menulisthr_item_image" src={image} />
          <p className="menulisthr_item_hash" style={hashstyle}>
            {hash}
          </p>
        </div>
      </div>
      <p className="menulisthr_item_name" style={namestyle}>
        {name}
      </p>
      {label && <img className="menulisthr_item_label" src={label}></img>}
    </div>
  );
}
