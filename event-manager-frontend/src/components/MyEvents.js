import { Container, Table } from "react-bootstrap";
import data from "./events_data";
import events from "../App";

const MyEvents = ({ database }) => {
  const myEvents = database.filter((eve) => eve.registered === true);
  return (
    <Container>
      <h1 className="underline" style={{textAlign: "center",}}>Events you have registered for</h1>
      <Table striped bordered hover >
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
          {myEvents.map((eve) => (
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
      </Container>
  );
};

export default MyEvents;
