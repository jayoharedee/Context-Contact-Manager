const id = () => {
  let array = new Uint32Array(8)
  window.crypto.getRandomValues(array)

  let str = ''
  let length = array.length

  for (let i = 0; i < length; i++) {
    str +=
      (i < 2 || i > 5 ? '' : '-') + array[i].toString(16).slice(-4)
  }

  return str
}

export default id
