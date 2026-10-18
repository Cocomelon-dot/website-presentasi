const track = document.getElementById('teacherTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
  track.scrollLeft -= 180; 
});

nextBtn.addEventListener('click', () => {
  track.scrollLeft += 180; 
});

let isDown = false;
let startX;
let scrollLeft;

track.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});

track.addEventListener('mouseleave', () => {
  isDown = false;
});

track.addEventListener('mouseup', () => {
  isDown = false;
});

track.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 1.5; 
  track.scrollLeft = scrollLeft - walk;
});