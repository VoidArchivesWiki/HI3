fetch("/HI3/emblems/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("headerinfo").innerHTML = data;
  });