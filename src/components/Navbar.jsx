import { AppBar, Toolbar } from "@mui/material";
import { Image } from "react-bootstrap";
import logo from "./resources/LOGO.png";
import "./style.css";
function Navbar() {
  return (
    <div>
      <AppBar className="nav">
        <Image className="branding" src={logo} height="40px" />
      </AppBar>
    </div>
  );
}

export default Navbar;
