import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Song = (props) => {
  return (
    <Card bg="light" border="light">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.artist}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link to={`lyrics/track/${props.name}`}>
          <Button variant="dark" size="sm">
            View lyrics
          </Button>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default Song;
