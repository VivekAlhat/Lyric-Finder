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
            const { track_list, loading } = value;
            return loading ? (
              <div className="my-3">
                <Loading />
              </div>
            ) : track_list.length > 0 ? (
              <div className="trackContainer">
                <CardColumns>
                  {track_list.map((t, index) =>
                    index < 10 ? (
                      <Song
                        key={t.track.track_id}
                        name={t.track.track_name}
                        album={t.track.album_name}
                        artist={t.track.artist_name}
                        id={t.track.track_id}
                      />
                    ) : (
                      ""
                    )
                  )}
                </CardColumns>
              </div>
            ) : (
              <div className="trackContainer">
                <p>
                  Nothing returned from API, please refresh the page and try
                  again!
                </p>
              </div>
            );
          }}
        </Consumer>
      </div>
    );
  }
}
export default Tracks;
