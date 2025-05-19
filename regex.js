const form = document.getElementById("sampleForm");

// Validation patterns
const patterns = {
    email: /^[\w.-]+@[\w-]+\.[a-z]{2,}$/,
    url: /^(https?:\/\/)?([\w.-]+\.[a-z]{2,})(\/\S*)?$/,
    phone: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
    creditCard: /^\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}$/,
    htmlTags: /^<\w+(?:\s+\w+="[^"]*")?\s*\/?>$/i,
    hashtag: /^#[\w]+$/,
    currency: /^\$\d+(\.\d{2})?$/
};

// Validate input field
const validateInput = (input) => {
    const pattern = patterns[input.id], value = input.value.trim();
    pattern && !pattern.test(value) ? showError(input, `Invalid ${input.id} format.`) : hideError(input);
};

// Show/hide error message
const showError = (input, message) => {
    let errorDiv = input.nextElementSibling || document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;
    input.after(errorDiv);
};

const hideError = (input) => input.nextElementSibling?.classList.contains("error-message") && (input.nextElementSibling.textContent = "");

// Handle form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if ([...form.querySelectorAll("input")].every(validateInput)) {
        alert("Form submitted successfully!");
        form.submit();
    }
});

// Attach real-time validation
form.querySelectorAll("input").forEach(input => input.addEventListener("input", () => validateInput(input)));
