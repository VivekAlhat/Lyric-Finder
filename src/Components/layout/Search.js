import { Form, FormControl, Button } from "react-bootstrap";
import { useState } from "react";
const Search = () => {
  const [trackname, setTrackname] = useState("");

  const handleStateChange = (e) => {
    e.preventDefault();
    setTrackname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search">
      <Form inline onSubmit={handleSubmit} className="searchForm">
        <FormControl
          value={trackname}
          onChange={handleStateChange}
          type="text"
          placeholder="Search lyrics"
          size="sm"
          className="mr-sm-2"
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
};

export default Search;
