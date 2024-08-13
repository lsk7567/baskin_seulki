import { useRef,useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function BenefitCarousel() {
  const slideRef = useRef(null)
  const [benefit, setBenefit] = useState([])

  useEffect(()=>{
    axios({
      method:'get',
      url:"http://127.0.0.1:8080/"
    })
      .then(response => setBenefit(response.data.filter(item=>item.category === '제휴혜택')))
      .catch(error=>console.log(error))
  },[])
  
  const benefitContents = [];
  for(let i =0; i<benefit.length; i+=5){
    benefitContents.push(benefit.slice(i,i+5))
  }
  function useInterval(callback, delay) {
    const savedCallback = useRef();
    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    useEffect(() => {
        function tick() {
        savedCallback.current();
        }
        if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
        }
    }, [delay]);
    }
    useInterval(()=>{
        slideRef.current.style.transition = "all 1000ms ease-in"
        slideRef.current.style.transform = "translateX(-980px)"
    },4000)
    useInterval(()=>{
        slideRef.current.style.transition = "all 1000ms ease-in"
        slideRef.current.style.transform = "translateX(0px)"
    },8000)
  return (
    <ul className="benefitList" ref={slideRef}>
      {benefitContents.map((items)=>(
        <>
          {items.map((item)=>(
            <li>
              <Link to={`/play/event/detail/${item.id}`}>
                <img src={item.img} alt="" />
              </Link>
            </li>
          ))}
        </>
      ))}
    </ul>
);
}