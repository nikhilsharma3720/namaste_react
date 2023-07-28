import { CDN_URL } from "../utils/constants";
import Body from "./Body";
const RestaurantCard=({resData})=>{
  return(
    <div className="res-card"  >
      <img 
      className="res-logo"
      src={CDN_URL+resData.data.cloudinaryImageId}
      />
      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines.join(', ')}</h4>
      <h4>{resData.data.avgRating} stars</h4>
      <h4>₹ {resData.data.costForTwo/100} rupees</h4>
       <h4>{resData.data.deliveryTime} minutes</h4>
    </div>
  )
}
export default RestaurantCard;
