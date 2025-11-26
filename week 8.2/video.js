const video = document.getElementById('myVideo');
const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('mouseenter', () => {
  video.play();
});
video.addEventListener('mouseenter', () => {
  video.play();
});
video.addEventListener('mouseleave', () => {
  video.pause();
});