const baseUrl ='https://pokeapi.co/api/v2/pokemon/ditto';

fetch(baseUrl)
.then(res => res.json())//this returns a promise
.then(data => console.log(data))


//handling errors. Fetch doesn't returns unsuccessful messages. Only when it's a network error
// example with one parameter
fetch(baseUrl)
.then(res => {
    if(res.ok){
        console.log(`Successful response`)
    }else{
        console.log(`Error in response`);
    }
})
.then (data => console.log(data))
.catch(error => console.error(`error: ${error}`));

//example with two parameters
fetch(baseUrl,{
 method:'POST',
 headers:{
    'Content-Type':'application/json'
},
 body:JSON.stringify({
    name:'Lorena',
    position:'Frontend'
 })
}).then(res => {
    return res.json();
})