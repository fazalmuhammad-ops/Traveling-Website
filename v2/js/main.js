const b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
if(b)b.addEventListener('click',()=>{b.setAttribute('aria-expanded',n.classList.toggle('open'))});
const f=document.getElementById('contact-form');
if(f){const q=new URLSearchParams(location.search);
const p=q.get('package');if(p)[...f.package.options].forEach(o=>{if(o.text===p)o.selected=true});
if(q.get('days'))f.message.value='I would like a trip of about '+q.get('days')+' days.';
f.addEventListener('submit',e=>{e.preventDefault();document.getElementById('form-msg').textContent='Thank you, '+f.name.value+'. Our team will email '+f.email.value+' within one working day.';f.reset()})}
