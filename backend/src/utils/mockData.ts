const faker = require("faker");

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const airportList = [
  {
    id: "LHR",
    name: "London Heathrow Airport",
    city: "London",
    country: "United Kingdom",
    cityImage:
      "https://www.aladyinlondon.com/wp-content/uploads/2020/03/London-Skyline.jpg",
  },
  {
    id: "JFK",
    name: "John F. Kennedy International Airport",
    city: "New York",
    country: "United States",
    cityImage:
      "https://media.architecturaldigest.com/photos/5da74823d599ec0008227ea8/16:9/w_2560%2Cc_limit/GettyImages-946087016.jpg",
  },
  {
    id: "MIA",
    name: "Miami International Airport",
    city: "Miami",
    country: "United States",
    cityImage:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/57/02/f6.jpg",
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
    cityImage:
      "https://www.pureinvestor.co.uk/assets/property/multi/13_elizabeth_tower_manchester_city_view.jpg",
  },
  {
    id: "LPL",
    name: "Liverpool John Lennon Airport",
    city: "Liverpool",
    country: "United Kingdom",
    cityImage:
      "https://signaturesliverpool.co.uk/wp-content/uploads/2017/02/Ariel-view.jpg",
  },
  {
    id: "BER",
    name: "Berlin Brandenburg Airport",
    city: "Berlin",
    country: "Germany",
    cityImage:
      "https://cdn.hometogo.net/assets/wl-blog/a695d9d7cd8f962bf33f274983a8e887_Fernsehturm_iStock-650x445.jpg",
  },
  {
    id: "BRU",
    name: "Brussels National Airport",
    city: "Brussels",
    country: "Belgium",
    cityImage:
      "https://www.thetravelmagazine.net/wp-content/uploads/brussels-519965_1280.jpg",
  },
  {
    id: "CDG",
    name: "Charles de Gaulle International Airport",
    city: "Paris",
    country: "France",
    cityImage:
      "https://www.greenandturquoise.com/wp-content/uploads/2015/01/best-views-in-Paris-arc-de-triomphe-cov.jpg",
  },
  {
    id: "MUC",
    name: "Munich Airport",
    city: "Munich",
    country: "Germany",
    cityImage:
      "https://cdn.theculturetrip.com/wp-content/uploads/2017/04/shutterstock_255879718-scanrail1.jpg",
  },
  {
    id: "FCO",
    name: "Fiumicino – Leonardo Da Vinci International Airport",
    city: "Rome",
    country: "Italy",
    cityImage:
      "https://www.romeloft.com/wp-content/uploads/2015/11/view-st-peters.jpg",
  },
  {
    id: "MXP",
    name: "Milan–Malpensa Airport",
    city: "Milan",
    country: "Italy",
    cityImage:
      "https://www.libertyspecialtymarkets.com/static/2020-07/Italy-Hero.jpg?t=1594373115",
  },
  {
    id: "ISL",
    name: "Istanbul Atatürk International Airport",
    city: "Istanbul",
    country: "Turkey",
    cityImage:
      "https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/08/a-view-of-Istanbul-Copy.jpg",
  },
  {
    id: "PEK",
    name: "Beijing Capital International Airport",
    city: "Beijing",
    country: "China",
    cityImage:
      "https://images.squarespace-cdn.com/content/v1/549d41a3e4b003c6ce131926/1458315409278-6J43YGOQAYKW80ZZWKX2/Beijing-Web-470-20160111.jpg?format=1500w",
  },
  {
    id: "HND",
    name: "Tokyo International Airport",
    city: "Tokyo",
    country: "Japan",
    cityImage:
      "https://www.rethinktokyo.com/sites/default/files/styles/article-full/public/15580959954_8ccdb2d5ce_k_1.jpg",
  },
  {
    id: "SYD",
    name: "Sydney (Kingsford Smith) Airport",
    city: "Sydney",
    country: "Australia",
    cityImage:
      "https://media-cdn.tripadvisor.com/media/photo-s/0b/71/47/1b/dusk-harbour-view.jpg",
  },
  {
    id: "YYZ",
    name: "Toronto Pearson International Airport",
    city: "Toronto",
    country: "Canada",
    cityImage:
      "https://www.planetware.com/photos-large/CDN/canada-toronto-cn-tower.jpg",
  },
  {
    id: "OSL",
    name: "Oslo Airport, Gardermoen",
    city: "Oslo",
    country: "Norway",
    cityImage:
      "https://www.purevacations.com/wp-content/uploads/2019/10/The-Morning-of-Oslo-Norway-1024x683.jpg",
  },
  {
    id: "VST",
    name: "Stockholm-Västerås Airport",
    city: "Stockholm",
    country: "Sweden",
    cityImage:
      "https://www.10thingstodoandsee.com/wp-content/uploads/2017/01/Stockholm-696x464.jpg",
  },
  {
    id: "HEL",
    name: "Helsinki-Vantaa Airport",
    city: "Helsinki",
    country: "Finland",
    cityImage:
      "https://www.planetware.com/photos-large/SF/finland-helsinki-market-square.jpg",
  },
  {
    id: "TIA",
    name: "Tirana International Airport",
    city: "Tirana",
    country: "Albania",
    cityImage:
      "https://media.istockphoto.com/photos/albania-skanderbeg-square-tirana-picture-id540982496?k=20&m=540982496&s=612x612&w=0&h=gPcZRaWxu3WnFGV6jIVUzpkS6ajA0x9hpMSyqiMH4nw=",
  },
  {
    id: "MAD",
    name: "Adolfo Suárez Madrid–Barajas Airport",
    city: "Madrid",
    country: "Spain",
    cityImage:
      "https://www.therooftopguide.com/rooftop-news/Bilder/madrid-city-view.jpg",
  },
  {
    id: "LIS",
    name: "Lisbon Portela Airport",
    city: "Lisbon",
    country: "Portugal",
    cityImage:
      "https://st3.idealista.pt/cms/arquivos/styles/idcms_social_tablet/public/2018-12/media/image/lisboa%20view%20flickr.jpg?fv=3wEivFbt&itok=u8faeMuJ",
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
    cityImage:
      "https://www.wien.info/resource/image/292654/3x2/800/533/36c965528a973728bda8a3a59f76b9f1/oq/altstadt-panorama-mit-stephansdom-und-karlskirche.jpg",
  },
  {
    id: "BAI",
    name: "Ministro Pistarini International Airport",
    city: "Buenos Aires",
    country: "Argentina",
    cityImage:
      "https://www.andbeyond.com/wp-content/uploads/sites/5/Facade-of-a-building-Buenos-Aires-Argentina.jpg",
  },
  {
    id: "HKG",
    name: "Hong Kong International Airport",
    city: "Hong Kong",
    country: "Hong Kong",
    cityImage: "https://media.timeout.com/images/105385557/image.jpg",
  },
];

export const airlineList = [
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

export const aircraftList = [
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

export const extraLuggageList = [
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

export const flightNumberList = [
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
];
