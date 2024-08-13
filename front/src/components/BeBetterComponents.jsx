import { Link } from "react-router-dom";

export function BeBetterContent() {
  return (
    <div className="betterContent">
      <BeBetterImage/>
    </div>
);
}
function BeBetterImage() {
  const betterList = [
    {
      img:"/images/main/bebetter_pinkfarm.png",
      title:"핑크팜 캠페인",
      desc:"지역 농가 상생프로젝트",
      color:"rgb(148,114,68)",
      path:"/story/bebetter"
    },
    {
      img:"/images/main/bebetter_pinkdream.png",
      title:"핑크드림 캠페인",
      desc:"청소년 자립 지원 프로젝트",
      color:"rgb(253,86,90)",
      path:"/story/bebetter"
    },
    {
      img:"/images/main/bebetter_pinklink.png",
      title:"핑크링크 캠페인",
      desc:"중소 기업 콜라보 프로젝트",
      color:"rgb(0,160,0)",
      path:"/story/bebetter"
    },
  ]
  return (
  <>
    <ul className="itemList">
      {betterList.map((box)=>(
      <li className="item">
        <Link to={box.path}>
              <img src={box.img} 
                    className="betterImage" alt="" />
              <div className="betterTexts">
                <p className="betterTitle" style={{color:box.color}}>{box.title}</p>
                <p className="betterDesc">{box.desc}</p>
              </div>
            </Link>
      </li>
      ))}
    </ul>
  </>
);
}