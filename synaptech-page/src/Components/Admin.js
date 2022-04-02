import React, {useState} from "react";
import "../styles/OurTeamStyles.css";

function Admin(props) {

  return(
    <div className={"AdminContainer"} Style = {"width: 30vw; display: flex; flex-direction: row; justify-content: space-around; padding: 2rem;"}>

      <div Style = {"flex-direction: column; display: flex; align-items: center;"}>
        <img Style = {"border-radius:100vh; height: 15vw; width: 15vw"} src={props.image} alt={props.name} />
        <h3>{props.major}</h3>
        <h4>{props.minor}</h4>
      </div>

      <div Style = {"flex-direction: column; display: flex; align-items: flex-end"}>
        <h1 Style = {"padding-left: 1rem;"}>{props.name}</h1>
        <div className="hr"><p></p></div>
        <h2 Style = {"color: #9E9577"}>{props.title}</h2>
        <p Style = "padding-left: 1rem; width:25vw;">{props.blurb}</p>
      </div>

    </div>
  );
}

export default Admin;