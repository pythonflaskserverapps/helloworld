#########################################################
# flask imports
from flask import Flask, render_template, request, redirect
#########################################################

#########################################################
# flask socketio imports
from flask_socketio import SocketIO, emit
#########################################################

#########################################################
# global imports
import time
import os
from urllib.parse import quote
import random
#########################################################

#########################################################
# local imports
from serverutils.utils import SafeLimitedUniqueQueueList
from serverutils.utils import prettylog
from serverutils.utils import geturl
from serverutils.utils import write_string_to_file
from serverutils.utils import read_string_from_file
#########################################################

#########################################################
# create app
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
#########################################################

#########################################################
# mount socket
socketio = SocketIO(app)
#########################################################

#########################################################
# global context
SIMPLE_SERVER_URL = os.environ["SIMPLE_SERVER_URL"]
MAX_CONNS = 3

def sids_overflow_callback(sid):    
    socketio.emit("siores", {"data": "conn removed"}, room = sid)
    prettylog([
        "removed SID <{}>".format(sid)
    ])

connected_sids = SafeLimitedUniqueQueueList(max = MAX_CONNS, overflow_callback = sids_overflow_callback)

class AppState:
    def __init__(self):
        pass

app_state = AppState()

def my_broadcast(obj):
    with app.app_context():        
        for sid in connected_sids.items:
            try:                
                socketio.emit("siores", obj, room = sid, namespace = "/")
            except:
                print("emit failed for sid {}".format(sid))

def proc_read_callback(sline):
    obj = {
        "kind": "procreadline",
        "data": sline
    }
    my_broadcast(obj)

class socket_handler:
    def __init__(self, ev):
        self.ev = ev
    
    def __call__(self, f):
        def wrapped_f(*args):
            json = args[0]
            rjson = {}
            connected_sids.enqueue(request.sid)
            prettylog([
                "EV <{}> SID <{}>".format(self.ev,request.sid),
                "ARGS {}".format(args),
                "CONNS {}".format(connected_sids.items)
            ])
            if "kind" in json:
                kind = json["kind"]
                if kind == "cmd":
                    rjson["kind"] = "ackcmd"
                    if "data" in json:
                        data = json["data"]
                        rjson["rcvd"] = data
                        if data == "r":
                            rjson["status"] = geturl(SIMPLE_SERVER_URL + "/startengine")
                        elif data == "s":
                            rjson["status"] = geturl(SIMPLE_SERVER_URL + "/stopengine")
                        else:
                            rjson["status"] = geturl(SIMPLE_SERVER_URL + "/e" + quote(data))
                if kind == "botcmd":
                    rjson["kind"] = "ackbotcmd"
                    if "data" in json:
                        data = json["data"]
                        rjson["rcvd"] = data
                        if data == "r":
                            rjson["status"] = geturl(SIMPLE_SERVER_URL + "/startbot")
                        elif data == "s":
                            rjson["status"] = geturl(SIMPLE_SERVER_URL + "/stopbot")
                        else:
                            rjson["status"] = geturl(SIMPLE_SERVER_URL + "/b" + quote(data))
                elif kind == "storebinid":
                    binid = json["data"]
                    write_string_to_file("binid.txt", binid)

            emit('siores', {"request":json,"response":rjson})
            f(*args)
        return wrapped_f
#########################################################

def randurl():
    return random.randint(1e9,1e10)

#########################################################
# app routes
@app.route("/")
def hello():
    print("request root", request.full_path)
    if request.full_path == "/?":
        binid = read_string_from_file("binid.txt", "local")
        rurl = "/?id=" + binid
        print("redirecting root to",rurl)
        return redirect(rurl)
    return render_template("index.html", randurl = randurl)

@app.route("/read",methods=["POST"])
def read():
    obj = request.get_json()
    my_broadcast(obj)
    return ""
#########################################################

#########################################################
# socketio event handlers
@socketio.on('sioreq')
@socket_handler('sioreq')
def handle_sioreq(json):
    pass
#########################################################

#########################################################
# startup
def startup(port = 5000):
    socketio.run(app, port = port)
#########################################################
    
#########################################################
# main
if __name__ == '__main__':    
    #startup()
    pass
#########################################################
