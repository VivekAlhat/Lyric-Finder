import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <div>
      <Spinner animation="border" role="status" size="lg">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
