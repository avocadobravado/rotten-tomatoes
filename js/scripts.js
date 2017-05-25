// Back end logic

var movieArray = [];

function AddedMovie (movie, year, score) {
  this.movie = movie;
  this.year = year;
  this.score = score;
}

// Front end logic

$(function() {
  var multipleScore = [];

  $("#movie-form").submit(function(event) {
    event.preventDefault();
      var userMovie = $("#movie").val();
      var userYear = parseInt($("#year").val());
      var userScore = parseInt($("#score").val());

      var newMovie = new AddedMovie(userMovie, userYear, userScore);
      movieArray.push(newMovie);
      multipleScore.push(userScore);

// This will add new movie information directly into the table
    $("#results").append("<tr><td>"
      + userMovie + "</td><td>"
      + userYear + "</td><td>"
      + userScore + "</td></tr>");
  });

//When sort button is clicked
  $("#sort").click(function() {

//Empties previous results to show new sorted table
    $("#results").empty();

    var sortedList = movieArray.slice(0);
      sortedList.sort(function(a, b) {
      return b.score - a.score;
    });

    for (i =0; i < sortedList.length; i++) {
      $("#results").append('<tr>' +
      '<td>' + sortedList[i].movie + '</td>' +
      '<td>' + sortedList[i].year + '</td>' +
      '<td>' + sortedList[i].score + '</td>' +
      '</tr>');
    }
  });
});
