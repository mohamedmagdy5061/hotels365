import React from "react";
import "./CardView.css";

function rate(score){
    if(score <= 7 ){
        return `${score} good`
    }else if(score > 7 && score < 9  ){
        return `${score} Very good`
    }else{
        return `${score} Excellent`
    }
}

const GridView = props => {
  return (
    <div className="cardView">
      {props.data.map(item => (
        <div key={item.id} className="card" onClick={()=>props.clicked(item.id)}>
          <div className="card__title">
            <p >{item.name}</p>
          </div>
          <div className="card__body">
            <div className="card__image">
              <img
                style={{width:"100%"}}
                src={item.photo}
                alt="Img-hotel"
              />
            </div>
            <div className="card__info">
              <div className="card__info__price" >{`$${item.pricePerNight * props.night} for ${props.night}  ${props.night > 1 ? 'Nights': 'Night'} `}</div>
              <div className="card__info__rate" >{rate(item.totalScore)}</div>
              <div className="card__info__review" >{`${item.totalReviews} reviews`}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridView;
