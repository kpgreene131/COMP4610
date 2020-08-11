(function($){
    var sliderOpts = {

       // set min and max values for sliders
        min: -50,
        max: 50,
        value: 0,

        // whenever a slider is moved, we want to update the numbers seen
        // in the form inputs
        slide: function() {
            var xStart = $("#xStartSlider").slider("value"),
                xEnd = $("#xEndSlider").slider("value"),
                yStart = $("#yStartSlider").slider("value"),
                yEnd = $("#yEndSlider").slider("value");

            $("#pair1number1").val(xStart);
            $("#pair1number2").val(xEnd);
            $("#pair2number1").val(yStart);
            $("#pair2number2").val(yEnd);

            // we also want to remake the table
            submitForm();
        }
    };

    $("#xStartSlider, #xEndSlider, #yStartSlider, #yEndSlider").slider(sliderOpts);

    $("#myTabs").tabs();

    $("#timesTableForm").submit(function(event) {
         // Grab table parameters
          xStart = $("#pair1number1").val();
          xEnd = $("#pair1number2").val();
          yStart = $("#pair2number1").val();
          yEnd = $("#pair2number2").val();
          if(xStart > xEnd) {
              var temp = xStart;
              xStart = xEnd;
              xEnd = temp;
          }
          if(yStart > yEnd) {
              var temp = yStart;
              yStart = yEnd;
              yEnd = temp;
          }

          // String for table parameters, will act as tab header
          var tableParams = "(" + xStart + "," + xEnd + ")x(" + yStart + "," + yEnd + ")";

          // Grab current table element
          var multTable = document.getElementById("multTable").outerHTML;


          // Add new tab index for this table, titled with parameters
          $("div#myTabs ul").append("<li><a href=\"#" + tableParams + "\">" + tableParams + "</a></li>");
          $("div#myTabs").append("<div id=\"" + tableParams + "\">" + multTable + "</div>");

          $("#myTabs").tabs("refresh");

          event.preventDefault();
      });
})(jQuery);



// The following 4 functions are set off when any of the form inputs are changed.
// When a user types a number in the form, the corresponding slider will move to
// the correct point.
// The table is also remade
$("#pair1number1").change(function() {
    var formValue = $("#pair1number1").val();
    $("#xStartSlider").slider('value', formValue);

    submitForm();
})

$("#pair1number2").change(function() {
    var formValue = $("#pair1number2").val();
    $("#xEndSlider").slider('value', formValue);

    submitForm();
})

$("#pair2number1").change(function() {
    var formValue = $("#pair2number1").val();
    $("#yStartSlider").slider('value', formValue);

    submitForm();
})

$("#pair2number2").change(function() {
    var formValue = $("#pair2number2").val();
    $("#yEndSlider").slider('value', formValue);

    submitForm();
})
