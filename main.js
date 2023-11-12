let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #7f321a">Tienda de descuentos Online.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();