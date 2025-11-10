function log(msg) {
  const box = document.getElementById('log');
  box.value += "\n" + msg;
  box.scrollTop = box.scrollHeight;
}

function sendCommand() {
  const cmd = document.getElementById('command').value.trim();
  if (!cmd) return;
  log("> " + cmd);
  fetch("/command", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ command: cmd })
  })
  .then(res => res.json())
  .then(data => log("Sentinel: " + data.message))
  .catch(e => log("Error: " + e));
}