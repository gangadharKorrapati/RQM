var tweet="https://twitter.com/intent/tweet?text="+'"this is it."-mikel jackson.';
function ran_col() {
    var color = '';
    var letters = ['#7dcc93', '#f76160', '#31355b', '#f8c687', '#21364b', '#E29470', '#66A7D5', '#FA6D68', '#679895'];
    color += letters[Math.floor(Math.random() * letters.length)];
    var elements = document.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type != 'button')
            elements[i].style.background = color;
    }
    $('#words').text("");
    $('#quoter').text("");
    $.getJSON(api, getit, 'jsonp');
}

var api="https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
var getit=function(data){
  if(data.quoteAuthor === "") {
    data.quoteAuthor = "Unknown";
  }
  $('#words').text(data.quoteText);
  $('#quoter').text("-"+data.quoteAuthor+".");
  tweet ="https://twitter.com/intent/tweet?text="+"\""+data.quoteText+"\"-"+data.quoteAuthor;
};

function tweetit(){
    window.open(tweet,"Let's tweet it!", "height=400,width=400");
}
