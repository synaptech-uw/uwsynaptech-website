import '../styles/Styles.css';
import React, {useEffect} from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

function StoreText(props) {

  const elems = props.elems;
  const textItems = elems.map((para) =>
    para
  );

  var styleStr = ("left : " + String((props.coords.x + 1)*50) + "vw;" + " bottom : " + String((props.coords.y + 0.995)*50) + "vh;" + ((isMobile) ? ' height:30%; width:100%;' : ' height:80%; width: 33%;'));
  useEffect(() => {
    styleStr = ("left : " + String((props.coords.x + 1)*50) + "vw;" + " bottom : " + String((props.coords.y + 0.995)*50) + "vh;");
  }, [props.coords]);

  return(
    <div className = {props.showClass} Style = {styleStr}>
      <h2 className = "storeTextTitle">{props.title}</h2>
      {textItems}
      {/* Add a reference to this object and get its position once it's rendered? */}
    </div>
  )

}

export default StoreText
