import Event from "./Event";

const Events = ({ events, onDelete, onToggle }) => {
  return (
    <div className="events">
      {events.map((eve) => (
        <Event key={eve._id} eve={eve} onDelete={onDelete} onToggle = {onToggle} />
      ))}
    </div>
  );
};

export default Events;
