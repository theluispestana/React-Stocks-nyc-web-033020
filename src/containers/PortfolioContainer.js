import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  render() {
    console.log("props: ", this.props.portfolio);
    const stocks = this.props.portfolio;
    return (
      <div>
        <h2>My Portfolio</h2>
        {stocks.map((stock) => (
          <Stock
            removeStock={this.props.removeStock}
            buyStock={this.props.buyStock}
            key={stock.id}
            stock={stock}
            {...stock}
          />
        ))}
      </div>
    );
  }
}

export default PortfolioContainer;
