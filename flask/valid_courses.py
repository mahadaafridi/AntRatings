import requests
#import statements for mongo:
from pymongo import MongoClient
client = MongoClient("mongodb+srv://mahadakbarafridi:awvnF4jCC9NTztHV@cluster0.gppjo6c.mongodb.net/")

def insert_class_data():
    '''
    function that inserts class data into Mongo

    '''

    response = requests.get("https://api.peterportal.org/rest/v0/courses/all")

    db = client['classes_data']

    for course in response.json():
        course_id = {
            'department': course['department'], 
            'number': course['number']
            }

        
        result = db.valid_classes.insert_one(course_id)

def insert_department_data():
    '''
    function that inserts department data into Mongo

    '''
    
    response = requests.get("https://api.peterportal.org/rest/v0/courses/all")

    db = client['classes_data']

    valid_departments = set()
    
    for course in response.json():
        valid_departments.add(course['department'])

    
    for department in valid_departments:
        department_id = {
            'department_name': department, 
            }
        #db.valid_departments.insert_one(department_id)
    
    
    return valid_departments



def insert_class_by_department():

    response = requests.get("https://api.peterportal.org/rest/v0/courses/all")
    db = client['classes_data']
    for course in response.json():
        collection_name = course['department']
        course_id = {
                'number': course['number']
                }

        result = db[collection_name].insert_one(course_id)
        


    
    
        
# only running once in order to get data from peter portal to
# put into Mongo database for future use dna
if __name__ == "__main__":
    # insert_class_by_department()
    #insert_valid_departments()
    

