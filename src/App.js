import React, { Component } from "react";
import "./App.css";
import CardView from "./forms/CardView";
import ShowView from "./forms/ShowView";
import { GetData, GetDataById } from "./ApiService/GetData";

class App extends Component {
  state = {
    data: [
      {
        id: 37681,
        name: "Hilton Sharm",
        totalReviews: 1678,
        totalScore: 8.5,
        pricePerNight: 180,
        photo: "http://picsum.photos/100/100/?image=109"
      },
      {
        id: 18671,
        name: "Sheraton Sharm",
        totalReviews: 78,
        totalScore: 9,
        pricePerNight: 80,
        photo: "http://picsum.photos/100/100/?image=110"
      },
      {
        id: 27861,
        name: "Grand Hayatt Sharm",
        totalReviews: 678,
        totalScore: 7,
        pricePerNight: 300,
        photo: "http://picsum.photos/100/100/?image=112"
      }
    ],
    itemToView: {},
    night: 1,
    dataSource: []
  };

  componentDidMount() {
    GetData().then(data => {
      this.setState(() => {
        return { dataSource: data };
      });
    });
  }

  handelClick = id => {
    GetDataById(id).then(item => {
      this.setState({ itemToView: item[0] });
    });
  };

  handelNight = e => {
    this.setState({ night: e.target.value });
  };

  render() {
    const { itemToView } = this.state;
    return (
      <div className="App">
        <CardView
          data={this.state.data}
          clicked={this.handelClick}
          night={this.state.night}
        />
        {Object.keys(itemToView).length > 0 && (
          <ShowView
            item={this.state.itemToView}
            changed={this.handelNight}
            night={this.state.night}
          />
        )}
      </div>
    );
  }
}

export default App;
