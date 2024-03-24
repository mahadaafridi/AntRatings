from flask import Flask, render_template, jsonify
from flask_cors import CORS

#import statements for mongo:
from flask import Flask
from pymongo import MongoClient

# client = MongoClient("mongodb+srv://mukundprnair:YiYWnyTFP01RLbWc@cluster0.habvoku.mongodb.net/")
client = MongoClient("mongodb+srv://mahadakbarafridi:awvnF4jCC9NTztHV@cluster0.gppjo6c.mongodb.net/")
print(client.list_database_names())

db = client['classes_data']

class_data = {
    'department' : "CS"
    'course_num': "171",
    'prof_name': 'Kask',
    'difficulty': 2,
    'hrs_per_week': 10,
    'text': "Boring class"
}

query = {'text': 'Boring class'}
matching_reviews = db.classes.find(query)
for review in matching_reviews:
    print(review)
    print(review['name'])

result = db.classes.insert_one(class_data)
