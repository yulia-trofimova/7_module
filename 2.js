function findName(object, key) {
    return object.hasOwnProperty(key);
}


const example = {
    name: "Yulia"
}



console.log(findName(example, "name"));
console.log(findName(example, "surname"));