// JavaScript to handle form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Basic validation (ensure both fields are filled)
    if (name && email) {
        alert('Thank you for reaching out, ' + name + '! We will contact you at ' + email);
        document.getElementById('contactForm').reset(); // Reset the form after submission
    } else {
        alert('Please fill out all the fields.');
    }
});

const openModal = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

openModal.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'none' ? 'block' : 'none';
});
