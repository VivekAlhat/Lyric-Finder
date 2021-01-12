import React, { Component } from "react";
import Loading from "../layout/Loading";
import Path from "../layout/Path";
import Axios from "axios";

export default class Lyrics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { artist, track } = this.props.match.params;
    Axios.get(`https://api.lyrics.ovh/v1/${artist}/${track}`)
      .then((res) => {
        this.setState({ lyrics: res.data, loading: false });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="lyrics">
        <Path
          artist={this.props.match.params.artist}
          track={this.props.match.params.track}
        />
        <h3 style={{ fontWeight: "bold", textTransform: "capitalize" }}>
          {this.props.match.params.track}
        </h3>
        <p>{this.props.match.params.artist}</p>
        {this.state.loading ? (
          <Loading />
        ) : this.state.lyrics.lyrics === "" ? (
          <p>Lyrics not available.</p>
        ) : (
          <p>{this.state.lyrics.lyrics}</p>
        )}
      </div>
    );
  }
}
