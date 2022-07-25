// Import stylesheets
import './style.css';

// Function Declaration
function square1(x) {
  return x * x;
}

// Function Expression
const square2 = function(x) {
  return x * x;
}

// Arrow Function Expression
const square3 = x => {
  return x * x;
}

// Concise Arrow Function Expression
const square4 = x => x * x;

// Write Javascript code!
const appDiv = document.getElementById('app');
var text = `<h1>Function Declaration</h1> <strong>Area of Square:</strong> `+square1(45)+`<br />`;
text += `<h1>Function Expression</h1> <strong>Area of Square:</strong> `+square2(45)+`<br />`;
text += `<h1>Arrow Function Expression</h1> <strong>Area of Square:</strong> `+square3(45)+`<br />`;
text += `<h1>Concise Arrow Function Expression</h1> <strong>Area of Square:</strong> `+square4(45)+`<br />`;
appDiv.innerHTML = text;