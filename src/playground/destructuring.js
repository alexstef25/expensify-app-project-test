//
// Object destructuring
//

const person = {
    name: 'Andrew',
    age: 27,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};


const {name: firstName = 'Anonymous', age} = person;

//const name =person.name;
//const age =person.age;

console.log(`${firstName} is ${age}.`);

const {temp: temperature, city} = person.location;

if(city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
}


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin',
    }
};


const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);


//
// Array destructuring
//

const adress = ['1299 S Juniper Street', 'Philadelphia','Pennsylvania', '19147'];

const [, cityName, state = 'New York'] = adress;
console.log(`You are in ${cityName} ${state}.`);

const item = [ 'Cofee', '$2.00', '$2.55', '$2.75'];
const [name, , mediumPrice] = item;

console.log(`A medium ${name} costs ${mediumPrice}`);