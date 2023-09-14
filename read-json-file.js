// Example 1

const diffy = document.querySelector(".container1");
let lineDescr = "";

fetch(
  "https://gist.githubusercontent.com/JohanSwannie/10ec52c77bd989e512f6474d1686fb36/raw/dbdfc24ae050c49148d3ad150ca69b539e200200/jswan-persons1.json"
)
  .then((response) => response.json())
  .then((users) => {
    console.log(`The First JSON File Fetch was successful`);
    users.map((user) => {
      const differ = document.createElement("div");
      lineDescr = `${user.name} is a ${user.username} with an email of ${user.email}`;
      const lineText = document.createTextNode(lineDescr);
      differ.style.fontSize = "20px";
      differ.appendChild(lineText);
      diffy.appendChild(differ);
      const breaker1 = document.createElement("br");
      diffy.appendChild(breaker1);
      const differ2 = document.createElement("div");
      differ2.setAttribute("class", "subcontainer");
      const imager = document.createElement("img");
      imager.src = user.imageUrl;
      imager.setAttribute("id", "imagine");
      differ2.appendChild(imager);
      diffy.appendChild(differ2);
      const breaker2 = document.createElement("br");
      diffy.appendChild(breaker2);
      lineDescr = "";
    });
  })
  .catch((error) =>
    console.log(`There was an error while fetching the JSON File`)
  );

// Example 2 - with async await

const diffy2 = document.querySelector(".container2");
let lineDescr2 = "";

fetchJson()
  .then((response) => console.log(`The Second JSON File Fetch was successful`))
  .catch((error) =>
    console.log(`There was an error while fetching the JSON File - ${error}`)
  );

async function fetchJson() {
  const response = await fetch(
    "https://gist.githubusercontent.com/JohanSwannie/87b8ccd50037a033f6c6ff7eb5553cb7/raw/921c83f8bdfc2d3320bee4ffdbb4ae0180ac2c5a/jswan-tennisclub.json"
  );
  const output = await response.json();
  output.map((player) => {
    const differ2 = document.createElement("div");
    lineDescr2 = `${player.name} has joined the club on  ${player.joinDate} with price money of ${player.priceMoney} and has played ${player.matches} matches.`;
    const lineText2 = document.createTextNode(lineDescr2);
    differ2.appendChild(lineText2);
    diffy2.appendChild(differ2);
    const breaker3 = document.createElement("br");
    diffy2.appendChild(breaker3);
    lineDescr2 = "";
  });
}
