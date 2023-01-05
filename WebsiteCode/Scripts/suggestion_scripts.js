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

//var text = document.createTextNode(fLocation);

