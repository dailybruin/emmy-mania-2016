function articles() {
  $.ajax({
    dataType: "json",
    url: "https://spreadsheets.google.com/feeds/list/1WrNJOuYK1NtCGonvwEpkIUF6XIBAZGw6xmKHuGKRn9Y/od6/public/values?alt=json",
    success: function(data) {
      data = data.feed.entry;
      console.log(data);
      var source = $("#handlebars-articles").html();
      var template = Handlebars.compile(source);

      var html = template(data[0]);
      $("#emmy-mania-week-1").replaceWith(html);
    }
  });
}

$(document).ready(function() {
});
