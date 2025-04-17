let container = document.querySelector(".container");

let form = document.querySelector("form");
form.addEventListener("submit", onFormSubmit);
console.log("form:", form);

function onFormSubmit() {
  event.preventDefault();
  const data = new FormData(form);
  const dataObject = Object.fromEntries(data.entries());
  console.log("dataObject:", dataObject);
  form.reset();

  let name = dataObject.name;
  let power = dataObject.power;
  let magicItem = dataObject.magicItem;
  let streetName = dataObject.streetName;
  let landmarks = dataObject.landmarks;
  let location = dataObject.location;
  let animal = dataObject.animal;
  let actionVerb = dataObject.actionVerb;
  let favDrink = dataObject.favDrink;
  let celebName = dataObject.celebName;
  let noun = dataObject.noun;
  let radio = dataObject.radio;
  let email = dataObject.email;
  let phone = dataObject.phone;

  let message = `One fine morning, ${name}, also known as ${power} Woman, landed in New York City for the very first time. With her cape fluttering and ${magicItem} in hand, she was on a mission: to find the most legendary hot dog in the city.

But NYC was not ready.

She strutted down ${streetName}, dodging pigeons and yelling ${yell} at confused tourists. Suddenly, she turned left at a ${landmarks} and ended up in a ${location}, where a ${animal} was breakdancing.

Feeling lost, she tried to ${actionVerb}, but tripped over someone spilled ${favDrink}. Desperate, she called ${celebName}, who said, “Girl, just use Google Maps!” But our hero insisted on using her sense of direction instead.

After hours of wandering past a ${noun}, she finally stumbled upon a cart. The vendor looked her dead in the eye and said, “Cash only.” She pulled out a ${radio} and vanished in a puff of mustard-scented smoke.

Later, she sent an email to HQ from her top-secret address: ${email}
And left a voicemail from her burner phone: ${phone}

And that is the story of how NYC almost broke a superhero.`;

  console.log("first message to user:", message);

  let messageParagraph = document.createElement("p");
  messageParagraph.textContent = message;
  container.appendChild(messageParagraph);
  // let message = paragraph ${value}
  // display variable on screen with inner text
}
