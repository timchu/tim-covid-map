function createToolTipContent(country, risk, density, efforts) {
    return "<div><span><b>Country:</b> "+ country + 
           "</span><br/><span><b>Risk:</b> "+ risk +
           "</span><br/><span><b>Density:</b> "+ density +
           "</span><br/><span><b>Efforts:</b> " + efforts + "</span></div>";   // The function returns the product of p1 and p2
  }

  function colorCodeLikelihood(likelihood) {
    color = ""
    switch(likelihood) {
        case "Certain":
            color = "#A70000"
            break;
        case "Nearly Certain":
            color = "#A70000"
            break;
        case "Very High":
            color = "#A70000"
            break;
        case "High":
            color = "#A70000"
            break;
        case "Medium/High":
            color = "#EB5757";
            break;
        case "Medium":
            color = "#EB5757";
            break;
        case "Low/Medium":
            color = "#F2994A";
            break;
        case "Low":
            color = "#27AE60";
            break;
        case "Very Low":
            color = "#27AE60";
            break;
        default:
            color = "";
      }
    return color;
  }

function createAreaToolTip(city, deaths, likelihood) {
    return "<div><span><b> "+ city + 
           "</b></span><br/><span><b>Projected Deaths:</b> "+ deaths +
           "</span><br/><span><b>Epicenter Likelihood</b><span style='color:" + colorCodeLikelihood(likelihood) + "'> " + likelihood + "</span></div>"
}

function createToolTip (country, risk, density, efforts) {
    return {content: createToolTipContent(country, risk, density, efforts),
            offset:  {left: 0,
                    top: 50}
            }
}

plots = {};

riskFactorsByLongLat.forEach(function (area) {
    var temp = {
        "href": "",
        "tooltip": {"content": createAreaToolTip(area["Area"], area["Projected Deaths"], area["Epicenter Likelihood"])}};
    Object.keys(area).forEach(function (k) {
        if (k === "Area") {
            temp["href"] = "risk.html?city=".concat(area[k]);
            plots[area[k]] = temp;
            return;
        }
        else if (k === "Lat") {
            temp["latitude"] = area[k];
            return;
        }
        else if (k === "Long") {
            temp["longitude"] = area[k];
            return;
        }
        else if (k === "Projected Deaths") {
            temp["value"] = area[k];
            return;
        }
        temp[k] = area[k]
    })
});


$("#container").mapael({
    map : {
        name : "world_countries",
        defaultArea: {
            attrs: {
                stroke: "#abb5b7",
                "stroke-width": 0.5,
                fill: "#f8f8f8"
            },
            attrsHover: {
                "stroke-width": 1,
                // fill: "#F5A29F",
                fill: "#f8f8f8"
            }
        },
        defaultPlot: {
            tooltip: {
                offset: {
                    left: 10,
                    top: 50,
                }
            }
        }
    },
    legend: {
        plot:{
            display: true,
            title: "Risk Factor By City",
            marginBottom: 6,
            slices: [
                {
                    type: "circle",
                    cssClass: "plot",
                    max: 0,
                    attrs: {
                        fill: "#00539C",
                        "stroke-width": 0,
                    },
                    attrsHover: {
                        transform: "s1.5",
                        "stroke-width": 0,
                    },
                    label: "No Projeted Deaths",
                    size: 1
                },
                {
                 type: "circle",
                 cssClass: "plot",
                 min: 0,
                 max: 4000,
                 attrs: {
                     fill: "#00539C",
                     "stroke-width": 0,
                 },
                 attrsHover: {
                     transform: "s1.5",
                     "stroke-width": 0,
                 },
                 label: "Up to 4000 Projected Deaths",
                 size: 3
                 },
                 {
                     type: "circle",
                     cssClass: "plot",
                     min: 4000,
                     max: 10000,
                     attrs: {
                         fill: "#00539C",
                         "stroke-width": 0,
                     },
                     attrsHover: {
                         transform: "s1.5",
                         "stroke-width": 0,
                     },
                     label: "Up to 10000 Projected Deaths",
                     size: 5
                 },
                 {
                     type: "circle",
                     cssClass: "plot",
                     min: 10000,
                     max: 20000,
                     attrs: {
                         fill: "#00539C",
                         "stroke-width": 0,
                     },
                     attrsHover: {
                         transform: "s1.5",
                         "stroke-width": 0,
                     },
                     label: "Up to 20000 Projected Deaths",
                     size: 9
                 },
                 {
                     type: "circle",
                     cssClass: "plot",
                     min: 20000,
                     max: 30000,
                     attrs: {
                         fill: "#00539C",
                         "stroke-width": 0,
                     },
                     attrsHover: {
                         transform: "s1.5",
                         "stroke-width": 0,
                     },
                     label: "Up to 30000 Projected Deaths",
                     size: 13
                 },
                 {
                     type: "circle",
                     cssClass: "plot",
                     min: 30000,
                     max: 40000,
                     attrs: {
                         fill: "#00539C",
                         "stroke-width": 0,
                     },
                     attrsHover: {
                         transform: "s1.5",
                         "stroke-width": 0,
                     },
                     label: "Up to 40000 Projected Deaths",
                     size: 15
                 },
                 {
                     type: "circle",
                     cssClass: "plot",
                     min: 40000,
                     max: 50000,
                     attrs: {
                         fill: "#00539C",
                         "stroke-width": 0,
                     },
                     attrsHover: {
                         transform: "s1.5",
                         "stroke-width": 0,
                     },
                     label: "Up to 50000 Projected Deaths",
                     size: 20
                 },
                 {
                     type: "circle",
                     cssClass: "plot",
                     min: 50000,
                     max: 60000,
                     attrs: {
                         fill: "#00539C",
                         "stroke-width": 0,
                     },
                     attrsHover: {
                         transform: "s1.5",
                         "stroke-width": 0,
                     },
                     label: "Up to 60000 Projected Deaths",
                     size: 25
                 },
                 {
                     type: "circle",
                     cssClass: "plot",
                     min: 60000,
                     attrs: {
                         fill: "#00539C",
                         "stroke-width": 0,
                     },
                     attrsHover: {
                         transform: "s1.5",
                         "stroke-width": 0,
                     },
                     label: "At least 60000 Projected Deaths",
                     size: 30
                 },
            ]},
        area: {},
    },
    areas: {
    },
    plots: plots,
});
