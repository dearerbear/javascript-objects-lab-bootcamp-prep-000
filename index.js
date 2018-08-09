var recipes = new Object()
console.log(recipes)

function updateObjectWithKeyAndValue(object, key, value) {
  // object[key] = value;
  // return object;
  newObject = Object.assign({}, object, {key: "test"})
  console.log(newObject);
  return newObject
}
