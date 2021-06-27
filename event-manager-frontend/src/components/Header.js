import { Button } from "react-bootstrap";
import { RiAddCircleFill } from "react-icons/ri";

const Header = ({title, onCreateButton, showAddEvent}) => {
  const style = { color: "white" };

  return (
    <header className="header">
      <h1>{title}</h1>
      <button className="btn-add" onClick={onCreateButton}>
        {showAddEvent ? 'Close' : 'Create Event'}
        {!showAddEvent && <RiAddCircleFill color="white" size={25} />}
        
      </button>
    </header>
  );
};

export default Header;
