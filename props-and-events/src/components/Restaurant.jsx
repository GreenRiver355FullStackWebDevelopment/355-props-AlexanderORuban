// Component to display an individual restaurant
function Restaurant(props) {

  return (
    <div className="restaurant">
      {/* Format of each restaurant entry */}
      <img src={props.restaurant.image} alt={props.name} />
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>⭐ {props.restaurant.rating}</li>
      </ul>
    </div>
  );
}

export default Restaurant;
