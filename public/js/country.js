countries =
[
  {
    "id": "IN",
    "country": "India",
    "overallRiskProfile": "very high",
    "rateOfViralSpread": "Astronomically High",
    "density": "ultra dense",
    "densestUrbanArea": "Dharavi",
    "densestUrbanConcentration": "ultra dense",
    "governmentContainmentEffors": "medium",
    "lockdown": "TRUE",
    "lockdownStart": "",
    "nonEssentialBusinesssClosure": "TRUE",
    "schoolShutdown": "TRUE",
    "schoolShutdownStart": "",
    "contactTracing": "TRUE",
    "contactTracingStart": "",
    "massTesting": "FALSE",
    "massTestingStart": "",
    "maskWearingRecommended": "TRUE",
    "hospitalPreparedness": "poor"
  },
  {
    "id": "PH",
    "country": "Philippines",
    "overallRiskProfile": "very high",
    "rateOfViralSpread": "Astronomically High",
    "density": "ultra dense",
    "densestUrbanArea": "Manila",
    "densestUrbanConcentration": "ultra dense",
    "governmentContainmentEffors": "medium",
    "lockdown": "TRUE",
    "lockdownStart": "",
    "nonEssentialBusinesssClosure": "TRUE",
    "schoolShutdown": "FALSE",
    "schoolShutdownStart": "",
    "contactTracing": "FALSE",
    "contactTracingStart": "",
    "massTesting": "FALSE",
    "massTestingStart": "",
    "maskWearingRecommended": "TRUE",
    "hospitalPreparedness": "poor"
  },
  {
    "id": "US",
    "country": "United States",
    "overallRiskProfile": "medium",
    "rateOfViralSpread": "High",
    "density": "dense",
    "densestUrbanArea": "NYC",
    "densestUrbanConcentration": "very dense",
    "governmentContainmentEffors": "medium",
    "lockdown": "TRUE",
    "lockdownStart": "",
    "nonEssentialBusinesssClosure": "TRUE",
    "schoolShutdown": "TRUE",
    "schoolShutdownStart": "",
    "contactTracing": "FALSE",
    "contactTracingStart": "",
    "massTesting": "FALSE",
    "massTestingStart": "",
    "maskWearingRecommended": "TRUE",
    "hospitalPreparedness": ""
  }
]

  var countryJSON = JSON.parse(JSON.stringify(countries));

  const urlParams = new URLSearchParams(window.location.search);

  const countryCode = urlParams.get('country');

  var countryIndex = countryJSON.findIndex(x => x.id === countryCode.toUpperCase());

  var finalCountry = countryJSON[countryIndex];

  console.log(finalCountry);

  $( "#country" ).text(finalCountry.country);
  $( "#overallRiskProfile" ).text(finalCountry.overallRiskProfile);
  $( "#rateOfViralSpread" ).text(finalCountry.rateOfViralSpread);
  $( "#hospitalPreparedness" ).text(finalCountry.hospitalPreparedness);
  $( "#governmentContainmentEffors" ).text(finalCountry.governmentContainmentEffors);
  $( "#lockdown" ).text(finalCountry.lockdown);
  $( "#nonEssentialBusinesssClosure" ).text(finalCountry.nonEssentialBusinesssClosure);
  $( "#schoolShutdown" ).text(finalCountry.schoolShutdown);
  $( "#contactTracing" ).text(finalCountry.contactTracing);
  $( "#massTesting" ).text(finalCountry.massTesting);
  $( "#maskWearingRecommended" ).text(finalCountry.maskWearingRecommended);
