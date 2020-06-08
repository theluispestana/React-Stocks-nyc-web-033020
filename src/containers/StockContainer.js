import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  renderStocks = () => {
    const stocks = this.props.stocks;
    return stocks.map((stock) => (
      <Stock buyStock={this.props.buyStock} key={stock.id} {...stock} />
    ));
    // console.log("stocks: ", stocks);
  };

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
      </div>
    );
  }
}

export default StockContainer;
