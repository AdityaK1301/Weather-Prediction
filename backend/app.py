
from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app, origins="*")

apiKey = 'c7563aea8f29c5ad2c1ea1b6331b0796'

@app.route('/api', methods=["POST", "GET"])
def api():

    if request.method == "POST":
        city = request.get_json()
        if city and "city" in city:
            response = requests.get(f'https://api.openweathermap.org/data/2.5/weather?q={city['city']}&appid={apiKey}&units=metric').json()
            if response:
                return jsonify(response)
            else:
                return jsonify("Invalid data received"), 400

    return jsonify("Hello from Flask")

if __name__ == "__main__":
    app.run(debug=True, port=8000)
