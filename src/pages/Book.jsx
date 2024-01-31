import React from "react";
import  { useParams } from "react-router-dom";

function book() {

  console.log(useParams());
  
  return <div>book</div>;
}

export default book;
