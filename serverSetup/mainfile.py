import keyword_extraction
import similarity_check
import requests
from env_variables import *

API_KEY_GRAMMAR = grammar_api_key
ERROR_THRESHOLD = 6

def calcMarks(model_ans,student_ans,max_marks,keywords_prov=[],threshold_similarity=0.3,accuracy=0.5) :
    context_similarity=similarity_check.similarity(model_ans,student_ans)
    # print(context_similarity)
    if context_similarity < threshold_similarity :
        return 0
    keywords_found=0
    # for keyword in keywords_prov:
    #     if keyword in student_ans :
    #         keywords_found+=1
    extracted_keywords_student=keyword_extraction.TextRank4Keyword()
    extracted_keywords_student.analyze(student_ans, candidate_pos = ['NOUN', 'PROPN'], window_size=4, lower=False)
    extracted_keywords_student=extracted_keywords_student.get_keywords(15)
    # input('whasssss')
    extracted_keywords_model=keyword_extraction.TextRank4Keyword()
    extracted_keywords_model.analyze(model_ans, candidate_pos = ['NOUN', 'PROPN'], window_size=4, lower=False)
    extracted_keywords_model=extracted_keywords_model.get_keywords(15)
    # print(extracted_keywords_model)
    # print(extracted_keywords_student)
    keywords_found=similarity_check.compare_keyWords(keywords_prov,extracted_keywords_student)
    # input('whasssss')
    extracted_keywords_match=similarity_check.compare_keyWords(extracted_keywords_model,extracted_keywords_student)
    if(len(extracted_keywords_model)==0) :
        return round(context_similarity*max_marks)
    req = requests.get("https://api.textgears.com/check.php?text=" + student_ans + "&key="+API_KEY_GRAMMAR)
    no_of_errors = len(req.json()['errors'])
    if no_of_errors > ERROR_THRESHOLD :
        return 0
    # print(extracted_keywords_match)
    # print(len(extracted_keywords_model))
    # print(len(keywords_prov))
    # print(keywords_found)
    marks_Factor=0
    if len(keywords_prov)==0 :
        marks_Factor = (extracted_keywords_match/len(extracted_keywords_model))
        marks_Factor=marks_Factor**(1/3)
    # else :
    #     marks_Factor = ((keywords_found/len(keywords_prov)))*(extracted_keywords_match/len(extracted_keywords_model))
    # print(marks_Factor)
    return round(marks_Factor*max_marks/accuracy)*accuracy

if __name__=='__main__' :
    while(True):
        kprovl=int(input('Number of keywords Prov : '))
        kprov=[]
        for i in range(kprovl):
            kprov.append(input())
        a=input('Enter model answer : \n')
        b=input('Enter student"s answer : \n')
        m=int(input('Enter max marks : '))
        acc=float(input('Enter accuracy : '))
        thres=float(input('Enter threshold similarity : '))
        print(calcMarks(a,b,m,kprov,thres,acc))


