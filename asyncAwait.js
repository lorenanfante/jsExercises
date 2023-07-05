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

//Async replaces the .then
async function doWork(){
    const response = await makeRequest('Google');
    console.log(`response to success`);
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
}
doWork();

//working with try/catch
async function doWork(){
    try{
        const response = await makeRequest('Google');
        console.log('response to success');
        const processedResponse = await processRequest(response);
        console.log(processedResponse);
    }catch(err){
        console.log(err);

    }
}
doWork();