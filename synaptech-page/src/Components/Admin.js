import React, {useState} from "react";
import "../styles/OurTeamStyles.css";

function Admin(props) {

  return(
    <div className={"AdminContainer"} Style = {"display: flex; flex-direction: row; justify-content: space-around"}>

      <div Style = {"flex-direction: column; display: flex; align-items: center"}>
        <img src={props.image} alt={props.name} />
        <h3>{props.major}</h3>
        <h4>{props.minor}</h4>
      </div>

      <div Style = {"flex-direction: column; display: flex; align-items: flex-end"}>
        <h1>{props.name}</h1>
        <h2>{props.title}</h2>
        <p>{props.blurb}</p>
      </div>

    </div>
  );
}

export default Admin;