const settings = {
    async: true,
    crossDomain: true,
    url: 'https://api.themoviedb.org/3/movie/now_playing?language=es&page=1',
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTJiYzM0YjdkMWM4MTU0NDllMjE4YWFkZWVhOTI3MiIsInN1YiI6IjY1MWY0ZjEyNzQ1MDdkMDEzOTVjN2U2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jmL4fOnFYAiO-TpusdrpQXzIHSGri79P-Ylxwt_WAH4'
    }
  };

  $.getJSON(settings, function (data){
    let resultados = data.results
    console.log(resultados) 
/* $.ajax(settings).done(function (response) {
    let resultados = response.results
    console.log(resultados); */
    for(let i=0; i<resultados.length; i++) {
        document.querySelector('.cards-container').insertAdjacentHTML ("afterbegin", 
            '<section id="cards">' +
                '<h2 style="font-variant:small-caps;"> '+ resultados[i].title +'</h2>'+
                '<img src="http://image.tmdb.org/t/p/w500' + resultados[i].backdrop_path + '" alt="">' +
                '<p style="margin-left:0.5em; margin-right:0.5em; "><span style="font-variant:small-caps; font-size:1em; font-weight:bold;">Resumen </span>: '+  resultados[i].overview +'</p>' +
                /* '<p style="font-size:1.3em; font-weight:bold; color:#ec5151; margin-top:0.2em">$'+ productos[i].precio +'</p>' +
                "<div id='botones'><a href='./carrito.html'><button id='cart'><b>Agregar al Carrito</b></button></a><button id='fav'><i class='fa-regular fa-heart'></i></button></div>"  +  */
            '</section>')      
    }
  });
