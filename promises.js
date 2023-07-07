promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});
//when is rejected an this error comes up "Uncaught (in promise) undefined". It means that we need to add the catch
promise
  .then(() => console.log('Finally Finished!')) //.then ONLY will be called if the promise is resolved!
  .then(() => console.log('I also ran!!'))
  .catch( () => console.log('oh oh'));

  /* setTimeout is working under the hood like this 
  var request = new XHTMLRequest ()
    //make request
    request.onload( () => {

    };);

  */