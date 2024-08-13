import { Link } from "react-router-dom";

export function RecipeBox({recipe}){
    return(
        <Link to={`/play/brrecipe/detail/${recipe.id}`}>
            <div className="recipebox">
                <img className="recipe_small_img" src={recipe.smallimg} alt="" />
                <div className="recipe_text">
                    <p className="recipe_category">{recipe.category}</p>
                    <h2 className="recipe_eng_name">{recipe.engtitle}</h2>
                    <p className="recipe_ko_name">{recipe.kotitle}</p>
                </div>
            </div>
        </Link>
    )
};