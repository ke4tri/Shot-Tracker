

const inputListen = () => {
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      let value = $(this).val().toLowerCase();
      $("#available .delete").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

};

// $(document).ready(function(){
//   $("#myInput").on("keyup", function() {
//     let value = $(this).val().toLowerCase();
//     $("#available .delete").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
//   });
// });

export {inputListen}