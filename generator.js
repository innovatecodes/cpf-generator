let firstDot, secondDot, thirdDot, randomNumber, n1, n2, n3, input;

const button = document.querySelector("button");
input = document.querySelector("input");

button.addEventListener("click", () => {
  if (input.value != "") {
    clearInput();
    input.value = validator();
  } else
    input.value = validator();
})

const validator = function () {
  randomNumber = Math.random() * 10;
  randomNumber = randomNumber.toFixed(10).replace(".", "").toString();

  for (let i = 0; i < randomNumber.length; i++) {
    if (i === 3) {
      firstDot = randomNumber.toString().substring(0, i) + ".";
      n1 = randomNumber.toString().slice(i);
      randomNumber = `${firstDot}${n1}`;
    }

    if (i === 7) {
      secondDot = firstDot + randomNumber.toString().substring(4, i) + ".";
      n2 = randomNumber.toString().slice(i);
      randomNumber = `${secondDot}${n2}`;
    }

    if (i === 11) {
      thirdDot = `${secondDot}${randomNumber.toString().substring(8, i)}-`;
      n3 = randomNumber.toString().slice(i);
      randomNumber = `${thirdDot}${n3}`
    }
  }
  return randomNumber;
}

const clearInput = () => input.value = "";
