/* const settings = {
    async: true,
    crossDomain: true,
    url: 'https://api.themoviedb.org/3/search/movie?query=indiana&include_adult=false&language=es&page=1&api_key=da2bc34b7d1c815449e218aadeea9272',
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTJiYzM0YjdkMWM4MTU0NDllMjE4YWFkZWVhOTI3MiIsInN1YiI6IjY1MWY0ZjEyNzQ1MDdkMDEzOTVjN2U2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jmL4fOnFYAiO-TpusdrpQXzIHSGri79P-Ylxwt_WAH4'
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
 */

  
  let variable = "monja" // recuperar valor input 
  let link = document.querySelector("#uno")
  link.setAttribute("href", "https://api.themoviedb.org/3/search/movie?query=" + variable + "&include_adult=false&language=es&page=1&api_key=da2bc34b7d1c815449e218aadeea9272")



  