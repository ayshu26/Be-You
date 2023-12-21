const firebaseConfig = {
    apiKey: "AIzaSyCQY-8zWR8Vdq2zB49hfAROUg_VBRKlEQ8",
    authDomain: "kwitter-a2f49.firebaseapp.com",
    databaseURL: "https://kwitter-a2f49-default-rtdb.firebaseio.com",
    projectId: "kwitter-a2f49",
    storageBucket: "kwitter-a2f49.appspot.com",
    messagingSenderId: "371060895632",
    appId: "1:371060895632:web:aed56326e4adfbe7e48d15",
    measurementId: "G-22K3VN43PY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
roomname = localStorage.getItem("roomname")
username = localStorage.getItem("username")
function getData() {
    firebase.database().ref("/" + roomname).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                reply=message_data["reply"]
                //Start code
                name = message_data["name"]
                message = message_data["message"]
                nametag = "<H4>" + name + "<img class='user_tick' src='tick.png'></H4>"
                messagetag = "<h4 class='message_h4'>" + message + "</h4>"
                replybtn = "<button class='btn btn-warning' id=" + firebase_message_id + " onclick='updateLike(this.id)'>Reply</button>"
                replyText="<p>"+reply+"</p> <hr>"
                row = nametag + messagetag + replybtn + replyText

                document.getElementById("output").innerHTML += row
                //End code
            }
        });
    });
}
getData();
function logout() {
    localStorage.removeItem("username")
    localStorage.removeItem("roomname")
    window.location = "index.html"
}
function send() {
    msg = document.getElementById("msg").value
    firebase.database().ref(roomname).push({
        name: username, message: msg, like: 0
    })
    document.getElementById("msg").value = ""
}
function updateLike(msgid) {
    firebase.database().ref(roomname).child(msgid).update({
    reply:document.getElementById("msg").value
    })
    document.getElementById("msg").value = ""

}