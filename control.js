const statusDisplay = document.getElementById("sentinel-status");
const logOutput = document.getElementById("logOutput");

document.getElementById("activate").addEventListener("click", () => {
  statusDisplay.textContent = "Online";
  statusDisplay.className = "online";
  log("Sentinel activated and monitoring started.");
});

document.getElementById("deactivate").addEventListener("click", () => {
  statusDisplay.textContent = "Offline";
  statusDisplay.className = "offline";
  log("Sentinel safely deactivated.");
});

document.getElementById("refresh").addEventListener("click", () => {
  log("Refreshing system status...");
  // Later, connect this to backend endpoint to check live status
});

document.getElementById("sendCommand").addEventListener("click", () => {
  const cmd = document.getElementById("commandInput").value;
  if (cmd.trim() === "") return;
  log("Command sent: " + cmd);
  document.getElementById("commandInput").value = "";

  // Future: send to backend via fetch() or WebSocket
});

function log(message) {
  const time = new Date().toLocaleTimeString();
  logOutput.innerHTML += <p>[${time}] ${message}</p>;
  logOutput.scrollTop = logOutput.scrollHeight;
}