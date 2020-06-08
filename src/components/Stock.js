import React from "react";

const Stock = (props) => (
  <div>
    <div className="card">
      <div className="card-body">
        <h5
          onClick={(event) =>
            props.buyStock
              ? props.buyStock(event)
              : props.removeStock(props.stock)
          }
          id={props.id}
          className="card-title"
        >
          {props.name}
        </h5>
        <p className="card-text">{`${props.ticker}: ${props.price}`}</p>
      </div>
    </div>
  </div>
);

export default Stock;
