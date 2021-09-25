let btn = document.querySelector("button");
let numberOfSymbolsOnCard = document.querySelector("#numberOfSymbolsOnCard");

const generateArraySymbols = (symbols) => {
  let symbolsArray = [];
  for (let i = 0; i < Number(symbols.value); i++) {
    symbolsArray.push(String(i));
  }
  return symbolsArray;
};

btn.addEventListener("click", () => {
  const n = numberOfSymbolsOnCard.value - 1;
  const numberOfCards = n ** 2 + n + 1;
  let cards = [];

  for (let i = 0; i < n + 1; i++) {
    cards.push([1]);
    for (let j = 0; j < n; j++) {
      cards[i].push(j + 1 + i * n + 1);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      cards.push([i + 2]);
      for (let k = 0; k < n; k++) {
        let val = n + 1 + n * k + ((i * k + j) % n) + 1;
        cards[cards.length - 1].push(val);
      }
    }
  }

  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerHTML = `Карточек сгенерировано: ${numberOfCards} шт.`;
  ul.appendChild(li);

  for (let card = 0; card < cards.length; card++) {
    let li = document.createElement("li");
    li.innerHTML = `[${card + 1}] - ${cards[card]} `;
    ul.appendChild(li);
  }
});
