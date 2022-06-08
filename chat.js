// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDC93tHvMRuUlWDqx4m7PtMCoTD4pC605U",
    authDomain: "chatteringweb-project.firebaseapp.com",
    projectId: "chatteringweb-project",
    storageBucket: "chatteringweb-project.appspot.com",
    messagingSenderId: "409290655522",
    appId: "1:409290655522:web:5bde533a59ccb3201c877b"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
   localStorage.setItem("user_name", user_name);

   window.location = "chat_room.html";
}



