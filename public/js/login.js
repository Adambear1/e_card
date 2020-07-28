$("#submit").click((e) => {
  e.preventDefault();
  $.post(
    "/api/auth",
    {
      email: $("#email").val().trim(),
      password: $("#password").val().trim(),
    },
    (res, err) => {
      if (res) {
        sessionStorage.setItem("email", res.email);
        sessionStorage.setItem("password", res.info);
        window.location.href = "share.html";
      } else {
        console.log(err);
      }
    }
  );
});
