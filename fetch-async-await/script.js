window.onload = function() {
  document.querySelector('.search-btn').addEventListener('click', function() {
    let movieToSearch = document.querySelector('#movie-search').value;

    /*I have used async as IIFE
    When the fetch has returned a Promise the first time, the result is put in the const resp,
	so the next variable is waiting until the fetch got a response. The console is only outputting data when the 
	jsonData variable has got the data*/

    (async () => {
      const resp = await fetch(
        'http://www.omdbapi.com/?i=tt3896198&apikey=b3e7d35' +
          '&t=' +
          movieToSearch
      );
      const jsonData = await resp.json();
      console.log('jsonData: ', jsonData);
    })();
  });
};
