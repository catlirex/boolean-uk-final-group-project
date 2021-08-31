import { PrismaClient, Role } from "@prisma/client";
import faker from "faker";
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
  //   const createdAirportList = [];
  //   for (const airportData of airportList) {
  //     const createdAirport = await prisma.airport.create({ data: airportData });
  //     console.log(createdAirport);
  //     createdAirportList.push(createdAirport);
  //   }

  //   const createdAirlineList = [];
  //   for (const airlineData of airlineList) {
  //     const createdAirline = await prisma.airline.create({ data: airlineData });
  //     console.log(createdAirline);
  //     createdAirlineList.push(createdAirline);
  //   }

  //   const createdAircraftList = [];
  //   for (const aircraftData of aircraftList) {
  //     const createdAirCraft = await prisma.aircraft.create({
  //       data: aircraftData,
  //     });
  //     console.log(createdAirCraft);
  //     createdAircraftList.push(createdAirCraft);
  //   }
  //   const aircraftIdArray = createdAircraftList.map((target) => target.id);

  //   const createdExtraLuggageList = [];
  //   for (const extraLuggageData of extraLuggageList) {
  //     const createdExtraLuggage = await prisma.extraLuggage.create({
  //       data: extraLuggageData,
  //     });
  //     console.log(createdExtraLuggage);
  //     createdExtraLuggageList.push(createdExtraLuggage);
  //   }

  //   const createdFlightNumberList = [];
  //   for (const flightNumber of flightNumberList) {
  //     flightNumber.aircraftId = getRandomElement(aircraftIdArray);
  //     const createdFlightNumber = await prisma.flightNumber.create({
  //       data: flightNumber,
  //     });
  //     console.log(createdFlightNumber);
  //     createdFlightNumberList.push(createdFlightNumber);

  //     const numOfScheduledFlight = getRandomInt(5, 10);
  //     for (let i = 0; i < numOfScheduledFlight; i++) {
  //       const scheduleFlightData = {
  //         date: "30-10-2021",
  //         time: "00:00:00",
  //         economicPrice: getRandomInt(0, 40),
  //         businessPrice: getRandomInt(100, 300),
  //         firstClassPrice: getRandomInt(300, 1000),
  //         gateNumber: "A" + getRandomInt(1, 50),
  //         flightNumber: { connect: { id: createdFlightNumber.id } },
  //       };

  //       const createdScheduleFlight = await prisma.scheduledFlight.create({
  //         data: scheduleFlightData,
  //       });
  //       console.log(createdScheduleFlight);
  //       createdExtraLuggageList.push(createdScheduleFlight);
  //     }
  //   }

  const createUserList = [];
  const numOfUser = getRandomInt(10, 20);
  for (let i = 0; i < numOfUser; i++) {
    const userData = {
      firstName: faker.name.findName(),
      lastName: faker.name.lastName(),
      password: `${getRandomInt(100, 999)}`,
      email: faker.internet.email(),
    };
    const createdUser = await prisma.user.create({
      data: userData,
    });
    console.log(createdUser);
    createUserList.push(createdUser);
  }

  const createStaffList = [];
  const numOfStaff = 5;
  for (let i = 0; i < numOfStaff; i++) {
    const staffData = {
      role: "STAFF" as Role,
      firstName: faker.name.findName(),
      lastName: faker.name.lastName(),
      password: `${getRandomInt(100, 999)}`,
      email: faker.internet.email(),
    };

    const createdStaff = await prisma.user.create({
      data: staffData,
    });
    console.log(createdStaff);
    createStaffList.push(createdStaff);
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
