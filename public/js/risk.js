var cityJSON = JSON.parse(JSON.stringify(riskFactors));

const urlParams = new URLSearchParams(window.location.search);

const cityCode = urlParams.get('city');

var cityIndex = cityJSON.findIndex(x => x.Area.toUpperCase() === cityCode.toUpperCase());

var finalCity = cityJSON[cityIndex];

console.log(cityJSON)



$( "#city" ).text(finalCity.Area);
$( "#denseAs" ).text(finalCity["Dense as NYC?"]);
$( "#centerDenser" ).text(finalCity["Center denser than NYC center?"]);
$( "#coldAs" ).text(finalCity["Cold as NYC?"]);
$( "#emptyStreets" ).text(finalCity["Empty streets?"]);
$( "#clothMasks" ).text(finalCity["Cloth masks?"]);
$( "#oldAs" ).text(finalCity["Old as New York? (Average Age)"]);