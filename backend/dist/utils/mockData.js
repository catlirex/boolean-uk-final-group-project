"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flightNumberList = exports.extraLuggageList = exports.aircraftList = exports.airlineList = exports.airportList = exports.getRandomInt = void 0;
const faker = require("faker");
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.getRandomInt = getRandomInt;
exports.airportList = [
    {
        id: "LHR",
        name: "London Heathrow Airport",
        city: "London",
        country: "United Kingdom",
        cityImage: "https://www.aladyinlondon.com/wp-content/uploads/2020/03/London-Skyline.jpg",
    },
    {
        id: "JFK",
        name: "John F. Kennedy International Airport",
        city: "New York",
        country: "United States",
        cityImage: "https://media.architecturaldigest.com/photos/5da74823d599ec0008227ea8/16:9/w_2560%2Cc_limit/GettyImages-946087016.jpg",
    },
    {
        id: "MIA",
        name: "Miami International Airport",
        city: "Miami",
        country: "United States",
        cityImage: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/57/02/f6.jpg",
    },
    {
        id: "LAX",
        name: "Los Angeles International Airport",
        city: "Los Angeles",
        country: "United States",
        cityImage: "https://pbs.twimg.com/media/EVNam0jUEAEvwYB.jpg",
    },
    {
        id: "MAN",
        name: "Manchester Airport",
        city: "Manchester",
        country: "United Kingdom",
        cityImage: "https://www.pureinvestor.co.uk/assets/property/multi/13_elizabeth_tower_manchester_city_view.jpg",
    },
    {
        id: "LPL",
        name: "Liverpool John Lennon Airport",
        city: "Liverpool",
        country: "United Kingdom",
        cityImage: "https://signaturesliverpool.co.uk/wp-content/uploads/2017/02/Ariel-view.jpg",
    },
    {
        id: "BER",
        name: "Berlin Brandenburg Airport",
        city: "Berlin",
        country: "Germany",
        cityImage: "https://cdn.hometogo.net/assets/wl-blog/a695d9d7cd8f962bf33f274983a8e887_Fernsehturm_iStock-650x445.jpg",
    },
    {
        id: "BRU",
        name: "Brussels National Airport",
        city: "Brussels",
        country: "Belgium",
        cityImage: "https://www.thetravelmagazine.net/wp-content/uploads/brussels-519965_1280.jpg",
    },
    {
        id: "CDG",
        name: "Charles de Gaulle International Airport",
        city: "Paris",
        country: "France",
        cityImage: "https://www.greenandturquoise.com/wp-content/uploads/2015/01/best-views-in-Paris-arc-de-triomphe-cov.jpg",
    },
    {
        id: "MUC",
        name: "Munich Airport",
        city: "Munich",
        country: "Germany",
        cityImage: "https://cdn.theculturetrip.com/wp-content/uploads/2017/04/shutterstock_255879718-scanrail1.jpg",
    },
    {
        id: "FCO",
        name: "Fiumicino – Leonardo Da Vinci International Airport",
        city: "Rome",
        country: "Italy",
        cityImage: "https://www.romeloft.com/wp-content/uploads/2015/11/view-st-peters.jpg",
    },
    {
        id: "MXP",
        name: "Milan–Malpensa Airport",
        city: "Milan",
        country: "Italy",
        cityImage: "https://www.libertyspecialtymarkets.com/static/2020-07/Italy-Hero.jpg?t=1594373115",
    },
    {
        id: "ISL",
        name: "Istanbul Atatürk International Airport",
        city: "Istanbul",
        country: "Turkey",
        cityImage: "https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/08/a-view-of-Istanbul-Copy.jpg",
    },
    {
        id: "PEK",
        name: "Beijing Capital International Airport",
        city: "Beijing",
        country: "China",
        cityImage: "https://images.squarespace-cdn.com/content/v1/549d41a3e4b003c6ce131926/1458315409278-6J43YGOQAYKW80ZZWKX2/Beijing-Web-470-20160111.jpg?format=1500w",
    },
    {
        id: "HND",
        name: "Tokyo International Airport",
        city: "Tokyo",
        country: "Japan",
        cityImage: "https://www.rethinktokyo.com/sites/default/files/styles/article-full/public/15580959954_8ccdb2d5ce_k_1.jpg",
    },
    {
        id: "SYD",
        name: "Sydney (Kingsford Smith) Airport",
        city: "Sydney",
        country: "Australia",
        cityImage: "https://media-cdn.tripadvisor.com/media/photo-s/0b/71/47/1b/dusk-harbour-view.jpg",
    },
    {
        id: "YYZ",
        name: "Toronto Pearson International Airport",
        city: "Toronto",
        country: "Canada",
        cityImage: "https://www.planetware.com/photos-large/CDN/canada-toronto-cn-tower.jpg",
    },
    {
        id: "OSL",
        name: "Oslo Airport, Gardermoen",
        city: "Oslo",
        country: "Norway",
        cityImage: "https://www.purevacations.com/wp-content/uploads/2019/10/The-Morning-of-Oslo-Norway-1024x683.jpg",
    },
    {
        id: "VST",
        name: "Stockholm-Västerås Airport",
        city: "Stockholm",
        country: "Sweden",
        cityImage: "https://www.10thingstodoandsee.com/wp-content/uploads/2017/01/Stockholm-696x464.jpg",
    },
    {
        id: "HEL",
        name: "Helsinki-Vantaa Airport",
        city: "Helsinki",
        country: "Finland",
        cityImage: "https://www.planetware.com/photos-large/SF/finland-helsinki-market-square.jpg",
    },
    {
        id: "TIA",
        name: "Tirana International Airport",
        city: "Tirana",
        country: "Albania",
        cityImage: "https://media.istockphoto.com/photos/albania-skanderbeg-square-tirana-picture-id540982496?k=20&m=540982496&s=612x612&w=0&h=gPcZRaWxu3WnFGV6jIVUzpkS6ajA0x9hpMSyqiMH4nw=",
    },
    {
        id: "MAD",
        name: "Adolfo Suárez Madrid–Barajas Airport",
        city: "Madrid",
        country: "Spain",
        cityImage: "https://www.therooftopguide.com/rooftop-news/Bilder/madrid-city-view.jpg",
    },
    {
        id: "LIS",
        name: "Lisbon Portela Airport",
        city: "Lisbon",
        country: "Portugal",
        cityImage: "https://st3.idealista.pt/cms/arquivos/styles/idcms_social_tablet/public/2018-12/media/image/lisboa%20view%20flickr.jpg?fv=3wEivFbt&itok=u8faeMuJ",
    },
    {
        id: "DME",
        name: "Domodedovo International Airport",
        city: "Moscow",
        country: "Russia",
        cityImage: "https://www.visitrussia.org.uk/images/moscow_blog_img_1",
    },
    {
        id: "VIE",
        name: "Vienna International Airport",
        city: "Vienna",
        country: "Austria",
        cityImage: "https://www.wien.info/resource/image/292654/3x2/800/533/36c965528a973728bda8a3a59f76b9f1/oq/altstadt-panorama-mit-stephansdom-und-karlskirche.jpg",
    },
    {
        id: "BAI",
        name: "Ministro Pistarini International Airport",
        city: "Buenos Aires",
        country: "Argentina",
        cityImage: "https://www.andbeyond.com/wp-content/uploads/sites/5/Facade-of-a-building-Buenos-Aires-Argentina.jpg",
    },
    {
        id: "HKG",
        name: "Hong Kong International Airport",
        city: "Hong Kong",
        country: "Hong Kong",
        cityImage: "https://media.timeout.com/images/105385557/image.jpg",
    },
];
exports.airlineList = [
    {
        id: "BA",
        name: "British Airways",
        economicLuggage: 10,
        businessLuggage: 20,
        firstClassLuggage: 32,
    },
    {
        id: "LH",
        name: "Lufthansa",
        economicLuggage: 15,
        businessLuggage: 25,
        firstClassLuggage: 45,
    },
    {
        id: "UAL",
        name: "United Airlines",
        economicLuggage: 10,
        businessLuggage: 20,
        firstClassLuggage: 40,
    },
    {
        id: "UAE",
        name: "Emirates Airlines",
        economicLuggage: 12,
        businessLuggage: 22,
        firstClassLuggage: 40,
    },
    {
        id: "CX",
        name: "Cathay Pacific",
        economicLuggage: 10,
        businessLuggage: 24,
        firstClassLuggage: 32,
    },
];
exports.aircraftList = [
    {
        id: "Boeing 740",
        econSeatNumber: 200,
        businessSeatNumber: 70,
        firstClassSeatNumber: 30,
    },
    {
        id: "Airbus A350",
        econSeatNumber: 150,
        businessSeatNumber: 100,
        firstClassSeatNumber: 50,
    },
    {
        id: "Boeing 777X",
        econSeatNumber: 200,
        businessSeatNumber: 80,
        firstClassSeatNumber: 20,
    },
    {
        id: "Airbus A321neo",
        econSeatNumber: 200,
        businessSeatNumber: 90,
        firstClassSeatNumber: 10,
    },
    {
        id: "Boeing 737",
        econSeatNumber: 250,
        businessSeatNumber: 20,
        firstClassSeatNumber: 10,
    },
    {
        id: "Boeing NMA",
        econSeatNumber: 150,
        businessSeatNumber: 100,
        firstClassSeatNumber: 50,
    },
    {
        id: "Boeing 747",
        econSeatNumber: 200,
        businessSeatNumber: 80,
        firstClassSeatNumber: 20,
    },
    {
        id: "Boeing 767",
        econSeatNumber: 200,
        businessSeatNumber: 90,
        firstClassSeatNumber: 10,
    },
    {
        id: "Airbus A324",
        econSeatNumber: 250,
        businessSeatNumber: 20,
        firstClassSeatNumber: 10,
    },
];
exports.extraLuggageList = [
    {
        weight: 10,
        price: 20,
    },
    {
        weight: 20,
        price: 30,
    },
    {
        weight: 32,
        price: 50,
    },
];
exports.flightNumberList = [
    {
        id: "CX302",
        durationHour: 13,
        airlineId: "CX",
        departureAirportId: "MAN",
        arrivalAirportId: "HKG",
    },
    {
        id: "CX110",
        durationHour: 9,
        airlineId: "CX",
        departureAirportId: "SYD",
        arrivalAirportId: "HKG",
    },
    {
        id: "CX120",
        durationHour: 12,
        airlineId: "CX",
        departureAirportId: "BER",
        arrivalAirportId: "HKG",
    },
    {
        id: "CX130",
        durationHour: 11,
        airlineId: "CX",
        departureAirportId: "FCO",
        arrivalAirportId: "HKG",
    },
    {
        id: "CX145",
        durationHour: 11,
        airlineId: "CX",
        departureAirportId: "CDG",
        arrivalAirportId: "HKG",
    },
    {
        id: "CX156",
        durationHour: 8,
        airlineId: "CX",
        departureAirportId: "ISL",
        arrivalAirportId: "HKG",
    },
    {
        id: "CX176",
        durationHour: 10,
        airlineId: "CX",
        departureAirportId: "BRU",
        arrivalAirportId: "HKG",
    },
    {
        id: "CX187",
        durationHour: 10,
        airlineId: "CX",
        departureAirportId: "MAD",
        arrivalAirportId: "HKG",
    },
    {
        id: "CX188",
        durationHour: 8,
        airlineId: "CX",
        departureAirportId: "TIA",
        arrivalAirportId: "HKG",
    },
    {
        id: "CX125",
        durationHour: 9,
        airlineId: "CX",
        departureAirportId: "OSL",
        arrivalAirportId: "HKG",
    },
    {
        id: "CX135",
        durationHour: 9,
        airlineId: "CX",
        departureAirportId: "HKG",
        arrivalAirportId: "VST",
    },
    {
        id: "CX150",
        durationHour: 10,
        airlineId: "CX",
        departureAirportId: "HKG",
        arrivalAirportId: "LIS",
    },
    {
        id: "CX160",
        durationHour: 9,
        airlineId: "CX",
        departureAirportId: "HKG",
        arrivalAirportId: "VIE",
    },
    {
        id: "CX170",
        durationHour: 12,
        airlineId: "CX",
        departureAirportId: "HKG",
        arrivalAirportId: "LPL",
    },
    {
        id: "CX180",
        durationHour: 11,
        airlineId: "CX",
        departureAirportId: "HKG",
        arrivalAirportId: "MXP",
    },
    {
        id: "CX190",
        durationHour: 9,
        airlineId: "CX",
        departureAirportId: "HKG",
        arrivalAirportId: "HND",
    },
    {
        id: "CX210",
        durationHour: 15,
        airlineId: "CX",
        departureAirportId: "HKG",
        arrivalAirportId: "YYZ",
    },
    {
        id: "CX220",
        durationHour: 10,
        airlineId: "CX",
        departureAirportId: "HKG",
        arrivalAirportId: "PEK",
    },
    {
        id: "CX230",
        durationHour: 9,
        airlineId: "CX",
        departureAirportId: "HKG",
        arrivalAirportId: "HEL",
    },
    {
        id: "CX240",
        durationHour: 12,
        airlineId: "CX",
        departureAirportId: "HKG",
        arrivalAirportId: "BAI",
    },
    {
        id: "CX250",
        durationHour: 12,
        airlineId: "CX",
        departureAirportId: "HKG",
        arrivalAirportId: "OSL",
    },
    {
        id: "BA31",
        durationHour: 12,
        airlineId: "BA",
        departureAirportId: "HKG",
        arrivalAirportId: "LHR",
    },
    {
        id: "BA32",
        durationHour: 12,
        airlineId: "BA",
        departureAirportId: "LHR",
        arrivalAirportId: "HKG",
    },
    {
        id: "BA2650",
        durationHour: 3,
        airlineId: "BA",
        departureAirportId: "LHR",
        arrivalAirportId: "TIA",
    },
    {
        id: "BA2651",
        durationHour: 3,
        airlineId: "BA",
        departureAirportId: "TIA",
        arrivalAirportId: "LHR",
    },
    {
        id: "BA1516",
        durationHour: 7,
        airlineId: "BA",
        departureAirportId: "JFK",
        arrivalAirportId: "LHR",
    },
    {
        id: "BA1517",
        durationHour: 7,
        airlineId: "BA",
        departureAirportId: "LHR",
        arrivalAirportId: "JFK",
    },
    {
        id: "BA8073",
        durationHour: 1,
        airlineId: "BA",
        departureAirportId: "CDG",
        arrivalAirportId: "LHR",
    },
    {
        id: "BA8074",
        durationHour: 1,
        airlineId: "BA",
        departureAirportId: "LHR",
        arrivalAirportId: "CDG",
    },
    {
        id: "BA3098",
        durationHour: 4,
        airlineId: "BA",
        departureAirportId: "LHR",
        arrivalAirportId: "ISL",
    },
    {
        id: "BA3099",
        durationHour: 4,
        airlineId: "BA",
        departureAirportId: "ISL",
        arrivalAirportId: "LHR",
    },
    {
        id: "BA6051",
        durationHour: 9,
        airlineId: "BA",
        departureAirportId: "JFK",
        arrivalAirportId: "HEL",
    },
    {
        id: "BA6052",
        durationHour: 9,
        airlineId: "BA",
        departureAirportId: "HEL",
        arrivalAirportId: "JFK",
    },
    {
        id: "BA4265",
        durationHour: 12,
        airlineId: "BA",
        departureAirportId: "LAX",
        arrivalAirportId: "MAD",
    },
    {
        id: "BA4266",
        durationHour: 2,
        airlineId: "BA",
        departureAirportId: "MAD",
        arrivalAirportId: "LHR",
    },
    {
        id: "BA4246",
        durationHour: 2,
        airlineId: "BA",
        departureAirportId: "FCO",
        arrivalAirportId: "MXP",
    },
    {
        id: "BA4247",
        durationHour: 12,
        airlineId: "BA",
        departureAirportId: "MXP",
        arrivalAirportId: "FCO",
    },
    {
        id: "BA4356",
        durationHour: 2,
        airlineId: "BA",
        departureAirportId: "LIS",
        arrivalAirportId: "BER",
    },
    {
        id: "BA4357",
        durationHour: 2,
        airlineId: "BA",
        departureAirportId: "BER",
        arrivalAirportId: "LIS",
    },
    {
        id: "BA3421",
        durationHour: 5,
        airlineId: "BA",
        departureAirportId: "MXP",
        arrivalAirportId: "DME",
    },
    {
        id: "BA3422",
        durationHour: 5,
        airlineId: "BA",
        departureAirportId: "DME",
        arrivalAirportId: "MXP",
    },
    {
        id: "LH120",
        durationHour: 5,
        airlineId: "LH",
        departureAirportId: "BER",
        arrivalAirportId: "LHR",
    },
    {
        id: "LH121",
        durationHour: 5,
        airlineId: "LH",
        departureAirportId: "LHR",
        arrivalAirportId: "BER",
    },
    {
        id: "LH130",
        durationHour: 3,
        airlineId: "LH",
        departureAirportId: "LHR",
        arrivalAirportId: "FCO",
    },
    {
        id: "LH131",
        durationHour: 3,
        airlineId: "LH",
        departureAirportId: "FCO",
        arrivalAirportId: "LHR",
    },
    {
        id: "LH140",
        durationHour: 6,
        airlineId: "LH",
        departureAirportId: "BER",
        arrivalAirportId: "FCO",
    },
    {
        id: "LH141",
        durationHour: 6,
        airlineId: "LH",
        departureAirportId: "FCO",
        arrivalAirportId: "BER",
    },
    {
        id: "LH150",
        durationHour: 7,
        airlineId: "LH",
        departureAirportId: "LHR",
        arrivalAirportId: "VIE",
    },
    {
        id: "LH151",
        durationHour: 7,
        airlineId: "LH",
        departureAirportId: "VIE",
        arrivalAirportId: "LHR",
    },
    {
        id: "LH152",
        durationHour: 6,
        airlineId: "LH",
        departureAirportId: "JFK",
        arrivalAirportId: "FCO",
    },
    {
        id: "LH153",
        durationHour: 6,
        airlineId: "LH",
        departureAirportId: "MUC",
        arrivalAirportId: "MXP",
    },
    {
        id: "LH154",
        durationHour: 6,
        airlineId: "LH",
        departureAirportId: "MXP",
        arrivalAirportId: "MUC",
    },
    {
        id: "UAL46",
        durationHour: 14,
        airlineId: "UAL",
        departureAirportId: "JFK",
        arrivalAirportId: "HND",
    },
    {
        id: "UAL45",
        durationHour: 14,
        airlineId: "UAL",
        departureAirportId: "HND",
        arrivalAirportId: "JFK",
    },
    {
        id: "UAL57",
        durationHour: 16,
        airlineId: "UAL",
        departureAirportId: "JFK",
        arrivalAirportId: "HKG",
    },
    {
        id: "UAL56",
        durationHour: 16,
        airlineId: "UAL",
        departureAirportId: "HKG",
        arrivalAirportId: "JFK",
    },
    {
        id: "UAL5674",
        durationHour: 2,
        airlineId: "UAL",
        departureAirportId: "VIE",
        arrivalAirportId: "OSL",
    },
    {
        id: "UAL5673",
        durationHour: 2,
        airlineId: "UAL",
        departureAirportId: "OSL",
        arrivalAirportId: "VIE",
    },
    {
        id: "UAL40",
        durationHour: 8,
        airlineId: "UAL",
        departureAirportId: "FCO",
        arrivalAirportId: "JFK",
    },
    {
        id: "UAL41",
        durationHour: 8,
        airlineId: "UAL",
        departureAirportId: "JFK",
        arrivalAirportId: "FCO",
    },
    {
        id: "UAL554",
        durationHour: 6,
        airlineId: "UAL",
        departureAirportId: "LAX",
        arrivalAirportId: "JFK",
    },
    {
        id: "UAL555",
        durationHour: 6,
        airlineId: "UAL",
        departureAirportId: "JFK",
        arrivalAirportId: "LAX",
    },
    {
        id: "UAL781",
        durationHour: 19,
        airlineId: "UAL",
        departureAirportId: "BER",
        arrivalAirportId: "LAX",
    },
    {
        id: "UAL782",
        durationHour: 19,
        airlineId: "UAL",
        departureAirportId: "LAX",
        arrivalAirportId: "BER",
    },
    {
        id: "UAL5671",
        durationHour: 8,
        airlineId: "UAL",
        departureAirportId: "MXP",
        arrivalAirportId: "DME",
    },
    {
        id: "UAL5672",
        durationHour: 8,
        airlineId: "UAL",
        departureAirportId: "DME",
        arrivalAirportId: "MXP",
    },
    {
        id: "UAL4532",
        durationHour: 2,
        airlineId: "UAL",
        departureAirportId: "ISL",
        arrivalAirportId: "FCO",
    },
    {
        id: "UAL4533",
        durationHour: 2,
        airlineId: "UAL",
        departureAirportId: "FCO",
        arrivalAirportId: "ISL",
    },
    {
        id: "UAL4521",
        durationHour: 3,
        airlineId: "UAL",
        departureAirportId: "MAD",
        arrivalAirportId: "VST",
    },
    {
        id: "UAL4522",
        durationHour: 3,
        airlineId: "UAL",
        departureAirportId: "VST",
        arrivalAirportId: "MAD",
    },
    {
        id: "UAE150",
        durationHour: 6,
        airlineId: "UAE",
        departureAirportId: "JFK",
        arrivalAirportId: "VST",
    },
    {
        id: "UAE151",
        durationHour: 6,
        airlineId: "UAE",
        departureAirportId: "JFK",
        arrivalAirportId: "LHR",
    },
    {
        id: "UAE160",
        durationHour: 7,
        airlineId: "UAE",
        departureAirportId: "CDG",
        arrivalAirportId: "JFK",
    },
    {
        id: "UAE161",
        durationHour: 7,
        airlineId: "UAE",
        departureAirportId: "JFK",
        arrivalAirportId: "CDG",
    },
    {
        id: "UAE170",
        durationHour: 8,
        airlineId: "UAE",
        departureAirportId: "MAD",
        arrivalAirportId: "JFK",
    },
    {
        id: "UAE171",
        durationHour: 8,
        airlineId: "UAE",
        departureAirportId: "JFK",
        arrivalAirportId: "MAD",
    },
    {
        id: "UAE180",
        durationHour: 9,
        airlineId: "UAE",
        departureAirportId: "BER",
        arrivalAirportId: "JFK",
    },
    {
        id: "UAE181",
        durationHour: 9,
        airlineId: "UAE",
        departureAirportId: "JFK",
        arrivalAirportId: "BER",
    },
    {
        id: "UAE190",
        durationHour: 8,
        airlineId: "UAE",
        departureAirportId: "LIS",
        arrivalAirportId: "JFK",
    },
    {
        id: "UAE191",
        durationHour: 8,
        airlineId: "UAE",
        departureAirportId: "JFK",
        arrivalAirportId: "LIS",
    },
    {
        id: "UAE210",
        durationHour: 6,
        airlineId: "UAE",
        departureAirportId: "HEL",
        arrivalAirportId: "MAD",
    },
    {
        id: "UAE211",
        durationHour: 6,
        airlineId: "UAE",
        departureAirportId: "MAD",
        arrivalAirportId: "HEL",
    },
    {
        id: "UAL14",
        durationHour: 6,
        airlineId: "UAL",
        departureAirportId: "LHR",
        arrivalAirportId: "JFK",
    },
    {
        id: "UAL15",
        durationHour: 6,
        airlineId: "UAL",
        departureAirportId: "JFK",
        arrivalAirportId: "LHR",
    },
    {
        id: "UAE110",
        durationHour: 1,
        airlineId: "UAE",
        departureAirportId: "LHR",
        arrivalAirportId: "CDG",
    },
    {
        id: "UAE111",
        durationHour: 1,
        airlineId: "UAE",
        departureAirportId: "CDG",
        arrivalAirportId: "LHR",
    },
    {
        id: "UAE120",
        durationHour: 2,
        airlineId: "UAE",
        departureAirportId: "MUC",
        arrivalAirportId: "MAD",
    },
    {
        id: "UAE121",
        durationHour: 2,
        airlineId: "UAE",
        departureAirportId: "MAD",
        arrivalAirportId: "MUC",
    },
    {
        id: "UAE130",
        durationHour: 2,
        airlineId: "UAE",
        departureAirportId: "ISL",
        arrivalAirportId: "TIA",
    },
    {
        id: "UAE131",
        durationHour: 2,
        airlineId: "UAE",
        departureAirportId: "TIA",
        arrivalAirportId: "ISL",
    },
    {
        id: "UAE140",
        durationHour: 4,
        airlineId: "UAE",
        departureAirportId: "OSL",
        arrivalAirportId: "MXP",
    },
    {
        id: "UAE141",
        durationHour: 4,
        airlineId: "UAE",
        departureAirportId: "MXP",
        arrivalAirportId: "OSL",
    },
    {
        id: "LH1807",
        durationHour: 2,
        airlineId: "LH",
        departureAirportId: "MUC",
        arrivalAirportId: "MAD",
    },
    {
        id: "LH1808",
        durationHour: 2,
        airlineId: "LH",
        departureAirportId: "MAD",
        arrivalAirportId: "MUC",
    },
    {
        id: "LH5594",
        durationHour: 2,
        airlineId: "LH",
        departureAirportId: "LHR",
        arrivalAirportId: "BRU",
    },
    {
        id: "LH5595",
        durationHour: 2,
        airlineId: "LH",
        departureAirportId: "BRU",
        arrivalAirportId: "LHR",
    },
    {
        id: "LH5678",
        durationHour: 3,
        airlineId: "LH",
        departureAirportId: "LIS",
        arrivalAirportId: "HEL",
    },
    {
        id: "LH5679",
        durationHour: 3,
        airlineId: "LH",
        departureAirportId: "HEL",
        arrivalAirportId: "LIS",
    },
    {
        id: "LH452",
        durationHour: 12,
        airlineId: "LH",
        departureAirportId: "LAX",
        arrivalAirportId: "MUC",
    },
    {
        id: "LH453",
        durationHour: 12,
        airlineId: "LH",
        departureAirportId: "MUC",
        arrivalAirportId: "LAX",
    },
    {
        id: "LH4589",
        durationHour: 11,
        airlineId: "LH",
        departureAirportId: "PEK",
        arrivalAirportId: "CDG",
    },
    {
        id: "LH4590",
        durationHour: 11,
        airlineId: "LH",
        departureAirportId: "CDG",
        arrivalAirportId: "PEK",
    },
];
//# sourceMappingURL=mockData.js.map