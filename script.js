$(function () {
  $("#videoBox").hide();

  $("#bgBtn").on("click", function () {
    $("body").toggleClass("alt-bg");
  });

  $("#imgBtn").on("click", function () {
    $("#missionImage").slideToggle(200);
  });

  $("#audioBtn").on("click", function () {
    const audio = $("#storyAudio").get(0);
    if (audio.paused) audio.play();
    else audio.pause();
  });

  $("#videoBtn").on("click", function () {
    $("#videoBox").slideToggle(200, function () {
      const video = $("#habitatVideo").get(0);
      if ($(this).is(":visible")) video.play();
      else {
        video.pause();
        video.currentTime = 0;
      }
    });
  });
});

