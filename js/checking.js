"use strict";

$(document).ready(function(){
    let movieArray = [];
    let url = " ";
    const moviePosters = () => {
        let loader = `<div class="loading"><img src="img/loading.gif"></div>`;
        $("#container").html(loader);
        fetch(url)
            .then(resp => resp.json())
            .then(movies => {
                movieArray = movies;
                let htmlStr = "";
                let html = "";
                for (let movie of movies) {

                    //creates the dropdown menus for select
                    html += `<option value=${movie.id}>${movie.title}</option>`;

                    //creates movie posters
                    htmlStr += `<div class="posters grow gradient-border"><div>`
                    htmlStr += `<h1 class="title">${movie.title}</h1><div class="genre">${movie.genre}</div><img src=${movie.poster}>`;
                    htmlStr += `<div class="underImgContainer"><div class="rating">${createStars(movie)}</div><div class="director">By: ${movie.director}</div></div>`;
                    htmlStr += `<div class="description">${movie.plot}</div>`;
                    htmlStr += `</div></div>`;
                }

                //pushes created card or dropdown menu to the screen
                console.log(movies)
                $("#container").html(htmlStr);
                $("#selectMenu").html("<option value='-1' selected>Select a movie</option>" + html);
                $("#selectMenu2").html("<option value='-1' selected>Select a movie</option>" + html);
            });
    }
    moviePosters();

    //========Show the edit menu========\\
    $("#showEdit").click(function() {
        $("#editMovie").toggleClass("hidden1");
        $("#selectMenu").toggleClass("hidden1");
    });
    //hide edit menu
    $("#changeMovie").click(function(){
        $("#editMovie").toggleClass("hidden1");
        $("#selectMenu").toggleClass("hidden1");
    })

    //========show the delete menu========\\
    $(".remove-hidden").click(function() {
        $("#selectMenu2").toggleClass("hidden1");
        $("#delete-movie").toggleClass("hidden1");
    });
    //hide delete menu
    $("#delete-movie").click(function(){
        $("#selectMenu2").toggleClass("hidden1");
        $("#delete-movie").toggleClass("hidden1");
    })

    //========show the post menu========\\
    $("#post-id").click(function () {
        $("#postMovie").toggleClass("hidden1");
    });
    //hide post menu
    $("#newMovie").click(function() {
        $("#postMovie").toggleClass("hidden1");
    })

    //when the option selected is changed, update the input fields
    $("#selectMenu").change(function(){
        let target = $(this).val()
        console.log(target);

        //grab info from the json file and populate the input fields
        for (let movie of movieArray) {
            if (movie.id == target) {
                $("#newTitle").val(movie.title);
                $("#newGenre").val(movie.genre);
                $("#newRating").val(movie.rating);
                $("#newDirector").val(movie.director);
                $("#newPlot").val(movie.plot);
            }
        }
    })

    function createStars(movie){
        let html = "";
        for(var i = 0; i < movie.rating; i++){
            html += "<i class=\"fas fa-star\" style='color: yellow'></i>"
        }
        if(movie.rating !== 5){
            for(var j = movie.rating; j < 5; j++){
                html += "<i class=\"fas fa-star\"></i>";
            }
        }
        return html;
    }

    //Edit selected movie
    $("#changeMovie").click(function(){
        let input = $("#selectMenu").val()
        let insert = {
            title: $("#newTitle").val(),
            genre: $("#newGenre").val(),
            rating: $("#newRating").val(),
            director: $("#newDirector").val(),
            plot: $("#newPlot").val()
        }
        let patchOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(insert)
        }
        //PATCH request
        fetch(`${url}/${input}`, patchOptions)
            .then(moviePosters);
    });

    //delete movie
    let deleteOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    $("#selectMenu2").change(function()  {
        let inputVal = $(this).val();
        console.log("hello: " + inputVal);
        $("#delete-movie").click(function() {
            //DELETE request
            fetch(`${url}/${inputVal}`, deleteOptions)
                .then(moviePosters);
        });
    });


    //create a new movie
    $('#newMovie').click((e) => {
        e.preventDefault();

        var addMovie = {
            title: $("#title").val(),
            genre: $("#genre").val(),
            rating: $("#rating").val(),
            director: $("#director").val(),
            plot: $("#plot").val()
        }
        let postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addMovie)
        }
        //POST movie
        fetch(url, postOptions)
            .then(resp => resp.json())
            .then(moviePosters).catch(error => console.log(error))
    });

    //end of document ready
});