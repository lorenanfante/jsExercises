function makeRequest(location){
    return new Promise((resolve,reject)=>{
        console.log(`Making request to ${location}`);
        if (location === 'Google'){
            resolve ('Google says hi');
        } else {
            reject ('It is not possible to connect with Google');
        }
    });
}

function processRequest(response){
    return new Promise((resolve, reject) => {
        console.log ('Processing request');
        resolve(`Additional info to the successful request ${response}`);
    });
}

//if promise is fullfilled (.then and .catch)
/*makeRequest('Google')
.then((response) => {
    console.log (`Entered into the .then ${response}`);
})
.catch((err)=>{
    console.log(`Entered in .catch ${err}`);
})
*/
//chaining promises
makeRequest('Google').then(response => {
    console.log(`Response received!`);
    return (processRequest(response));
}).then(response => {
    console.log(`second response successful: ${response}`);
}).catch(err => {
    console.log(`error handled ${err}`);
});