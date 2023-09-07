# Gerador de Números Aleatórios com Pontos e Traços

Este é um pequeno projeto JavaScript que gera números aleatórios com pontos e traços em posições específicas.

## Como Usar

1. Abra o arquivo `index.html` em seu navegador da web.
2. Clique no botão "Gerar Número".
3. O resultado será exibido no campo de entrada da seguinte forma: `x.xxx.xxxxx-xx`.

## Código-fonte

O código-fonte JavaScript que alimenta este projeto está localizado no arquivo `script.js`. Você pode personalizá-lo ou estendê-lo conforme necessário.

```javascript
let firstDot, secondDot, thirdDot, randomNumber, n1, n2, n3, input;

const button = document.querySelector("button");
input = document.querySelector("input");

button.addEventListener("click", () => {
  if (input.value != "") {
    clearInput();
    input.value = validator();
  } else input.value = validator();
});

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
      randomNumber = `${thirdDot}${n3}`;
    }
  }
  return randomNumber;
};

const clearInput = () => (input.value = "");
```

# Contribuições

Contribuições são bem-vindas! Se você gostaria de melhorar este projeto, sinta-se à vontade para enviar um pull request.

# Autor

- Este projeto foi desenvolvido por [Innovate Codes]
- Para entrar em contato, envie um e-mail para [contato@innovatecodes.com]
