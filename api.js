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

  let yellPara = document.createElement("p");
  yellPara.textContent = yell;
  container.appendChild(yellPara);

  let landmarksPara = document.createElement("p");
  landmarksPara.textContent = landmarks;
  container.appendChild(landmarksPara);

  let locationPara = document.createElement("p");
  locationPara.textContent = location;
  container.appendChild(locationPara);

  let animalPara = document.createElement("p");
  animalPara.textContent = animal;
  container.appendChild(animalPara);

  let actionVerbPara = document.createElement("p");
  actionVerbPara.textContent = actionVerb;
  container.appendChild(actionVerbPara);

  let favDrinkPara = document.createElement("p");
  favDrinkPara.textContent = favDrink;
  container.appendChild(favDrinkPara);

  let celebNamePara = document.createElement("p");
  celebNamePara.textContent = celebName;
  container.appendChild(celebNamePara);

  let nounPara = document.createElement("p");
  nounPara.textContent = noun;
  container.appendChild(nounPara);

  let radioPara = document.createElement("p");
  radioPara.textContent = radio;
  container.appendChild(radioPara);
  console.log("checking if radio works:", radioPara);

  let emailPara = document.createElement("p");
  emailPara.textContent = email;
  container.appendChild(emailPara);

  let phonePara = document.createElement("p");
  phonePara.textContent = phone;
  container.appendChild(phonePara);

  let message = `One fine morning, ${name}, also known as ${power} Woman, landed in New York City for the very first time. With her cape fluttering and ${magicItem} in hand, she was on a mission: to find the most legendary hot dog in the city.

But NYC wasn’t ready.

She strutted down ${streetName}, dodging pigeons and yelling ${yell} at confused tourists. Suddenly, she turned left at a ${landmarks} and ended up in a ${location}, where a ${animal} was breakdancing.

Feeling lost, she tried to ${actionVerb}, but tripped over someone’s spilled ${favDrink}. Desperate, she called ${celebName}, who said, “Girl, just use Google Maps!” But our hero insisted on using her sense of direction instead.

After hours of wandering past a ${noun}, she finally stumbled upon a cart. The vendor looked her dead in the eye and said, “Cash only.” She pulled out a ${radio} and vanished in a puff of mustard-scented smoke.

Later, she sent an email to HQ from her top-secret address: ${email}
And left a voicemail from her burner phone: ${phone}

And that’s the story of how NYC almost broke a superhero.`;

  console.log("first message to user:", message);

  let messageParagraph = document.createElement("p");
  messageParagraph.textContent = message;
  container.appendChild(messageParagraph);
  // let message = paragraph ${value}
  // display variable on screen with inner text
}
