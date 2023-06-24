fetch("/HI3/music/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("headerinfo").innerHTML = data;
  });