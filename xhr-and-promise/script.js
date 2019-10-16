window.onload = function() {

  //ading click event to search btn
  document.querySelector('.search-btn').addEventListener('click', function() {
    let movieToSearch = document.querySelector('#movie-search').value;
    fetchMovieResults(
      'GET',
      'http://www.omdbapi.com/?i=tt3896198&apikey=b3e7d35',
      movieToSearch
    ).then(function(results) {
      console.log('result', results);
    });
  });

  function fetchMovieResults(method, url, movieToSearch) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url + '&t=' + movieToSearch);

      xhr.onload = function() {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhr.response);
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };

      xhr.onerror = function() {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      };

      xhr.send();
    });
  }
};
