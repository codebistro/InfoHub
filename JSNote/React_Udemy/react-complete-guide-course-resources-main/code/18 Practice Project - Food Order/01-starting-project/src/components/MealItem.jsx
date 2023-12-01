import { currencyFormatter } from '../util/formatting.js';
import Button from "./UI/Button";
import {useContext} from "react";
import CartContext from "../store/CartContext";

export default function MealItem({ meal }){

    const cartCtx = useContext(CartContext);

    // function handleAddMealToCart(){
    //     cartCtx.addItem(meal);
    // }

    return  (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    {/*anonymous function only be called after click action.to trigger dispatch action*/}
                    <Button onClick={()=> cartCtx.addItem(meal)}>Add to Cart</Button>
                </p>
            </article>
        </li>
    );
}