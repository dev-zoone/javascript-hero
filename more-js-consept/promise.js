const getData = new Promise((resolve, reject) =>{
    // resolve(5436544)
    // reject("no data avaiable")
    const num = Math.random()*10;
    if(num < 6) {
        resolve(num)
    }else{
        reject("no data available")
    }
})

getData
    // akhane amra promise er data ke dhorte .then proyog korbo 
    .then(data => console.log(data + 3))
    // ar reject er data ke dhorte .catch proyog korbo
    .catch(err => console.log(err))