// Basic interactions: show current year, fake contact submit
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const msg = document.getElementById('formMessage');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if(!name || !email || !message){
    msg.style.color = 'crimson';
    msg.textContent = 'Please fill all fields.';
    return;
  }
  // Simulate send (you can integrate email API or formspree)
  msg.style.color = 'green';
  msg.textContent = 'Thank you! Your message has been received.';
  form.reset();
});
