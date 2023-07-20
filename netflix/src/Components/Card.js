import React from "react";
import cardStyle from "./Card.module.css";

function Card(props) {
  return (
    <div className={cardStyle.Card}>
      <div className={cardStyle.cardStyle}>
        <div className={cardStyle.imgDiv}>
          <img
            className={cardStyle.cover}
            src={props.img}
            alt="No Series Available"
          />
        </div>
        <div className={cardStyle.div2}>
          <h2 className={cardStyle.h2}>Netflix Original Series</h2>
          <p className={cardStyle.p}>{props.title}</p>
          <hr className={cardStyle.hr}></hr>
          <button className={cardStyle.btn}>Watch Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
