import React from "react";
import "./ShowView.css";
import Slide from "../Slider/Slide";
import Review from "../review/Review";

const ShowView = props => {
  const updateData =  props.item.reviews.map((item,index) => item = {...item, ...{_index: index}})
  return (
    <div className="View">
      <div key={props.item.id} className="View__body">
      
        <div className="view__body__title">
          <h1>{props.item.name}</h1>
        </div>

        <div className="view__body__night__control ">
          <span>For</span>
          <input
            type="number"
            min={1}
            onChange={props.changed}
            value={props.night}
          />
          <span>{props.night > 1 ? 'Nights': 'Night'}</span>
        </div>
          <div className="view__body__slider">
            <Slide photos={props.item.pictures} />
          </div>
 
          <div className="card__info">
            <Review  reviews={updateData}/>
          </div>
  
       </div>
     </div>
  );
};

export default ShowView;
