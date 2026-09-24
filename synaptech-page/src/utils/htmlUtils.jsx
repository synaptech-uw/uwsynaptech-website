const arrToParaArr = (arr) => {
  let pArr = []
  arr.forEach((e, i) => {
    pArr.push((<p key={i}>{e}</p>))
  })
  return pArr
}

export {
  arrToParaArr
}