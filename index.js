$('document').ready(function() {
    $('#hover-btn').mouseenter(function() {
        $("#result").text("You hovered the button");
    });
    $('#hover-btn').mouseleave(function() {
        $("#result").text("You left the button");
    });
});