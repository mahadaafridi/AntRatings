from flask import Flask, render_template, jsonify
from flask_cors import CORS

import json
#import statements for mongo:
from flask import Flask
from pymongo import MongoClient
from bson.json_util import dumps

class Database():
    def __init__(self):
        self.client = MongoClient("mongodb+srv://mahadakbarafridi:awvnF4jCC9NTztHV@cluster0.gppjo6c.mongodb.net/")
        self.database = self.client['classes_data']

    def getReviews(self, department: str, course_number: str) -> jsonify:
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
       
        query = {'department': department, 'course_num' : course_number}
        matching_reviews = self.database.classes.find(query)
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
    def addReview(self, department: str, course_num: str, difficulty: str, hrs_per_week: str, text: str) -> bool:
        """
        Adds a single review to the database. Returns True if sucessfull
        """
        #ensures that for each review has certain values
        if department and course_num and difficulty and hrs_per_week: 
            class_info = {
                'department': department,
                'course_num': course_num,
                'difficulty': difficulty,
                'hrs_per_week': hrs_per_week,
                'text': text 
                }
            
            db.classes.insert_one(class_info)
            return True
        return False
        
if __name__ == '__main__':

    db = Database()
    db.getReviews('CS', '171')


    

