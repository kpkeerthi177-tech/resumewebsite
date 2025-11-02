$(document).ready(function () {
  $("#contactForm").submit(function (e) {
    e.preventDefault();

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let subject = $("#subject").val().trim();
    let message = $("#message").val().trim();

    if (name === "" || email === "" || subject === "" || message === "") {
      $("#status").text("All fields are required!").css("color", "red");
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      $("#status").text("Enter a valid email address.").css("color", "red");
      return;
    }

    $("#status").text("Message sent successfully!").css("color", "green");
    $("#contactForm")[0].reset();
  });
});
