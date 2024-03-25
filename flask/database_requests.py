from flask import Flask, render_template, jsonify
from flask_cors import CORS

#import statements for mongo:
from flask import Flask
from pymongo import MongoClient

# client = MongoClient("mongodb+srv://mukundprnair:YiYWnyTFP01RLbWc@cluster0.habvoku.mongodb.net/")
client = MongoClient("mongodb+srv://mahadakbarafridi:awvnF4jCC9NTztHV@cluster0.gppjo6c.mongodb.net/")

db = client['classes_data']

class_data = {
    'department' : "CS",
    'course_num': "171",
    'prof_name': 'Kask',
    'difficulty': 2,
    'hrs_per_week': 10,
    'text': "Boring class"
}


result = db.classes.insert_one(class_data)
print("Done")


def getReviews(department: str, course_number: str) -> jsonify:
    """
    recieve class information and returns all reviews for the class

    sample review entry in Mongo:
    {
        'department':
        'course_number':
        'difficulty':
        'hrs_per_week':
        'text':

    }
    """
    client = MongoClient("mongodb+srv://mahadakbarafridi:awvnF4jCC9NTztHV@cluster0.gppjo6c.mongodb.net/")
    db = client['classes_data']

    
    query = {'department': department, 'course_number' : course_number}
    matching_reviews = db.classes.find(query)

    print(matching_reviews.json())

# if __name__ == '__main__':
    #getReviews('I&C SCI', '6B')


    

