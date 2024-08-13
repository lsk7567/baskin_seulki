import { Link } from "react-router-dom";
import "../css/menulist.css"; 

export default function Menu({path, name}){
    
    return(
<Link to={path} className="nav">
    <p className="nav_text">{name}</p></Link>

    )
}