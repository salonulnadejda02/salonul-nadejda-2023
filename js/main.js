new SimpleLightbox({elements: '.container-galerie a' });

emailjs.init("KEb6eb5a9RmlK8xHa");

function send() {

if (document.getElementById("formular").checkValidity() ==false){
    document.getElementById("formular").reportValidity(); return; 

}

var date = {
    nume: document.getElementById("nume").value,
    email: document.getElementById("email").value, 
    mesaj: document.getElementById("mesaj").value
};

emailjs.send("service_okrhvel", "template_keffimk", date)
     .then(function (raspuns) {
        alert("Mesajul a fost transmis.")
        document.getElementById("formular").reset(); 
     }, function (error) {
       alert("Eroare la transmitere. Contactati programatorul.")
    })
}