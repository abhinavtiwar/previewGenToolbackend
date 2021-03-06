const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);

ffmpeg("video.mp4")
  .setStartTime("00:00:20")
  .setDuration("5")
  .output("video_out.gif")
  .on("end", function (err) {
    if (!err) {
      console.log("conversion Done");
    }
  })
  .on("error", function (err) {
    console.log("error: ", err);
  })
  .run();

