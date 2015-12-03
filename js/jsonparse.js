$(document).ready(function() {
  for(var i = 0; i < window.users.length; i++) {
    var newCol = buildThumbnails(window.users[i]);
    $(".row").append(newCol);
  }

  function buildThumbnails(userData) {
    var colDiv = $("<div>").addClass("col-md-3");
    var thumbnailDiv = $("<div>").addClass("thumbnail");
    var userImg = $("<img>").attr("src", "http://a0.twimg.com/images/themes/theme1/bg.png" + userData.id);

    colDiv.append(thumbnailDiv);

    return colDiv;
}
});