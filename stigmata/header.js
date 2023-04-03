fetch("/Void-Archives-Honkai-Wiki/stigmata/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("headerinfo").innerHTML = data;
  });