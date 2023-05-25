var dateDisplayEl = $("#currentDay");
var timeDisplayEl = $("#currentTime");
var currentHour = dayjs().format("H:mm:ss")

var workHours = [
  (hour9El = $("#hour-9")),
  (hour10El = $("#hour-10")),
  (hour11El = $("#hour-11")),
  (hour12El = $("#hour-12")),
  (hour13El = $("#hour-13")),
  (hour14El = $("#hour-14")),
  (hour15El = $("#hour-15")),
  (hour16El = $("#hour-16")),
  (hour17El = $("#hour-17")),
];


// set the interval time for the dayjs code to show a live clock that counts up

$(function() {
  function updateTime() {
      var now = dayjs();
      timeDisplayEl.text(now.format("dddd MMM D, YYYY h:mm:ssa"));
  }
  updateTime();
  setInterval(updateTime, 1000);
});

// when the save button is clicked, the text value is saved to the local storage

$(".saveBtn").on("click", function() {
  var timeBlockId = $(this).parent().attr("id");
  var textValue = $(this).siblings("textarea").val();
  
  
  
  localStorage.setItem(timeBlockId, textValue);
  
});

var currentHour = dayjs().format("H");

$(".time-block").each(function() {
      var timeBlockId = $(this).attr("id");
      var timeBlockHour = timeBlockId.split("-")[1];
      
      if (timeBlockHour < currentHour) {
        // if the current time of day is X, then make all previous hours gray
        $(this).removeClass("present future").addClass("past");
      } else if (timeBlockHour === currentHour) {
        // if the current time of day is X, then make it red
        $(this).removeClass("past future").addClass("present");
      } else {
        // if the current time of day is X, then make all future hours green
        $(this).removeClass("past present").addClass("future");
      }
    });
    
    
    // grab the text input from the timeBlock ID after it's been saved to local storage and display it within the textarea class
    
    $(".time-block").each(function() {
      var timeBlockID = $(this).attr("id");
      var textInput = localStorage.getItem(timeBlockID);
    
      if (textInput) {
        $(this).find("textarea").val(textInput);
      }
    }
    )