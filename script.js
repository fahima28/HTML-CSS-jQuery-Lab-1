$(function () {
  $("#missionSection").hide();
  $("#videoBox").hide();

  $("#bgBtn").on("click", function () {
    $("body").toggleClass("alt-bg");
  });

  $("#revealMissionBtn").on("click", function () {
    $("#missionSection").slideDown(250);
    $(this).prop("disabled", true).text("Mission Revealed!");
  });

  $("#audioBtn").on("click", function () {
    const audio = $("#storyAudio").get(0);
    if (audio.paused) audio.play();
    else audio.pause();
  });

  $("#showVideoBtn").on("click", function () {
    $("#videoBox").slideDown(250, function () {
      const video = $("#habitatVideo").get(0);
      video.play();
    });
    $(this).prop("disabled", true).text("Video Shown!");
  });
});
