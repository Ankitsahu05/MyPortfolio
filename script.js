
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

// Get the form element
const form = document.querySelector('form');

// Get the submit button element
const submitButton = document.getElementById('submit-button');

// Add an event listener to the submit button
submitButton.addEventListener('click', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Format the form data as a string
  const formattedFormData = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nMessage: ${formData.get('message')}`;
  
  // Redirect to a mailto link that contains the formatted form data in the email body
  window.location.href = `mailto:ankitsahu999bc@gmail.com?subject=Form Submission&body=${encodeURIComponent(formattedFormData)}`;
});
