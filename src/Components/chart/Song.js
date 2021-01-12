import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import track from "@iconify-icons/ic/sharp-audiotrack";
import album from "@iconify-icons/ic/round-album";
import artist from "@iconify-icons/ic/person";

const Song = (props) => {
  return (
    <Card bg="light" border="light">
      <Card.Body>
        <div className="track">
          <Icon icon={track} className="icon" />
          <Card.Title>
            <div className="trackDetail">{props.name}</div>
          </Card.Title>
        </div>

        <div className="track">
          <Icon icon={album} className="icon" />
          <div className="trackDetail">
            <Card.Text>{props.album}</Card.Text>
          </div>
        </div>

        <div className="track">
          <Icon icon={artist} className="icon" />
          <div className="trackDetail">
            <Card.Text>{props.artist}</Card.Text>
          </div>
        </div>
      </Card.Body>
      <Card.Footer>
        <Link to={`lyrics/${props.artist}/${props.name}`}>
          <Button variant="outline-secondary" size="sm" className="w-100">
            View lyrics
          </Button>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default Song;
