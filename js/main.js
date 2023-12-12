//Trae catalogo y link a detalles de cada peli  
let url = "https://api.themoviedb.org/3/movie/now_playing?language=es&page=1&api_key=da2bc34b7d1c815449e218aadeea9272"
cargarApi(url)

function cargarApi (url){
fetch(url)
  .then(data => data.json())
  .then(data => {
    let resultados = data.results
    let idPelis = ""
    for(let i=0; i<resultados.length; i++) {
        document.querySelector('.cards-container').insertAdjacentHTML ("afterbegin", 
          '<section id="cards">' +
            '<img id="' +resultados[i].id + '" src="http://image.tmdb.org/t/p/w500' + resultados[i].poster_path + '" alt="">'  +
          '</section>')           
  }

  let imgPeliculas = document.querySelectorAll("#cards img")
  console.log(imgPeliculas)         
  
  for (j=0; j < imgPeliculas.length; j++){
    imgPeliculas[j].addEventListener("click", function(){
      idPelis = this.id
      //console.log(idPelis)
      borrarCardContainer()
      fetch('https://api.themoviedb.org/3/movie/'+ idPelis +'?language=es&api_key=da2bc34b7d1c815449e218aadeea9272')
        .then(datos => datos.json())
        .then(datos => crearCardPelicula(datos, idPelis)
        )
      })
  }
})          
}  

//'https://api.themoviedb.org/3/movie/299054/watch/providers'

//FUNCIONES
function borrarCardContainer(){
  document.querySelector('.cards-container').style.display = "none"
  /* document.querySelector("#search-tab").style.display = "none"  */ 
  document.querySelector("#subtitulo-main").style.display = "none"
  document.querySelector("#presentacion-main").style.display = "none"
}

function crearCardPelicula(datos, idPelis){
  console.log(datos)         
  document.querySelector('.cards-container-peliculas').insertAdjacentHTML ("afterbegin", 
        '<section id="cards-peliculas">' +
          '<div id="poster"><img id="' +datos.id + '" src="http://image.tmdb.org/t/p/w500' + datos.poster_path + '" alt=""></div>'  +
          '<div id="titulo"><h2> '+ datos.title +'</h2><h3>'+ datos.tagline + '</h3><p>'+  datos.overview +'</p><div id="genero-estreno"><p><span> Género</span>: '+  datos.genres[0].name +'</p><p><span> Estreno</span>: '+  (datos.release_date).split("-").reverse().join("-") +'</p><p><span> Popularidad</span>: '+  (datos.vote_average).toFixed(1)+'</p></div></div>'+ 
          /* '<div id="donde-ver"><span> Ver en</span>:' + rdosDondeVer.AR.rent[0].provider_name +'</div>' + */
        '</section>')  
        trailer(idPelis)         
  }

  function trailer (idPelis){
    fetch('https://api.themoviedb.org/3/movie/'+ idPelis +'/videos?api_key=da2bc34b7d1c815449e218aadeea9272&language=es')
                  .then(resp => resp.json())
                  .then(resp => {
                    //console.log(resp)
                    //console.log(idPelis)
                    let rdos = resp.results
                    //console.log(rdos)
                    //console.log(rdos[0].key)
                    document.querySelector('.cards-container-peliculas').insertAdjacentHTML ("afterend", 
                        '<section id="trailer">' +
                        '<iframe src="https://www.youtube.com/embed/' + rdos[0].key +'" frameborder = "0"  width="560" height="315" allowfullscreen:"allowfullscreen"></iframe>'+
                        '</section>')             
              })
  }