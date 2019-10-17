localStorage.setItem('localstorage', 1);

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

sessionStorage.setItem('sessionstorage', 1);
console.log('sessionstorage',sessionStorage.getItem('sessionstorage'));