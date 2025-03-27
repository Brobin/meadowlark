const nebraskaExclude = [
  "Acadian Flycatcher",
  "American Avocet",
  "American Coot",
  "American Crow",
  "American Golden-Plover",
  "American Goldfinch",
  "American Herring Gull",
  "American Kestrel",
  "American Pipit",
  "American Redstart",
  "American Robin",
  "American Tree Sparrow",
  "American White Pelican",
  "American Wigeon",
  "American Woodcock",
  "Baird's Sandpiper",
  "Bald Eagle",
  "Baltimore Oriole",
  "Bank Swallow",
  "Barn Swallow",
  "Barred Owl",
  "Bell's Vireo",
  "Belted Kingfisher",
  "Black Tern",
  "Black-and-white Warbler",
  "Black-billed Magpie",
  "Black-capped Chickadee",
  "Black-crowned Night Heron",
  "Black-headed Grosbeak",
  "Black-throated Green Warbler",
  "Blackpoll Warbler",
  "Blue Grosbeak",
  "Blue Jay",
  "Blue-gray Gnatcatcher",
  "Blue-headed Vireo",
  "Blue-winged Teal",
  "Bobolink",
  "Bonaparte's Gull",
  "Brewer's Blackbird",
  "Broad-winged Hawk",
  "Brown Creeper",
  "Brown Thrasher",
  "Brown-headed Cowbird",
  "Bufflehead",
  "Bullock's Oriole",
  "Burrowing Owl",
  "Cackling Goose",
  "Canada Goose",
  "Canvasback",
  "Carolina Wren",
  "Caspian Tern",
  "Cassin's Kingbird",
  "Cedar Waxwing",
  "Chestnut-collared Longspur",
  "Chimney Swift",
  "Chipping Sparrow",
  "Clay-colored Sparrow",
  "Cliff Swallow",
  "Common Goldeneye",
  "Common Grackle",
  "Common Loon",
  "Common Merganser",
  "Common Nighthawk",
  "Common Poorwill",
  "Common Yellowthroat",
  "Cooper's Hawk",
  "Dark-eyed Junco",
  "Dickcissel",
  "Double-crested Cormorant",
  "Downy Woodpecker",
  "Dunlin",
  "Eared Grebe",
  "Eastern Bluebird",
  "Eastern Kingbird",
  "Eastern Meadowlark",
  "Eastern Phoebe",
  "Eastern Screech-Owl",
  "Eastern Towhee",
  "Eastern Whip-poor-will",
  "Eastern Wood-Pewee",
  "Eurasian Collared-Dove",
  "European Starling",
  "Ferruginous Hawk",
  "Field Sparrow",
  "Forster's Tern",
  "Fox Sparrow",
  "Franklin's Gull",
  "Gadwall",
  "Golden Eagle",
  "Golden-crowned Kinglet",
  "Grasshopper Sparrow",
  "Gray Catbird",
  "Great Blue Heron",
  "Great Crested Flycatcher",
  "Great Egret",
  "Great Horned Owl",
  "Great-tailed Grackle",
  "Greater Prairie-Chicken",
  "Greater Scaup",
  "Greater White-fronted Goose",
  "Greater Yellowlegs",
  "Green Heron",
  "Green-winged Teal",
  "Hairy Woodpecker",
  "Harris's Sparrow",
  "Hooded Merganser",
  "Horned Grebe",
  "Horned Lark",
  "House Finch",
  "House Sparrow",
  "Northern House Wren",
  "Hudsonian Godwit",
  "Iceland Gull",
  "Indigo Bunting",
  "Killdeer",
  "Lapland Longspur",
  "Lark Bunting",
  "Lark Sparrow",
  "Lazuli Bunting",
  "Least Flycatcher",
  "Least Sandpiper",
  "Least Tern",
  "LeConte's Sparrow",
  "Lesser Black-backed Gull",
  "Lesser Goldfinch",
  "Lesser Scaup",
  "Lesser Yellowlegs",
  "Lincoln's Sparrow",
  "Loggerhead Shrike",
  "Long-billed Curlew",
  "Long-billed Dowitcher",
  "Magnolia Warbler",
  "Mallard",
  "Marbled Godwit",
  "Marsh Wren",
  "Merlin",
  "Mississippi Kite",
  "Mountain Bluebird",
  "Mourning Dove",
  "Nashville Warbler",
  "Northern Bobwhite",
  "Northern Cardinal",
  "Northern Flicker",
  "Northern Harrier",
  "Northern Mockingbird",
  "Northern Parula",
  "Northern Pintail",
  "Northern Rough-winged Swallow",
  "Northern Shoveler",
  "Northern Shrike",
  "Northern Waterthrush",
  "Olive-sided Flycatcher",
  "Orange-crowned Warbler",
  "Orchard Oriole",
  "Osprey",
  "Ovenbird",
  "Palm Warbler",
  "Pectoral Sandpiper",
  "Peregrine Falcon",
  "Pied-billed Grebe",
  "Pileated Woodpecker",
  "Pine Siskin",
  "Piping Plover",
  "Plumbeous Vireo",
  "Prairie Falcon",
  "Purple Finch",
  "Purple Martin",
  "Pygmy Nuthatch",
  "Red Crossbill",
  "Red-bellied Woodpecker",
  "Red-breasted Merganser",
  "Red-breasted Nuthatch",
  "Red-eyed Vireo",
  "Red-headed Woodpecker",
  "Red-shouldered Hawk",
  "Red-tailed Hawk",
  "Red-winged Blackbird",
  "Redhead",
  "Ring-billed Gull",
  "Ring-necked Duck",
  "Ring-necked Pheasant",
  "Rock Pigeon",
  "Rock Wren",
  "Rose-breasted Grosbeak",
  "Ross's Goose",
  "Rough-legged Hawk",
  "Ruby-crowned Kinglet",
  "Ruby-throated Hummingbird",
  "Ruddy Duck",
  "Rusty Blackbird",
  "Sandhill Crane",
  "Savannah Sparrow",
  "Say's Phoebe",
  "Scarlet Tanager",
  "Sedge Wren",
  "Semipalmated Plover",
  "Semipalmated Sandpiper",
  "Sharp-shinned Hawk",
  "Sharp-tailed Grouse",
  "Short-billed Dowitcher",
  "Short-eared Owl",
  "Snow Goose",
  "Solitary Sandpiper",
  "Song Sparrow",
  "Sora",
  "Spotted Sandpiper",
  "Spotted Towhee",
  "Stilt Sandpiper",
  "Summer Tanager",
  "Surf Scoter",
  "Swainson's Hawk",
  "Swainson's Thrush",
  "Swamp Sparrow",
  "Tennessee Warbler",
  "Townsend's Solitaire",
  "Tree Swallow",
  "Trumpeter Swan",
  "Tufted Titmouse",
  "Turkey Vulture",
  "Upland Sandpiper",
  "Vesper Sparrow",
  "Violet-green Swallow",
  "Virginia Rail",
  "Warbling Vireo",
  "Western Cattle Egret",
  "Western Grebe",
  "Western Kingbird",
  "Western Meadowlark",
  "Western Tanager",
  "Western Wood-Pewee",
  "White-breasted Nuthatch",
  "White-crowned Sparrow",
  "White-faced Ibis",
  "White-rumped Sandpiper",
  "White-throated Sparrow",
  "White-throated Swift",
  "Whooping Crane",
  "Wild Turkey",
  "Willet",
  "Willow Flycatcher",
  "Wilson's Phalarope",
  "Wilson's Snipe",
  "Wilson's Warbler",
  "Winter Wren",
  "Wood Duck",
  "Wood Thrush",
  "Yellow Warbler",
  "Yellow-bellied Sapsucker",
  "Yellow-billed Cuckoo",
  "Yellow-breasted Chat",
  "Yellow-headed Blackbird",
  "Yellow-rumped Warbler",
  "Yellow-throated Vireo",
];

const excludeMap: Record<string, Set<string>> = {
  "US-NE": new Set(nebraskaExclude),
};

export default excludeMap;
