import { Card } from "react-bootstrap";
import "./style.css";
import Slideshow from "./Slideshow";
import Poses from "./Poses";
function Mainframe() {
  return (
    <div className="mainpane">
      <Slideshow></Slideshow>
      <Poses></Poses>
    </div>
  );
}

export default Mainframe;
