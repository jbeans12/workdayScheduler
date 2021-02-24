//date using moment.js
var currentDate = moment().format("dddd MMMM do YYYY");
$("#currentDay").text(currentDate);

$(document).ready(function() {
    $(".saveBtn").click(function() {
        var descriptionEl = (".description");
        var time = ("id");
        localStorage.setItem(descriptionEl, time);
    })
})


//function to change colors in rows as day progresses
function timeChange() {
    var currentHour = moment().hours();
    $(".form-control").each(function() {
        var plannerHour = parseInt($(this).attr("id"));
        if (plannerHour < currentHour) {
           $(this).addClass("past"); 
        }
        else if (plannerHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}
timeChange();

var hourInterval = setInterval(timeChange, 10000);



