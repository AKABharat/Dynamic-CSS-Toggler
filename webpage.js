document.querySelector("button").addEventListener("click", function () {
  var check = document.querySelector("link[href='/style.css']");
  if (check) {
    document.querySelector("head").removeChild(check);
  }
  else {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/style.css";
    document.querySelector("head").appendChild(link);
  }
});