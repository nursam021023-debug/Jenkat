var FB_LINK = "https://www.facebook.com/jenkathotspringresort";

// ---------- DATA ----------

// alt text for every photo
var ALT = {
  1: "Balcony sitting area with a view of the hills",
  3: "Bathroom with yellow and black checkered tiles",
  4: "Bathroom with patterned floor tiles and a framed mirror",
  5: "Bathroom with striped walls and patterned tiles",
  6: "Room 1 with bunk beds",
  7: "Pool with a colorful painted edge and slide",
  8: "Covered lounge with rattan chairs",
  9: "Wooden wheel bench and table in the garden",
  10: "Garden sofa under a pergola with hanging lanterns",
  11: "Darts board on a bamboo wall",
  12: "Bathroom with a rain shower and mirror",
  14: "Painted rock planter with a small pond",
  16: "Rooftop basketball court above the resort",
  17: "Pebble corner with bamboo walls",
  18: "Wooden table in the kitchen and dining area",
  19: "Room 3 with a double bed, wardrobe, and vanity room",
  20: "Aerial view of the pool and slide",
  21: "Long wooden table in the hallway",
  22: "Bathroom with pink fixtures and patterned tiles",
  23: "Long dining area with tables and chairs",
  24: "Spiral staircase and upper landing",
  25: "Hallway with benches and a wooden table",
  26: "Pergola lounge with a garden sofa",
  27: "Room 4 with bunk beds and a writing desk",
  28: "Room 2 with bunk beds and a vanity room",
  29: "Tiled bench in a shaded corner",
  30: "Outdoor kitchen with stove and cookware",
  31: "Pool with umbrellas and loungers",
  32: "Walk-in shower with gray brick tiles",
  33: "Bathroom with striped walls",
  34: "Pool seen from above with its slide",
  35: "Garden sofa under a lantern-lit pergola",
  36: "Adult pool with a slide beside the rooms",
  37: "Shaded pool with a painted walkway",
  38: "Bathroom with teal accent tiles",
  39: "Open courtyard with a painted floor",
  40: "Piano and guitar in front of the resort mural",
  42: "Loungers and umbrellas beside the pool",
  43: "Pool with a planted island",
  44: "Pool with the rooms behind it",
  45: "Pool beneath a shade structure",
  46: "Refrigerator and water dispenser",
  47: "Umbrellas and loungers by the pool",
  48: "Pool under a large tree",
  49: "Room 5 with bunk beds and a balcony",
  50: "Lounge with a sofa, piano and jungle mural",
  51: "Ground floor room with bunk beds and a sofa",
  52: "Billiards table",
  53: "Table tennis table",
  54: "Dart board on a bamboo wall",
  55: "Kitchen and barbecue area with tables",
  56: "Pool table in the hallway",
  57: "Videoke lounge with TV and sofa",
  58: "Refrigerator and water dispenser",
  59: "Parking area at the resort gate",
  60: "Outdoor shower area",
  61: "Kiddie pool"
};

// the six rooms
var ROOMS = [
  { img: 6,  title: "Room 1", meta: "6 pax", sub: "Private toilet and bath",
    text: "Air-conditioned room with bunk beds, vanity room, private toilet and bath." },
  { img: 28, title: "Room 2", meta: "8 pax", sub: "Private toilet and bath",
    text: "Air-conditioned room for up to 8 with bunk beds, vanity room, private toilet and bath." },
  { img: 19, title: "Room 3", meta: "6 pax", sub: "Private toilet and bath",
    text: "Air-conditioned room with a double bed, wardrobe, vanity room, private toilet and bath." },
  { img: 27, title: "Room 4", meta: "8 pax", sub: "Two common toilets and baths for girls and boys",
    text: "Air-conditioned room for up to 8 with bunk beds. Guests share the common toilets and baths." },
  { img: 49, title: "Room 5", meta: "8 pax", sub: "Two common toilets and baths for girls and boys",
    text: "Air-conditioned room for up to 8 with bunk beds and a balcony door. Guests share the common toilets and baths." },
  { img: 51, title: "Ground floor room", meta: "Up to 16 guests", sub: "For seniors and PWD, common toilets and baths",
    text: "No stairs to climb. This air-conditioned ground floor room fits up to 16 guests and is set aside for seniors and persons with disabilities." }
];

var POOLS = [34, 61, 60, 7];                                    // photos shown on the pools page
var POOL_ALL = [34, 61, 60, 7, 36, 43, 20, 31, 42, 37, 47, 45, 44, 48]; // photos inside the pool lightbox
var BATHS = [3, 12, 22, 32, 38];
var HERO_PHOTOS = [31, 36, 34, 42];

var AMENITIES = [
  { img: 52, cap: "Billiards", cls: "h2" },
  { img: 16, cap: "Rooftop basketball court", cls: "h2" },
  { img: 40, cap: "Piano and guitar", cls: "w2" },
  { img: 53, cap: "Table tennis for adults and kids", cls: "" },
  { img: 58, cap: "Refrigerator and water dispenser", cls: "" },
  { img: 54, cap: "Darts", cls: "h2" },
  { img: 55, cap: "Kitchen and barbecue area", cls: "w2 h2" },
  { img: 56, cap: "Pool table", cls: "h2" },
  { img: 57, cap: "Videoke", cls: "w2" },
  { img: 59, cap: "Parking area", cls: "w2" }
];

var GALLERY = [54,55,56,57,58,59,60,61,20,36,34,43,7,31,42,37,47,45,44,48,10,26,35,9,14,39,1,16,50,40,8,11,52,53,6,28,19,27,49,51,23,18,30,46,21,25,24,29,17,3,4,5,12,22,32,33,38];