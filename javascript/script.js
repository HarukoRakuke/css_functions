document.addEventListener('DOMContentLoaded', function () {
  const box = document.querySelector('.circle_canvas');
  const canvas = document.querySelector('.section_with_circle1');
  const dot = document.querySelector('.dot');

  canvas.addEventListener('mousemove', function (e) {
    const boundingRect = box.getBoundingClientRect();
    const mouseX = e.clientX - boundingRect.left;
    const mouseY = e.clientY - boundingRect.top;

    let xPercentage = (mouseX / boundingRect.width) * 100;
    let yPercentage = (mouseY / boundingRect.height) * 100;

    if (xPercentage < 13) {
      xPercentage = 13;
    } else if (xPercentage > 87) {
      xPercentage = 87;
    }

    box.style.setProperty('--x', xPercentage + '%');
    box.style.setProperty('--y', yPercentage + '%');
  });
  dot.addEventListener('click', function () {
    const currentState = dot.style.animationPlayState;

    if (currentState === 'paused') {
      dot.style.animationPlayState = 'running'; // Play the animation
    } else {
      dot.style.animationPlayState = 'paused'; // Pause the animation
    }
  });
});
