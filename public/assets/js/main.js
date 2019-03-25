
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    // devour on Click.
    $(".devour").on("click", function(event) {
        var id = $(this).data("id");

        var makeDevoured = $(this).data("devoured");

        var devouredState = {
            devoured: makeDevoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        })
        .then(
            function() {
                console.log("changed devoured to", makeDevoured);
                // Reload the page to get the updated list.
                location.reload();
            }
        );
    });

    // addBurgerForm on Submit.
    $(".addBurgerForm").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        
        // Call placeOrder Function
        placeOrder();
    });

    // addBurgerForm on Enter.
    $(".addBurgerForm").keypress(function (e) {
        if (e.which == 13) {
            // Call placeOrder Function
            placeOrder();

            return false;
        }
    });

    function placeOrder(){
        var newBurger = {
            burger_name: $("#burger_name").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        })
        .then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list.
                location.reload();
            }
        );
    }
});
