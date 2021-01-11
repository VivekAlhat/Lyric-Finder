import React, { Component } from "react";
import Loading from "../layout/Loading";
import Song from "./Song";
import { CardColumns } from "react-bootstrap";
import { Consumer } from "../../context";

class Tracks extends Component {
  render() {
    return (
      <div className="tracklist">
        <Consumer>
          {(value) => {
            const { track_list, heading, loading } = value;
            return loading ? (
              <div className="my-3">
                <Loading />
              </div>
            ) : (
              <div className="trackContainer">
                <h3 className="text-center my-3">{heading}</h3>
                <CardColumns>
                  {track_list.map((t, index) =>
                    index < 10 ? (
                      <Song name={t.name} artist={t.artist.name} />
                    ) : (
                      ""
                    )
                  )}
                </CardColumns>
              </div>
            );
          }}
        </Consumer>
      </div>
    );
  }
}
export default Tracks;
