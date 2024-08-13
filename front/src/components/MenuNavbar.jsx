import React from "react";
import { Link } from "react-router-dom";

export function MenuNavbar1() {
  return (
    <div>
      <nav>
        <ul className="menunavbar">
          <li className="menunavbar_item menupinkbox">
            <Link to="/menu/monthflavor" style={{ color: "white" }}>
              이달의 맛
            </Link>
          </li>
          <li className="menunavbar_item">
            <Link to="/menu/icecream">아이스크림</Link>
          </li>
          <li className="menunavbar_item">
            <Link to="/menu/prepack">프리팩</Link>
          </li>
          <li className="menunavbar_item">
            <Link to="/menu/icecreamcake">아이스크림케이크</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export function MenuNavbar2() {
  return (
    <div>
      <nav>
        <ul className="menunavbar">
          <li className="menunavbar_item">
            <Link to="/menu/monthflavor">이달의 맛</Link>
          </li>
          <li className="menunavbar_item menupinkbox">
            <Link to="/menu/icecream" style={{ color: "white" }}>
              아이스크림
            </Link>
          </li>
          <li className="menunavbar_item">
            <Link to="/menu/prepack">프리팩</Link>
          </li>
          <li className="menunavbar_item">
            <Link to="/menu/icecreamcake">아이스크림케이크</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export function MenuNavbar3() {
  return (
    <div>
      <nav>
        <ul className="menunavbar">
          <li className="menunavbar_item">
            <Link to="/menu/monthflavor">이달의 맛</Link>
          </li>
          <li className="menunavbar_item">
            <Link to="/menu/icecream">아이스크림</Link>
          </li>
          <li className="menunavbar_item menupinkbox">
            <Link to="/menu/prepack" style={{ color: "white" }}>
              프리팩
            </Link>
          </li>
          <li className="menunavbar_item">
            <Link to="/menu/icecreamcake">아이스크림케이크</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export function MenuNavbar4() {
  return (
    <div>
      <nav>
        <ul className="menunavbar">
          <li className="menunavbar_item">
            <Link to="/menu/monthflavor">이달의 맛</Link>
          </li>
          <li className="menunavbar_item">
            <Link to="/menu/icecream">아이스크림</Link>
          </li>
          <li className="menunavbar_item">
            <Link to="/menu/prepack">프리팩</Link>
          </li>
          <li className="menunavbar_item menupinkbox">
            <Link to="/menu/icecreamcake" style={{ color: "white" }}>
              아이스크림케이크
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
