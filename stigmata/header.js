fetch("/HI3/stigmata/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("headerinfo").innerHTML = data;
  });