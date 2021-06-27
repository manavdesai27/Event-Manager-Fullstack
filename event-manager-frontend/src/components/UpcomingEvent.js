import { Table } from "react-bootstrap";
import Event from "./Event";
import Events from "./Events";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + "/" + mm + "/" + dd;

const UpcomingEvent = ({ database, onDelete, onToggle }) => {
  const upcomingEvents = database.filter((eve) => {
    const x = new Date(eve.date);
    const y = new Date(today);
    return x >= y;
  });

  console.log(upcomingEvents);

  return (
    <div className="container">
        <h1 style={{textAlign: "center",}}>Upcoming Events:</h1>
        
      <Events events={upcomingEvents}
                onDelete={onDelete}
                onToggle={onToggle} />
    </div>
  );
};

export default UpcomingEvent;
