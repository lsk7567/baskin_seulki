import Menu from "./Menu.jsx";
import "../css/menulist.css"; 

export default function MenuTitle(props) {
  const mainMenu = [
    { path: "/menu", name: "Menu" },
    { path: "/play", name: "BR Play" },
    { path: "/story/bebetter", name: "BR Story" },
    { path: "/store", name: "Delivery/Store" },
  ]

  return (
    <div>
      <ul className="menuTitles">
        {mainMenu.map((menu) => (
          <li className="menuTitle">
            <Menu path={menu.path} name={menu.name} />
          </li>
        ))}
      </ul>
{/*       <div className="dropDownMenu">
{dropDown.map(menu =>(
  <Menu path={menu.path} name={menu.name}/>
))}
      </div> */}
    </div>
  );
}
