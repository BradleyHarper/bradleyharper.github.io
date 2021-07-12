window.addEventListener("load", function() {
    var elements = document.getElementsByClassName("rainbow-text");
    for (let i = 0; i < elements.length; i++) {
      generateRainbowText(elements[i]);
    }
  });
  
  function generateRainbowText(element) {
    var text = element.innerText;
    element.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
      let charElem = document.createElement("span");
      charElem.style.color = "hsl(" + (360 * i / text.length) + ",80%,50%)";
      charElem.innerHTML = text[i];
      element.appendChild(charElem);
    }
  }

// Make into ES6? ehh I don't really care to be honest..

// window.addEventListener("load", () => {
//   let elements = document.getElementsByClassName("commission-link");
//   elements.length.forEach(element => {
    
//   });
// })
