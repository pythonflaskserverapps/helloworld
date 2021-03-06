######################################################
# client

######################################################
# establish submit url
if window.location.protocol == "https:":
    ws_scheme = "wss://"
else:
    ws_scheme = "ws://"

SUBMIT_URL = ws_scheme + location.host

queryparamsstring = window.location.search

queryparams = {}

if len(queryparamsstring) > 1:
    queryparamsstring = queryparamsstring[1:]
    mainparts = queryparamsstring.split('&')
    for mainpart in mainparts:
        parts = mainpart.split("=")
        queryparams[parts[0]] = parts[1]
######################################################

######################################################
# app consts

ENGINE_CMD_ALIASES = {
    "start": {"display":"R", "cmds":["r"]},
    "stop": {"display":"S", "cmds":["s"]},
    "restart": {"display":"SR", "cmds":["s","r"]}
}

BOT_CMD_ALIASES = {
    "start": {"display":"R", "cmds":["r"]},
    "stop": {"display":"S", "cmds":["s"]},
    "restart": {"display":"SR", "cmds":["s","r"]},
    "loadconfig": {"display":"LC", "cmds":["s", "r", "lc", "sc"]},
    "loadprofile": {"display":"LP", "cmds":["lp"]}
}
######################################################

######################################################
# app globals
socket = None
processconsoles = {
    "engine": None,
    "bot": None
}
maintabpane = None
configschema = SchemaDict({})
id = None
srcdiv = Div().ms().fs(20)
schemajson = None
######################################################

######################################################
# client functions
def showsrc():
    srcjsoncontent = JSON.stringify(serializeconfig(), None, 2)
    srcdiv.html("<pre>" + srcjsoncontent + "</pre>")
    maintabpane.selectByKey("src")

def serializeconfig():
    obj = {
        "config": configschema.topureobj(),
        "configschema": configschema.toobj()
    }
    return obj

def deserializeconfig(obj):
    global configschema
    schemaobj = {}
    if "configschema" in obj:
        schemaobj = obj["configschema"]    
    configschema = schemafromobj(schemaobj)

def buildconfigdiv():    
    global configschema
    configsplitpane = SplitPane({
        "controlheight": 50
    })
    configsplitpane.controldiv.aa([
        Button("Serialize", serializecallback).fs(24),
        Button("Reload", reloadcallback).fs(16),
        Button("Show source", showsrc).fs(16)
    ]).bc("#ddd")
    configsplitpane.setcontent(configschema)
    return configsplitpane

def getbincallback(content):    
    obj = JSON.parse(content)    
    deserializeconfig(obj)
    maintabpane.setTabElementByKey("config", buildconfigdiv())

def getbinerrcallback(err):
    print("get bin failed with",err)
    loadlocal()

def loadlocal():
    document.location.href="/?id=local"

def log(content, dest = "engine"):    
    li = LogItem("<pre>" + content + "</pre>")
    processconsoles[dest].log.log(li)

def cmdinpcallback(cmd, key):    
    socket.emit('sioreq', {"kind":"cmd", "key": key, "data": cmd})

def serializeputjsonbincallback(json, content):
    #print(json);return;
    try:
        obj = JSON.parse(content)        
        binid = None
        if "id" in obj:
            binid = obj["id"]                
        if "parentId" in obj:
            binid = obj["parentId"]                
        if binid is None:
            binid = "local"
        else:
            #store binid in binid.txt
            socket.emit('sioreq', {"kind":"storebinid", "data": binid})
        href = window.location.protocol + "//" + window.location.host + "/?id=" + binid        
        document.location.href = href
    except:
        print("there was an error parsing json", content)
        return

def serializecallback():
    global id, maintabpane, configschema, schemajson        
    json = JSON.stringify(serializeconfig(), None, 2)        
    putjsonbin(json, serializeputjsonbincallback, id)

def reloadcallback():
    document.location.href = "/"
######################################################

######################################################
# app
def build():
    global processconsoles, maintabpane

    processconsoles["engine"] = ProcessConsole({
        "key": "engine",
        "cmdinpcallback": cmdinpcallback,
        "cmdaliases": ENGINE_CMD_ALIASES
    })

    processconsoles["bot"] = ProcessConsole({
        "key": "bot",
        "cmdinpcallback": cmdinpcallback,
        "cmdaliases": BOT_CMD_ALIASES
    })

    maintabpane = TabPane({"kind":"main"})
    maintabpane.setTabs(
        [
            Tab("engineconsole", "Engine console", processconsoles["engine"]),
            Tab("botconsole", "Bot console", processconsoles["bot"]),
            Tab("config", "Config", buildconfigdiv()),
            Tab("src", "Src", srcdiv),
            Tab("about", "About", Div().ac("appabout").html("Flask hello world app."))
        ], "botconsole"
    )    
    
    ge("maintabdiv").innerHTML = ""
    ge("maintabdiv").appendChild(maintabpane.e)
######################################################

######################################################
# socket handler
def onconnect():    
    log("socket connected ok")    
    socket.emit('sioreq', {"data": "socket connected"})

def onevent(json):
    dest = "engine"
    logitem = None
    if "kind" in json:
        kind = json["kind"]
        if kind == "procreadline":
            dest = json["prockey"]
            sline = json["sline"]
            logitem = LogItem(sline, "cmdreadline")
            if dest == "bot":
                if len(sline)>0:
                    if sline[0] == "!":
                        logitem = LogItem("bot error:" + sline[1:], "cmdstatuserr")
    if "response" in json:
        response = json["response"]
        if "key" in response:
            dest = response["key"]
        if "status" in response:
            status = response["status"]
            logitem = LogItem(status, "cmdstatusok")
            if len(status)>0:
                if status[0] == "!":
                    logitem = LogItem(status, "cmdstatuserr")
    if logitem is None:
        log("socket received event " + JSON.stringify(json, null, 2), dest)    
    else:
        processconsoles[dest].log.log(logitem)

def windowresizehandler():
    maintabpane.resize()

def startup():
    global socket

    log("creating socket for submit url [ " + SUBMIT_URL + " ]")

    socket = io.connect(SUBMIT_URL)

    log("socket created ok")

    socket.on('connect', onconnect)
    socket.on('siores', lambda json: onevent(json))

    addEventListener(window, "resize", windowresizehandler)
######################################################

build()

if "id" in queryparams:    
    id = queryparams["id"]
    getjsonbin(id, getbincallback, getbinerrcallback)
else:
    loadlocal()

startup()
