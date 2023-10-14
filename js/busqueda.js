 const settings = {
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


  
  // let variable = "monja" // recuperar valor input 
  // let link = document.querySelector("#uno")
  // link.setAttribute("href", "https://api.themoviedb.org/3/search/movie?query=" + variable + "&include_adult=false&language=es&page=1&api_key=da2bc34b7d1c815449e218aadeea9272")



let borrar = document.getElementsByClassName(".cards-container");

function searchAction() {
  valDeBusq = document.getElementById("input-busq").value;
  $.getJSON("https://api.themoviedb.org/3/search/movie?query="+valDeBusq+"&include_adult=false&language=es&page=1&api_key=da2bc34b7d1c815449e218aadeea9272",
    function (data) {
      let resultados = data.results;

      
      for (let i = 0; i < resultados.length; i++) {
        document.querySelector(".cards-container").insertAdjacentHTML(
          "afterbegin",
          '<section id="cards">' +
            '<h2 style="font-variant:small-caps; margin:1.5em;"> ' +
            resultados[i].title +
            "</h2>" +
            '<div><img id="' +
            resultados[i].id +
            '" src="http://image.tmdb.org/t/p/w500' +
            resultados[i].backdrop_path +
            '" alt=""></div>' +
            /* '<a href="./peliculas.html"><img src="http://image.tmdb.org/t/p/w500' + resultados[i].backdrop_path + '" alt=""></a>' + */
            '<p style="margin:1.5em; "><span style="font-variant:small-caps; font-size:1em; font-weight:bold;">Resumen </span>: ' +
            resultados[i].overview +
            "</p>" +
            /* '<p style="color:red;"> '+  idPelis +'</p>' + */
            "</section>"
        );
      }
      









    }
  );
  
}