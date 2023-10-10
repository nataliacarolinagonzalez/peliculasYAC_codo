$.getJSON("https://api.themoviedb.org/3/trending/movie/day?language=es&api_key=da2bc34b7d1c815449e218aadeea9272", function (data){
    let rdoCatalogo = data.results
    console.log(rdoCatalogo) 
    
    for(let i=0; i<rdoCatalogo.length; i++) {
        document.querySelector('.cards-container-catalogo').insertAdjacentHTML ("afterbegin", 
            '<section id="cards">' +
              '<h2 style="font-variant:small-caps; margin:1.5em;"> '+ rdoCatalogo[i].title +'</h2>'+
              '<div><img id="' +rdoCatalogo[i].id + '" src="http://image.tmdb.org/t/p/w500' + rdoCatalogo[i].backdrop_path + '" alt=""></div>' + 
              /* '<a href="./peliculas.html"><img src="http://image.tmdb.org/t/p/w500' + rdoCatalogo[i].backdrop_path + '" alt=""></a>' + */
              /* '<p style="margin:1.5em; "><span style="font-variant:small-caps; font-size:1em; font-weight:bold;">Resumen </span>: '+  rdoCatalogo[i].overview +'</p>' + */
              /* '<p style="color:red;"> '+  idPelis +'</p>' + */
            '</section>')            
    } 
})







































  //'https://api.themoviedb.org/3/movie/968051?language=es?api_key=da2bc34b7d1c815449e218aadeea9272'
 // 'https://api.themoviedb.org/3/movie/343611?language=es&api_key=da2bc34b7d1c815449e218aadeea9272'

