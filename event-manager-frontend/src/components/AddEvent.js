import axios from "axios";
import { useState } from "react";
import { Form, FormControl, FormGroup, Button } from "react-bootstrap";
import { createEvent } from "../api/Api";

const AddEvent = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [organiser, setOrganiser] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  //   const onSubmit = (e) => {
  //     e.preventDefault();

  //     // onAdd({text, organiser, date, location, description})

  //     const item = {
  //       text,
  //       organiser,
  //       date,
  //       location,
  //       description,
  //     };

  //     createEvent(item)
  //       .then((res) => {
  //         if (res.status === 200) {
  //           alert("Event created");
  //         } else {
  //           alert("Something went wrong. Please try again");
  //         }

  //         setText("");
  //         setOrganiser("");
  //         setDate("");
  //         setLocation("");
  //         setDescription("");
  //       })
  //       .catch((e) => console.log(e));
  //   };

  return (
    <Form>
      <div>
        <Form.Label className="attach">Event Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add event name"
          
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <Form.Label className="attach">Event Organisers</Form.Label>
        <Form.Control
          type="text"
          placeholder="Who is organising this event?"
          
          value={organiser}
          onChange={(e) => setOrganiser(e.target.value)}
        />
      </div>
      <div>
        <Form.Label className="attach">Date</Form.Label>
        <Form.Control
          type="date"
          required
          pattern="\d{4}-\d{2}-\d{2}"
          placeholder="dd/mm/yyyy"
          
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <Form.Label className="attach">Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Where is the event being held?"
          
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <Form.Label className="attach">Describe the Event</Form.Label>
        <Form.Control
          type="text"
          placeholder="Description(Optional)"
    
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <Button
        variant="primary"
        size="lg"
        block
        type="submit"
        onClick={(e, index) => {
          e.preventDefault();
          const item = {
            // id: index,
            text,
            organiser,
            date,
            location,
            description,
            registered: true,
          };

          //   createEvent(item)
          //     .then((res) => {
          //       if (res.status === 200) {
          //         alert("Event created");
          //       } else {
          //         alert("Something went wrong. Please try again");
          //       }

          //       setText("");
          //       setOrganiser("");
          //       setDate("");
          //       setLocation("");
          //       setDescription("");
          //     })
          //     .catch((e) => console.log(e));

          axios
            .post("http://localhost:3000/api/event", {
            //   id: index,
              text,
              organiser,
              date,
              location,
              description,
              registered: true,
            })
            .then((res) => {
              console.log(res);
              if (res.status === 200) {
                alert("Event created");
              } else {
                alert("Something went wrong");
              }

              setText("");
              setOrganiser("");
              setDate("");
              setLocation("");
              setDescription("");
            });
        }}
      >
        Add Event
      </Button>
    </Form>
  );
};

export default AddEvent;
