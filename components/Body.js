import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resObj from "../utils/mock_data";
const Body = () => {
    const [listOfRes,setListofRes]=useState(resObj);
     useEffect(()=>{
      fetchSwiggy();
     },[]);
    
    const fetchSwiggy = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json.data);
      
        setListofRes(json.data.cards[2].data.data.cards);
      
    };
   return (
    <div className="body">
    <div className="filter">
        <button className="filter-btn button1"
        onClick={()=>{
            filteredList=listOfRes.filter((val)=> val.data.avgRating>4);
            setListofRes(filteredList);
         }}
         >Top Rated Restaurants</button>
    </div>
      <div className="res-container">
        {listOfRes.map((i) => 
          <RestaurantCard key={i.data.id} resData={i} />
        )}
      </div>
    </div>
  );
};
export default Body;
