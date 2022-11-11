//generate a random passsword function
function generate() {
  //set password complexity
  let complexity = document.getElementById("slider").value;

  //password values
  let values =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

  //generated password
  let password = "";

  //iterating over complexity to choose password characters
  for (let i = 0; i <= complexity; i++) {
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1))); //substractin 1 because the length starts at 0 not 1 lol
  }

  //displaying generated password into the html
  document.getElementById("display").value = password;

  //history of previous passwords
  document.getElementById("history").innerHTML += password + "<br />";
}

//set default length of 10 characters
document.getElementById("length").innerHTML = "Length: 25";

//sync length to slider
const length = document.getElementById("length");
const slider = document.getElementById("slider");

slider.oninput = () => {
  if (slider.value > 0) {
    length.innerHTML = "Length: " + slider.value;
  } else {
    length.innerHTML = "Length: 1";
  }
};

//copy to clipboard
function copyPassword() {
  //selecting the password
  document.getElementById("display").select();
  document.execCommand("copy"); //might be deprecated :/
  alert("Copied to Clipboard");
}
