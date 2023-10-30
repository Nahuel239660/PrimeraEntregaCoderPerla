
// Precios base para cada marca
const preciosBase = {
    Chevrolet: 35000,
    Ford: 46000,
    Peugeot: 57000,
    Citroen: 36000,
    Renault: 25000,
    Volkswagen: 36000,
    Toyota: 38000,
    Honda:  27500,
    Hyundai: 42000,
    Kia: 39000,
    MercedesBenz: 53600,
    BMW: 54500,
    Audi: 62500,
  };

  // constante que almacena las opciones de año para cada marca y modelo
const opcionesAnio = {
    Audi:{
      "A3": [...Array(2021 - 1996 +1).keys()].map(year => 1996 + year),
      "A4": [...Array(2021 - 1991 +1).keys()].map(year => 1991 + year),
      "A5": [...Array(2021 -2007 +1).keys()].map(year => 2007 + year ),
      "A6": [...Array(2021 - 1994 +1).keys()].map(year => 1994 + year),
      "A7": [...Array(2021 - 2010 +1).keys()].map(year => 2010 + year),
      "A8": [...Array(2021 - 1994 +1).keys()].map(year => 1994 + year),
      "Q2": [...Array(2021 - 2016 +1).keys()].map(year => 2016 + year),
      "Q3": [...Array(2021 - 2011 +1).keys()].map(year => 2011 + year),
      "Q5": [...Array(2021 - 2008 +1).keys()].map(year => 2008 + year),
      "Q7": [...Array(2021 - 2005 +1).keys()].map(year => 2021 + year),
      "Q8": [...Array(2021 - 2018 +1).keys()].map(year => 2018 + year),
      "TT": [...Array(2021 - 1998 +1).keys()].map(year => 1998 + year),
    },
    Chevrolet: {
      Agile: [...Array(2017 - 2009 + 1).keys()].map(year => 2009 + year), 
      Astra: [...Array(2012 - 2000 +1).keys()].map(year => 2000 + year),
      Aveo: [...Array(2014 - 2008 +1).keys()].map(year => 2008 + year),
      Camaro:[...Array(2023 - 2010 +1).keys()].map(year => 2010 + year),
      Captiva:[...Array(2018 - 2008 +1).keys()].map(year => 2008 + year),
      Celta:[...Array(2016 - 2011 +1).keys()].map(year => 2011 + year),
      Classic:[...Array(2017 - 2010 +1).keys()].map(year => 2010 + year),
      Cobalt:[...Array(2020 - 2013 +1).keys()].map(year => 2013 + year),
      Corsa:[...Array(2011 - 2000 +1).keys()].map(year => 2000 + year),
      Cruze:[...Array(2023 - 2010 +1).keys()].map(year => 2010 + year),
      Equinox:[...Array(2023 - 2018 +1).keys()].map(year => 2018 + year),
      Meriva: [...Array(2013 - 2003 +1).keys()].map(year => 2003 + year),

    },
    Ford: {
      Fiesta: [...Array(2021 - 1997 + 1).keys()].map(year => 1997 + year),
      Focus: [...Array(2021 - 1998 + 1).keys()].map(year => 1998 + year),
      Mondeo: [...Array(2021 - 1993 + 1).keys()].map(year => 1993 + year),
      Ka: [...Array(2021 - 1997 + 1).keys()].map(year => 1997 + year),
      EcoSport: [...Array(2021 - 2003 + 1).keys()].map(year => 2003 + year),
      Ranger: [...Array(2021 - 1998 + 1).keys()].map(year => 1998 + year),
      Kuga: [...Array(2021 - 2010 + 1).keys()].map(year => 2010 + year)
  },
    Peugeot: {
      "206": [...Array(2009 - 1999 + 1).keys()].map(year => 1999 + year),
      "207": [...Array(2016 - 2008 + 1).keys()].map(year => 2008 + year),
      "208": [...Array(2021 - 2013 + 1).keys()].map(year => 2013 + year),
      "307": [...Array(2013 - 2001 + 1).keys()].map(year => 2001 + year),
      "308": [...Array(2021 - 2007 + 1).keys()].map(year => 2007 + year),
      "408": [...Array(2021 - 2010 + 1).keys()].map(year => 2010 + year),
      "508": [...Array(2021 - 2011 + 1).keys()].map(year => 2011 + year),
      "2008": [...Array(2021 - 2013 + 1).keys()].map(year => 2013 + year),
      "3008": [...Array(2021 - 2009 + 1).keys()].map(year => 2009 + year),
      "5008": [...Array(2021 - 2009 + 1).keys()].map(year => 2009 + year),
      "Partner": [...Array(2021 - 1996 + 1).keys()].map(year => 1996 + year)
    },
    citroen: {
      "C3": [...Array(2021 - 2002 + 1).keys()].map(year => 2002 + year),
      "C4": [...Array(2021 - 2004 + 1).keys()].map(year => 2004 + year),
      "C5": [...Array(2021 - 2000 + 1).keys()].map(year => 2000 + year),
      "C6": [...Array(2011 - 2005 + 1).keys()].map(year => 2005 + year),
      "C8": [...Array(2011 - 2002 + 1).keys()].map(year => 2002 + year),
      "Berlingo": [...Array(2021 - 1996 + 1).keys()].map(year => 1996 + year),
      "Jumpy": [...Array(2021 - 1994 + 1).keys()].map(year => 1994 + year),
      "Jumper": [...Array(2021 - 1994 + 1).keys()].map(year => 1994 + year)
    },
    Renault: {
      "Clio": [...Array(2021 - 1990 + 1).keys()].map(year => 1990 + year),
      "Twingo": [...Array(2021 - 1993 + 1).keys()].map(year => 1993 + year),
      "Megane": [...Array(2021 - 1995 + 1).keys()].map(year => 1995 + year),
      "Laguna": [...Array(2012 - 1993 + 1).keys()].map(year => 1993 + year),
      "Scenic": [...Array(2014 - 1996 + 1).keys()].map(year => 1996 + year),
      "Kadjar": [...Array(2021 - 2015 + 1).keys()].map(year => 2015 + year),
      "Captur": [...Array(2021 - 2013 + 1).keys()].map(year => 2013 + year),
      "Koleos": [...Array(2021 - 2007 + 1).keys()].map(year => 2007 + year),
      "Duster": [...Array(2021 - 2010 + 1).keys()].map(year => 2010 + year),
      "Arkana": [...Array(2021 - 2019 + 1).keys()].map(year => 2019 + year),
      "Talisman": [...Array(2021 - 2015 + 1).keys()].map(year => 2015 + year),
      "Espace": [...Array(2021 - 1984 + 1).keys()].map(year => 1984 + year),
      "Kangoo": [...Array(2021 - 1997 + 1).keys()].map(year => 1997 + year),
      "Master": [...Array(2021 - 1980 + 1).keys()].map(year => 1980 + year),
    },
    Volkswagen: {
      "Gol": [...Array(2021 - 1980 + 1).keys()].map(year => 1980 + year),
      "Polo": [...Array(2021 - 1975 + 1).keys()].map(year => 1975 + year),
      "Golf": [...Array(2021 - 1974 + 1).keys()].map(year => 1974 + year),
      "Jetta": [...Array(2021 - 1979 + 1).keys()].map(year => 1979 + year),
      "Passat": [...Array(2021 - 1973 + 1).keys()].map(year => 1973 + year),
      "Tiguan": [...Array(2021 - 2007 + 1).keys()].map(year => 2007 + year),
      "Touareg": [...Array(2021 - 2002 + 1).keys()].map(year => 2002 + year),
      "Arteon": [...Array(2021 - 2017 + 1).keys()].map(year => 2017 + year),
      "Up!": [...Array(2021 - 2011 + 1).keys()].map(year => 2011 + year),
      "Amarok": [...Array(2021 - 2010 + 1).keys()].map(year => 2010 + year),
      "Caddy": [...Array(2021 - 1980 + 1).keys()].map(year => 1980 + year),
      "Transporter": [...Array(2021 - 1950 + 1).keys()].map(year => 1950 + year),      
    },
    Toyota: {
      "Corolla": [...Array(2021 - 1966 + 1).keys()].map(year => 1966 + year),
      "Camry": [...Array(2021 - 1982 + 1).keys()].map(year => 1982 + year),
      "Yaris": [...Array(2021 - 1999 + 1).keys()].map(year => 1999 + year),
      "Prius": [...Array(2021 - 1997 + 1).keys()].map(year => 1997 + year),
      "RAV4": [...Array(2021 - 1994 + 1).keys()].map(year => 1994 + year),
      "Highlander": [...Array(2021 - 2001 + 1).keys()].map(year => 2001 + year),
      "4Runner": [...Array(2021 - 1984 + 1).keys()].map(year => 1984 + year),
      "Sequoia": [...Array(2021 - 2000 + 1).keys()].map(year => 2000 + year),
      "Tundra": [...Array(2021 - 1999 + 1).keys()].map(year => 1999 + year),
      "Tacoma": [...Array(2021 - 1995 + 1).keys()].map(year => 1995 + year),
      "Land Cruiser": [...Array(1999 - 1951 + 1).keys()].map(year => 1951 + year),
    },
    Honda: {
      "Civic": [...Array(2021 - 1972 + 1).keys()].map(year => 1972 + year),
      "Accord": [...Array(2021 - 1976 + 1).keys()].map(year => 1976 + year),
      "CR-V": [...Array(2021 - 1995 + 1).keys()].map(year => 1995 + year),
      "Pilot": [...Array(2021 - 2002 + 1).keys()].map(year => 2002 + year),
      "Fit": [...Array(2021 - 2001 + 1).keys()].map(year => 2001 + year),
      "Ridgeline": [...Array(2021 - 2005 + 1).keys()].map(year => 2005 + year),
      "HR-V": [...Array(2021 - 2015 + 1).keys()].map(year => 2015 + year),
      "Odyssey": [...Array(2021 - 1994 + 1).keys()].map(year => 1994 + year),
    },
    Hyundai: {
      "Elantra": [...Array(2021 - 1990 + 1).keys()].map(year => 1990 + year),
      "Sonata": [...Array(2021 - 1985 + 1).keys()].map(year => 1985 + year),
      "Tucson": [...Array(2021 - 2004 + 1).keys()].map(year => 2004 + year),
      "Santa Fe": [...Array(2021 - 2003 + 1).keys()].map(year => 2003 + year),
      "Accent": [...Array(2021 - 1994 + 1).keys()].map(year => 1994 + year),
      "Veloster": [...Array(2021 - 2011 + 1).keys()].map(year => 2011 + year),
      "Kona": [...Array(2021 - 2017 + 1).keys()].map(year => 2017 + year),
      "Palisade": [2019, 2020, 2021], // deje sin spread de array por que son 3 años es mas corto asi 
      "Ioniq": [2016, 2017, 2018, 2019, 2020, 2021], //deje sin spread de array por que es mas corto asi
      "Genesis": [...Array(2017 - 2008 + 1).keys()].map(year => 2008 + year),
      "Venue": [2019, 2020, 2021],
      "Nexo": [2018, 2019, 2020, 2021],      
    },
    Kia: {
      "Rio": [...Array(2021 - 2000 + 1).keys()].map(year => 2000 + year),
      "Forte": [...Array(2021 - 2008 + 1).keys()].map(year => 2008 + year),
      "Optima": [...Array(2021 - 2000 + 1).keys()].map(year => 2000 + year),
      "Soul": [...Array(2021 - 2009 + 1).keys()].map(year => 2009 + year),
      "Sportage": [...Array(2021 - 1993 + 1).keys()].map(year => 1993 + year),
      "Sorento": [...Array(2021 - 2002 + 1).keys()].map(year => 2002 + year),
      "Telluride": [2019, 2020, 2021],
      "Carnival": [...Array(2021 - 1998 + 1).keys()].map(year => 1998 + year),
      "Stinger": [2017, 2018, 2019, 2020, 2021],
      "K5": [...Array(2021 - 2010 + 1).keys()].map(year => 2010 + year),
      "EV6": [2021],
    },
    MercedesBenz: {
      "A-Class": [...Array(2021 - 1997 + 1).keys()].map(year => 1997 + year),
      "C-Class": [...Array(2021 - 1993 + 1).keys()].map(year => 1993 + year),
      "E-Class": [...Array(2021 - 1984 + 1).keys()].map(year => 1984 + year),
      "S-Class": [...Array(2021 - 1972 + 1).keys()].map(year => 1972 + year),
      "CLA-Class": [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "GLA-Class": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "GLC-Class": [2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "GLE-Class": [2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "GLS-Class": [2016, 2017, 2018, 2019, 2020, 2021],
      "G-Class": [...Array(2021 - 1979 + 1).keys()].map(year => 1979 + year),
      "SL-Class": [...Array(2021 - 1954 + 1).keys()].map(year => 1954 + year),
      "SLC-Class": [...Array(2021 - 1996 + 1).keys()].map(year => 1996 + year),
      "AMG GT": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "EQC": [2019, 2020, 2021],
    },
    BMW: {
      "1 Series": [...Array(2021 - 2004 + 1).keys()].map(year => 2004 + year),
      "2 Series": [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "3 Series": [...Array(2021 - 1975 + 1).keys()].map(year => 1975 + year),
      "4 Series": [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "5 Series": [...Array(2021 - 1972 + 1).keys()].map(year => 1972 + year),
      "6 Series": [...Array(2021 - 1976 + 1).keys()].map(year => 1976 + year),
      "7 Series": [...Array(2021 - 1977 + 1).keys()].map(year => 1977 + year),
      "8 Series": [1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 2018, 2019, 2020, 2021],
      "Z4": [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2019, 2020, 2021],
      "X1": [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "X3": [...Array(2021 - 2003 + 1).keys()].map(year => 2003 + year),
      "X4": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "X5": [...Array(2021 - 1990 + 1).keys()].map(year => 1990 + year),
      "X6": [...Array(2021 - 2008 + 1).keys()].map(year => 2008 + year),
      "X7": [2018, 2019, 2020, 2021],
      "i3": [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "i8": [2014, 2015, 2016, 2017, 2018, 2019, 2020],
      "M2": [2016, 2017, 2018, 2019, 2020, 2021],
      "M3": [...Array(2021 - 1985 + 1).keys()].map(year => 1985 + year),
    },
  };