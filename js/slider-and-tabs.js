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

// This function is called when the form is submitted, it saves the current
// table in a new tab
function saveTable() {
    var multTable = document.getElementById("multTable");
    var myTabs = document.getElementById("myTabs");

    
}
