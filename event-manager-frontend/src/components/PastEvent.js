import { Table } from "react-bootstrap";
import Event from "./Event";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + "/" + mm + "/" + dd;

const PastEvent = ({ database }) => {
  const pastEvents = database.filter((eve) => {
    const x = new Date(eve.date);
    const y = new Date(today);
    return x < y;
  });

  return (
    <div className="container">
        <h1 style={{textAlign: "center",}}>Past Events:</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Event Name</th>
            <th>Organiser</th>
            <th>Date</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          {pastEvents.map((eve) => (
            <tr key={eve._id}>
              <td>{eve._id}</td>
              <td>{eve.text}</td>
              <td>{eve.organiser}</td>
              <td>{eve.date}</td>
              <td>{eve.location}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PastEvent;
