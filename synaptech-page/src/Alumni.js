import React, {useState} from "react";
import "./OurTeamStyles.css";

function Alumni(props) {

  return(
    <div>
      <div className={"AlumniContainer"} Style = {"display: flex; flex-direction: row; justify-content: space-around"}>
        <div Style={"display: flex; flex-direction: row;"}>
          <img src={props.image} alt={props.name} />
          <div Style = {"flex-direction: column; display: flex; margin-left: 2rem"}>
            <h1>{props.name}</h1>
            <h2>{props.major}</h2>
            <h3>{props.minor}</h3>
          </div>
        </div>
        <div Style = {"flex-direction: column; display: flex; align-items: flex-end; margin-right: 9rem"}>
          <h3>{props.job}</h3>
          <h4>{props.email}</h4>
          <a href={props.link}>LinkedIn</a>
        </div>
      </div>
      <div className="hr"><p></p></div>
    </div>
  );
}

export default Alumni;