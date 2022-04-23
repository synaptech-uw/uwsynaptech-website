import React, {useState} from "react";
import "../styles/OurTeamStyles.css";

function Admin(props) {

  return(
    // original styling: width: 30vw; display: flex; flex-direction: row; justify-content: space-around; padding: 2rem;
    <div className={"AdminContainer"} Style = {"display: flex; flex-direction: row; justify-content: space-around; padding: 2rem;"}>

      <div Style = {"flex-direction: column; display: flex; align-items: center;"}>
        <img Style = {"border-radius:100vh; height: 25vw; width: 25vw"} src={props.image} alt={props.name} />
        <div Style = {"text-align: center"}>
          <h3 Style = {"font-size: 1.4rem"}>{props.major}</h3>
          <h4 Style = {"font-size: 1rem"}>{props.minor}</h4>
        </div>
      </div>

    {/* <div Style = {"flex-direction: column; display: flex; align-items: flex-end"}>
        <h1 Style = {"padding-left: 1rem;"}>{props.name}</h1>
        <div className="hr"><p></p></div>
        <h2 Style = {"color: #9E9577"}>{props.title}</h2>
        <p Style = "padding-left: 1rem; width:25vw;">{props.blurb}</p>
      </div> */}
      <div Style = {"flex-direction: column; display: flex;"}>
        <h1 Style = {"padding-left: 1rem;"}>{props.name}</h1>
        <div className="hr"><p></p></div>
        <h2 Style = {"padding-left: 1rem; color: #9E9577"}>{props.title}</h2>
        <p Style = "padding-left: 1rem;">{props.blurb}</p>
      </div>

    </div>
  );
}

export default Admin;