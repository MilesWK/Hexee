let colorPicker = document.getElementById('color-picker');
let result = document.getElementById('colorcode');
let fav_color = document.getElementById('favorite')
let fav_color_text = document.getElementById('favorite_text')
const url = new URL(window.location.href);
let testcolor = url.searchParams.get('color');
var favorite = localStorage.getItem("favorite");

if (testcolor === null){
  testcolor = "30f858"
}

const colortext = document.getElementById("colortext");
document.documentElement.style.setProperty('--test-color', `#${testcolor}`);

if (favorite === null) {
  localStorage.setItem("favorite", "#000000");
  favorite = localStorage.getItem("favorite");
  fav_color.style.backgroundColor = "#000000"
  fav_color_text.innerHTML = `Favorite Color: <b>${favorite}</b>`

} else {
  fav_color.style.backgroundColor = favorite
  fav_color_text.innerHTML = `Favorite Color: <b>${favorite}</b>`
}


result.innerHTML = `#000000`;
colorPicker.addEventListener('input', function() {
  let color = this.value;
  console.log(color)
  result.innerHTML = `<span id="colorcode">${color}</span>`;
});

var set_fav = function() {
  localStorage.setItem("favorite", colorPicker.value);
  favorite = localStorage.getItem("favorite");
  fav_color.style.backgroundColor = favorite
  console.log(`set favorite ${favorite}`)
  fav_color_text.innerHTML = `Favorite Color: <b>${favorite}</b>`

}

var try_color = function(){
  let urlcolor = colorPicker.value;
  urlcolor = urlcolor.replace("#", "");
  document.documentElement.style.setProperty('--test-color', `#${urlcolor}`);
  document.getElementById("url").innerHTML = `\
    Want the website to be this way forever? Use this link: <a href='https://hexee.glitch.me/?color=${urlcolor}'><b>https://hexee.glitch.me/?color=${urlcolor}</b></a>`
}

let copytext = document.getElementById("copiedtext");
function copyHexCode() {
    // Get the value from the color picker
    const hexCode = document.getElementById('color-picker').value;

    // Create a temporary textarea element
    const textArea = document.createElement("textarea");
    textArea.value = hexCode;

    // Append the textarea to the document
    document.body.appendChild(textArea);
    copytext.style.visibility = "visible"
    // Select the text in the textarea
    textArea.select();
    textArea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand('copy');

    // Remove the textarea element from the document
    document.body.removeChild(textArea);
    setTimeout(function() {
       copytext.style.visibility = "hidden"
    }, 1000); // 1000 milliseconds = 1 second

    // Alert the user that the hex code has been copied
    alert('Hex code copied to clipboard: ' + hexCode);
    
}