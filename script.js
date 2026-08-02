// AD Foundation Website Script

document.addEventListener("DOMContentLoaded", function () {

    alert("Welcome to Rakhi Luthra Classes!");

    const form = document.querySelector("form");

    if(form){
        form.addEventListener("submit", function(e){
            e.preventDefault();

            alert("Registration Successful! We will contact you soon.");

            form.reset();
        });
    }

});