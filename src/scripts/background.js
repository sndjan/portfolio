const background = document.getElementById('background');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  
  const maxX = window.innerWidth;
  const maxY = window.innerHeight;
  
  const posX = (mouseX / maxX) * 100; // Convert mouse X position to percentage
  const posY = (mouseY / maxY) * 100; // Convert mouse Y position to percentage
  
  // Set the background position using CSS variables
  background.style.setProperty('--x', `${posX}%`);
  background.style.setProperty('--y', `${posY}%`);
});