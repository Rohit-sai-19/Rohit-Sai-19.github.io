document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var dob = document.getElementById('dob').value;
    var acceptTerms = document.getElementById('acceptTerms').checked;
    var currentDate = new Date();
    var birthDate = new Date(dob);
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    
    if (age >= 18 && age <= 55) {
        var entriesContainer = document.getElementById('entries');
        var entry = document.createElement('div');
        entry.className = 'entry';
        entry.innerHTML =
            '<div class="entry-info">' +
            '<span>' + name + '</span>' +
            '<span>' + email + '</span>' +
            '<span>' + password + '</span>' +
            '<span>' + dob + '</span>' +
            '<span>' + (acceptTerms ? 'Yes' : 'No') + '</span>' +
            '</div>';
        entriesContainer.appendChild(entry);
        document.getElementById('registrationForm').reset();
    } else {
        alert('Age must be between 18 and 55 years.');
    }
});

