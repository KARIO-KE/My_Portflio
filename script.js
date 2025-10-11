// Editable script for interactivity
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle logic: default to light. Toggle will add/remove 'dark' class on body.
const toggleBtn = document.getElementById('toggleTheme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // store preference
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// load saved theme
(function(){
  const saved = localStorage.getItem('theme');
  if(saved === 'dark') document.body.classList.add('dark');
})();

// Simple contact form handler (dummy - editable to hook into email endpoint)
function submitContact(e){
  e.preventDefault();
  const f = e.target;
  alert('Thank you, ' + f.name.value + '! This is a demo contact form. Edit script.js to connect to your backend or mail service.');
  f.reset();
}

// Smooth scroll for contact links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const id = this.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth'});
  });
});
