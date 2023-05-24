// set as data storage in localstorage 
const hello = localStorage.getItem('hello');
console.log(hello)


function setAge() {
    localStorage.setItem('age', '21');
}