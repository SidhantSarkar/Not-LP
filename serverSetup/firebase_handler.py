import pyrebase
from mainfile import *
import json
from env_variables import *

config = firebase_auth

firebsevar = pyrebase.initialize_app(config=config)
db = firebsevar.database()

def post_assignment(jsonObj):
    db = firebsevar.database()
    jsonObj['submissions']=0
    db.child('Assignments').child(jsonObj['assignmentName']).set(jsonObj)

def post_submission(jsonObj):
    db = firebsevar.database()
    assignment=db.child('Assignments').child(jsonObj['assignmentName']).get().val()
    db = firebsevar.database()
    db.child('Assignments').child(jsonObj['assignmentName']).update({'submissions' : 1+int(assignment['submissions'])})
    db = firebsevar.database()
    assignment=db.child('Assignments').child(jsonObj['assignmentName']).get().val()
    db = firebsevar.database()
    maxAssignmentMarks=assignment['maxMarks']
    arr=assignment['questions']
    totalMarks=0
    for i in range(len(arr)):
        temp=calcMarks(arr[i]['answer'],jsonObj['questions'][i]['answer'],arr[i]['marks'])
        jsonObj['questions'][i]['marks']=temp
        jsonObj['questions'][i]['maxMarks']=arr[i]['marks']
        jsonObj['questions'][i]['question']=arr[i]['question']
        totalMarks+=temp
    jsonObj['marks']=totalMarks
    jsonObj['maxMarks']=maxAssignmentMarks
    db.child('Submissions').child(jsonObj['assignmentName']).child(jsonObj['studentName']).set(jsonObj)

def get_assignments():
    # db=firebsevar.database();
    db = firebsevar.database()
    arr=[]
    try :
        temp=db.child('Assignments').get()
        for ass in temp.each():
            t={}
            t['name']=ass.key()
            t['marks']=ass.val()['maxMarks']
            t['submissions']=ass.val()['submissions']
            t['questions']=len(ass.val()['questions'])
            arr.append(t)
    except :
        arr=[]
    return arr

def get_students_for_assignment(jsonObj):
    # db=firebsevar.database();
    db = firebsevar.database()
    temp=db.child('Submissions').child(jsonObj['name']).get()
    arr=[]
    try :
        for sub in temp.each():
            t={}
            t['student']=sub.key()
            t['marks']=sub.val()['marks']
            arr.append(t)
    except :
        arr=[]
    return arr


def get_assignments_for_student(jsonObj):
    # db=firebsevar.database();
    db = firebsevar.database()
    outputJSON=[]
    subs=db.child('Submissions').get()
    for assignment in subs.each():
        for sub in assignment.each():
            if sub.key()==jsonObj['name']:
                t={}
                t['name']=assignment.key()
                t['marks']=sub.val()['marks']
                outputJSON.append(t)
    return outputJSON

def get_submission_for_student(jsonObj):
    # db=firebsevar.database();
    db = firebsevar.database()
    return db.child('Submissions').child(jsonObj['assName']).child(jsonObj['name']).get().val()

def get_assignment(jsonObj):
    db = firebsevar.database()
    return db.child('Assignments').child(jsonObj['name']).get().val()['questions']

def get_all_marks(jsonObj):
    db = firebsevar.database()
    subs=db.child('Submissions').get()
    # print(jsonObj)
    arr=[]
    # try:
    for assignment in subs.each():
        for sub in assignment.val():
            if sub==jsonObj['name']:
                arr.append(assignment.val()[sub])
    # except:
        # arr=[]
    return arr

# db.push({'a':1,'b':2,'c':3})
# db.child("ayaan")
# db=firebsevar.database()
# db.push({'a':1,'b':2,'c':5})