const apiUrl = "https://thequoteshub.com/api/";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const img = document.getElementById("logoImg");

async function getQuote(url) {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "text/html",
    },
    method: "GET",
  });
  var data = await res.json();
  quote.innerHTML = data.text;
  author.innerHTML = data.author;
}

getQuote(apiUrl);

function xPost() {
  window.open(
    `https://twitter.com/intent/tweet?text=${quote.innerHTML} ----- by ${author.innerHTML}`,
    "X Post Window",
    "width=600",
    "height=300"
  );
}

function changeLogo(chk) {
  if (chk) {
    img.src = "../img/logo-black.png";
  }else {
    img.src = "../img/logo-white.png";
  }
}
