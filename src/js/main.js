 
 // JOIN PROGRAM
 // When the window is fully loaded including styles, scripts, and images -- FOUC Flash of Unstyled Content
 window.onload = function () {
    // Display the body
    document.body.style.display = 'block';
};

// Changing the Apply Section to Thank you for Applying
// When the window loads, check for the cookie
window.onload = function () {
    var submitButton = document.getElementById('submit-button');
    var applySection = document.getElementById('apply');
    if (getCookie('submitted')) {
        // Change the content of the apply section to the thank you message if the cookie is found
        applySection.innerHTML = `
        <div class="applied">   
        <h1>Thank you for applying.</h1>
            <br>
            <p>You are taking the first big step towards your recovery, we're proud of you.
            Please allow us up to 48 hours to process your application and respond. <br>If we have accept or have an issue with
            your application, we will email you further details.</p></div>`;
    }
};

// Function to get a cookie by name
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Handle form submission
function handleFormSubmit() {
    // Set a cookie for 2 days on form submission
    setCookie('submitted', true, 2);
}






