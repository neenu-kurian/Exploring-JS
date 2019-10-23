//this function returns a resolved promise with the result of 1
async function result() {
  return 1;
}

result().then(result=>console.log(result));

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });

  let result = await promise; // wait till the promise resolves (*)

  alert(result); // "done!"
}

f();