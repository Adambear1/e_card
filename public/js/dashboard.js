document.addEventListener("click", function () {
  fetch("/api/dashboard")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
});
