import floor1Img from "../assets/Floors/Wing-D/1st Floor D-Wing.jpg";
import floor2Img from '../assets/Floors/Wing-D/2nd Floor D-Wing.jpg';
import floor3Img from '../assets/Floors/Wing-D/3rd to 7th, 9th to 13th Floor D-Wing.jpg';
import floor8Img from '../assets/Floors/Wing-D/8th Floor D-Wing.jpg';
import floor14Img from '../assets/Floors/Wing-D/14th,16th &17th Floor D-Wing.jpg';
import floor15Img from '../assets/Floors/Wing-D/15th Floor D-Wing.jpg';
import floor18Img from '../assets/Floors/Wing-D/18th to 21st Floor D-Wing.jpg';
import floor22Img from '../assets/Floors/Wing-D/22nd Floor D-wing.jpg';
import floor23Img from '../assets/Floors/Wing-D/23rd to 26th Floor D-Wing.jpg';
import floor27Img from '../assets/Floors/Wing-D/27th to 29th Floor D-Wing.jpg';

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
                polygonPoints: "1605,791,1647,716,1737,727,1758,700,2357,700,2309,828,2521,817,2452,1061,2214,1061,2161,1188,1864,1188,1838,1214,1377,1204,1499,1034,1329,1034,1467,849,1610,854,1647,796",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1372,1214,1832,1225,2092,1236,2065,1320,2113,1320,2086,1395,2219,1405,2150,1691,2023,1691,1859,2205,1477,2189,1382,2391,471,2391,487,2353,371,2343,561,2099,784,2104,831,2014,980,1813,821,1787,959,1617,1075,1612,1133,1538,959,1522,1160,1278,1329,1283"

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            {
                id: 4,
                name: "Unit No-4",
                type: "2 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(255, 193, 7, 0.5)",
                polygonPoints: "3898,1405,4019,1681,3966,1697,4125,2200,4512,2189,4602,2417,4692,2406,4708,2475,4867,2475,4872,2406,5396,2406,5380,2343,5608,2353,5417,2099,5216,2120,5184,2067,5004,1802,5169,1802,5026,1606,4930,1617,4941,1638,4861,1649,4851,1612,4888,1596,4856,1564,5057,1559,4951,1426,4782,1437,4740,1384,4083,1368,4041,1326,3876,1320",
            },
            {
                id: 5,
                name: "Unit No-5",
                type: "2 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(255, 193, 7, 0.5)",
                polygonPoints: "3421,838,3490,1061,3744,1066,3861,1076,4178,1071,4443,1071,4417,1029,4570,1029,4517,934,4364,933,4289,822,4247,806,4189,721,3808,705,3829,748,3680,748,3728,833",
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
                polygonPoints: "1605,791,1647,716,1737,727,1758,700,2357,700,2309,828,2521,817,2452,1061,2214,1061,2161,1188,1864,1188,1838,1214,1377,1204,1499,1034,1329,1034,1467,849,1610,854,1647,796",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1372,1214,1832,1225,2092,1236,2065,1320,2113,1320,2086,1395,2219,1405,2150,1691,2023,1691,1859,2205,1477,2189,1382,2391,471,2391,487,2353,371,2343,561,2099,784,2104,831,2014,980,1813,821,1787,959,1617,1075,1612,1133,1538,959,1522,1160,1278,1329,1283"

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3797,706,4189,706,4279,817,4369,944,4512,939,4575,1024,4448,1024,4454,1066,4533,1071,4618,1214,4168,1214,4162,1172,3908,1183,3876,1124,3765,1119,3739,1045,3490,1050,3437,843,3718,833,3691,764,3813,759",
            },
            {
                id: 5,
                name: "Unit No-5",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
                polygonPoints: "1605,791,1647,716,1737,727,1758,700,2357,700,2309,828,2521,817,2452,1061,2214,1061,2161,1188,1864,1188,1838,1214,1377,1204,1499,1034,1329,1034,1467,849,1610,854,1647,796",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1372,1214,1832,1225,2092,1236,2065,1320,2113,1320,2086,1395,2219,1405,2150,1691,2023,1691,1859,2205,1477,2189,1382,2391,471,2391,487,2353,371,2343,561,2099,784,2104,831,2014,980,1813,821,1787,959,1617,1075,1612,1133,1538,959,1522,1160,1278,1329,1283"

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3797,706,4189,706,4279,817,4369,944,4512,939,4575,1024,4448,1024,4454,1066,4533,1071,4618,1214,4168,1214,4162,1172,3908,1183,3876,1124,3765,1119,3739,1045,3490,1050,3437,843,3718,833,3691,764,3813,759",
            },
            {
                id: 5,
                name: "Unit No-5",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
                polygonPoints: "1605,791,1647,716,1737,727,1758,700,2357,700,2309,828,2521,817,2452,1061,2214,1061,2161,1188,1864,1188,1838,1214,1377,1204,1499,1034,1329,1034,1467,849,1610,854,1647,796",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1372,1214,1832,1225,2092,1236,2065,1320,2113,1320,2086,1395,2219,1405,2150,1691,2023,1691,1859,2205,1477,2189,1382,2391,471,2391,487,2353,371,2343,561,2099,784,2104,831,2014,980,1813,821,1787,959,1617,1075,1612,1133,1538,959,1522,1160,1278,1329,1283"

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3797,706,4189,706,4279,817,4369,944,4512,939,4575,1024,4448,1024,4454,1066,4533,1071,4618,1214,4168,1214,4162,1172,3908,1183,3876,1124,3765,1119,3739,1045,3490,1050,3437,843,3718,833,3691,764,3813,759",
            },
            {
                id: 5,
                name: "Unit No-5",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
                polygonPoints: "1605,791,1647,716,1737,727,1758,700,2357,700,2309,828,2521,817,2452,1061,2214,1061,2161,1188,1864,1188,1838,1214,1377,1204,1499,1034,1329,1034,1467,849,1610,854,1647,796",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1372,1214,1832,1225,2092,1236,2065,1320,2113,1320,2086,1395,2219,1405,2150,1691,2023,1691,1859,2205,1477,2189,1382,2391,471,2391,487,2353,371,2343,561,2099,784,2104,831,2014,980,1813,821,1787,959,1617,1075,1612,1133,1538,959,1522,1160,1278,1329,1283"

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3797,706,4189,706,4279,817,4369,944,4512,939,4575,1024,4448,1024,4454,1066,4533,1071,4618,1214,4168,1214,4162,1172,3908,1183,3876,1124,3765,1119,3739,1045,3490,1050,3437,843,3718,833,3691,764,3813,759",
            },
            {
                id: 5,
                name: "Unit No-5",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
                polygonPoints: "1605,791,1647,716,1737,727,1758,700,2357,700,2309,828,2521,817,2452,1061,2214,1061,2161,1188,1864,1188,1838,1214,1377,1204,1499,1034,1329,1034,1467,849,1610,854,1647,796",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1372,1214,1832,1225,2092,1236,2065,1320,2113,1320,2086,1395,2219,1405,2150,1691,2023,1691,1859,2205,1477,2189,1382,2391,471,2391,487,2353,371,2343,561,2099,784,2104,831,2014,980,1813,821,1787,959,1617,1075,1612,1133,1538,959,1522,1160,1278,1329,1283"

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3797,706,4189,706,4279,817,4369,944,4512,939,4575,1024,4448,1024,4454,1066,4533,1071,4618,1214,4168,1214,4162,1172,3908,1183,3876,1124,3765,1119,3739,1045,3490,1050,3437,843,3718,833,3691,764,3813,759",
            },
            {
                id: 5,
                name: "Unit No-5",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
                polygonPoints: "1605,791,1647,716,1737,727,1758,700,2357,700,2309,828,2521,817,2452,1061,2214,1061,2161,1188,1864,1188,1838,1214,1377,1204,1499,1034,1329,1034,1467,849,1610,854,1647,796",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1372,1214,1832,1225,2092,1236,2065,1320,2113,1320,2086,1395,2219,1405,2150,1691,2023,1691,1859,2205,1477,2189,1382,2391,471,2391,487,2353,371,2343,561,2099,784,2104,831,2014,980,1813,821,1787,959,1617,1075,1612,1133,1538,959,1522,1160,1278,1329,1283"

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3797,706,4189,706,4279,817,4369,944,4512,939,4575,1024,4448,1024,4454,1066,4533,1071,4618,1214,4168,1214,4162,1172,3908,1183,3876,1124,3765,1119,3739,1045,3490,1050,3437,843,3718,833,3691,764,3813,759",
            },
            {
                id: 5,
                name: "Unit No-5",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
            {
                id: 1,
                name: "Unit No-1",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1605,791,1647,716,1737,727,1758,700,2357,700,2309,828,2521,817,2452,1061,2214,1061,2161,1188,1864,1188,1838,1214,1377,1204,1499,1034,1329,1034,1467,849,1610,854,1647,796",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1372,1214,1832,1225,2092,1236,2065,1320,2113,1320,2086,1395,2219,1405,2150,1691,2023,1691,1859,2205,1477,2189,1382,2391,471,2391,487,2353,371,2343,561,2099,784,2104,831,2014,980,1813,821,1787,959,1617,1075,1612,1133,1538,959,1522,1160,1278,1329,1283"

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            // {
            //     id: 4,
            //     name: "Unit No-4",
            //     type: "3 BHK",
            //     size: "1150 sq.ft",
            //     hoverColor: "rgba(0,255,229,0.3)",
            //     polygonPoints: "3797,706,4189,706,4279,817,4369,944,4512,939,4575,1024,4448,1024,4454,1066,4533,1071,4618,1214,4168,1214,4162,1172,3908,1183,3876,1124,3765,1119,3739,1045,3490,1050,3437,843,3718,833,3691,764,3813,759",
            // },
            {
                id: 4,
                name: "Unit No-5",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
                polygonPoints: "1605,791,1647,716,1737,727,1758,700,2357,700,2309,828,2521,817,2452,1061,2214,1061,2161,1188,1864,1188,1838,1214,1377,1204,1499,1034,1329,1034,1467,849,1610,854,1647,796",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1372,1214,1832,1225,2092,1236,2065,1320,2113,1320,2086,1395,2219,1405,2150,1691,2023,1691,1859,2205,1477,2189,1382,2391,471,2391,487,2353,371,2343,561,2099,784,2104,831,2014,980,1813,821,1787,959,1617,1075,1612,1133,1538,959,1522,1160,1278,1329,1283"

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3797,706,4189,706,4279,817,4369,944,4512,939,4575,1024,4448,1024,4454,1066,4533,1071,4618,1214,4168,1214,4162,1172,3908,1183,3876,1124,3765,1119,3739,1045,3490,1050,3437,843,3718,833,3691,764,3813,759",
            },
            {
                id: 5,
                name: "Unit No-5",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
                polygonPoints: "1605,791,1647,716,1737,727,1758,700,2357,700,2309,828,2521,817,2452,1061,2214,1061,2161,1188,1864,1188,1838,1214,1377,1204,1499,1034,1329,1034,1467,849,1610,854,1647,796",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1372,1214,1832,1225,2092,1236,2065,1320,2113,1320,2086,1395,2219,1405,2150,1691,2023,1691,1859,2205,1477,2189,1382,2391,471,2391,487,2353,371,2343,561,2099,784,2104,831,2014,980,1813,821,1787,959,1617,1075,1612,1133,1538,959,1522,1160,1278,1329,1283"

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3797,706,4189,706,4279,817,4369,944,4512,939,4575,1024,4448,1024,4454,1066,4533,1071,4618,1214,4168,1214,4162,1172,3908,1183,3876,1124,3765,1119,3739,1045,3490,1050,3437,843,3718,833,3691,764,3813,759",
            },
            {
                id: 5,
                name: "Unit No-5",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
                polygonPoints: "1605,791,1647,716,1737,727,1758,700,2357,700,2309,828,2521,817,2452,1061,2214,1061,2161,1188,1864,1188,1838,1214,1377,1204,1499,1034,1329,1034,1467,849,1610,854,1647,796",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1372,1214,1832,1225,2092,1236,2065,1320,2113,1320,2086,1395,2219,1405,2150,1691,2023,1691,1859,2205,1477,2189,1382,2391,471,2391,487,2353,371,2343,561,2099,784,2104,831,2014,980,1813,821,1787,959,1617,1075,1612,1133,1538,959,1522,1160,1278,1329,1283"

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3797,706,4189,706,4279,817,4369,944,4512,939,4575,1024,4448,1024,4454,1066,4533,1071,4618,1214,4168,1214,4162,1172,3908,1183,3876,1124,3765,1119,3739,1045,3490,1050,3437,843,3718,833,3691,764,3813,759",
            },
            {
                id: 5,
                name: "Unit No-5",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
                polygonPoints: "1605,791,1647,716,1737,727,1758,700,2357,700,2309,828,2521,817,2452,1061,2214,1061,2161,1188,1864,1188,1838,1214,1377,1204,1499,1034,1329,1034,1467,849,1610,854,1647,796",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1372,1214,1832,1225,2092,1236,2065,1320,2113,1320,2086,1395,2219,1405,2150,1691,2023,1691,1859,2205,1477,2189,1382,2391,471,2391,487,2353,371,2343,561,2099,784,2104,831,2014,980,1813,821,1787,959,1617,1075,1612,1133,1538,959,1522,1160,1278,1329,1283"

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3797,706,4189,706,4279,817,4369,944,4512,939,4575,1024,4448,1024,4454,1066,4533,1071,4618,1214,4168,1214,4162,1172,3908,1183,3876,1124,3765,1119,3739,1045,3490,1050,3437,843,3718,833,3691,764,3813,759",
            },
            {
                id: 5,
                name: "Unit No-5",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
                polygonPoints: "1605,791,1647,716,1737,727,1758,700,2357,700,2309,828,2521,817,2452,1061,2214,1061,2161,1188,1864,1188,1838,1214,1377,1204,1499,1034,1329,1034,1467,849,1610,854,1647,796",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1372,1214,1832,1225,2092,1236,2065,1320,2113,1320,2086,1395,2219,1405,2150,1691,2023,1691,1859,2205,1477,2189,1382,2391,471,2391,487,2353,371,2343,561,2099,784,2104,831,2014,980,1813,821,1787,959,1617,1075,1612,1133,1538,959,1522,1160,1278,1329,1283"

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3797,706,4189,706,4279,817,4369,944,4512,939,4575,1024,4448,1024,4454,1066,4533,1071,4618,1214,4168,1214,4162,1172,3908,1183,3876,1124,3765,1119,3739,1045,3490,1050,3437,843,3718,833,3691,764,3813,759",
            },
            {
                id: 5,
                name: "Unit No-5",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
                polygonPoints: "1605,791,1647,716,1737,727,1758,700,2357,700,2309,828,2521,817,2452,1061,2214,1061,2161,1188,1864,1188,1838,1214,1377,1204,1499,1034,1329,1034,1467,849,1610,854,1647,796",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1372,1214,1832,1225,2092,1236,2065,1320,2113,1320,2086,1395,2219,1405,2150,1691,2023,1691,1859,2205,1477,2189,1382,2391,471,2391,487,2353,371,2343,561,2099,784,2104,831,2014,980,1813,821,1787,959,1617,1075,1612,1133,1538,959,1522,1160,1278,1329,1283"

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3437,838,3707,828,3691,748,3813,753,3808,706,4189,706,4252,812,4289,812,4316,854,4464,849,4570,1034,4427,1034,4443,1066,4528,1066,4623,1214,4168,1204,4173,1183,3914,1193,3882,1108,3760,1108,3733,1061,3490,1055",
            },
            {
                id: 5,
                name: "Unit No-5",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
            {
                id: 1,
                name: "Unit No-1",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1647,711,1742,722,1763,700,2357,706,2325,817,2521,828,2452,1066,2203,1066,2155,1183,1864,1167,1838,1214,1393,1214,1499,1034,1350,1029,1456,843,1599,854,1631,801,1594,791",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1160,1246,1324,1257,1356,1204,1816,1214,2139,1236,2113,1320,2092,1384,2240,1405,2155,1691,2018,1686,1853,2189,1483,2189,1387,2401,1287,2401,1292,2449,1133,2449,1096,2401,487,2401,503,2359,376,2353,567,2104,673,2104,715,2036,831,2036,996,1792,831,1797,959,1596,1096,1606,1154,1532,959,1516",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            // {
            //     id: 4,
            //     name: "Unit No-4",
            //     type: "3 BHK",
            //     size: "1150 sq.ft",
            //     hoverColor: "rgba(0,255,229,0.3)",
            //     polygonPoints: "3426,822,3474,1045,3733,1061,3744,1103,3892,1108,3914,1188,4147,1172,4152,1214,4634,1209,4533,1066,4401,1066,4422,1034,4570,1024,4380,743,4221,748,4210,706,3808,711,3829,759,3691,748,3723,828",
            // },
            {
                id: 5,
                name: "Unit No-5",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
                polygonPoints: "1605,791,1647,716,1737,727,1758,700,2357,700,2309,828,2521,817,2452,1061,2214,1061,2161,1188,1864,1188,1838,1214,1377,1204,1499,1034,1329,1034,1467,849,1610,854,1647,796",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1372,1214,1832,1225,2092,1236,2065,1320,2113,1320,2086,1395,2219,1405,2150,1691,2023,1691,1859,2205,1477,2189,1382,2391,471,2391,487,2353,371,2343,561,2099,784,2104,831,2014,980,1813,821,1787,959,1617,1075,1612,1133,1538,959,1522,1160,1278,1329,1283"

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3437,838,3707,828,3691,748,3813,753,3808,706,4189,706,4252,812,4289,812,4316,854,4464,849,4570,1034,4427,1034,4443,1066,4528,1066,4623,1214,4168,1204,4173,1183,3914,1193,3882,1108,3760,1108,3733,1061,3490,1055",
            },
            {
                id: 5,
                name: "Unit No-5",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
                polygonPoints: "1605,791,1647,716,1737,727,1758,700,2357,700,2309,828,2521,817,2452,1061,2214,1061,2161,1188,1864,1188,1838,1214,1377,1204,1499,1034,1329,1034,1467,849,1610,854,1647,796",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1372,1214,1832,1225,2092,1236,2065,1320,2113,1320,2086,1395,2219,1405,2150,1691,2023,1691,1859,2205,1477,2189,1382,2391,471,2391,487,2353,371,2343,561,2099,784,2104,831,2014,980,1813,821,1787,959,1617,1075,1612,1133,1538,959,1522,1160,1278,1329,1283"

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3437,838,3707,828,3691,748,3813,753,3808,706,4189,706,4252,812,4289,812,4316,854,4464,849,4570,1034,4427,1034,4443,1066,4528,1066,4623,1214,4168,1204,4173,1183,3914,1193,3882,1108,3760,1108,3733,1061,3490,1055",
            },
            {
                id: 5,
                name: "Unit No-5",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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

    //18
    18: {
        id:18,
         ExploreHomes: "i74rwiwnyd",
        image: floor18Img,
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
                polygonPoints: "1340,1034,1552,727,1748,727,1774,690,2362,706,2320,822,2510,838,2452,1055,2182,1061,2182,1114,2155,1183,1848,1188,1848,1214,1832,1220,1361,1209,1456,1082,1483,1034",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1160,1246,1324,1257,1356,1204,1816,1214,2139,1236,2113,1320,2092,1384,2240,1405,2155,1691,2018,1686,1853,2189,1483,2189,1387,2401,1287,2401,1292,2449,1133,2449,1096,2401,487,2401,503,2359,376,2353,567,2104,673,2104,715,2036,831,2036,996,1792,831,1797,959,1596,1096,1606,1154,1532,959,1516",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3453,838,3585,833,3723,822,3680,743,3829,753,3802,711,4178,700,4210,748,4390,743,4591,1040,4422,1040,4454,1082,4544,1087,4628,1214,4157,1220,4141,1188,3903,1188,3892,1124,3760,1130,3733,1066,3490,1066",
            },
            {
                id: 5,
                name: "Unit No-5",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
         ExploreHomes: "i74rwiwnyd",
        image: floor18Img,
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
                polygonPoints: "1340,1034,1552,727,1748,727,1774,690,2362,706,2320,822,2510,838,2452,1055,2182,1061,2182,1114,2155,1183,1848,1188,1848,1214,1832,1220,1361,1209,1456,1082,1483,1034",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1160,1246,1324,1257,1356,1204,1816,1214,2139,1236,2113,1320,2092,1384,2240,1405,2155,1691,2018,1686,1853,2189,1483,2189,1387,2401,1287,2401,1292,2449,1133,2449,1096,2401,487,2401,503,2359,376,2353,567,2104,673,2104,715,2036,831,2036,996,1792,831,1797,959,1596,1096,1606,1154,1532,959,1516",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3453,838,3585,833,3723,822,3680,743,3829,753,3802,711,4178,700,4210,748,4390,743,4591,1040,4422,1040,4454,1082,4544,1087,4628,1214,4157,1220,4141,1188,3903,1188,3892,1124,3760,1130,3733,1066,3490,1066",
            },
            {
                id: 5,
                name: "Unit No-5",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
         ExploreHomes: "i74rwiwnyd",
        image: floor18Img,
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
                polygonPoints: "1340,1034,1552,727,1748,727,1774,690,2362,706,2320,822,2510,838,2452,1055,2182,1061,2182,1114,2155,1183,1848,1188,1848,1214,1832,1220,1361,1209,1456,1082,1483,1034",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1160,1246,1324,1257,1356,1204,1816,1214,2139,1236,2113,1320,2092,1384,2240,1405,2155,1691,2018,1686,1853,2189,1483,2189,1387,2401,1287,2401,1292,2449,1133,2449,1096,2401,487,2401,503,2359,376,2353,567,2104,673,2104,715,2036,831,2036,996,1792,831,1797,959,1596,1096,1606,1154,1532,959,1516",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3453,838,3585,833,3723,822,3680,743,3829,753,3802,711,4178,700,4210,748,4390,743,4591,1040,4422,1040,4454,1082,4544,1087,4628,1214,4157,1220,4141,1188,3903,1188,3892,1124,3760,1130,3733,1066,3490,1066",
            },
            {
                id: 5,
                name: "Unit No-5",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
         ExploreHomes: "i74rwiwnyd",
        image: floor18Img,
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
                polygonPoints: "1340,1034,1552,727,1748,727,1774,690,2362,706,2320,822,2510,838,2452,1055,2182,1061,2182,1114,2155,1183,1848,1188,1848,1214,1832,1220,1361,1209,1456,1082,1483,1034",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1160,1246,1324,1257,1356,1204,1816,1214,2139,1236,2113,1320,2092,1384,2240,1405,2155,1691,2018,1686,1853,2189,1483,2189,1387,2401,1287,2401,1292,2449,1133,2449,1096,2401,487,2401,503,2359,376,2353,567,2104,673,2104,715,2036,831,2036,996,1792,831,1797,959,1596,1096,1606,1154,1532,959,1516",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3453,838,3585,833,3723,822,3680,743,3829,753,3802,711,4178,700,4210,748,4390,743,4591,1040,4422,1040,4454,1082,4544,1087,4628,1214,4157,1220,4141,1188,3903,1188,3892,1124,3760,1130,3733,1066,3490,1066",
            },
            {
                id: 5,
                name: "Unit No-5",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
         ExploreHomes: "i74rwiwnyd",
        image: floor22Img,
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
                polygonPoints: "1652,716,1737,716,1753,695,2357,690,2309,833,2515,822,2452,1055,2219,1061,2155,1193,1859,1177,1838,1214,1356,1214,1456,1066,1477,1024,1335,1034,1472,843,1605,854,1642,796,1599,791",
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1160,1246,1324,1257,1356,1204,1816,1214,2139,1236,2113,1320,2092,1384,2240,1405,2155,1691,2018,1686,1853,2189,1483,2189,1387,2401,1287,2401,1292,2449,1133,2449,1096,2401,487,2401,503,2359,376,2353,567,2104,673,2104,715,2036,831,2036,996,1792,831,1797,959,1596,1096,1606,1154,1532,959,1516",

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
            }
            ,
            // {
            //     id: 4,
            //     name: "Unit No-4",
            //     type: "3 BHK",
            //     size: "1150 sq.ft",
            //     hoverColor: "rgba(0,255,229,0.3)",
            //     polygonPoints: "3453,838,3585,833,3723,822,3680,743,3829,753,3802,711,4178,700,4210,748,4390,743,4591,1040,4422,1040,4454,1082,4544,1087,4628,1214,4157,1220,4141,1188,3903,1188,3892,1124,3760,1130,3733,1066,3490,1066",
            // },
            {
                id: 5,
                name: "Unit No-5",
                type: "2 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(255, 193, 7, 0.5)",
                polygonPoints: "3882,1326,4056,1320,4072,1384,4925,1379,5031,1532,4840,1538,4904,1596,4846,1617,4861,1649,4951,1654,4930,1612,5036,1606,5163,1792,4994,1792,5206,2099,5439,2094,5624,2359,5370,2353,5402,2417,4904,2401,4872,2465,4713,2465,4703,2396,4602,2412,4517,2205,4125,2205,3993,1691",
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
    //             polygonPoints: "1652,716,1737,716,1753,695,2357,690,2309,833,2515,822,2452,1055,2219,1061,2155,1193,1859,1177,1838,1214,1356,1214,1456,1066,1477,1024,1335,1034,1472,843,1605,854,1642,796,1599,791",
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1160,1246,1324,1257,1356,1204,1816,1214,2139,1236,2113,1320,2092,1384,2240,1405,2155,1691,2018,1686,1853,2189,1483,2189,1387,2401,1287,2401,1292,2449,1133,2449,1096,2401,487,2401,503,2359,376,2353,567,2104,673,2104,715,2036,831,2036,996,1792,831,1797,959,1596,1096,1606,1154,1532,959,1516",

    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
    //         }
    //         ,
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3680,759,3813,748,3792,695,4189,695,4252,822,4289,812,4311,854,4448,843,4575,1013,4432,1029,4443,1050,4528,1066,4634,1209,4168,1214,4152,1172,3908,1188,3892,1108,3749,1114,3744,1055,3479,1050,3447,843,3707,833",
    //         },
    //         {
    //             id: 5,
    //             name: "Unit No-5",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
    //      units: [
    //         {
    //             id: 1,
    //             name: "Unit No-1",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1652,716,1737,716,1753,695,2357,690,2309,833,2515,822,2452,1055,2219,1061,2155,1193,1859,1177,1838,1214,1356,1214,1456,1066,1477,1024,1335,1034,1472,843,1605,854,1642,796,1599,791",
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1160,1246,1324,1257,1356,1204,1816,1214,2139,1236,2113,1320,2092,1384,2240,1405,2155,1691,2018,1686,1853,2189,1483,2189,1387,2401,1287,2401,1292,2449,1133,2449,1096,2401,487,2401,503,2359,376,2353,567,2104,673,2104,715,2036,831,2036,996,1792,831,1797,959,1596,1096,1606,1154,1532,959,1516",

    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
    //         }
    //         ,
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3680,759,3813,748,3792,695,4189,695,4252,822,4289,812,4311,854,4448,843,4575,1013,4432,1029,4443,1050,4528,1066,4634,1209,4168,1214,4152,1172,3908,1188,3892,1108,3749,1114,3744,1055,3479,1050,3447,843,3707,833",
    //         },
    //         {
    //             id: 5,
    //             name: "Unit No-5",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
    //             polygonPoints: "1652,716,1737,716,1753,695,2357,690,2309,833,2515,822,2452,1055,2219,1061,2155,1193,1859,1177,1838,1214,1356,1214,1456,1066,1477,1024,1335,1034,1472,843,1605,854,1642,796,1599,791",
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1160,1246,1324,1257,1356,1204,1816,1214,2139,1236,2113,1320,2092,1384,2240,1405,2155,1691,2018,1686,1853,2189,1483,2189,1387,2401,1287,2401,1292,2449,1133,2449,1096,2401,487,2401,503,2359,376,2353,567,2104,673,2104,715,2036,831,2036,996,1792,831,1797,959,1596,1096,1606,1154,1532,959,1516",

    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
    //         }
    //         ,
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3680,759,3813,748,3792,695,4189,695,4252,822,4289,812,4311,854,4448,843,4575,1013,4432,1029,4443,1050,4528,1066,4634,1209,4168,1214,4152,1172,3908,1188,3892,1108,3749,1114,3744,1055,3479,1050,3447,843,3707,833",
    //         },
    //         {
    //             id: 5,
    //             name: "Unit No-5",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
    //   units: [
    //         {
    //             id: 1,
    //             name: "Unit No-1",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1652,716,1737,716,1753,695,2357,690,2309,833,2515,822,2452,1055,2219,1061,2155,1193,1859,1177,1838,1214,1356,1214,1456,1066,1477,1024,1335,1034,1472,843,1605,854,1642,796,1599,791",
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1160,1246,1324,1257,1356,1204,1816,1214,2139,1236,2113,1320,2092,1384,2240,1405,2155,1691,2018,1686,1853,2189,1483,2189,1387,2401,1287,2401,1292,2449,1133,2449,1096,2401,487,2401,503,2359,376,2353,567,2104,673,2104,715,2036,831,2036,996,1792,831,1797,959,1596,1096,1606,1154,1532,959,1516",

    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
    //         }
    //         ,
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3680,759,3813,748,3792,695,4189,695,4252,822,4289,812,4311,854,4448,843,4575,1013,4432,1029,4443,1050,4528,1066,4634,1209,4168,1214,4152,1172,3908,1188,3892,1108,3749,1114,3744,1055,3479,1050,3447,843,3707,833",
    //         },
    //         {
    //             id: 5,
    //             name: "Unit No-5",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
    //   units: [
    //         {
    //             id: 1,
    //             name: "Unit No-1",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1568,727,1758,743,1769,685,2346,690,2314,812,2510,828,2441,1050,2214,1040,2198,1108,2177,1193,1885,1183,1843,1209,1372,1209,1499,1040,1335,1040",
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1160,1246,1324,1257,1356,1204,1816,1214,2139,1236,2113,1320,2092,1384,2240,1405,2155,1691,2018,1686,1853,2189,1483,2189,1387,2401,1287,2401,1292,2449,1133,2449,1096,2401,487,2401,503,2359,376,2353,567,2104,673,2104,715,2036,831,2036,996,1792,831,1797,959,1596,1096,1606,1154,1532,959,1516",

    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
    //         }
    //         ,
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3426,822,3474,1045,3733,1061,3744,1103,3892,1108,3914,1188,4147,1172,4152,1214,4634,1209,4533,1066,4401,1066,4422,1034,4570,1024,4380,743,4221,748,4210,706,3808,711,3829,759,3691,748,3723,828",
    //         },
    //         {
    //             id: 5,
    //             name: "Unit No-5",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
    //     units: [
    //         {
    //             id: 1,
    //             name: "Unit No-1",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1568,727,1758,743,1769,685,2346,690,2314,812,2510,828,2441,1050,2214,1040,2198,1108,2177,1193,1885,1183,1843,1209,1372,1209,1499,1040,1335,1040",
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1160,1246,1324,1257,1356,1204,1816,1214,2139,1236,2113,1320,2092,1384,2240,1405,2155,1691,2018,1686,1853,2189,1483,2189,1387,2401,1287,2401,1292,2449,1133,2449,1096,2401,487,2401,503,2359,376,2353,567,2104,673,2104,715,2036,831,2036,996,1792,831,1797,959,1596,1096,1606,1154,1532,959,1516",

    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
    //         }
    //         ,
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3426,822,3474,1045,3733,1061,3744,1103,3892,1108,3914,1188,4147,1172,4152,1214,4634,1209,4533,1066,4401,1066,4422,1034,4570,1024,4380,743,4221,748,4210,706,3808,711,3829,759,3691,748,3723,828",
    //         },
    //         {
    //             id: 5,
    //             name: "Unit No-5",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
    //   units: [
    //         {
    //             id: 1,
    //             name: "Unit No-1",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1568,727,1758,743,1769,685,2346,690,2314,812,2510,828,2441,1050,2214,1040,2198,1108,2177,1193,1885,1183,1843,1209,1372,1209,1499,1040,1335,1040",
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1160,1246,1324,1257,1356,1204,1816,1214,2139,1236,2113,1320,2092,1384,2240,1405,2155,1691,2018,1686,1853,2189,1483,2189,1387,2401,1287,2401,1292,2449,1133,2449,1096,2401,487,2401,503,2359,376,2353,567,2104,673,2104,715,2036,831,2036,996,1792,831,1797,959,1596,1096,1606,1154,1532,959,1516",

    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "2028,1697,1917,2036,2341,2041,2314,2237,2706,2248,2711,2163,2833,2168,2844,2338,3532,2338,3495,2168,3649,2152,4104,2147,3966,1702,3892,1702,3866,1649,3553,1644,3220,1649,3236,1596,2791,1591,2770,1686,2494,1681,2526,1527,2346,1527,2293,1697",
    //         }
    //         ,
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3426,822,3474,1045,3733,1061,3744,1103,3892,1108,3914,1188,4147,1172,4152,1214,4634,1209,4533,1066,4401,1066,4422,1034,4570,1024,4380,743,4221,748,4210,706,3808,711,3829,759,3691,748,3723,828",
    //         },
    //         {
    //             id: 5,
    //             name: "Unit No-5",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3892,1241,4618,1209,4665,1267,4846,1267,5036,1532,4846,1538,4898,1596,4846,1617,4872,1649,4951,1644,4936,1601,5057,1596,5163,1797,4999,1797,5206,2083,5439,2094,5629,2364,5370,2348,5412,2422,4904,2417,4867,2465,4708,2481,4708,2406,4613,2412,4523,2195,4136,2195,3998,1808,3961,1697,4009,1691,3903,1389,3892,1326,3919,1299",
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
