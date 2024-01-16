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



const eventDate = new Date("2024-02-14T00:00:00Z").getTime();

 // Mettre à jour le compte à rebours toutes les secondes
 const countdown = setInterval(function () {
   const currentDate = new Date().getTime();
   const timeLeft = eventDate - currentDate;
   const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
   const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

   // Afficher le compte à rebours dans l'élément avec l'ID "countdown"
   document.getElementById("countdown").innerHTML =
     days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

   // Si le compte à rebours est terminé, afficher un message
   if (timeLeft < 0) {
     clearInterval(countdown);
     document.getElementById("countdown").innerHTML = "L'événement est en cours !";
   }
 }, 1000);