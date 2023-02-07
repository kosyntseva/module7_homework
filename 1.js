function getOwnProp(obj) {
    for(let key in obj){
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

const person = {
    isMe: true
}


const user = Object.create(person);
user.name = 'Ann';
user.age =  29;


getOwnProp(user);