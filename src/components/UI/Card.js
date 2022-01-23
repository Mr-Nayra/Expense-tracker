import React from "react";
import './Card.css'

function Card(props){
  const classcard='card ' + props.className;

  return <div className={classcard}>{props.children}</div>
}

export default Card;
