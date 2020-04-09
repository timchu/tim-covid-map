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
                        fill: "#fbfadc"
                    },
                    label: "Less than -9"
                },
                {
                    min: -9,
                    max:-5,
                    attrs: {
                        fill: "#c2d9cf"
                    },
                    label: "Between -5 and -9"
                },
                {
                    min: -5,
                    max:-2,
                    attrs: {
                        fill: "#9dc3c6"
                    },
                    label: "Between -5 and -9"
                },
                {
                    min:-2,
                    max: 0,
                    attrs: {
                        fill: "#b8d5cd"
                    },
                    label: "Between -2 and 0"
                },
                {
                    min: 0,
                    max: 2,
                    attrs: {
                        fill: "#98bfc6"
                    },
                    label: "Less than 2"
                },
                {
                    min: 2,
                    max: 5,
                    attrs: {
                        fill: "#7aa8b8"
                    },
                    label: "Between 2 and 5"
                },
                {
                    min: 5,
                    max: 9,
                    attrs: {
                        fill: "#6a90a3"
                    },
                    label: "Between 5 and 9"
                },
                {
                    min: 9.01,
                    max: 9.99,
                    attrs: {
                        fill: "#536f85"
                    },
                    label: "Between 9 and 10"
                },
                {
                    min: 10,
                    attrs: {
                        fill: "#40566e"
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
            tooltip: createTooltip("PH", "high", "high", "low")
        },
        // Australia
        "AU": {
            value: 0,
            href: "#",
            tooltip: createTooltip("AU", "medium", "medium", "high")
        },
        // Egypt
        "EG": {
            value: 9,
            href: "https://en.wikipedia.org/wiki/Egypt"
        },
        // China
        "CN": {
            value: -3,
            href: "https://en.wikipedia.org/wiki/China"
        },
        // Japan
        "JP": {
            value: 3,
            href: "https://en.wikipedia.org/wiki/Japan"
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
            tooltip: createTooltip("IN", "high", "high", "low")
        },
        // Mongolia
        "MN": {
            value: 0,
            href: "https://en.wikipedia.org/wiki/Mongolia"
        },
        // Kazakhstan
        "KZ": {
            value: 2,
            href: "https://en.wikipedia.org/wiki/Kazakhstan"
        },
        // Norway
        "NO": {
            value: 2,
            href: "https://en.wikipedia.org/wiki/Norway"
        },
        // Sweden
        "SE": {
            value: 4,
            href: "https://en.wikipedia.org/wiki/Sweden"
        },
        // Germany
        "DE": {
            value: 0,
            href: "https://en.wikipedia.org/wiki/Germany"
        },
        // Kenya
        "KE": {
            value: 4,
            href: "https://en.wikipedia.org/wiki/Kenya"
        },
        // Indonesia
        "ID": {
            value: 9,
            href: "https://en.wikipedia.org/wiki/Indonesia"
        },
        // Iraq
        "IQ": {
            value: 9,
            href: "https://en.wikipedia.org/wiki/Iraq"
        },
        // Iran
        "IR": {
            value: 4,
            href: "https://en.wikipedia.org/wiki/Iran"
        },
        // Pakistan
        "PK": {
            value: 10,
            href: "https://docs.google.com/document/d/17naBZcAOEfMv28mtm06k83jRrozVqGQ7ZSHwC8njOSg/edit?usp=sharing"
        },
        // Italy
        "IT": {
            value: 2,
            href: "https://en.wikipedia.org/wiki/Italy"
        },
        // Bangladesh
        "BD": {
            value: 10,
            href: "https://en.wikipedia.org/wiki/Bangladesh"
        },
        // Libya
        "LB": {
            value: 4,
            href: "https://en.wikipedia.org/wiki/Libya",
        },
        // United States USA
        "US": {
            value: 3,
            href: "country.html?country=US",
            tooltip: createTooltip("US", "high", "high", "low")
        },
        // France
        "FR": {
            value: 3,
            href: "https://en.wikipedia.org/wiki/France",
        },
        // Brazil
        "BR": {
            value: 4,
            href: "https://en.wikipedia.org/wiki/Brazil",
        },
        // Vietnam
        "VN": {
            value: 2,
            href: "https://en.wikipedia.org/wiki/Vietnam",
        },
        // Taiwan
        "TW": {
            value: -6,
            href: "https://en.wikipedia.org/wiki/Taiwan",
        },
        // Argentina
        "AR": {
            value: 7,
            href: "https://en.wikipedia.org/wiki/Argentina",
        },
        // Afghanistan
        "AF": {
            value: 2,
            href: "https://en.wikipedia.org/wiki/Afghanistan",
        },
        // Colombia
        "CO": {
            value: 4,
            href: "https://en.wikipedia.org/wiki/Colombia",
        },
        // New Zealand
        "NZ": {
            value: 1,
            href: "https://en.wikipedia.org/wiki/New_Zealand",
        },
    }
});
