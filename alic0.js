const position_curosr = {
  x: 0,
  y: 0,
};

const alic0 = () => {
  position_curosr.x = window.innerWidth / 2;
  position_curosr.y = window.innerHeight / 2;

  window.addEventListener("mousemove", (event) => {
    position_curosr.x = event.clientX;
    position_curosr.y = event.clientY;
  });

  const element_canvas = document.getElementsByTagName("canvas")[0];

  if (!element_canvas) return;

  const context_canvas = element_canvas.getContext("2d", {
    willReadFrequently: true,
  });

  if (!context_canvas) return;

  context_canvas.fillStyle = "#000000";

  const counts = {
    x: 9,
    y: 5,
  };

  const diameter = Math.min(element_canvas.width, element_canvas.height) / 6;
  const radius = diameter / 2;

  const spacing = {
    x: element_canvas.width / counts.x,
    y: element_canvas.height / counts.y,
  };

  const offset = {
    x: spacing.x / 2,
    y: spacing.y / 2,
  };

  for (let index_x = 0; index_x < counts.x; ++index_x) {
    for (let index_y = 0; index_y < counts.y; ++index_y) {
      context_canvas.moveTo(
        offset.x + spacing.x * index_x,
        offset.y + spacing.y * index_y
      );

      context_canvas.beginPath();

      context_canvas.arc(
        offset.x + spacing.x * index_x,
        offset.y + spacing.y * index_y,
        radius,
        0,
        Math.PI * 2
      );

      context_canvas.closePath();

      context_canvas.fill();
    }
  }

  let data_image;

  const fall = () => {
    data_image = context_canvas.getImageData(
      0,
      0,
      element_canvas.width,
      element_canvas.height
    );

    context_canvas.clearRect(0, 0, element_canvas.width, element_canvas.height);
    context_canvas.putImageData(data_image, 0, 0);

    window.requestAnimationFrame(fall);
  };

  fall();
};

if (document.readyState === "complete") {
  alic0();
} else {
  document.addEventListener("DOMContentLoaded", alic0);
}
