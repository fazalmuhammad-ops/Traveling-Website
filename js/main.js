const b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
if(b){b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)})}
const f=document.getElementById('contact-form');
if(f){
const q=new URLSearchParams(location.search).get('package');
if(q){[...f.package.options].forEach(o=>{if(o.text===q)o.selected=true})}
f.addEventListener('submit',e=>{e.preventDefault();
document.getElementById('form-msg').textContent='Thank you, '+f.name.value+'. We will reply to '+f.email.value+' within one working day.';f.reset()})}
