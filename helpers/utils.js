import ffmpeg from "ffmpeg-static";

async function generateThumbnail(fileName, videoUrl) {
  const name = `${fileName}.jpg`;

  await ffmpeg(videoUrl).takeScreenshots({
    filenames: [name],
    folder: "./public/thumbnails/",
    timemarks: ["00:00:01.000"],
  });

  return fileName;
}

export { generateThumbnail };
