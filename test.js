let obj = {'key': ['value1', 'value2']}
console.log(JSON.stringify(Object.entries(obj)))
let [[key, [...values]]] = Object.entries(obj);
console.log(values)