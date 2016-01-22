(function() {

  function displayData(data) {
    var html = "";
    var count = 0;
    var saveForHover = [];
    for (var prop in data) {
      if (count % 5 === 0 ) {
        html += "</div>";
        html += "<div class='row'>";
      }

      html += "<div class='col-lg-2 col-md-2 col-xs-12 display'>";
      html += "<a href='"+data[prop].link+"'>";
      html += "<img class='img-responsive' src='"+data[prop].author.picture+"'>";
      html += (data[prop].headline.length > 20) ? "<p id='headline' class='headline_"+count+"'>" + data[prop].headline.slice(0,20) + "...</p></a>" : "<p id='headline'class='headline_'"+count+"'>"+ data[prop].headline+"</p></a>"      ;
      saveForHover.push(data[prop].headline); 
      html += "<p>By: " + "<a href='"+ data[prop].link+"'>" +  data[prop].author.username + "</a></p>";
      html += "<p class='bottom fa  fa-heart'> " + data[prop].rank + "</p>";
      html+= "<p class='bottom'> Posted on:" + new Date(1453286131735).toDateString() + "</p>";
      html += "</div>";
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
