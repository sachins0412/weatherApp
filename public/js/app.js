const weatherForm = document.querySelector("form");
const address = document.querySelector("input");

const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  messageOne.textContent = "Loading";
  messageTwo.textContent = "";
  fetch(`http://localhost:3000/weather?address=${address.value}`).then(
    (res) => {
      res.json().then((response) => {
        if (response.error) {
          messageOne.textContent = response.error;
        } else {
          messageOne.textContent = response.location;
          messageTwo.textContent = response.forecast;
        }
      });
    }
  );
});
