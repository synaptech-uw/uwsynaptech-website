import './App.css'
function StoreText(props) {

  const elems = props.elems;
  const textItems = elems.map((para) =>
    para
  );

  return(
    <div className = "storeText">
      <h2 className = "storeTextTitle">{props.title}</h2>
      {textItems}
      {/* Add a reference to this object and get its position once it's rendered? */}
    </div>
  )

}

export default StoreText
