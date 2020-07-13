import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "./cards";

class HomePage extends Component {
  state = {
    place: [],
    data: undefined,
  };

  renewData = (dataId) => {
    console.log("id:", dataId);
  };

  componentDidMount() {
    axios.get(`https://ecosystem-backend.herokuapp.com`).then((res) => {
      this.setState({ place: res.data });
      console.log(this.state.place);
    });
  }

  render() {
    return (
      <div className="grid justify-center sm:grid-cols-2 md:grid-cols-4">
        {this.state.place.map((placeData) => (
          <div key={placeData.id} className="py-4 px-4">
            <Link
              to={{
                pathname: `/${placeData.id}`,
                state: {
                  descriptionData: this.state.place[placeData.id - 1],
                },
              }}
            >
              <Card {...placeData} />
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default HomePage;
