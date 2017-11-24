const dbase = {};

dbase.centers = [
  {
    id: 1,
    name: "Margaret Ekpo Hall",
    capacity: 80,
    centerType: "Conference Room",
    location: 'Marian, Calabar',
    features: ['sound', 'ac', 'lighting', 'parking space'],
    description: "Lorem ipsum dolor sit amet"
  },

  {
    id: 2,
    name: "FGGC Room",
    capacity: 20,
    centerType: 'Meeting Room',
    location: 'Atimbo, Calabar',
    features: ['projector'],
    description: "Lorem ipsum dolor sit amet"
  },

  {
    id: 3,
    name: "Obong Calabar",
    capacity: 30,
    centerType: 'Meeting Room',
    location: 'Calabar South, Calabar',
    features: ['projector', 'ac'],
    description: "Lorem ipsum dolor sit amet"
  },

  {
    id: 4,
    name: "Jasper",
    capacity: 100,
    centerType: 'Club',
    location: 'Marian, Calabar',
    features: ['ac', 'sound', 'lighting', 'security'],
    description: "Lorem ipsum dolor sit amet"
  }
];

dbase.events = [
  {
    eventId: 1,
    name: 'AIDS Conference',
    eventType: "Other",
    dateBegin: '11-30-2017',
    dateEnd: '11-30 - 2017',
    centerName: 'Obong Calabar', 
    details: "Lorem ipsum dolor sit amet"
  },

  {
    eventId: 2,
    name: 'WhoKes Comedy Jam',
    eventType: "Team Outing/Party",
    dateBegin: '11-30-2017',
    dateEnd: '11-30-2017',
    centerName: 'Jasper',
    details: "Lorem ipsum dolor sit amet"
  },

  {
    eventId: 3,
    name: 'Town Hall Meeting',
    eventType: "Corporate",
    dateBegin: '12-10-2017',
    dateEnd: '12-13 - 2017',
    centerName: 'Obong Calabar',
    details: "Lorem ipsum dolor sit amet"
  },

];

export default dbase;