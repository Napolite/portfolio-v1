// Custom cursor logic
let cursor = document.querySelector(".custom-cursor");
let trail = document.querySelector(".cursor-trail");

document.addEventListener("mousemove", (e) => {
  console.log("Mouse moved:", e.clientX, e.clientY);
  const x = e.clientX;
  const y = e.clientY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
  trail.style.left = `${x}px`;
  trail.style.top = `${y}px`;
});
