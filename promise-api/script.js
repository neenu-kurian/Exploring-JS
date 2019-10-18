//the Promise.all below settles after 3 seconds, and then its result is an array [1, 2, 3]:
//Please note that the order of resulting array members is the same as source promises. Even though the first promise takes the longest time to resolve,
// it’s still first in the array of results.

Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000)) // 3
]).then(result=>console.log(result));


let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url));
// Promise.all waits until all jobs are resolved
Promise.all(requests).then(responses =>
  responses.forEach(response => alert(`${response.url}: ${response.status}`))
);

//when you return a promise using fetch in the above example, we are returning it before it is resolved. In Promise.all, actually we wait for promise to be resolved.

//assuming that you have to perform huge number of async operations like sendng bulk marketting emails to thousands of users.Simple code will be:
//for (let i=0;i<100;i++) { sendEmailtoUser(user[i]);}
//the above is not best way bcz at one point of time, JS will have huge number of HTTP open connection which may kill the server
//a simple approach wil be to do in batches.Take first 500 users, trigger the mail and wait until HTTP connections are closed.then do for next batch

// sendMailForUsers(userlists);

// async function sendMailForUsers(users) {
//   const userslength = users.length;
//   for (let i = 0; i < userslength; i += 100) {
//     const requests = users.slice(i, i + 100).map(user => {
//       return triggerMailForUser(user) // Async function to send the mail.
//         .catch(e => console.log(`Error in sending email for ${user} - ${e}`)); 
//     });
//   }

//   await Promise.all(requests)
//   .catch(e => console.log(`Error in sending email for the batch ${i} - ${e}`)) 
// }

