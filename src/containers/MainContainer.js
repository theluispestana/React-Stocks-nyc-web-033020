import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     stocks: [],
  //     portfolio: [],
  //   };
  // }
  //

  state = {
    stocks: [],
    allStocks: [],
    portfolio: [],
  };

  componentDidMount() {
    this.fetchStocks();
  }

  fetchStocks = () => {
    fetch("http://localhost:3000/stocks")
      .then((res) => res.json())
      .then((json) =>
        this.setState({
          stocks: json,
          allStocks: json,
        })
      );
  };

  buyStock = (event) => {
    const target = event.target;
    const index = this.state.stocks.findIndex(
      (stock) => `${stock.id}` === target.id
    );
    const stock = this.state.stocks[index];
    this.setState(
      { portfolio: [...this.state.portfolio, stock] },
      console.log("portfolio: ", this.state.portfolio)
    );
  };

  removeStock = (stock) => {
    const newPortfolio = this.state.portfolio.filter((s) => s !== stock);
    this.setState({ portfolio: newPortfolio });
  };

  sortStocks = (event) => {
    const target = event.target;
    let stocks = [];
    if (target.value === "Alphabetically") {
      stocks = this.state.stocks.sort((a, b) => (a.name < b.name ? -1 : 1));
    } else if (target.value === "Price") {
      stocks = this.state.stocks.sort((a, b) => a.price - b.price);
    }
    console.log("sorted stocks: ", stocks);

    this.setState({ stocks: stocks });
  };

  filterStocks = (event) => {
    const target = event.target;
    const stocks = this.state.allStocks.filter((s) => s.type === target.value);
    this.setState({ stocks: stocks });
  };

  render() {
    return (
      <div>
        <SearchBar
          sortStocks={this.sortStocks}
          filterStocks={this.filterStocks}
        />
        <div className="row">
          <div className="col-8">
            <StockContainer
              buyStock={this.buyStock}
              stocks={this.state.stocks}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              removeStock={this.removeStock}
              portfolio={this.state.portfolio}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
