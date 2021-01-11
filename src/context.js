import React, { Component } from "react";
import Axios from "axios";
import env from "react-dotenv";

const Context = React.createContext();

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      track_list: [],
      heading: "Top Trending",
      loading: true,
    };
  }

  componentDidMount() {
    Axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${env.LASTFM_API_KEY}&format=json`
    )
      .then((res) => {
        this.setState({ track_list: res.data.tracks.track, loading: false });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
