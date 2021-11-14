var timeDisplayEl = $('#time-display');




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