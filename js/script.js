
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
console.log( "cityName = '%s'", cityName );
    var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + cityName + "&begin_date=20160101&api-key=0c6372ba731e44579e05aaaa09f02b4f";
    $.getJSON(url,function(data){
      articles = data.response.docs;
      $nytHeaderElem.text('New York Times Articles About' + " " + cityName);
      var item = [];
      $.each( articles, function( key, val ) {
          item.push( '<li class="articles">'+'<a href="'+val.web_url+'">'+val.headline.main+'</a>'+'<p>'+val.snippet+'</p>'+'</li>');
          $nytElem.append(item);
      });
  });

    return false;
}

$('#form-container').submit(loadData);
