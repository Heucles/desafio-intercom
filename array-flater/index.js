function _flatIt (array, flatArray) {
  let _arrayClone = array.slice(0)
  let _flatArrayClone = flatArray && Array.isArray(flatArray) ? flatArray.slice(0) : []

  for (let element of _arrayClone) {
    if (Array.isArray(element)) {
      _flatArrayClone = _flatIt(element, _flatArrayClone)
    } else {
      _flatArrayClone.push(element)
    }
  }

  return _flatArrayClone
}

function flatIt (array) {
  let _arrayClone
  try {
    if (!Array.isArray(array)) {
      _arrayClone = JSON.parse(array)
    } else {
      _arrayClone = array.slice(0)
    }

    return _flatIt(_arrayClone)
  } catch (error) {
    throw Error(`The provided array to be flattened is invalid, please review it and try it again: ${error.message}`)
  }
}

module.exports = { flatIt }
