countries =
[
  {
    "id": "IN",
    "country": "India",
    "overallRiskProfile": "very high",
    "rateOfViralSpread": "Astronomically High",
    "density": "ultra dense",
    "densestUrbanArea": "Dharavi, Mumbai",
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
    "densestUrbanArea": "Tondo District, Manila",
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
    "densestUrbanArea": "Manhattan Zones 7-8, NYC",
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
    "hospitalPreparedness": "excellent"
  },
  {
    "id": "CN",
    "country": "China",
    "overallRiskProfile": "low",
    "rateOfViralSpread": "High",
    "density": "dense",
    "densestUrbanArea": "Huangpu District, Shanghai",
    "densestUrbanConcentration": "very dense",
    "governmentContainmentEffors": "high",
    "lockdown": "FALSE",
    "lockdownStart": "",
    "nonEssentialBusinesssClosure": "FALSE",
    "schoolShutdown": "TRUE",
    "schoolShutdownStart": "",
    "contactTracing": "TRUE",
    "contactTracingStart": "",
    "massTesting": "TRUE",
    "massTestingStart": "",
    "maskWearingRecommended": "TRUE",
    "hospitalPreparedness": "excellent"
  },
  {
    "id": "JP",
    "country": "Japan",
    "overallRiskProfile": "medium",
    "rateOfViralSpread": "High",
    "density": "dense",
    "densestUrbanArea": "Nakano, Tokyo",
    "densestUrbanConcentration": "dense",
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
    "hospitalPreparedness": "excellent"
  },
  {
    "id": "EG",
    "country": "Egypt",
    "overallRiskProfile": "very high",
    "rateOfViralSpread": "Astronomically High",
    "density": "ultra dense",
    "densestUrbanArea": "Imbaba, Cairo",
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
    "maskWearingRecommended": "FALSE",
    "hospitalPreparedness": "poor"
  },
  {
    "id": "BD",
    "country": "Bangladesh",
    "overallRiskProfile": "very high",
    "rateOfViralSpread": "Astronomically High",
    "density": "ultra dense",
    "densestUrbanArea": "Korail, Dhaka",
    "densestUrbanConcentration": "very dense",
    "governmentContainmentEffors": "low",
    "lockdown": "FALSE",
    "lockdownStart": "",
    "nonEssentialBusinesssClosure": "FALSE",
    "schoolShutdown": "FALSE",
    "schoolShutdownStart": "",
    "contactTracing": "FALSE",
    "contactTracingStart": "",
    "massTesting": "FALSE",
    "massTestingStart": "",
    "maskWearingRecommended": "FALSE",
    "hospitalPreparedness": "poor"
  },
  {
    "id": "PK",
    "country": "Pakistan",
    "overallRiskProfile": "very high",
    "rateOfViralSpread": "Astronomically High",
    "density": "ultra dense",
    "densestUrbanArea": "Lyari Town, Karachi",
    "densestUrbanConcentration": "very dense",
    "governmentContainmentEffors": "medium/low",
    "lockdown": "TRUE",
    "lockdownStart": "",
    "nonEssentialBusinesssClosure": "TRUE",
    "schoolShutdown": "TRUE",
    "schoolShutdownStart": "",
    "contactTracing": "FALSE",
    "contactTracingStart": "",
    "massTesting": "FALSE",
    "massTestingStart": "",
    "maskWearingRecommended": "FALSE",
    "hospitalPreparedness": "poor"
  },
  {
    "id": "MN",
    "country": "Mongolia",
    "overallRiskProfile": "low",
    "rateOfViralSpread": "Low",
    "density": "not dense",
    "densestUrbanArea": "Bayanzurkh, Ulanbataar",
    "densestUrbanConcentration": "not dense",
    "governmentContainmentEffors": "high",
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
    "hospitalPreparedness": "medium"
  }
]

  var countryJSON = JSON.parse(JSON.stringify(countries));

  const urlParams = new URLSearchParams(window.location.search);

  const countryCode = urlParams.get('country');

  var countryIndex = countryJSON.findIndex(x => x.id === countryCode.toUpperCase());

  var finalCountry = countryJSON[countryIndex];

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
