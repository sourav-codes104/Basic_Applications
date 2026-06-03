let buttons = document.querySelectorAll("button");
let screen = document.querySelector("#screen");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let disp = button.textContent;

    if (disp === "DEL") {
      screen.textContent = screen.textContent.slice(0, -1);
    } else if (disp === "×") {
      screen.textContent += "*";
    } else if (disp === "÷") {
      screen.textContent += "/";
    } else if (disp === "C") {
      screen.textContent = "";
    } else if (disp === "=") {
      try {
        screen.textContent = eval(screen.textContent);
      } catch {
        screen.textContent = "Error";
      }
    } else {
      screen.textContent += disp;
    }
  });
});
