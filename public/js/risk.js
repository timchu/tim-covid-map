var cityJSON = JSON.parse(JSON.stringify(riskFactors));

const urlParams = new URLSearchParams(window.location.search);

const cityCode = urlParams.get('city');

var cityIndex = cityJSON.findIndex(x => x.Area.toUpperCase() === cityCode.toUpperCase());

var finalCity = cityJSON[cityIndex];



$( "#city" ).text(finalCity.Area);
$( "#denseAs" ).text(finalCity["Dense as NYC?"]);
$( "#packedSlums" ).text(finalCity["Packed Slums?"]);
$( "#coldAs" ).text(finalCity["Cold as NYC?"]);
$( "#emptyStreets" ).text(finalCity["Empty streets?"]);
$( "#clothMasks" ).text(finalCity["Cloth masks?"]);
$( "#oldAs" ).text(finalCity["Old as New York? (Average Age)"]);


// For the various factors:
// Mask wearing: Y = Green, N = Red, Partial = Yellow
// Dense as NY: Y = Red, N = Green, Partial = Yellow
// Unknown always black.

$( "#clothMasks" ).css( "color", function() {
    color = {};
    switch(finalCity["Cloth masks?"]) {
        case "Yes":
            color = "#27AE60";
            break;
        case "No":
            color = "#EB5757";
            break; 
        case "PARTIAL":
            color = "#F2C94C";
            break; 
        default:
            color = "";
    }
    return color;
  });

$( "#packedSlums" ).css( "color", function() {
color = {};
switch(finalCity["Packed Slums?"]) {
    case "Yes":
        color = "#EB5757";
        break;
    case "No":
        color = "#27AE60";
        break; 
    case "PARTIAL":
        color = "#F2C94C";
        break; 
    default:
        color = "";
}
return color;
});
  
$( "#emptyStreets" ).css( "color", function() {
color = {};
switch(finalCity["Empty streets?"]) {
    case "No":
        color = "#EB5757";
        break;
    case "Yes":
        color = "#27AE60";
        break; 
    case "PARTIAL":
        color = "#F2C94C";
        break; 
    default:
        color = "";
}
return color;
});
$( "#coldAs" ).css( "color", function() {
color = {};
switch(finalCity["Cold as NYC?"]) {
    case "Yes":
        color = "#EB5757";
        break;
    case "No":
        color = "#27AE60";
        break; 
    case "PARTIAL":
        color = "#F2C94C";
        break; 
    default:
        color = "";
}
return color;
});

$( "#oldAs" ).css( "color", function() {
color = {};
switch(finalCity["Old as New York? (Average Age)"]) {
    case "Yes":
        color = "#EB5757";
        break;
    case "No":
        color = "#27AE60";
        break; 
    case "PARTIAL":
        color = "#F2C94C";
        break; 
    default:
        color = "";
}
return color;
});

$( "#denseAs" ).css( "color", function() {
color = {};
switch(finalCity["Dense as NYC?"]) {
    case "Yes":
        color = "#EB5757";
        break;
    case "No":
        color = "#27AE60";
        break; 
    case "PARTIAL":
        color = "#F2C94C";
        break; 
    default:
        color = "";
}
return color;
});

