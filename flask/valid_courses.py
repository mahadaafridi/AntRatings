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
        

def insert_course_prof_list():

    response = requests.get("https://api.peterportal.org/rest/v0/instructors/all")
    course_dict = dict()
    for professor in response.json():
        for course in professor['course_history']:
            if course in course_dict:
                course_dict[course].add(professor['name'])
            else:
                course_dict[course] = {professor['name']} 
    
    for key, value in course_dict.items():
        db = client['classes_data']
        res = {
            'course' : key,
            'professors' : list(value)
        }
        print(res)
        result = db.course_professor.insert_one(res)
    
        
# only running once in order to get data from peter portal to
# put into Mongo database for future use dna
if __name__ == "__main__":
    insert_course_prof_list()
    # insert_class_by_department()
    #insert_valid_departments()
    
 

