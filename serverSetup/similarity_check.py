
from nltk.corpus import stopwords 
from nltk.tokenize import word_tokenize 
from nltk.stem import WordNetLemmatizer
from nltk.stem import PorterStemmer
from nltk.corpus import wordnet
from itertools import chain
from copy import deepcopy
# X = input("Enter first string: ").lower() 
# Y = input("Enter second string: ").lower() 

def similarity(x,y):
    
    x1=x
    y1=y 

    x1=x1.replace(".","")
    x1=x1.replace(",","")
    x1=x1.replace("'","")
    x1=x1.replace(";","")
    
    y1=y1.replace(".","")
    y1=y1.replace(",","")
    y1=y1.replace("'","")
    y1=y1.replace(";","")
    # tokenization 
    X_list = word_tokenize(x1)  
    Y_list = word_tokenize(y1) 
    
    # sw contains the list of stopwords 
    sw = stopwords.words('english')  
    l1 =[];l2 =[]  
    
    # remove stop words from string 
    X_set1 = {w.lower() for w in X_list if not w in sw}  
    Y_set1 = {w.lower() for w in Y_list if not w in sw} 
    # wordnet = WordNetLemmatizer()
    ps = PorterStemmer()
    
    # X_synonyms = []
    
    # for index in X_set1:
    #     for synx in wordnet.synsets(index):
    #         for l in synx.lemmas():
    #             X_synonyms.append(l.name())
    # # print(X_synonyms)
    # for i in X_synonyms:
    #     X_set1.add(i)
    X_set = {ps.stem(w) for w in X_set1}
    Y_set = {ps.stem(w) for w in Y_set1}
    # print(X_set)
    # print(Y_set)
    # form a set containing keywords of both strings  
    rvector = X_set.union(Y_set)  
    for w in rvector: 
        if w in X_set: l1.append(1) # create a vector 
        else: l1.append(0) 
        if w in Y_set: l2.append(1) 
        else: l2.append(0) 
    c = 0
    
    # cosine formula  
    for i in range(len(rvector)): 
            c+= l1[i]*l2[i] 
    cosine = c / float((sum(l1)*sum(l2))**0.5) 
    return cosine 

def compare_keyWords(x,y):
    '''
    Returns how many keywords match
    Also handles synonyms
    Assumes that x is model_answer's keywords
    '''
    x_tokens=[]
    for x1 in x :
        x1=x1.replace(".","")
        x1=x1.replace(",","")
        x1=x1.replace("'","")
        x1=x1.replace(";","")
        x_tokens+=word_tokenize(x1)
    y_tokens=[]
    for y1 in y:
        y1=y1.replace(".","")
        y1=y1.replace(",","")
        y1=y1.replace("'","")
        y1=y1.replace(";","")
        y_tokens+=word_tokenize(y1)
    
    sw = stopwords.words('english') 
    x_List={w for w in x_tokens if not w in sw}
    y_List={w for w in y_tokens if not w in sw}
    # print(x_List)
    # print(y_List)
    Y_List=list(deepcopy(y_List))
    for wordToken in y_List : 
        synonyms=wordnet.synsets(wordToken)
        # print(synonyms)
        Y_List+=list(set(chain.from_iterable([word.lemma_names() for word in synonyms])))
    # print(Y_List)
    ps = PorterStemmer()
    X_set = {ps.stem(w) for w in x_List}
    Y_set = {ps.stem(w) for w in Y_List}
    # print(X_set)
    # print(Y_set)
    # print(X_set)
    # print(Y_set)
    count=0
    for ak in X_set :
        if ak in Y_set :
            count+=1
    return count
    
# print(compare_keyWords(['astonishment','devastated'],['amazement','water','waited','surprise']))

# s1="Encapsulation is an object-oriented programming concept that binds together the data and functions that manipulate the data, and that keeps both safe from outside interference and misuse.Data encapsulation led to the important OOP concept of data hiding. If a class does not allow calling code to access internal object data and permits access through methods only, this is a strong form of abstraction or information hiding known as encapsulation. Data encapsulation is a mechanism of bundling the data, and the functions that use them and data abstraction is a mechanism of exposing only the interfaces and hiding the implementation details from the user. Abstraction and encapsulation are complementary concepts: abstraction focuses on the observable behavior of an object. encapsulation focuses upon the implementation that gives rise to this behavior. encapsulation is most often achieved through information hiding, which is the process of hiding all of the secrets of object that do not contribute to its essential characteristics.  Encapsulation is the process of combining data and functions into a single unit called class. In Encapsulation, the data is not accessed directly; it is accessed through the functions present inside the class. In simpler words, attributes of the class are kept private and public getter and setter methods are provided to manipulate these attributes. Thus, encapsulation makes the concept of data hiding possible Abstraction is a process where you show only relevant data and hide unnecessary details of an object from the user."
# s2="Embodiment is an article arranged programming idea that ties together the information and capacities that control the information, and that keeps both safe from outside impedance and misuse.Data exemplification prompted the significant OOP idea of information covering up. In the event that a class doesn't enable calling code to get to inner item information and licenses access through techniques just, this is a solid type of reflection or data concealing known as embodiment. Information embodiment is a system of packaging the information, and the capacities that utilization them and information deliberation is a component of uncovering just the interfaces and concealing the usage subtleties from the client. Deliberation and exemplification are integral ideas: reflection centers around the perceptible conduct of an item. exemplification centers upon the usage that offers ascend to this conduct. exemplification is frequently accomplished through data stowing away, which is the way toward concealing the majority of the mysteries of article that don't add to its basic attributes. Embodiment is the way toward joining information and capacities into a solitary unit called class. In Encapsulation, the information isn't gotten to straightforwardly; it is gotten to through the capacities present inside the class. In less complex words, traits of the class are kept private and open getter and setter techniques are given to control these qualities. Hence, epitome makes the idea of information concealing conceivable Abstraction is a procedure where you show just important information and shroud superfluous subtleties of an article from the client."
# a = similarity(s1,s2)
# print(a)