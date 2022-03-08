import './App.css';
import React, {useEffect} from 'react';
function StoreText(props) {

  const elems = props.elems;
  const textItems = elems.map((para) =>
    para
  );

  var styleStr = ("left : " + String((props.coords.x + 1)*50) + "vw;" + " bottom : " + String((props.coords.y + 0.995)*50) + "vh;");
  useEffect(() => {
    styleStr = ("left : " + String((props.coords.x + 1)*50) + "vw;" + " bottom : " + String((props.coords.y + 0.995)*50) + "vh;");
    console.log(styleStr);
  }, [props.coords]);

  return(
    <div className = "storeText" Style = {styleStr}>
      <h2 className = "storeTextTitle">{props.title}</h2>
      {textItems}
      {/* Add a reference to this object and get its position once it's rendered? */}
    </div>
  )

}

export default StoreText
