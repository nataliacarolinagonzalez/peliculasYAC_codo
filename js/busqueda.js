function searchAction() {
  valDeBusq = document.getElementById("input-busq").value;
  $.getJSON("https://api.themoviedb.org/3/search/movie?query="+valDeBusq+"&include_adult=false&language=es&page=1&api_key=da2bc34b7d1c815449e218aadeea9272",
    function (data) {
      const resultados = data.results;   
      console.log(resultados)   
      document.querySelector('.trailer-busqueda').style.display = "none"
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
        console.log(idPelis) 
        fetch('https://api.themoviedb.org/3/movie/'+ idPelis +'?language=es&api_key=da2bc34b7d1c815449e218aadeea9272')
          .then(datos => datos.json())
          .then(datos => {
            console.log(datos)
            document.querySelector('.cards-container').style.display = "none"
            document.querySelector("#search-tab").style.display = "none"
            document.querySelector('.cards-container-peliculas').insertAdjacentHTML ("afterbegin", 
                  '<section id="cards-peliculas">' +
                    '<div id="poster"><img id="' +datos.id + '" src="http://image.tmdb.org/t/p/w500' + datos.poster_path + '" alt=""></div>'  +
                    '<div id="titulo"><h2> '+ datos.title +'</h2><h3>'+ datos.tagline + '</h3><p>'+  datos.overview +'</p><div id="genero-estreno"><p><span> Género</span>: '+  datos.genres[0].name +'</p><p><span> Estreno</span>: '+  (datos.release_date).split("-").reverse().join("-") +'</p><p><span> Popularidad</span>: '+  (datos.vote_average).toFixed(1)+'</p></div></div>'+ 
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
                          '<iframe src="https://www.youtube.com/embed/' + rdos[0].key +'" frameborder = "0" width="560" height="315"></iframe>'+
                          '</section>')             
              })
        })
    })
  }
})
}

//busca con enter
let input = document.querySelector("#input-busq")
input.addEventListener("keydown", function(e){
  if (e.key === "Enter"){
      searchAction()
  } 
})