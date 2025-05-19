Form Validation Project
This project demonstrates a client-side form validation implementation using HTML and JavaScript with regular expressions (regex).
Overview
The project consists of two main files:

regex.html: Contains the form structure and styling
regex.js: Handles form validation using regular expressions

File Structure
project/
├── regex.html
├── regex.js
├── style.css (referenced but not included)
└── hello/
    └── script.js (referenced but not loaded)
How It Works
HTML Form (regex.html)
The HTML file creates a form with various input fields, each requiring validation:

Email - Validates email addresses
Website URL - Ensures valid URL format
Phone Number - Validates phone number format like (123) 456-7890
Credit Card - Validates credit card number format
Time - Uses HTML5 time input format
HTML Tags - Validates simple HTML tag format
Hashtag - Ensures proper hashtag format
Currency - Validates currency format with dollar sign

The form uses Bootstrap 5 for styling and responsive design.
JavaScript Validation (regex.js)
The JavaScript file handles validation in real-time as users type, using regular expressions for each field type:
Regular Expression Patterns
FieldPatternExampleEmail/^[\w.-]+@[\w-]+\.[a-z]{2,}$/name@example.comURL/^(https?:\/\/)?([\w.-]+\.[a-z]{2,})(\/\S*)?$/https://www.example.comPhone/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/(123) 456-7890Credit Card/^\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}$/1234 5678 9012 3456HTML Tags/^<\w+(?:\s+\w+="[^"]*")?\s*\/?>$/i<p>, <div>Hashtag/^#[\w]+$/#exampleCurrency/^\$\d+(\.\d{2})?$/$19.99
Validation Process

User inputs data into a field
The input event listener triggers validation
The validateInput() function checks if the input matches its corresponding regex pattern
If validation fails, an error message is displayed below the input field
When the form is submitted, all fields are validated again
Form submission only proceeds if all validations pass

Error Handling

Errors are displayed in real-time as users type
Error messages appear directly beneath the invalid field
The form cannot be submitted until all validation errors are fixed

Usage

Open regex.html in a web browser
Fill out the form fields according to the expected formats
Observe real-time validation feedback
Submit the form when all fields are valid

Browser Compatibility
This form validation works in all modern browsers that support:

ES6 JavaScript
Regular expressions
DOM manipulation
Event handling# alu_regex-data-extraction--tgabin1-
