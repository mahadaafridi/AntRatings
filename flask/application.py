from flask import Flask, render_template, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)  # CORS is enabled for all routes for app

# endpoint with ending url /
@app.route('/')
def index():
    return 'Hello, World! This is the homepage.'

# endpoint with url ending /hello
@app.route('/hello', methods=['GET'])
def hello():
    data = {"test": "test"}
    return jsonify(data)
    

    
if __name__ == '__main__':
    app.run(debug=True)