from flask import Flask, render_template, jsonify
from flask_cors import CORS

import json
#import statements for mongo:
from flask import Flask
from pymongo import MongoClient
from bson.json_util import dumps


# client = MongoClient("mongodb+srv://mukundprnair:YiYWnyTFP01RLbWc@cluster0.habvoku.mongodb.net/")
client = MongoClient("mongodb+srv://mahadakbarafridi:awvnF4jCC9NTztHV@cluster0.gppjo6c.mongodb.net/")

db = client['classes_data']

class_data = {
    'department' : "CS",
    'course_num': "171",
    'prof_name': 'Kask',
    'difficulty': 9,
    'hrs_per_week': 24,
    'text': "Enjoyed the class. Bad professor"
}


#result = db.classes.insert_one(class_data)
print("Done")


def getReviews(department: str, course_number: str) -> jsonify:
    """
    recieve class information and returns all reviews for the class

    sample review entry in Mongo:
    {
        'department':
        'course_num':
        'difficulty':
        'hrs_per_week':
        'text':

    }
    """
    client = MongoClient("mongodb+srv://mahadakbarafridi:awvnF4jCC9NTztHV@cluster0.gppjo6c.mongodb.net/")
    db = client['classes_data']

    
    query = {'department': department, 'course_num' : course_number}
    matching_reviews = db.classes.find(query)
    #print(type(matching_reviews))
    #print(matching_reviews)
    # reviews = list()
    # for review in matching_reviews:
    #     print("reach")
    #     print(review)
    #     reviews.append(review)
        

    # print(json.dumps(reviews))
    reviews = list(matching_reviews)
    print(type(dumps(reviews)))
    
    #json_data = json.dumps(matching_reviews.next())
    #print(json_data)


    

if __name__ == '__main__':
    getReviews('CS', '171')


    

