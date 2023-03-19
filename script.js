
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){ /*jab 
    sidebarGo hoga tab 'ham' ko dikhana h aur 'cross' ko hide karna h */
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.cross').style.display='none'   
    }
    else{
        document.querySelector('.ham').style.display='none'
        /* cross icon ko 'sidebar' aane ke 350 miliseconds ke baad laao*/
        setTimeout(()=>{
            document.querySelector('.cross').style.display='inline'
        }, 250);
    }
})

const form = document.querySelector('form');
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const formattedFormData = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nMessage: ${formData.get('message')}`;

  window.location.href = `mailto:ankitsahu999bc@gmail.com?subject=Form Submission&body=${encodeURIComponent(formattedFormData)}`;
});
