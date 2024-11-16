// Smooth scrolling when clicking nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change navbar color on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#d50000'; // Red color
    } else {
        navbar.style.backgroundColor = '#000'; // Black color
    }
});

// Form validation and submission
document.querySelector('.contact-section form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Validate email format
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Prepare email content
    const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const mailtoLink = `mailto:yca@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;

    // Redirect to mailto link
    window.location.href = mailtoLink;

    // Optionally, reset the form after submission
    this.reset();
});

// Like functionality
document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
        const postCard = button.closest('.post-card');
        const likeCount = postCard.querySelector('.like-count');
        let count = parseInt(likeCount.textContent) || 0;
        count += 1; // Increment the like count
        likeCount.textContent = `${count} Likes`;
    });
});

// Comment functionality
document.querySelectorAll('.comment-button').forEach(button => {
    button.addEventListener('click', () => {
        const postCard = button.closest('.post-card');
        const commentInput = postCard.querySelector('.comment-input');
        const commentsDisplay = postCard.querySelector('.comments-display');
        const commentText = commentInput.value.trim();

        if (commentText) {
            const commentDiv = document.createElement('div');
            commentDiv.textContent = commentText;
            commentsDisplay.appendChild(commentDiv);
            commentInput.value = ''; // Clear the input
        }
    });
});
