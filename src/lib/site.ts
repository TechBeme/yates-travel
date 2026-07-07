const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const site = {
  name: "Yates Travel",
  url: "https://yates.techbe.me",
  phone: "870-210-4945",
  phoneHref: "tel:+18702104945",
  email: "Yates-Travel@outlook.com",
  emailBrian: "Brian.Yates@Yates-Travel.com",
  address: {
    street: "PO Box 32",
    city: "Black Oak",
    state: "AR",
    zip: "72414",
    country: "US",
  },
  instagram: "https://www.instagram.com/yates_travel/",
  facebook: "https://www.facebook.com/yatestravelar/",
  facebookReviews:
    "https://www.facebook.com/yatestravelar/reviews/?id=100086566456573&sk=reviews",
  founder: "Brian Yates",
} as const;

export const images = {
  hero: unsplash("1507525428034-b723cf961d3e", 2000),
  cruiseShip: unsplash("1599640842225-85d111c60e6b"),
} as const;

export const destinations = [
  { key: "caribbean", image: unsplash("1507525428034-b723cf961d3e", 900) },
  { key: "bahamas", image: unsplash("1548574505-5e239809ee19", 900) },
  { key: "cancun", image: unsplash("1510097467424-192d713fd8b2", 900) },
  { key: "orlando", image: unsplash("1524008279394-3aed4643b30b", 900) },
  { key: "santorini", image: unsplash("1613395877344-13d4a8e0d49e", 900) },
  { key: "paris", image: unsplash("1502602898657-3e91760cbb34", 900) },
  { key: "rome", image: unsplash("1552832230-c0197dd311b5", 900) },
  { key: "maldives", image: unsplash("1514282401047-d79a71a590e8", 900) },
  { key: "bali", image: unsplash("1537996194471-e657df975ab4", 900) },
] as const;

export type DestinationKey = (typeof destinations)[number]["key"];
