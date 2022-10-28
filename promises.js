promise = new Promise((resolve, reject) => {
  resolve();
});
//when is rejected an this error comes up "Uncaught (in promise) undefined". It means that we need to add the catch