import { Form, FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import { Consumer } from "../../context";
import Axios from "axios";
import env from "react-dotenv";

const Search = () => {
  const [trackname, setTrackname] = useState("");

  const handleStateChange = (e) => {
    setTrackname(e.target.value);
  };

  const handleSubmit = (dispatch, e) => {
    e.preventDefault();
    Axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${trackname}&page_size=10&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=${env.API_KEY}`
    )
      .then((res) => {
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list,
        });
        setTrackname("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Consumer>
      {(value) => {
        const { dispatch } = value;
        return (
          <div className="search">
            <Form
              inline
              onSubmit={handleSubmit.bind(this, dispatch)}
              className="searchForm"
            >
              <FormControl
                name="trackname"
                value={trackname}
                onChange={handleStateChange}
                type="text"
                placeholder="Search lyrics"
                size="sm"
                className="mr-sm-2"
                autoComplete="false"
              />
              <Button
                variant="outline-dark"
                size="sm"
                type="submit"
                className="submit-btn"
              >
                Search
              </Button>
            </Form>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Search;
