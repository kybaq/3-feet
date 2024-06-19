import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

function CollapseButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex">
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body className="h-10 w-96"></Card>
          </div>
        </Collapse>
        <Button
          style={{ marginRight: "40px" }}
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click
        </Button>
      </div>
    </>
  );
}

export default CollapseButton;
