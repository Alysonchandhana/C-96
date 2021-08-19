
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCTJCldjCU91yH5fVH7FflHIzx4zbTm33Y",
      authDomain: "kwitter-66e9c.firebaseapp.com",
      projectId: "kwitter-66e9c",
      storageBucket: "kwitter-66e9c.appspot.com",
      messagingSenderId: "1062462089902",
      appId: "1:1062462089902:web:3581e12d2c8ea728ff9b3f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
