function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_rx7xzdc";
  const templateID = "template_ax92u6f";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}



 // Définir la date de fin de l'événement
 const eventDate = new Date("2024-02-14T00:00:00Z").getTime();

 // Mettre à jour le compte à rebours toutes les secondes
 const countdown = setInterval(function () {
   // Obtenir la date actuelle et le temps restant
   const currentDate = new Date().getTime();
   const timeLeft = eventDate - currentDate;

   // Calculer les jours, heures, minutes et secondes restantes
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