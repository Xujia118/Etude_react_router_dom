import React from "react";
import { useNavigate } from "react-router-dom";

function Events() {
  const navigate = useNavigate();

  return (
    <div>
      Events
      <button onClick={() => navigate("/about")}>Go to About</button>
    </div>
  );
}

export default Events;
