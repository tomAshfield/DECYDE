//Finds the users location when first loading the page
let fLocation;
const sucessfulLookup = (position) => {
    const { latitude, longitude } = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=bbf45608290b47a5bdae434efcc52c87`)
    .then(response => response.json())
    .then(fLocation = response);
};
