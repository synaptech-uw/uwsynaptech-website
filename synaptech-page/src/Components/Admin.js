import React, {useState} from "react";
//import "../styles/OurTeamStyles.css";

function Admin(props) {

  let imgStyle = "border-radius:100vh; height: 15vw; width: 15vw"

  if (props.sizing === "single_column") {
    imgStyle = "border-radius:100vh; height: 30vw; width: 30vw";
  } else {
    imgStyle = "border-radius:100vh; height: 15vw; width: 15vw";
  }

  return(
    // original styling: width: 30vw; display: flex; flex-direction: row; justify-content: space-around; padding: 2rem;
    <div Style = "display:flex; flex-direction:column;">
      <div className={"AdminContainer"} Style = {"display: flex; flex-direction: row; padding-bottom: 0.5rem; padding-top:4rem;"}>

        <div Style = {"flex-direction: column; display: flex; align-items: left;"}>
          <img Style = {imgStyle} src={props.image} alt={props.name} aria-label={String("Portrait of " + String(props.name)) } />
          <div>
            <h3>{props.major}</h3>
            <h4>{props.minor}</h4>
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
          <hr/>
          <h2 Style = {"padding-left: 1rem; color: #9E9577"}>{props.title}</h2>
        </div>
      </div>
      <div Style = "width:fit-content;">{props.blurb}</div>
    </div>
  );
}

export default Admin;