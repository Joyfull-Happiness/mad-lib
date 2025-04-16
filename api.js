let form = document.querySelector("form");
form.addEventListener("submit", onFormSubmit);
console.log("form:", form);

function onFormSubmit() {
  e.preventDefault();
  const data = new FormData(e.target);
  const dataObject = Object.fromEntries(data.entries());
  console.log(dataObject);

  form.reset();
  // step 1) relate variables to html
  let namePara = document.createElement("p");
  namePara.textContent = name;
  container.appendChild(namePara);

  let powerPara = document.createElement("p");
  powerPara.textContent = power;
  container.appendChild(powerPara);

  let magicItemPara = document.createElement("p");
  magicItemPara.textContent = magicItem;
  container.appendChild(magicItemPara);

  let streetNamePara = document.createElement("p");
  streetNamePara.textContent = streetName;
  container.appendChild(streetNamePara);

  // let message = paragraph ${value}
  // display variable on screen with inner text
}
