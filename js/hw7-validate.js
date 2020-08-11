/*
File: hw6-validate.js
Kevin Greene, kevin_greene@student.uml.edu
Student of Umass Lowell Computer Science,
in course COMP 4610 GUI Programming I Sec 021
File created: 8/4/2020
Description: This file uses the jquery validation plugin
    to validate my form in the hw6 times table assignment
-->
*/

$(document).ready(function () {
    $("#timesTableForm").validate({
        submitHandler: function (form, event) {
            event.preventDefault();
            saveTable();
        }
    });
})
