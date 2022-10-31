
//GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// at document load start the next function
// learned from tutor.  This is new
$(document).ready(function() {


// create variable for current day
var currentDayEl = $("#currentDay");


// add current day and time
var today = moment().format("MMMM, Do, YYYY,  h:mm:ss a");
$("#currentDay").text(today);

console.log(today)

//var for current hour from moment
var currentHour = moment().hour();
console.log(currentHour)

//if current hour greater, lessthan or equeal to (past present future)
// Set colors in description element
setColor()
function setColor(){

var timeBlock = $(".description")
timeBlock.each(function() {
    var hour = $(this).attr("id");

    if (currentHour > hour) {
     $(this).addClass("past");   
    }
    else if (currentHour == hour) {
        $(this).addClass("present");
        $(this).removeClass("past");
    }
    else if (currentHour < hour) {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    }
})
}



// save decription to local storage

var saveBtn = $(".saveBtn")
saveBtn.on("click", function(event){
event.preventDefault()
var timeBlockId = $(this).attr("id")
var task = $(this).siblings(".description").val()
localStorage.setItem(timeBlockId, task)
presentTask()
})

//Get saved description from local stoarge
presentTask()
function presentTask() {
    for(var i = 8;i < 18; i++) {
        var task = localStorage.getItem(i)
        $("#" + i + "").text(task)
    }
}

})
