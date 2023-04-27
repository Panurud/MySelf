function sendEmail(name , message) {

    const subject = "Working by " + name;
    const body = message;
    const recipient = "Panurud.k@gmail.com";
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
}
