$(document).ready(function() {
    // Change color of all paragraphs with class "important" on click
    $("#change-color").click(function() {
      $(".important").css("color", "red");
    });
  
    // Add a slide-up effect to the selected list item when hovering
    $("li.selected").hover(function() {
      $(this).slideUp(100).slideDown(100);
    });
  });
  