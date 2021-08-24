function hoisttwo() {

    console.log(abc);
    var abc;
    console.log(asd);

    var asd ="gopal"; 
}

hoisttwo();

function learnTernary() {
    let val = true;
    const msg = val ? "this is true" : "this is false";
    console.log(msg);
}

learnTernary();

const name = "gopal";
const age = 30;

console.log(`I am ${name} and i am ${age} years old`);

let n = [4, 5, 1, 2, 10, 24];

n.sort(function (a, b) {
    if(a <= b){
        return -1;
    } else if (a>b) {
        return 1
    }
});


const arr1 = [10, 9, 8, 7, 6, 5];
const arr2 = [...arr1, "abc", "def"];
console.log(arr2);

let employee = {
    firstName: "Gopalakrishnan",
    lastName: "Velusamy",
    age: 32,
    getdetails: function() {
        console.log(`I am ${this.firstName} ${this.lastName} and i am ${age} years old!`)
    }
}

employee.getdetails();

function createClass(name, age) {
    const emp = {};
    emp.name = name;
    emp.age = age;
    emp.getdetails = function() {
        console.log(`I am ${emp.firstName} ${emp.lastName} and i am ${emp.age} years old!`)
    }
}

function givesYoupromise(requestUrl) {

    const options = {
        method: 'GET'
    };

    return fetch(requestUrl, options)
    .then(response => {
        if(response.status > 299) {
            throw new Error("Something went wring with the request");
        }

        return response.json;
    });
}

    const successPromise = givesYoupromise("https://reqres.in/api/users?page=1");

    successPromise.then(response => {
        console.log("We have a response result from the api - "+JSON.stringify(response))
    }).catch(error => {
        console.log("Something went wrong...", JSON.stringify(error))
    });
