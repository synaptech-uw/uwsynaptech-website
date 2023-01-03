const arrToParaArr = (arr) => {
  let pArr = []
  arr.forEach((e) => {
    pArr.push((<p>{e}</p>))
  })
  return pArr
}

export {
  arrToParaArr
}