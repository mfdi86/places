function Places(location, date, landmark, food) {
  this.newLocation = location;
  this.newDate = date;
  this.favoriteLandmark = landmark;
  this.favoriteFood = food;
}

Places.prototype.locationDate = function() {
  return this.newLocation + " " + this.newDate ;
}
// user interface logic
 $(function() {
   $("form#places").submit(function(event) {
     event.preventDefault();

     var inputtedNewLocation = $("input#new-location").val();
     var inputtedDateVisited = $("input#date-visited").val();
     var inputtedFavoriteLandmark = $("input#favorite-landmark").val();
     var inputtedFavoriteFood = $("input#favorite-food").val();

     var newPlaces = new Places(inputtedNewLocation, inputtedDateVisited, inputtedFavoriteLandmark, inputtedFavoriteFood);

     $("ul#places").append("<li><span class='contact'>" + newPlaces.locationDate() + "</span></li>");

     $(".contact").last().click(function() {
       $("#show-all").show();
       $("#show-all h2").text(newPlaces.newLocation);
       $(".location").text(newPlaces.newLocation);
       $(".date").text(newPlaces.newDate);
       $(".landmark").text(newPlaces.favoriteLandmark);
       $(".food").text(newPlaces.favoriteFood);
     });

     $("input#new-location").val("");
     $("input#date-visited").val("");
     $("input#favorite-landmark").val("");
     $("input#favorite-food").val("");
   });
 });
