import Header from "./components/Header";
import Events from "./components/Events";
import { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route,BrowserRouter as Router, Switch } from "react-router-dom";
import AddEvent from "./components/AddEvent";
import MyEvents from "./components/MyEvents";
import PastEvent from "./components/PastEvent";
import UpcomingEvent from "./components/UpcomingEvent";
import data from "./components/events_data";
import { getEvents } from "./api/Api";
import axios from "axios";

function App() {
  const [showAddEvent, setShowAddEvent] = useState(false);


  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/event').then(res => {
      setEvents(res.data.data)
  })    
  }, [])

  const addEvent = (eve) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newEvent = {...eve };
    setEvents([...events, newEvent]);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((eve) => eve._id !== id));
  };

  const toggleRegistered = (id) => {
    setEvents(
      events.map((eve) =>
        // console.log(eve._id + " " + id);
        
          eve._id === id ? { ...eve, registered: !eve.registered } : eve
          // eve._id === id ? console.log(eve) : eve
        
      )
    );
  };

  // { ...eve, registered: !eve.registered }

  return (
    <main>
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>Event Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                {" "}
                <Link to="/">All Events</Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="/myevents">My events</Link>
              </Nav.Link>
              <NavDropdown title="Events" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  {" "}
                  <Link to="/pastevents">Past Events</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {" "}
                  <Link to="/upcomingevents">Upcoming Events</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      

      <Switch>
        <Route path="/" exact>
          <div className="container">
            <Header
              title="All Events"
              onCreateButton={() => setShowAddEvent(!showAddEvent)}
              showAddEvent={showAddEvent}
            />

            {showAddEvent && <AddEvent onAdd={addEvent} />}

            {events.length > 0 ? (
              <Events
                className="events"
                events={events}
                onDelete={deleteEvent}
                onToggle={toggleRegistered}
              />
            ) : (
              "No Events to show. Create an event using the CREATE EVENT BUTTON"
            )}
          </div>
        </Route>

        <Route path="/myevents">
          <MyEvents database={events} />
        </Route>
        <Route path="/pastevents">
          <PastEvent database={events} />
        </Route>
        <Route path="/upcomingevents">
          <UpcomingEvent database={events} onDelete={deleteEvent}
                onToggle={toggleRegistered} />
        </Route>
      </Switch>
      </Router>
    </main>

    // <div>

    // </div>
  );
}

export default App;
