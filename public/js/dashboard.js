document.addEventListener("DOMContentLoaded", function () {
  fetch("/api/dashboard")
    .then((res) => {
      const data = res.json();
      console.log(data);
    })
    .catch((err) => console.error(err));
});
