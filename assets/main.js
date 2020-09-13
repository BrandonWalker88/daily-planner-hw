var time = moment();
$("#currentDay").text(time.format("MMM Do YYYY"));
var currentTime = moment().hour();
var nineAm = $("#9am-text");
nineAm = 9;
var tenAm = $("#10am-text");
tenAm = 10;
var elevenAm = $("#11am-text");
elevenAm = 11;
var twelveAm = $("#12am-text");
twelveAm = 12;
var onePm = $("#1pm-text");
onePm = 1;
var twoAm = $("#2pm-text");
twoPm = 2;
var threeAm = $("#3pm-text");
threePm = 3;
var fourPm = $("#4pm-text");
fourPm = 4;
var nineAm = $("#5pm-text");
fivePm = 5;
if (currentTime > nineAm) {
  $("#9am-text").addClass("past");
} else if (currentTime === nineAm) {
  $("#9am-text").addClass("present");
} else if (currentTime > nineAm) {
  $("#9am-text").addClass("future");
}
