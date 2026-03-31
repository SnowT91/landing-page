function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
    
}