function createTooltipContent(country, risk, density, efforts) {
    return "<div><span><b>Country:</b> "+ country + 
           "</span><br/><span><b>Risk:</b> "+ risk +
           "</span><br/><span><b>Density:</b> "+ density +
           "</span><br/><span><b>Efforts:</b> " + efforts + "</span></div>";   // The function returns the product of p1 and p2
  }

function createTooltip (country, risk, density, efforts) {
    return {content: createTooltipContent(country, risk, density, efforts),
            offset:  {left: 0,
                    top: 50}
            }
}

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
                fill: "#F5A29F"
            }
        }
    },
    legend: {
        area: {
            title: "COVID Information",
            slices: [
              // Green shades, from
              // https://i.pinimg.com/originals/f4/c0/28/f4c0289ea63f9f640072b5e5c1cf6fc8.png
                {
                    max: -9,
                    attrs: {
                        fill: "#FFE9E5"
                        //"#fbfadc" 
                    },
                    label: "Less than -9"
                },
                {
                    min: -9,
                    max:-5,
                    attrs: {
                        fill: "#FFCEC5"
                        //"#c2d9cf"
                    },
                    label: "Between -5 and -9"
                },
                {
                    min: -5,
                    max:-2,
                    attrs: {
                        fill: "#FEAFA1"
                        //"#9dc3c6"
                    },
                    label: "Between -5 and -9"
                },
                {
                    min:-2,
                    max: 0,
                    attrs: {
                        fill: "#FF927F"
                        //"#b8d5cd"
                    },
                    label: "Between -2 and 0"
                },
                {
                    min: 0,
                    max: 2,
                    attrs: {
                        fill: "#FF745C"
                       // "#98bfc6"
                    },
                    label: "Less than 2"
                },
                {
                    min: 2,
                    max: 5,
                    attrs: {
                        fill:  "#FF5B3F"
                        //"#7aa8b8"
                    },
                    label: "Between 2 and 5"
                },
                {
                    min: 5,
                    max: 9,
                    attrs: {
                        fill: "#FF3B18"
                        //"#6a90a3"
                    },
                    label: "Between 5 and 9"
                },
                {
                    min: 9.01,
                    max: 9.99,
                    attrs: {
                        fill: "#CE2B0D"
                        //"#536f85"
                    },
                    label: "Between 9 and 10"
                },
                {
                    min: 10,
                    attrs: {
                        fill: "#991A03"
                        //"#40566e"
                    },
                    label: "Over 10"
                }
            ]
        }
    },
    areas: {
        // Philippines
        "PH": {
            value: 10,
            href: "country.html?country=PH",
            tooltip: createTooltip("PH", "very high", "very high", "low")
        },
        // Australia
        "AU": {
            value: 0,
            href: "#",
        },
        // Egypt
        "EG": {
            value: 9,
            href: "country.html?country=EG",
            tooltip: createTooltip("EG", "very high", "very high", "medium")
        },
        // China
        "CN": {
            value: -3,
            href: "country.html?country=CN",
            tooltip: createTooltip("CN", "low", "high", "very high")
        },
        // Japan
        "JP": {
            value: 3,
            href: "country.html?country=JP",
            tooltip: createTooltip("JP", "medium", "high", "medium")
        },
        // South Korea
        "KR": {
            value: -10,
            href: "https://en.wikipedia.org/wiki/South_Korea",
            tooltip: createTooltip("KR", "low", "low", "high")
        },
        // India
        "IN": {
            value: 9.5,
            href: "country.html?country=IN",
            tooltip: createTooltip("IN", "very high", "very high", "medium")
        },
        // Mongolia
        "MN": {
            value: 0,
            href: "country.html?country=MN",
            tooltip: createTooltip("MN", "low", "low", "medium")
        },
        // Kazakhstan
        "KZ": {
            value: 2,
        },
        // Norway
        "NO": {
            value: 2,
        },
        // Sweden
        "SE": {
            value: 4,
        },
        // Germany
        "DE": {
            value: 0,
        },
        // Kenya
        "KE": {
            value: 4,
        },
        // Indonesia
        "ID": {
            value: 9,
        },
        // Iraq
        "IQ": {
            value: 9,
        },
        // Iran
        "IR": {
            value: 4,
        },
        // Pakistan
        "PK": {
            value: 10,
            href: "country.html?country=PK",
            tooltip: createTooltip("PK", "very high", "very high", "medium/low")
        },
        // Italy
        "IT": {
            value: 2,
        },
        // Bangladesh
        "BD": {
            value: 10,
            href: "country.html?country=BD",
            tooltip: createTooltip("BD", "very high", "very high", "medium/low")
        },
        // Libya
        "LB": {
            value: 4,
        },
        // United States USA
        "US": {
            value: 3,
            href: "country.html?country=US",
            tooltip: createTooltip("US", "medium", "high", "high")
        },
        // France
        "FR": {
            value: 3,
        },
        // Brazil
        "BR": {
            value: 4,
        },
        // Vietnam
        "VN": {
            value: 2,
        },
        // Taiwan
        "TW": {
            value: -6,
        },
        // Argentina
        "AR": {
            value: 7,
        },
        // Afghanistan
        "AF": {
            value: 2,
        },
        // Colombia
        "CO": {
            value: 4,
        },
        // New Zealand
        "NZ": {
            value: 1,
        },
    }
});
