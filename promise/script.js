//example of resolving a promise after 3s
let promise1 = new Promise(function(resolve,reject) {
  setTimeout(resolve("done"),3000);
});

//example of rejecting a promise
let rejectedPromise = new Promise(function(resolve,reject){
  setTimeout(reject(new Error("whoops!")),3000);
});

//The executor should call only one resolve or one reject. Any state change is final.
//All further calls of resolve and reject are ignored

let promise2 = new Promise(function(resolve,reject){
    setTimeout(resolve('done'), 3000);
    reject(new Error('error'));//ignored
    resolve("done");//ignored
});

//The first argument of .then is a function that runs when the promise is resolved, and receives the result.
//The second argument of .then is a function that runs when the promise is rejected, and receives the error.

let promise3 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve('done!'), 1000);
});

// resolve runs the first function in .then , result and error are properties of promise and result contains resolved value and error contains rejected value
promise3.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);

//If we’re interested only in errors, then we can use catch
let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise4.catch(alert); 

//using finally
let promise5 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Whoops!')), 1000);
});

promise5.finally(()=> console.log("do something"));