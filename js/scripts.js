// Back end logic

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

      multipleScore.push(userScore);

      var newMovie =
      "<tr><td>"
      + userMovie + "</td><td>"
      + userYear + "</td><td>"
      + userScore + "</td></tr>";

      var newScore = new AddedMovie(userMovie, userYear, multipleScore);

// This will empty out the fields each time the form is submitted
      $("#movie-form").each(function(){
        this.reset();
      });

      console.log(newScore);
      console.log(multipleScore);

// This will add new movie information directly into the table
      $("table tbody").append(newMovie);

      // Sorts score
      // var sortedMovies = multipleScore.slice(0);
      multipleScore.sort(function(a, b) {
        return b - a;
      });

      // console.log(sortedMovies);

      $("#sortScoreButton").on("click", function() {
        for (i = 0; i < multipleScore.length; i++) {
          $("table tbody td:nth-child(3)").append( '<tr>' +
            '<td>' + newMovie[i].score + '</td>'
            + '</tr>');
          }
    });
  });
});

// Include a basic form to add new movies to the table. Hint: remember your address book app?
// Tabular data should at minimum include the title of the movie, the year it was released, and of course, its Tomatometer score.
//
// First populate your table, then add a button that sorts each row based on score. Hint: use sort()
// Use CSS to make your app/table look awesome.
