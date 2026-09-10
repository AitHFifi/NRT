export const fleet = [
  {
    id: "atr-72",
    model: "ATR 72-600",
    icaoCode: "AT76",
    registrationSample: "TR-LGA",
    category: "Turbopropulseur Régional",
    categoryEn: "Regional Turboprop",
    tagline: "Le fleuron du réseau intérieur gabonais",
    taglineEn: "The backbone of Gabon's domestic network",
    charterTypeKey: "turboprop",
    seats: 70,
    maxRange: "1,528 km",
    maxRangeNum: 1528,
    cruiseSpeed: "510 km/h",
    cruiseSpeedNum: 510,
    ceiling: "25,000 ft (7,600 m)",
    ceilingNum: 25000,
    runwayCapability: "Excellente (Pistes courtes & latérite)",
    runwayCapabilityEn: "Excellent (Short runway & unpaved STOL)",
    runwayType: "STOL Piste Sommaire",
    runwayTypeEn: "STOL Unpaved Strip",
    fuelEfficiency: "3.0 L / 100 km par passager",
    fuelEfficiencyEn: "3.0 L / 100 km per passenger",
    exteriorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/ATR_72-600_ATR_house_colors_F-WWEY_-_MSN_98_retusche.jpg/1280px-ATR_72-600_ATR_house_colors_F-WWEY_-_MSN_98_retusche.jpg",
    interiorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Interior_ATR_72-600_Passaredo.JPG/1280px-Interior_ATR_72-600_Passaredo.JPG",
    cabinFeatures: [
      "Configuration 2-2 sans siège du milieu",
      "Coffres à bagages Armonia grande capacité",
      "Éclairage d'ambiance LED dynamique circadien",
      "Basse empreinte carbone (-45% de CO2)"
    ],
    cabinFeaturesEn: [
      "2-2 layout with no middle seat",
      "High-capacity Armonia overhead luggage bins",
      "Circadian dynamic LED ambient lighting",
      "Low carbon footprint (-45% CO2 vs jets)"
    ],
    typicalRoutes: "Libreville (LBV) ⇄ Port-Gentil (POG), Franceville (MVB), Oyem (OYE)",
    badge: "Régional Haute Capacité",
    badgeEn: "High-Capacity Regional",
    hotspots: [
      {
        id: "cockpit",
        x: 20,
        y: 52,
        label: "Cockpit Avionique",
        labelEn: "Avionics Cockpit",
        title: "Avionique Thales TopDeck",
        titleEn: "Thales TopDeck Avionics",
        detail: "Suite avionique numérique avec 5 écrans LCD haute définition, pilote automatique certifié CAT III et navigation RNP 0.3.",
        detailEn: "Glass cockpit with 5 high-def LCD displays, CAT III autopilot, and RNP 0.3 high-precision approach navigation."
      },
      {
        id: "engine",
        x: 44,
        y: 44,
        label: "Propulsion Efficience",
        labelEn: "Efficient Propulsion",
        title: "2× Turbopropulseurs Pratt & Whitney PW127M",
        titleEn: "2× Pratt & Whitney PW127M Turboprops",
        detail: "Hélices composites à 6 pales à bruit ultra-réduit. Rendement énergétique exceptionnel adapté au climat tropical chaud et humide.",
        detailEn: "6-blade composite ultra-quiet propellers. Outstanding thermal efficiency tailored for hot and humid equatorial conditions."
      },
      {
        id: "cabin",
        x: 62,
        y: 48,
        label: "Cabine Armonia",
        labelEn: "Armonia Cabin",
        title: "Conception Giugiaro 70 Sièges",
        titleEn: "Giugiaro Design 70-Seat Cabin",
        detail: "Sièges ergonomiques allégés avec pas de 31 pouces. Absence de siège du milieu pour une liberté de mouvement maximale.",
        detailEn: "Ergonomic lightweight seats with 31-inch pitch. Zero middle seats ensuring maximum personal comfort."
      },
      {
        id: "gear",
        x: 50,
        y: 64,
        label: "Train Tout-Terrain",
        labelEn: "Rough-Strip Gear",
        title: "Certification Pistes Sommaires (STOL)",
        titleEn: "Unpaved & Short Strip Certification (STOL)",
        detail: "Train d'atterrissage renforcé pour opérer sur pistes en latérite stabilisée et sols compactés sans dommage de projection.",
        detailEn: "Reinforced low-pressure landing gear engineered for laterite, gravel, and unpaved jungle airstrips."
      }
    ],
    seatMapConfig: {
      layoutType: "2-2",
      totalSeats: 70,
      rows: 18,
      pitch: "31 pouces (79 cm)",
      pitchEn: "31 inches (79 cm)",
      width: "18 pouces (46 cm)",
      widthEn: "18 inches (46 cm)",
      aisleCount: 1,
      columns: ["A", "B", "C", "D"],
      hasEmergencyExitRow: [9, 10],
      amenities: ["Prises USB intégrées", "Climatisation renforcée zone équatoriale", "Coffres à bagages 30% plus spacieux"],
      amenitiesEn: ["Integrated USB charging", "Heavy-duty equatorial AC", "30% roomier overhead bins"]
    },
    rangeRadar: {
      reachRadiusPercent: 48,
      destinations: [
        { name: "Port-Gentil (POG)", time: "35 min", distance: "150 km", type: "Hub National" },
        { name: "Franceville (MVB)", time: "1h 10 min", distance: "510 km", type: "Hub National" },
        { name: "Oyem (OYE)", time: "45 min", distance: "310 km", type: "Régional" },
        { name: "Makokou (MKU)", time: "55 min", distance: "390 km", type: "Régional" },
        { name: "Douala (DLA)", time: "1h 05 min", distance: "420 km", type: "International" },
        { name: "São Tomé (TMS)", time: "50 min", distance: "300 km", type: "International" }
      ]
    }
  },
  {
    id: "erj-145",
    model: "Embraer ERJ-145",
    icaoCode: "E145",
    registrationSample: "TR-KGM",
    category: "Jet Régional Rapide",
    categoryEn: "Express Regional Jet",
    tagline: "Vitesse et confort pour les navettes affaires",
    taglineEn: "Speed and comfort for corporate shuttles",
    charterTypeKey: "regionalJet",
    seats: 50,
    maxRange: "2,870 km",
    maxRangeNum: 2870,
    cruiseSpeed: "830 km/h",
    cruiseSpeedNum: 830,
    ceiling: "37,000 ft (11,200 m)",
    ceilingNum: 37000,
    runwayCapability: "Aéroports certifiés pistes bitumées",
    runwayCapabilityEn: "Certified paved runway hubs",
    runwayType: "Piste Bitumée Longue",
    runwayTypeEn: "Certified Paved Hub",
    fuelEfficiency: "3.8 L / 100 km par passager",
    fuelEfficiencyEn: "3.8 L / 100 km per passenger",
    exteriorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Flybe_erj145_g-erja_arp.jpg/1280px-Flybe_erj145_g-erja_arp.jpg",
    interiorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/ERJ-145_Cabin_%286853973498%29.jpg/1280px-ERJ-145_Cabin_%286853973498%29.jpg",
    cabinFeatures: [
      "Configuration 1-2 intime (siège couloir et hublot direct)",
      "Vitesse de croisière maximale pour navettes pétrolières",
      "Service de boissons et collation chaude en Club Affaires",
      "Soute pressurisée pour équipements techniques délicats"
    ],
    cabinFeaturesEn: [
      "Intimate 1-2 seating (direct aisle and window on single side)",
      "Maximum cruise speed for rapid oil & energy rotations",
      "Beverage and hot catering service in Business Club",
      "Pressurized cargo bay for delicate technical tools"
    ],
    typicalRoutes: "Navette Express Libreville (LBV) ⇄ Port-Gentil (POG) en 30 min chrono",
    badge: "Jet Express Affaires",
    badgeEn: "Business Jet Express",
    hotspots: [
      {
        id: "cockpit",
        x: 18,
        y: 52,
        label: "Honeywell Primus 1000",
        labelEn: "Honeywell Primus 1000",
        title: "Avionique Double FMS",
        titleEn: "Dual FMS Digital Avionics",
        detail: "Système de gestion de vol de classe mondiale permettant des approches IFR de haute précision et une surveillance radar météo avancée.",
        detailEn: "World-class digital flight management with dual FMS, advanced storm radar, and precision runway guidance."
      },
      {
        id: "engine",
        x: 80,
        y: 48,
        label: "Turboréacteurs Arrière",
        labelEn: "Aft Turbofans",
        title: "2× Rolls-Royce AE 3007A1",
        titleEn: "2× Rolls-Royce AE 3007A1 Turbofans",
        detail: "Moteurs à réaction montés à l'arrière isolant la cabine du bruit. Poussée de 7 400 lbf pour une montée rapide à 37 000 pieds.",
        detailEn: "Fuselage-mounted rear engines insulating the passenger cabin from acoustic noise. 7,400 lbf thrust for rapid climb."
      },
      {
        id: "cabin",
        x: 50,
        y: 48,
        label: "Configuration 1-2",
        labelEn: "1-2 Layout",
        title: "L'Exclusivité du Siège Solo 'A'",
        titleEn: "Exclusive Solo 'A' Seat",
        detail: "Chaque passager côté gauche bénéficie d'un accès direct au couloir ET au hublot, sans aucun voisin immédiat.",
        detailEn: "Every left-hand passenger enjoys simultaneous direct aisle access and window view with no seatmate."
      },
      {
        id: "cargo",
        x: 70,
        y: 62,
        label: "Soute Pressurisée",
        labelEn: "Pressurized Cargo",
        title: "Compartiment Fret Technique 9.2 m³",
        titleEn: "9.2 m³ Technical Cargo Bay",
        detail: "Volume sécurisé à température contrôlée pour valises professionnelles, échantillons géologiques et matériel pétrolier.",
        detailEn: "Temperature-controlled secure bay for corporate luggage, geological samples, and high-value tools."
      }
    ],
    seatMapConfig: {
      layoutType: "1-2",
      totalSeats: 50,
      rows: 17,
      pitch: "32 pouces (81 cm)",
      pitchEn: "32 inches (81 cm)",
      width: "18.2 pouces (46.5 cm)",
      widthEn: "18.2 inches (46.5 cm)",
      aisleCount: 1,
      columns: ["A", "B", "C"],
      hasEmergencyExitRow: [12],
      amenities: ["Siège individuel 'Solo' côté gauche", "Insonorisation moteur arrière", "Service bar exécutif"],
      amenitiesEn: ["Individual 'Solo' seat on left", "Aft engine noise isolation", "Executive bar service"]
    },
    rangeRadar: {
      reachRadiusPercent: 78,
      destinations: [
        { name: "Port-Gentil (POG)", time: "25 min", distance: "150 km", type: "Navette Pétrole" },
        { name: "Franceville (MVB)", time: "50 min", distance: "510 km", type: "Hub Mining" },
        { name: "Pointe-Noire (PNR)", time: "1h 10 min", distance: "620 km", type: "International" },
        { name: "Brazzaville (BZV)", time: "1h 20 min", distance: "820 km", type: "International" },
        { name: "Luanda (LAD)", time: "1h 45 min", distance: "1,150 km", type: "International" },
        { name: "Abidjan (ABJ)", time: "2h 15 min", distance: "1,550 km", type: "International" }
      ]
    }
  },
  {
    id: "king-air-350",
    model: "Beechcraft King Air 350i",
    icaoCode: "B350",
    registrationSample: "TR-VIP",
    category: "Appareil VIP & Tout-Terrain",
    categoryEn: "VIP & All-Terrain Aircraft",
    tagline: "L'accès exclusif aux pistes isolées et évacuations sanitaires",
    taglineEn: "Exclusive access to bush airstrips & medevac missions",
    charterTypeKey: "vipTurboprop",
    seats: 9,
    maxRange: "3,345 km",
    maxRangeNum: 3345,
    cruiseSpeed: "578 km/h",
    cruiseSpeedNum: 578,
    ceiling: "35,000 ft (10,600 m)",
    ceilingNum: 35000,
    runwayCapability: "Tous terrains (Latérite, herbe, pistes courtes)",
    runwayCapabilityEn: "All-terrain (Laterite, grass, STOL airstrips)",
    runwayType: "Tout-Terrain & Brousse",
    runwayTypeEn: "All-Terrain & Bush Strip",
    fuelEfficiency: "2.4 L / 100 km par passager",
    fuelEfficiencyEn: "2.4 L / 100 km per passenger",
    exteriorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Beechcraft_King_Air_350i%2C_EBACE_2019%2C_Le_Grand-Saconnex_%28EB190202%29.jpg/1280px-Beechcraft_King_Air_350i%2C_EBACE_2019%2C_Le_Grand-Saconnex_%28EB190202%29.jpg",
    interiorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Beechcraft_King_Air_350i_interior.jpg/1280px-Beechcraft_King_Air_350i_interior.jpg",
    cabinFeatures: [
      "Salon Club en cuir avec tables exécutives déployables",
      "Modulable en civière EVASAN avec respirateur médical en 45 min",
      "Accès direct aux sites pétroliers (Rabi, Gamba) et parcs nationaux",
      "Insonorisation acoustique active de dernière génération"
    ],
    cabinFeaturesEn: [
      "Club leather lounge with executive folding work tables",
      "Convertible to Medevac ICU stretcher in 45 mins",
      "Direct access to remote oil fields (Rabi, Gamba) & eco-parks",
      "Active acoustic noise-cancelling cabin"
    ],
    typicalRoutes: "Affrètements VIP sur mesure, sites pétroliers et évacuations d'urgence",
    badge: "VIP & Évacuation Sanitaire",
    badgeEn: "VIP & Medevac",
    hotspots: [
      {
        id: "cockpit",
        x: 28,
        y: 48,
        label: "Collins Pro Line Fusion",
        labelEn: "Collins Pro Line Fusion",
        title: "Écrans Tactiles 14 Pouces",
        titleEn: "14-Inch Touchscreen Avionics",
        detail: "Vision synthétique 3D haute résolution du relief équatorial, météo satellite en direct et alertes terrain prédictives.",
        detailEn: "High-resolution 3D synthetic vision terrain mapping, live satellite weather radar, and predictive obstacle alerts."
      },
      {
        id: "engine",
        x: 46,
        y: 54,
        label: "Pratt & Whitney PT6A-60A",
        labelEn: "Pratt & Whitney PT6A-60A",
        title: "La Référence Mondiale de Fiabilité",
        titleEn: "Global Benchmark of Reliability",
        detail: "Moteurs à turbine légendaires de 1 050 ch chacun. Inversion de pas d'hélice pour freinage court sur pistes non revêtues.",
        detailEn: "Legendary 1,050 SHP turboprops. Reverse-thrust propeller pitch for rapid braking on unpaved jungle runways."
      },
      {
        id: "cabin",
        x: 62,
        y: 46,
        label: "Salon Club VIP",
        labelEn: "VIP Club Lounge",
        title: "Intérieur Cuir Fait Main & Tables Bois",
        titleEn: "Handcrafted Leather & Hardwood Tables",
        detail: "Configuration double club 4 places en vis-à-vis pour réunions en vol, mini-bar réfrigéré et toilettes privatives.",
        detailEn: "Double club-4 facing seating for executive airborne meetings, refrigerated bar, and private aft lavatory."
      },
      {
        id: "medevac",
        x: 74,
        y: 52,
        label: "Kit Médical EVASAN",
        labelEn: "Medevac LifePort Kit",
        title: "Soins Intensifs Embarqués (ICU)",
        titleEn: "Airborne Intensive Care Unit (ICU)",
        detail: "Système modulaire LifePort : oxygène médical, monitoring multiparamétrique, défibrillateur et rampe de chargement civière.",
        detailEn: "Modular LifePort system: medical oxygen, continuous vital monitoring, defibrillator, and specialized stretcher ramp."
      }
    ],
    seatMapConfig: {
      layoutType: "VIP Club & Divan",
      totalSeats: 9,
      rows: 4,
      pitch: "Salon Exécutif Étendu (115 cm)",
      pitchEn: "Executive Extended Lounge (45 in)",
      width: "21 pouces (53 cm)",
      widthEn: "21 inches (53 cm)",
      aisleCount: 1,
      columns: ["A", "B"],
      hasEmergencyExitRow: [],
      amenities: ["Tables exécutives en bois précieux", "Prises 220V et ports USB rapides", "Mini-bar réfrigéré", "Toilettes privatives"],
      amenitiesEn: ["Precious hardwood executive tables", "220V power & fast USB ports", "Refrigerated refreshment center", "Private enclosed lavatory"]
    },
    rangeRadar: {
      reachRadiusPercent: 95,
      destinations: [
        { name: "Rabi Kounga (Pétrole)", time: "30 min", distance: "190 km", type: "Piste Sommaire" },
        { name: "Gamba (Pétrole)", time: "40 min", distance: "280 km", type: "Piste Sommaire" },
        { name: "Parc de la Lopé", time: "35 min", distance: "240 km", type: "Écotourisme" },
        { name: "Yaoundé (NSI)", time: "1h 15 min", distance: "490 km", type: "International" },
        { name: "Johannesburg (JNB)", time: "4h 45 min", distance: "3,300 km", type: "Long-Range VIP" },
        { name: "Nairobi (NBO)", time: "4h 10 min", distance: "2,950 km", type: "Long-Range VIP" }
      ]
    }
  }
];
