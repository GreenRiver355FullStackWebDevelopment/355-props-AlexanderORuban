import Restaurant from "./Restaurant.jsx";
import { restaurants } from "../data/data.js";

// Restaurants component for displaying all restaurants
function RestaurantsContainer() {
  return (
    <div className="restaurantContainer">{
      // Renders a restaurant component for each restaurant in the array passed in
      restaurants.map(restaurant =>
        <Restaurant
          restaurant={restaurant} />)
    }</div>
  );
}

export default RestaurantsContainer;
