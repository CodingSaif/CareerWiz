from ast import Global
from flask import Flask, jsonify, request

from wtforms import Form, TextAreaField, validators
import pickle
import pickle
import pandas as pd
import nltk
#nltk.download('omw-1.4')
from nltk.stem import PorterStemmer, WordNetLemmatizer
from nltk.corpus import stopwords
from nltk import word_tokenize
import os
import sqlite3
import re


app = Flask(__name__)


i_model_etc = pickle.load(open('i_model_etc.pkl', 'rb'))
n_model_etc = pickle.load(open('n_model_etc.pkl', 'rb'))
t_model_etc = pickle.load(open('t_model_etc.pkl', 'rb'))
j_model_etc = pickle.load(open('j_model_etc.pkl', 'rb'))

cur_dir = os.path.dirname(__file__)
db = os.path.join(cur_dir,'personality_data.sqlite')

unique_type_list = ['INFJ', 'ENTP', 'INTP', 'INTJ', 'ENTJ', 'ENFJ', 'INFP', 'ENFP',
       'ISFP', 'ISTP', 'ISFJ', 'ISTJ', 'ESTP', 'ESFP', 'ESTJ', 'ESFJ']
unique_type_list = [x.lower() for x in unique_type_list]
stemmer = PorterStemmer()
lemmatiser = WordNetLemmatizer()
cachedStopWords = stopwords.words("english")

def cleanText(text):
    text = re.sub('http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|(?:%[0-9a-fA-F][0-9a-fA-F]))+', ' ', text)
    text = re.sub("[^a-zA-Z]", " ", text)
    text = re.sub(' +', ' ', text).lower()
    text = " ".join([lemmatiser.lemmatize(w) for w in text.split(' ') if w not in cachedStopWords])
    for t in unique_type_list:
        text = text.replace(t, "")
    return text


    
def sqlite_entry(path,mbti_input,results):
    conn = sqlite3.connect(path)
    c = conn.cursor()
    c.execute("INSERT INTO livedata_db" \
            " (textual_input, personality_type, date) VALUES" \
            " (?, ?, DATETIME('now'))", (str(mbti_input), str(results)))
    conn.commit()
    conn.close()

#FOR Reading Data
def sqlite_reading(path,mbti_input):
    conn = sqlite3.connect(path)
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    c.execute("select personality_type from livedata_db where textual_input = VALUES "),(str(mbti_input))
    rows = c.fetchall()
    conn.commit()
    conn.close()
    return jsonify(rows=rows)


def classify_mbti(mbti_input):
    temp_df = pd.DataFrame()
    temp_df['input'] = [mbti_input]
    temp_df['cleaned'] = temp_df['input'].apply(cleanText)
    i = int(i_model_etc.predict(temp_df['cleaned']))
    n = int(n_model_etc.predict(temp_df['cleaned']))
    t = int(t_model_etc.predict(temp_df['cleaned']))
    j = int(j_model_etc.predict(temp_df['cleaned']))

    probab = []
    probab.append(i_model_etc.predict_proba(temp_df['cleaned']))
    probab.append(n_model_etc.predict_proba(temp_df['cleaned']))
    probab.append(t_model_etc.predict_proba(temp_df['cleaned']))
    probab.append(j_model_etc.predict_proba(temp_df['cleaned']))



    complete = []
    comp_init = []
    if i == 1:
        complete.append('Introversion')
        comp_init.append('I')
    else:
        complete.append('Extroversion')
        comp_init.append('E')
    if n == 1:
        complete.append('Intuition')
        comp_init.append('N')
    else:
        complete.append('Sensing')
        comp_init.append('S')
    if t == 1:
        complete.append('Thinking')
        comp_init.append('T')
    else:
        complete.append('Feeling')
        comp_init.append('F')
    if j == 1:
        complete.append('Judging')
        comp_init.append('J')
    else:
        complete.append('Percieving')
        comp_init.append('P')
    person_string = ''
    for i in comp_init:
        person_string += i

    """print("\n/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / \n")
    print("MBTI Personality: {}".format(person_string))"""

    probab_simp = []
    for i in range(4):
        if probab[i][0][0] > probab[i][0][1]:
            append_value = probab[i][0][0]
        else:
            append_value = probab[i][0][1]
        probab_simp.append(append_value)
    '''
    results = pd.DataFrame({'Characteristic':complete,'Probability':probab_simp})
    print("Your MBTI characteristics are: {}".format(person_string_comp))
    results'''
    #results = pd.DataFrame({'Characteristic': complete, 'Abbreviation': comp_init, 'Probability': probab_simp})
    results = person_string
    #percent introversion=
    #percent intuitive=
    return results #probab_i, probab_e, probab_n, probab_s, probab_t, probab_f, probab_j, probab_p


class MBTIForm(Form):
    mbti_text = TextAreaField('', [validators.DataRequired(),
                                  validators.length(min=15)])

input_text = "NONE For NOW"
input_result = "SSSS"

@app.route('/')
def index():
    form = MBTIForm(request.form)

    

#This one send the Data to the Form

@app.route('/quiz', methods=['POST'])
def results():
    data = request.get_json()
    if request.method == 'POST':
        print(data)
        raw_text = str(data)
        results_df = classify_mbti(raw_text)
        global input_text 
        input_text =raw_text
        global input_result 
        input_result = results_df
        print(input_text)
        sqlite_entry(db, raw_text, results_df)
        return {'quiz':['pushed']}
    return {'quiz':["done"]}

#This one gets the Data to the form


@app.route('/results', methods=['GET'])
def quiz():
    res={"input_result":input_result,
            "input_text":input_text}
    return jsonify(res)
    
#form = MBTIForm(request.form)
   # if request.method == 'POST' and form.validate():
      #  raw_text = request.form['mbti_text']
       # results_df = classify_mbti(raw_text)
        #return jsonify(results_df)    
    
   # essay = str(request.json['essay'])
    
    
   # if request.method == 'GET' and form.validate():
     #   raw_text = request.form['mbti_text']
      #  results_df = classify_mbti(raw_text)
        #return {'result':results_df}
    

#@app.route('/thanks', methods=['POST'])
#def db_entry():
    #db_entry = request.form['db_entry_button']
   # content = request.form['content']
    #final_results = request.form['results']

    #sqlite_entry(db, content, final_results)
    #return render_template('thanks.js')



if __name__ == '__main__':
    app.run(debug=True)