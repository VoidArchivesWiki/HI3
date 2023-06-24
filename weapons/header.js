fetch("/HI3/weapons/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("headerinfo").innerHTML = data;
  });