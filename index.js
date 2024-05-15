$(document).ready(function() {
    $("#animate-btn").click(function() {
        $("#target-box").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        }).html("Getting Bigger");
    });

});