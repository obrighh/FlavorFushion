// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Create contact message object
            const contactMessage = {
                name: name,
                email: email,
                message: message,
                timestamp: new Date().toISOString()
            };
            
            // Save to localStorage
            const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
            messages.push(contactMessage);
            localStorage.setItem('contactMessages', JSON.stringify(messages));
            
            // Reset form
            contactForm.reset();
            
            // Show confirmation
            alert('Thank you for your message! We will get back to you soon.');
        });
    }
});
