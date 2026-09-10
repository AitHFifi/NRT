export const scheduledFlights = [
  // Libreville -> Port-Gentil
  {
    flightNo: "NRT-101",
    origin: "LBV",
    destination: "POG",
    departureTime: "07:30",
    arrivalTime: "08:05",
    duration: "35 min",
    aircraft: "ATR 72-600",
    days: ["1", "2", "3", "4", "5", "6", "7"],
    priceEconomyXAF: 68000,
    priceBusinessXAF: 115000,
    status: "À l'heure",
    statusEn: "On Time",
    statusType: "ontime"
  },
  {
    flightNo: "NRT-103",
    origin: "LBV",
    destination: "POG",
    departureTime: "11:45",
    arrivalTime: "12:15",
    duration: "30 min",
    aircraft: "Embraer ERJ-145",
    days: ["1", "2", "3", "4", "5", "6"],
    priceEconomyXAF: 75000,
    priceBusinessXAF: 125000,
    status: "Embarquement",
    statusEn: "Boarding",
    statusType: "boarding"
  },
  {
    flightNo: "NRT-105",
    origin: "LBV",
    destination: "POG",
    departureTime: "16:15",
    arrivalTime: "16:50",
    duration: "35 min",
    aircraft: "ATR 72-600",
    days: ["1", "2", "3", "4", "5", "7"],
    priceEconomyXAF: 68000,
    priceBusinessXAF: 115000,
    status: "Prévu",
    statusEn: "Scheduled",
    statusType: "scheduled"
  },
  {
    flightNo: "NRT-107",
    origin: "LBV",
    destination: "POG",
    departureTime: "19:00",
    arrivalTime: "19:30",
    duration: "30 min",
    aircraft: "Embraer ERJ-145",
    days: ["1", "2", "3", "4", "5"],
    priceEconomyXAF: 78000,
    priceBusinessXAF: 130000,
    status: "Prévu",
    statusEn: "Scheduled",
    statusType: "scheduled"
  },

  // Port-Gentil -> Libreville
  {
    flightNo: "NRT-102",
    origin: "POG",
    destination: "LBV",
    departureTime: "08:50",
    arrivalTime: "09:25",
    duration: "35 min",
    aircraft: "ATR 72-600",
    days: ["1", "2", "3", "4", "5", "6", "7"],
    priceEconomyXAF: 68000,
    priceBusinessXAF: 115000,
    status: "Atterri",
    statusEn: "Landed",
    statusType: "landed"
  },
  {
    flightNo: "NRT-104",
    origin: "POG",
    destination: "LBV",
    departureTime: "13:00",
    arrivalTime: "13:30",
    duration: "30 min",
    aircraft: "Embraer ERJ-145",
    days: ["1", "2", "3", "4", "5", "6"],
    priceEconomyXAF: 75000,
    priceBusinessXAF: 125000,
    status: "À l'heure",
    statusEn: "On Time",
    statusType: "ontime"
  },
  {
    flightNo: "NRT-106",
    origin: "POG",
    destination: "LBV",
    departureTime: "17:40",
    arrivalTime: "18:15",
    duration: "35 min",
    aircraft: "ATR 72-600",
    days: ["1", "2", "3", "4", "5", "7"],
    priceEconomyXAF: 68000,
    priceBusinessXAF: 115000,
    status: "Prévu",
    statusEn: "Scheduled",
    statusType: "scheduled"
  },

  // Libreville -> Franceville
  {
    flightNo: "NRT-201",
    origin: "LBV",
    destination: "MVB",
    departureTime: "08:15",
    arrivalTime: "09:25",
    duration: "1h 10 min",
    aircraft: "ATR 72-600",
    days: ["1", "3", "5", "7"],
    priceEconomyXAF: 95000,
    priceBusinessXAF: 155000,
    status: "À l'heure",
    statusEn: "On Time",
    statusType: "ontime"
  },
  {
    flightNo: "NRT-203",
    origin: "LBV",
    destination: "MVB",
    departureTime: "14:30",
    arrivalTime: "15:25",
    duration: "55 min",
    aircraft: "Embraer ERJ-145",
    days: ["2", "4", "6"],
    priceEconomyXAF: 110000,
    priceBusinessXAF: 175000,
    status: "Prévu",
    statusEn: "Scheduled",
    statusType: "scheduled"
  },

  // Franceville -> Libreville
  {
    flightNo: "NRT-202",
    origin: "MVB",
    destination: "LBV",
    departureTime: "10:15",
    arrivalTime: "11:25",
    duration: "1h 10 min",
    aircraft: "ATR 72-600",
    days: ["1", "3", "5", "7"],
    priceEconomyXAF: 95000,
    priceBusinessXAF: 155000,
    status: "Atterri",
    statusEn: "Landed",
    statusType: "landed"
  },

  // Libreville -> Oyem
  {
    flightNo: "NRT-301",
    origin: "LBV",
    destination: "OYE",
    departureTime: "09:00",
    arrivalTime: "09:45",
    duration: "45 min",
    aircraft: "ATR 72-600",
    days: ["2", "4", "6"],
    priceEconomyXAF: 78000,
    priceBusinessXAF: 128000,
    status: "À l'heure",
    statusEn: "On Time",
    statusType: "ontime"
  },
  {
    flightNo: "NRT-302",
    origin: "OYE",
    destination: "LBV",
    departureTime: "10:30",
    arrivalTime: "11:15",
    duration: "45 min",
    aircraft: "ATR 72-600",
    days: ["2", "4", "6"],
    priceEconomyXAF: 78000,
    priceBusinessXAF: 128000,
    status: "Prévu",
    statusEn: "Scheduled",
    statusType: "scheduled"
  },

  // Libreville -> Moanda
  {
    flightNo: "NRT-401",
    origin: "LBV",
    destination: "MFF",
    departureTime: "07:00",
    arrivalTime: "08:15",
    duration: "1h 15 min",
    aircraft: "Beechcraft King Air 350",
    days: ["1", "2", "3", "4", "5"],
    priceEconomyXAF: 120000,
    priceBusinessXAF: 190000,
    status: "À l'heure",
    statusEn: "On Time",
    statusType: "ontime"
  },

  // Libreville -> Makokou
  {
    flightNo: "NRT-501",
    origin: "LBV",
    destination: "MKU",
    departureTime: "10:00",
    arrivalTime: "10:55",
    duration: "55 min",
    aircraft: "ATR 72-600",
    days: ["3", "6"],
    priceEconomyXAF: 89000,
    priceBusinessXAF: 145000,
    status: "Prévu",
    statusEn: "Scheduled",
    statusType: "scheduled"
  },

  // Libreville -> Mouila
  {
    flightNo: "NRT-601",
    origin: "LBV",
    destination: "MJL",
    departureTime: "13:45",
    arrivalTime: "14:35",
    duration: "50 min",
    aircraft: "ATR 72-600",
    days: ["2", "5"],
    priceEconomyXAF: 82000,
    priceBusinessXAF: 135000,
    status: "Prévu",
    statusEn: "Scheduled",
    statusType: "scheduled"
  },

  // Libreville -> Tchibanga
  {
    flightNo: "NRT-701",
    origin: "LBV",
    destination: "TCH",
    departureTime: "15:00",
    arrivalTime: "16:00",
    duration: "1h 00 min",
    aircraft: "ATR 72-600",
    days: ["1", "4"],
    priceEconomyXAF: 88000,
    priceBusinessXAF: 140000,
    status: "Prévu",
    statusEn: "Scheduled",
    statusType: "scheduled"
  }
];

export const searchScheduledFlights = (originCode, destinationCode) => {
  if (!originCode || !destinationCode) return [];
  return scheduledFlights.filter(
    (f) => f.origin === originCode && f.destination === destinationCode
  );
};
