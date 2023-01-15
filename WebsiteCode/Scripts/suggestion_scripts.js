//Finds the users location when first loading the page
let fLocation;
window.onload = function () {
  if (window.navigator.geolocation) {
    const successfulLookup = (position) => {
      const { latitude, longitude } = position.coords;
      fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=bbf45608290b47a5bdae434efcc52c87`
      )
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("location").innerHTML =
            data.results[0].formatted;
        });
    };
    const error = () => {
      document.getElementById("location").innerHTML =
        "Unable to retrive your location, please refresh";
    };
    window.navigator.geolocation.getCurrentPosition(successfulLookup, error);
  }
};
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Controlling the sequence of questions/answers from the user to help them decyde their activity(haha see what I did there... I'M HILLARIOUS)
var FoodDiv = document.getElementById("fFood");
var hungryYBtn = document.getElementById("hungryYes");
var hungryNBtn = document.getElementById("hungryNo");
var FGoBack = document.getElementById("fgoBack");
var FoodList = document.getElementById("specificFoods");

var SettingDiv = document.getElementById("sSetting");
var SettingGoBackBtn = document.getElementById("sGBack");

var InsideBtn = document.getElementById("inside");
var InsideList = document.getElementById("inList");
var InsideGoBackBtn = document.getElementById("iGBack");

var OutsideBtn = document.getElementById("outside");
var OutsideGoBackBtn = document.getElementById("oGBack");
var OutsideList = document.getElementById("outList");

hungryYBtn.onclick = function () {
  FoodDiv.style.display = "none";
  FoodList.style.display = "block";
};
hungryNBtn.onclick = function () {
  FoodDiv.style.display = "none";
  SettingDiv.style.display = "block";
};

FGoBack.onclick = function () {
  FoodList.style.display = "none";
  FoodDiv.style.display = "block";
};

SettingGoBackBtn.onclick = function () {
  SettingDiv.style.display = "none";
  FoodDiv.style.display = "block";
};

InsideBtn.onclick = function () {
  SettingDiv.style.display = "none";
  InsideList.style.display = "block";
};

InsideGoBackBtn.onclick = function () {
  InsideList.style.display = "none";
  SettingDiv.style.display = "block";
};

OutsideBtn.onclick = function () {
  SettingDiv.style.display = "none";
  OutsideList.style.display = "block";
};

OutsideGoBackBtn.onclick = function () {
  OutsideList.style.display = "none";
  SettingDiv.style.display = "block";
};
