import Restaurant from "./Restaurant.jsx";
import { restaurants } from "../data/data.js";

function RestaurantsContainer() {
  return (
    <div className="restaurantContainer">{
      restaurants.map(restaurant =>
        <Restaurant
          restaurant={restaurant} />)
    }</div>
  );
}

export default RestaurantsContainer;
