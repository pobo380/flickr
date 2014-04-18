function drawImg(result) {
  var idx = Math.floor(Math.random()*20+1);
  var newImg = $('<img>').attr({src: result.items[idx].media.m});

  $('#resultArea').append(newImg);
}

$(function () {
  var api_url = 'http://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&jsoncallback=drawImg&tags=';

  $("#searchButton").click(function(evt) {
    var keyword = $('#keyword').val();
    $('body').append($('<script>').attr({src: api_url + keyword}));
  });
});
