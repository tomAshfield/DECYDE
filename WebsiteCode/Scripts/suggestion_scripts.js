//Finds the users location when first loading the page
let fLocation;
window.onload = function() {
    if (window.navigator.geolocation) {
        const successfulLookup = (position) => {
            const { latitude, longitude } = position.coords;
            fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=bbf45608290b47a5bdae434efcc52c87`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('location').innerHTML =  data.results[0].formatted;
            });
        }
        const error = () =>{
            document.getElementById('location').innerHTML =  "Unable to retrive your location, please refresh";
        }
        window.navigator.geolocation
    .getCurrentPosition(successfulLookup, error);
    }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Controlling the sequence of questions/answers from the user to help them decyde their activity(haha see what I did there... I'M HILLARIOUS)
var FoodDiv = document.getElementById("fFood");
var hungryYBtn = document.getElementById("hungryYes");
var hungryNBtn = document.getElementById("hungryNo");

var SettingDiv = document.getElementById("sSetting");
var InsideBtn = document.getElementById("inside");
var OutsideBtn = document.getElementById("outside");

var MoodDiv = document.getElementById("mMood");
var FunBtn = document.getElementById("fun");
var ChillBtn = document.getElementById("chill");

var NumOfPeopleDiv = document.getElementById("numberOfPeople");
var GroupBtn = document.getElementById("group");
var SoloBtn = document.getElementById("solo");
var TwoPBtn = document.getElementById("twoPeeps");

hungryYBtn.onclick = function() {
    FoodDiv.style.display = "none";
  }
hungryNBtn.onclick = function() {
    FoodDiv.style.display = "none";
    SettingDiv.style.display = "block";
  }

InsideBtn.onclick = function() {
    SettingDiv.style.display = "none";
    MoodDiv.style.display = "block";
  }
OutsideBtn.onclick = function() {
    SettingDiv.style.display = "none";
    MoodDiv.style.display = "block";
  }

FunBtn.onclick = function() {
    MoodDiv.style.display = "none";
    NumOfPeopleDiv.style.display = "block";
  }
ChillBtn.onclick = function() {
    MoodDiv.style.display = "none";
    NumOfPeopleDiv.style.display = "block";
  }

GroupBtn.onclick = function() {
    NumOfPeopleDiv.style.display = "none";
  }
SoloBtn.onclick = function() {
    NumOfPeopleDiv.style.display = "none";
  }
TwoPBtn.onclick = function() {
    NumOfPeopleDiv.style.display = "none";
  }
