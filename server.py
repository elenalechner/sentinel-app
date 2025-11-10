import os
from flask import Flask, request, jsonify, send_from_directory

app = Flask(_name_, static_folder='.')

# Serve dashboard
@app.route('/')
def root():
    return send_from_directory('.', 'index.html')

# Handle commands from dashboard
@app.route('/command', methods=['POST'])
def command():
    cmd = request.json.get('command')
    print("Command received:", cmd)
    return jsonify(message=f"Command '{cmd}' executed successfully.")

# Optional status endpoint
@app.route('/status')
def status():
    return jsonify(status="Online")

if _name_ == '_main_':
    app.run(host='0.0.0.0', port=3000)