from flask import Flask, request, jsonify, send_from_directory
app = Flask(_name_, static_folder='.')

# Serve the dashboard page
@app.route('/')
def root():
    return send_from_directory('.', 'index.html')

# Endpoint to receive commands from the dashboard
@app.route('/command', methods=['POST'])
def command():
    cmd = request.json.get('command')
    print("Command received:", cmd)  # Logs to Render console
    # For now, simply respond back
    return jsonify(message=f"Command '{cmd}' executed successfully.")

# Optional status endpoint (you can expand it later)
@app.route('/status')
def status():
    return jsonify(status="Online")

if _name_ == '_main_':
    app.run(host='0.0.0.0', port=3000)