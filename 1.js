function printKeys(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(key, object[key]);
        }
    }
}


const example = {
    name: "Yulia"
}

printKeys(example);
