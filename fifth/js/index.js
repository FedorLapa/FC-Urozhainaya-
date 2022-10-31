function buttonClick() {
  document.getElementById("submit-window").style.display = "block";
  document.body.classList.add('window');
};

function buttonNone() {
  document.getElementById("submit-window").style.display = "none";
  document.body.classList.remove('window');
}

setTimeout(buttonNone, 6000)