$("button").hover(
    function () { // Mouse enters
        $(this).css("box-shadow", "5px 5px 15px rgba(0, 0, 0, 10)");
    },
    function () { // Mouse leaves
        $(this).css("box-shadow", "none");
    }
);

$(".but1").on("click",function () {
    window.location.href="com.html"
});

$(".but2").on("click",function () {
    window.location.href="coach.html"
});

$(".but3").on("click",function () {
    window.location.href="event.html"
});

$(".but4").on("click",function () {
    window.location.href="about.html"
});

// Header Authentication Buttons
document.getElementById('headerSignInBtn').addEventListener('click', () => {
    document.getElementById('authModal').style.display = 'block';
    document.getElementById('authTitle').textContent = 'Sign In';
    document.getElementById('authSubmitBtn').textContent = 'Sign In';
    document.getElementById('authSwitchText').textContent = "Don't have an account?";
    document.getElementById('authSwitchBtn').textContent = 'Sign Up';
});

document.getElementById('headerSignUpBtn').addEventListener('click', () => {
    document.getElementById('authModal').style.display = 'block';
    document.getElementById('authTitle').textContent = 'Sign Up';
    document.getElementById('authSubmitBtn').textContent = 'Sign Up';
    document.getElementById('authSwitchText').textContent = 'Already have an account?';
    document.getElementById('authSwitchBtn').textContent = 'Sign In';
});

// Auth Modal Functionality
const authModal = document.getElementById('authModal');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const authTitle = document.getElementById('authTitle');
const authSubmitBtn = document.getElementById('authSubmitBtn');
const authSwitchText = document.getElementById('authSwitchText');
const authSwitchBtn = document.getElementById('authSwitchBtn');
const closeModal = document.querySelector('.close-modal');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');

let isSignIn = true;

// Toggle between Sign In and Sign Up forms
function toggleAuthMode() {
    isSignIn = !isSignIn;
    signInForm.style.display = isSignIn ? 'block' : 'none';
    signUpForm.style.display = isSignIn ? 'none' : 'block';
    authTitle.textContent = isSignIn ? 'Sign In' : 'Sign Up';
    authSubmitBtn.textContent = isSignIn ? 'Sign In' : 'Sign Up';
    authSwitchText.textContent = isSignIn ? "Don't have an account?" : "Already have an account?";
    authSwitchBtn.textContent = isSignIn ? 'Sign Up' : 'Sign In';
}

// Close modal
closeModal.addEventListener('click', () => {
    authModal.style.display = 'none';
    clearMessages();
});

// Switch between Sign In and Sign Up
authSwitchBtn.addEventListener('click', toggleAuthMode);

// Handle form submission
document.getElementById('authForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    clearMessages();

    if (isSignIn) {
        // Handle Sign In
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            // Add your authentication logic here
            showSuccessMessage('Sign in successful!');
            setTimeout(() => {
                authModal.style.display = 'none';
                clearMessages();
            }, 2000);
        } catch (error) {
            showErrorMessage(error.message);
        }
    } else {
        // Handle Sign Up
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('regEmail').value;
        const phone = document.getElementById('phone').value;
        const dob = document.getElementById('dob').value;
        const gender = document.getElementById('gender').value;
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validate passwords match
        if (password !== confirmPassword) {
            showErrorMessage('Passwords do not match');
            return;
        }

        try {
            // Add your registration logic here
            showSuccessMessage('Registration successful! Please check your email to verify your account.');
            setTimeout(() => {
                authModal.style.display = 'none';
                clearMessages();
            }, 2000);
        } catch (error) {
            showErrorMessage(error.message);
        }
    }
});

// Helper functions
function showErrorMessage(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function showSuccessMessage(message) {
    successMessage.textContent = message;
    successMessage.style.display = 'block';
}

function clearMessages() {
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === authModal) {
        authModal.style.display = 'none';
        clearMessages();
    }
});