
// con JQUERY
/* $.getJSON("https://api.themoviedb.org/3/movie/now_playing?language=es&page=1&api_key=da2bc34b7d1c815449e218aadeea9272", function (data){
    let resultados = data.results
    console.log(resultados) 
    
    for(let i=0; i<resultados.length; i++) {
        document.querySelector('.cards-container').insertAdjacentHTML ("afterbegin", 
            '<section id="cards">' +
              '<h2 style="font-variant:small-caps; margin:1.5em;"> '+ resultados[i].title +'</h2>'+
              '<div><img id="' +resultados[i].id + '" src="http://image.tmdb.org/t/p/w500' + resultados[i].backdrop_path + '" alt=""></div>' + 
              '<a href="" target="_blank"><img src="http://image.tmdb.org/t/p/w500' + resultados[i].backdrop_path + '" alt=""></a>' +
              '<p style="margin:1.5em; "><span style="font-variant:small-caps; font-size:1em; font-weight:bold;">Resumen </span>: '+  resultados[i].overview +'</p>' +
              '<p style="color:red;"> '+  idPelis +'</p>' +
            '</section>')            
    }  */
  
//cancelo evento automatico links
/* let links = document.querySelectorAll("#cards a")
  links.forEach(links =>{
    links.addEventListener("click", e =>{
      e.preventDefault()
    } )
  })  */ 
   
fetch("https://api.themoviedb.org/3/movie/now_playing?language=es&page=1&api_key=da2bc34b7d1c815449e218aadeea9272")
  .then(data => data.json())
  .then(data => {
    let resultados = data.results
    let idPelis = ""
    for(let i=0; i<resultados.length; i++) {
      document.querySelector('.cards-container').insertAdjacentHTML ("afterbegin", 
          '<section id="cards">' +
            /* '<h2 style="font-variant:small-caps; margin:1.5em;"> '+ resultados[i].title +'</h2>'+ */
            '<div id="link-peli"><img id="' +resultados[i].id + '" src="http://image.tmdb.org/t/p/w500' + resultados[i].poster_path + '" alt=""></div>'  +
          '</section>')            
  }
  let imgPeliculas = document.querySelectorAll("#cards img")
  console.log(imgPeliculas)         
  for (j=0; j < imgPeliculas.length; j++){
    imgPeliculas[j].addEventListener("click", function(){
      idPelis = this.id
      console.log(idPelis) 
      fetch('https://api.themoviedb.org/3/movie/'+ idPelis +'?language=es&api_key=da2bc34b7d1c815449e218aadeea9272')
        .then(datos => datos.json())
        .then(datos => {
          console.log(datos)
          document.querySelector('.cards-container').innerHTML = ""
          document.querySelector("main h1").textContent = ""
            document.querySelector('.cards-container-peliculas').insertAdjacentHTML ("afterbegin", 
                '<section id="cards-peliculas">' +
                  '<div id="poster"><img id="' +datos.id + '" src="http://image.tmdb.org/t/p/w500' + datos.poster_path + '" alt=""></div>'  +
                  '<div id="titulo"><h2> '+ datos.title +'</h2><h3>'+ datos.tagline + '</h3><p>'+  datos.overview +'</p><div id="genero-estreno"><p><span> Género </span>: '+  datos.genres[0].name +'</p><p><span> Estreno </span>: '+  datos.release_date +'</p></div></div>'+ 
                  /* '<div id="genero-estreno"><p><span> Género </span>: '+  datos.genres[0].name +'</p><p><span> Estreno </span>: '+  datos.release_date +'</p></div>'+ */
                  /* '<div id="titulo"><h2> '+ datos.title +'</h2></div>' +
                  '<div id="subtitulo"><h3> '+ datos.tagline +'</h3></div>'+
                  '<div id="resumen"><p><span> Resumen </span>: '+  datos.overview +'</p></div>' + 
                  '<div id="genero"><p>Género </span>: '+  datos.genres[0].name +'</p></div>' +
                  '<div id="estreno"><p>Estreno </span>: '+  datos.release_date +'</p></div>' +  */
                '</section>')       
                fetch('https://api.themoviedb.org/3/movie/'+ idPelis +'/videos?api_key=da2bc34b7d1c815449e218aadeea9272&language=es')
                .then(resp => resp.json())
                .then(resp => {
                  console.log(resp)
                  console.log(idPelis)
                  let rdos = resp.results
                  console.log(rdos)
                  console.log(rdos[0].key)

                   document.querySelector('.cards-container-peliculas').insertAdjacentHTML ("afterend", 
                        '<section id="trailer">' +
                        /* '<iframe src="https://www.youtube.com/embed/' + datos.key +'" frameborder = "0"></iframe>'+  */ 
                        '<iframe src="https://www.youtube.com/embed/' + rdos[0].key +'" frameborder = "0" width="60%" height="315"></iframe>'+
                        '</section>')             
            })
      })
    })
  }
})          
  

      
//Probar: lista x genero https://developer.themoviedb.org/reference/genre-movie-list
//videos : https://developer.themoviedb.org/reference/movie-videos
//   