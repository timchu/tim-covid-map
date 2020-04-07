$("#container").mapael({
    map : {
        name : "world_countries",
        defaultArea: {
            attrs: {
                stroke: "#000",
                "stroke-width": 1,
                fill: "#FFFFFF"
            },
            attrsHover: {
                "stroke-width": 2,
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
                        fill: "#006a4e"
                    },
                    label: "Less than -9"
                },
                {
                    min: -9,
                    max:-5,
                    attrs: {
                        fill: "#5ca08e"
                    },
                    label: "Between -5 and -9"
                },
                {
                    min: -5,
                    max:-2,
                    attrs: {
                        fill: "#8abaae"
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
                        fill: "#F5A29F"
                    },
                    label: "Less than 2"
                },
                {
                    min: 2,
                    max: 5,
                    attrs: {
                        fill: "#FF514D"
                    },
                    label: "Between 2 and 5"
                },
                {
                    min: 5,
                    max: 9,
                    attrs: {
                        fill: "#800300"
                    },
                    label: "Between 5 and 9"
                },
                {
                    min: 9.01,
                    max: 9.99,
                    attrs: {
                        fill: "#580000"
                    },
                    label: "Between 9 and 10"
                },
                {
                    min: 10,
                    attrs: {
                        fill: "#000000"
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
            href: "#",
        },
        // Australia
        "AU": {
            value: 0,
            href: "#",
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
            href: "https://en.wikipedia.org/wiki/South_Korea"
        },
        // India
        "IN": {
            value: 9.5,
            href: "https://docs.google.com/document/d/105QExpbuR9AccMRahDKt51knvQ1qHRQ5Hf7vvcnVN-Y/edit?usp=sharing"
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
            href: "https://en.wikipedia.org/wiki/United_States",
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
