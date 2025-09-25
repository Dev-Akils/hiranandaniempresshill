import floor1Img from "../assets/Floors/Wing-C/1st Floor C-Wing.jpg";
import floor2Img from '../assets/Floors/Wing-C/2nd Floor C-Wing.jpg';
import floor3Img from '../assets/Floors/Wing-C/3rd to 7th, 9th to 13th Floor C-Wing.jpg';
import floor8Img from '../assets/Floors/Wing-C/8th Refuge floor C-Wing.jpg';
import floor14Img from '../assets/Floors/Wing-C/14th, 16th & 17th Floor C-Wing.jpg';
import floor15Img from '../assets/Floors/Wing-C/15th Refuge floor C-Wing.jpg';
import floor18Img from '../assets/Floors/Wing-C/18th to 21st Floor C-Wing.jpg';
import floor22Img from '../assets/Floors/Wing-C/22nd Refuge floor C-Wing.jpg';
import floor23Img from '../assets/Floors/Wing-C/23rd to 26th Floor C-Wing.jpg';
import floor27Img from '../assets/Floors/Wing-C/27th to 29th Floor C-Wing.jpg';
// import ExploreHomes from "../assets/walkthroughvedio/Home Automation_high res.webm";


export const floorData = {
    1: {
        id:1,
        image: floor1Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            // fourBHK: {
            //     bgColor: "#eca9f7",
            //     text: "4BHK"
            // },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            },
            twoBHK: {
                bgColor: "#ffe500",
                text: "2BHK"
            }
        },

        units: [
            {
                id: 1,
                name: "Unit No-1",
                type: "2 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(255, 193, 7, 0.5)",
                polygonPoints: "1329,1066,1504,1066,1605,934,1705,817,2134,822,2097,854,2240,859,2219,944,2510,960,2436,1214,2161,1220,2134,1283,1991,1278,1996,1230,1758,1230,1409,1220,1425,1188,1260,1188",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "2 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(255, 193, 7, 0.5)",
                polygonPoints: "1880,1511,2049,1522,2018,1601,2325,1606,2288,1829,2224,2046,1986,2062,2018,1924,1949,1908,1843,2232,1456,2226,1366,2433,630,2438,853,2094,778,2094,810,2030,598,2020,842,1644,1064,1670,1123,1580,1536,1580,1753,1596,1822,1580",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3500,987,3718,981,3675,838,4305,843,4316,854,4364,854,4427,854,4496,960,4448,971,4485,1018,4655,1013,4803,1230,4607,1230,4634,1262,4692,1447,4178,1442,4157,1405,3871,1405,3845,1320,3829,1246,3548,1257",
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "4168,1432,4697,1437,4819,1654,4883,1638,4930,1718,5142,1723,5481,2189,5402,2163,5375,2104,5179,2115,5237,2195,5121,2195,5147,2237,5380,2253,5545,2528,5317,2518,5343,2560,4750,2550,4189,2550,4062,2131,3728,2126,3638,1659,3935,1665,3898,1485,4189,1485",
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },
    // Add floor2, floor3 … here later

    2: {
        id:2,
        image: floor2Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
        units: [
            {
                id: 1,
                name: "Unit No-1",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1350,1050,1515,1061,1711,812,2134,828,2092,854,2251,859,2214,944,2500,965,2441,1220,2171,1220,2113,1368,1838,1363,1806,1400,1329,1389,1419,1220,1435,1183,1250,1177",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1313,1384,1811,1384,1806,1416,2092,1416,2049,1511,2018,1617,2325,1612,2229,2062,1991,2062,2023,1919,1944,1919,1822,2242,1467,2232,1361,2438,641,2433,858,2099,789,2094,821,2025,588,2004,842,1644,1070,1665,1117,1596,1176,1569",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3495,987,3718,981,3659,833,4289,838,4295,859,4289,838,4432,849,4485,955,4432,965,4470,1018,4650,1013,4787,1220,4607,1220,4628,1273,4697,1447,4184,1447,4162,1400,3876,1416,3829,1257,3553,1257",
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "4168,1447,4697,1442,4824,1644,4877,1659,4920,1712,5142,1718,5455,2152,5396,2163,5365,2099,5195,2115,5222,2195,5142,2195,5153,2253,5396,2248,5555,2523,5312,2523,5333,2555,4173,2539,4046,2126,4014,1977,3929,1988,3972,2120,3718,2131,3633,1659,3924,1654,3914,1553,3898,1479",
            }
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },


    3: {
        id:3,
        image: floor3Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
        units: [
            {
                id: 1,
                name: "Unit No-1",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1700,812,2139,806,2108,859,2256,854,2208,944,2505,949,2431,1209,2177,1214,2150,1278,2097,1363,1838,1347,1822,1389,1329,1373,1446,1193,1276,1177,1345,1071,1499,1077,1525,1029,1594,918,1652,928",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1334,1373,1821,1384,1800,1416,2086,1410,2060,1511,2028,1612,2330,1612,2287,1813,2224,2051,1922,2057,1821,2232,1482,2221,1355,2422,630,2444,836,2094,778,2089,821,2020,593,2014,847,1644,1080,1644,1117,1559,1197,1569",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3485,971,3702,976,3659,833,4305,838,4316,859,4438,854,4491,955,4427,960,4459,1013,4644,1013,4782,1230,4591,1225,4634,1267,4692,1442,4178,1458,4147,1389,3887,1416,3855,1342,3823,1251,3564,1267",
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1485,4184,1469,4697,1426,4819,1628,4867,1638,4909,1723,5158,1718,5449,2142,5396,2163,5343,2104,5174,2104,5227,2205,5121,2200,5142,2248,5269,2237,5338,2242,5539,2512,5439,2512,5333,2507,5333,2550,4194,2539,4009,1977,3929,1977,3977,2099,3718,2120,3643,1670,3929,1659",
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },



    4: {
        id:4,
        image: floor3Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
        units: [
            {
                id: 1,
                name: "Unit No-1",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1700,812,2139,806,2108,859,2256,854,2208,944,2505,949,2431,1209,2177,1214,2150,1278,2097,1363,1838,1347,1822,1389,1329,1373,1446,1193,1276,1177,1345,1071,1499,1077,1525,1029,1594,918,1652,928",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1334,1373,1821,1384,1800,1416,2086,1410,2060,1511,2028,1612,2330,1612,2287,1813,2224,2051,1922,2057,1821,2232,1482,2221,1355,2422,630,2444,836,2094,778,2089,821,2020,593,2014,847,1644,1080,1644,1117,1559,1197,1569",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3485,971,3702,976,3659,833,4305,838,4316,859,4438,854,4491,955,4427,960,4459,1013,4644,1013,4782,1230,4591,1225,4634,1267,4692,1442,4178,1458,4147,1389,3887,1416,3855,1342,3823,1251,3564,1267",
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1485,4184,1469,4697,1426,4819,1628,4867,1638,4909,1723,5158,1718,5449,2142,5396,2163,5343,2104,5174,2104,5227,2205,5121,2200,5142,2248,5269,2237,5338,2242,5539,2512,5439,2512,5333,2507,5333,2550,4194,2539,4009,1977,3929,1977,3977,2099,3718,2120,3643,1670,3929,1659",
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },

    5: {
        id:5,
        image: floor3Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
        units: [
            {
                id: 1,
                name: "Unit No-1",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1700,812,2139,806,2108,859,2256,854,2208,944,2505,949,2431,1209,2177,1214,2150,1278,2097,1363,1838,1347,1822,1389,1329,1373,1446,1193,1276,1177,1345,1071,1499,1077,1525,1029,1594,918,1652,928",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1334,1373,1821,1384,1800,1416,2086,1410,2060,1511,2028,1612,2330,1612,2287,1813,2224,2051,1922,2057,1821,2232,1482,2221,1355,2422,630,2444,836,2094,778,2089,821,2020,593,2014,847,1644,1080,1644,1117,1559,1197,1569",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3485,971,3702,976,3659,833,4305,838,4316,859,4438,854,4491,955,4427,960,4459,1013,4644,1013,4782,1230,4591,1225,4634,1267,4692,1442,4178,1458,4147,1389,3887,1416,3855,1342,3823,1251,3564,1267",
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1485,4184,1469,4697,1426,4819,1628,4867,1638,4909,1723,5158,1718,5449,2142,5396,2163,5343,2104,5174,2104,5227,2205,5121,2200,5142,2248,5269,2237,5338,2242,5539,2512,5439,2512,5333,2507,5333,2550,4194,2539,4009,1977,3929,1977,3977,2099,3718,2120,3643,1670,3929,1659",
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },

    6: {
        id:6,
        image: floor3Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
        units: [
            {
                id: 1,
                name: "Unit No-1",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1700,812,2139,806,2108,859,2256,854,2208,944,2505,949,2431,1209,2177,1214,2150,1278,2097,1363,1838,1347,1822,1389,1329,1373,1446,1193,1276,1177,1345,1071,1499,1077,1525,1029,1594,918,1652,928",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1334,1373,1821,1384,1800,1416,2086,1410,2060,1511,2028,1612,2330,1612,2287,1813,2224,2051,1922,2057,1821,2232,1482,2221,1355,2422,630,2444,836,2094,778,2089,821,2020,593,2014,847,1644,1080,1644,1117,1559,1197,1569",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3485,971,3702,976,3659,833,4305,838,4316,859,4438,854,4491,955,4427,960,4459,1013,4644,1013,4782,1230,4591,1225,4634,1267,4692,1442,4178,1458,4147,1389,3887,1416,3855,1342,3823,1251,3564,1267",
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1485,4184,1469,4697,1426,4819,1628,4867,1638,4909,1723,5158,1718,5449,2142,5396,2163,5343,2104,5174,2104,5227,2205,5121,2200,5142,2248,5269,2237,5338,2242,5539,2512,5439,2512,5333,2507,5333,2550,4194,2539,4009,1977,3929,1977,3977,2099,3718,2120,3643,1670,3929,1659",
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },


    7: {
        id:7,
        image: floor3Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
        units: [
            {
                id: 1,
                name: "Unit No-1",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1700,812,2139,806,2108,859,2256,854,2208,944,2505,949,2431,1209,2177,1214,2150,1278,2097,1363,1838,1347,1822,1389,1329,1373,1446,1193,1276,1177,1345,1071,1499,1077,1525,1029,1594,918,1652,928",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1334,1373,1821,1384,1800,1416,2086,1410,2060,1511,2028,1612,2330,1612,2287,1813,2224,2051,1922,2057,1821,2232,1482,2221,1355,2422,630,2444,836,2094,778,2089,821,2020,593,2014,847,1644,1080,1644,1117,1559,1197,1569",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3485,971,3702,976,3659,833,4305,838,4316,859,4438,854,4491,955,4427,960,4459,1013,4644,1013,4782,1230,4591,1225,4634,1267,4692,1442,4178,1458,4147,1389,3887,1416,3855,1342,3823,1251,3564,1267",
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1485,4184,1469,4697,1426,4819,1628,4867,1638,4909,1723,5158,1718,5449,2142,5396,2163,5343,2104,5174,2104,5227,2205,5121,2200,5142,2248,5269,2237,5338,2242,5539,2512,5439,2512,5333,2507,5333,2550,4194,2539,4009,1977,3929,1977,3977,2099,3718,2120,3643,1670,3929,1659",
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },


    // 8th
    8: {
        id:8,
        image: floor8Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
        units: [
            // {
            //     id: 1,
            //     name: "Unit No-1",
            //     type: "3 BHK",
            //     size: "1400 sq.ft",
            //     hoverColor: "rgba(0,255,229,0.3)",
            //     polygonPoints: "1700,812,2139,806,2108,859,2256,854,2208,944,2505,949,2431,1209,2177,1214,2150,1278,2097,1363,1838,1347,1822,1389,1329,1373,1446,1193,1276,1177,1345,1071,1499,1077,1525,1029,1594,918,1652,928",
            // },
            {
                id: 1,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1334,1373,1821,1384,1800,1416,2086,1410,2060,1511,2028,1612,2330,1612,2287,1813,2224,2051,1922,2057,1821,2232,1482,2221,1355,2422,630,2444,836,2094,778,2089,821,2020,593,2014,847,1644,1080,1644,1117,1559,1197,1569",

            },
            {
                id: 2,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3485,971,3702,976,3659,833,4305,838,4316,859,4438,854,4491,955,4427,960,4459,1013,4644,1013,4782,1230,4591,1225,4634,1267,4692,1442,4178,1458,4147,1389,3887,1416,3855,1342,3823,1251,3564,1267",
            },
            {
                id: 3,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1485,4184,1469,4697,1426,4819,1628,4867,1638,4909,1723,5158,1718,5449,2142,5396,2163,5343,2104,5174,2104,5227,2205,5121,2200,5142,2248,5269,2237,5338,2242,5539,2512,5439,2512,5333,2507,5333,2550,4194,2539,4009,1977,3929,1977,3977,2099,3718,2120,3643,1670,3929,1659",
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },

    9: {
        id:9,
        image: floor3Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
        units: [
            {
                id: 1,
                name: "Unit No-1",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1700,812,2139,806,2108,859,2256,854,2208,944,2505,949,2431,1209,2177,1214,2150,1278,2097,1363,1838,1347,1822,1389,1329,1373,1446,1193,1276,1177,1345,1071,1499,1077,1525,1029,1594,918,1652,928",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1334,1373,1821,1384,1800,1416,2086,1410,2060,1511,2028,1612,2330,1612,2287,1813,2224,2051,1922,2057,1821,2232,1482,2221,1355,2422,630,2444,836,2094,778,2089,821,2020,593,2014,847,1644,1080,1644,1117,1559,1197,1569",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3485,971,3702,976,3659,833,4305,838,4316,859,4438,854,4491,955,4427,960,4459,1013,4644,1013,4782,1230,4591,1225,4634,1267,4692,1442,4178,1458,4147,1389,3887,1416,3855,1342,3823,1251,3564,1267",
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1485,4184,1469,4697,1426,4819,1628,4867,1638,4909,1723,5158,1718,5449,2142,5396,2163,5343,2104,5174,2104,5227,2205,5121,2200,5142,2248,5269,2237,5338,2242,5539,2512,5439,2512,5333,2507,5333,2550,4194,2539,4009,1977,3929,1977,3977,2099,3718,2120,3643,1670,3929,1659",
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },


    10: {
        id:10,
        image: floor3Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
        units: [
            {
                id: 1,
                name: "Unit No-1",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1700,812,2139,806,2108,859,2256,854,2208,944,2505,949,2431,1209,2177,1214,2150,1278,2097,1363,1838,1347,1822,1389,1329,1373,1446,1193,1276,1177,1345,1071,1499,1077,1525,1029,1594,918,1652,928",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1334,1373,1821,1384,1800,1416,2086,1410,2060,1511,2028,1612,2330,1612,2287,1813,2224,2051,1922,2057,1821,2232,1482,2221,1355,2422,630,2444,836,2094,778,2089,821,2020,593,2014,847,1644,1080,1644,1117,1559,1197,1569",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3485,971,3702,976,3659,833,4305,838,4316,859,4438,854,4491,955,4427,960,4459,1013,4644,1013,4782,1230,4591,1225,4634,1267,4692,1442,4178,1458,4147,1389,3887,1416,3855,1342,3823,1251,3564,1267",
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1485,4184,1469,4697,1426,4819,1628,4867,1638,4909,1723,5158,1718,5449,2142,5396,2163,5343,2104,5174,2104,5227,2205,5121,2200,5142,2248,5269,2237,5338,2242,5539,2512,5439,2512,5333,2507,5333,2550,4194,2539,4009,1977,3929,1977,3977,2099,3718,2120,3643,1670,3929,1659",
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },


    11: {
        id:11,
        image: floor3Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
        units: [
            {
                id: 1,
                name: "Unit No-1",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1700,812,2139,806,2108,859,2256,854,2208,944,2505,949,2431,1209,2177,1214,2150,1278,2097,1363,1838,1347,1822,1389,1329,1373,1446,1193,1276,1177,1345,1071,1499,1077,1525,1029,1594,918,1652,928",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1334,1373,1821,1384,1800,1416,2086,1410,2060,1511,2028,1612,2330,1612,2287,1813,2224,2051,1922,2057,1821,2232,1482,2221,1355,2422,630,2444,836,2094,778,2089,821,2020,593,2014,847,1644,1080,1644,1117,1559,1197,1569",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3485,971,3702,976,3659,833,4305,838,4316,859,4438,854,4491,955,4427,960,4459,1013,4644,1013,4782,1230,4591,1225,4634,1267,4692,1442,4178,1458,4147,1389,3887,1416,3855,1342,3823,1251,3564,1267",
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1485,4184,1469,4697,1426,4819,1628,4867,1638,4909,1723,5158,1718,5449,2142,5396,2163,5343,2104,5174,2104,5227,2205,5121,2200,5142,2248,5269,2237,5338,2242,5539,2512,5439,2512,5333,2507,5333,2550,4194,2539,4009,1977,3929,1977,3977,2099,3718,2120,3643,1670,3929,1659",
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },


    12: {
        id:12,
        image: floor3Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
        units: [
            {
                id: 1,
                name: "Unit No-1",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1700,812,2139,806,2108,859,2256,854,2208,944,2505,949,2431,1209,2177,1214,2150,1278,2097,1363,1838,1347,1822,1389,1329,1373,1446,1193,1276,1177,1345,1071,1499,1077,1525,1029,1594,918,1652,928",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1334,1373,1821,1384,1800,1416,2086,1410,2060,1511,2028,1612,2330,1612,2287,1813,2224,2051,1922,2057,1821,2232,1482,2221,1355,2422,630,2444,836,2094,778,2089,821,2020,593,2014,847,1644,1080,1644,1117,1559,1197,1569",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3485,971,3702,976,3659,833,4305,838,4316,859,4438,854,4491,955,4427,960,4459,1013,4644,1013,4782,1230,4591,1225,4634,1267,4692,1442,4178,1458,4147,1389,3887,1416,3855,1342,3823,1251,3564,1267",
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1485,4184,1469,4697,1426,4819,1628,4867,1638,4909,1723,5158,1718,5449,2142,5396,2163,5343,2104,5174,2104,5227,2205,5121,2200,5142,2248,5269,2237,5338,2242,5539,2512,5439,2512,5333,2507,5333,2550,4194,2539,4009,1977,3929,1977,3977,2099,3718,2120,3643,1670,3929,1659",
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },


    13: {
        id:13,
        image: floor3Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
        units: [
            {
                id: 1,
                name: "Unit No-1",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1700,812,2139,806,2108,859,2256,854,2208,944,2505,949,2431,1209,2177,1214,2150,1278,2097,1363,1838,1347,1822,1389,1329,1373,1446,1193,1276,1177,1345,1071,1499,1077,1525,1029,1594,918,1652,928",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1334,1373,1821,1384,1800,1416,2086,1410,2060,1511,2028,1612,2330,1612,2287,1813,2224,2051,1922,2057,1821,2232,1482,2221,1355,2422,630,2444,836,2094,778,2089,821,2020,593,2014,847,1644,1080,1644,1117,1559,1197,1569",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3485,971,3702,976,3659,833,4305,838,4316,859,4438,854,4491,955,4427,960,4459,1013,4644,1013,4782,1230,4591,1225,4634,1267,4692,1442,4178,1458,4147,1389,3887,1416,3855,1342,3823,1251,3564,1267",
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1485,4184,1469,4697,1426,4819,1628,4867,1638,4909,1723,5158,1718,5449,2142,5396,2163,5343,2104,5174,2104,5227,2205,5121,2200,5142,2248,5269,2237,5338,2242,5539,2512,5439,2512,5333,2507,5333,2550,4194,2539,4009,1977,3929,1977,3977,2099,3718,2120,3643,1670,3929,1659",
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },




    14: {
        id:14,
        image: floor14Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
        units: [
            {
                id: 1,
                name: "Unit No-1",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1620,928,1700,806,2129,812,2113,859,2245,875,2219,949,2515,955,2431,1214,2171,1214,2124,1357,1843,1352,1816,1395,1329,1384,1430,1193,1260,1188,1398,976,1573,992",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1308,1384,1816,1405,2092,1410,2049,1522,2028,1606,2330,1606,2219,2051,1986,2046,2028,1914,1944,1919,1912,2046,1748,2459,630,2444,667,2391,556,2385,461,2401,646,2104,778,2094,800,2020,588,2014,847,1659,1070,1644,1096,1575,1218,1580",
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3485,971,3702,976,3659,833,4305,838,4316,859,4438,854,4491,955,4427,960,4459,1013,4644,1013,4782,1230,4591,1225,4634,1267,4692,1442,4178,1458,4147,1389,3887,1416,3855,1342,3823,1251,3564,1267",
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1485,4184,1469,4697,1426,4819,1628,4867,1638,4909,1723,5158,1718,5449,2142,5396,2163,5343,2104,5174,2104,5227,2205,5121,2200,5142,2248,5269,2237,5338,2242,5539,2512,5439,2512,5333,2507,5333,2550,4194,2539,4009,1977,3929,1977,3977,2099,3718,2120,3643,1670,3929,1659",
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },


   
    15: {
        id:15,
        image: floor15Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
         units: [
            // {
            //     id: 1,
            //     name: "Unit No-1",
            //     type: "3 BHK",
            //     size: "1400 sq.ft",
            //     hoverColor: "rgba(0,255,229,0.3)",
            //     polygonPoints: "1620,928,1700,806,2129,812,2113,859,2245,875,2219,949,2515,955,2431,1214,2171,1214,2124,1357,1843,1352,1816,1395,1329,1384,1430,1193,1260,1188,1398,976,1573,992",
            // },
            {
                id: 1,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1308,1384,1816,1405,2092,1410,2049,1522,2028,1606,2330,1606,2219,2051,1986,2046,2028,1914,1944,1919,1912,2046,1748,2459,630,2444,667,2391,556,2385,461,2401,646,2104,778,2094,800,2020,588,2014,847,1659,1070,1644,1096,1575,1218,1580",
            },
            {
                id: 2,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3485,971,3702,976,3659,833,4305,838,4316,859,4438,854,4491,955,4427,960,4459,1013,4644,1013,4782,1230,4591,1225,4634,1267,4692,1442,4178,1458,4147,1389,3887,1416,3855,1342,3823,1251,3564,1267",
            },
            {
                id: 3,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1485,4184,1469,4697,1426,4819,1628,4867,1638,4909,1723,5158,1718,5449,2142,5396,2163,5343,2104,5174,2104,5227,2205,5121,2200,5142,2248,5269,2237,5338,2242,5539,2512,5439,2512,5333,2507,5333,2550,4194,2539,4009,1977,3929,1977,3977,2099,3718,2120,3643,1670,3929,1659",
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },


    16: {
        id:16,
        image: floor14Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
          units: [
            {
                id: 1,
                name: "Unit No-1",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1620,928,1700,806,2129,812,2113,859,2245,875,2219,949,2515,955,2431,1214,2171,1214,2124,1357,1843,1352,1816,1395,1329,1384,1430,1193,1260,1188,1398,976,1573,992",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1308,1384,1816,1405,2092,1410,2049,1522,2028,1606,2330,1606,2219,2051,1986,2046,2028,1914,1944,1919,1912,2046,1748,2459,630,2444,667,2391,556,2385,461,2401,646,2104,778,2094,800,2020,588,2014,847,1659,1070,1644,1096,1575,1218,1580",
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3485,971,3702,976,3659,833,4305,838,4316,859,4438,854,4491,955,4427,960,4459,1013,4644,1013,4782,1230,4591,1225,4634,1267,4692,1442,4178,1458,4147,1389,3887,1416,3855,1342,3823,1251,3564,1267",
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1485,4184,1469,4697,1426,4819,1628,4867,1638,4909,1723,5158,1718,5449,2142,5396,2163,5343,2104,5174,2104,5227,2205,5121,2200,5142,2248,5269,2237,5338,2242,5539,2512,5439,2512,5333,2507,5333,2550,4194,2539,4009,1977,3929,1977,3977,2099,3718,2120,3643,1670,3929,1659",
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },

    17: {
        id:17,
        image: floor14Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
         units: [
            {
                id: 1,
                name: "Unit No-1",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1620,928,1700,806,2129,812,2113,859,2245,875,2219,949,2515,955,2431,1214,2171,1214,2124,1357,1843,1352,1816,1395,1329,1384,1430,1193,1260,1188,1398,976,1573,992",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1308,1384,1816,1405,2092,1410,2049,1522,2028,1606,2330,1606,2219,2051,1986,2046,2028,1914,1944,1919,1912,2046,1748,2459,630,2444,667,2391,556,2385,461,2401,646,2104,778,2094,800,2020,588,2014,847,1659,1070,1644,1096,1575,1218,1580",
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3485,971,3702,976,3659,833,4305,838,4316,859,4438,854,4491,955,4427,960,4459,1013,4644,1013,4782,1230,4591,1225,4634,1267,4692,1442,4178,1458,4147,1389,3887,1416,3855,1342,3823,1251,3564,1267",
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1485,4184,1469,4697,1426,4819,1628,4867,1638,4909,1723,5158,1718,5449,2142,5396,2163,5343,2104,5174,2104,5227,2205,5121,2200,5142,2248,5269,2237,5338,2242,5539,2512,5439,2512,5333,2507,5333,2550,4194,2539,4009,1977,3929,1977,3977,2099,3718,2120,3643,1670,3929,1659",
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },



    18: {
        id:18,
        image: floor18Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
        units: [
            {
                id: 1,
                name: "Unit No-1",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1271,1183,1440,1189,1419,1220,1318,1395,1811,1406,1837,1369,2113,1374,2160,1284,2177,1214,2447,1214,2526,966,2234,955,2245,876,2118,860,2144,812,1721,823,1694,860,1525,855",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "1308,1400,1811,1400,2081,1416,2049,1522,2028,1596,2330,1617,2224,2041,1975,2041,2039,1908,1938,1898,1901,2041,1827,2221,1748,2454,646,2438,688,2359,328,2353,863,1644,1075,1654,1117,1575,1192,1585",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "3495,1002,3707,981,3654,838,4289,838,4311,886,4544,881,4782,1236,4607,1214,4628,1262,4697,1437,4168,1447,4147,1400,3876,1405,3850,1326,3818,1251,3553,1251",
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1490,4199,1485,4194,1437,4703,1447,4808,1638,4883,1649,4930,1718,5147,1707,5672,2465,5290,2465,5343,2539,4173,2528,4004,1977,3951,1983,3977,2131,3723,2110,3617,1665,3956,1670",
            },

        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },


    19: {
        id:19,
        image: floor18Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
        units: [
            {
                id: 1,
                name: "Unit No-1",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1271,1183,1440,1189,1419,1220,1318,1395,1811,1406,1837,1369,2113,1374,2160,1284,2177,1214,2447,1214,2526,966,2234,955,2245,876,2118,860,2144,812,1721,823,1694,860,1525,855",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "1308,1400,1811,1400,2081,1416,2049,1522,2028,1596,2330,1617,2224,2041,1975,2041,2039,1908,1938,1898,1901,2041,1827,2221,1748,2454,646,2438,688,2359,328,2353,863,1644,1075,1654,1117,1575,1192,1585",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "3495,1002,3707,981,3654,838,4289,838,4311,886,4544,881,4782,1236,4607,1214,4628,1262,4697,1437,4168,1447,4147,1400,3876,1405,3850,1326,3818,1251,3553,1251",
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1490,4199,1485,4194,1437,4703,1447,4808,1638,4883,1649,4930,1718,5147,1707,5672,2465,5290,2465,5343,2539,4173,2528,4004,1977,3951,1983,3977,2131,3723,2110,3617,1665,3956,1670",
            },

        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },


    20: {
        id:20,
        image: floor18Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
        units: [
            {
                id: 1,
                name: "Unit No-1",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1271,1183,1440,1189,1419,1220,1318,1395,1811,1406,1837,1369,2113,1374,2160,1284,2177,1214,2447,1214,2526,966,2234,955,2245,876,2118,860,2144,812,1721,823,1694,860,1525,855",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "1308,1400,1811,1400,2081,1416,2049,1522,2028,1596,2330,1617,2224,2041,1975,2041,2039,1908,1938,1898,1901,2041,1827,2221,1748,2454,646,2438,688,2359,328,2353,863,1644,1075,1654,1117,1575,1192,1585",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "3495,1002,3707,981,3654,838,4289,838,4311,886,4544,881,4782,1236,4607,1214,4628,1262,4697,1437,4168,1447,4147,1400,3876,1405,3850,1326,3818,1251,3553,1251",
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1490,4199,1485,4194,1437,4703,1447,4808,1638,4883,1649,4930,1718,5147,1707,5672,2465,5290,2465,5343,2539,4173,2528,4004,1977,3951,1983,3977,2131,3723,2110,3617,1665,3956,1670",
            },

        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },

    21: {
        id:21,
        image: floor18Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
         units: [
            {
                id: 1,
                name: "Unit No-1",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1271,1183,1440,1189,1419,1220,1318,1395,1811,1406,1837,1369,2113,1374,2160,1284,2177,1214,2447,1214,2526,966,2234,955,2245,876,2118,860,2144,812,1721,823,1694,860,1525,855",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "1308,1400,1811,1400,2081,1416,2049,1522,2028,1596,2330,1617,2224,2041,1975,2041,2039,1908,1938,1898,1901,2041,1827,2221,1748,2454,646,2438,688,2359,328,2353,863,1644,1075,1654,1117,1575,1192,1585",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "3495,1002,3707,981,3654,838,4289,838,4311,886,4544,881,4782,1236,4607,1214,4628,1262,4697,1437,4168,1447,4147,1400,3876,1405,3850,1326,3818,1251,3553,1251",
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1490,4199,1485,4194,1437,4703,1447,4808,1638,4883,1649,4930,1718,5147,1707,5672,2465,5290,2465,5343,2539,4173,2528,4004,1977,3951,1983,3977,2131,3723,2110,3617,1665,3956,1670",
            },

        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },

    22: {
        id:22,
        image: floor22Img,
         ExploreHomes: "i74rwiwnyd",
        imageSettings: {
            svgSize: "0 0 6000 4000",
            imageWidth: "6000",
            imageHeight: "3650",
        },
        buttonSettings: {
            twoBHK: {
                bgColor: "#ffe500",
                text: "2BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
        units: [
            {
                id: 1,
                name: "Unit No-1",
                type: "2 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(255, 193, 7, 0.5)",
                polygonPoints: "853,1638,1075,1649,1117,1580,1843,1596,2018,1596,2335,1628,2240,2057,1981,2041,2028,1914,1922,1919,1901,2051,1748,2454,646,2438,673,2380,567,2401,440,2401,593,2200,572,2110,736,2110,826,2014,588,2020",
            },
           

             {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "3500,997,3702,987,3675,833,4289,838,4295,854,4438,859,4485,960,4422,960,4464,1013,4655,1013,4798,1225,4618,1220,4623,1278,4703,1447,4178,1437,4168,1389,3887,1416,3850,1342,3823,1251,3543,1251",
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "4168,1437,4708,1432,4814,1628,4867,1633,4930,1734,5147,1718,5455,2147,5396,2152,5349,2104,5184,2110,5222,2189,5132,2189,5142,2232,5253,2242,5375,2237,5539,2534,5423,2512,5327,2507,5343,2544,4173,2544,4019,1988,3935,1977,3982,2131,3718,2126,3612,1670,3929,1670,3919,1564,3903,1474,4184,1485",
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },
    // 23: {
    //     image: floor23Img,
    //     imageSettings: {
    //         svgSize: "0 0 6000 4000",
    //         imageWidth: "6000",
    //         imageHeight: "3650",
    //     },
    //     buttonSettings: {
    //         fourBHK: {
    //             bgColor: "#eca9f7",
    //             text: "4BHK"
    //         },
    //         threeBHK: {
    //             bgColor: "#00ffe5",
    //             text: "3BHK"
    //         }
    //     },
    //     units: [
    //         {
    //             id: 1,
    //             name: "Unit No-1",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1626,934,1721,812,2129,812,2097,870,2240,859,2219,939,2510,960,2441,1204,2171,1209,2150,1273,2113,1352,1843,1363,1816,1389,1324,1379,1435,1214,1435,1177,1255,1177,1414,976,1568,981",
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1324,1384,1816,1384,1806,1410,2092,1421,2049,1522,2012,1606,2341,1612,2214,2057,1970,2041,2034,1898,1944,1919,1758,2444,651,2444,667,2401,440,2422,593,2200,567,2099,741,2099,794,2020,577,2014,842,1649,1064,1659,1112,1580,1213,1575",

    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3485,971,3702,976,3659,833,4305,838,4316,859,4438,854,4491,955,4427,960,4459,1013,4644,1013,4782,1230,4591,1225,4634,1267,4692,1442,4178,1458,4147,1389,3887,1416,3855,1342,3823,1251,3564,1267",
    //         },
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3892,1485,4184,1469,4697,1426,4819,1628,4867,1638,4909,1723,5158,1718,5449,2142,5396,2163,5343,2104,5174,2104,5227,2205,5121,2200,5142,2248,5269,2237,5338,2242,5539,2512,5439,2512,5333,2507,5333,2550,4194,2539,4009,1977,3929,1977,3977,2099,3718,2120,3643,1670,3929,1659",
    //         },
    //     ],
    //     features: [
    //         "Grand double-height air-conditioned building entrance lobby",
    //         "Beautiful floor lobbies",
    //         "High-speed elevators",
    //         "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
    //         "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
    //     ]
    // },
    // 24: {
    //     image: floor23Img,
    //     imageSettings: {
    //         svgSize: "0 0 6000 4000",
    //         imageWidth: "6000",
    //         imageHeight: "3650",
    //     },
    //     buttonSettings: {
    //         fourBHK: {
    //             bgColor: "#eca9f7",
    //             text: "4BHK"
    //         },
    //         threeBHK: {
    //             bgColor: "#00ffe5",
    //             text: "3BHK"
    //         }
    //     },
    //     units: [
    //         {
    //             id: 1,
    //             name: "Unit No-1",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1626,934,1721,812,2129,812,2097,870,2240,859,2219,939,2510,960,2441,1204,2171,1209,2150,1273,2113,1352,1843,1363,1816,1389,1324,1379,1435,1214,1435,1177,1255,1177,1414,976,1568,981",
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1324,1384,1816,1384,1806,1410,2092,1421,2049,1522,2012,1606,2341,1612,2214,2057,1970,2041,2034,1898,1944,1919,1758,2444,651,2444,667,2401,440,2422,593,2200,567,2099,741,2099,794,2020,577,2014,842,1649,1064,1659,1112,1580,1213,1575",

    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3485,971,3702,976,3659,833,4305,838,4316,859,4438,854,4491,955,4427,960,4459,1013,4644,1013,4782,1230,4591,1225,4634,1267,4692,1442,4178,1458,4147,1389,3887,1416,3855,1342,3823,1251,3564,1267",
    //         },
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3892,1485,4184,1469,4697,1426,4819,1628,4867,1638,4909,1723,5158,1718,5449,2142,5396,2163,5343,2104,5174,2104,5227,2205,5121,2200,5142,2248,5269,2237,5338,2242,5539,2512,5439,2512,5333,2507,5333,2550,4194,2539,4009,1977,3929,1977,3977,2099,3718,2120,3643,1670,3929,1659",
    //         },
    //     ],
    //     features: [
    //         "Grand double-height air-conditioned building entrance lobby",
    //         "Beautiful floor lobbies",
    //         "High-speed elevators",
    //         "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
    //         "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
    //     ]
    // },
    // 25: {
    //     image: floor23Img,
    //     imageSettings: {
    //         svgSize: "0 0 6000 4000",
    //         imageWidth: "6000",
    //         imageHeight: "3650",
    //     },
    //     buttonSettings: {
    //         fourBHK: {
    //             bgColor: "#eca9f7",
    //             text: "4BHK"
    //         },
    //         threeBHK: {
    //             bgColor: "#00ffe5",
    //             text: "3BHK"
    //         }
    //     },
    //     units: [
    //         {
    //             id: 1,
    //             name: "Unit No-1",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1626,934,1721,812,2129,812,2097,870,2240,859,2219,939,2510,960,2441,1204,2171,1209,2150,1273,2113,1352,1843,1363,1816,1389,1324,1379,1435,1214,1435,1177,1255,1177,1414,976,1568,981",
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1324,1384,1816,1384,1806,1410,2092,1421,2049,1522,2012,1606,2341,1612,2214,2057,1970,2041,2034,1898,1944,1919,1758,2444,651,2444,667,2401,440,2422,593,2200,567,2099,741,2099,794,2020,577,2014,842,1649,1064,1659,1112,1580,1213,1575",

    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3485,971,3702,976,3659,833,4305,838,4316,859,4438,854,4491,955,4427,960,4459,1013,4644,1013,4782,1230,4591,1225,4634,1267,4692,1442,4178,1458,4147,1389,3887,1416,3855,1342,3823,1251,3564,1267",
    //         },
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3892,1485,4184,1469,4697,1426,4819,1628,4867,1638,4909,1723,5158,1718,5449,2142,5396,2163,5343,2104,5174,2104,5227,2205,5121,2200,5142,2248,5269,2237,5338,2242,5539,2512,5439,2512,5333,2507,5333,2550,4194,2539,4009,1977,3929,1977,3977,2099,3718,2120,3643,1670,3929,1659",
    //         },
    //     ],
    //     features: [
    //         "Grand double-height air-conditioned building entrance lobby",
    //         "Beautiful floor lobbies",
    //         "High-speed elevators",
    //         "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
    //         "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
    //     ]
    // },

    // 26: {
    //     image: floor23Img,
    //     imageSettings: {
    //         svgSize: "0 0 6000 4000",
    //         imageWidth: "6000",
    //         imageHeight: "3650",
    //     },
    //     buttonSettings: {
    //         fourBHK: {
    //             bgColor: "#eca9f7",
    //             text: "4BHK"
    //         },
    //         threeBHK: {
    //             bgColor: "#00ffe5",
    //             text: "3BHK"
    //         }
    //     },
    //      units: [
    //         {
    //             id: 1,
    //             name: "Unit No-1",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1626,934,1721,812,2129,812,2097,870,2240,859,2219,939,2510,960,2441,1204,2171,1209,2150,1273,2113,1352,1843,1363,1816,1389,1324,1379,1435,1214,1435,1177,1255,1177,1414,976,1568,981",
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1324,1384,1816,1384,1806,1410,2092,1421,2049,1522,2012,1606,2341,1612,2214,2057,1970,2041,2034,1898,1944,1919,1758,2444,651,2444,667,2401,440,2422,593,2200,567,2099,741,2099,794,2020,577,2014,842,1649,1064,1659,1112,1580,1213,1575",

    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3485,971,3702,976,3659,833,4305,838,4316,859,4438,854,4491,955,4427,960,4459,1013,4644,1013,4782,1230,4591,1225,4634,1267,4692,1442,4178,1458,4147,1389,3887,1416,3855,1342,3823,1251,3564,1267",
    //         },
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3892,1485,4184,1469,4697,1426,4819,1628,4867,1638,4909,1723,5158,1718,5449,2142,5396,2163,5343,2104,5174,2104,5227,2205,5121,2200,5142,2248,5269,2237,5338,2242,5539,2512,5439,2512,5333,2507,5333,2550,4194,2539,4009,1977,3929,1977,3977,2099,3718,2120,3643,1670,3929,1659",
    //         },
    //     ],
    //     features: [
    //         "Grand double-height air-conditioned building entrance lobby",
    //         "Beautiful floor lobbies",
    //         "High-speed elevators",
    //         "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
    //         "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
    //     ]
    // },


   
    // 27: {
    //     image: floor27Img,
    //     imageSettings: {
    //         svgSize: "0 0 6000 4000",
    //         imageWidth: "6000",
    //         imageHeight: "3650",
    //     },
    //     buttonSettings: {
    //         fourBHK: {
    //             bgColor: "#eca9f7",
    //             text: "4BHK"
    //         },
    //         threeBHK: {
    //             bgColor: "#00ffe5",
    //             text: "3BHK"
    //         }
    //     },
    //     units: [
    //         {
    //             id: 1,
    //             name: "Unit No-1",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1504,859,1673,859,1711,812,2134,817,2097,859,2240,875,2214,949,2500,949,2441,1225,2171,1214,2155,1283,2118,1357,1832,1347,1816,1400,1329,1395,1435,1214,1451,1188,1260,1183",
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1308,1400,1822,1389,1811,1416,2086,1426,2049,1511,2028,1606,2341,1612,2224,2057,1981,2046,2018,1914,1949,1908,1901,2057,1838,2237,1753,2444,630,2433,715,2353,318,2359,863,1659,1075,1654,1102,1585,1213,1580",
    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3495,981,3723,997,3675,833,4305,838,4321,870,4544,875,4798,1220,4591,1214,4634,1273,4697,1447,4178,1447,4157,1395,3882,1410,3839,1310,3808,1246,3559,1246",
    //         },
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3882,1474,4178,1485,4168,1447,4697,1447,4824,1638,4893,1654,4930,1718,5142,1723,5672,2465,5290,2465,5354,2550,4173,2544,4009,1988,3935,1972,3972,2126,3723,2115,3628,1670,3945,1659",
    //         },
    //     ],
    //     features: [
    //         "Grand double-height air-conditioned building entrance lobby",
    //         "Beautiful floor lobbies",
    //         "High-speed elevators",
    //         "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
    //         "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
    //     ]
    // },
    // 28: {
    //     image: floor27Img,
    //     imageSettings: {
    //         svgSize: "0 0 6000 4000",
    //         imageWidth: "6000",
    //         imageHeight: "3650",
    //     },
    //     buttonSettings: {
    //         fourBHK: {
    //             bgColor: "#eca9f7",
    //             text: "4BHK"
    //         },
    //         threeBHK: {
    //             bgColor: "#00ffe5",
    //             text: "3BHK"
    //         }
    //     },
    //      units: [
    //         {
    //             id: 1,
    //             name: "Unit No-1",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1504,859,1673,859,1711,812,2134,817,2097,859,2240,875,2214,949,2500,949,2441,1225,2171,1214,2155,1283,2118,1357,1832,1347,1816,1400,1329,1395,1435,1214,1451,1188,1260,1183",
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1308,1400,1822,1389,1811,1416,2086,1426,2049,1511,2028,1606,2341,1612,2224,2057,1981,2046,2018,1914,1949,1908,1901,2057,1838,2237,1753,2444,630,2433,715,2353,318,2359,863,1659,1075,1654,1102,1585,1213,1580",
    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3495,981,3723,997,3675,833,4305,838,4321,870,4544,875,4798,1220,4591,1214,4634,1273,4697,1447,4178,1447,4157,1395,3882,1410,3839,1310,3808,1246,3559,1246",
    //         },
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3882,1474,4178,1485,4168,1447,4697,1447,4824,1638,4893,1654,4930,1718,5142,1723,5672,2465,5290,2465,5354,2550,4173,2544,4009,1988,3935,1972,3972,2126,3723,2115,3628,1670,3945,1659",
    //         },
    //     ],
    //     features: [
    //         "Grand double-height air-conditioned building entrance lobby",
    //         "Beautiful floor lobbies",
    //         "High-speed elevators",
    //         "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
    //         "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
    //     ]
    // },
    // 29: {
    //     image: floor27Img,
    //     imageSettings: {
    //         svgSize: "0 0 6000 4000",
    //         imageWidth: "6000",
    //         imageHeight: "3650",
    //     },
    //     buttonSettings: {
    //         fourBHK: {
    //             bgColor: "#eca9f7",
    //             text: "4BHK"
    //         },
    //         threeBHK: {
    //             bgColor: "#00ffe5",
    //             text: "3BHK"
    //         }
    //     },
    //     units: [
    //         {
    //             id: 1,
    //             name: "Unit No-1",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1504,859,1673,859,1711,812,2134,817,2097,859,2240,875,2214,949,2500,949,2441,1225,2171,1214,2155,1283,2118,1357,1832,1347,1816,1400,1329,1395,1435,1214,1451,1188,1260,1183",
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1308,1400,1822,1389,1811,1416,2086,1426,2049,1511,2028,1606,2341,1612,2224,2057,1981,2046,2018,1914,1949,1908,1901,2057,1838,2237,1753,2444,630,2433,715,2353,318,2359,863,1659,1075,1654,1102,1585,1213,1580",
    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3495,981,3723,997,3675,833,4305,838,4321,870,4544,875,4798,1220,4591,1214,4634,1273,4697,1447,4178,1447,4157,1395,3882,1410,3839,1310,3808,1246,3559,1246",
    //         },
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3882,1474,4178,1485,4168,1447,4697,1447,4824,1638,4893,1654,4930,1718,5142,1723,5672,2465,5290,2465,5354,2550,4173,2544,4009,1988,3935,1972,3972,2126,3723,2115,3628,1670,3945,1659",
    //         },
    //     ],
    //     features: [
    //         "Grand double-height air-conditioned building entrance lobby",
    //         "Beautiful floor lobbies",
    //         "High-speed elevators",
    //         "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
    //         "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
    //     ]
    // },


};
