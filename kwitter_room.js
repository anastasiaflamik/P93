// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyA8x08-g5uBhNX6BRFe9Q9IoJ_h8Fr4qow",
      authDomain: "letschat-66e4d.firebaseapp.com",
      projectId: "letschat-66e4d",
      storageBucket: "letschat-66e4d.appspot.com",
      messagingSenderId: "502712187151",
      appId: "1:502712187151:web:9cc8b1490019146b3f267a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");


    function add_room(){
          room_name = document.getElementById("room_name").value;

          localStorage.setItem("roomname", room_name)

          window.location="kwitter_page.html";

          firebase.database().rel("/").child(room_name).update({
                purpose: "Adding Room Name"

          });
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      });});}
getData();
