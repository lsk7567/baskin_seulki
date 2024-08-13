import React from "react";
import '../css/menulist.css'
import { NavLink, Link  } from "react-router-dom";


export function NavbarStory() {
  const menu = [
    { path: "/story/story", name: "브랜드 스토리" },
    { path: "/story/history", name: "이달의 맛 히스토리" },
    { path: "/story/bebetter", name: "Be Better" },
  ];



  return (
    <div className="page_navbars_div">
   <ul className="page_navbars">
        {menu.map((item) => (
      <li className="page_navbar">
        <NavLink to={item.path} className={({isActive})=>isActive
        ? "page_navbar_text_active" :"page_navbar_text"} >
          {item.name}
          </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}


// export function NavbarCscenter() {
//   const menu = [
//     { path: "/cscenter", name: "고객센터" },
//     { path: "/cscenter/ccm", name: "소비자중심경영(CCM)" },
//     { path: "/cscenter/praise", name: "칭찬점포" },
//     { path: "/cscenter/notice", name: "공지사항" },
//   ];

//   return (
//   <div className="page_navbars_div">
//    <ul className="page_navbars">
//         {menu.map((item) => (
//       <li className="page_navbar praise_narbar">
//       <NavLink to={item.path} className={({isActive})=>isActive
//         ? "page_navbar_text_active" :"page_navbar_text"} >
//           {item.name}
//           </NavLink>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
