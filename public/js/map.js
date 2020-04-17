function createToolTipContent(country, risk, density, efforts) {
    return "<div><span><b>Country:</b> "+ country + 
           "</span><br/><span><b>Risk:</b> "+ risk +
           "</span><br/><span><b>Density:</b> "+ density +
           "</span><br/><span><b>Efforts:</b> " + efforts + "</span></div>";   // The function returns the product of p1 and p2
  }

function createToolTip (country, risk, density, efforts) {
    return {content: createToolTipContent(country, risk, density, efforts),
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
                    min:0,
                    max:2,
                    attrs: {
                        fill: 
                          //"#006A4E" // green
                         "#FFE9E5" // red
                        //"#fbfadc"  // blue
                    },
                },
                {
                    min: 2,
                    max: 3,
                    attrs: {
                        fill: 
                          //"#8ABAAE" //green
                         "#FFCEC5" // red
                        //"#c2d9cf" // blue
                    },
                },
                {
                    min: 3,
                    max: 4,
                    attrs: {
                        fill: 
                          //"#8ABAAE" // green-red
                         "#FEAFA1" // red
                        //"#9dc3c6" // blue
                    },
                    label: "Between -5 and -9"
                },
                {
                    min: 4,
                    max: 5,
                    attrs: {
                        fill: 
                          //"#FEAFA1"  // green-red // this color is garbo
                         "#FF927F" // red
                        //"#b8d5cd" // blue
                    },
                },
                {
                    min: 5,
                    max: 7,
                    attrs: {
                        fill: 
                          //"#F5A29F"
                         "#FF3B18" // red
                        //"#6a90a3" // blue
                    },
                },
                {
                    min: 7,
                    max: 8,
                    attrs: {
                        fill: 
                          //"FF3B18"
                        "#FF3B18" // red
                        //"#6a90a3" // blue
                    },
                },
                {
                    min: 8,
                    max: 9,
                    attrs: {
                        fill: 
                          //"#FF514D"
                         "#CE2B0D" // red
                        //"#536f85" // blue
                    },
                },
                {
                    min: 9,
                    attrs: {
                        fill: 
                         // "#800300"
                         "#991A03" // red
                        //"#40566e" // blue
                    },
                }
            ]
        }
    },
    areas: {
        // Philippines
        "PH": {
            value: 10,
            href: "country.html?country=PH",
            tooltip: createToolTip("PH", "very high", "very high", "low")
        },
        "CA": {
            value: 5,
            href: "country.html?country=CA",
            tooltip: createToolTip("CA", "very high", "very high", "low")
        },
        "PL": {
            value: 5,
            href: "country.html?country=PL",
            tooltip: createToolTip("PL", "very high", "very high", "low")
        },
        "AF": {
            value: 6,
            href: "country.html?country=AF",
            tooltip: createToolTip("AF", "very high", "very high", "low")
        },
        "CD": {
            value: 6,
            href: "country.html?country=CD",
            tooltip: createToolTip("CD", "very high", "very high", "low")
        },
        "EE": {
            value: 6,
            href: "country.html?country=ES",
            tooltip: createToolTip("ES", "very high", "very high", "low")
        },
        "NG": {
            value: 7,
            href: "country.html?country=NG",
            tooltip: createToolTip("NG", "very high", "very high", "low")
        },
        "NG": {
            value: 7,
            href: "country.html?country=GH",
            tooltip: createToolTip("GH", "very high", "very high", "low")
        },
        "FI": {
            value: 4,
            href: "country.html?country=FI",
            tooltip: createToolTip("FI", "very high", "very high", "low")
        },
        "DK": {
            value: 4,
            href: "country.html?country=DK",
            tooltip: createToolTip("DK", "very high", "very high", "low")
        },
        "SA": {
            value: 5,
            href: "country.html?country=SA",
            tooltip: createToolTip("SA", "very high", "very high", "low")
        },
        "MX": {
            value: 7,
            href: "country.html?country=MX",
            tooltip: createToolTip("MX", "very high", "very high", "low")
        },
        "RO": {
            value: 6,
            href: "country.html?country=RO",
            tooltip: createToolTip("RO", "very high", "very high", "low")
        },
        "DZ": {
            value: 10,
            href: "country.html?country=DZ",
            tooltip: createToolTip("DZ", "very high", "very high", "low")
        },
        "KE": {
            value: 10,
            href: "country.html?country=KE",
            tooltip: createToolTip("KE", "very high", "very high", "low")
        },
        "ET": {
            value: 10,
            href: "country.html?country=ET",
            tooltip: createToolTip("ET", "very high", "very high", "low")
        },
        "PK": {
            value: 10,
            href: "country.html?country=PK",
            tooltip: createToolTip("PK", "very high", "very high", "low")
        },
        "BD": {
            value: 10,
            href: "country.html?country=BD",
            tooltip: createToolTip("BD", "very high", "very high", "low")
        },
        "BR": {
            value: 10,
            href: "country.html?country=BR",
            tooltip: createToolTip("BR", "very high", "very high", "low")
        },
        "IN": {
            value: 10,
            href: "country.html?country=IN",
            tooltip: createToolTip("IN", "very high", "very high", "low")
        },
        "EG": {
            value: 10,
            href: "country.html?country=EG",
            tooltip: createToolTip("EG", "very high", "very high", "low")
        },
        "CU": {
            value: 10,
            href: "country.html?country=CU",
            tooltip: createToolTip("CU", "very high", "very high", "low")
        },
        "SY": {
            value: 10,
            href: "country.html?country=SY",
            tooltip: createToolTip("SY", "very high", "very high", "low")
        },
        "IQ": {
            value: 10,
            href: "country.html?country=IQ",
            tooltip: createToolTip("IQ", "very high", "very high", "low")
        },
        "TZ": {
            value: 4,
            href: "country.html?country=TZ",
            tooltip: createToolTip("TZ", "very high", "very high", "low")
        },
        "ID": {
            value: 10,
            href: "country.html?country=ID",
            tooltip: createToolTip("ID", "very high", "very high", "low")
        },
        "ZA": {
            value: 7,
            href: "country.html?country=ZA",
            tooltip: createToolTip("ZA", "very high", "very high", "low")
        },
        "US": {
            value: 6,
            href: "country.html?country=US",
            tooltip: createToolTip("US", "very high", "very high", "low")
        },
        "CO": {
            value: 6,
            href: "country.html?country=CO",
            tooltip: createToolTip("CO", "very high", "very high", "low")
        },
        "ES": {
            value: 4,
            href: "country.html?country=ES",
            tooltip: createToolTip("ES", "very high", "very high", "low")
        },
        "TR": {
            value: 4,
            href: "country.html?country=TR",
            tooltip: createToolTip("TR", "very high", "very high", "low")
        },
        "HU": {
            value: 4,
            href: "country.html?country=HU",
            tooltip: createToolTip("HU", "very high", "very high", "low")
        },
        "SE": {
            value: 5,
            href: "country.html?country=SE",
            tooltip: createToolTip("SE", "very high", "very high", "low")
        },
        "RU": {
            value: 5,
            href: "country.html?country=RU",
            tooltip: createToolTip("RU", "very high", "very high", "low")
        },
        "FR": {
            value: 5,
            href: "country.html?country=FR",
            tooltip: createToolTip("FR", "very high", "very high", "low")
        },
        "AR": {
            value: 6,
            href: "country.html?country=AR",
            tooltip: createToolTip("AR", "very high", "very high", "low")
        },
        "PE": {
            value: 5,
            href: "country.html?country=PE",
            tooltip: createToolTip("PE", "very high", "very high", "low")
        },
        "TW": {
            value: 4,
            href: "country.html?country=TW",
            tooltip: createToolTip("TW", "very high", "very high", "low")
        },
        "HK": {
            value: 4,
            href: "countryhtml?country=HK",
            tooltip: createToolTip("HK", "very high", "very high", "low")
        },
        "JP": {
            value: 4,
            href: "country.html?country=JP",
            tooltip: createToolTip("JP", "very high", "very high", "low")
        },
        "TH": {
            value: 6,
            href: "country.html?country=TH",
            tooltip: createToolTip("TH", "very high", "very high", "low")
        },
        "IT": {
            value: 4,
            href: "country.html?country=IT",
            tooltip: createToolTip("IT", "very high", "very high", "low")
        },
        "UZ": {
            value: 4,
            href: "country.html?country=UZ",
            tooltip: createToolTip("UZ", "very high", "very high", "low")
        },
        "GB": {
            value: 6,
            href: "country.html?country=GB",
            tooltip: createToolTip("GB", "very high", "very high", "low")
        },
        "CN": {
            value: 4,
            href: "country.html?country=CN",
            tooltip: createToolTip("CN", "very high", "very high", "low")
        },
        "DE": {
            value: 4,
            href: "country.html?country=DE",
            tooltip: createToolTip("DE", "very high", "very high", "low")
        },
        "SG": {
            value: 2,
            href: "country.html?country=SG",
            tooltip: createToolTip("SG", "very high", "very high", "low")
        },
        "VN": {
            value: 2,
            href: "country.html?country=VN",
            tooltip: createToolTip("VN", "very high", "very high", "low")
        },
        "UA": {
            value: 4,
            href: "country.html?country=UA",
            tooltip: createToolTip("UA", "very high", "very high", "low")
        },
        "NO": {
            value: 4,
            href: "country.html?country=NO",
            tooltip: createToolTip("NO", "very high", "very high", "low")
        },
        "KR": {
            value: 4,
            href: "country.html?country=KR",
            tooltip: createToolTip("KR", "very high", "very high", "low")
        },
        "IL": {
            value: 0,
            href: "country.html?country=IL",
            tooltip: createToolTip("IL", "very high", "very high", "low")
        },
        "MN": {
            value: 2,
            href: "country.html?country=MN",
            tooltip: createToolTip("MN", "very high", "very high", "low")
        },
        "IS": {
            value: 2,
            href: "country.html?country=IS",
            tooltip: createToolTip("IS", "very high", "very high", "low")
        },
        // Australia
        "AU": {
            value: 2,
            href: "#",
        },
        // Egypt
        "EG": {
            value: 9,
            href: "country.html?country=EG",
            tooltip: createToolTip("EG", "very high", "very high", "medium")
        },
        "TJ": {
            value: 4,
            href: "country.html?country=EG",
            tooltip: createToolTip("EG", "very high", "very high", "medium")
        },
        // Kazakhstan
        "KZ": {
            value: 2,
        },
    }
});
