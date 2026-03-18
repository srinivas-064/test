const status = document.querySelector("#status");
const button = document.querySelector("#toggle-message");

if (status && button) {
  const defaultMessage = "Click the button to preview the message update.";
  const activeMessage = "JavaScript is connected and the UI is interactive.";

  let active = false;

  button.addEventListener("click", () => {
    active = !active;
    status.textContent = active ? activeMessage : defaultMessage;
    button.textContent = active ? "Reset message" : "Show message";
    button.setAttribute("aria-pressed", String(active));
  });
}
