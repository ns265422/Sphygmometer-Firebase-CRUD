from firebase import firebase
#from firebase.firebase import FirebaseApplication, FirebaseAuthentication
import json
import time
import datetime

#firebase = firebase.FirebaseApplication('https://sphygmometer-nodered.firebaseio.com/', None)
firebase = firebase.FirebaseApplication('https://bloodpressuremeter.firebaseio.com/', None)

#result = firebase.get('/DATA', None)
#print(result)
doc = {
    'BP': "66",
    'DBP': "144",
    'SBP': "78"
    }
#sent = json.dumps(doc)
new_user = 'robert'
result = firebase.post('/DATA',new_user, doc)