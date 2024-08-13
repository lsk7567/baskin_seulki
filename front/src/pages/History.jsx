import React from "react";
import  '../css/pages.css'
import { HistoryDefaultForm } from "../components/HistoryCompo.jsx";
import { NavbarStory } from "../components/Navbar.jsx";

export default function History(){


    return(
    <div className="content">
        <NavbarStory />
    <div className="page_top">
    <h1 className="title">이달의 맛 히스토리</h1>
    <p className="title_sub">일년 열 두달 새로운 맛, 배스킨라빈스 이달의 맛 히스토리 </p>
            </div>

<section>
   <HistoryDefaultForm />  

</section>
        </div>
    )
}

