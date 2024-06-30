let Form = document.querySelector("form");
let SenderName = document.getElementById("name");
let phone_number = document.getElementById("phone_number");
let SenderEmail = document.getElementById("email");
let message = document.getElementById("message");



let sendEmail = () => {
    const FormBody = `
        <h1>Customer Name : ${SenderName.value}</h1>
        <h3>Customer Phonenumber : ${phone_number.value}</h3>
        <h3>Customer Email : ${SenderEmail.value}</h3>
        <h3>Customer Message : ${message.value}</h3>`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "mirak7170@gmail.com",
    Password: "E8F9EA91FC295BEE0CF4536BABBE1DD67AB3",
    To: "mirak7170@gmail.com",
    From: "mirak7170@gmail.com",
    Subject: "Mira4k",
    Body: `${FormBody}`,
  }).then(
       message => {
        if(message == "OK"){
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully",
            icon: "success"
          });
         }
         else{
          Swal.fire({
            icon: "error",
            title: "Oops...Please try agian later",
            text: "Something went wrong!",
          });
         }
       }
    );
};

Form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
