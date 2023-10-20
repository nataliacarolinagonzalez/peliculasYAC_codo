
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
            '<h2 style="font-variant:small-caps; margin:1.5em;"> '+ resultados[i].title +'</h2>'+
            '<div id="link-peli"><img id="' +resultados[i].id + '" src="http://image.tmdb.org/t/p/w500' + resultados[i].backdrop_path + '" alt=""></div>'  +
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
            document.querySelector('.cards-peliculas').insertAdjacentHTML ("afterbegin", 
                '<section id="cards-peliculas">' +
                  '<div id="link-peli"><img id="' +datos.id + '" src="http://image.tmdb.org/t/p/w500' + datos.backdrop_path + '" alt=""></div>'  +
                  '<h2 style="font-variant:small-caps; margin:1.5em;"> '+ datos.title +'</h2>'+
                  '<h3 style="font-variant:small-caps; margin:1.5em;"> '+ datos.tagline +'</h3>'+
                  '<p style="margin:1.5em; "><span style="font-variant:small-caps; font-size:1em; font-weight:bold;">Género </span>: '+  datos.genres[0].name +'</p>' +
                  '<p style="margin:1.5em; "><span style="font-variant:small-caps; font-size:1em; font-weight:bold;">Estreno </span>: '+  datos.release_date +'</p>' +
                  '<p style="margin:1.5em; "><span style="font-variant:small-caps; font-size:1em; font-weight:bold;">Resumen </span>: '+  datos.overview +'</p>' +
                '</section>')            
                


         
    })
  })
}
})          
  

      
//Probar: lista x genero https://developer.themoviedb.org/reference/genre-movie-list
//videos : https://developer.themoviedb.org/reference/movie-videos
    