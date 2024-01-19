// function submitForm(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "bobyseal@gmail.com",
//         Password : "65AE86233694A164A4329F11D636C0950A95",
//         To : 'sealargha@gmail.com',
//         From : document.getElementById('email').value,
//         Subject : "New Form Entries",
//         Body : "Name: " + document.getElementById('name').value + "<br> Email: " + document.getElementById('email').value
//             + "<br> Message: " + document.getElementById('message').value
//     }).then(
//       message => alert("Message sent successfully")
//     );
// }

function gotowhatsapp() {
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var url = "https://wa.me/917003989928?text=" 
    + "Name: " + name + "%0a"
    + "E-mail: " + email  + "%0a"
    + "Message: " + message; 

    window.open(url, '_blank').focus();
}