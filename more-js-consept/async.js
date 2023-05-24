console.log(1)
console.log(2)

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

const timeoutId = setTimeout(() =>{
//  doSomthing()
console.log("lazyy")

}, 4000)
// time out ke clear korar jonno clearTiemout function call korte hoy
setTimeout(() =>{
    clearTimeout(timeoutId)
}, 3000)
console.log(4)
console.log(5)
console.log(6)
function doSomthing(){
    console.log(3)
}

// const life = 0;
// const time = 0;

// let pepole = 1;
// let time = 0;

// for(let i = 0; time < pepole; i++){
//     let time = i;
//     if(pepole < time){
//         console.log(time)
//     }
// }

