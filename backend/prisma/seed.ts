import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const {
  airportList,
  airlineList,
  aircraftList,
  extraLuggageList,
  flightNumberList,
  getRandomInt,
} = require("../src/utils/mockData");

const getRandomElement = (array: string[]) => {
  const number = Math.floor(Math.random() * array.length);
  return array[number];
};

async function seed() {
  const createdAirportList = [];
  for (const airportData of airportList) {
    const createdAirport = await prisma.airport.create({ data: airportData });
    console.log(createdAirport);
    createdAirportList.push(createdAirport);
  }

  const createdAirlineList = [];
  for (const airlineData of airlineList) {
    const createdAirline = await prisma.airline.create({ data: airlineData });
    console.log(createdAirline);
    createdAirlineList.push(createdAirline);
  }

  const createdAircraftList = [];
  for (const aircraftData of aircraftList) {
    const createdAirCraft = await prisma.aircraft.create({
      data: aircraftData,
    });
    console.log(createdAirCraft);
    createdAircraftList.push(createdAirCraft);
  }
  const aircraftIdArray = createdAircraftList.map((target) => target.id);

  const createdExtraLuggageList = [];
  for (const extraLuggageData of extraLuggageList) {
    const createdExtraLuggage = await prisma.extraLuggage.create({
      data: extraLuggageData,
    });
    console.log(createdExtraLuggage);
    createdExtraLuggageList.push(createdExtraLuggage);
  }

  const createdFlightNumberList = [];
  for (const flightNumber of flightNumberList) {
    flightNumber.aircraftId = getRandomElement(aircraftIdArray);
    const createdFlightNumber = await prisma.flightNumber.create({
      data: flightNumber,
    });
    console.log(createdFlightNumber);
    createdFlightNumberList.push(createdFlightNumber);

    //    const numOfScheduledFlight =  getRandomInt(5,10)
    //    for(let i=0; i<numOfScheduledFlight; i++){
    //        const schedulefFlightData={
    //         date:10-10-2021,
    //         time: 00:00:00,
    //         economicPrice: getRandomInt(0,40),
    //         businessPrice: getRandomInt(100,300),
    //         firstClassPrice: getRandomInt(300,1000),
    //         gateNumber: "A" +getRandomInt(1,50),
    //         flightNumber:{connect:{id:createdFlightNumber.id}}
    //        }
    //    }
  }
}

seed()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
