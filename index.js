function sendMail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  // Add this line to get the selected file
  var fileInput = document.getElementById("file");
  var file = fileInput.files[0];

  if (name === "" || email === "" || message === "" || !file) {
    document.querySelector('.error-message').innerText = 'Please fill in all fields and select a PDF file.';
    document.querySelector('.error-message').style.display = 'block';
    return;
  }

  var params = {
    name: name,
    email: email,
    message: message,
    file: file
  };

  const serviceID = "service_rx7xzdc";
  const templateID = "template_ax92u6f";

  // Add the file to the params object
  params.file = file;

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      // Reset form fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("file").value = ""; // Clear the file input
      document.querySelector('.sent-message').style.display = 'block';
      document.querySelector('.error-message').style.display = 'none';
    })
    .catch(err => {
      console.log(err);
      document.querySelector('.error-message').innerText = 'Failed to send message. Please try again later.';
      document.querySelector('.error-message').style.display = 'block';
      document.querySelector('.sent-message').style.display = 'none';
    });
}
