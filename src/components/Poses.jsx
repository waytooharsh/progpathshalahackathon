import Typography from "@mui/material/Typography";
import Listpop from "./Listpop";
import { Card } from "react-bootstrap";
let listofvid = require("./resources/ytplaylist.json");

function Poses() {
  return (
    <Card>
      <Card.Header>
        <Typography sx={{ width: "100%", margin: "auto 43%" }}>
          <b>Y O G A &nbsp; &nbsp;P O S E S</b>
        </Typography>
      </Card.Header>
      <Listpop pList={listofvid}></Listpop>
    </Card>
  );
}

export default Poses;
