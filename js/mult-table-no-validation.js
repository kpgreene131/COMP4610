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
function submitForm() {

    document.getElementById("validationMessage").innerHTML = "";

    xStart = document.getElementById('pair1number1').value;
    xEnd = document.getElementById('pair1number2').value;
    yStart = document.getElementById('pair2number1').value;
    yEnd = document.getElementById('pair2number2').value;

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

    createMultTable(xStart, xEnd, yStart, yEnd);

    return;
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

    return;
}
