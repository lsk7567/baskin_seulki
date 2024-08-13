import React from "react";
import { Link } from "react-router-dom";

export function OrderMenubar1() {
  return (
    <div>
      <nav>
        <ul className="menu_s">
          <li className="menu_s_detail">
            <Link className="menu_s_detail_link" to="/store/flavor">
              100 flavor
            </Link>
          </li>
          <li className="menu_s_detail">
            <Link className="menu_s_detail_link" to="/store/flow">
              flow
            </Link>
          </li>
          <li className="menu_s_detail menu_s_detail_color">
            <Link className="menu_s_detail_link_point" to="/store/delivery">
              배달주문
            </Link>
          </li>
          <li className="menu_s_detail">
            <Link className="menu_s_detail_link" to="/store/catering">
              단체주문
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export function OrderMenubar2() {
  return (
    <div>
      <nav>
        <ul className="menu_s">
          <li className="menu_s_detail">
            <Link className="menu_s_detail_link" to="/store/flavor">
              100 flavor
            </Link>
          </li>
          <li className="menu_s_detail">
            <Link className="menu_s_detail_link" to="/store/flow">
              flow
            </Link>
          </li>
          <li className="menu_s_detail">
            <Link className="menu_s_detail_link" to="/store/delivery">
              배달주문
            </Link>
          </li>
          <li className="menu_s_detail menu_s_detail_color">
            <Link className="menu_s_detail_link_point" to="/store/catering">
              단체주문
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export function OrderMenubar3() {
  return (
    <div>
      <nav>
        <ul className="menu_s">
          <li className="menu_s_detail menu_s_detail_color menu_s_2">
            <Link className="menu_s_detail_link_point" to="/store/newstore">
              신규 직영점 입점제의
            </Link>
          </li>
          <li className="menu_s_detail menu_s_2">
            <Link className="menu_s_detail_link" to="/store/openstore">
              점포개설문의
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export function OrderMenubar4() {
  return (
    <div>
      <nav>
        <ul className="menu_s">
          <li className="menu_s_detail menu_s_2">
            <Link className="menu_s_detail_link" to="/store/newstore">
              신규 직영점 입점제의
            </Link>
          </li>
          <li className="menu_s_detail menu_s_detail_color menu_s_2">
            <Link className="menu_s_detail_link_point" to="/store/openstore">
              점포개설문의
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
