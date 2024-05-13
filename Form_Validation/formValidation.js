const form = document.getElementById('studentForm');


form.addEventListener('submit', function(event) 
{

    event.preventDefault();
    

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const dob = document.getElementById('dob');
    const phoneNum = document.getElementById('phoneNum');
    const email = document.getElementById('email');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const pincode = document.getElementById('pincode')

    const formData = {
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        dob: document.getElementById('dob').value.trim(),
        phoneNum: document.getElementById('phoneNum').value.trim(),
        email: document.getElementById('email').value.trim(),
        city: document.getElementById('city').value.trim(),
        state: document.getElementById('state').value.trim(),
        pincode: document.getElementById('pincode').value.trim()
    };

    if (!validateFirstname(firstName, 'First Name')) return;
    if (!validateLastname(lastName, 'Last Name')) return;
    if(!validateDob(dob, 'Date of Birth')) return;
    if(!validatePhoneNum(phoneNum, 'Phone Number')) return;
    if(!validateEmail(email, 'Email Id')) return;
    if(!validateCity(city, 'City Name')) return;
    if(!validateState(state, 'State Name')) return;
    if(!validatePincode(pincode, 'Pincode')) return;

        saveFormData(formData);

        // Displaying success message 
        alert('Form submitted successfully!');

        // Reset the form
        form.reset();

        renderSavedData();
    
});


function saveFormData(formData) {
    // Retrieve existing data from local storage (if any)
    const existingData = JSON.parse(localStorage.getItem('studentData')) || [];

    // Add new form data to the array
    existingData.push(formData);

    // Store updated data back into local storage
    localStorage.setItem('studentData', JSON.stringify(existingData));
}


function validateFirstname(input , fieldName) {
    const regex = /^[A-Za-z]+$/; // Regular expression to match only letters

    if (!input.value.trim()) {
        const firstnameError = document.getElementById('firstNameError');
        firstnameError.textContent  = `${fieldName} is required.`;
        return false;
    } else if (!regex.test(input.value.trim())) {
        const firstnameError = document.getElementById('firstNameError');
        firstnameError.textContent  = `${fieldName} should contain only letters.`;
        return false;
    }
    
    return true;
}

function validateLastname(input, fieldName) {

    const regex = /^[A-Za-z]+$/; // Regular expression to match only letters

    const lastnameError = document.getElementById(`${input.id}Error`);
    if (!input.value.trim()) {
        
        lastnameError.textContent = `${fieldName} is required.`;
        return false;
    } else if (!regex.test(input.value.trim())) {
        
        lastnameError.textContent = `${fieldName} should contain only letters.`;
        return false;
    }
    
    return true;
}

function validateDob(input, fieldName) {
    
    if (!input.value.trim()) {
        const dobError = document.getElementById(`${input.id}Error`);
        dobError.textContent = `${fieldName} is required.`;
        return false;
    } 

    return true;

}

function validatePhoneNum(input, fieldName) {

    const regex = /^\+91\d{10}$/;

    const phoneNumError = document.getElementById(`${input.id}Error`);

    if (!input.value.trim()) {
        phoneNumError.textContent = `${fieldName} is required.`;
        return false;
    } else if (!input.value.trim().startsWith("+91")) {
        phoneNumError.textContent = `${fieldName} should start with +91.`;
        return false;
    } else if (!regex.test(input.value.trim())) {
        phoneNumError.textContent = `${fieldName} should start with +91 and be followed by 10 digits.`;
        return false;
    }

    return true;
}


function validateEmail(input, fieldName) {

    const regex = /^[^\s@]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

    const emailError = document.getElementById(`${input.id}Error`);

    if (!input.value.trim()) {
        emailError.textContent = `${fieldName} is required.`;
        return false;
    } else if (!regex.test(input.value.trim())) {
        emailError.textContent = `Please enter a valid ${fieldName} in the format example@xyz.abc`;
        return false;
    }

    return true;

}

function validateCity(input , fieldName) {

    const regex = /^[A-Za-z]+$/; // Regular expression to match only letters

    if (!input.value.trim()) {
        const firstnameError = document.getElementById(`${input.id}Error`);
        firstnameError.textContent  = `${fieldName} is required.`;
        return false;
    }

    else if (!regex.test(input.value.trim())) {
        const firstnameError = document.getElementById(`${input.id}Error`);
        firstnameError.textContent  = `${fieldName} should contain only letters.`;
        return false;
    }
    
    return true;

}

function validateState(input , fieldName) {

    const regex = /^[A-Za-z\s]+$/; // Regular expression to match only letters

    if (!input.value.trim()) {
        const firstnameError = document.getElementById(`${input.id}Error`);
        firstnameError.textContent  = `${fieldName} is required.`;
        return false;
    }

    else if (!regex.test(input.value.trim())) {
        const firstnameError = document.getElementById(`${input.id}Error`);
        firstnameError.textContent  = `${fieldName} should contain only letters.`;
        return false;
    }
    
    return true;
    
}

function validatePincode(input, fieldName) {
    // Regular expression to match a 6-digit PIN code
    const regex = /^\d{6}$/;

    const pincodeError = document.getElementById(`${input.id}Error`);

    if (!input.value.trim()) {
        pincodeError.textContent = `${fieldName} is required.`;
        return false;
    } else if (!regex.test(input.value.trim())) {
        pincodeError.textContent = `${fieldName} should be a 6-digit number.`;
        return false;
    }

    return true;
}


function renderSavedData() {
    
    const savedData = JSON.parse(localStorage.getItem('studentData'));

    
    const outputContainer = document.getElementById('savedDataContainer');
    outputContainer.innerHTML = ''; 

    if (savedData && savedData.length > 0) {
        savedData.forEach(student => {
            const studentInfo = document.createElement('div');
            studentInfo.classList.add('student-info');

            
            for (const key in student) {
                const fieldLabel = document.createElement('span');
                fieldLabel.textContent = `${key}: `;
                studentInfo.appendChild(fieldLabel);

                const fieldValue = document.createElement('span');
                fieldValue.textContent = student[key];
                studentInfo.appendChild(fieldValue);

                studentInfo.appendChild(document.createElement('br')); 
            }

            outputContainer.appendChild(studentInfo);
            outputContainer.appendChild(document.createElement('hr')); 
        });
    } else {
        const noDataMessage = document.createElement('p');
        noDataMessage.textContent = 'No student data available.';
        outputContainer.appendChild(noDataMessage);
    }
}


