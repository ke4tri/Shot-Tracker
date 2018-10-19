
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_list
// https://www.w3schools.com/jquery/jquery_filters.asp

$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      let value = $(this).val().toLowerCase();
      $("#divWrap .delete").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

