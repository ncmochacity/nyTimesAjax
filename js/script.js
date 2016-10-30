
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    var streetName = $("#street").val();
    var cityName = $("#city").val();
    var address = streetName + ", " + cityName;
    var streetviewURL = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + address + " ";
    $body.append('<img class="bgimg" src="' + streetviewURL + '">');
    // NY Times api
    var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ cityName + '&sort=newest&api-key=0c6372ba731e44579e05aaaa09f02b4f";
    $.getJSON(url,function(data){
      $nytHeaderElem.text('New York Times Articles About' + " " + cityName);
      var item = [];
      $.each( data, function( key, val ) {
          item.push( "<li id='" + key + "'>" + val + "</li>" );
      });
      $nytElem.append('<li class="articles">');
  });

    return false;
}

$('#form-container').submit(loadData);
