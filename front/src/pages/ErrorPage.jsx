import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <img src="https://img.freepik.com/premium-vector/404-errorpage-found-background-different-people-with-smart-gadgets-vector-illustration_985641-224.jpg"></img>
      <button type="button" onClick={handleClick}>
        메인페이지로
      </button>
    </div>
  );
}
