import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
const Path = (props) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item active>
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{props.artist}</Breadcrumb.Item>
      <Breadcrumb.Item active>{props.track}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Path;
