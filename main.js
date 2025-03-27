const canvas = document.getElementById("myCanvas");

const cellSize = 9;
const ctx = canvas.getContext("2d");

const video = document.createElement("video");
video.src = "badApple.mp4";
video.volume = 0.05;
video.play();

const play = () => {}

video.addEventListener("loadeddata", () => {
  canvas.width = 1680;
  canvas.height = 720;
  animate();
});

function animate() {
  const { width, height } = canvas;

  ctx.font = cellSize + "px Arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  /* ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);

  // circle animating

  const time = Date.now() / 10000;
  const x = width * Math.sin(time) ** 2;
  const y = height / 2;
  const radius = 100;

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
  */

  ctx.drawImage(video, 0, 0, width, height);

  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);

  const step = cellSize;

  for (let x = 0; x < width; x += step) {
    for (let y = 0; y < height; y += step) {
      const i = (y * width + x) * 4;
      if (data[i] == 0) {
        ctx.fillText("🍎", x, y);
      }
    }
  }

  requestAnimationFrame(animate);
}
