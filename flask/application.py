from flask import Flask, render_template, jsonify, request
from flask_cors import CORS

#import statements for mongo:
from flask import Flask
from pymongo import MongoClient
import requests
from database_requests import Database



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

    #data = request.get_json()
    
    #user_input = data.get('userInput')
    print("somethign happened")
    return 'Hello, World! This is the homepage.'

# endpoint with url ending /hello
# @app.route('/api/data', methods=['GET'])
# def hello():
#     data = {"department": "ICS",
#             "course_number": "6B",
#             "Review": "boring class"}
#     return jsonify(data)


    
# endpoint with url ending /api/data
@app.route('/api/data', methods=['POST'])
def receive_data_from_react():
    '''
    Receives data from front end
    '''
    data = request.get_json()
    
    user_input = data.get('userInput')
    
    #  get department
    selected_item = data.get('selected_item')

    # user_input = request.args.get('userInput')
    # selected_item = request.args.get('selected_item')
    



    #this is where we can run functions on the data from mongo and return 
    print(user_input)
    print(selected_item) 

    # return reviews
    return jsonify({'message': 'Data received successfully'})


@app.route('/Course/api/data', methods=['POST'])
def recieve_course_info_return_course_rev():
    '''
    Receives data from front end
    '''

    data = request.get_json()
    
    class_dif = data.get('courseid')
    department, course_num = _split_course_id(class_dif)

    db = Database()
    class_difficulty_avg, hrs_per_week_avg, all_reviews = db.getReviews(department, course_num)
    
    
    # issue here 
    return jsonify({'class_difficulty_avg' : class_difficulty_avg, 'hrs_per_week_avg' : hrs_per_week_avg, 
                    'all_reviews' : all_reviews})


@app.route('/AddReview/Professor/api/data', methods=['POST'])
def recieve_course_info_return_professors():
    '''
    Receives data from front end
    '''

    data = request.get_json()
    
    class_dif = data.get('courseid')
    department, course_num = _split_course_id(class_dif)

    db = Database()
    professor_list = db.getProfessors(department, course_num)
    
    # issue here 
    return jsonify({'professors' : professor_list})



@app.route('/AddReview/api/data', methods=['POST'])
def receive_review_from_react():
    '''
    Receives data from front end
    '''
    data = request.get_json()
    
    class_dif = data.get('class_dif')
    
    #  get department
    hrs_week = data.get('hrs_week')

    rev = data.get('rev')
    course_num = data.get('courseid')
    department = data.get('course_department')

    professor_name = data.get('professor_name')
    # this should be the database

    # order  department: str, course_num: str, difficulty: str, hrs_per_week: str, text: str, professor_name: str
    
    db = Database()
    db.addReview(department, course_num, class_dif, hrs_week, rev, professor_name)
    # print(collection)
    # print(db)
 
    
    # user_input = request.args.get('userInput')
    # selected_item = request.args.get('selected_item')



    #this is where we can run functions on the data from mongo and return 
    


    # return reviews
    return jsonify({'message': 'Data received successfully'})
    

# @app.route('/api/pp', methods=['POST'])
# def receive_data_from_pp():
    
#     pp_url = "https://api-next.peterportal.org/v1/rest"
#     data = request.get_json()

def _split_course_id(department_and_course: str) -> tuple[str, str]:
    """
    helper funciton to split the department and course
    """
    department = ''
    course_id = ''
    for i in range(len(department_and_course)):
        if not department_and_course[i].isdigit():
            department += department_and_course[i]
        else:
            course_id = department_and_course[i:]
            break
    print(department)
    print(course_id)
    return department, course_id    

if __name__ == '__main__':
    app.run(debug=True)