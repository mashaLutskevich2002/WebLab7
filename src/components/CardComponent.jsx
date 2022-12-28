import React from "react";
import "./CardComponent.css";

function GoodsCard(props) {
  return (
    <div className="cards">
      <div className="first_row">
        <div>
          <img
            src={require("./image/apple-fruit.jpg")}
            alt="apple images"
            height="250px"
            width="250px"
          ></img>
          <h2>{props.first}</h2>
          <h2>Cost: 29 grn</h2>
        </div>
        <div>
          <img
            src={require("./image/peach.png")}
            alt="peach images"
            height="250px"
            width="250px"
          ></img>
          <h2>{props.second}</h2>
          <h2>Cost: 28 grn</h2>
        </div>
        <div>
          <img
            src={require("./image/gtape.webp")}
            alt="grape images"
            height="250px"
            width="250px"
          ></img>
          <h2>{props.third}</h2>
          <h2>Cost: 19 grn</h2>
        </div>
      </div>
      <div className="second_row">
        <div>
          <img
            src={require("./image/orange.jpg")}
            alt="orange images"
            height="250px"
            width="250px"
          ></img>
          <h2>{props.forth}</h2>
          <h2>Cost: 10 grn</h2>
        </div>
        <div>
          <img
            src={require("./image/pineapple.webp")}
            alt="pineapple images"
            height="250px"
            width="250px"
          ></img>
          <h2>{props.fifth}</h2>
          <h2>Cost: 17 grn</h2>
        </div>
        <div>
          <img
            src={require("./image/pear.webp")}
            alt="pear images"
            width="250px"
            height="250px"
          ></img>
          <h2>{props.six}</h2>
          <h2>Cost: 55 grn</h2>
        </div>
      </div>
    </div>
  );
}

export default GoodsCard;
