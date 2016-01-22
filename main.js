(function() {
  
  function displayData(data) {
    var html = "";
    var count = 0;

    for (var prop in data) {
      if (count % 5 === 0 ) {
        html += "</div>";
        html += "<div class='row'>";
      }

      html += "<div class='col-lg-2 col-md-2 col-xs-2 display'>";
      html += "<a href='"+data[prop].link+"'>";
      html += "<img class='img-responsive' src='"+data[prop].author.picture+"'>";
      html += "<h5>"+data[prop].headline+"</h5>";
      html += "<p>By: " + data[prop].author.username + "</p>";
      html += "</a>";
      html += "<p class='bottom'>" + data[prop].rank + "</p>";
      html+= "<p> Posted on:" + new Date(1453286131735).toDateString() + "</p>";
      html += "</div>";
      console.log(data[prop]);
      count +=1;
    }
    $(".main-row").append(html);
  };

  function getData() {
    var url = 'http://www.freecodecamp.com/news/hot';
    $.getJSON(url)
    .success(function(data){ displayData(data)})
    .error(function(){failedCall()});
  };

  getData();
})();
