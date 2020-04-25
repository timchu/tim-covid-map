function createToolTipContent(country, risk, density, efforts) {
    return "<div><span><b>Country:</b> "+ country + 
           "</span><br/><span><b>Risk:</b> "+ risk +
           "</span><br/><span><b>Density:</b> "+ density +
           "</span><br/><span><b>Efforts:</b> " + efforts + "</span></div>";   // The function returns the product of p1 and p2
  }

areas = {// Philippines
    "PH": {
        value: 10,
        href: "country.html?country=PH",
        // tooltip: createToolTipContent("PH", "very high", "very high", "low")
    },
    "CA": {
        value: 5,
        href: "country.html?country=CA",
        // tooltip: createToolTipContent("CA", "very high", "very high", "low")
    },
    "AO": {
        value: 5,
        href: "country.html?country=AO",
        // tooltip: createToolTipContent("AO", "very high", "very high", "low")
    },
    "IR": {
        value: 5,
        href: "country.html?country=IR",
        // tooltip: createToolTipContent("IR", "very high", "very high", "low")
    },
    "LY": {
        value: 5,
        href: "country.html?country=LY",
        // tooltip: createToolTipContent("LY", "very high", "very high", "low")
    },
    "NE": {
        value: 5,
        href: "country.html?country=NE",
        // tooltip: createToolTipContent("NE", "very high", "very high", "low")
    },
    "ML": {
        value: 6,
        href: "country.html?country=ML",
        // tooltip: createToolTipContent("ML", "very high", "very high", "low")
    },
    "MA": {
        value: 5,
        href: "country.html?country=MA",
        // tooltip: createToolTipContent("MA", "very high", "very high", "low")
    },
    "AM": {
        value: 3,
        href: "country.html?country=AM",
        // tooltip: createToolTipContent("AM", "very high", "very high", "low")
    },
    "AT": {
        value: 4,
        href: "country.html?country=AT",
        // tooltip: createToolTipContent("AT", "very high", "very high", "low")
    },
    "BY": {
        value: 4,
        href: "country.html?country=BY",
        // tooltip: createToolTipContent("BY", "very high", "very high", "low")
    },
    "BE": {
        value: 4,
        href: "country.html?country=BE",
        // tooltip: createToolTipContent("BE", "very high", "very high", "low")
    },
    "BO": {
        value: 10,
        href: "country.html?country=BO",
        // tooltip: createToolTipContent("BO", "very high", "very high", "low")
    },
    "BW": {
        value: 10,
        href: "country.html?country=BW",
        // tooltip: createToolTipContent("BW", "very high", "very high", "low")
    },
    "BF": {
        value: 10,
        href: "country.html?country=BF",
        // tooltip: createToolTipContent("BF", "very high", "very high", "low")
    },
    "CM": {
        value: 10,
        href: "country.html?country=CM",
        // tooltip: createToolTipContent("CM", "very high", "very high", "low")
    },
    "TD": {
        value: 5,
        href: "country.html?country=TD",
        // tooltip: createToolTipContent("TD", "very high", "very high", "low")
    },
    "CG": {
        value: 10,
        href: "country.html?country=CG",
        // tooltip: createToolTipContent("CG", "very high", "very high", "low")
    },
    "HR": {
        value: 4,
        href: "country.html?country=HR",
        // tooltip: createToolTipContent("HR", "very high", "very high", "low")
    },
    "CZ": {
        value: 4,
        href: "country.html?country=CZ",
        // tooltip: createToolTipContent("CZ", "very high", "very high", "low")
    },
    "EC": {
        value: 10,
        href: "country.html?country=EC",
        // tooltip: createToolTipContent("EC", "very high", "very high", "low")
    },
    "PL": {
        value: 5,
        href: "country.html?country=PL",
        // tooltip: createToolTipContent("PL", "very high", "very high", "low")
    },
    "AF": {
        value: 6,
        href: "country.html?country=AF",
        // tooltip: createToolTipContent("AF", "very high", "very high", "low")
    },
    "CD": {
        value: 6,
        href: "country.html?country=CD",
        // tooltip: createToolTipContent("CD", "very high", "very high", "low")
    },
    "EE": {
        value: 6,
        href: "country.html?country=ES",
        // tooltip: createToolTipContent("ES", "very high", "very high", "low")
    },
    "NG": {
        value: 7,
        href: "country.html?country=NG",
        // tooltip: createToolTipContent("NG", "very high", "very high", "low")
    },
    "NG": {
        value: 7,
        href: "country.html?country=GH",
        // tooltip: createToolTipContent("GH", "very high", "very high", "low")
    },
    "FI": {
        value: 4,
        href: "country.html?country=FI",
        // tooltip: createToolTipContent("FI", "very high", "very high", "low")
    },
    "DK": {
        value: 4,
        href: "country.html?country=DK",
        // tooltip: createToolTipContent("DK", "very high", "very high", "low")
    },
    "SA": {
        value: 5,
        href: "country.html?country=SA",
        // tooltip: createToolTipContent("SA", "very high", "very high", "low")
    },
    "MX": {
        value: 7,
        href: "country.html?country=MX",
        // tooltip: createToolTipContent("MX", "very high", "very high", "low")
    },
    "RO": {
        value: 6,
        href: "country.html?country=RO",
        // tooltip: createToolTipContent("RO", "very high", "very high", "low")
    },
    "DZ": {
        value: 6,
        href: "country.html?country=DZ",
        // tooltip: createToolTipContent("DZ", "very high", "very high", "low")
    },
    "KE": {
        value: 10,
        href: "country.html?country=KE",
        // tooltip: createToolTipContent("KE", "very high", "very high", "low")
    },
    "ET": {
        value: 10,
        href: "country.html?country=ET",
        // tooltip: createToolTipContent("ET", "very high", "very high", "low")
    },
    "PK": {
        value: 10,
        href: "country.html?country=PK",
        // tooltip: createToolTipContent("PK", "very high", "very high", "low")
    },
    "BD": {
        value: 10,
        href: "country.html?country=BD",
        // tooltip: createToolTipContent("BD", "very high", "very high", "low")
    },
    "BR": {
        value: 10,
        href: "country.html?country=BR",
        // tooltip: createToolTipContent("BR", "very high", "very high", "low")
    },
    "IN": {
        value: 10,
        href: "country.html?country=IN",
        // tooltip: createToolTipContent("IN", "very high", "very high", "low")
    },
    "EG": {
        value: 10,
        href: "country.html?country=EG",
        // tooltip: createToolTipContent("EG", "very high", "very high", "low")
    },
    "CU": {
        value: 10,
        href: "country.html?country=CU",
        // tooltip: createToolTipContent("CU", "very high", "very high", "low")
    },
    "SY": {
        value: 10,
        href: "country.html?country=SY",
        // tooltip: createToolTipContent("SY", "very high", "very high", "low")
    },
    "IQ": {
        value: 8,
        href: "country.html?country=IQ",
        // tooltip: createToolTipContent("IQ", "very high", "very high", "low")
    },
    "TZ": {
        value: 4,
        href: "country.html?country=TZ",
        // tooltip: createToolTipContent("TZ", "very high", "very high", "low")
    },
    "ID": {
        value: 10,
        href: "country.html?country=ID",
        // tooltip: createToolTipContent("ID", "very high", "very high", "low")
    },
    "ZA": {
        value: 7,
        href: "country.html?country=ZA",
        // tooltip: createToolTipContent("ZA", "very high", "very high", "low")
    },
    "US": {
        value: 6,
        href: "country.html?country=US",
        // tooltip: createToolTipContent("US", "very high", "very high", "low")
    },
    "CO": {
        value: 6,
        href: "country.html?country=CO",
        // tooltip: createToolTipContent("CO", "very high", "very high", "low")
    },
    "ES": {
        value: 4,
        href: "country.html?country=ES",
        // tooltip: createToolTipContent("ES", "very high", "very high", "low")
    },
    "TR": {
        value: 4,
        href: "country.html?country=TR",
        // tooltip: createToolTipContent("TR", "very high", "very high", "low")
    },
    "HU": {
        value: 4,
        href: "country.html?country=HU",
        // tooltip: createToolTipContent("HU", "very high", "very high", "low")
    },
    "SE": {
        value: 5,
        href: "country.html?country=SE",
        // tooltip: createToolTipContent("SE", "very high", "very high", "low")
    },
    "RU": {
        value: 5,
        href: "country.html?country=RU",
        // tooltip: createToolTipContent("RU", "very high", "very high", "low")
    },
    "FR": {
        value: 5,
        href: "country.html?country=FR",
        // tooltip: createToolTipContent("FR", "very high", "very high", "low")
    },
    "AR": {
        value: 6,
        href: "country.html?country=AR",
        // tooltip: createToolTipContent("AR", "very high", "very high", "low")
    },
    "PE": {
        value: 5,
        href: "country.html?country=PE",
        // tooltip: createToolTipContent("PE", "very high", "very high", "low")
    },
    "TW": {
        value: 4,
        href: "country.html?country=TW",
        // tooltip: createToolTipContent("TW", "very high", "very high", "low")
    },
    "HK": {
        value: 4,
        href: "countryhtml?country=HK",
        // tooltip: createToolTipContent("HK", "very high", "very high", "low")
    },
    "JP": {
        value: 4,
        href: "country.html?country=JP",
        // tooltip: createToolTipContent("JP", "very high", "very high", "low")
    },
    "TH": {
        value: 6,
        href: "country.html?country=TH",
        // tooltip: createToolTipContent("TH", "very high", "very high", "low")
    },
    "IT": {
        value: 4,
        href: "country.html?country=IT",
        // tooltip: createToolTipContent("IT", "very high", "very high", "low")
    },
    "UZ": {
        value: 4,
        href: "country.html?country=UZ",
        // tooltip: createToolTipContent("UZ", "very high", "very high", "low")
    },
    "GB": {
        value: 6,
        href: "country.html?country=GB",
        // tooltip: createToolTipContent("GB", "very high", "very high", "low")
    },
    "CN": {
        value: 4,
        href: "country.html?country=CN",
        // tooltip: createToolTipContent("CN", "very high", "very high", "low")
    },
    "DE": {
        value: 4,
        href: "country.html?country=DE",
        // tooltip: createToolTipContent("DE", "very high", "very high", "low")
    },
    "SG": {
        value: 2,
        href: "country.html?country=SG",
        // tooltip: createToolTipContent("SG", "very high", "very high", "low")
    },
    "VN": {
        value: 2,
        href: "country.html?country=VN",
        // tooltip: createToolTipContent("VN", "very high", "very high", "low")
    },
    "UA": {
        value: 4,
        href: "country.html?country=UA",
        // tooltip: createToolTipContent("UA", "very high", "very high", "low")
    },
    "NO": {
        value: 4,
        href: "country.html?country=NO",
        // tooltip: createToolTipContent("NO", "very high", "very high", "low")
    },
    "KR": {
        value: 4,
        href: "country.html?country=KR",
        // tooltip: createToolTipContent("KR", "very high", "very high", "low")
    },
    "IL": {
        value: 0,
        href: "country.html?country=IL",
        // tooltip: createToolTipContent("IL", "very high", "very high", "low")
    },
    "MN": {
        value: 2,
        href: "country.html?country=MN",
        // tooltip: createToolTipContent("MN", "very high", "very high", "low")
    },
    "IS": {
        value: 2,
        href: "country.html?country=IS",
        // tooltip: createToolTipContent("IS", "very high", "very high", "low")
    },
    // Australia
    "AU": {
        value: 2,
        href: "#",
    },
    "TJ": {
        value: 4,
        href: "country.html?country=TJ",
        // tooltip: createToolTipContent("TJ", "very high", "very high", "medium")
    },
    // Kazakhstan
    "KZ": {
        value: 2,
    },
};

areaLegend = {
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