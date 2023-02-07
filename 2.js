const user = {
    name: 'Ann',
    age: 29,
    city: 'Che',
    a: 'nothingelsematter',
    b: NaN,
    c: undefined
}

function CheckExistProp(str, obj) {
    return (str in obj);
}

console.log(CheckExistProp('name', user));
console.log(CheckExistProp('nothingelse', user));
console.log(CheckExistProp('age', user));
console.log(CheckExistProp('a', user));
console.log(CheckExistProp('b', user));