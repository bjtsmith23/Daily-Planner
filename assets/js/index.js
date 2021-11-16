var timeDisplayEl = $('#currentDay');


console.log(moment().hour());
var currentHour = moment().hour();
var textareaEl = $('textarea');
console.log(currentHour);
// console.log(textareaEl);

for (var i = 0; i < textareaEl.length; i++) {
  console.log(textareaEl[i].id);
  if (textareaEl[i].id < currentHour) {
    textareaEl[i].classList.add('past');
} else if (textareaEl[i].id == currentHour) {
    textareaEl[i].classList.add('present');
  } else {
    textareaEl[i].classList.add('future')
  }
}

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  setInterval(displayTime, 1000);

  function saveText(){
    var title = document.getElementById("title_box").value;
    var text = document.getElementById("text_box").value;
    
    document.getElementById("title_space").innerHTML = title;
    document.getElementById("text_space").innerHTML = text;
    
  }
  function br(){
    var actualtext = document.getElementById("text_box").value;
    var processedtext = actualtext + "<br />";
    document.getElementById("text_box").innerHTML = processedtext;
  }