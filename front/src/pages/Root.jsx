import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import "../css/pages.css";

export default function Root({ cartCount }) {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  return (
    <div>
      <ScrollToTop />
      <Header cartCount={cartCount} />
      <Outlet />
      <a href="#">
        <FontAwesomeIcon
          className="arrowup"
          icon={faArrowUp}
          bounce
          size="lg"
          style={{ color: "#f986bd" }}
        />
      </a>
      <Footer />
    </div>
  );
}
