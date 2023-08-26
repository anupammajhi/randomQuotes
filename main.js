function getQuote(){
  $.ajax({
    method:"GET",
    data:{method:"getQuote",lang:"en",format:"jsonp",jsonp:"theQuote"},
    dataType:"jsonp",
    jsonpCallback:"theQuote",
    url:"https://api.forismatic.com/api/1.0/",
    success : function(data){
      $(".quote").html(data.quoteText);
      if(data.quoteAuthor !== ""){
        $(".quoteby").html("- "+data.quoteAuthor);
      }
      else{
        $(".quoteby").html("- Anonymous");
      }

      $("#btn-tweet").click(function(){
        var tweeturl = "https://twitter.com/intent/tweet?text=" + data.quoteText + "%0D- " + data.quoteAuthor + "%0Dvia @anupamfx";
        window.open(tweeturl,"Tweet","width:800,height:800,toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0,resizable=0");
      });

    }
  });
}

$(document).ready(function(){
  $(".main").innerHeight($(window).innerHeight());
  getQuote();
});

$("#btn-next").click(getQuote);
