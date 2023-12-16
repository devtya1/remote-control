var firebaseConfig = {
    apiKey: "AIzaSyCfIyfq6IDCvgKoZtg2d7B-4-iFBMbxc-s",
    authDomain: "test-database-for-all.firebaseapp.com",
    databaseURL: "https://test-database-for-all-default-rtdb.firebaseio.com",
    projectId: "test-database-for-all",
    storageBucket: "test-database-for-all.appspot.com",
    messagingSenderId: "24401273232",
    appId: "1:24401273232:web:06ff1f75311448641f1315"
};
firebase.initializeApp(firebaseConfig);

function load(){
    getData();
}

var timer;
var sec = 0;
var min = 0;

function getData() { 
    firebase.database().ref("/switch").on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) 
    { childKey  = childSnapshot.key; 
      childData = childSnapshot.val();
      if(childData == "true"){
        console.log("Start!");
        set();
      }
      else{
        setTimeout(refresh, 1000);
      }
    }
)}
)}

function refresh(){
    getData();
}

function set(){
    timer = setTimeout(start, 1000);
}

function start(){
    if(sec == 60){
        sec = 0;
        document.getElementById("secs").innerHTML = 0;
        min = min + 1;
        document.getElementById("mins").innerHTML = min;
        set();
    }
    else{
        sec = sec + 1;
        document.getElementById("secs").innerHTML = sec;
        set();
    }
}