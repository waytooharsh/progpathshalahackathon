import * as React from "react";
import Box from "@mui/material/Box";
import YouTube from "react-youtube";
import ListGroup from "react-bootstrap/ListGroup";
import { Accordion, Button } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./style.css";
function Listpop(props) {
  const [videoId, setVideoId] = React.useState("20IOYw5-SDs");
  const [open, setOpen] = React.useState(false);
  const handleyt = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  {
    /*
  const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      bgcolor: "#2b2b2b",
      color: "white",
      boxShadow: 24,
      pt: 2,
      px: 4,
      pb: 3,
    };
*/
  }

  return (
    <ListGroup variant="flush">
      {props.pList.map((asana, i) => {
        const pid = asana.id;
        const pname = asana.title;
        return (
          <ListGroup.Item>
            {/*<Button onClick={handleyt}>{pname}</Button>*/}
            <Accordion open={open} onClose={handleClose}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ margin: "auto" }}>
                  <b>{asana.title}</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ width: "max-content", margin: "auto" }}>
                  {/*<h2 id="child-modal-title">{pname}</h2>*/}
                  <YouTube videoId={pid} onReady={onReady} />
                </Box>
              </AccordionDetails>
            </Accordion>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default Listpop;
