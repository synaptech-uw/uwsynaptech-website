function StoreText(props) {

  const paras = props.paras;
  const textItems = paras.map((para) =>
    <p>{para}</p>
  );

  return(
    <div>
      <h2>{props.title}</h2>
      {textItems}
    </div>
  )

}

export default StoreText
