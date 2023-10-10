let idPelis


$.getJSON("https://api.themoviedb.org/3/movie/now_playing?language=es&page=1&api_key=da2bc34b7d1c815449e218aadeea9272", function (data){
    let resultados = data.results
    console.log(resultados) 
    
    for(let i=0; i<resultados.length; i++) {
        document.querySelector('.cards-container').insertAdjacentHTML ("afterbegin", 
            '<section id="cards">' +
              '<h2 style="font-variant:small-caps; margin:1.5em;"> '+ resultados[i].title +'</h2>'+
              '<div><img id="' +resultados[i].id + '" src="http://image.tmdb.org/t/p/w500' + resultados[i].backdrop_path + '" alt=""></div>' + 
              /* '<a href="./peliculas.html"><img src="http://image.tmdb.org/t/p/w500' + resultados[i].backdrop_path + '" alt=""></a>' + */
              '<p style="margin:1.5em; "><span style="font-variant:small-caps; font-size:1em; font-weight:bold;">Resumen </span>: '+  resultados[i].overview +'</p>' +
              /* '<p style="color:red;"> '+  idPelis +'</p>' + */
            '</section>')            
    } 
    let busc = document.querySelector("#busqueda")
    busc.insertAdjacentHTML ("afterbegin", 
    '<section id="cards-busc">' +
      '<div><img src="http://image.tmdb.org/t/p/w5001008042" alt=""></div>' + 
      /* '<a href="./peliculas.html"><img src="http://image.tmdb.org/t/p/w500' + resultados[i].backdrop_path + '" alt=""></a>' + */
      '<p style="margin:1.5em; "><span style="font-variant:small-caps; font-size:1em; font-weight:bold;">Resumen </span>: jdasksdjaskldjaskdjasjdasdlasdjlasjdlasjdasd</p>' +
      /* '<p style="color:red;"> '+  idPelis +'</p>' + */
    '</section>')



    //cancelo evento automatico links
    /* let links = document.querySelectorAll("#cards a")
    links.forEach(links =>{
      links.addEventListener("click", e =>{
        e.preventDefault()
      } )
    }) */

    let imgPeliculas = document.querySelectorAll("#cards img")
    console.log(imgPeliculas)         
    for (j=0; j < imgPeliculas.length; j++){
      imgPeliculas[j].addEventListener("click", function(){
       // this.style.border = "5px solid black" 
        idPelis = this.id
        console.log(idPelis)
      })
    }

    if (typeof(Storage) !== "undefined") {
      // Store
      localStorage.setItem("id", idPelis);
      // Retrieve
     //document.getElementById("result").innerHTML = localStorage.getItem("lastname");


    } 
})


//if (busqueda) div busq idPelis





































  //'https://api.themoviedb.org/3/movie/968051?language=es?api_key=da2bc34b7d1c815449e218aadeea9272'
 // 'https://api.themoviedb.org/3/movie/343611?language=es&api_key=da2bc34b7d1c815449e218aadeea9272'

