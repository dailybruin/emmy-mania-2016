function articles(index) {
  $.ajax({
    dataType: "json",
    url: "https://spreadsheets.google.com/feeds/list/1WrNJOuYK1NtCGonvwEpkIUF6XIBAZGw6xmKHuGKRn9Y/od6/public/values?alt=json",
    success: function(data) {
      data = data.feed.entry;
      console.log(data);
      var source = $("#handlebars-articles").html();
      var template = Handlebars.compile(source);

      var html = template(data[index]);
      var indexString = index.toString();
      var idPlusIndex = "#emmy-mania-week-" + indexString;
      console.log(idPlusIndex);
      $(idPlusIndex).replaceWith(html);
    }
  });
}

function changeZIndex() {
  document.getElementById("check").style.zIndex = 0;
  document.getElementById("emmy-mania-changed").style.zIndex = 2;
  document.getElementById("article-link").style.zIndex = 2;
}

$(document).ready(function() {
});
