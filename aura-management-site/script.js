const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰';});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';}));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('contact-form').addEventListener('submit',event=>{event.preventDefault();const form=event.currentTarget;const data=new FormData(form);const subject=`Demande de contact Aura Management — ${data.get('subject')}`;const body=`Bonjour Aura Management,\n\nNom : ${data.get('name')}\nE-mail : ${data.get('email')}\nSujet : ${data.get('subject')}\n\nMessage :\n${data.get('message')}\n\nCordialement,\n${data.get('name')}`;document.getElementById('form-status').textContent='Votre application e-mail va s’ouvrir avec le message prérempli.';window.location.href=`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;});
