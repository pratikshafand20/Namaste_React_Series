import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// displaying each resto present in resList Object
const RestaurantCard = (resData) => {
  // destructuring the object
  const { name, cloudinaryImageId, avgRating, cuisines, locality } =
    resData.resData.card.card.info;
  const { slaString } = resData.resData.card.card.info.sla;
  // console.log(resData.resData.card.card.info);
  return (
    <div className="Res-Container">
      <div className="Res-card">
        <img className="card-img" src={CDN_URL + cloudinaryImageId} />
        <div className="res-details">
          <h3 id="name">{name}</h3>
          <h4 id="rating">
            <FontAwesomeIcon icon={faStar} />
            {avgRating} <span id="time">&nbsp;&nbsp;&bull;{slaString}</span>
          </h4>
          <p id="cusine">{cuisines.join(",")}</p>
          <p id="Address">{locality}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
