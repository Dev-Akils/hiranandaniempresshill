import floor1Img from "../assets/Floors/Wing-B/1st Floor B-Wing.jpg";
import floor2Img from '../assets/Floors/Wing-B/2nd Floor B-Wing.jpg';
import floor3Img from '../assets/Floors/Wing-B/3rd to 7th, 9th to 13th Floor B-Wing.jpg';
import floor8Img from '../assets/Floors/Wing-B/8th Floor B-Wing.jpg';
import floor14Img from '../assets/Floors/Wing-B/14th, 16th & 17th Floor B-Wing.jpg';
import floor15Img from '../assets/Floors/Wing-B/15th Floor B-Wing.jpg';
import floor18Img from '../assets/Floors/Wing-B/18th to 21st Floor B-Wing.jpg';
import floor22Img from '../assets/Floors/Wing-B/22nd Floor B-wing.jpg';
import floor23Img from '../assets/Floors/Wing-B/23rd to 26th Floor B-Wing.jpg';
import floor27Img from '../assets/Floors/Wing-B/27th to 29th Floor B-Wing.jpg';

import ExploreHomes from "../assets/walkthroughvedio/Home Automation_high res.mp4";

import floorunit1 from '../assets/Floors/Wing-B/Units-B/WING-B Unit 01.jpg'
import floorunit2 from '../assets/Floors/Wing-B/Units-B/WING-B Unit 02.jpg'
import floorunit3 from '../assets/Floors/Wing-B/Units-B/WING-B Unit 03.jpg';
import floorunit4 from '../assets/Floors/Wing-B/Units-B/WING-B Unit 04.jpg';
import floorunit5 from '../assets/Floors/Wing-B/Units-B/WING-B Unit 05.jpg';
import floorunit6 from '../assets/Floors/Wing-B/Units-B/WING-B Unit 06.jpg';
import floorunit7 from '../assets/Floors/Wing-B/Units-B/WING-B Unit 07.jpg';
import floorunit8 from '../assets/Floors/Wing-B/Units-B/WING-B Unit 08.jpg';
import floorunit9 from '../assets/Floors/Wing-B/Units-B/WING-B Unit 09.jpg';
import floorunit10 from '../assets/Floors/Wing-B/Units-B/WING-B Unit 10.jpg';
import floorunit11 from '../assets/Floors/Wing-B/Units-B/WING-B Unit 11.jpg';
import floorunit12 from '../assets/Floors/Wing-B/Units-B/WING-B Unit 12.jpg';



import Walkthrough2D from '../assets/walkthroughvedio/4BHK_Walkthrough.mp4';
import walkthrough2D from '../assets/walkthroughvedio/3BHK_Walkthrough.mp4'
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
                polygonPoints: "837,1644,1043,1649,1064,1580,1748,1591,1806,1511,1981,1522,1959,1606,2145,1606,2240,1617,2129,2046,1827,2046,1695,2046,1594,2274,1329,2279,1276,2412,561,2412,768,2094,715,2083,890,1840,699,1818"

                , image2D2: floorunit1,

                exploreVedio2D: Walkthrough2D,

            },
            {
                id: 2,
                name: "Unit No-2",
                type: "2 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(255, 193, 7, 0.5)",
                polygonPoints: "1589,918,1663,812,2055,806,2039,875,2251,881,2224,949,2452,960,2362,1204,2097,1204,2055,1273,1922,1273,1944,1214,1673,1220,1319,1214,1335,1172,1186,1172,1340,960,1398,960,1477,960,1520,928",
                image2D2: floorunit2,
                exploreVedio2D: Walkthrough2D,

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3612,960,3590,849,4221,849,4247,870,4380,875,4422,955,4295,949,4295,981,4358,971,4380,1008,4533,1013,4687,1236,4528,1241,4634,1447,3887,1458,3696,1458,3654,1225,3432,1214,3384,976",
                image2D2: floorunit3,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 4,


                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3686,1469,4660,1474,4798,1718,5020,1723,5312,2147,5073,2168,5121,2232,5063,2237,5089,2306,5290,2306,5470,2576,5248,2571,5274,2613,4056,2603,3919,2078,3808,2104,3829,2232,3596,2242,3511,1739,3744,1744"
                , image2D2: floorunit4,

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
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1102,1580,1043,1649,837,1638,715,1824,911,1834,747,2062,789,2089,567,2401,1271,2412,1340,2274,1578,2285,1700,2041,2134,2041,2261,1617,1944,1606,2018,1437,1721,1426,1737,1389,1266,1384",

                image2D2: floorunit5,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1266,1368,1732,1394,1753,1352,2034,1378,2071,1283,2086,1209,2346,1203,2441,976,2229,965,2256,880,2039,880,2065,817,1658,817,1605,912,1520,923,1499,971,1329,970,1181,1156,1350,1177",
                image2D2: floorunit6,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3612,960,3590,849,4221,849,4247,870,4380,875,4422,955,4295,949,4295,981,4358,971,4380,1008,4533,1013,4687,1236,4528,1241,4634,1447,3887,1458,3696,1458,3654,1225,3432,1214,3384,976",
                image2D2: floorunit3,

                exploreVedio2D: walkthrough2D,


            },
            {
                id: 4,

                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3686,1469,4660,1474,4798,1718,5020,1723,5312,2147,5073,2168,5121,2232,5063,2237,5089,2306,5290,2306,5470,2576,5248,2571,5274,2613,4056,2603,3919,2078,3808,2104,3829,2232,3596,2242,3511,1739,3744,1744"
                , image2D2: floorunit4,

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
                polygonPoints: "1102,1580,1043,1649,837,1638,715,1824,911,1834,747,2062,789,2089,567,2401,1271,2412,1340,2274,1578,2285,1700,2041,2134,2041,2261,1617,1944,1606,2018,1437,1721,1426,1737,1389,1266,1384",

                image2D2: floorunit5,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1266,1368,1732,1394,1753,1352,2034,1378,2071,1283,2086,1209,2346,1203,2441,976,2229,965,2256,880,2039,880,2065,817,1658,817,1605,912,1520,923,1499,971,1329,970,1181,1156,1350,1177",
                image2D2: floorunit6,

                exploreVedio2D: walkthrough2D,
            },

            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3612,960,3590,849,4221,849,4247,870,4380,875,4422,955,4295,949,4295,981,4358,971,4380,1008,4533,1013,4687,1236,4528,1241,4634,1447,3887,1458,3696,1458,3654,1225,3432,1214,3384,976",
                image2D2: floorunit3,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 4,


                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3686,1469,4660,1474,4798,1718,5020,1723,5312,2147,5073,2168,5121,2232,5063,2237,5089,2306,5290,2306,5470,2576,5248,2571,5274,2613,4056,2603,3919,2078,3808,2104,3829,2232,3596,2242,3511,1739,3744,1744"
                , image2D2: floorunit4,

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
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1102,1580,1043,1649,837,1638,715,1824,911,1834,747,2062,789,2089,567,2401,1271,2412,1340,2274,1578,2285,1700,2041,2134,2041,2261,1617,1944,1606,2018,1437,1721,1426,1737,1389,1266,1384",

                image2D2: floorunit5,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1266,1368,1732,1394,1753,1352,2034,1378,2071,1283,2086,1209,2346,1203,2441,976,2229,965,2256,880,2039,880,2065,817,1658,817,1605,912,1520,923,1499,971,1329,970,1181,1156,1350,1177",
                image2D2: floorunit6,

                exploreVedio2D: walkthrough2D,
            },

            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3612,960,3590,849,4221,849,4247,870,4380,875,4422,955,4295,949,4295,981,4358,971,4380,1008,4533,1013,4687,1236,4528,1241,4634,1447,3887,1458,3696,1458,3654,1225,3432,1214,3384,976",
                image2D2: floorunit3,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 4,


                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3686,1469,4660,1474,4798,1718,5020,1723,5312,2147,5073,2168,5121,2232,5063,2237,5089,2306,5290,2306,5470,2576,5248,2571,5274,2613,4056,2603,3919,2078,3808,2104,3829,2232,3596,2242,3511,1739,3744,1744"
                , image2D2: floorunit4,

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
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1102,1580,1043,1649,837,1638,715,1824,911,1834,747,2062,789,2089,567,2401,1271,2412,1340,2274,1578,2285,1700,2041,2134,2041,2261,1617,1944,1606,2018,1437,1721,1426,1737,1389,1266,1384",

                image2D2: floorunit5,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1266,1368,1732,1394,1753,1352,2034,1378,2071,1283,2086,1209,2346,1203,2441,976,2229,965,2256,880,2039,880,2065,817,1658,817,1605,912,1520,923,1499,971,1329,970,1181,1156,1350,1177",
                image2D2: floorunit6,

                exploreVedio2D: walkthrough2D,
            },

            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3612,960,3590,849,4221,849,4247,870,4380,875,4422,955,4295,949,4295,981,4358,971,4380,1008,4533,1013,4687,1236,4528,1241,4634,1447,3887,1458,3696,1458,3654,1225,3432,1214,3384,976",
                image2D2: floorunit3,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 4,


                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3686,1469,4660,1474,4798,1718,5020,1723,5312,2147,5073,2168,5121,2232,5063,2237,5089,2306,5290,2306,5470,2576,5248,2571,5274,2613,4056,2603,3919,2078,3808,2104,3829,2232,3596,2242,3511,1739,3744,1744"
                , image2D2: floorunit4,

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
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1102,1580,1043,1649,837,1638,715,1824,911,1834,747,2062,789,2089,567,2401,1271,2412,1340,2274,1578,2285,1700,2041,2134,2041,2261,1617,1944,1606,2018,1437,1721,1426,1737,1389,1266,1384",

                image2D2: floorunit5,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1266,1368,1732,1394,1753,1352,2034,1378,2071,1283,2086,1209,2346,1203,2441,976,2229,965,2256,880,2039,880,2065,817,1658,817,1605,912,1520,923,1499,971,1329,970,1181,1156,1350,1177",
                image2D2: floorunit6,

                exploreVedio2D: walkthrough2D,
            },

            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3612,960,3590,849,4221,849,4247,870,4380,875,4422,955,4295,949,4295,981,4358,971,4380,1008,4533,1013,4687,1236,4528,1241,4634,1447,3887,1458,3696,1458,3654,1225,3432,1214,3384,976",
                image2D2: floorunit3,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 4,


                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3686,1469,4660,1474,4798,1718,5020,1723,5312,2147,5073,2168,5121,2232,5063,2237,5089,2306,5290,2306,5470,2576,5248,2571,5274,2613,4056,2603,3919,2078,3808,2104,3829,2232,3596,2242,3511,1739,3744,1744"
                , image2D2: floorunit4,

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
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1102,1580,1043,1649,837,1638,715,1824,911,1834,747,2062,789,2089,567,2401,1271,2412,1340,2274,1578,2285,1700,2041,2134,2041,2261,1617,1944,1606,2018,1437,1721,1426,1737,1389,1266,1384",

                image2D2: floorunit5,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1266,1368,1732,1394,1753,1352,2034,1378,2071,1283,2086,1209,2346,1203,2441,976,2229,965,2256,880,2039,880,2065,817,1658,817,1605,912,1520,923,1499,971,1329,970,1181,1156,1350,1177",
                image2D2: floorunit6,

                exploreVedio2D: walkthrough2D,
            },

            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3612,960,3590,849,4221,849,4247,870,4380,875,4422,955,4295,949,4295,981,4358,971,4380,1008,4533,1013,4687,1236,4528,1241,4634,1447,3887,1458,3696,1458,3654,1225,3432,1214,3384,976",
                image2D2: floorunit3,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 4,


                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3686,1469,4660,1474,4798,1718,5020,1723,5312,2147,5073,2168,5121,2232,5063,2237,5089,2306,5290,2306,5470,2576,5248,2571,5274,2613,4056,2603,3919,2078,3808,2104,3829,2232,3596,2242,3511,1739,3744,1744"
                , image2D2: floorunit4,

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

    // 8th
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
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1266,1368,1732,1394,1753,1352,2034,1378,2071,1283,2086,1209,2346,1203,2441,976,2229,965,2256,880,2039,880,2065,817,1658,817,1605,912,1520,923,1499,971,1329,970,1181,1156,1350,1177",
                image2D2: floorunit6,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3686,1469,4660,1474,4798,1718,5020,1723,5312,2147,5073,2168,5121,2232,5063,2237,5089,2306,5290,2306,5470,2576,5248,2571,5274,2613,4056,2603,3919,2078,3808,2104,3829,2232,3596,2242,3511,1739,3744,1744"
                , image2D2: floorunit4,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3612,960,3590,849,4221,849,4247,870,4380,875,4422,955,4295,949,4295,981,4358,971,4380,1008,4533,1013,4687,1236,4528,1241,4634,1447,3887,1458,3696,1458,3654,1225,3432,1214,3384,976",
                image2D2: floorunit3,

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
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1102,1580,1043,1649,837,1638,715,1824,911,1834,747,2062,789,2089,567,2401,1271,2412,1340,2274,1578,2285,1700,2041,2134,2041,2261,1617,1944,1606,2018,1437,1721,1426,1737,1389,1266,1384",

                image2D2: floorunit5,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1266,1368,1732,1394,1753,1352,2034,1378,2071,1283,2086,1209,2346,1203,2441,976,2229,965,2256,880,2039,880,2065,817,1658,817,1605,912,1520,923,1499,971,1329,970,1181,1156,1350,1177",
                image2D2: floorunit6,

                exploreVedio2D: walkthrough2D,
            },

            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3612,960,3590,849,4221,849,4247,870,4380,875,4422,955,4295,949,4295,981,4358,971,4380,1008,4533,1013,4687,1236,4528,1241,4634,1447,3887,1458,3696,1458,3654,1225,3432,1214,3384,976",
                image2D2: floorunit3,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 4,


                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3686,1469,4660,1474,4798,1718,5020,1723,5312,2147,5073,2168,5121,2232,5063,2237,5089,2306,5290,2306,5470,2576,5248,2571,5274,2613,4056,2603,3919,2078,3808,2104,3829,2232,3596,2242,3511,1739,3744,1744"
                , image2D2: floorunit4,

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
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1102,1580,1043,1649,837,1638,715,1824,911,1834,747,2062,789,2089,567,2401,1271,2412,1340,2274,1578,2285,1700,2041,2134,2041,2261,1617,1944,1606,2018,1437,1721,1426,1737,1389,1266,1384",

                image2D2: floorunit5,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1266,1368,1732,1394,1753,1352,2034,1378,2071,1283,2086,1209,2346,1203,2441,976,2229,965,2256,880,2039,880,2065,817,1658,817,1605,912,1520,923,1499,971,1329,970,1181,1156,1350,1177",
                image2D2: floorunit6,

                exploreVedio2D: walkthrough2D,
            },

            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3612,960,3590,849,4221,849,4247,870,4380,875,4422,955,4295,949,4295,981,4358,971,4380,1008,4533,1013,4687,1236,4528,1241,4634,1447,3887,1458,3696,1458,3654,1225,3432,1214,3384,976",
                image2D2: floorunit3,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 4,


                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3686,1469,4660,1474,4798,1718,5020,1723,5312,2147,5073,2168,5121,2232,5063,2237,5089,2306,5290,2306,5470,2576,5248,2571,5274,2613,4056,2603,3919,2078,3808,2104,3829,2232,3596,2242,3511,1739,3744,1744"
                , image2D2: floorunit4,

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
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1102,1580,1043,1649,837,1638,715,1824,911,1834,747,2062,789,2089,567,2401,1271,2412,1340,2274,1578,2285,1700,2041,2134,2041,2261,1617,1944,1606,2018,1437,1721,1426,1737,1389,1266,1384",

                image2D2: floorunit5,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1266,1368,1732,1394,1753,1352,2034,1378,2071,1283,2086,1209,2346,1203,2441,976,2229,965,2256,880,2039,880,2065,817,1658,817,1605,912,1520,923,1499,971,1329,970,1181,1156,1350,1177",
                image2D2: floorunit6,

                exploreVedio2D: walkthrough2D,
            },

            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3612,960,3590,849,4221,849,4247,870,4380,875,4422,955,4295,949,4295,981,4358,971,4380,1008,4533,1013,4687,1236,4528,1241,4634,1447,3887,1458,3696,1458,3654,1225,3432,1214,3384,976",
                image2D2: floorunit3,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 4,


                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3686,1469,4660,1474,4798,1718,5020,1723,5312,2147,5073,2168,5121,2232,5063,2237,5089,2306,5290,2306,5470,2576,5248,2571,5274,2613,4056,2603,3919,2078,3808,2104,3829,2232,3596,2242,3511,1739,3744,1744"
                , image2D2: floorunit4,

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
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1102,1580,1043,1649,837,1638,715,1824,911,1834,747,2062,789,2089,567,2401,1271,2412,1340,2274,1578,2285,1700,2041,2134,2041,2261,1617,1944,1606,2018,1437,1721,1426,1737,1389,1266,1384",

                image2D2: floorunit5,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1266,1368,1732,1394,1753,1352,2034,1378,2071,1283,2086,1209,2346,1203,2441,976,2229,965,2256,880,2039,880,2065,817,1658,817,1605,912,1520,923,1499,971,1329,970,1181,1156,1350,1177",
                image2D2: floorunit6,

                exploreVedio2D: walkthrough2D,
            },

            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3612,960,3590,849,4221,849,4247,870,4380,875,4422,955,4295,949,4295,981,4358,971,4380,1008,4533,1013,4687,1236,4528,1241,4634,1447,3887,1458,3696,1458,3654,1225,3432,1214,3384,976",
                image2D2: floorunit3,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 4,


                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3686,1469,4660,1474,4798,1718,5020,1723,5312,2147,5073,2168,5121,2232,5063,2237,5089,2306,5290,2306,5470,2576,5248,2571,5274,2613,4056,2603,3919,2078,3808,2104,3829,2232,3596,2242,3511,1739,3744,1744"
                , image2D2: floorunit4,

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
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1102,1580,1043,1649,837,1638,715,1824,911,1834,747,2062,789,2089,567,2401,1271,2412,1340,2274,1578,2285,1700,2041,2134,2041,2261,1617,1944,1606,2018,1437,1721,1426,1737,1389,1266,1384",

                image2D2: floorunit5,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1266,1368,1732,1394,1753,1352,2034,1378,2071,1283,2086,1209,2346,1203,2441,976,2229,965,2256,880,2039,880,2065,817,1658,817,1605,912,1520,923,1499,971,1329,970,1181,1156,1350,1177",
                image2D2: floorunit6,

                exploreVedio2D: walkthrough2D,
            },

            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3612,960,3590,849,4221,849,4247,870,4380,875,4422,955,4295,949,4295,981,4358,971,4380,1008,4533,1013,4687,1236,4528,1241,4634,1447,3887,1458,3696,1458,3654,1225,3432,1214,3384,976",
                image2D2: floorunit3,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 4,


                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3686,1469,4660,1474,4798,1718,5020,1723,5312,2147,5073,2168,5121,2232,5063,2237,5089,2306,5290,2306,5470,2576,5248,2571,5274,2613,4056,2603,3919,2078,3808,2104,3829,2232,3596,2242,3511,1739,3744,1744"
                , image2D2: floorunit4,

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


    // 14th

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
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1239,1373,1742,1389,1721,1432,2002,1437,1944,1606,2235,1612,2129,2046,1822,2036,1689,2041,1599,2279,1335,2269,1276,2406,567,2406,757,2089,794,2009,583,1988,837,1654,1049,1659,1102,1575",

                image2D2: floorunit7,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1493,918,1541,817,1647,812,2293,812,2251,949,2441,955,2367,1204,2118,1204,2076,1257,2044,1368,1758,1363,1737,1389,1255,1379,1372,1225,1319,1225,1350,1151,1197,1156,1345,971,1467,976",
                image2D2: floorunit8,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3612,960,3590,849,4221,849,4247,870,4380,875,4422,955,4295,949,4295,981,4358,971,4380,1008,4533,1013,4687,1236,4528,1241,4634,1447,3887,1458,3696,1458,3654,1225,3432,1214,3384,976",
                image2D2: floorunit3,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3686,1469,4660,1474,4798,1718,5020,1723,5312,2147,5073,2168,5121,2232,5063,2237,5089,2306,5290,2306,5470,2576,5248,2571,5274,2613,4056,2603,3919,2078,3808,2104,3829,2232,3596,2242,3511,1739,3744,1744"
                , image2D2: floorunit4,

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

    // 15th
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
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1197,1161,1324,971,1467,981,1525,918,1467,907,1546,817,1658,833,1668,796,2272,806,2219,955,2436,949,2410,1045,2351,1209,2113,1193,2028,1357,1753,1357,1737,1400,1271,1384,1372,1220,1313,1214,1350,1172"
                , image2D2: floorunit6,

                exploreVedio2D: walkthrough2D,
            }, {
                id: 2,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3686,1469,4660,1474,4798,1718,5020,1723,5312,2147,5073,2168,5121,2232,5063,2237,5089,2306,5290,2306,5470,2576,5248,2571,5274,2613,4056,2603,3919,2078,3808,2104,3829,2232,3596,2242,3511,1739,3744,1744"
                , image2D2: floorunit4,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3400,965,3432,1220,3638,1225,3686,1447,4650,1469,4523,1236,4676,1225,4549,1013,4390,1013,4353,965,4417,923,4369,865,4263,854,4252,817,3575,817,3617,960",
                image2D2: floorunit3,

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
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1239,1373,1742,1389,1721,1432,2002,1437,1944,1606,2235,1612,2129,2046,1822,2036,1689,2041,1599,2279,1335,2269,1276,2406,567,2406,757,2089,794,2009,583,1988,837,1654,1049,1659,1102,1575",

                image2D2: floorunit7,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1493,918,1541,817,1647,812,2293,812,2251,949,2441,955,2367,1204,2118,1204,2076,1257,2044,1368,1758,1363,1737,1389,1255,1379,1372,1225,1319,1225,1350,1151,1197,1156,1345,971,1467,976",
                image2D2: floorunit8,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3612,960,3590,849,4221,849,4247,870,4380,875,4422,955,4295,949,4295,981,4358,971,4380,1008,4533,1013,4687,1236,4528,1241,4634,1447,3887,1458,3696,1458,3654,1225,3432,1214,3384,976",
                image2D2: floorunit3,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3686,1469,4660,1474,4798,1718,5020,1723,5312,2147,5073,2168,5121,2232,5063,2237,5089,2306,5290,2306,5470,2576,5248,2571,5274,2613,4056,2603,3919,2078,3808,2104,3829,2232,3596,2242,3511,1739,3744,1744"
                , image2D2: floorunit4,

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
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1239,1373,1742,1389,1721,1432,2002,1437,1944,1606,2235,1612,2129,2046,1822,2036,1689,2041,1599,2279,1335,2269,1276,2406,567,2406,757,2089,794,2009,583,1988,837,1654,1049,1659,1102,1575",

                image2D2: floorunit7,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1493,918,1541,817,1647,812,2293,812,2251,949,2441,955,2367,1204,2118,1204,2076,1257,2044,1368,1758,1363,1737,1389,1255,1379,1372,1225,1319,1225,1350,1151,1197,1156,1345,971,1467,976",
                image2D2: floorunit8,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3612,960,3590,849,4221,849,4247,870,4380,875,4422,955,4295,949,4295,981,4358,971,4380,1008,4533,1013,4687,1236,4528,1241,4634,1447,3887,1458,3696,1458,3654,1225,3432,1214,3384,976",
                image2D2: floorunit3,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3686,1469,4660,1474,4798,1718,5020,1723,5312,2147,5073,2168,5121,2232,5063,2237,5089,2306,5290,2306,5470,2576,5248,2571,5274,2613,4056,2603,3919,2078,3808,2104,3829,2232,3596,2242,3511,1739,3744,1744"
                , image2D2: floorunit4,

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


    // 18th
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
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "1255,1384,1732,1400,1716,1426,1991,1426,1954,1516,1944,1596,2240,1617,2113,2046,1906,2041,1944,1914,1853,1908,1816,2030,1695,2041,1583,2285,1345,2279,1287,2396,583,2396,614,2316,323,2295,826,1649,884,1654,1049,1654,1075,1585,1112,1585",

                image2D2: floorunit9,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1192,1161,1430,859,1615,854,1658,796,2282,801,2235,944,2441,944,2362,1214,2118,1214,2065,1278,2034,1363,1753,1363,1732,1395,1260,1384,1372,1225,1303,1220,1324,1183",
                image2D2: floorunit10,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "3585,833,4242,843,4263,896,4454,891,4697,1257,4528,1257,4634,1447,3680,1458,3633,1230,3437,1209,3384,965,3606,960",
                image2D2: floorunit11,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3702,1458,4634,1453,4766,1659,4803,1744,5036,1739,5566,2507,5216,2518,5280,2613,4051,2613,3914,2083,3802,2083,3829,2232,3575,2242,3495,1765,3760,1744",
                image2D2: floorunit12,

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
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "1255,1384,1732,1400,1716,1426,1991,1426,1954,1516,1944,1596,2240,1617,2113,2046,1906,2041,1944,1914,1853,1908,1816,2030,1695,2041,1583,2285,1345,2279,1287,2396,583,2396,614,2316,323,2295,826,1649,884,1654,1049,1654,1075,1585,1112,1585",

                image2D2: floorunit9,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1192,1161,1430,859,1615,854,1658,796,2282,801,2235,944,2441,944,2362,1214,2118,1214,2065,1278,2034,1363,1753,1363,1732,1395,1260,1384,1372,1225,1303,1220,1324,1183",
                image2D2: floorunit10,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "3585,833,4242,843,4263,896,4454,891,4697,1257,4528,1257,4634,1447,3680,1458,3633,1230,3437,1209,3384,965,3606,960",
                image2D2: floorunit11,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3702,1458,4634,1453,4766,1659,4803,1744,5036,1739,5566,2507,5216,2518,5280,2613,4051,2613,3914,2083,3802,2083,3829,2232,3575,2242,3495,1765,3760,1744",
                image2D2: floorunit12,

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
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "1255,1384,1732,1400,1716,1426,1991,1426,1954,1516,1944,1596,2240,1617,2113,2046,1906,2041,1944,1914,1853,1908,1816,2030,1695,2041,1583,2285,1345,2279,1287,2396,583,2396,614,2316,323,2295,826,1649,884,1654,1049,1654,1075,1585,1112,1585",

                image2D2: floorunit9,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1192,1161,1430,859,1615,854,1658,796,2282,801,2235,944,2441,944,2362,1214,2118,1214,2065,1278,2034,1363,1753,1363,1732,1395,1260,1384,1372,1225,1303,1220,1324,1183",
                image2D2: floorunit10,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "3585,833,4242,843,4263,896,4454,891,4697,1257,4528,1257,4634,1447,3680,1458,3633,1230,3437,1209,3384,965,3606,960",
                image2D2: floorunit11,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3702,1458,4634,1453,4766,1659,4803,1744,5036,1739,5566,2507,5216,2518,5280,2613,4051,2613,3914,2083,3802,2083,3829,2232,3575,2242,3495,1765,3760,1744",
                image2D2: floorunit12,

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
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "1255,1384,1732,1400,1716,1426,1991,1426,1954,1516,1944,1596,2240,1617,2113,2046,1906,2041,1944,1914,1853,1908,1816,2030,1695,2041,1583,2285,1345,2279,1287,2396,583,2396,614,2316,323,2295,826,1649,884,1654,1049,1654,1075,1585,1112,1585",

                image2D2: floorunit9,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 2,
                name: "Unit No-2",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "1192,1161,1430,859,1615,854,1658,796,2282,801,2235,944,2441,944,2362,1214,2118,1214,2065,1278,2034,1363,1753,1363,1732,1395,1260,1384,1372,1225,1303,1220,1324,1183",
                image2D2: floorunit10,

                exploreVedio2D: walkthrough2D,

            },
            {
                id: 3,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "3585,833,4242,843,4263,896,4454,891,4697,1257,4528,1257,4634,1447,3680,1458,3633,1230,3437,1209,3384,965,3606,960",
                image2D2: floorunit11,

                exploreVedio2D: walkthrough2D,
            },
            {
                id: 4,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3702,1458,4634,1453,4766,1659,4803,1744,5036,1739,5566,2507,5216,2518,5280,2613,4051,2613,3914,2083,3802,2083,3829,2232,3575,2242,3495,1765,3760,1744",
                image2D2: floorunit12,

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
                name: "Unit No-2",
                type: "2 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(255, 193, 7, 0.5)",
                polygonPoints: "1170,1177,1345,1177,1324,1225,1933,1230,1912,1273,2092,1278,2092,1214,2367,1220,2452,960,2235,949,2272,812,1594,812,1583,843,1541,822,1488,902,1393,918,1350,981",
                image2D2: floorunit2,

                exploreVedio2D: Walkthrough2D,
            },
            {
                id: 2,
                name: "Unit No-3",
                type: "3 BHK",
                size: "1400 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",

                polygonPoints: "3384,960,3421,1230,3633,1236,3686,1463,4634,1453,4528,1257,4718,1246,4538,1002,4491,1018,4380,1024,4353,949,4422,939,4374,865,4263,870,4263,828,3580,833,3617,955",
                image2D2: floorunit3,

                exploreVedio2D: Walkthrough2D,
            },

            {
                id: 3,
                name: "Unit No-4",
                type: "3 BHK",
                size: "1150 sq.ft",
                hoverColor: "rgba(0,255,229,0.3)",
                polygonPoints: "3686,1458,4655,1463,4808,1728,5031,1728,5312,2163,5079,2163,5126,2232,5057,2232,5089,2301,5290,2301,5460,2592,5248,2571,5280,2613,4041,2608,3914,2083,3813,2083,3834,2242,3580,2242,3500,1744,3760,1739",
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
    // 23: {
    //     image: floor23Img,
    //      ExploreHomes: ExploreHomes,
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
    //             polygonPoints: "1176,1172,1329,987,1467,987,1515,923,1462,912,1530,822,1631,833,1658,796,2282,812,2235,949,2452,960,2372,1214,2102,1204,2034,1357,1769,1363,1748,1400,1266,1395,1356,1220,1308,1214,1329,1183",
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "1250,1384,1753,1384,1726,1437,2007,1432,1938,1612,2235,1617,2134,2062,1843,2051,1673,2057,1589,2269,1340,2279,1287,2401,561,2401,757,2094,794,2009,545,1993,821,1654,1033,1659,1117,1559",

    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "3395,971,3421,1220,3628,1225,3680,1469,4644,1469,4528,1251,4708,1236,4554,1018,4380,1018,4342,944,4438,955,4369,859,4263,859,4258,828,3580,838,3622,960",

    //         },
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3680,1447,4650,1458,4814,1723,5026,1734,5312,2147,5079,2147,5121,2237,5047,2242,5089,2311,5301,2295,5470,2597,5248,2571,5269,2618,4056,2613,3935,2242,3898,2083,3813,2099,3845,2237,3585,2248,3506,1760,3744,1755",
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
    //      ExploreHomes: ExploreHomes,
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
    //             polygonPoints: "1176,1172,1329,987,1467,987,1515,923,1462,912,1530,822,1631,833,1658,796,2282,812,2235,949,2452,960,2372,1214,2102,1204,2034,1357,1769,1363,1748,1400,1266,1395,1356,1220,1308,1214,1329,1183",
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "1250,1384,1753,1384,1726,1437,2007,1432,1938,1612,2235,1617,2134,2062,1843,2051,1673,2057,1589,2269,1340,2279,1287,2401,561,2401,757,2094,794,2009,545,1993,821,1654,1033,1659,1117,1559",

    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "3395,971,3421,1220,3628,1225,3680,1469,4644,1469,4528,1251,4708,1236,4554,1018,4380,1018,4342,944,4438,955,4369,859,4263,859,4258,828,3580,838,3622,960",

    //         },
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3680,1447,4650,1458,4814,1723,5026,1734,5312,2147,5079,2147,5121,2237,5047,2242,5089,2311,5301,2295,5470,2597,5248,2571,5269,2618,4056,2613,3935,2242,3898,2083,3813,2099,3845,2237,3585,2248,3506,1760,3744,1755",
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
    //      ExploreHomes: ExploreHomes,
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
    //             polygonPoints: "1176,1172,1329,987,1467,987,1515,923,1462,912,1530,822,1631,833,1658,796,2282,812,2235,949,2452,960,2372,1214,2102,1204,2034,1357,1769,1363,1748,1400,1266,1395,1356,1220,1308,1214,1329,1183",
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "1250,1384,1753,1384,1726,1437,2007,1432,1938,1612,2235,1617,2134,2062,1843,2051,1673,2057,1589,2269,1340,2279,1287,2401,561,2401,757,2094,794,2009,545,1993,821,1654,1033,1659,1117,1559",

    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "3395,971,3421,1220,3628,1225,3680,1469,4644,1469,4528,1251,4708,1236,4554,1018,4380,1018,4342,944,4438,955,4369,859,4263,859,4258,828,3580,838,3622,960",

    //         },
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3680,1447,4650,1458,4814,1723,5026,1734,5312,2147,5079,2147,5121,2237,5047,2242,5089,2311,5301,2295,5470,2597,5248,2571,5269,2618,4056,2613,3935,2242,3898,2083,3813,2099,3845,2237,3585,2248,3506,1760,3744,1755",
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
    //     units: [
    //         {
    //             id: 1,
    //             name: "Unit No-1",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1176,1172,1329,987,1467,987,1515,923,1462,912,1530,822,1631,833,1658,796,2282,812,2235,949,2452,960,2372,1214,2102,1204,2034,1357,1769,1363,1748,1400,1266,1395,1356,1220,1308,1214,1329,1183",
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "1250,1384,1753,1384,1726,1437,2007,1432,1938,1612,2235,1617,2134,2062,1843,2051,1673,2057,1589,2269,1340,2279,1287,2401,561,2401,757,2094,794,2009,545,1993,821,1654,1033,1659,1117,1559",

    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "3395,971,3421,1220,3628,1225,3680,1469,4644,1469,4528,1251,4708,1236,4554,1018,4380,1018,4342,944,4438,955,4369,859,4263,859,4258,828,3580,838,3622,960",

    //         },
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3680,1447,4650,1458,4814,1723,5026,1734,5312,2147,5079,2147,5121,2237,5047,2242,5089,2311,5301,2295,5470,2597,5248,2571,5269,2618,4056,2613,3935,2242,3898,2083,3813,2099,3845,2237,3585,2248,3506,1760,3744,1755",
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
    //           hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1435,838,1626,843,1668,791,2282,812,2240,944,2441,949,2362,1214,2097,1209,2034,1368,1753,1368,1721,1405,1250,1389,1366,1230,1324,1214,1350,1172,1176,1172",
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "1239,1384,1737,1405,2012,1437,1975,1516,1938,1617,2245,1617,2129,2046,1695,2036,1589,2290,1350,2274,1276,2412,561,2401,614,2311,318,2311,842,1638,1033,1649,1091,1569",

    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "3389,965,3437,1225,3622,1225,3691,1463,4650,1469,4523,1257,4697,1251,4512,954,4464,875,4295,881,4252,833,3596,833,3622,960",

    //         },
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //            hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3686,1474,4644,1447,4814,1723,5041,1739,5566,2528,5222,2507,5280,2634,4051,2613,3945,2242,3919,2094,3808,2099,3845,2237,3585,2242,3500,1760,3765,1755",
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
    //           hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1435,838,1626,843,1668,791,2282,812,2240,944,2441,949,2362,1214,2097,1209,2034,1368,1753,1368,1721,1405,1250,1389,1366,1230,1324,1214,1350,1172,1176,1172",
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "1239,1384,1737,1405,2012,1437,1975,1516,1938,1617,2245,1617,2129,2046,1695,2036,1589,2290,1350,2274,1276,2412,561,2401,614,2311,318,2311,842,1638,1033,1649,1091,1569",

    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "3389,965,3437,1225,3622,1225,3691,1463,4650,1469,4523,1257,4697,1251,4512,954,4464,875,4295,881,4252,833,3596,833,3622,960",

    //         },
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //            hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3686,1474,4644,1447,4814,1723,5041,1739,5566,2528,5222,2507,5280,2634,4051,2613,3945,2242,3919,2094,3808,2099,3845,2237,3585,2242,3500,1760,3765,1755",
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
    //    units: [
    //         {
    //             id: 1,
    //             name: "Unit No-1",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //           hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "1435,838,1626,843,1668,791,2282,812,2240,944,2441,949,2362,1214,2097,1209,2034,1368,1753,1368,1721,1405,1250,1389,1366,1230,1324,1214,1350,1172,1176,1172",
    //         },
    //         {
    //             id: 2,
    //             name: "Unit No-2",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "1239,1384,1737,1405,2012,1437,1975,1516,1938,1617,2245,1617,2129,2046,1695,2036,1589,2290,1350,2274,1276,2412,561,2401,614,2311,318,2311,842,1638,1033,1649,1091,1569",

    //         },
    //         {
    //             id: 3,
    //             name: "Unit No-3",
    //             type: "3 BHK",
    //             size: "1400 sq.ft",
    //             hoverColor: "rgba(0,255,229,0.3)",

    //             polygonPoints: "3389,965,3437,1225,3622,1225,3691,1463,4650,1469,4523,1257,4697,1251,4512,954,4464,875,4295,881,4252,833,3596,833,3622,960",

    //         },
    //         {
    //             id: 4,
    //             name: "Unit No-4",
    //             type: "3 BHK",
    //             size: "1150 sq.ft",
    //            hoverColor: "rgba(0,255,229,0.3)",
    //             polygonPoints: "3686,1474,4644,1447,4814,1723,5041,1739,5566,2528,5222,2507,5280,2634,4051,2613,3945,2242,3919,2094,3808,2099,3845,2237,3585,2242,3500,1760,3765,1755",
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
