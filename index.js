var recipes = new Object()
console.log(recipes)

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  var brandNew = Object.assign({}, object, {key: "test"})
  return brandNew
  // return object;
  // return newObject
}
