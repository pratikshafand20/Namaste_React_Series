import RestaurantCard from "./RestoCards";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //local state variable-
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.card.card.info.avgRating > 4.4
            );
            setListOfRestaurants(filteredList);
            // console.log(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="resto-container">
        {/* //updating the UI based on state variable */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
