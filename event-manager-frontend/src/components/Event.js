import { Button, Card } from "react-bootstrap";
import { RiDeleteBin2Fill } from "react-icons/ri";

const Event = ({ eve, onDelete, onToggle }) => {
  return (
    <Card
      className={`event ${eve.registered ? "reminder" : ""}`}
      style={{ width: "18rem" }}
    >
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>{eve.text}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{eve.date}</Card.Subtitle>
        <Card.Text>
          Organised by <h4 style={{ fontWeight: "bold" }}>{eve.organiser}</h4>
        </Card.Text>

        <Card.Text>
          <h4>Location: {eve.location}</h4>
        </Card.Text>
        <Card.Text>
          <h6>Description: {eve.description}</h6>
        </Card.Text>
        <Card.Text>
          <p>{eve.registered}</p>
        </Card.Text>

        {eve.registered ? (
          <p
            onDoubleClick={() => onToggle(eve._id)}
            style={{ color: "green", fontSize: "12px" }}
          >
            You have successfully registered for this event
          </p>
        ) : (
          <p
            onDoubleClick={() => onToggle(eve._id)}
            style={{ color: "red", fontSize: "12px" }}
          >
            Double click to register
          </p>
        )}
      </Card.Body>
      <RiDeleteBin2Fill
        className="delete-btn"
        onClick={() => onDelete(eve._id)}
      />
    </Card>
  );
};

export default Event;
