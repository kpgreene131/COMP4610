/*
File: mult-table.js
Kevin Greene, kevin_greene@student.uml.edu
Student of Umass Lowell Computer Science,
in course COMP 4610 GUI Programming I Sec 021
File created: 7/29/2020
Description: This is the javascript file for my dynamic times table.
    The functions here will take input from the form on my hw5.html page
    and create a times table with these given ranges. They also check to
    make sure there are no empty inputs.
*/

function readInput() {
    //clear all error messages
    document.getElementById("validationMessage").innerHTML = "";
    document.getElementById('xStartMessage').innerHTML = "";
    document.getElementById('xEndMessage').innerHTML = "";
    document.getElementById('yStartMessage').innerHTML = "";
    document.getElementById('yEndMessage').innerHTML = "";

    // get all values from form
    var xStart = document.getElementById('pair1number1').value;
    var xEnd = document.getElementById('pair1number2').value;
    var yStart = document.getElementById('pair2number1').value;
    var yEnd = document.getElementById('pair2number2').value;

    // we want to check if any input was empty, and not create a table if so
    if(xStart == "" || xEnd == "" || yStart == "" || yEnd == "") {
        // here we put out a message for each input that was empty
        if(xStart == "") {
            document.getElementById('xStartMessage').innerHTML = "Please enter a number here!";
        }
        if(xEnd == "") {
            document.getElementById('xEndMessage').innerHTML = "Please enter a number here!";
        }
        if(yStart == "") {
            document.getElementById('yStartMessage').innerHTML = "Please enter a number here!";
        }
        if(yEnd == "") {
            document.getElementById('yEndMessage').innerHTML = "Please enter a number here!";
        }

    } else { // if no input was empty, we can create the Table

        // If someone puts a number for an end of a range that is lesser than the start,
        // we swap the values and let the user know
        if(xStart > xEnd) {
            var temp = xStart;
            xStart = xEnd;
            xEnd = temp;
            document.getElementById("validationMessage").innerHTML = "Swapping multiplier start and end<br>";
        }
        if(yStart > yEnd) {
            var temp = yStart;
            yStart = yEnd;
            yEnd = temp;
            document.getElementById("validationMessage").innerHTML += "Swapping multiplicand start and end";
        }

        createMultTable(xStart, xEnd, yStart, yEnd); // call table creation function

        document.getElementById("timesTableForm").reset(); // clear the form
    }


}

function createMultTable(xStart, xEnd, yStart, yEnd) {
    var i; // horizontal index
    var j; // vertical index

    var table = '' // create empty table

    for(j = yStart - 1; j <= yEnd; j++) { //iterate through rows, with an extra row at the start for the horizontal "header" row
        table += '<tr>'; //start a new row
        if(j == yStart - 1) { // case for the first row

            table += '<td></td>'; //first element of first row (top right corner) is EMPTY
            for(i = xStart; i <= xEnd; i++) {
                table += '<td>' + i + '</td>'; //for the first row we just need the x values
            }
        } else {
          table += '<td>' + j + '</td>'; // value for "header" of column
          for(i = xStart; i <= xEnd; i++) {
              table += '<td>' + i * j + '</td>'; //for subsequent rows we need the product of x and y values
          }
        }
        table += '</tr>'; // end current row
    }

    // insert the table we created into the html
    document.getElementById("multTable").innerHTML = table;
}

// simple swap functions, a and b will have their values swapped
function swap(a, b) {
    var temp = a;
    a = b;
    b = temp;
}
