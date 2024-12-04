let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
        });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = " letter out";
        },i * 80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText()
setInterval(changeText,3000)




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


