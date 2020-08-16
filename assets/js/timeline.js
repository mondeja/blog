$(document).ready(function() {
  var repos = []

  $(".ghbtn").each( function () {
    repos.push($(this).attr('user') + '/' + $(this).attr('repo'));
  })

  for (var i = 0; i < repos.length; i++) {
    $.ajax({
      type: "GET",
      url: "https://api.github.com/repos/" + repos[i],
      tryCount : 0,
      retryLimit : 3,
      async: true,
      dataType: "json",
      success: function (data) {
        //console.log("data", data);

        var repo = $("div[repo='" + data.name + "']")
        repo.find("span[class='star']").html("&nbsp;" + data.stargazers_count);
        repo.find("span[class='fork']").html("&nbsp;" + data.forks_count);
        repo.find("span[class='watchers']").html("&nbsp;" + data.watchers_count);
        //repo.find("span[class='license']").html("&nbsp;" + data.license.spdx_id);
      }
    })
  }
});
