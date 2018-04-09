import React from "react";
import "./CrowCard.css";

const CrowCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <span onClick={() => props.removeCrow(props.id)} className="remove">
    </span>
  </div>
);

export default CrowCard;
