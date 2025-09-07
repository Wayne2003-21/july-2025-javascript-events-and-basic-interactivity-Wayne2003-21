// ===== PART 1: EVENT HANDLING =====

// Click event example
document.getElementById('clickBtn').addEventListener('click', function() {
    document.getElementById('clickOutput').textContent = 'Button was clicked! 🎉';
    setTimeout(() => {
        document.getElementById('clickOutput').textContent = 'Waiting for click...';
    }, 2000);
});

// Mouse events example
const mouseArea = document.getElementById('mouseArea');
const mouseOutput = document.getElementById('mouseOutput');

mouseArea.addEventListener('mouseover', function() {
    mouseOutput.textContent = 'Mouse is over the area!';
});

mouseArea.addEventListener('mouseout', function() {
    mouseOutput.textContent = 'Mouse left the area!';
});

mouseArea.addEventListener('dblclick', function() {
    mouseOutput.textContent = 'Double click detected!';
});

// Keyboard event example
document.getElementById('keyboardInput').addEventListener('input', function(e) {
    document.getElementById('keyboardOutput').textContent = `You typed: ${e.target.value}`;
});

// ===== PART 2: INTERACTIVE ELEMENTS =====

// Dark/Light mode toggle
document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Counter functionality
let count = 0;
const counterValue = document.getElementById('counterValue');

document.getElementById('incrementBtn').addEventListener('click', function() {
    count++;
    counterValue.textContent = count;
});

document.getElementById('decrementBtn').addEventListener('click', function() {
    count--;
    counterValue.textContent = count;
});

// FAQ accordion functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const isActive = answer.classList.contains('active');
        
        // Close all answers
        document.querySelectorAll('.faq-answer').forEach(ans => {
            ans.classList.remove('active');
        });
        
        document.querySelectorAll('.faq-question span').forEach(span => {
            span.textContent = '+';
        });
        
        // Open clicked answer if it wasn't already open
        if (!isActive) {
            answer.classList.add('active');
            this.querySelector('span').textContent = '-';
        }
    });
});

// Tab functionality
const tabButtons = document.querySelectorAll('.tab-btn');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // Remove active class from all buttons and content
        tabButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Add active class to clicked button and corresponding content
        this.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// ===== PART 3: FORM VALIDATION =====

document.getElementById('validationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Name validation (letters and spaces only)
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const nameRegex = /^[a-zA-Z\s]+$/;
    
    if (!nameRegex.test(nameInput.value.trim())) {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Email validation
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(emailInput.value)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Password validation (min 8 chars, 1 uppercase, 1 lowercase, 1 number)
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    
    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    // Confirm password validation
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.style.display = 'block';
        isValid = false;
    } else {
        confirmPasswordError.style.display = 'none';
    }

    // If form is valid, show success message
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        // Reset form after 2 seconds
        setTimeout(() => {
            this.reset();
            document.getElementById('successMessage').style.display = 'none';
        }, 2000);
    }
});

// Real-time validation for better UX
document.getElementById('name').addEventListener('input', function() {
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (nameRegex.test(this.value.trim()) || this.value === '') {
        document.getElementById('nameError').style.display = 'none';
    }
});

document.getElementById('email').addEventListener('input', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(this.value) || this.value === '') {
        document.getElementById('emailError').style.display = 'none';
    }
});

document.getElementById('password').addEventListener('input', function() {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (passwordRegex.test(this.value) || this.value === '') {
        document.getElementById('passwordError').style.display = 'none';
    }
});

document.getElementById('confirmPassword').addEventListener('input', function() {
    const password = document.getElementById('password').value;
    if (this.value === password || this.value === '') {
        document.getElementById('confirmPasswordError').style.display = 'none';
    }
});
