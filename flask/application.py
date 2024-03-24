from flask import Flask, render_template, jsonify, request
from flask_cors import CORS

#import statements for mongo:
from flask import Flask
from pymongo import MongoClient




app = Flask(__name__)
CORS(app)  # CORS is enabled for all routes for app


# app.config['MONGO_URI'] = 'mongodb+srv://mukundprnair:YiYWnyTFP01RLbWc@cluster0.habvoku.mongodb.net/'

# mongo = MongoClient(app.config['MONGO_URI'])
# db = mongo['ReviewData']



# endpoint with ending url /
@app.route('/')
def index():

    # client = MongoClient("mongodb+srv://mukundprnair:YiYWnyTFP01RLbWc@cluster0.habvoku.mongodb.net/")
    # database_names = client.list_database_names()
    # print(database_names)

    # this should be the database
    # collection = db.my_collection
    # print(collection)
    # print(db)
    # collection('classes').insertMany([
    # {'item': 'mahad', 'price': 100000000, 'quantity': 1 }
    #  ])

    
    return 'Hello, World! This is the homepage.'

# endpoint with url ending /hello
@app.route('/hello', methods=['GET'])
def hello():
    data = {"test": "test"}
    return jsonify(data)
    
@app.route('/api/data', methods=['POST'])
def receive_data_from_react():
    data = request.get_json()
    user_input = data.get('userInput')
    # Process user input as needed
    print(user_input)
    return jsonify({'message': 'Data received successfully'})
    
if __name__ == '__main__':
    app.run(debug=True)