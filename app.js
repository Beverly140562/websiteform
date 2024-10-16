
function sendMail() {
    event.preventDefault(); // Prevent default form submission

    document.getElementById('loading').style.display = 'flex';

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email_id').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Here you would use emailjs or another service to send the email
    emailjs.send("service_vqsnf7r", "template_ynu4v9d", {
        from_name: fullName,
        from_email: email,
        subject: subject,
        message: message,
    })
    .then(() => {
        document.getElementById('loading').style.display = 'none';
        alert('Email sent successfully!');
    })

    
    .catch((error) => {
        document.getElementById('loading').style.display = 'none';
        console.error('Error:', error);
        alert('Error sending email. Please try again later.');
    });
}
