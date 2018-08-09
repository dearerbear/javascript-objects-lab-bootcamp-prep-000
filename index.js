var recipes = new Object()
console.log(recipes)

function updateObjectWithKeyAndValue(object, key, value) {
//  object[key] = value;
//  var brandNew = Object.assign({}, object, {[key]: value})
  return Object.assign({}, object, {[key]: value})
  // return object;
  // return newObject
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   object[key] = value;
   return object
}

// function deleteFromObjectByKey(object, key) {
//   delete object[key]
//   return object
// }

function deleteFromObjectByKey(object, key) {
  newObject = object;
  console.log(newObject)
}
