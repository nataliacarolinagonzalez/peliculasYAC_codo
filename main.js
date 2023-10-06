
$.getJSON('https://api.themoviedb.org/3/movie/11?api_key=da2bc34b7d1c815449e218aadeea9272', function (data){
    console.log(data)
    document.querySelector("#titulo").textContent = data.title
    document.querySelector("#resumen").textContent = data.overview
    document.querySelector("#poster").setAttribute("src", "data.poster_path")

})


