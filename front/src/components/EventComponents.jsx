export function Box({list,classname}) {
  return (
    <div className="box">
      <div className="imagebox">
      <img className="boximage" src={list.img} alt="" />
      </div>
      <div className="texts">
        <p className={classname}>{list.category}</p>
        <h3 className="boxtitle">{list.info}</h3>
        <p className="boxdate">{list.date}</p>
      </div>
    </div>
);
}

