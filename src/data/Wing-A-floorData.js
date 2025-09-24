import floor1Img from "../assets/Floors/Wing-A/1st Floor A-Wing.jpg";
import floor2Img from '../assets/Floors/Wing-A/2nd Floor A-Wing.jpg';
import floor3Img from '../assets/Floors/Wing-A/3rd to 7th,9th to 13th Floor A-wing.jpg';
import floor8Img from '../assets/Floors/Wing-A/8th Floor A-Wing.jpg';
import floor14Img from '../assets/Floors/Wing-A/14th, 16th & 17th Floor A-Wing.jpg';
import floor15Img from '../assets/Floors/Wing-A/15th Floor A-Wing.jpg';
import floor18Img from '../assets/Floors/Wing-A/18th to 21st Floor A-Wing.jpg';
import floor22Img from '../assets/Floors/Wing-A/22nd Floor A-wing.jpg';
import floor23Img from '../assets/Floors/Wing-A/23rd to 26th Floor A-Wing.jpg';
import floor27Img from '../assets/Floors/Wing-A/27th to 29th Floor A-Wing.jpg';

import Walkthrough2D from '../assets/walkthroughvedio/4BHK_Walkthrough.mp4';
import walkthrough2D from '../assets/walkthroughvedio/3BHK_Walkthrough.mp4'
import ExploreHomes from "../assets/walkthroughvedio/Home Automation_high res.mp4";
import floorunit1 from '../assets/Floors/Wing-A/Units-A/WING-A Unit 01.jpg';

import floorunit2 from '../assets/Floors/Wing-A/Units-A/WING-A Unit 02.jpg'
import floorunit3 from '../assets/Floors/Wing-A/Units-A/WING-A Unit 03.jpg'
import floorunit4 from '../assets/Floors/Wing-A/Units-A/WING-A Unit 04.jpg'
import floorunit5 from '../assets/Floors/Wing-A/Units-A/WING-A Unit 05.jpg';
import floorunit6 from '../assets/Floors/Wing-A/Units-A/WING-A Unit 06.jpg'

export const floorData = {
    1: {
        id: 1,
        image: floor1Img,
        ExploreHomes: ExploreHomes,
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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",

                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-3",
                type: "4 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                // hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",

                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1400 sq.ft",
                // hoverColor: "rgba(236,169,247,0.3)",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659",

                image2D2: floorunit4,

                exploreVedio2D: walkthrough2D,

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
        id: 2,
        image: floor2Img,
        ExploreHomes: ExploreHomes,
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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",

                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2018,791,2415,791,2388,833,2537,843,2526,918,2812,928,2770,1172,2505,1183,2505,1241,2452,1246,2431,1320,2166,1310,2129,1347,1673,1331,1753,1209,1790,1140,1652,1140,1673,1040,1848,1045,1901,902,1975,902",

                image2D2: floorunit2,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "4 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                // hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",

                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1400 sq.ft",
                // hoverColor: "rgba(236,169,247,0.3)",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659",

                image2D2: floorunit4,

                exploreVedio2D: walkthrough2D,

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
        id: 3,
        image: floor3Img,
        ExploreHomes: ExploreHomes,
        exploreVedio2D: Walkthrough2D,
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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",
                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2002,791,2415,791,2410,822,2537,838,2515,923,2801,934,2770,1172,2510,1172,2500,1241,2452,1236,2431,1320,2161,1299,2134,1352,1668,1331,1779,1151,1626,1135,1684,1040,1843,1045,1933,896",

                image2D2: floorunit2,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"
                ,
                image2D2: floorunit4,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "4 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",
                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
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



    4: {
        id: 4,
        image: floor3Img,
        ExploreHomes: ExploreHomes,
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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",
                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2002,791,2415,791,2410,822,2537,838,2515,923,2801,934,2770,1172,2510,1172,2500,1241,2452,1236,2431,1320,2161,1299,2134,1352,1668,1331,1779,1151,1626,1135,1684,1040,1843,1045,1933,896",

                image2D2: floorunit2,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"
                ,
                image2D2: floorunit4,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "4 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",
                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
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

    5: {
        id: 5,
        image: floor3Img,
        ExploreHomes: ExploreHomes,
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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",
                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2002,791,2415,791,2410,822,2537,838,2515,923,2801,934,2770,1172,2510,1172,2500,1241,2452,1236,2431,1320,2161,1299,2134,1352,1668,1331,1779,1151,1626,1135,1684,1040,1843,1045,1933,896",

                image2D2: floorunit2,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"
                ,
                image2D2: floorunit4,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "4 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",
                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
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

    6: {
        id: 6,
        image: floor3Img,
        ExploreHomes: ExploreHomes,
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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",
                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2002,791,2415,791,2410,822,2537,838,2515,923,2801,934,2770,1172,2510,1172,2500,1241,2452,1236,2431,1320,2161,1299,2134,1352,1668,1331,1779,1151,1626,1135,1684,1040,1843,1045,1933,896",

                image2D2: floorunit2,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"
                ,
                image2D2: floorunit4,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "4 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",
                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
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


    7: {
        id: 7,
        image: floor3Img,
        ExploreHomes: ExploreHomes,

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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",
                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2002,791,2415,791,2410,822,2537,838,2515,923,2801,934,2770,1172,2510,1172,2500,1241,2452,1236,2431,1320,2161,1299,2134,1352,1668,1331,1779,1151,1626,1135,1684,1040,1843,1045,1933,896",

                image2D2: floorunit2,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"
                ,
                image2D2: floorunit4,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "4 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",
                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
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



    8: {
        id: 8,
        image: floor8Img,
        ExploreHomes: ExploreHomes,
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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",


                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",

                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,

            },
            {
                id: 2,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"

                ,
                image2D2: floorunit4,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-4",
                type: "4 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",


                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
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

    9: {
        id: 9,
        image: floor3Img,
        ExploreHomes: ExploreHomes,
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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",
                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2002,791,2415,791,2410,822,2537,838,2515,923,2801,934,2770,1172,2510,1172,2500,1241,2452,1236,2431,1320,2161,1299,2134,1352,1668,1331,1779,1151,1626,1135,1684,1040,1843,1045,1933,896",

                image2D2: floorunit2,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"
                ,
                image2D2: floorunit4,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "4 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",
                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
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


    10: {
        id: 10,
        image: floor3Img,
        ExploreHomes: ExploreHomes,
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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",
                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2002,791,2415,791,2410,822,2537,838,2515,923,2801,934,2770,1172,2510,1172,2500,1241,2452,1236,2431,1320,2161,1299,2134,1352,1668,1331,1779,1151,1626,1135,1684,1040,1843,1045,1933,896",

                image2D2: floorunit2,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"
                ,
                image2D2: floorunit4,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "4 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",
                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
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


    11: {
        id: 11,
        image: floor3Img,
        ExploreHomes: ExploreHomes,
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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",
                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2002,791,2415,791,2410,822,2537,838,2515,923,2801,934,2770,1172,2510,1172,2500,1241,2452,1236,2431,1320,2161,1299,2134,1352,1668,1331,1779,1151,1626,1135,1684,1040,1843,1045,1933,896",

                image2D2: floorunit2,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"
                ,
                image2D2: floorunit4,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "4 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",
                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
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


    12: {
        id: 12,
        image: floor3Img,
        ExploreHomes: ExploreHomes,
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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",
                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2002,791,2415,791,2410,822,2537,838,2515,923,2801,934,2770,1172,2510,1172,2500,1241,2452,1236,2431,1320,2161,1299,2134,1352,1668,1331,1779,1151,1626,1135,1684,1040,1843,1045,1933,896",

                image2D2: floorunit2,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"
                ,
                image2D2: floorunit4,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "4 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",
                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
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


    13: {
        id: 13,
        image: floor3Img,
        ExploreHomes: ExploreHomes,
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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",
                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "2002,791,2415,791,2410,822,2537,838,2515,923,2801,934,2770,1172,2510,1172,2500,1241,2452,1236,2431,1320,2161,1299,2134,1352,1668,1331,1779,1151,1626,1135,1684,1040,1843,1045,1933,896",

                image2D2: floorunit2,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"
                ,
                image2D2: floorunit4,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "4 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",
                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
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



    14: {
        id: 14,
        image: floor14Img,
        ExploreHomes: ExploreHomes,
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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",

                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",

                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1619,1144,1752,948,1794,911,1948,905,2001,800,2409,800,2409,831,2361,921,2514,932,2795,943,2769,1166,2514,1170,2430,1335,2149,1324,2133,1356,1667,1345,1762,1213,1778,1149"

                ,
                image2D2: floorunit5,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",

                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"
                ,
                image2D2: floorunit4,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "4 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",

                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
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

    //15th
    15: {
        id: 15,
        image: floor15Img,
        ExploreHomes: ExploreHomes,
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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",

                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"

                ,
                image2D2: floorunit4,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "4 BHK",
                size: "1150 sq.ft",

                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",

                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
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


    16: {
        id: 16,
        image: floor14Img,
        ExploreHomes: ExploreHomes,
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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",

                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",

                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1619,1144,1752,948,1794,911,1948,905,2001,800,2409,800,2409,831,2361,921,2514,932,2795,943,2769,1166,2514,1170,2430,1335,2149,1324,2133,1356,1667,1345,1762,1213,1778,1149"

                ,
                image2D2: floorunit5,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",

                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"
                ,
                image2D2: floorunit4,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "4 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",

                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
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
        id: 17,
        image: floor14Img,
        ExploreHomes: ExploreHomes,
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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",

                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",

                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1619,1144,1752,948,1794,911,1948,905,2001,800,2409,800,2409,831,2361,921,2514,932,2795,943,2769,1166,2514,1170,2430,1335,2149,1324,2133,1356,1667,1345,1762,1213,1778,1149"

                ,
                image2D2: floorunit5,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",

                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"
                ,
                image2D2: floorunit4,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "4 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",

                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
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
        id: 18,
        image: floor18Img,
        ExploreHomes: ExploreHomes,
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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",

                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,
            },

            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "2007,796,2410,791,2383,838,2367,923,2505,928,2791,928,2780,1172,2521,1156,2500,1257,2272,1251,2261,1310,2155,1299,2145,1342,1684,1347,1785,1145,1626,1140,1806,838,1991,833"

                ,
                image2D2: floorunit6,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "4 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",

                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"

                ,
                image2D2: floorunit4,

                exploreVedio2D: Walkthrough2D,
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
        id: 19,
        image: floor18Img,
        ExploreHomes: ExploreHomes,
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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",

                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,
            },

            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "2007,796,2410,791,2383,838,2367,923,2505,928,2791,928,2780,1172,2521,1156,2500,1257,2272,1251,2261,1310,2155,1299,2145,1342,1684,1347,1785,1145,1626,1140,1806,838,1991,833"

                ,
                image2D2: floorunit6,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "4 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",

                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"

                ,
                image2D2: floorunit4,

                exploreVedio2D: Walkthrough2D,
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
        id: 20,
        image: floor18Img,
        ExploreHomes: ExploreHomes,
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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",

                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,
            },

            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "2007,796,2410,791,2383,838,2367,923,2505,928,2791,928,2780,1172,2521,1156,2500,1257,2272,1251,2261,1310,2155,1299,2145,1342,1684,1347,1785,1145,1626,1140,1806,838,1991,833"

                ,
                image2D2: floorunit6,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "4 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",

                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"

                ,
                image2D2: floorunit4,

                exploreVedio2D: Walkthrough2D,
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
        id: 21,
        image: floor18Img,
        ExploreHomes: ExploreHomes,
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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",

                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,
            },

            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "2007,796,2410,791,2383,838,2367,923,2505,928,2791,928,2780,1172,2521,1156,2500,1257,2272,1251,2261,1310,2155,1299,2145,1342,1684,1347,1785,1145,1626,1140,1806,838,1991,833"

                ,
                image2D2: floorunit6,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "4 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",

                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"

                ,
                image2D2: floorunit4,

                exploreVedio2D: Walkthrough2D,
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
        id: 22,
        image: floor22Img,
        ExploreHomes: ExploreHomes,
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
                type: "4 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",

                image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"

                ,
                image2D2: floorunit4,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "4 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",

                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
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
    // 23: {
    //     id: 23,
    //     image: floor23Img,
    //     ExploreHomes: ExploreHomes,
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
    //             type: "4 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(236,169,247,0.3)",
    //             polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",

    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"
    //             ,
    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "2007,796,2410,791,2383,838,2367,923,2505,928,2791,928,2780,1172,2521,1156,2500,1257,2272,1251,2261,1310,2155,1299,2145,1342,1684,1347,1785,1145,1626,1140,1806,838,1991,833"
    //             ,
    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
    //         },
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "4 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(236,169,247,0.3)",
    //             polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",

    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
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
    //     id: 24,
    //     image: floor23Img,
    //     ExploreHomes: ExploreHomes,
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
    //             type: "4 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(236,169,247,0.3)",
    //             polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",

    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"

    //             ,
    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "2007,796,2410,791,2383,838,2367,923,2505,928,2791,928,2780,1172,2521,1156,2500,1257,2272,1251,2261,1310,2155,1299,2145,1342,1684,1347,1785,1145,1626,1140,1806,838,1991,833"
    //             ,
    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
    //         },
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "4 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(236,169,247,0.3)",
    //             polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",

    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
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
    //     id: 25,
    //     image: floor23Img,
    //     ExploreHomes: ExploreHomes,
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
    //             type: "4 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(236,169,247,0.3)",
    //             polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",

    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"

    //             ,
    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "2007,796,2410,791,2383,838,2367,923,2505,928,2791,928,2780,1172,2521,1156,2500,1257,2272,1251,2261,1310,2155,1299,2145,1342,1684,1347,1785,1145,1626,1140,1806,838,1991,833"
    //             ,
    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
    //         },
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "4 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(236,169,247,0.3)",
    //             polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",

    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
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
    //     id: 26,
    //     image: floor23Img,
    //     ExploreHomes: ExploreHomes,
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
    //             type: "4 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(236,169,247,0.3)",
    //             polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",

    //             image2D2: floorunit2,

    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"
    //             ,
    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "2007,796,2410,791,2383,838,2367,923,2505,928,2791,928,2780,1172,2521,1156,2500,1257,2272,1251,2261,1310,2155,1299,2145,1342,1684,1347,1785,1145,1626,1140,1806,838,1991,833"

    //             ,
    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
    //         },
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "4 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(236,169,247,0.3)",
    //             polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",

    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
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
    //     id: 27,
    //     image: floor27Img,
    //     ExploreHomes: ExploreHomes,
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
    //             type: "4 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(236,169,247,0.3)",
    //             polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",

    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"
    //             ,
    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "2007,796,2410,791,2383,838,2367,923,2505,928,2791,928,2780,1172,2521,1156,2500,1257,2272,1251,2261,1310,2155,1299,2145,1342,1684,1347,1785,1145,1626,1140,1806,838,1991,833"

    //             ,
    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
    //         },
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "4 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(236,169,247,0.3)",
    //             polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",

    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
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
    //     id: 28,
    //     image: floor27Img,
    //     ExploreHomes: ExploreHomes,
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
    //             type: "4 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(236,169,247,0.3)",
    //             polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",

    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"
    //             ,
    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "2007,796,2410,791,2383,838,2367,923,2505,928,2791,928,2780,1172,2521,1156,2500,1257,2272,1251,2261,1310,2155,1299,2145,1342,1684,1347,1785,1145,1626,1140,1806,838,1991,833"
    //             ,
    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
    //         },
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "4 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(236,169,247,0.3)",
    //             polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",

    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
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
    //     id: 29,
    //     image: floor27Img,
    //     ExploreHomes: ExploreHomes,
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
    //             type: "4 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(236,169,247,0.3)",
    //             polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693",

    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "4067,1506,4231,1506,4305,1665,4549,1665,4734,2004,4279,2009,4300,2057,4210,2062,4221,2115,4316,2115,4342,2189,3961,2195,3940,2104,3866,2126,3914,2322,3553,2322,3527,2126,2976,2110,2976,2258,2600,2269,2616,2104,2547,2094,2621,1585,3262,1585,3802,1585,3829,1659,4115,1659"
    //             ,
    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "2007,796,2410,791,2383,838,2367,923,2505,928,2791,928,2780,1172,2521,1156,2500,1257,2272,1251,2261,1310,2155,1299,2145,1342,1684,1347,1785,1145,1626,1140,1806,838,1991,833"
    //             ,
    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
    //         },
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "4 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(236,169,247,0.3)",
    //             polygonPoints: "3771,1002,3951,1002,3977,1066,4062,1061,4099,1151,4311,1151,4263,1040,4099,1050,4041,918,3956,918,3924,849,4644,849,4671,896,4766,875,4835,971,4681,976,4697,1002,4734,1071,4803,1055,4946,1257,5121,1257,5359,1553,5169,1559,5206,1617,5132,1617,5312,1871,4930,1871,4925,1946,4740,1940,4745,1871,4655,1871,4533,1617,4279,1617,4194,1410,4025,1416,3998,1331,4168,1326,4141,1262,3977,1262,3855,1267",

    //             image2D2: floorunit2,

    //             exploreVedio2D: Walkthrough2D,
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
