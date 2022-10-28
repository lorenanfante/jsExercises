promise = new Promise((resolve, reject) => {
  resolve();
});
//when is rejected an this error comes up "Uncaught (in promise) undefined". It means that we need to add the catch
promise
  .then(() => console.log('Fnally Finished!')) //.then ONLY will be called if the promise is resolved!
  .then(() => console.log('I also ran!!'))
  .catch( () => console.log('oh oh'));
