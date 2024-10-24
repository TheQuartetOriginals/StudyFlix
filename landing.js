const emailInput = document.getElementById('email');
const form = document.querySelector('.email_signup');

form.addEventListener('submit', (e) => {
    const emailValue = emailInput.value;
    if (!validateEmail(emailValue)) {
        e.preventDefault(); 
        showError('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function showError(message) {
    const errorElement = document.createElement('p');
    errorElement.innerText = message;
    errorElement.classList.add('error-message');
    document.body.appendChild(errorElement);
}



const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



const accordionItems = document.querySelectorAll('.accordion li');

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        accordionItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScrollAnimation() {
    const elements = document.querySelectorAll('.hidden-on-start');
  
    elements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('scroll-in');
      }
    });
  }
  
  window.addEventListener('scroll', handleScrollAnimation);
  
  document.addEventListener('DOMContentLoaded', handleScrollAnimation);
  
