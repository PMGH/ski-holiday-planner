use ski_hol_planner;
db.dropDatabase();

var members = [
  {
    firstName: 'Maureen',
    secondName: 'McCready',
    lead: false,
    sport: '',
    outboundFlight: {
      flightNumber: 'EZY6835',
      departureAirport: {
        name: 'Glasgow',
        abbr: 'GLA',
        country: 'Scotland, UK'
      },
      destinationAirport: {
        name: 'Geneva',
        abbr: 'GVA',
        country: 'Switzerland'
      },
      depart: '18/03/2018 07:55',
      arrive: '18/03/2018 11:20',
      price: 40.00
    },
    returnFlight: {
      flightNumber: 'EZY6836',
      departureAirport: {
        name: 'Geneva',
        abbr: 'GVA',
        country: 'Switzerland'
      },
      destinationAirport: {
        name: 'Glasgow',
        abbr: 'GLA',
        country: 'Scotland, UK'
      },
      depart: '25/03/2018 12:00',
      arrive: '25/03/2018 13:20',
      price: 50.00
    },
    outboundTransfer: {
      pickup: 'Geneva Airport, Switzerland',
      dropOff: 'Chalet Bouquetins, 73210 La Perriere, La Tania, France',
      depart: '18/03/2018 12:00',
      arrive: '18/03/2018 15:30',
      price: 0.00
    },
    returnTransfer: {
      pickup: 'Chalet Bouquetins, 73210 La Perriere, La Tania, France',
      dropOff: 'Geneva Airport, Switzerland',
      depart: '25/03/2018 07:00',
      arrive: '25/03/2018 10:30',
      price: 0.00
    },
    accomodation: {
      name: 'Chalet Bouquetins',
      address: '73210 La Perriere, La Tania, France',
      operator: 'SkiHame',
      catered: true,
      deposit: 100.00,
      depositPaid: true,
      price: 475.35,
      totalPaid: false
    },
    liftPass: {
      area: '',
      duration: null,
      insurance: false,
      price: 0.00
    },
    equipment: {
      hiring: false,
      hireShop: '',
      type: '',
      size: null,
      price: 0.00
    }
  },
  {
    firstName: 'Andrew',
    secondName: 'McCready',
    lead: false,
    sport: 'Snowboard',
    paid: true,
    outboundFlight: {
      flightNumber: 'EZY6835',
      departureAirport: {
        name: 'Glasgow',
        abbr: 'GLA',
        country: 'Scotland, UK'
      },
      destinationAirport: {
        name: 'Geneva',
        abbr: 'GVA',
        country: 'Switzerland'
      },
      depart: '18/03/2018 07:55',
      arrive: '18/03/2018 11:20',
      price: 40.00
    },
    returnFlight: {
      flightNumber: 'EZY6836',
      departureAirport: {
        name: 'Geneva',
        abbr: 'GVA',
        country: 'Switzerland'
      },
      destinationAirport: {
        name: 'Glasgow',
        abbr: 'GLA',
        country: 'Scotland, UK'
      },
      depart: '25/03/2018 12:00',
      arrive: '25/03/2018 13:20',
      price: 50.00
    },
    outboundTransfer: {
      pickup: 'Geneva Airport, Switzerland',
      dropOff: 'Chalet Bouquetins, 73210 La Perriere, La Tania, France',
      depart: '18/03/2018 12:00',
      arrive: '18/03/2018 15:30',
      price: 0.00
    },
    returnTransfer: {
      pickup: 'Chalet Bouquetins, 73210 La Perriere, La Tania, France',
      dropOff: 'Geneva Airport, Switzerland',
      depart: '25/03/2018 07:00',
      arrive: '25/03/2018 10:30',
      price: 0.00
    },
    accomodation: {
      name: 'Chalet Bouquetins',
      address: '73210 La Perriere, La Tania, France',
      operator: 'SkiHame',
      catered: true,
      deposit: 100.00,
      depositPaid: true,
      price: 475.35,
      totalPaid: true
    },
    liftPass: {
      area: 'Three Valleys',
      duration: 6,
      insurance: true,
      price: 239.99
    },
    equipment: {
      hiring: true,
      hireShop: 'Freeride',
      type: 'Snowboard',
      size: 155,
      price: 60.12
    }
  }
];

db.members.insertMany(members);

db.bars.find();
