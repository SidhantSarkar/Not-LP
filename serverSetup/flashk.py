from flask import  Flask,render_template,request,jsonify
from flask_cors import CORS
import json
from firebase_handler import *

app = Flask(__name__)
CORS(app)
@app.route("/placeholder1",methods=['POST','GET'])
def give_data():
    pass

@app.route("/get_assignments",methods=["GET"])
def g_assignments():
    returning_data=get_assignments()
    # response = jsonify({'some': 'data'})
    # response.headers.add('Access-Control-Allow-Origin', '*')
    return jsonify(returning_data)
@app.route("/get_students_for_assignments",methods=["POST"])
def get_studs_for_assignments():
    returning_data=get_students_for_assignment(request.get_json(force=True))
    # response = jsonify({'some': 'data'})
    # response.headers.add('Access-Control-Allow-Origin', '*')
    return jsonify(returning_data)

@app.route("/get_assignments_for_students",methods=["POST"])
def get_assignment_for_Stud():
    returning_data=get_assignments_for_student(request.get_json(force=True))
    # response = jsonify({'some': 'data'})
    # response.headers.add('Access-Control-Allow-Origin', '*')
    return jsonify(returning_data)

@app.route("/get_submission_for_student",methods=["POST"])
def get_sub_for_student():
    returning_data=get_submission_for_student(request.get_json(force=True))
    # response = jsonify({'some': 'data'})
    # response.headers.add('Access-Control-Allow-Origin', '*')
    return jsonify(returning_data)

@app.route("/get_assignment",methods=["POST"])
def get_assign():
    returning_data=get_assignment(request.get_json(force=True))
    # response = jsonify({'some': 'data'})
    # response.headers.add('Access-Control-Allow-Origin', '*')
    return jsonify(returning_data)

@app.route('/submit_assignment',methods=["POST"])
def submit_assignment():
    content = request.get_json(force=True)
    # print(request)
    post_assignment(content)
    return jsonify({"submission_succesful":"yes"})
@app.route('/submit_answer',methods=["POST"])
def submit_answer():
    content = request.get_json(force=True)
    post_submission(content)
    a = {"submission_succesful":"yes"}
    
    return jsonify(a)

@app.route("/get_all_marks",methods=["POST"])
def get_marks():
    returning_data=get_all_marks(request.get_json(force=True))
    # response = jsonify({'some': 'data'})
    # response.headers.add('Access-Control-Allow-Origin', '*')
    return jsonify(returning_data)

if __name__ == "__main__":
    app.run(host='0.0.0.0')