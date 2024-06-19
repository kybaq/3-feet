import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      HomePage
      <br />
      <Link to="/map">Map</Link>
    </div>
  );
}

export default HomePage;
