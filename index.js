console.log("hello world");

//for reseting values of form to empty after submission of form
const resetForm = (form) => {
    form.reset();
  };


//selecting merchant button
const merchantButton=document.querySelector('#merchant');

//selecting agent button
const agentButton=document.querySelector('#agent');

//selecting merchant form
const merchantForm = document.getElementById('merchantForm');

//selecting agent form
const agentForm = document.getElementById('agentForm');

//merchant button onclicking event
merchantButton.addEventListener('click',()=>{
    merchantForm.style.display = 'block';
    agentForm.style.display = 'none';
    document.querySelector('#create').addEventListener('click', function (e) {
        e.preventDefault();
        console.log("Merchant Values");
        // Get values from the input fields and select elements
        const fullName = document.querySelector('#fullName').value;
        const companyLocation = document.querySelector('#companyLocation').value;
        const businessEmail = document.querySelector('#businessEmail').value;
        const industry = document.querySelector('#industry').value;
        const phoneNumber = document.querySelector('#phoneNumber').value;
        const password = document.querySelector('#password').value;
    
        resetForm(merchantForm);

        // Print values to the console
        console.log('Full Name:', fullName);
        console.log('Company Location:', companyLocation);
        console.log('Business Email:', businessEmail);
        console.log('Industry:', industry);
        console.log('Phone Number:', phoneNumber);
        console.log('Password:', password);
    });
    
})


//agent button onclicking event
agentButton.addEventListener('click',()=>{
    merchantForm.style.display = 'none';
      agentForm.style.display = 'block';
      document.querySelector('#create2').addEventListener('click', function (e) {
        e.preventDefault();
        console.log("Agent Values");
        // Get values from the input fields and select elements
        const fullName = document.querySelector('#fullName2').value;
        const businessEmail = document.querySelector('#businessEmail2').value;
        const phoneNumber = document.querySelector('#phoneNumber2').value;
        const password = document.querySelector('#password2').value;
        resetForm(agentForm);
        // Print values to the console
        console.log('Full Name:', fullName);
        console.log('Business Email:', businessEmail);
        console.log('Phone Number:', phoneNumber);
        console.log('Password:', password);
    });
   
})



