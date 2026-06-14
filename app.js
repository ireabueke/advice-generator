const advice = document.querySelector("#advice");
const adviceId = document.querySelector("#advice-id");

const dice = document.querySelector(".dice").addEventListener("click", (e) => {
  adviceId.textContent = `Loading...`;
  advice.textContent = `Loading...`;
  fetch("https://api.adviceslip.com/advice", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((slip) => {
      adviceId.textContent = `Advice #${slip.slip.id}`;
      advice.textContent = slip.slip.advice;
      console.log(slip.slip.id, slip.slip.advice);
    });
});
