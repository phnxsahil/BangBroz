// Real, high-quality CDN imagery (Unsplash). Centralized so we can swap easily.
const U = (id: string, w = 2000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  // Heroes & landscapes
  heroPeak:        U("1464822759023-fed622ff2c3b"),       // snowy peak at dawn
  heroValley:      U("1486870591958-9b9d0d1dda99"),       // alpine valley
  ridge:           U("1454496522488-7a8e488e8606"),       // ridgeline
  himalaya:        U("1506905925346-21bda4d32df4"),
  fogForest:       U("1448375240586-882707db888b"),
  village:         U("1519681393784-d120267933ba"),
  trekker:         U("1551632811-561732d1e306"),
  tent:            U("1504280390367-361c6d9f38f4"),
  prayerFlags:     U("1597983073512-bb1cb6f8c20a"),
  chai:            U("1571934811356-5cc061b6821f"),

  // Destinations
  munsiyari:       U("1626621341517-bbf3d9990a23"),
  panchachuli:     U("1610128114197-485d933885c5"),
  spiti:           U("1571536802807-30451e3955d8"),
  ladakh:          U("1589308078059-be1415eab4c3"),

  // Team / lifestyle
  group:           U("1530541930197-ff16ac917b0e"),
  road:            U("1502920917128-1aa500764cbd"),
  sunset:          U("1500530855697-b586d89ba3ee"),

  // Reels (vertical-friendly)
  reel1:           U("1464822759023-fed622ff2c3b", 1200),
  reel2:           U("1454496522488-7a8e488e8606", 1200),
  reel3:           U("1551632811-561732d1e306", 1200),
  reel4:           U("1448375240586-882707db888b", 1200),
  reel5:           U("1506905925346-21bda4d32df4", 1200),
};

export const WHATSAPP =
  "https://wa.me/918865848737?text=Hi%20Bag%20n%20Broz%2C%20I%27d%20like%20to%20know%20more%20about%20your%20next%20expedition.";

export const INSTAGRAM = "https://instagram.com/bag.n.bros";
export const INSTAGRAM_HANDLE = "@bag.n.bros";
