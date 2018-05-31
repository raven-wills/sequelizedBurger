$(function() {
  $(".change-devoured").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newDevouredState = {
      devoured: true
    };
    // // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(function() {
      console.log("changed devoured to", id, newDevouredState);
      //   // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bur")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
