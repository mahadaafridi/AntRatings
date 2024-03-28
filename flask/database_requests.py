from flask import Flask, render_template, jsonify
from flask_cors import CORS

import json
#import statements for mongo:
from flask import Flask
from pymongo import MongoClient
from bson.json_util import dumps, loads
class Database():
    def __init__(self):
        self.client = MongoClient("mongodb+srv://mahadakbarafridi:awvnF4jCC9NTztHV@cluster0.gppjo6c.mongodb.net/")
        self.database = self.client['classes_data']

    def getReviews(self, department: str, course_number: str) -> tuple[str, str, list[dict]]:
        """
        recieve class information and returns all reviews for the class
        r types
        str: contains class_difficulty 
        str: contains hrs_per_week 
        
        list[dict] contains a list of every review which is a dictionary in the form of following
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
        
        class_difficulty_value = 0
        hrs_per_week_val = 0
        reviews_len = 0
        matching_reviews_list = []

        for review in matching_reviews:
            class_difficulty_value += review['difficulty']
            hrs_per_week_val += review['hrs_per_week']
            reviews_len += 1   
            json_review = loads(dumps(review))
            matching_reviews_list.append(json_review)

        hrs_per_week_val = round(hrs_per_week_val / reviews_len, 1)
        class_difficulty_value = round(class_difficulty_value / reviews_len, 1)

        return str(class_difficulty_value), str(hrs_per_week_val), matching_reviews_list

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
    db.getReviews('COMPSCI', '171')


    

