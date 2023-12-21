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

function addUser() {
    username = document.getElementById("username").value
    localStorage.setItem("username", username)
    window.location = "PostRoom.html"

}