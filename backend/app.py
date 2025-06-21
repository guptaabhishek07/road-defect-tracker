from flask import Flask, request, jsonify
from flask_cors import CORS  # <-- ADD THIS

app = Flask(__name__)
CORS(app)  # <-- ENABLE CORS on all routes

# Mock DB connection using a dummy list
mock_db = []

@app.route('/')
def home():
    return "✅ Zappa app is live!"

@app.route('/upload', methods=['POST'])
def upload():
    data = request.json
    mock_db.append({
        "type": data['type'],
        "severity": data['severity'],
        "notes": data['notes'],
        "longitude": data['location']['lng'],
        "latitude": data['location']['lat']
    })
    return jsonify({'message': 'Success'}), 201

@app.route('/defects', methods=['GET'])
def defects():
    return jsonify(mock_db)
