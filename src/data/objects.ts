import type { CategorySlug } from "./categories";

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface Source {
  title: string;
  url: string;
}

export interface ImageCredit {
  creator: string;
  source: string;
  sourceUrl: string;
  license: string;
  licenseUrl?: string;
  changes?: string;
}

export interface AnatomyEntry {
  title: string;
  description: string;
}

export interface ObjectItem {
  id: string;
  slug: string;
  number: string;
  name: string;
  category: CategorySlug;
  year: string;
  yearNum: number;
  designer: string;
  origin: string;
  description: string;
  longDescription: string;
  whyTimeless: string[];
  anatomy: AnatomyEntry[];
  material: string;
  materials: string[];
  dimensions: string;
  image: string;
  gallery: string[];
  quote: string;
  quoteAuthor: string;
  timeline: TimelineEntry[];
  sources: Source[];
  imageCredit: ImageCredit;
  featured?: boolean;
}

export const objects: ObjectItem[] = [
  {
    id: "safety-pin",
    slug: "safety-pin",
    number: "001",
    name: "Safety Pin",
    category: "tools",
    year: "1849",
    yearNum: 1849,
    designer: "Walter Hunt",
    origin: "United States",
    description:
      "A single bent wire that clasps, holds, and releases — without a single moving joint.",
    longDescription:
      "Walter Hunt needed to settle a fifteen-dollar debt. In a few hours of work he twisted a piece of brass wire into a spiral spring, fixed a clasp at one end, and invented a mechanism so complete it barely changed in the century and a half that followed. He sold the patent for four hundred dollars and never profited further from it.\n\nThe safety pin is a closed system. The spring stores just enough tension to hold two layers of fabric together without puncturing the wearer. The clasp covers the point. There is nothing to adjust, nothing to maintain, and nothing to go wrong. Its form is its function, resolved so thoroughly that later attempts to 'improve' it have largely been additions the original never needed.",
    whyTimeless: [
      "A complete mechanism in a single piece of wire — no assembly, no fasteners, no moving parts to lose.",
      "The clasped point protects the user, turning a dangerous needle into a safe everyday tool.",
      "It is cheap to make, trivial to repair, and once understood, never needs instructions again.",
    ],
    anatomy: [
      {
        title: "One material",
        description:
          "The entire object is one continuous length of wire. There is nothing to loosen, corrode, or fall apart.",
      },
      {
        title: "Built-in spring",
        description:
          "The coil at the hinge stores tension; opening the pin compresses it, so the pin resists closing on its own.",
      },
      {
        title: "The clasp",
        description:
          "The bent point is sheathed by a guard, so the sharp end is only exposed while you deliberately press it open.",
      },
      {
        title: "Inspection",
        description:
          "Its state is always visible — open or closed — so there is no hidden failure mode.",
      },
    ],
    material: "Plated steel wire",
    materials: ["Steel", "Brass"],
    dimensions: "≈ 38 mm × 9 mm",
    image: "/objects/safety-pin/main.jpg",
    gallery: ["/objects/safety-pin/main.jpg"],
    quote:
      "The best designs are the ones you never have to think about. The safety pin is simply finished.",
    quoteAuthor: "Archive note, Object 001",
    timeline: [
      {
        year: "1849",
        title: "Original design",
        description:
          "Walter Hunt patents the safety pin (U.S. patent 6,281) after a single afternoon of work.",
      },
      {
        year: "1850s",
        title: "Mass production",
        description:
          "The design spreads through American and European needle manufacturers within a decade.",
      },
      {
        year: "20th century",
        title: "Global adoption",
        description:
          "The safety pin becomes a universal tool for textiles, diapers, badges, and emergency repairs.",
      },
      {
        year: "Today",
        title: "Still in use",
        description:
          "Variations exist, but the mechanism remains essentially Hunt's original.",
      },
    ],
    sources: [
      { title: "Safety pin — Wikipedia", url: "https://en.wikipedia.org/wiki/Safety_pin" },
      {
        title: "Walter Hunt — patent record, U.S. Patent Office",
        url: "https://patents.google.com/patent/US6281A/en",
      },
    ],
    imageCredit: {
      creator: "Glen Bledsoe",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Safety_Pin_Closed_(30977033712).jpg",
      license: "Public domain",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
    featured: true,
  },
  {
    id: "paper-clip",
    slug: "paper-clip",
    number: "002",
    name: "Paper Clip",
    category: "tools",
    year: "1899",
    yearNum: 1899,
    designer: "Attributed to Johan Vaaler",
    origin: "Norway / United Kingdom",
    description:
      "Two loops of wire that grip paper with friction alone, and release it without damage.",
    longDescription:
      "The paper clip is often credited to Johan Vaaler, who filed for a patent in Norway in 1899, though his clip never reached the market. The design that did — the Gem clip, patented in Britain the same year — is the shape we all recognize: a single length of wire bent into two nested loops.\n\nNothing about it is accidental. The outer loop provides the grip; the inner loop the pressure; the gap between them calibrates exactly how much paper the clip can hold. It is an object that works through geometry rather than mechanism — no spring, no hinge, no lever. When the loop is forced open the metal is stressed within its elastic limit, so the clip returns to shape every time.",
    whyTimeless: [
      "Friction and spring tension replace any need for moving parts or separate components.",
      "It is reversible — the paper is returned unharmed when the clip is removed.",
      "A bare minimum of material: a few grams of wire, cheap enough to be treated as disposable.",
    ],
    anatomy: [
      {
        title: "Nested loops",
        description:
          "The outer loop grips the paper while the inner loop supplies spring pressure from within.",
      },
      {
        title: "Elastic limit",
        description:
          "The bend is designed to stay within the wire's elastic range, so repeated use does not break it.",
      },
      {
        title: "Open ends",
        description:
          "The clipped ends slide smoothly over paper because the wire is guided, never driven, by the user.",
      },
    ],
    material: "Galvanized steel wire",
    materials: ["Steel"],
    dimensions: "≈ 33 mm × 8 mm",
    image: "/objects/paper-clip/main.jpg",
    gallery: ["/objects/paper-clip/main.jpg"],
    quote:
      "A length of bent wire that holds paper together better than any device that followed it.",
    quoteAuthor: "Archive note, Object 002",
    timeline: [
      {
        year: "1899",
        title: "The Gem clip",
        description:
          "The Gem paper clip is patented in Britain; the design still in use today.",
      },
      {
        year: "1900s",
        title: "Office ubiquity",
        description:
          "The Gem becomes the standard office binding device worldwide.",
      },
      {
        year: "Mid-century",
        title: "Design study",
        description:
          "The clip enters the study of 'good design' as an example of perfect economy of form.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "Millions are produced yearly, unchanged in essentials from the 1899 patent.",
      },
    ],
    sources: [
      { title: "Paper clip — Wikipedia", url: "https://en.wikipedia.org/wiki/Paper_clip" },
      { title: "The history of the paper clip", url: "https://www.britannica.com/story/humans-have-been-making-paper-clips-for-more-than-120-years" },
    ],
    imageCredit: {
      creator: "01x07x2022000",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:20220809_Paperclip.jpg",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "ballpoint-pen",
    slug: "ballpoint-pen",
    number: "003",
    name: "Ballpoint Pen",
    category: "writing",
    year: "1938",
    yearNum: 1938,
    designer: "László Bíró",
    origin: "Hungary / Argentina",
    description:
      "A rotating ball that carries ink onto paper — the fountain pen's oil-based successor.",
    longDescription:
      "László Bíró, a Hungarian journalist and inventor, noticed that quick-drying newspaper ink never smudged. The problem was its thickness — no nib could deliver it. His solution was to stop using a nib altogether: a tiny rotating ball seated in a socket rolls over the paper and drags a film of ink behind it.\n\nBíró patented the principle in 1938 and developed it commercially in Argentina with his brother György, launching the 'Birome' in 1943. The design proved so robust that the modern disposable ballpoint remains structurally identical: a reservoir, a ball, a socket, and a channel. The geometry of the ball-in-socket — precise, self-sealing, self-lubricating — is the entire invention.",
    whyTimeless: [
      "The ball-in-socket replaces the fragile nib with a single moving part that never needs sharpening.",
      "Oil-based ink dries on contact, ending the smudge and blot that plagued writing for centuries.",
      "It works in any orientation and pressure, from pocket notebooks to high-altitude aircraft.",
    ],
    anatomy: [
      {
        title: "The ball",
        description:
          "A hardened steel or tungsten-carbide sphere, precision-ground, that rolls ink onto paper.",
      },
      {
        title: "The socket",
        description:
          "The ball is seated in a tapered socket fine enough to meter a consistent film of ink.",
      },
      {
        title: "The reservoir",
        description:
          "A sealed tube keeps viscous ink from evaporating or leaking while the pen is idle.",
      },
      {
        title: "The feed",
        description:
          "Gravity and capillary action move a small, steady supply of ink to the ball as it turns.",
      },
    ],
    material: "Plastic body, steel or carbide ball",
    materials: ["Plastic", "Steel"],
    dimensions: "≈ 140 mm × 10 mm",
    image: "/objects/ballpoint-pen/main.jpg",
    gallery: ["/objects/ballpoint-pen/main.jpg"],
    quote:
      "Bíró's insight was not a better nib. It was abandoning the nib entirely.",
    quoteAuthor: "Archive note, Object 003",
    timeline: [
      {
        year: "1938",
        title: "Patent",
        description:
          "László Bíró files for the first practical ballpoint pen patent.",
      },
      {
        year: "1943",
        title: "The Birome",
        description:
          "The Bíró brothers launch commercial production in Buenos Aires.",
      },
      {
        year: "1945",
        title: "Global spread",
        description:
          "Licensed manufacturing begins in Europe and the United States after World War II.",
      },
      {
        year: "Today",
        title: "The default pen",
        description:
          "Over a billion ballpoint pens are sold each year, still on the 1938 principle.",
      },
    ],
    sources: [
      { title: "Ballpoint pen — Wikipedia", url: "https://en.wikipedia.org/wiki/Ballpoint_pen" },
      { title: "László Bíró — biography", url: "https://www.britannica.com/biography/Laszlo-Biro" },
    ],
    imageCredit: {
      creator: "Ronggy",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Typical_ball_point_pen.jpg",
      license: "Public domain",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "spoon",
    slug: "spoon",
    number: "004",
    name: "Spoon",
    category: "household",
    year: "c. 500,000 BCE",
    yearNum: -500000,
    designer: "Unknown — prehistoric",
    origin: "Everywhere",
    description:
      "A concave bowl on a short handle. In use for half a million years, essentially unchanged.",
    longDescription:
      "The spoon may be the oldest eating implement in existence, and it is certainly the least redesigned. Its essential form — a shallow bowl at the end of a handle — appears in the earliest human settlements, carved from wood, bone, and shell. Ancient Egyptians used spoons of wood and ivory; Greeks and Romans of bronze and silver.\n\nThe reason is that the spoon is pure interface. The concave surface solves the entire problem of 'moving liquid to the mouth' in a single gesture. Every improvement since has been material, not structural: sterling silver, then stainless steel, then plastic. The geometry remained so settled that even the spaceship age could not justify altering it.",
    whyTimeless: [
      "The bowl-plus-handle solves a universal need with the minimum of form.",
      "It works for solid, liquid, and powder with no adjustment or instruction.",
      "Its geometry predates metallurgy and has outlived every material that has ever carried it.",
    ],
    anatomy: [
      {
        title: "The bowl",
        description:
          "A concave surface that holds a controlled volume and directs it cleanly toward the mouth.",
      },
      {
        title: "The stem",
        description:
          "A handle long enough to keep the hand away from heat and mess, short enough to control.",
      },
      {
        title: "The lip",
        description:
          "The thinning edge of the bowl lets food transfer without scraping or spilling.",
      },
      {
        title: "The curve",
        description:
          "Slight ovality and depth are tuned to a human mouth — an ergonomic fact refined over millennia.",
      },
    ],
    material: "Stainless steel (historical: wood, bone, silver)",
    materials: ["Steel", "Wood", "Bone"],
    dimensions: "≈ 180 mm × 45 mm",
    image: "/objects/spoon/main.jpg",
    gallery: ["/objects/spoon/main.jpg"],
    quote:
      "The spoon did not need a designer. It was discovered, the way fire was.",
    quoteAuthor: "Archive note, Object 004",
    timeline: [
      {
        year: "Prehistory",
        title: "Earliest tools",
        description:
          "Bowl-on-handle implements appear with the first organized human settlements.",
      },
      {
        year: "Antiquity",
        title: "Royal metals",
        description:
          "Egyptian, Greek, and Roman workshops cast spoons in bronze, silver, and gold.",
      },
      {
        year: "19th century",
        title: "Stainless steel",
        description:
          "Modern metallurgy provides a permanent, non-tarnishing material that ends the need for care.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "Every table in the world still sets a spoon of the same basic geometry.",
      },
    ],
    sources: [
      { title: "Spoon — Wikipedia", url: "https://en.wikipedia.org/wiki/Spoon" },
      { title: "History of the spoon — Britannica", url: "https://www.britannica.com/topic/spoon-utensil" },
    ],
    imageCredit: {
      creator: "Koenraet Ten Eyck",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Table_Spoon_MET_DP253992.jpg",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "hammer",
    slug: "hammer",
    number: "005",
    name: "Hammer",
    category: "tools",
    year: "c. 30,000 BCE",
    yearNum: -30000,
    designer: "Unknown — prehistoric",
    origin: "Everywhere",
    description:
      "A mass on a handle, used to concentrate force at one point. Older than most geology.",
    longDescription:
      "The hammer is a mass fixed to a lever, and it has not changed in principle for tens of thousands of years. The earliest examples were river stones held in the fist; then a stone bound to a stick multiplied the reach and the leverage. The claw hammer — a head for striking on one side and prying on the other — arrived with the need to withdraw nails, and has been standard since the Roman period.\n\nEvery serious alternative has been invented and abandoned: mechanical nailers, hammers with recoil springs, air-powered tools. None replaced the plain hammer for the everyday, because the hammer is not a machine but an extension of the arm. Its weight, balance, and striking face are tuned to human anatomy, not to any external power source.",
    whyTimeless: [
      "Force amplification with no mechanism — the user supplies the energy, the hammer concentrates it.",
      "Its balance and mass are matched to the human arm, making it intuitive to a first-time user.",
      "It has no failure mode: a hammer is either usable or already fixed with a replacement handle.",
    ],
    anatomy: [
      {
        title: "The head",
        description:
          "A dense mass whose inertia stores the swing's energy and releases it at the point of impact.",
      },
      {
        title: "The face",
        description:
          "A hardened striking surface sized to deliver force without marring the target.",
      },
      {
        title: "The claw",
        description:
          "A split lever on the reverse used to extract nails — two tools in one symmetrical form.",
      },
      {
        title: "The handle",
        description:
          "A spring-like lever that flexes slightly to absorb shock and protect the user's arm.",
      },
    ],
    material: "Forged steel head, wooden or fiberglass handle",
    materials: ["Steel", "Wood"],
    dimensions: "≈ 330 mm × 130 mm",
    image: "/objects/hammer/main.jpg",
    gallery: ["/objects/hammer/main.jpg"],
    quote:
      "The hammer is older than language, and it still does its job better than any replacement.",
    quoteAuthor: "Archive note, Object 005",
    timeline: [
      {
        year: "Prehistory",
        title: "Stone on a stick",
        description:
          "Stone heads lashed to handles multiply force and reach.",
      },
      {
        year: "Antiquity",
        title: "Claw appears",
        description:
          "Roman blacksmiths add the claw, giving the hammer its dual-purpose form.",
      },
      {
        year: "Industrial era",
        title: "Forged heads",
        description:
          "Drop-forging makes hammer heads cheap, precise, and nearly unbreakable.",
      },
      {
        year: "Today",
        title: "Still the standard",
        description:
          "Every toolkit still leads with a claw hammer; no power tool has replaced the hand swing.",
      },
    ],
    sources: [
      { title: "Hammer — Wikipedia", url: "https://en.wikipedia.org/wiki/Hammer" },
    ],
    imageCredit: {
      creator: "Evan-Amos",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Claw-hammer.jpg",
      license: "Public domain",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "scissors",
    slug: "scissors",
    number: "006",
    name: "Scissors",
    category: "tools",
    year: "c. 1500 BCE",
    yearNum: -1500,
    designer: "Unknown — ancient",
    origin: "Mesopotamia / Ancient Egypt",
    description:
      "Two blades pivoted so that opposing forces meet at a single precise edge.",
    longDescription:
      "Scissors are a lever, a wedge, and a fulcrum arranged so that two modest forces are concentrated into one precise cut. Spring-loaded shears of bronze existed in the ancient world; the pivoted design with two finger rings — the form we still use — was standardized in Roman times and has not changed since.\n\nThe elegance is in the pivot. It fixes the blades in perfect opposition, so the cutting edge closes with a constant relationship between the two halves. No power, no adjustment, no maintenance beyond an occasional sharpening. The scissors transformed every craft that needed controlled cutting — cloth, hair, paper, metal — and have resisted every attempted replacement for three and a half thousand years.",
    whyTimeless: [
      "Opposing blades concentrate force into a clean, controllable cut that a single blade cannot match.",
      "The user's fingers and palm operate it with one hand, no tool, no setup.",
      "It is repairable by any grinder; its pivot is a single screw or rivet.",
    ],
    anatomy: [
      {
        title: "The blades",
        description:
          "Two wedges that meet in a line, shearing rather than crushing the material.",
      },
      {
        title: "The pivot",
        description:
          "A single point that holds the blades in constant opposition, however they are angled.",
      },
      {
        title: "The rings",
        description:
          "Finger loops transmit grip directly into leverage with no mechanism in between.",
      },
      {
        title: "Crossing handles",
        description:
          "Handles cross above the pivot so inward grip drives the blades inward, not apart.",
      },
    ],
    material: "Stainless or carbon steel",
    materials: ["Steel"],
    dimensions: "≈ 180 mm × 70 mm",
    image: "/objects/scissors/main.jpg",
    gallery: ["/objects/scissors/main.jpg"],
    quote:
      "Two blades, one pivot, one gesture. Nothing about it is accidental.",
    quoteAuthor: "Archive note, Object 006",
    timeline: [
      {
        year: "Antiquity",
        title: "Bronze shears",
        description:
          "Spring-loaded bronze shears are used across Mesopotamia and Egypt.",
      },
      {
        year: "Roman era",
        title: "The pivot",
        description:
          "Roman smiths introduce pivoted blades with finger rings — the modern form.",
      },
      {
        year: "1761",
        title: "Sheffield steel",
        description:
          "British steelmaking turns scissors into a precision, mass-produced instrument.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "From surgeons to barbers to schoolrooms, the pivoted scissors remain definitive.",
      },
    ],
    sources: [
      { title: "Scissors — Wikipedia", url: "https://en.wikipedia.org/wiki/Scissors" },
      { title: "Scissors — Britannica", url: "https://www.britannica.com/technology/scissors" },
    ],
    imageCredit: {
      creator: "Evan-amos",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Fiskars-scissors.jpg",
      license: "Public domain",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "padlock",
    slug: "padlock",
    number: "007",
    name: "Padlock",
    category: "mechanical",
    year: "c. 800 BCE",
    yearNum: -800,
    designer: "Unknown — Assyrian",
    origin: "Assyria (Nineveh)",
    description:
      "A portable lock. The oldest mechanical security device still in daily use.",
    longDescription:
      "The oldest known padlocks come from Nineveh in Assyria, around the eighth century BCE: a wooden bolt and shackle secured by movable pins. The principle — a bolt held closed by tumblers that a key lifts — survived into the Roman bronze locks and every padlock since.\n\nWhat makes the padlock timeless is its completeness. It is a lock that carries its own security with it, clamping onto a hasp, a chain, or a gate without needing to be built into anything. The modern padlock adds precision machining to ancient logic: spring-loaded pins, a rotating cylinder, and a shackle. But the story the user sees — close it, key it, walk away — is identical to the Assyrian original.",
    whyTimeless: [
      "Portable security: it protects whatever it is attached to, with no permanent installation.",
      "The pin-tumbler principle has survived three millennia of attack and counter-attack.",
      "Its function is legible — open or closed, locked or unlocked — with no hidden state.",
    ],
    anatomy: [
      {
        title: "The shackle",
        description:
          "A hardened steel loop that passes through the hasp and anchors the lock to what it protects.",
      },
      {
        title: "The body",
        description:
          "A housing of close-toleranced steel that shields the mechanism from prying and cutting.",
      },
      {
        title: "The cylinder",
        description:
          "A plug and pin stack that rotates only when the key lifts every pin to the shear line.",
      },
      {
        title: "The key",
        description:
          "A physical 'password' whose cut depth is matched to pin lengths — security as geometry.",
      },
    ],
    material: "Hardened steel, brass, bronze",
    materials: ["Steel", "Brass"],
    dimensions: "≈ 60 mm × 50 mm",
    image: "/objects/padlock/main.jpg",
    gallery: ["/objects/padlock/main.jpg"],
    quote:
      "A lock is not a machine to stop force. It is a message about where force is not welcome.",
    quoteAuthor: "Archive note, Object 007",
    timeline: [
      {
        year: "c. 800 BCE",
        title: "Nineveh",
        description:
          "The oldest surviving padlocks are the wooden pin locks of Assyria.",
      },
      {
        year: "Roman era",
        title: "Metal locks",
        description:
          "Bronze and iron padlocks with tumbler mechanisms spread across the empire.",
      },
      {
        year: "1848",
        title: "Pin tumbler",
        description:
          "Linus Yale refines the pin-tumbler cylinder, setting the modern standard.",
      },
      {
        year: "Today",
        title: "Everywhere",
        description:
          "From gym lockers to shipping containers, the padlock has never been displaced.",
      },
    ],
    sources: [
      { title: "Padlock — Wikipedia", url: "https://en.wikipedia.org/wiki/Padlock" },
      { title: "Locks — Britannica", url: "https://www.britannica.com/technology/lock-security-device" },
    ],
    imageCredit: {
      creator: "Jonatan Svensson Glad",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Padlock_infront_of_isolated_white_background_01.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "stapler",
    slug: "stapler",
    number: "008",
    name: "Stapler",
    category: "tools",
    year: "1866",
    yearNum: 1866,
    designer: "George W. McGill",
    origin: "United States",
    description:
      "A magazine of fasteners that binds documents through a single squeeze of the hand.",
    longDescription:
      "The stapler began in 1866, when George McGill patented a device to fasten papers with a single brass clip. His early machines held the clip in the hand and forced it through the paper by hand pressure — clumsy, but the first true stapler. The modern desktop form, with a spring-loaded magazine and a nested hinge, emerged over the following decades.\n\nThe genius is the magazine. A strip of staples is pushed forward by a spring, so the operator's only task is to press. Feeding, positioning, and closure are all automatic. It reduced a fiddly manual operation to a single gesture, and in doing so became as standard in offices as the desk itself.",
    whyTimeless: [
      "The spring-loaded magazine removes every step except pressing — the purest possible interface.",
      "Its 'legs clinch inward' mechanism makes one staple bind up to a few dozen pages reliably.",
      "The tool is nearly unbreakable and its fasteners are trivial to remove and replace.",
    ],
    anatomy: [
      {
        title: "The magazine",
        description:
          "A spring-driven rail that advances staples one at a time with no user effort.",
      },
      {
        title: "The striker",
        description:
          "A flat blade that drives a staple squarely through the paper stack.",
      },
      {
        title: "The anvil",
        description:
          "A grooved plate that bends the staple legs inward to clinch the paper together.",
      },
      {
        title: "The hinge",
        description:
          "A compound leverage hinge that multiplies hand force into a clean, powerful stroke.",
      },
    ],
    material: "Steel, plastic base",
    materials: ["Steel", "Plastic"],
    dimensions: "≈ 180 mm × 60 mm",
    image: "/objects/stapler/main.jpg",
    gallery: ["/objects/stapler/main.jpg"],
    quote:
      "The stapler removed the only difficult part of binding paper: the thought.",
    quoteAuthor: "Archive note, Object 008",
    timeline: [
      {
        year: "1866",
        title: "McGill's fastener",
        description:
          "George McGill patents the first paper-fastening stapler.",
      },
      {
        year: "1879",
        title: "Continuous magazine",
        description:
          "Later McGill machines introduce the feeding magazine of pre-formed staples.",
      },
      {
        year: "1930s",
        title: "The desktop stapler",
        description:
          "The swingline-style desktop stapler standardizes worldwide.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "Digital documents have thinned its work, but the stapler itself never required redesign.",
      },
    ],
    sources: [
      { title: "Stapler — Wikipedia", url: "https://en.wikipedia.org/wiki/Stapler" },
    ],
    imageCredit: {
      creator: "DifrancoBarnes",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Staplerblack.jpg",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "toothbrush",
    slug: "toothbrush",
    number: "009",
    name: "Toothbrush",
    category: "everyday",
    year: "1498",
    yearNum: 1498,
    designer: "Attributed to the Ming court",
    origin: "China",
    description:
      "A handle of bristles. In daily use since the fifteenth century, unchanged in its essentials.",
    longDescription:
      "The bristle toothbrush is traditionally credited to China in 1498, during the Ming dynasty, when hog bristles were set into handles of bone or bamboo. The idea traveled to Europe in the seventeenth century, and in 1938 nylon bristles — DuPont's 'Doctor West's Miracle Toothbrush' — removed the final reason for the design to change.\n\nIts form is a solved problem. A row of short bristles fixed to a handle is the minimal configuration that cleans all tooth surfaces from every angle, rinses clean, and dries between uses. Electric brushes have flourished alongside it, but the manual brush has held its place for over five hundred years — because the geometry of bristles-on-a-stick is hard to improve, and impossible to make more reliable.",
    whyTimeless: [
      "Bristles of fixed length and stiffness clean effectively with no adjustment or mechanism.",
      "It is cheap, disposable, hygienic, and self-evident in use.",
      "Its only real innovations have been material — first nylon, then softer bristles — never structural.",
    ],
    anatomy: [
      {
        title: "The bristles",
        description:
          "Short, packed filaments sized to reach every tooth surface and interstitial gap.",
      },
      {
        title: "The head",
        description:
          "A compact face that fits the mouth without requiring any angle-adjusting feature.",
      },
      {
        title: "The neck",
        description:
          "A slight offset lets the brush head reach the rear molars without the handle hitting the cheek.",
      },
      {
        title: "The handle",
        description:
          "A grippable lever long enough for full mechanical advantage over brushing force.",
      },
    ],
    material: "Nylon bristles, plastic handle",
    materials: ["Plastic", "Bone"],
    dimensions: "≈ 190 mm × 25 mm",
    image: "/objects/toothbrush/main.jpg",
    gallery: ["/objects/toothbrush/main.jpg"],
    quote:
      "Five hundred years of daily use, and the only essential change was trading hog bristle for nylon.",
    quoteAuthor: "Archive note, Object 009",
    timeline: [
      {
        year: "1498",
        title: "China",
        description:
          "Bristle brushes appear in Ming-dynasty China, traditionally credited to Emperor Hongzhi.",
      },
      {
        year: "17th century",
        title: "Europe",
        description:
          "Travelers and traders carry the toothbrush to Europe.",
      },
      {
        year: "1938",
        title: "Nylon",
        description:
          "DuPont introduces nylon bristles; the modern mass-market brush is born.",
      },
      {
        year: "Today",
        title: "Still manual",
        description:
          "Despite the electric brush, the manual toothbrush remains the most common dental tool.",
      },
    ],
    sources: [
      { title: "Toothbrush — Wikipedia", url: "https://en.wikipedia.org/wiki/Toothbrush" },
    ],
    imageCredit: {
      creator: "Jonas Bergsten",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Toothbrush_20050716_004.jpg",
      license: "Public domain",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "notebook",
    slug: "notebook",
    number: "010",
    name: "Notebook",
    category: "writing",
    year: "1st century CE",
    yearNum: -99,
    designer: "Unknown — Roman codex",
    origin: "Roman Empire",
    description:
      "Stacked pages bound at one edge. The interface between human memory and written record.",
    longDescription:
      "The notebook descends from the codex — bound leaves that replaced the scroll in the first century CE because they could be opened to any page, written on both sides, and indexed at will. The Roman wax tablet, a stack of hinged wooden leaves, was its direct ancestor; by the Renaissance, 'table-books' of bound paper were the working memory of merchants and scholars.\n\nThe form is essentially perfect as an interface. Pages open flat, are numbered, and are filled in order. Binding one edge fixes the sequence; the other edges remain free for margin notes. Every electronic attempt to replace it — from PDA to tablet — has ultimately preserved its metaphors: 'pages', 'notebooks', 'flip', 'bookmarks'. The notebook shaped our idea of memory itself.",
    whyTimeless: [
      "An interface so natural it named the metaphors of every digital successor.",
      "Bound at one edge, it preserves order, opens flat, and writes on both sides.",
      "Its cost is near zero and its shelf life measured in generations.",
    ],
    anatomy: [
      {
        title: "The leaves",
        description:
          "Stacked sheets sized and folded so the book lies flat and pages open predictably.",
      },
      {
        title: "The binding",
        description:
          "One edge is fixed, all others free — the structural trick behind the codex.",
      },
      {
        title: "The cover",
        description:
          "Rigid protection that keeps the pages clean and the work portable.",
      },
      {
        title: "The margin",
        description:
          "Reserved space at the edges for annotation — the notebook's built-in dialogue with its author.",
      },
    ],
    material: "Paper, board, cloth or leather",
    materials: ["Paper", "Wood"],
    dimensions: "≈ 210 mm × 148 mm",
    image: "/objects/notebook/main.jpg",
    gallery: ["/objects/notebook/main.jpg"],
    quote:
      "The notebook is the first memory prosthesis, and it has never been improved upon.",
    quoteAuthor: "Archive note, Object 010",
    timeline: [
      {
        year: "1st c. CE",
        title: "The codex",
        description:
          "Bound leaves replace the scroll in the Roman world.",
      },
      {
        year: "Renaissance",
        title: "Table-books",
        description:
          "Bound paper notebooks become the working memory of European commerce.",
      },
      {
        year: "19th century",
        title: "Mass production",
        description:
          "Cheap paper and bindery presses make notebooks universal.",
      },
      {
        year: "Today",
        title: "Both media",
        description:
          "Digital tools imitate it; the physical notebook is still filled daily worldwide.",
      },
    ],
    sources: [
      { title: "Notebook — Wikipedia", url: "https://en.wikipedia.org/wiki/Notebook" },
      { title: "Codex — Wikipedia", url: "https://en.wikipedia.org/wiki/Codex" },
    ],
    imageCredit: {
      creator: "Homonihilis",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Written_in_moleskine.JPG",
      license: "Public domain",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "ruler",
    slug: "ruler",
    number: "011",
    name: "Ruler",
    category: "tools",
    year: "c. 2600 BCE",
    yearNum: -2600,
    designer: "Unknown — Indus Valley",
    origin: "Indus Valley Civilization",
    description:
      "A straight edge marked with equal units. The standard by which all other standards are made.",
    longDescription:
      "The oldest known ruler-like object — an ivory rod with precisely spaced markings — was found in the Indus Valley civilization around 2600 BCE, its divisions accurate enough to suggest a decimal system. Straight edges with marks exist in virtually every literate culture since, because measurement is the foundation of building, trade, and science.\n\nThe ruler is metadata made physical: it does nothing itself except fix a standard, and everything else is built from it. Its straightness is its authority. A ruler only works if its edge is true and its markings equal — and that requirement has not changed in four and a half thousand years. Laser levels and digital calipers have joined it, but the humble marked straight edge remains the reference point, the instrument you verify other instruments against.",
    whyTimeless: [
      "It encodes a standard in a portable object — measurement without tools, instruments, or power.",
      "Its straightness and equal divisions are verifiable by the user at any moment.",
      "It works with pencil, chalk, knife, or eye — universal across every craft.",
    ],
    anatomy: [
      {
        title: "The edge",
        description:
          "A precisely true straight surface that defines a line and a reference plane.",
      },
      {
        title: "The scale",
        description:
          "Equal divisions engraved along the edge — the physical encoding of a unit.",
      },
      {
        title: "The face",
        description:
          "A flat, thin body that lies on the work and guides marking tools directly.",
      },
      {
        title: "The material",
        description:
          "Wood, metal, or plastic chosen to resist wear and stay dimensionally stable.",
      },
    ],
    material: "Wood, steel, or rigid plastic",
    materials: ["Wood", "Steel", "Plastic"],
    dimensions: "≈ 300 mm × 40 mm",
    image: "/objects/ruler/main.jpg",
    gallery: ["/objects/ruler/main.jpg"],
    quote:
      "Every surveyor's station, every machine shop, every school desk still begins with a straight line.",
    quoteAuthor: "Archive note, Object 011",
    timeline: [
      {
        year: "c. 2600 BCE",
        title: "Indus Valley",
        description:
          "The earliest surviving ruler-like rod bears precisely spaced decimal divisions.",
      },
      {
        year: "Antiquity",
        title: "Cubits and feet",
        description:
          "Egyptian and Roman standards fix the straight marked edge as a civic instrument.",
      },
      {
        year: "19th century",
        title: "Metric standard",
        description:
          "The metre replaces royal measurements; the ruler's form is unchanged.",
      },
      {
        year: "Today",
        title: "Universal",
        description:
          "Combined scales, folding rules, and laser measures coexist with the simple ruler.",
      },
    ],
    sources: [
      { title: "Ruler — Wikipedia", url: "https://en.wikipedia.org/wiki/Ruler" },
      { title: "Indus Valley civilization — Britannica", url: "https://www.britannica.com/topic/Indus-civilization" },
    ],
    imageCredit: {
      creator: "Rama",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Measuring_ruler-N_1538-IMG_4492-white.jpg",
      license: "CC BY-SA 3.0 fr",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/fr/deed.en",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "ladder",
    slug: "ladder",
    number: "012",
    name: "Ladder",
    category: "tools",
    year: "c. 10,000 BCE",
    yearNum: -10000,
    designer: "Unknown — prehistoric",
    origin: "Mesolithic Europe",
    description:
      "Two rails, a series of steps. The oldest image of one is ten thousand years old.",
    longDescription:
      "The ladder appears in Mesolithic rock painting at Cogul in Spain, roughly ten thousand years old — a series of horizontal rungs between two vertical rails, exactly as drawn today. It is one of the oldest recognizable objects in human imagery, because the problem it solves is as old as height itself.\n\nThe ladder is structure with the excess removed. Two rails carry the weight; a ladder of rungs lets the human body climb by distributing effort across the legs instead of the arms. Every powered alternative — scaffolding, hoists, lifts — exists, and the plain ladder still stands against walls everywhere, because it is cheap, portable, and needs no power, fuel, or license. Its geometry is so stable that it has survived essentially unchanged since the last ice age.",
    whyTimeless: [
      "A minimal structure that converts leg strength into vertical travel with no mechanism.",
      "It folds nothing, breaks rarely, and can be made from a branch or an aircraft-grade rail.",
      "Its use is instantly legible — every culture recognizes a ladder on sight.",
    ],
    anatomy: [
      {
        title: "The rails",
        description:
          "Two vertical members that carry the load and keep the rungs in fixed opposition.",
      },
      {
        title: "The rungs",
        description:
          "Horizontal steps spaced to human stride, each a simple beam in compression.",
      },
      {
        title: "The lean",
        description:
          "A slight spread at the base gives the whole structure its self-stabilizing stance.",
      },
      {
        title: "The apex",
        description:
          "Often hinged into an A-frame, allowing free-standing use with no wall required.",
      },
    ],
    material: "Wood, aluminium, or fibreglass",
    materials: ["Wood", "Steel", "Composite"],
    dimensions: "≈ 3000 mm × 500 mm",
    image: "/objects/ladder/main.jpg",
    gallery: ["/objects/ladder/main.jpg"],
    quote:
      "Ten thousand years of climbing, and the drawing at Cogul could be hanging in a hardware store.",
    quoteAuthor: "Archive note, Object 012",
    timeline: [
      {
        year: "c. 10,000 BCE",
        title: "Cogul",
        description:
          "The Mesolithic rock painting at Cogul, Spain, depicts a figure climbing a ladder.",
      },
      {
        year: "Antiquity",
        title: "Assault and orchard",
        description:
          "Ladders serve siege warfare and agriculture across ancient civilizations.",
      },
      {
        year: "Modern era",
        title: "Aluminium",
        description:
          "Light alloy and A-frame hinges turn the ladder into a domestic tool.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The plain ladder remains the cheapest way to put a person two storeys up.",
      },
    ],
    sources: [
      { title: "Ladder — Wikipedia", url: "https://en.wikipedia.org/wiki/Ladder" },
      { title: "Cogul rock art — Wikipedia", url: "https://en.wikipedia.org/wiki/La_Cogul" },
    ],
    imageCredit: {
      creator: "Santeri Viinamäki",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Wooden_red_step_ladder.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "bicycle-bell",
    slug: "bicycle-bell",
    number: "013",
    name: "Bicycle Bell",
    category: "mechanical",
    year: "1887",
    yearNum: 1887,
    designer: "John Richard Dedicoat",
    origin: "United Kingdom",
    description:
      "A dome and a striker, thumb-driven. The politest piece of safety equipment ever invented.",
    longDescription:
      "Bicycles have carried bells almost since they carried riders. Patents for bicycle bells appeared in the late 1870s, and the familiar thumb-operated dome bell was established by the 1880s. It is a percussion instrument reduced to its minimum: a spring-loaded striker, a thumb lever, and a resonant brass dome.\n\nThe bell succeeded because it is a complete social mechanism. It announces presence without confrontation, warning without threatening — a message of the user's choosing, at the user's pace. Mechanical, battery-powered, and electronic horns have all tried to replace it; the tiny brass dome still hangs on handlebars, because it is the only warning device whose sound is a request rather than a command.",
    whyTimeless: [
      "A single moving lever produces a sound loud enough to matter and gentle enough to be polite.",
      "It is self-powered — the thumb provides both the energy and the discretion.",
      "Its placement, reach, and sound were optimized for the handlebar and have never improved.",
    ],
    anatomy: [
      {
        title: "The dome",
        description:
          "A resonant brass or steel cap that rings, rather than honks, when struck.",
      },
      {
        title: "The striker",
        description:
          "A spring-loaded hammer that returns after each press, ready for the next ring.",
      },
      {
        title: "The lever",
        description:
          "A thumb paddle sized for a gloved finger, with travel short enough to stay in control.",
      },
      {
        title: "The clamp",
        description:
          "A simple band that mounts the bell in reach of the thumb without tools of its own.",
      },
    ],
    material: "Brass or steel dome, steel spring",
    materials: ["Brass", "Steel"],
    dimensions: "≈ 45 mm diameter",
    image: "/objects/bicycle-bell/main.jpg",
    gallery: ["/objects/bicycle-bell/main.jpg"],
    quote:
      "The bicycle bell solved a problem that no sensor, light, or horn has solved better: how to ask, not demand.",
    quoteAuthor: "Archive note, Object 013",
    timeline: [
      {
        year: "1870s",
        title: "Early patents",
        description:
          "Bicycle bells appear in patents within a decade of the bicycle's popularization.",
      },
      {
        year: "1887",
        title: "Thumb bell",
        description:
          "John Richard Dedicoat patents the dome-and-striker bicycle bell.",
      },
      {
        year: "20th century",
        title: "Standard equipment",
        description:
          "The bell becomes legally required on many bicycles and universally fitted.",
      },
      {
        year: "Today",
        title: "Still ringing",
        description:
          "Electronic alternatives exist; the thumb bell remains the default warning device.",
      },
    ],
    sources: [
      { title: "Bicycle bell — Wikipedia", url: "https://en.wikipedia.org/wiki/Bicycle_bell" },
    ],
    imageCredit: {
      creator: "Singlespeedfahrer",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Bicycle_bell_by_Rose_Bikes.jpg",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "clothes-hanger",
    slug: "clothes-hanger",
    number: "014",
    name: "Clothes Hanger",
    category: "everyday",
    year: "1903",
    yearNum: 1903,
    designer: "Attributed to Albert J. Parkhouse",
    origin: "United States",
    description:
      "A triangle of wire that keeps a garment's shoulders in shape while it waits for its wearer.",
    longDescription:
      "The wire coat hanger is traditionally credited to Albert J. Parkhouse, an employee of the Timberlake Wire and Novelty Company, who in 1903 shaped a length of wire to hang a coat in the company's crowded cloakroom. The story is likely embellished, but the date is right: the hanger emerged from wire-bending industries around the turn of the century and never left.\n\nThe form is three lines. The triangle distributes the garment's weight across the shoulders; the hook transfers it to a rail. It holds clothes in their worn shape, keeps them ventilated, and packs flat against the back of a wardrobe. Few objects have ever done more work with less material — a few grams of steel, with an open loop so that the collar can pass through it.",
    whyTimeless: [
      "Weight is spread across the garment's shoulders, preserving its cut between wearings.",
      "A few grams of wire store a suit in perfect shape and disappear when not in use.",
      "The open hook loop lets the hanger pass through collars without unbuttoning the garment.",
    ],
    anatomy: [
      {
        title: "The shoulders",
        description:
          "The triangle's upper arms follow the garment's own shoulder line, so it hangs as worn.",
      },
      {
        title: "The bar",
        description:
          "The lower edge supports trousers or acts as a cross-brace that keeps the arms splayed.",
      },
      {
        title: "The hook",
        description:
          "An open loop transfers weight to the rail and slides through narrow collar openings.",
      },
      {
        title: "The gauge",
        description:
          "Wire diameter and bend radius are tuned to hold heavy coats without creasing them.",
      },
    ],
    material: "Steel wire, plastic coating optional",
    materials: ["Steel", "Wood", "Plastic"],
    dimensions: "≈ 420 mm × 200 mm",
    image: "/objects/clothes-hanger/main.jpg",
    gallery: ["/objects/clothes-hanger/main.jpg"],
    quote:
      "Three lines of wire hold the entire weight of a wardrobe, invisible and indestructible.",
    quoteAuthor: "Archive note, Object 014",
    timeline: [
      {
        year: "1869",
        title: "Wooden hangers",
        description:
          "Earlier garment-hanging devices exist in wood and bent metal.",
      },
      {
        year: "1903",
        title: "Wire hanger",
        description:
          "The wire hanger is popularized, traditionally credited to Albert J. Parkhouse.",
      },
      {
        year: "1930s",
        title: "Dry cleaning",
        description:
          "The wire hanger becomes the standard vehicle for returning pressed garments.",
      },
      {
        year: "Today",
        title: "Ten billion",
        description:
          "An estimated several billion are produced yearly — and most are used once.",
      },
    ],
    sources: [
      { title: "Clothes hanger — Wikipedia", url: "https://en.wikipedia.org/wiki/Clothes_hanger" },
    ],
    imageCredit: {
      creator: "Stilfehler",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Wire_clothes_hanger.png",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "tape-measure",
    slug: "tape-measure",
    number: "015",
    name: "Tape Measure",
    category: "tools",
    year: "1829",
    yearNum: 1829,
    designer: "James Chesborough / Alvin J. Fellows",
    origin: "United States",
    description:
      "A flexible ruler that rolls into your pocket, extends to the length of a room, and springs back.",
    longDescription:
      "The flexible tape measure began with James Chesborough, who in 1829 produced a steel tape that remained straight when extended but coiled when stored. Its modern, pocketable form came in 1868, when Alvin J. Fellows patented a spring-return case with a locking clip — the basis of every measuring tape since.\n\nThe tape is a ruler that negotiated away its own rigidity. Flat when drawn out, so it can measure straight lines and wrap around curves; coiled when released, so it can travel in a pocket. Its spring and its concave cross-section (which lets it bridge gaps without sagging) are the entire technology. Today's laser measures are faster, but they cannot feel a curve, follow a wall, or hang from a nail — so the steel tape still rides in every toolbox.",
    whyTimeless: [
      "A straight edge when needed, a coil in the pocket — flexibility without losing measurement.",
      "Its concave cross-section spans open gaps, self-supporting where a ruler would fall.",
      "Zero maintenance: a spring, a strip of steel, and a tab.",
    ],
    anatomy: [
      {
        title: "The tape",
        description:
          "A concave steel ribbon that stays straight over gaps but rolls compactly when stored.",
      },
      {
        title: "The case",
        description:
          "A palm-sized housing with a spring drum that rewinds the tape automatically.",
      },
      {
        title: "The tab",
        description:
          "A hooked end that catches a surface or a nail, and slides slightly to measure inside or outside.",
      },
      {
        title: "The lock",
        description:
          "A thumb brake that holds the tape at length for one-hand marking.",
      },
    ],
    material: "Steel tape, plastic or steel case",
    materials: ["Steel", "Plastic"],
    dimensions: "≈ 70 mm × 70 mm case",
    image: "/objects/tape-measure/main.jpg",
    gallery: ["/objects/tape-measure/main.jpg"],
    quote:
      "A measuring instrument small enough to lose and accurate enough to build with.",
    quoteAuthor: "Archive note, Object 015",
    timeline: [
      {
        year: "1829",
        title: "Steel tape",
        description:
          "James Chesborough produces a steel measuring tape in Connecticut.",
      },
      {
        year: "1868",
        title: "Spring return",
        description:
          "Alvin J. Fellows patents the spring-return tape with locking clip.",
      },
      {
        year: "20th century",
        title: "The pocket rule",
        description:
          "The spring tape becomes the universal handyman's measure.",
      },
      {
        year: "Today",
        title: "Still carried",
        description:
          "Laser measures coexist, but the steel tape remains in every toolbox.",
      },
    ],
    sources: [
      { title: "Tape measure — Wikipedia", url: "https://en.wikipedia.org/wiki/Tape_measure" },
    ],
    imageCredit: {
      creator: "Junkyardsparkle",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Lufkin_Universal_50_ft_tape_measure.jpg",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "door-handle",
    slug: "door-handle",
    number: "016",
    name: "Door Handle",
    category: "mechanical",
    year: "1878",
    yearNum: 1878,
    designer: "Osbourn Dorset (lever latch)",
    origin: "United States / Britain",
    description:
      "The first thing you touch in any building. A latch turned by a single universal gesture.",
    longDescription:
      "Door latches are ancient, but the modern lever handle — a horizontal bar whose downward turn releases the latch — emerged in the late nineteenth century, with the Osbourn Dorset latch patent of 1878 among its milestones. It replaced the knob's twisting motion with a push, a change that made doors usable by a hand with a full load of groceries, an arm in a cast, or an elbow.\n\nThe handle works through a shared expectation: push down, door opens. It is installed identically in homes, hotels, hospitals, and offices, and every adult in every culture understands it without instruction. The lever is a simple machine — a moment arm whose length is calibrated so that the lightest touch overcomes the latch spring. It is, in short, the most-touched piece of industrial design most people will ever use.",
    whyTimeless: [
      "A single downward gesture opens any door, hand-free, arm-full, or impaired — universal accessibility.",
      "The lever's length multiplies a light force into enough torque for the latch.",
      "Its 'push to open' grammar is shared across the world, needing no legend or label.",
    ],
    anatomy: [
      {
        title: "The lever",
        description:
          "A moment arm whose length converts a light press into sufficient latch-release torque.",
      },
      {
        title: "The rose",
        description:
          "The backplate that centers the spindle, seats the mechanism, and hides the fixings.",
      },
      {
        title: "The latch",
        description:
          "A spring-loaded bolt that holds the door shut until the lever withdraws it.",
      },
      {
        title: "The strike",
        description:
          "The keeper plate on the frame that receives the bolt and holds the door closed.",
      },
    ],
    material: "Brass, steel, or die-cast alloy",
    materials: ["Brass", "Steel"],
    dimensions: "≈ 150 mm lever",
    image: "/objects/door-handle/main.jpg",
    gallery: ["/objects/door-handle/main.jpg"],
    quote:
      "Every hand in the world already knows how to use a door handle. That knowledge is the design.",
    quoteAuthor: "Archive note, Object 016",
    timeline: [
      {
        year: "Antiquity",
        title: "Latch and hasp",
        description:
          "Simple bolts and latches guard doors across the ancient world.",
      },
      {
        year: "1878",
        title: "Lever latch",
        description:
          "The Osbourn Dorset patent establishes the lever-operated latch door handle.",
      },
      {
        year: "20th century",
        title: "Universal grip",
        description:
          "Standards of height and lever shape make the handle universal and accessible.",
      },
      {
        year: "Today",
        title: "Every door",
        description:
          "The lever handle has displaced the knob in commercial architecture worldwide.",
      },
    ],
    sources: [
      { title: "Door handle — Wikipedia", url: "https://en.wikipedia.org/wiki/Door_handle" },
      { title: "Door furniture — Britannica", url: "https://www.britannica.com/technology/door" },
    ],
    imageCredit: {
      creator: "Philip Johnson",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Philip_Johnson,_Door_Handle_with_Thumb_Press,_c._1937,_NGA_23518.jpg",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "matchbox",
    slug: "matchbox",
    number: "017",
    name: "Matchbox",
    category: "household",
    year: "1826",
    yearNum: 1826,
    designer: "John Walker (friction match)",
    origin: "England",
    description:
      "Fire, packaged. A splinter of wood whose strike is the only machine you need.",
    longDescription:
      "In 1826, the English chemist John Walker noticed that a stick coated with a dried mixture of antimony sulphide, potassium chlorate, and gum ignited when drawn across a rough surface. He had invented the friction match — fire delivered at the end of a splinter, with no tinder, no flint, no furnace.\n\nFriction matches became a sensation, and the matchbox was born to carry them safely. The box is the design partner of the match: the striking surface is built into its side, so the box and its contents form a complete fire-making kit that fits in a coat pocket. Safety matches, developed by Gustaf Erik Pasch and the Lundström brothers later in the century, moved the phosphorus to the striking surface and ended accidental ignition. A century and a half later, the strike-anywhere match and its box remain essentially unchanged.",
    whyTimeless: [
      "The entire technology of fire is contained in a box small enough to forget you are carrying.",
      "The striking surface travels with the matches — no separate flint, steel, or tool required.",
      "It fails gracefully: if wet, a single match is lost, not the ability to relight.",
    ],
    anatomy: [
      {
        title: "The splint",
        description:
          "A thin wood or paper stick with a coated head that ignites by friction alone.",
      },
      {
        title: "The head",
        description:
          "A precise chemical mixture that combusts at a controlled, brief, high temperature.",
      },
      {
        title: "The striker",
        description:
          "A roughened strip on the box, matched to the head chemistry to ignite reliably.",
      },
      {
        title: "The sleeve",
        description:
          "A tight-fitting box that shields the matches from friction and moisture in transit.",
      },
    ],
    material: "Wood or cardboard splint, chemical head, paper box",
    materials: ["Paper", "Wood"],
    dimensions: "≈ 55 mm × 35 mm × 15 mm",
    image: "/objects/matchbox/main.jpg",
    gallery: ["/objects/matchbox/main.jpg"],
    quote:
      "Humans spent most of their history relighting fire by labor. The matchbox put a complete hearth in a pocket.",
    quoteAuthor: "Archive note, Object 017",
    timeline: [
      {
        year: "1826",
        title: "Friction match",
        description:
          "John Walker invents the first friction match in Stockton-on-Tees, England.",
      },
      {
        year: "1844",
        title: "Safety match",
        description:
          "Swedish inventors move phosphorus to the striking surface, making matches safe to carry.",
      },
      {
        year: "1855",
        title: "The matchbox",
        description:
          "The Lundström brothers manufacture the safety match with its built-in striker.",
      },
      {
        year: "Today",
        title: "Lighter's rival",
        description:
          "Lighters displaced it in pockets; the matchbox still survives for candle, stove, and ritual.",
      },
    ],
    sources: [
      { title: "Match — Wikipedia", url: "https://en.wikipedia.org/wiki/Match" },
      { title: "Matchbox — Wikipedia", url: "https://en.wikipedia.org/wiki/Matchbox" },
    ],
    imageCredit: {
      creator: "Korall",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Wedding_or_engagement_Matchbox.JPG",
      license: "Public domain",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "pencil",
    slug: "pencil",
    number: "018",
    name: "Pencil",
    category: "writing",
    year: "1795",
    yearNum: 1795,
    designer: "Nicolas-Jacques Conté",
    origin: "France",
    description:
      "Graphite in a wooden sleeve. Error-tolerant, erasable, and structurally perfect for two centuries.",
    longDescription:
      "Graphite was discovered in Borrowdale, England in 1564 and wrapped in string, then in hollowed wood. The modern pencil — a clay-and-graphite core baked and encased in a hexagonal wooden sleeve — was perfected in 1795 by the French chemist Nicolas-Jacques Conté, after the Napoleonic wars cut France off from English graphite. Conté found he could mix powdered graphite with clay, fire it, and adjust hardness at will — a system still in use.\n\nThe pencil is the only writing instrument that forgives. It writes in any orientation, marks almost any surface, works wet, dry, hot, or cold, and can be removed with a rubber. Its hexagonal body stops it rolling off a desk; its wood is both casing and shaving. The fountain pen needs maintenance, the ballpoint needs a specific angle, but the pencil asks for nothing but a sharpener that is itself optional.",
    whyTimeless: [
      "It writes on any surface, in any position, in any temperature, and can always be erased.",
      "Its hexagonal casing prevents rolling and locates the grip without looking.",
      "The clay-to-graphite ratio tunes hardness precisely — a two-century-old, still-standard system.",
    ],
    anatomy: [
      {
        title: "The core",
        description:
          "A fired clay-and-graphite rod whose ratio sets every grade from 9H to 9B.",
      },
      {
        title: "The casing",
        description:
          "Cedar, planed hexagonal, holds the core and sharpens down to a self-renewing point.",
      },
      {
        title: "The point",
        description:
          "A wear-regenerating tip that needs no maintenance beyond an optional sharpen.",
      },
      {
        title: "The body",
        description:
          "Long, light, and grippable — comfortable for a signature or a cathedral of notes.",
      },
    ],
    material: "Cedar casing, graphite and clay core",
    materials: ["Wood", "Composite"],
    dimensions: "≈ 175 mm × 8 mm",
    image: "/objects/pencil/main.jpg",
    gallery: ["/objects/pencil/main.jpg"],
    quote:
      "No other tool is so tolerant of a shaking hand, a wet glove, or a thought worth crossing out.",
    quoteAuthor: "Archive note, Object 018",
    timeline: [
      {
        year: "1564",
        title: "Borrowdale",
        description:
          "A pure graphite deposit is discovered in Cumberland, England.",
      },
      {
        year: "1795",
        title: "Conté's process",
        description:
          "Nicolas-Jacques Conté patents the baked clay-and-graphite pencil.",
      },
      {
        year: "19th century",
        title: "The modern pencil",
        description:
          "Machinery mass-produces pencils with adjustable hardness grades.",
      },
      {
        year: "Today",
        title: "Undisplaced",
        description:
          "Despite keyboards and styluses, the pencil remains the default instrument of first drafts.",
      },
    ],
    sources: [
      { title: "Pencil — Wikipedia", url: "https://en.wikipedia.org/wiki/Pencil" },
    ],
    imageCredit: {
      creator: "999real",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Yellow_Faber_Castell_2B_pencil_side_no_logo.jpg",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "comb",
    slug: "comb",
    number: "019",
    name: "Comb",
    category: "everyday",
    year: "c. 5000 BCE",
    yearNum: -5000,
    designer: "Unknown — prehistoric",
    origin: "Ancient Egypt / China",
    description:
      "A spine and a row of teeth. Among the oldest tools humans still reach for every morning.",
    longDescription:
      "Combs of bone, ivory, and wood have been found in settlements from ancient Egypt to early China, making the comb one of the oldest personal tools in existence. Its function is grooming, but its deeper purpose is social: civilizations have used combs for hygiene, status, ornament, and ritual for thousands of years.\n\nThe comb's design is a solved puzzle of spacing. Teeth must be close enough to detangle, far enough apart to glide through hair without tearing, and stiff enough to hold their pitch. That spacing — calibrated to human hair — has not fundamentally changed, even as materials moved from bone and horn to celluloid, then plastic. The structure is so minimal that it could not be reduced: remove the spine and it breaks; remove the teeth and it is a stick.",
    whyTimeless: [
      "A row of evenly spaced teeth is the minimum structure that detangles without tearing.",
      "Its spacing is calibrated to human hair and has never needed recalibration.",
      "It cleans itself, stores flat, and survives for decades in a pocket or drawer.",
    ],
    anatomy: [
      {
        title: "The spine",
        description:
          "The backbone that holds every tooth in fixed alignment under repeated stress.",
      },
      {
        title: "The teeth",
        description:
          "Flexible, rounded tines whose spacing matches the scale of human hair.",
      },
      {
        title: "The pitch",
        description:
          "The even gap between teeth — fine enough to untangle, open enough to glide.",
      },
      {
        title: "The ends",
        description:
          "Often widened or rounded, doubling as a parting tool or a finishing edge.",
      },
    ],
    material: "Plastic (historical: bone, ivory, wood)",
    materials: ["Plastic", "Bone", "Wood"],
    dimensions: "≈ 150 mm × 35 mm",
    image: "/objects/comb/main.jpg",
    gallery: ["/objects/comb/main.jpg"],
    quote:
      "A strip of teeth, unchanged in seven thousand years, still the first tool touched each morning.",
    quoteAuthor: "Archive note, Object 019",
    timeline: [
      {
        year: "Prehistory",
        title: "Bone and ivory",
        description:
          "Combs appear in Neolithic settlements across Egypt and China.",
      },
      {
        year: "Antiquity",
        title: "Status object",
        description:
          "Elaborate combs of ivory and gold mark rank across ancient cultures.",
      },
      {
        year: "19th century",
        title: "Celluloid",
        description:
          "Early plastics make combs cheap and universally available.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The humble comb's geometry persists even as grooming tools multiply.",
      },
    ],
    sources: [
      { title: "Comb — Wikipedia", url: "https://en.wikipedia.org/wiki/Comb" },
    ],
    imageCredit: {
      creator: "Crisco 1492",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Plastic_comb,_2015-06-07.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "bottle-opener",
    slug: "bottle-opener",
    number: "020",
    name: "Bottle Opener",
    category: "household",
    year: "1892",
    yearNum: 1892,
    designer: "After William Painter's crown cork",
    origin: "United States",
    description:
      "A notch that pries a sealed crown into celebration. The companion object to a perfect closure.",
    longDescription:
      "In 1892, William Painter patented the crown cork — a crimped metal cap that sealed bottles better than anything before it. A closure that good needed a deliberate tool to remove it, and the bottle opener was born to complete the system: a flattened piece of steel with a notch that hooks under the cap's edge and pries it off against the rim.\n\nThe opener is a lever in its purest form. The user supplies force; the geometry concentrates it into a single lifting point under the cap. Its shape — a handle, a notch, a hinge line — has proven so efficient that it appears on pocket knives, walls, keychains, and bars across the world, in tens of thousands of variations of one unalterable mechanism. Every attempt to 'improve' the crown cork (twist-off caps, pull rings) simply relocated the problem the opener had already solved.",
    whyTimeless: [
      "A lever that converts a light pull into enough force to defeat a crimped metal seal.",
      "The crown cork's sealing reliability and the opener's simplicity are a matched pair.",
      "It is a flat piece of steel: unbreakable, pocketable, and understandable at a glance.",
    ],
    anatomy: [
      {
        title: "The notch",
        description:
          "A lip that hooks beneath the crown's skirt to grip the cap's edge.",
      },
      {
        title: "The hinge",
        description:
          "The point where the opener rests against the bottle rim, defining the lever's fulcrum.",
      },
      {
        title: "The handle",
        description:
          "A lever arm long enough for a comfortable one-handed pull.",
      },
      {
        title: "The tooth",
        description:
          "A small nub that pierces or grips the cap to prevent slippage during the pry.",
      },
    ],
    material: "Steel, often zinc-plated",
    materials: ["Steel"],
    dimensions: "≈ 100 mm × 30 mm",
    image: "/objects/bottle-opener/main.jpg",
    gallery: ["/objects/bottle-opener/main.jpg"],
    quote:
      "Every cap ever popped is a small argument for how little design needs to change.",
    quoteAuthor: "Archive note, Object 020",
    timeline: [
      {
        year: "1892",
        title: "Crown cork",
        description:
          "William Painter patents the crown cork, the closure that demands a dedicated opener.",
      },
      {
        year: "1890s",
        title: "The opener",
        description:
          "Simple prying openers appear alongside the crown cork to complete the system.",
      },
      {
        year: "20th century",
        title: "Everywhere",
        description:
          "The opener migrates to walls, bars, knives, and keychains in endless variations.",
      },
      {
        year: "Today",
        title: "Still popped",
        description:
          "Twist-offs and rings exist, yet the crown cork and its opener remain the standard.",
      },
    ],
    sources: [
      { title: "Bottle opener — Wikipedia", url: "https://en.wikipedia.org/wiki/Bottle_opener" },
      { title: "Crown cork — Wikipedia", url: "https://en.wikipedia.org/wiki/Crown_cork" },
    ],
    imageCredit: {
      creator: "Lemp Brewing Company",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Cerva_Bottle_Opener.jpg",
      license: "Public domain",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "fork",
    slug: "fork",
    number: "021",
    name: "Fork",
    category: "household",
    year: "c. 11th century CE",
    yearNum: 1050,
    designer: "Unknown — Byzantine court",
    origin: "Byzantine Empire / Europe",
    description:
      "Two or four tines on a handle, sized to the geometry of a plate and a human mouth.",
    longDescription:
      "Forks of some kind appeared at the Byzantine court around the eleventh century, spread slowly through Italy, and took centuries to be accepted across Europe — clerics called them excessive, and table manners made the fork a symbol of refinement before it became a necessity. The modern four-tine dinner fork, curved to scoop and sized to fit beside a spoon, was settled only in the nineteenth century when mass production standardized place settings.\n\nEvery tine of a fork is doing a different job: piercing, lifting, steadying, and dividing. Its four-pointed geometry is calibrated to push against a plate without bending, carry a mouthful without spilling, and separate food with a single hand. The form has changed less since the Victorians fixed it than any other piece of cutlery — and unlike the spoon and knife, the fork had to be invented deliberately, which makes its final stability all the more telling.",
    whyTimeless: [
      "Tines are an answer to a specific ergonomic problem — lifting food to the mouth — that no alternative has improved.",
      "Four evenly spaced prongs grip without piercing the hand, and the curve channels food cleanly.",
      "Mass production fixed its geometry in the nineteenth century, and no redesign has displaced it since.",
    ],
    anatomy: [
      {
        title: "The tines",
        description:
          "Four prongs, slightly curved, that pierce, steady, and separate food without a cutting edge.",
      },
      {
        title: "The well",
        description:
          "The gentle hollow between the tines lets the fork scoop soft food the way a small spoon would.",
      },
      {
        title: "The shank",
        description:
          "The neck that sets the height of the grip above the plate, keeping the hand clear of the food.",
      },
      {
        title: "The handle",
        description:
          "Sized to the hand and balanced so the fork rests naturally on the table's edge between bites.",
      },
    ],
    material: "Stainless steel (historical: silver, gold)",
    materials: ["Steel"],
    dimensions: "≈ 190 mm × 25 mm",
    image: "/objects/fork/main.jpg",
    gallery: ["/objects/fork/main.jpg"],
    quote:
      "The fork is the only table instrument that had to be invented. The rest were discovered.",
    quoteAuthor: "Archive note, Object 021",
    timeline: [
      {
        year: "c. 1000 CE",
        title: "Byzantine table",
        description:
          "Two-tined forks appear in the Byzantine Empire; the Venetian doge's daughter makes the fork a curiosity in Venice.",
      },
      {
        year: "16th–17th century",
        title: "Slow acceptance",
        description:
          "Forks spread through Italy and France despite clerical disapproval, gaining three and then four tines.",
      },
      {
        year: "19th century",
        title: "The four-tine standard",
        description:
          "Mass-produced flatware settles the modern four-tine, gently curved dinner fork.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "Every place setting in the world uses the same four-tine geometry fixed in the 1800s.",
      },
    ],
    sources: [
      { title: "Fork — Wikipedia", url: "https://en.wikipedia.org/wiki/Fork" },
      { title: "Fork — Britannica", url: "https://www.britannica.com/topic/fork-utensil" },
    ],
    imageCredit: {
      creator: "Yapparina",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:18-8_stainless_steel_fork_1.jpg",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "plate",
    slug: "plate",
    number: "022",
    name: "Plate",
    category: "household",
    year: "c. 5000 BCE",
    yearNum: -5000,
    designer: "Unknown — prehistoric",
    origin: "Ancient Near East",
    description:
      "A shallow, rimmed disk that holds food in reach of the mouth without covering the hands.",
    longDescription:
      "The plate is a flat surface raised a few centimetres above the table — nothing more, and nothing less. Flat dishes of fired clay appear with the first pottery of the ancient Near East, and the form has persisted because it solves a genuine ergonomic problem: food must be presented at the height and distance a seated person can reach comfortably, contained enough to travel, and open enough to eat from.\n\nThe plate's design is almost entirely negative space. The rim stops food and liquid from sliding off; the shallow well concentrates the serving in the middle; the foot raises it clear of the table. Improvements since the first fired plates have been decorative or material — porcelain, then fine china, then melamine — never structural. Like the spoon, the plate is a shape that seems to have been discovered rather than designed.",
    whyTimeless: [
      "A raised, rimmed disk is the minimum structure that contains a meal and presents it to a seated eater.",
      "Its proportions are tuned to the human reach from plate to mouth — an ergonomic constant.",
      "Materials have changed from clay to porcelain to plastic; the geometry has not.",
    ],
    anatomy: [
      {
        title: "The well",
        description:
          "A shallow central depression that holds the serving and draws the eye to the food.",
      },
      {
        title: "The rim",
        description:
          "A raised edge that keeps liquid and food from spilling onto the table.",
      },
      {
        title: "The foot",
        description:
          "A ring base that lifts the plate clear of the surface, letting it stack and be carried safely.",
      },
      {
        title: "The glaze",
        description:
          "A non-porous, cleanable surface — the material innovation that made plates practical for daily use.",
      },
    ],
    material: "Ceramic (historical: clay, metal, wood)",
    materials: ["Ceramic", "Clay"],
    dimensions: "≈ 250 mm diameter",
    image: "/objects/plate/main.jpg",
    gallery: ["/objects/plate/main.jpg"],
    quote:
      "A plate is a table that has been moved closer to the mouth.",
    quoteAuthor: "Archive note, Object 022",
    timeline: [
      {
        year: "c. 5000 BCE",
        title: "First pottery",
        description:
          "Fired-clay dishes appear alongside the earliest pottery in the Near East.",
      },
      {
        year: "Antiquity",
        title: "Metal plates",
        description:
          "Wealthy households eat from bronze, silver, and gold plates in the ancient world.",
      },
      {
        year: "18th century",
        title: "Fine china",
        description:
          "European porcelain factories make the plate both cheap and beautiful.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "From the kitchen table to the restaurant, the shallow rimmed plate remains the universal serving form.",
      },
    ],
    sources: [
      { title: "Plate (dishware) — Wikipedia", url: "https://en.wikipedia.org/wiki/Plate_(dishware)" },
    ],
    imageCredit: {
      creator: "Rama",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Plate-MAHG_A_1998-0166-IMG_1957-white.jpg",
      license: "Public domain",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "cup",
    slug: "cup",
    number: "023",
    name: "Cup",
    category: "household",
    year: "c. 6000 BCE",
    yearNum: -6000,
    designer: "Unknown — Neolithic",
    origin: "Anatolia / worldwide",
    description:
      "A small open vessel shaped to the lips. A thousand generations of drinkers have not changed it.",
    longDescription:
      "The cup is one of the oldest manufactured objects in the human record: fired-clay cups have been found in the Neolithic settlement of Çatalhöyük, some eight thousand years old. Its essential requirements are few and ancient — a volume small enough to lift one-handed, an opening sized to the mouth, a base that does not tip — and those requirements have kept the design essentially frozen ever since.\n\nWhat has changed is only the material dialogue. Clay gave way to bronze and silver, to glass, to porcelain, to plastic and insulated steel. Each new material re-expressed the same geometry: a body, a lip, a handle. The pictured cup is a Bohemian glass cup with handles, the material that allowed the cup to reveal its contents — and still, underneath, it is the same open vessel from Çatalhöyük.",
    whyTimeless: [
      "The cup's volume, rim diameter, and base are all fixed by the human hand and mouth — not by fashion.",
      "An open vessel can be filled, drunk from, cleaned, and stored with no mechanism or instruction.",
      "New materials re-invent its surface, never its structure.",
    ],
    anatomy: [
      {
        title: "The body",
        description:
          "A hand-scaled vessel sized to a comfortable single-hand lift and a moderate serving.",
      },
      {
        title: "The lip",
        description:
          "A thin, even rim that meets the mouth cleanly without spilling the contents.",
      },
      {
        title: "The base",
        description:
          "A flat, stable foot that resists tipping during the hand-to-mouth journey.",
      },
      {
        title: "The handle",
        description:
          "An optional loop that lets the cup be carried when the contents are hot.",
      },
    ],
    material: "Glass (historical: clay, metal, porcelain)",
    materials: ["Glass", "Ceramic", "Clay"],
    dimensions: "≈ 95 mm × 80 mm",
    image: "/objects/cup/main.jpg",
    gallery: ["/objects/cup/main.jpg"],
    quote:
      "Eight thousand years of drinking, and the cup still fits the hand the way it always did.",
    quoteAuthor: "Archive note, Object 023",
    timeline: [
      {
        year: "c. 6000 BCE",
        title: "Çatalhöyük",
        description:
          "Fired-clay cups are found in the Neolithic settlement of Çatalhöyük in Anatolia.",
      },
      {
        year: "Antiquity",
        title: "Precious metals",
        description:
          "Bronze and silver cups mark status across Egypt, Greece, and Rome.",
      },
      {
        year: "18th century",
        title: "Porcelain and glass",
        description:
          "New materials make the cup cheap, sanitary, and transparent.",
      },
      {
        year: "Today",
        title: "Every material",
        description:
          "The same open-vessel geometry is moulded in glass, ceramic, and steel worldwide.",
      },
    ],
    sources: [
      { title: "Cup — Wikipedia", url: "https://en.wikipedia.org/wiki/Cup" },
      { title: "Çatalhöyük — Britannica", url: "https://www.britannica.com/place/Catalhoyuk" },
    ],
    imageCredit: {
      creator: "The Metropolitan Museum of Art",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Cup_with_handles_MET_69425.jpg",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "can-opener",
    slug: "can-opener",
    number: "024",
    name: "Can Opener",
    category: "household",
    year: "1858",
    yearNum: 1858,
    designer: "Ezra J. Warner",
    origin: "United States",
    description:
      "A pair of cutting wheels that separates lid from can — a tool born of a single specific container.",
    longDescription:
      "When canned food arrived in the early nineteenth century, the can was a cylinder of iron or tin meant to be opened with a chisel and a mallet — a job so awkward that the can opener arrived only in 1858, when Ezra Warner patented a device with a curved blade that pierced the lid. His opener, issued to the Union army in the American Civil War, was dangerous enough that grocers would demonstrate it to prove their tins were safe.\n\nThe modern rotary opener — two wheels, one cutting, one driving, joined by a turning handle — was perfected in 1870 by William Lyman, and the geometry has stayed since. It is a wedge and a friction drive in one gesture: the cutting wheel pierces the rim, the toothed wheel bites the can's edge and pulls it forward, and the turn of the hand walks both around the circumference. The can has changed (pull-tabs, pop-tops), and the opener has kept its exact job.",
    whyTimeless: [
      "Cutting and traction are combined in a single hand-turn, so one gesture does the whole circle.",
      "The two-wheel system separates cleanly with no sharp edges left inside the can.",
      "Nothing about it can wear out beyond a blunt wheel, which is replaceable in seconds.",
    ],
    anatomy: [
      {
        title: "The cutting wheel",
        description:
          "A hardened disc that pierces and shears the tin along the can's top rim.",
      },
      {
        title: "The drive wheel",
        description:
          "A toothed disc that grips the can's edge and feeds it past the cutter as the handle turns.",
      },
      {
        title: "The handle",
        description:
          "A turning crank that supplies continuous rotary force to both wheels.",
      },
      {
        title: "The pivot",
        description:
          "The hinge that clamps the two wheels against the can at a fixed, self-centering angle.",
      },
    ],
    material: "Steel, plastic handles",
    materials: ["Steel", "Plastic"],
    dimensions: "≈ 180 mm × 60 mm",
    image: "/objects/can-opener/main.jpg",
    gallery: ["/objects/can-opener/main.jpg"],
    quote:
      "The can opener exists because a perfect container refuses to give up its contents.",
    quoteAuthor: "Archive note, Object 024",
    timeline: [
      {
        year: "1810",
        title: "The tin can",
        description:
          "Peter Durand patents the tin can; opening it requires chisel and hammer.",
      },
      {
        year: "1858",
        title: "Warner's opener",
        description:
          "Ezra Warner patents the first can opener, used by the US military in the Civil War.",
      },
      {
        year: "1870",
        title: "Rotary opener",
        description:
          "William Lyman patents the cutting-wheel opener, ancestor of today's design.",
      },
      {
        year: "Today",
        title: "Still cutting",
        description:
          "Pull-tabs aside, the rotary can opener remains the standard kitchen tool.",
      },
    ],
    sources: [
      { title: "Can opener — Wikipedia", url: "https://en.wikipedia.org/wiki/Can_opener" },
    ],
    imageCredit: {
      creator: "Evan-Amos",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kitchen-Modern-Can-Opener.jpg",
      license: "Public domain",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "cutting-board",
    slug: "cutting-board",
    number: "025",
    name: "Cutting Board",
    category: "household",
    year: "Ancient",
    yearNum: -5000,
    designer: "Unknown — prehistoric",
    origin: "Everywhere",
    description:
      "A flat wooden slab that takes the knife's blow, saving the table — and the blade.",
    longDescription:
      "The cutting board is the quiet partner of every knife: a flat, slightly forgiving surface that absorbs the impact of the blade so neither the worktop nor the knife suffers. Its prototype is simply a board placed on a table, and every civilization that chopped food on wood or stone arrived at the same solution independently.\n\nThe board's design virtues are material more than formal. Wood is end-grain friendly and gentle on edges; it does not transmit the full shock of a chop to the knife, and it stands up to repeated strikes for years. Modern boards add plastic for sanitization and grooves for juice, but the essential contract — a sacrificial, cleanable, stable surface between the blade and the bench — has never changed. The pictured board is a simple wooden chopping block, the form that has served kitchens since before metal knives.",
    whyTimeless: [
      "It is a disposable stress member: it takes the wear so the knife and table do not.",
      "Wood's slight give protects the cutting edge better than any hard replacement.",
      "Any piece of flat, cleanable timber does the job — its form is trivial to reproduce forever.",
    ],
    anatomy: [
      {
        title: "The face",
        description:
          "A flat, stable surface sized larger than the largest common cut.",
      },
      {
        title: "The thickness",
        description:
          "Enough depth to absorb blows without flexing or cracking, but light enough to lift.",
      },
      {
        title: "The edge",
        description:
          "Squared or beveled sides that let the board be gripped, moved, and swept clean.",
      },
      {
        title: "The grain",
        description:
          "Wood grain orientation tuned to resist splitting and be gentle on knife edges.",
      },
    ],
    material: "Wood (also plastic and bamboo)",
    materials: ["Wood", "Plastic"],
    dimensions: "≈ 380 mm × 300 mm × 20 mm",
    image: "/objects/cutting-board/main.jpg",
    gallery: ["/objects/cutting-board/main.jpg"],
    quote:
      "The cutting board's whole job is to be cut instead of anything else.",
    quoteAuthor: "Archive note, Object 025",
    timeline: [
      {
        year: "Prehistory",
        title: "A board on a table",
        description:
          "Flat wooden surfaces protect worktops from the first cutting tools.",
      },
      {
        year: "Antiquity",
        title: "Chopping blocks",
        description:
          "Purpose-built butcher blocks and chopping boards appear in settled kitchens.",
      },
      {
        year: "20th century",
        title: "Sanitizable plastics",
        description:
          "Plastic boards offer cleanable, stain-resistant alternatives to wood.",
      },
      {
        year: "Today",
        title: "Both materials",
        description:
          "Wood and plastic cutting boards coexist in every kitchen, on the same principle.",
      },
    ],
    sources: [
      { title: "Cutting board — Wikipedia", url: "https://en.wikipedia.org/wiki/Cutting_board" },
    ],
    imageCredit: {
      creator: "Donovan Govan",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Chopping_Board.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "frying-pan",
    slug: "frying-pan",
    number: "026",
    name: "Frying Pan",
    category: "household",
    year: "c. 400 BCE",
    yearNum: -400,
    designer: "Unknown — Ancient Greek (patera)",
    origin: "Ancient Greece",
    description:
      "A shallow metal dish on a long handle: the same shape Greek cooks used twenty-four centuries ago.",
    longDescription:
      "The frying pan is one of the oldest cooking vessels with a handle, and the pictured example — a copper frying pan from ancient Greece, fifth to fourth century BCE, its handle finished with a goose head — shows how complete the design was at its very beginning. Shallow walls maximize the hot surface a flat food can contact; a long handle keeps the hand away from the heat; a thin metal base transmits heat quickly and responds to the cook's control.\n\nThe pan's geometry has stayed virtually frozen because cooking thermodynamics have not changed. A wide, shallow, thermally conductive disk is simply the best way to apply high heat to food spread thin. What evolved was the material: copper gave way to cast iron for its mass, then to steel, aluminium, and non-stick coatings. The shape that Greek patera assumed twenty-four centuries ago is the shape in every kitchen today.",
    whyTimeless: [
      "A shallow, wide, handle-mounted dish is the optimum geometry for pan-frying, and cannot be improved structurally.",
      "Thin, conductive metal gives the cook direct, responsive control over heat.",
      "Materials have evolved from copper to cast iron to non-stick; the form has not.",
    ],
    anatomy: [
      {
        title: "The body",
        description:
          "A shallow, wide metal bowl that spreads heat across a flat cooking surface.",
      },
      {
        title: "The base",
        description:
          "Thin and conductive, so the pan heats quickly and reacts to the cook's changes.",
      },
      {
        title: "The walls",
        description:
          "Low, slightly flared sides that let the cook slide a spatula under food and flip it.",
      },
      {
        title: "The handle",
        description:
          "A long, low-conductivity grip that keeps the hand clear of the heat.",
      },
    ],
    material: "Copper (modern: cast iron, steel, non-stick)",
    materials: ["Copper", "Steel", "Metal"],
    dimensions: "≈ 380 mm long",
    image: "/objects/frying-pan/main.jpg",
    gallery: ["/objects/frying-pan/main.jpg"],
    quote:
      "The Greek frying pan from 400 BCE would not look out of place in a modern kitchen drawer.",
    quoteAuthor: "Archive note, Object 026",
    timeline: [
      {
        year: "5th–4th c. BCE",
        title: "Greek patera",
        description:
          "Greek craftsmen cast copper frying pans with long, ornamented handles.",
      },
      {
        year: "Roman era",
        title: "Iron pans",
        description:
          "Cast-iron pans give the form mass, durability, and even heating.",
      },
      {
        year: "19th century",
        title: "Steel and lighter metals",
        description:
          "Sheet-steel and aluminium pans make the frying pan light and cheap.",
      },
      {
        year: "Mid-20th century",
        title: "Non-stick",
        description:
          "Non-stick coatings change what sticks, not the pan's geometry.",
      },
    ],
    sources: [
      { title: "Frying pan — Wikipedia", url: "https://en.wikipedia.org/wiki/Frying_pan" },
    ],
    imageCredit: {
      creator: "Gts-tg",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Copper_frying_pan,_5th-4th_century_B.C.,_Thessaloniki_-_Greece.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "grater",
    slug: "grater",
    number: "027",
    name: "Grater",
    category: "household",
    year: "c. 16th century",
    yearNum: 1540,
    designer: "Unknown — France",
    origin: "France / Europe",
    description:
      "A sheet of metal punched with cutting edges, converting solids to shreds by sliding friction.",
    longDescription:
      "The grater reduces food to small particles not by cutting — which would take many strokes — but by dragging it across a sheet of punched holes whose raised edges shave off fine fragments. The four-sided box grater is traditionally credited to French kitchens in the sixteenth century, and it has not been improved in any essential way since.\n\nThe grater's cleverness is in the holes. Each punched aperture leaves a sharp, forward-facing lip; the food is rubbed across, and each lip shaves a shred that falls through. Different faces carry differently shaped holes — coarse, fine, and ribbon — so one tool covers every texture from grated cheese to zest. It is a stamping, not a machine: no moving parts, nothing to break, and a sheet of stainless steel that will outlive its owner.",
    whyTimeless: [
      "Punched-hole cutting surfaces reduce a manual job to a single back-and-forth stroke.",
      "Different hole shapes on the same sheet provide every grating texture with one tool.",
      "It is one stamped piece of metal — unbreakable, washable, and cheap beyond improvement.",
    ],
    anatomy: [
      {
        title: "The holes",
        description:
          "Punched apertures whose sharp edges shave the food as it slides across.",
      },
      {
        title: "The cutting lips",
        description:
          "Raised, forward-facing edges that cut rather than crush, so food grates instead of mushing.",
      },
      {
        title: "The faces",
        description:
          "Multiple grating surfaces on one tool, each sized for a different shred.",
      },
      {
        title: "The handle",
        description:
          "A comfortable grip that keeps the knuckles clear of the cutting face.",
      },
    ],
    material: "Stainless steel",
    materials: ["Steel"],
    dimensions: "≈ 180 mm × 90 mm",
    image: "/objects/grater/main.jpg",
    gallery: ["/objects/grater/main.jpg"],
    quote:
      "The grater is a cutting tool that never needs sharpening, because it is born with its edges punched in.",
    quoteAuthor: "Archive note, Object 027",
    timeline: [
      {
        year: "16th century",
        title: "The box grater",
        description:
          "Four-sided box graters appear in French kitchens and spread across Europe.",
      },
      {
        year: "19th century",
        title: "Tinplate production",
        description:
          "Punched-sheet manufacture makes the grater a cheap household staple.",
      },
      {
        year: "20th century",
        title: "Stainless steel",
        description:
          "Corrosion-proof steel removes the last need for care or replacement.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "Electric food processors coexist with the punched-metal grater in every kitchen.",
      },
    ],
    sources: [
      { title: "Grater — Wikipedia", url: "https://en.wikipedia.org/wiki/Grater" },
    ],
    imageCredit: {
      creator: "Clément Bucco-Lechat",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:R%C3%A2pe_%C3%A0_fromage_-_envers.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "kettle",
    slug: "kettle",
    number: "028",
    name: "Kettle",
    category: "household",
    year: "c. 1200 BCE",
    yearNum: -1200,
    designer: "Unknown — Bronze Age",
    origin: "Eurasia",
    description:
      "A vessel that holds water near a fire, fitted with a spout and a lifting handle.",
    longDescription:
      "The kettle is a cooking pot specialized for one task: bringing water to the boil. Bronze vessels for heating water appear in the ancient world, and the essentials have stayed the same — a body that sits on or above a heat source, a handle that survives contact with the hand, and a spout that pours a directed stream. The whistling kettle added only a whistle, not a redesign.\n\nThe pictured copper kettle is the ancestral form: a broad, open vessel of hammered copper whose metal conducts heat quickly and evenly. Copper's later rivals — iron, steel, aluminium, and finally the electric kettle — all repeat the same contract. The kettle's design is complete because boiling water is an unchanging physical job: hold a fixed volume, transfer heat efficiently, and deliver the water safely into a cup.",
    whyTimeless: [
      "Heating water is a fixed physical task, so the vessel that does it has a fixed optimum shape.",
      "The spout's taper produces a controllable, directed pour with no drips.",
      "From campfire to electric element, the body, handle, and spout arrangement is untouched.",
    ],
    anatomy: [
      {
        title: "The body",
        description:
          "A conductive metal vessel sized to a useful water volume and a heat source.",
      },
      {
        title: "The spout",
        description:
          "A tapered lip that directs the pour into a controlled stream.",
      },
      {
        title: "The handle",
        description:
          "A heat-isolated grip positioned above or opposite the spout for balanced pouring.",
      },
      {
        title: "The lid",
        description:
          "A fitted cover that holds heat in and keeps impurities out.",
      },
    ],
    material: "Copper (modern: steel, aluminium, electric)",
    materials: ["Copper", "Steel", "Metal"],
    dimensions: "≈ 300 mm × 250 mm",
    image: "/objects/kettle/main.jpg",
    gallery: ["/objects/kettle/main.jpg"],
    quote:
      "Boiling water has not changed in a thousand years. Neither has the vessel it is boiled in.",
    quoteAuthor: "Archive note, Object 028",
    timeline: [
      {
        year: "Bronze Age",
        title: "Metal vessels",
        description:
          "Bronze and copper vessels bring water to the boil in the ancient world.",
      },
      {
        year: "Antiquity",
        title: "The spout",
        description:
          "Pouring spouts and swing handles become standard on hot-water vessels.",
      },
      {
        year: "19th century",
        title: "The whistling kettle",
        description:
          "The whistle adds a signal that the water has boiled — an improvement, not a change.",
      },
      {
        year: "20th century",
        title: "Electric",
        description:
          "The electric kettle replaces the heat source, not the vessel's form.",
      },
    ],
    sources: [
      { title: "Kettle — Wikipedia", url: "https://en.wikipedia.org/wiki/Kettle" },
    ],
    imageCredit: {
      creator: "chefranden (via Flickr)",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Copper_kettle_flickr.jpg",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "measuring-cup",
    slug: "measuring-cup",
    number: "029",
    name: "Measuring Cup",
    category: "household",
    year: "1896",
    yearNum: 1896,
    designer: "Standardized with Fannie Farmer's cookbook",
    origin: "United States",
    description:
      "A transparent vessel marked in equal units, turning 'a handful' into an exact quantity.",
    longDescription:
      "For most of history, recipes relied on handfuls and pinches. The measuring cup became a serious instrument in 1896, when Fannie Farmer published the Boston Cooking-School Cook Book, which insisted on level measures — and the graduated cup, marked in standard units, became the cook's precision tool.\n\nThe design problem the cup solves is metrology on a kitchen scale: a vessel whose interior volume is divided into equal, readable marks, transparent enough to see the level, and stable enough to sit on a counter. The modern plastic cup adds a spout, a handle, and unit markings in both metric and imperial. It is measurement made material — the same idea as the ruler, but for volume — and no kitchen has ever found a reason to replace it.",
    whyTimeless: [
      "Transparent walls and printed marks make volume directly readable — no separate measuring device needed.",
      "Equal graduations along a straight-walled vessel are the simplest possible volume scale.",
      "It transfers cooking from guesswork to repeatability, which is why recipes still cite it.",
    ],
    anatomy: [
      {
        title: "The body",
        description:
          "A straight-sided transparent vessel whose uniform cross-section makes marks accurate.",
      },
      {
        title: "The scale",
        description:
          "Printed unit marks at equal height intervals, readable at eye level.",
      },
      {
        title: "The spout",
        description:
          "A pouring lip that transfers the measured quantity without loss.",
      },
      {
        title: "The handle",
        description:
          "A grip sized for one hand so the cup can be tipped and poured steadily.",
      },
    ],
    material: "Plastic (also glass)",
    materials: ["Plastic", "Glass"],
    dimensions: "≈ 120 mm × 140 mm",
    image: "/objects/measuring-cup/main.jpg",
    gallery: ["/objects/measuring-cup/main.jpg"],
    quote:
      "The measuring cup turned cooking from an art of judgment into a repeatable science.",
    quoteAuthor: "Archive note, Object 029",
    timeline: [
      {
        year: "1896",
        title: "Fannie Farmer",
        description:
          "The Boston Cooking-School Cook Book insists on level, measured ingredients.",
      },
      {
        year: "Early 20th century",
        title: "Graduated cups",
        description:
          "Manufacturers produce standardized measuring cups with printed scales.",
      },
      {
        year: "Mid-20th century",
        title: "Plastic and metric",
        description:
          "Transparent plastic and dual-unit scales make the cup a global standard.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "Digital scales coexist with the graduated cup, still printed with the same marks.",
      },
    ],
    sources: [
      { title: "Measuring cup — Wikipedia", url: "https://en.wikipedia.org/wiki/Measuring_cup" },
    ],
    imageCredit: {
      creator: "Photograph: Frank C. Müller, Baden-Baden",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Messbecher_(fcm).jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "peeler",
    slug: "peeler",
    number: "030",
    name: "Peeler",
    category: "household",
    year: "1947",
    yearNum: 1947,
    designer: "Alfred Neweczerzal",
    origin: "Switzerland",
    description:
      "A blade mounted on a swivelling arm that follows the curve of any fruit and shaves off its skin.",
    longDescription:
      "Peeling is a shaving operation, and the tools that do it are wedges on handles. The breakthrough was the swivel peeler, patented in 1947 by the Swiss inventor Alfred Neweczerzal as the Rex peeler: a blade held in a shallow U-shaped frame that pivots freely, so it follows the changing radius of a potato, an apple, or a carrot and takes off only the skin.\n\nThe swivel does the design's work. Because the blade is free to rock, it maintains a constant angle against the surface it is pressed into, cutting a strip of uniform thickness no matter how the vegetable curves. The result is an instrument with no adjustment, no sharpening problems, and a learning curve measured in seconds. Every attempt to motorize peeling has added cost and failure modes; the swivel peeler simply removed the last of both.",
    whyTimeless: [
      "A free-pivoting blade keeps constant contact with curved surfaces, cutting uniform strips.",
      "The whole mechanism is a blade and a groove — nothing to adjust, set, or maintain.",
      "It peels with the natural motion of the hand, needing no grip change or second tool.",
    ],
    anatomy: [
      {
        title: "The blade",
        description:
          "A sharp-edged slot that shaves a fixed-thickness strip of skin.",
      },
      {
        title: "The swivel",
        description:
          "The blade's free pivot lets it follow a changing radius without losing contact.",
      },
      {
        title: "The groove",
        description:
          "A gap beside the cutting edge that lifts the peeled strip away from the blade.",
      },
      {
        title: "The handle",
        description:
          "A comfortable grip that lets the tool be pulled toward the body in long strokes.",
      },
    ],
    material: "Stainless steel blade, metal or plastic body",
    materials: ["Steel", "Plastic", "Metal"],
    dimensions: "≈ 180 mm × 35 mm",
    image: "/objects/peeler/main.jpg",
    gallery: ["/objects/peeler/main.jpg"],
    quote:
      "The swivel peeler removed the one part of peeling that needed skill: holding the angle.",
    quoteAuthor: "Archive note, Object 030",
    timeline: [
      {
        year: "1947",
        title: "The Rex peeler",
        description:
          "Alfred Neweczerzal patents the swivel-blade peeler in Switzerland.",
      },
      {
        year: "1950s",
        title: "Global spread",
        description:
          "The design is licensed and manufactured worldwide as the standard kitchen peeler.",
      },
      {
        year: "Late 20th century",
        title: "Materials",
        description:
          "Stainless blades and moulded handles make it cheap, rust-proof, and universal.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The swivel peeler in a modern kitchen is structurally Neweczerzal's 1947 design.",
      },
    ],
    sources: [
      { title: "Peeler — Wikipedia", url: "https://en.wikipedia.org/wiki/Peeler" },
      { title: "Rex peeler — Wikipedia", url: "https://en.wikipedia.org/wiki/Rex_peeler" },
    ],
    imageCredit: {
      creator: "Pengo",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Peeler_01_Pengo.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "rolling-pin",
    slug: "rolling-pin",
    number: "031",
    name: "Rolling Pin",
    category: "household",
    year: "c. 500 BCE",
    yearNum: -500,
    designer: "Unknown — Etruscan",
    origin: "Italy / Europe",
    description:
      "A cylinder that flattens dough by rolling instead of pressing, spreading force evenly.",
    longDescription:
      "Dough can be flattened by pressing, but pressing is uneven and tiring. The rolling pin converts the same effort into an even, continuous force by rolling: a smooth cylinder spreads the cook's weight across the dough at a constant thickness, and the roller simply moves the point of contact along.\n\nEtruscan reliefs show rolling pins in use twenty-five centuries ago, and the object has changed so little that it is nearly impossible to date a modern one. The form is complete because the physics is complete — a true cylinder rolls without skidding, its surface leaves no seams, and its handles place the hands where they naturally push. Improvements like adjustable rings for thickness are additions, not corrections; the plain wooden roller still dominates, because there is nothing left in the job of flattening that needs design attention.",
    whyTimeless: [
      "A true cylinder converts pressing force into even thickness with no mechanism.",
      "Its simple surface leaves dough smooth and unseamed, impossible to beat with rollers that grip.",
      "The plain wooden form is so complete that later 'improvements' add parts rather than fix flaws.",
    ],
    anatomy: [
      {
        title: "The barrel",
        description:
          "A smooth, straight cylinder of uniform diameter that rolls without skidding.",
      },
      {
        title: "The surface",
        description:
          "Waxed or seasoned wood that resists sticking and leaves the dough smooth.",
      },
      {
        title: "The handles",
        description:
          "Free-turning or fixed grips that put the hands over the center of the roll.",
      },
      {
        title: "The weight",
        description:
          "Enough mass to flatten with a light pass, heavy enough not to be thrown off line.",
      },
    ],
    material: "Wood",
    materials: ["Wood"],
    dimensions: "≈ 450 mm × 60 mm",
    image: "/objects/rolling-pin/main.jpg",
    gallery: ["/objects/rolling-pin/main.jpg"],
    quote:
      "A rolling pin is a cylinder and two handles. Everything else is decoration.",
    quoteAuthor: "Archive note, Object 031",
    timeline: [
      {
        year: "c. 500 BCE",
        title: "Etruscan reliefs",
        description:
          "Etruscan art shows dough being rolled with a cylinder nearly identical to today's.",
      },
      {
        year: "Middle Ages",
        title: "Bakers' staple",
        description:
          "The rolling pin becomes standard equipment in European bakeries.",
      },
      {
        year: "19th century",
        title: "The marble roller",
        description:
          "Marble and glass rollers keep dough cool for fine pastry work.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The plain wooden roller remains the default tool of every baker.",
      },
    ],
    sources: [
      { title: "Rolling pin — Wikipedia", url: "https://en.wikipedia.org/wiki/Rolling_pin" },
    ],
    imageCredit: {
      creator: "Fructibus",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Rolling_pin_2017.jpg",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "whisk",
    slug: "whisk",
    number: "032",
    name: "Whisk",
    category: "household",
    year: "c. 19th century",
    yearNum: 1840,
    designer: "Unknown — France",
    origin: "France / Europe",
    description:
      "A cage of wires that traps air in liquid, turning cream into foam with a few rapid strokes.",
    longDescription:
      "The whisk does in seconds what a spoon could not do in minutes: it beats air into a liquid. Its secret is surface area and speed — a cage of thin wires moves through the mixture many times per stroke, each wire splitting the liquid and dragging in a film of air, until the mixture is full of tiny bubbles.\n\nThe balloon whisk, with its teardrop loop of wires, emerged in nineteenth-century France and has never been improved in principle. The wires are thin enough to cut through liquid cleanly, springy enough to whip, and arranged so the whole volume is swept in one motion. Electric mixers are faster but no cleverer; the hand whisk remains the default for exactly the jobs where speed is unnecessary and control matters.",
    whyTimeless: [
      "Many thin wires multiply surface area and strokes, aerating faster than any flat tool.",
      "The balloon shape sweeps the entire bowl in a single circular motion.",
      "No power, no parts, no maintenance — a wire cage that works as long as it holds its shape.",
    ],
    anatomy: [
      {
        title: "The wires",
        description:
          "Thin, springy metal loops that split the liquid and trap air on every stroke.",
      },
      {
        title: "The balloon",
        description:
          "The teardrop cage whose curvature matches the bowl and sweeps it completely.",
      },
      {
        title: "The handle",
        description:
          "A grip sized for the rotating wrist motion of whisking.",
      },
      {
        title: "The collar",
        description:
          "The point where the wires converge, keeping them evenly spaced and stable.",
      },
    ],
    material: "Stainless steel wire",
    materials: ["Steel"],
    dimensions: "≈ 250 mm long",
    image: "/objects/whisk/main.jpg",
    gallery: ["/objects/whisk/main.jpg"],
    quote:
      "The whisk is the cheapest air pump ever invented: a cage of wires and a moving wrist.",
    quoteAuthor: "Archive note, Object 032",
    timeline: [
      {
        year: "18th century",
        title: "Birch twigs",
        description:
          "Beaters made of bundled twigs are used to foam chocolate and eggs in France.",
      },
      {
        year: "19th century",
        title: "The balloon whisk",
        description:
          "Wire balloon whisks replace twig beaters in French kitchens.",
      },
      {
        year: "1856",
        title: "Mechanical beaters",
        description:
          "Cranked egg beaters motorize whisking, but the hand whisk remains standard.",
      },
      {
        year: "Today",
        title: "Still hand",
        description:
          "The balloon whisk is a staple in every kitchen, unchanged in its essentials.",
      },
    ],
    sources: [
      { title: "Whisk — Wikipedia", url: "https://en.wikipedia.org/wiki/Whisk" },
    ],
    imageCredit: {
      creator: "Marie-Lan Nguyen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Balloon_spiral_ball_whisks.jpg",
      license: "CC BY 2.5",
      licenseUrl: "https://creativecommons.org/licenses/by/2.5",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "broom",
    slug: "broom",
    number: "033",
    name: "Broom",
    category: "household",
    year: "1797",
    yearNum: 1797,
    designer: "Levi Dickinson (flat broom)",
    origin: "United States",
    description:
      "A bundle of stiff fibers bound to a handle: sweeping's answer to gathering and moving.",
    longDescription:
      "A broom is a rake for fine material — a dense fringe of stiff fibers that catches dust and debris and sweeps them along instead of scattering them. Bundles of twigs or grass bound to a handle have served for sweeping since people had floors; the modern flat broom, with its fiber head flattened and bound to a stick, was developed in Massachusetts, where Levi Dickinson is credited with the flat broom in 1797, and the Shakers later refined its manufacture.\n\nThe design's enduring virtues are material and geometric. Bristles must be dense enough to collect fine dust, stiff enough to push, yet compliant enough to reach into corners. The binding spreads the user's force across the full width of the head. The pictured broom is a traditional Vietnamese fiber broom — the same contract, half a world away, in palm fiber instead of sorghum.",
    whyTimeless: [
      "Dense, stiff fibers gather fine dust that rigid tools would scatter or miss.",
      "The binding turns the whole head into one compliant working edge.",
      "It is made from the cheapest renewable materials and repaired by re-binding, never replaced as a design.",
    ],
    anatomy: [
      {
        title: "The head",
        description:
          "A dense packed fringe of fibers that collects and carries debris in front of it.",
      },
      {
        title: "The binding",
        description:
          "The ties that hold the fibers to the handle and flatten them into a working edge.",
      },
      {
        title: "The fibers",
        description:
          "Stiff but compliant bristles chosen to sweep fine material without scratching the floor.",
      },
      {
        title: "The handle",
        description:
          "A long lever that keeps the user upright while the head works at floor level.",
      },
    ],
    material: "Wood and plant fiber (modern: plastic bristles)",
    materials: ["Wood", "Fiber"],
    dimensions: "≈ 1300 mm long",
    image: "/objects/broom/main.jpg",
    gallery: ["/objects/broom/main.jpg"],
    quote:
      "Sweeping is older than writing, and the broom has not needed to change for most of it.",
    quoteAuthor: "Archive note, Object 033",
    timeline: [
      {
        year: "Antiquity",
        title: "Twig bundles",
        description:
          "Bundles of twigs and grass are bound to handles across the ancient world.",
      },
      {
        year: "1797",
        title: "The flat broom",
        description:
          "Levi Dickinson develops the flat broom in Massachusetts, using sorghum fibers.",
      },
      {
        year: "1810",
        title: "Mechanized brooms",
        description:
          "The broom-making machine makes brushes cheap and identical.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "From palm-fiber brooms in Vietnam to plastic brooms worldwide, the form is the same.",
      },
    ],
    sources: [
      { title: "Broom — Wikipedia", url: "https://en.wikipedia.org/wiki/Broom" },
    ],
    imageCredit: {
      creator: "CEphoto, Uwe Aranas",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Hue_Vietnam_Broom-in-C%C3%A0n-Th%C3%A0nh-Palace-01.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "bucket",
    slug: "bucket",
    number: "034",
    name: "Bucket",
    category: "household",
    year: "c. 600 CE",
    yearNum: 600,
    designer: "Unknown — Anglo-Saxon",
    origin: "England",
    description:
      "A staved cylinder with a lifting handle: water transport solved once, ten centuries before the pictured example.",
    longDescription:
      "The bucket solves one of the oldest problems of settlement: moving water and other bulk materials in manageable loads. Its form — a closed cylinder with an open top and a swing handle — is so complete that an early medieval bucket like the pictured Anglo-Saxon example from Little Wilbraham, with its staves bound by copper-alloy bands, is recognizably the same object as a modern galvanized bucket.\n\nThe structure is a masterpiece of simple engineering. Vertical staves are held together by hoops under tension, so the load presses the hoops tighter; a bail handle pivots at two points, keeping the vessel level while it swings and hangs. A bucket must hold, carry, tip, and stack, and its cylindrical geometry does all four with the minimum of material. Plastics changed the material, not the form.",
    whyTimeless: [
      "Tensioned hoops let thin staves form a strong, watertight cylinder — structure that self-tightens under load.",
      "The pivoting bail keeps the bucket balanced while carrying and pouring.",
      "It stacks, hangs, tips, and empties — a complete container grammar in one shape.",
    ],
    anatomy: [
      {
        title: "The staves",
        description:
          "Vertical wooden (or moulded plastic) panels that form the watertight cylinder.",
      },
      {
        title: "The hoops",
        description:
          "Bands under tension that bind the staves tighter the more the bucket is loaded.",
      },
      {
        title: "The bail",
        description:
          "A pivoting wire handle that balances the load and allows controlled pouring.",
      },
      {
        title: "The base",
        description:
          "A flat bottom that stands, stacks, and sheds its contents when tipped.",
      },
    ],
    material: "Wood with copper alloy (modern: galvanized steel, plastic)",
    materials: ["Wood", "Copper", "Metal", "Plastic"],
    dimensions: "≈ 300 mm × 280 mm",
    image: "/objects/bucket/main.jpg",
    gallery: ["/objects/bucket/main.jpg"],
    quote:
      "A bucket is a wheel for water: it moves a heavy load the way a hand can lift it.",
    quoteAuthor: "Archive note, Object 034",
    timeline: [
      {
        year: "Antiquity",
        title: "Wells and fields",
        description:
          "Staved wooden buckets carry water from wells and irrigation channels.",
      },
      {
        year: "c. 600 CE",
        title: "Anglo-Saxon bucket",
        description:
          "The pictured iron- and copper-bound wooden bucket survives from early medieval England.",
      },
      {
        year: "19th century",
        title: "Galvanized steel",
        description:
          "Galvanized sheet steel makes the bucket cheap, rust-resistant, and mass-produced.",
      },
      {
        year: "20th century",
        title: "Plastic",
        description:
          "Moulded plastic repeats the same staved geometry in a single seamless piece.",
      },
    ],
    sources: [
      { title: "Bucket — Wikipedia", url: "https://en.wikipedia.org/wiki/Bucket" },
    ],
    imageCredit: {
      creator: "Lajmmoore",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Early_medieval_bucket_from_Little_Wilbraham.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "clothespin",
    slug: "clothespin",
    number: "035",
    name: "Clothespin",
    category: "household",
    year: "1853",
    yearNum: 1853,
    designer: "David M. Smith",
    origin: "United States",
    description:
      "A pinch of spring steel that holds a garment to a line in any wind without damaging it.",
    longDescription:
      "Hanging laundry to dry is ancient, but holding it on a line without leaving holes was a problem that took until 1853 to solve properly, when David M. Smith of Vermont patented a wooden clothespin whose two jaws were pressed together by a spring. The jaw, the spring, and the pivot became the standard form almost immediately.\n\nThe clothespin is a spring-loaded clamp engineered for a very specific set of requirements. Its jaws grip hard enough to hold wet fabric in a gale, yet softly enough not to mark the cloth; the gap between the jaws is tuned to the thickness of a folded garment on a line; and the whole mechanism is two parts plus a spring, trivial to manufacture and repair. The same principles — grip, gentleness, and weather resistance — were later reborn in plastic, with the identical geometry.",
    whyTimeless: [
      "Spring pressure delivers constant grip that adjusts automatically to fabric thickness.",
      "Rounded jaws hold firmly without leaving pinch marks or holes in the garment.",
      "It is two pieces of wood and a spring — cheap, repairable, and weatherproof by design.",
    ],
    anatomy: [
      {
        title: "The jaws",
        description:
          "Two opposing grip faces that clamp the fabric without cutting or marking it.",
      },
      {
        title: "The spring",
        description:
          "The steel coil that supplies the constant clamping force.",
      },
      {
        title: "The pivot",
        description:
          "The point where the jaws hinge, multiplying the spring's pull into grip.",
      },
      {
        title: "The finger grips",
        description:
          "Rounded ends that spread the jaws open with one hand, even when wet.",
      },
    ],
    material: "Wood and steel spring (modern: plastic)",
    materials: ["Wood", "Steel", "Plastic"],
    dimensions: "≈ 95 mm × 15 mm",
    image: "/objects/clothespin/main.jpg",
    gallery: ["/objects/clothespin/main.jpg"],
    quote:
      "Wind, wet cloth, and a line: the clothespin is the only tool that handles all three and vanishes.",
    quoteAuthor: "Archive note, Object 035",
    timeline: [
      {
        year: "Before 1853",
        title: "Solid pegs",
        description:
          "One-piece wooden pegs pinch clothes but leave marks and slip in wind.",
      },
      {
        year: "1853",
        title: "Spring clamp",
        description:
          "David M. Smith patents the spring-clamp wooden clothespin.",
      },
      {
        year: "19th century",
        title: "Mass manufacture",
        description:
          "The wire spring and turned wooden jaws are produced by the million.",
      },
      {
        year: "Today",
        title: "Plastic, same geometry",
        description:
          "Moulded plastic clothespins repeat the jaw-and-spring principle unchanged.",
      },
    ],
    sources: [
      { title: "Clothespin — Wikipedia", url: "https://en.wikipedia.org/wiki/Clothespin" },
    ],
    imageCredit: {
      creator: "Nt",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Clothespins_on_the_Clotheslines.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "coat-hook",
    slug: "coat-hook",
    number: "036",
    name: "Coat Hook",
    category: "household",
    year: "Ancient",
    yearNum: -2000,
    designer: "Unknown — ancient",
    origin: "Everywhere",
    description:
      "A peg that holds a garment's weight by hanging, not clamping — the oldest kind of hanger.",
    longDescription:
      "Long before there were wardrobes, there were pegs: a projecting spike on a wall that holds a garment by the simple, reliable force of gravity. The coat hook is that peg refined into a manufactured object, with the curve at its tip the only real design decision. It is the most minimal clothing-storage device that can exist — a single protrusion with nothing to open, close, or adjust.\n\nThe hook's geometry does two things. Its projection keeps the garment off the wall, so air circulates and creases stay out; its upturned tip stops the weight of the garment from sliding the loop off. Everything else is material: wood, then porcelain, brass, and finally the moulded plastics and stamped metals of today. A wall of hooks is a wardrobe reduced to its load-bearing skeleton, and it has needed no redesign since the first peg.",
    whyTimeless: [
      "Gravity is the only mechanism — hang, and it holds; lift, and it releases.",
      "It keeps garments off the wall, aired and uncreased, with zero moving parts.",
      "From a branch in a hut to a brass hook in a hotel, the geometry is identical.",
    ],
    anatomy: [
      {
        title: "The projection",
        description:
          "The body that holds the garment away from the wall for airflow.",
      },
      {
        title: "The curve",
        description:
          "The upturned tip that keeps the garment loop from slipping off.",
      },
      {
        title: "The base",
        description:
          "The fixing plate that transfers the load safely into the wall.",
      },
      {
        title: "The spacing",
        description:
          "The arrangement on a rail that lets several garments hang without crowding.",
      },
    ],
    material: "Metal, brass, wood, or plastic",
    materials: ["Metal", "Brass", "Wood", "Plastic"],
    dimensions: "≈ 60 mm × 50 mm",
    image: "/objects/coat-hook/main.jpg",
    gallery: ["/objects/coat-hook/main.jpg"],
    quote:
      "A hook is a wardrobe reduced to a single load-bearing point.",
    quoteAuthor: "Archive note, Object 036",
    timeline: [
      {
        year: "Prehistory",
        title: "The peg",
        description:
          "Projecting pegs hold clothing and tools in the earliest dwellings.",
      },
      {
        year: "Antiquity",
        title: "Metal hooks",
        description:
          "Bronze and iron hooks hang garments in Roman and Egyptian households.",
      },
      {
        year: "19th century",
        title: "Domestic brass",
        description:
          "Cast brass hooks become standard fittings in middle-class homes.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "Moulded plastic and stamped steel repeat the ancient peg's geometry.",
      },
    ],
    sources: [
      { title: "Coat hook — Wikipedia", url: "https://en.wikipedia.org/wiki/Coat_hook" },
    ],
    imageCredit: {
      creator: "Fructibus",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Coat_hook_C.jpg",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "lantern",
    slug: "lantern",
    number: "037",
    name: "Lantern",
    category: "household",
    year: "c. 1800",
    yearNum: 1800,
    designer: "Unknown — Europe",
    origin: "Europe",
    description:
      "A flame in a glass case: portable light that can be carried, hung, or blown out in safety.",
    longDescription:
      "The lantern is a protected flame. Its glass panes let the light pass while keeping out the wind that would blow it out and the fingers that would be burned; its chimney draws air for combustion; its handle makes the light portable; and its top lets the heat escape. Before electric light, the lantern was the only way to carry fire safely through a street or a storm.\n\nThe lantern's form is dictated by its physics. A flame needs oxygen, so vents are built in; the glass must surround the flame closely to be an efficient shield; the metal or wooden frame must support the glass and survive the heat. When electric light arrived, the lantern survived as the shape of safety — from railway signal lamps to the hurricane lamp — because enclosing a light source in a protective case was a problem the lantern had already solved.",
    whyTimeless: [
      "Glass shielding protects the flame from wind while transmitting its light — a complete solution.",
      "Built-in vents supply oxygen while the chimney carries smoke and heat away.",
      "Its handle, base, and top make it portable, hangable, and self-contained.",
    ],
    anatomy: [
      {
        title: "The glass",
        description:
          "Panels of clear mica or glass that pass light while shielding the flame.",
      },
      {
        title: "The frame",
        description:
          "The metal or wooden cage that holds the glass and survives the heat.",
      },
      {
        title: "The vents",
        description:
          "Air openings at the base that feed the flame oxygen.",
      },
      {
        title: "The handle",
        description:
          "A carry ring that makes the lantern fully portable and hangable.",
      },
    ],
    material: "Metal and glass",
    materials: ["Metal", "Glass"],
    dimensions: "≈ 300 mm × 160 mm",
    image: "/objects/lantern/main.jpg",
    gallery: ["/objects/lantern/main.jpg"],
    quote:
      "A lantern is fire made portable, polite, and safe enough to carry indoors.",
    quoteAuthor: "Archive note, Object 037",
    timeline: [
      {
        year: "Antiquity",
        title: "Open flames",
        description:
          "Torches and open lamps carry light, badly, until some form of shield appears.",
      },
      {
        year: "c. 1800",
        title: "The glass lantern",
        description:
          "Framed glass lanterns become standard household and street lighting.",
      },
      {
        year: "1815",
        title: "Safety lamps",
        description:
          "The Davy lamp protects miners' flames, extending the lantern principle below ground.",
      },
      {
        year: "Today",
        title: "Electric afterlives",
        description:
          "Electric lanterns and signal lamps keep the protective-case form of the original.",
      },
    ],
    sources: [
      { title: "Lantern — Wikipedia", url: "https://en.wikipedia.org/wiki/Lantern" },
    ],
    imageCredit: {
      creator: "Syced",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Old_lantern_in_Brittany.jpg",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "lighter",
    slug: "lighter",
    number: "038",
    name: "Lighter",
    category: "household",
    year: "1903",
    yearNum: 1903,
    designer: "Carl Auer von Welsbach (flint)",
    origin: "Austria / United States",
    description:
      "A pocket-sized flame on demand: flint, fuel, and wick arranged for one thumb.",
    longDescription:
      "The lighter became reliable in 1903, when the chemist Carl Auer von Welsbach invented ferrocerium — a flint alloy that throws a hot shower of sparks when struck. Combined with a reservoir of fuel and a wick, it produced the first practical pocket lighter: a flame that could be produced and extinguished at will, thousands of times, from something small enough to live in a pocket.\n\nThe pictured lighter is a silver-plated Ronson of the kind that dominated the mid-twentieth century. Its mechanism — a thumb wheel that scrapes the flint, a snuffer that closes the flame — is a tiny machine with a satisfying economy of movement. Later disposables replaced the flint with a spark wheel and the wick with a pressurized gas jet, but the contract is unchanged: fuel, spark, and a chamber that contains the fire until you ask for it.",
    whyTimeless: [
      "Ferrocerium flint turned ignition into a simple, repeatable mechanical scrape.",
      "Fuel, wick, and snuffer contain the fire completely until a single thumb gesture releases it.",
      "The mechanism is small, self-contained, and refillable — designed to last a lifetime.",
    ],
    anatomy: [
      {
        title: "The flint",
        description:
          "A ferrocerium rod that throws sparks when scraped by the strike wheel.",
      },
      {
        title: "The wheel",
        description:
          "A thumb-driven serrated wheel that drags across the flint to ignite the fuel.",
      },
      {
        title: "The fuel reservoir",
        description:
          "The chamber holding petrol (or gas) that feeds the wick.",
      },
      {
        title: "The snuffer",
        description:
          "The cap that closes over the flame to extinguish it cleanly.",
      },
    ],
    material: "Silver-plated metal (modern: metal, plastic, gas)",
    materials: ["Metal", "Plastic"],
    dimensions: "≈ 65 mm × 40 mm",
    image: "/objects/lighter/main.jpg",
    gallery: ["/objects/lighter/main.jpg"],
    quote:
      "Before the lighter, fire came from a strike or a spark. The lighter put both in your hand.",
    quoteAuthor: "Archive note, Object 038",
    timeline: [
      {
        year: "1823",
        title: "Döbereiner's lamp",
        description:
          "The first practical lighter uses a platinum catalyst and hydrogen — too fragile for pockets.",
      },
      {
        year: "1903",
        title: "Ferrocerium flint",
        description:
          "Carl Auer von Welsbach invents the sparking alloy that makes lighters reliable.",
      },
      {
        year: "1920s–30s",
        title: "The classic lighter",
        description:
          "Ronson and Zippo perfect the thumb-wheel, wick, and snuffer mechanism.",
      },
      {
        year: "Today",
        title: "Disposable gas",
        description:
          "Disposable butane lighters repeat the spark-and-fuel contract by the billion.",
      },
    ],
    sources: [
      { title: "Lighter — Wikipedia", url: "https://en.wikipedia.org/wiki/Lighter" },
      { title: "Ferrocerium — Wikipedia", url: "https://en.wikipedia.org/wiki/Ferrocerium" },
    ],
    imageCredit: {
      creator: "Joe Haupt",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Vintage_Ronson_%22Mayfair%22_Cigarette_Lighter,_Silver_Plated_(9759005772).jpg",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "light-bulb",
    slug: "light-bulb",
    number: "039",
    name: "Light Bulb",
    category: "household",
    year: "1879",
    yearNum: 1879,
    designer: "Thomas Edison / Joseph Swan",
    origin: "United States / England",
    description:
      "A wire that glows when current passes through it, sealed in glass to keep the air out.",
    longDescription:
      "The incandescent bulb is a very simple idea with a very demanding implementation: run electricity through a thin wire until it glows, and seal it in glass so the oxygen that would burn it instantly is removed. Joseph Swan demonstrated a working carbon-filament lamp in 1878 and Thomas Edison a practical one in 1879; their rivalry compressed years of work into the bulb's sudden arrival.\n\nThe bulb's shape is dictated by physics. The glass envelope holds a vacuum or inert gas; the filament is coiled to fit length into volume; the screw base carries both the current and the fitting. It lit the world for a century, and even as LED fixtures replace it, the bulb's legacy lives in every household socket — a standardized interface that has outlived the technology it was designed for.",
    whyTimeless: [
      "The screw base created a universal socket standard that decades of technology still respect.",
      "A coiled filament packs maximum glowing length into a compact, safe envelope.",
      "The glass envelope is the entire invention: it preserves the glowing wire from the air that would destroy it.",
    ],
    anatomy: [
      {
        title: "The filament",
        description:
          "A thin tungsten or carbon wire whose resistance turns electricity into heat and light.",
      },
      {
        title: "The envelope",
        description:
          "The glass bulb that holds a vacuum or inert gas, protecting the filament.",
      },
      {
        title: "The base",
        description:
          "The screw and contact that connect the bulb to the circuit and hold it in the socket.",
      },
      {
        title: "The support",
        description:
          "The internal glass stem and wires that anchor the filament and lead out the current.",
      },
    ],
    material: "Glass and tungsten (now LED)",
    materials: ["Glass", "Metal"],
    dimensions: "≈ 105 mm × 60 mm",
    image: "/objects/light-bulb/main.jpg",
    gallery: ["/objects/light-bulb/main.jpg"],
    quote:
      "The bulb made daylight a commodity that could be switched on in any room, any time of night.",
    quoteAuthor: "Archive note, Object 039",
    timeline: [
      {
        year: "1878–79",
        title: "First lamps",
        description:
          "Swan and Edison independently produce practical carbon-filament incandescent lamps.",
      },
      {
        year: "1880s",
        title: "The screw base",
        description:
          "Edison's screw socket becomes the standard fitting for electric light.",
      },
      {
        year: "1904–13",
        title: "Tungsten",
        description:
          "Tungsten filaments and inert gas fillings make the bulb efficient and long-lived.",
      },
      {
        year: "21st century",
        title: "The LED",
        description:
          "LEDs replace the glowing filament but keep Edison's socket and the bulb's shape.",
      },
    ],
    sources: [
      { title: "Incandescent light bulb — Wikipedia", url: "https://en.wikipedia.org/wiki/Incandescent_light_bulb" },
      { title: "Thomas Edison — Britannica", url: "https://www.britannica.com/biography/Thomas-Edison" },
    ],
    imageCredit: {
      creator: "KMJ",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Gluehlampe_01_KMJ.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "light-switch",
    slug: "light-switch",
    number: "040",
    name: "Light Switch",
    category: "household",
    year: "1916",
    yearNum: 1916,
    designer: "William J. Newton (toggle)",
    origin: "United States",
    description:
      "A lever that makes and breaks a circuit with a click you can hear in the dark.",
    longDescription:
      "Electric light needed a control, and the earliest controls were crude rotary and push switches that failed or sparked. The modern toggle switch — a small lever that snaps between two positions with a positive click — was patented in 1916 by William J. Newton, and its geometry has governed the wall switch ever since.\n\nThe toggle's design succeeds because of its feedback. The internal spring-loaded mechanism snaps the lever over-center, so the switch is always firmly on or firmly off — never in between, never half-connected. The user feels and hears the click, which tells them the circuit state without looking. Its flat face sits flush in a wall plate, sized for a fingertip. Every smart switch that replaces it still mounts in the same box, on the same centers, speaking to the same wiring.",
    whyTimeless: [
      "A spring-driven over-center mechanism guarantees the switch is never partially connected.",
      "Audible and tactile feedback tell the user the circuit state without looking.",
      "Its standardized faceplate and mounting box have survived a century of electrical technology.",
    ],
    anatomy: [
      {
        title: "The toggle",
        description:
          "A small lever that rocks between two stable positions.",
      },
      {
        title: "The mechanism",
        description:
          "A spring that snaps the contacts over-center, making or breaking the circuit cleanly.",
      },
      {
        title: "The contacts",
        description:
          "Metal contacts that meet to complete the circuit or separate to break it.",
      },
      {
        title: "The plate",
        description:
          "The faceplate that mounts the switch flush and protects the wiring.",
      },
    ],
    material: "Plastic and brass contacts",
    materials: ["Plastic", "Brass"],
    dimensions: "≈ 30 mm × 30 mm face",
    image: "/objects/light-switch/main.jpg",
    gallery: ["/objects/light-switch/main.jpg"],
    quote:
      "The wall switch is the door handle of electricity: a gesture everyone already knows.",
    quoteAuthor: "Archive note, Object 040",
    timeline: [
      {
        year: "1880s",
        title: "Early switches",
        description:
          "Rotary and push-button switches control the first domestic electric lights.",
      },
      {
        year: "1916",
        title: "The toggle",
        description:
          "William J. Newton patents the snap-action toggle switch.",
      },
      {
        year: "20th century",
        title: "Standardized",
        description:
          "Standard wall boxes and faceplates make the switch a universal building fitting.",
      },
      {
        year: "Today",
        title: "Smart afterlives",
        description:
          "Dimmer and smart switches keep the same mounting and wiring standard.",
      },
    ],
    sources: [
      { title: "Light switch — Wikipedia", url: "https://en.wikipedia.org/wiki/Light_switch" },
    ],
    imageCredit: {
      creator: "Santeri Viinamäki",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:White_light_switch.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "mirror",
    slug: "mirror",
    number: "041",
    name: "Mirror",
    category: "household",
    year: "1938",
    yearNum: 1938,
    designer: "Raymond Manupelli (pictured)",
    origin: "United States",
    description:
      "A sheet of glass backed with silver that returns your own image — the oldest self-checking tool.",
    longDescription:
      "Polished obsidian and metal mirrors existed six thousand years ago, but the modern mirror arrived in Venice in the fifteenth century, when glassmakers learned to back flat glass with a reflective layer — a technique that made the mirror accurate, cheap, and finally domestic. The pictured wall mirror, designed by Raymond Manupelli around 1938, shows the form fully resolved: a glass surface set in a frame that both protects and presents it.\n\nThe mirror's design problem is almost purely material. The glass must be flat enough that the reflection is undistorted, the backing must be uniform and permanent, and the frame must hold the glass safely away from the wall. Every household mirror repeats this contract. It is a tool that gives feedback no other object can: the instant, objective check of how we look — which is why it has been essential to grooming, decoration, and self-knowledge for centuries.",
    whyTimeless: [
      "Flat silvered glass returns an undistorted image — a task the material itself completes perfectly.",
      "The frame protects the edge and makes the fragile sheet mountable, hangable, and decorative.",
      "No mechanism could improve on a surface that simply reflects; the design is finished.",
    ],
    anatomy: [
      {
        title: "The glass",
        description:
          "Flat, polished float glass whose surface must be true to avoid distortion.",
      },
      {
        title: "The backing",
        description:
          "The silvered or coated layer that reflects light back through the glass.",
      },
      {
        title: "The frame",
        description:
          "The protective border that holds, mounts, and finishes the sheet.",
      },
      {
        title: "The hanging",
        description:
          "The fittings that fix the mirror to the wall at eye height.",
      },
    ],
    material: "Glass with reflective backing, wood frame",
    materials: ["Glass", "Wood"],
    dimensions: "≈ 900 mm × 700 mm",
    image: "/objects/mirror/main.jpg",
    gallery: ["/objects/mirror/main.jpg"],
    quote:
      "The mirror is the only machine whose entire output is the truth about the person using it.",
    quoteAuthor: "Archive note, Object 041",
    timeline: [
      {
        year: "c. 6000 BCE",
        title: "Obsidian",
        description:
          "Polished volcanic glass gives the first faint reflections in Anatolia.",
      },
      {
        year: "15th century",
        title: "Venice",
        description:
          "Venetian glassmakers master silvered flat glass, creating the accurate mirror.",
      },
      {
        year: "19th century",
        title: "Silver on glass",
        description:
          "The silvering process makes mirrors accurate, affordable, and universal.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "Modern mirrors differ from Manupelli's in materials, not principle.",
      },
    ],
    sources: [
      { title: "Mirror — Wikipedia", url: "https://en.wikipedia.org/wiki/Mirror" },
    ],
    imageCredit: {
      creator: "Raymond Manupelli",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Raymond_Manupelli,_Wall_Mirror,_c._1938,_NGA_17574.jpg",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "brick",
    slug: "brick",
    number: "042",
    name: "Brick",
    category: "household",
    year: "c. 3000 BCE",
    yearNum: -3000,
    designer: "Unknown — Mesopotamian",
    origin: "Mesopotamia",
    description:
      "A fired clay block sized to the human hand, stacked into every wall ever built.",
    longDescription:
      "The brick is a building made of building blocks: a lump of clay shaped in a mold, dried, and often fired, sized so one person can lift it and mortar can grip it. Fired bricks appeared in Mesopotamia around 3000 BCE, and the Romans spread a standardized brick industry across the empire. The form's genius is that it turns construction into repetition — a wall is just the same unit placed many times.\n\nEvery dimension of the brick is an ergonomic compromise. It must be long enough to lay quickly, wide and deep enough to build a stable wall, and light enough to lift and set with one hand. Its rectangular prism nests into courses, bonds across joints, and lets masons build strength into the pattern of the laying rather than the block itself. Modern materials changed the recipe, never the module.",
    whyTimeless: [
      "One hand-liftable unit with mortar-gripping faces builds any structure through repetition.",
      "Fired clay is cheap, abundant, and effectively permanent — it outlasts most structures.",
      "Its proportions optimize lifting, laying, and bonding together — a solved ergonomic problem.",
    ],
    anatomy: [
      {
        title: "The body",
        description:
          "A rectangular prism of fired clay sized to one-handed laying.",
      },
      {
        title: "The bed faces",
        description:
          "The flat top and bottom that carry the mortar and transmit load evenly.",
      },
      {
        title: "The frog",
        description:
          "The shallow depression that reduces weight and improves mortar keying.",
      },
      {
        title: "The edges",
        description:
          "Sharp, true sides that let courses be laid to a clean line.",
      },
    ],
    material: "Fired clay",
    materials: ["Clay", "Ceramic"],
    dimensions: "≈ 230 mm × 110 mm × 75 mm",
    image: "/objects/brick/main.jpg",
    gallery: ["/objects/brick/main.jpg"],
    quote:
      "Civilization is a word, but brick is a thing you can hold in one hand.",
    quoteAuthor: "Archive note, Object 042",
    timeline: [
      {
        year: "c. 3000 BCE",
        title: "Mesopotamia",
        description:
          "Fired bricks are made in molds in Mesopotamia and used in monumental construction.",
      },
      {
        year: "Roman era",
        title: "Standard module",
        description:
          "The Romans industrialize brickmaking, standardizing size and quality across the empire.",
      },
      {
        year: "Industrial era",
        title: "Machine brick",
        description:
          "Extrusion and kiln technology mass-produce identical, cheap bricks.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The hand-sized fired clay block remains the world's most common building unit.",
      },
    ],
    sources: [
      { title: "Brick — Wikipedia", url: "https://en.wikipedia.org/wiki/Brick" },
      { title: "Brick — Britannica", url: "https://www.britannica.com/technology/brick-building-material" },
    ],
    imageCredit: {
      creator: "Andrewlister",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Brick.jpg",
      license: "Public domain",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "mailbox",
    slug: "mailbox",
    number: "043",
    name: "Mailbox",
    category: "everyday",
    year: "c. 1915",
    yearNum: 1915,
    designer: "Standardized for rural free delivery",
    origin: "United States",
    description:
      "A rainproof box at the roadside that receives the mail a courier will never have to approach twice.",
    longDescription:
      "The roadside mailbox exists because of rural free delivery. When the United States extended free home mail delivery to farms in the late nineteenth century, carriers could not leave their vehicles — so a standardized, self-service box became the interface between the postal service and the household. By around 1915 the familiar galvanized steel box on a post, with its arched top, latch, and flag, had become the norm.\n\nThe box's design is a study in roadside ergonomics. Its arch sheds rain; its door opens from the carrier's side without leaving the vehicle; its flag signals outgoing mail without any electronics; and its size accommodates a day's mail while keeping weather out. The form has proved so settled that even in the era of email, the roadside mailbox stands unchanged along a million lanes.",
    whyTimeless: [
      "The arched, latching steel box protects mail from rain and roadside weather indefinitely.",
      "The flag is a zero-power signalling system for outgoing mail.",
      "A fixed roadside interface lets one carrier serve many homes without leaving the vehicle.",
    ],
    anatomy: [
      {
        title: "The body",
        description:
          "The galvanized steel chamber sized for a day's letters and small parcels.",
      },
      {
        title: "The arch",
        description:
          "The curved top that sheds rain away from the opening.",
      },
      {
        title: "The door",
        description:
          "The latchable front that opens from the road side for the carrier.",
      },
      {
        title: "The flag",
        description:
          "The pivoting signal that announces outgoing mail.",
      },
    ],
    material: "Galvanized steel",
    materials: ["Steel", "Metal"],
    dimensions: "≈ 450 mm × 250 mm × 200 mm",
    image: "/objects/mailbox/main.jpg",
    gallery: ["/objects/mailbox/main.jpg"],
    quote:
      "The mailbox is a handshake between a household and a nationwide service, left on a post.",
    quoteAuthor: "Archive note, Object 043",
    timeline: [
      {
        year: "1896",
        title: "Rural free delivery",
        description:
          "The US Post Office begins rural free delivery, creating the need for roadside boxes.",
      },
      {
        year: "c. 1915",
        title: "The standard box",
        description:
          "The galvanized arched mailbox becomes the standard rural fitting.",
      },
      {
        year: "20th century",
        title: "Suburban spread",
        description:
          "The same box moves into suburban curbsides across North America.",
      },
      {
        year: "Today",
        title: "Still standing",
        description:
          "Even with digital mail, the roadside mailbox remains the daily physical interface.",
      },
    ],
    sources: [
      { title: "Mailbox — Wikipedia", url: "https://en.wikipedia.org/wiki/Mailbox" },
    ],
    imageCredit: {
      creator: "Tuxyso",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Letterboxes_Ocotillo_Wells_2013_Crop.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "fountain-pen",
    slug: "fountain-pen",
    number: "044",
    name: "Fountain Pen",
    category: "writing",
    year: "1884",
    yearNum: 1884,
    designer: "Lewis Waterman",
    origin: "United States",
    description:
      "A nib fed by capillary action from a reservoir — ink that flows as you write, and stops when you don't.",
    longDescription:
      "The fountain pen solved the messiest problem in writing: the nib ran dry, so you dipped; you dipped too much, so you blotted. In 1884 Lewis Waterman, an insurance salesman from New York, fitted a capillary feed into a pen so that ink flows to the nib steadily and evenly — pulled along by the narrow channels and the surface tension of the ink itself, not by the writer's pressing harder.\n\nThe feed is the entire invention. It meters ink from the reservoir to the slit of the nib at exactly the rate writing consumes it, and it stops when the pen is lifted because the same capillary forces hold the ink in place. A century of pens — piston, cartridge, and eyedropper — all refine the same principle. The fountain pen's nib still moves across paper the way it did in 1884, and its best designs are still among the most durable objects ever made for the desk.",
    whyTimeless: [
      "Capillary action replaces the need to dip, regulating ink flow automatically.",
      "The slit nib flexes to vary line width, giving the writer control no ballpoint offers.",
      "A well-made fountain pen is refillable and repairable — designed for decades, not disposal.",
    ],
    anatomy: [
      {
        title: "The nib",
        description:
          "A pointed steel or gold slit that splits under pressure to deliver and shape the ink line.",
      },
      {
        title: "The feed",
        description:
          "Capillary channels that meter a steady supply of ink from the reservoir to the nib.",
      },
      {
        title: "The reservoir",
        description:
          "The barrel, sac, or cartridge that holds the ink supply.",
      },
      {
        title: "The grip",
        description:
          "The section designed for the correct holding angle and pressure.",
      },
    ],
    material: "Resin body, steel or gold nib",
    materials: ["Plastic", "Steel"],
    dimensions: "≈ 140 mm × 12 mm",
    image: "/objects/fountain-pen/main.jpg",
    gallery: ["/objects/fountain-pen/main.jpg"],
    quote:
      "The fountain pen removed the one interruption between the thought and the line: the dip.",
    quoteAuthor: "Archive note, Object 044",
    timeline: [
      {
        year: "1884",
        title: "Waterman's feed",
        description:
          "Lewis Waterman patents the capillary feed that makes the fountain pen practical.",
      },
      {
        year: "Early 20th century",
        title: "Golden age",
        description:
          "Lever-fill and piston-fill pens make the fountain pen the standard writing instrument.",
      },
      {
        year: "1960s",
        title: "Ballpoint challenge",
        description:
          "The ballpoint displaces the fountain pen for everyday use.",
      },
      {
        year: "Today",
        title: "Still writing",
        description:
          "The fountain pen endures for signatures, calligraphy, and daily use by devoted writers.",
      },
    ],
    sources: [
      { title: "Fountain pen — Wikipedia", url: "https://en.wikipedia.org/wiki/Fountain_pen" },
    ],
    imageCredit: {
      creator: "Petar Milošević",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Fountain_pen_writing_(literacy).jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "ink-bottle",
    slug: "ink-bottle",
    number: "045",
    name: "Ink Bottle",
    category: "writing",
    year: "c. 2500 BCE",
    yearNum: -2500,
    designer: "Unknown — ancient",
    origin: "China / Egypt",
    description:
      "A sealed vessel that keeps writing fluid from drying, spilling, or tipping.",
    longDescription:
      "Ink is a perishable fluid: exposed to air it dries, unsealed it spills, and its container must survive the abuse of a working desk. The ink bottle solves all three with a low, heavy, narrow-necked vessel that resists tipping, seals against evaporation, and lets a nib reach the ink without waste. The pictured example is a Waterman ink bottle of the twentieth century, the form familiar to every fountain-pen user.\n\nThe bottle's design is about the chemistry of keeping a liquid stable. The narrow neck reduces the surface open to the air, slowing evaporation; the wide, heavy base lowers the center of gravity so the bottle stands firm; the flat sides let a pen be dipped at a safe angle. Glass is the material of choice because it is inert — it neither reacts with the ink nor leaks through. Ink itself is ancient — Egyptian and Chinese inks are among the oldest manufactured fluids — and the bottle that carries it has stayed essentially the same shape ever since.",
    whyTimeless: [
      "A narrow neck and sealed cap slow evaporation, keeping ink usable for years.",
      "A wide, heavy base makes the bottle hard to tip and easy to stand.",
      "Inert glass neither reacts with the ink nor spoils it — the material is the solution.",
    ],
    anatomy: [
      {
        title: "The base",
        description:
          "Wide and heavy to lower the center of gravity and resist tipping.",
      },
      {
        title: "The neck",
        description:
          "Narrow, to reduce the ink surface open to the air and ease dipping.",
      },
      {
        title: "The cap",
        description:
          "The seal that prevents evaporation and spillage when closed.",
      },
      {
        title: "The well",
        description:
          "The internal shape that pools ink for the nib and lets the last drops be used.",
      },
    ],
    material: "Glass",
    materials: ["Glass"],
    dimensions: "≈ 70 mm × 70 mm",
    image: "/objects/ink-bottle/main.jpg",
    gallery: ["/objects/ink-bottle/main.jpg"],
    quote:
      "An ink bottle is a battery for writing: it stores the chemical energy of a thought.",
    quoteAuthor: "Archive note, Object 045",
    timeline: [
      {
        year: "c. 2500 BCE",
        title: "First inks",
        description:
          "Egyptian and Chinese scribes use lamp-black and pigment inks.",
      },
      {
        year: "19th century",
        title: "The ink bottle",
        description:
          "Glass ink bottles become standard desk equipment alongside steel pens.",
      },
      {
        year: "20th century",
        title: "The ink well",
        description:
          "Fountain-pen bottles add built-in wells for clean filling.",
      },
      {
        year: "Today",
        title: "Quieter but unchanged",
        description:
          "Bottled ink endures for fountain-pen and calligraphy users in the same glass form.",
      },
    ],
    sources: [
      { title: "Ink — Wikipedia", url: "https://en.wikipedia.org/wiki/Ink" },
    ],
    imageCredit: {
      creator: "Eric Magnan",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:BlackInkBottle.JPG",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "crayon",
    slug: "crayon",
    number: "046",
    name: "Crayon",
    category: "writing",
    year: "1903",
    yearNum: 1903,
    designer: "Binney & Smith (Crayola)",
    origin: "United States",
    description:
      "A stick of wax and pigment that draws on nearly any surface without sharpening or drying out.",
    longDescription:
      "Crayons descend from the oldest drawing materials — pigment mixed with a binder and shaped into a stick — but the modern crayon was industrialized in 1903, when Binney & Smith, makers of the pigment carbon black, introduced a box of eight colors under the name Crayola. It turned the wax crayon from a novelty into the first drawing tool every child is given.\n\nThe crayon's design is essentially a problem in material science. The wax must be soft enough to deposit color with light pressure, firm enough not to crumble in a child's hand, and stable enough never to dry out. The stick's hexagonal or round cross-section grips well and rolls rarely. There is no mechanism to maintain and no liquid to dry: a crayon is usable to the last millimetre, and its geometry — pigment bound in wax — is the same as the pigment bound in oil that painters used for millennia.",
    whyTimeless: [
      "Wax pigment never dries, never needs a sharpener, and works on paper, board, or wall.",
      "Its softness is tuned so a child's light hand leaves a full-color mark.",
      "There is nothing to break, leak, or maintain — the entire object is its own mechanism.",
    ],
    anatomy: [
      {
        title: "The body",
        description:
          "A pigmented wax stick shaped for a comfortable, non-rolling grip.",
      },
      {
        title: "The point",
        description:
          "A broad drawing edge that wears down to a fresh, usable face.",
      },
      {
        title: "The paper",
        description:
          "The wrapper that labels the color and keeps hands clean.",
      },
      {
        title: "The pigment",
        description:
          "The colorant held in suspension by the wax binder.",
      },
    ],
    material: "Paraffin wax and pigment",
    materials: ["Wax", "Composite"],
    dimensions: "≈ 90 mm × 10 mm",
    image: "/objects/crayon/main.jpg",
    gallery: ["/objects/crayon/main.jpg"],
    quote:
      "Every artist's first tool is a crayon, and it is also the one they never outgrow.",
    quoteAuthor: "Archive note, Object 046",
    timeline: [
      {
        year: "Antiquity",
        title: "Pigment sticks",
        description:
          "Artists bind pigments in wax and oil from ancient Egypt to Rome.",
      },
      {
        year: "1903",
        title: "Crayola",
        description:
          "Binney & Smith introduce the eight-color Crayola box.",
      },
      {
        year: "20th century",
        title: "A classroom standard",
        description:
          "The crayon becomes the first art tool of childhood worldwide.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The wax crayon remains the universal first drawing instrument.",
      },
    ],
    sources: [
      { title: "Crayon — Wikipedia", url: "https://en.wikipedia.org/wiki/Crayon" },
    ],
    imageCredit: {
      creator: "Jorge Barrios",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Crayones_cera.jpg",
      license: "Public domain",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "eraser",
    slug: "eraser",
    number: "047",
    name: "Eraser",
    category: "writing",
    year: "1770",
    yearNum: 1770,
    designer: "Joseph Priestley (rubber's property noted)",
    origin: "England",
    description:
      "A block of rubber that lifts graphite from paper by friction, leaving the page whole.",
    longDescription:
      "Writing with graphite had a flaw: mistakes could not be undone. In 1770 the scientist Joseph Priestley noted that a curious material called rubber — brought from South America — could rub out pencil marks, and the eraser was born. Crude rubber was smelly and unreliable until Charles Goodyear's vulcanization in 1839 made it firm, stable, and perfect for the job.\n\nThe eraser works by friction and chemistry at once. Graphite clings to paper fibers; the soft rubber grips the graphite particles more strongly and carries them away as the eraser wears into crumbles. The form matters too — a block with a chamfered edge presents a fresh face as it wears, and the pink material's texture is tuned so it lifts the mark without roughing the paper. A pencil with an eraser is the only writing system that forgives, and that pair has never needed redesigning.",
    whyTimeless: [
      "Rubber's friction lifts graphite without cutting or tearing the paper.",
      "Vulcanized rubber made the material stable, clean, and mass-producible.",
      "The wearing block is self-renewing — each crumble reveals a fresh working surface.",
    ],
    anatomy: [
      {
        title: "The block",
        description:
          "The vulcanized rubber body, shaped to be gripped and to wear evenly.",
      },
      {
        title: "The edge",
        description:
          "A chamfered face that presents a fresh surface as it wears.",
      },
      {
        title: "The grit",
        description:
          "The fine filler that gives rubber just enough abrasiveness to lift graphite.",
      },
      {
        title: "The case",
        description:
          "The paper or plastic sleeve that keeps the eraser clean between uses.",
      },
    ],
    material: "Vulcanized rubber (often with pumice filler)",
    materials: ["Rubber", "Composite"],
    dimensions: "≈ 50 mm × 25 mm × 15 mm",
    image: "/objects/eraser/main.jpg",
    gallery: ["/objects/eraser/main.jpg"],
    quote:
      "The eraser is the one writing tool that exists to undo, and every writer needs it daily.",
    quoteAuthor: "Archive note, Object 047",
    timeline: [
      {
        year: "1770",
        title: "Rubber discovered",
        description:
          "Joseph Priestley notes that rubber erases pencil marks; the 'rubber' is born.",
      },
      {
        year: "1839",
        title: "Vulcanization",
        description:
          "Charles Goodyear's process makes rubber firm and reliable for erasing.",
      },
      {
        year: "1858",
        title: "Pencil-attached",
        description:
          "Hymen Lipman patents the pencil with an attached rubber eraser.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The pink rubber block still sits beside every pencil, doing the same job.",
      },
    ],
    sources: [
      { title: "Eraser — Wikipedia", url: "https://en.wikipedia.org/wiki/Eraser" },
    ],
    imageCredit: {
      creator: "ZooFari",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Pink_Pearl_eraser.jpg",
      license: "Public domain",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "pencil-sharpener",
    slug: "pencil-sharpener",
    number: "048",
    name: "Pencil Sharpener",
    category: "writing",
    year: "1847",
    yearNum: 1847,
    designer: "Thierry des Estwaux",
    origin: "France",
    description:
      "A conical cutting edge that peels a pencil to a point in a few turns of the wrist.",
    longDescription:
      "The pencil needed a point, and before 1828 the point came from a knife. The dedicated pencil sharpener began with French patents of the 1820s and 1840s — most famously Thierry des Estwaux's 1847 design of a small cone with a blade, into which the pencil is turned. The pictured plastic sharpener is that two-hundred-year-old idea unchanged.\n\nThe sharpener is a wedge arranged in a circle. The blade cuts a conical chamfer around the pencil's end, while the cylindrical casing both centers the pencil and collects the shavings. Its economy is total: the tool holds the blade at the correct cutting angle forever, removes the need for skill or practice, and fits in a pocket. Rotary sharpeners and electric models add machinery but no new principle — the cone-and-blade geometry remains the standard for good reason.",
    whyTimeless: [
      "A fixed blade at a fixed angle removes the skill from sharpening entirely.",
      "The cone centers the pencil and sets the point's taper automatically.",
      "It is a blade and a hole — nothing to adjust, align, or maintain.",
    ],
    anatomy: [
      {
        title: "The cone",
        description:
          "The tapering hole that centers the pencil and sets the cutting angle.",
      },
      {
        title: "The blade",
        description:
          "A single cutting edge fixed to shave the pencil at the correct angle.",
      },
      {
        title: "The body",
        description:
          "The casing that holds the blade, collects shavings, and protects fingers.",
      },
      {
        title: "The mouth",
        description:
          "The opening sized to standard pencil diameters.",
      },
    ],
    material: "Plastic and steel blade",
    materials: ["Plastic", "Steel"],
    dimensions: "≈ 35 mm × 30 mm × 20 mm",
    image: "/objects/pencil-sharpener/main.jpg",
    gallery: ["/objects/pencil-sharpener/main.jpg"],
    quote:
      "The sharpener took the last skill out of writing with a pencil — and that was its genius.",
    quoteAuthor: "Archive note, Object 048",
    timeline: [
      {
        year: "1828",
        title: "First patents",
        description:
          "French inventors patent 'pencil cutters' to replace the penknife.",
      },
      {
        year: "1847",
        title: "The cone sharpener",
        description:
          "Thierry des Estwaux patents the conical hole-and-blade sharpener.",
      },
      {
        year: "20th century",
        title: "Rotary and electric",
        description:
          "Cranked and electric sharpeners add speed but not new principle.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The simple plastic cone sharpener is still found in every schoolroom.",
      },
    ],
    sources: [
      { title: "Pencil sharpener — Wikipedia", url: "https://en.wikipedia.org/wiki/Pencil_sharpener" },
    ],
    imageCredit: {
      creator: "Kaldari",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Red_pencil_sharpener.jpg",
      license: "Public domain",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "drafting-compass",
    slug: "drafting-compass",
    number: "049",
    name: "Drawing Compass",
    category: "writing",
    year: "c. 500 BCE",
    yearNum: -500,
    designer: "Unknown — Greek",
    origin: "Ancient Greece",
    description:
      "Two hinged legs that transcribe a perfect circle from any center point on the page.",
    longDescription:
      "Geometry is built from straight lines and circles, and the drawing compass is the tool that draws the circles. Its hinged legs pivot around a center needle while a pencil or pen on the second leg traces the arc; the hinge holds the radius constant, so the drawn circle is geometrically exact. The principle is ancient — Greek geometers used dividers and compasses of bronze, and the tool has barely changed since.\n\nThe compass's design is pure mechanism. The hinge sets the radius; the needle anchors the center; the pencil leg carries the mark. Add a tightening screw and the radius is locked against the pressure of the hand. Later refinements added interchangeable points and extension arms, but the two-legged instrument remains the standard — because drawing a true circle from a fixed center is a problem that has exactly one elegant solution.",
    whyTimeless: [
      "A fixed hinge radius guarantees a geometrically exact circle, with no skill required.",
      "The anchoring needle and marking leg separate the circle's center from its edge.",
      "Its parts — hinge, needle, pencil — are simple, replaceable, and repairable.",
    ],
    anatomy: [
      {
        title: "The hinge",
        description:
          "The pivot that holds the legs at a fixed, lockable radius.",
      },
      {
        title: "The needle",
        description:
          "The anchoring point that fixes the circle's center in the paper.",
      },
      {
        title: "The marking leg",
        description:
          "The leg that carries the pencil or pen and traces the circumference.",
      },
      {
        title: "The joint",
        description:
          "The knuckle that lets the legs adjust and lock at the chosen radius.",
      },
    ],
    material: "Steel and brass",
    materials: ["Steel", "Brass"],
    dimensions: "≈ 160 mm closed",
    image: "/objects/drafting-compass/main.jpg",
    gallery: ["/objects/drafting-compass/main.jpg"],
    quote:
      "The compass draws the circle that the ruler cannot, and it has done so since Greek geometry.",
    quoteAuthor: "Archive note, Object 049",
    timeline: [
      {
        year: "Antiquity",
        title: "Greek dividers",
        description:
          "Bronze compasses and dividers are used by Greek geometers and surveyors.",
      },
      {
        year: "Middle Ages",
        title: "Workshop tool",
        description:
          "Compasses mark circles in medieval masonry, manuscript, and instrument work.",
      },
      {
        year: "19th century",
        title: "Precision instruments",
        description:
          "Machined steel and brass make the drafting compass precise and durable.",
      },
      {
        year: "Today",
        title: "Still drafting",
        description:
          "Digital drafting has not retired the compass; it remains in classrooms and workshops.",
      },
    ],
    sources: [
      { title: "Compass (drafting) — Wikipedia", url: "https://en.wikipedia.org/wiki/Compass_(drafting)" },
    ],
    imageCredit: {
      creator: "Dmitry Makeev",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Compass_(drawing_tool).jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "typewriter",
    slug: "typewriter",
    number: "050",
    name: "Typewriter",
    category: "writing",
    year: "1868",
    yearNum: 1868,
    designer: "Sholes, Glidden & Soulé",
    origin: "United States",
    description:
      "A mechanical keyboard whose type bars strike a ribbon onto paper: writing made into a machine.",
    longDescription:
      "The typewriter turned handwriting into a machine process. Patented in 1868 by Christopher Latham Sholes, Carlos Glidden and Samuel Soulé, and brought to market by Remington in 1873, it replaced the pen's slow line with keys that could be pressed at the speed of thought. The pictured Olympia Simplex of 1935 shows the design at its mature, nearly final form.\n\nThe machine's mechanism is the wonder. Each key pulls a lever that swings a type bar up to strike an inked ribbon against the paper; the carriage advances, the bell rings at the margin, and the platen returns. Its ergonomics even shaped the keyboard itself — the QWERTY layout was arranged to slow the fastest fingers and stop jamming. Electric and electronic typewriters refined it, and the computer keyboard is its direct descendant. The typewriter's design language — keys, carriage, ribbon — survived almost unchanged for a century.",
    whyTimeless: [
      "The type bar, ribbon, and platen convert finger pressure into a crisp printed character mechanically.",
      "It made writing fast, legible, and uniform, transforming offices and literature alike.",
      "Its QWERTY keyboard became the universal input standard that persists in every computer.",
    ],
    anatomy: [
      {
        title: "The keys",
        description:
          "Lever keys, arranged in the QWERTY pattern, that trigger the type bars.",
      },
      {
        title: "The type bars",
        description:
          "Arms carrying the type faces that swing up to strike the ribbon.",
      },
      {
        title: "The platen",
        description:
          "The roller that holds the paper and advances it line by line.",
      },
      {
        title: "The carriage",
        description:
          "The moving mechanism that shifts the paper leftward with each character.",
      },
    ],
    material: "Steel and plastic",
    materials: ["Metal", "Plastic"],
    dimensions: "≈ 320 mm × 300 mm × 120 mm",
    image: "/objects/typewriter/main.jpg",
    gallery: ["/objects/typewriter/main.jpg"],
    quote:
      "Every keyboard you have ever typed on is a descendant of the typewriter's answer to jammed keys.",
    quoteAuthor: "Archive note, Object 050",
    timeline: [
      {
        year: "1868",
        title: "The patent",
        description:
          "Sholes, Glidden and Soulé patent the typewriter with the QWERTY keyboard.",
      },
      {
        year: "1873",
        title: "Remington",
        description:
          "E. Remington & Sons manufacture the first commercial typewriters.",
      },
      {
        year: "1935",
        title: "Mature form",
        description:
          "The pictured Olympia Simplex represents the typewriter at its design peak.",
      },
      {
        year: "Today",
        title: "The keyboard lives on",
        description:
          "Computer keyboards preserve the typewriter's layout and typing motion.",
      },
    ],
    sources: [
      { title: "Typewriter — Wikipedia", url: "https://en.wikipedia.org/wiki/Typewriter" },
    ],
    imageCredit: {
      creator: "Sammlung der Medien und Wissenschaft",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Olympia_Simplex.jpg",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "index-card",
    slug: "index-card",
    number: "051",
    name: "Index Card",
    category: "writing",
    year: "c. 1876",
    yearNum: 1876,
    designer: "Standardized in library cataloging",
    origin: "United States / Europe",
    description:
      "A standardized paper rectangle that carries one fact and can be filed, sorted, and retrieved.",
    longDescription:
      "The index card is a unit of information made physical: a standard paper rectangle sized so that thousands of them fit in a drawer and each carries exactly one record. Its modern form was fixed in the late nineteenth century by library cataloging — most famously the 3-by-5-inch card of library card catalogs, which standardized the record, the drawer, and the filing order all at once.\n\nThe card's genius is its modularity. Because every card is the same size, any card can follow any other, so the collection can be sorted by author, title, or subject simply by reordering. When Melvil Dewey and others promoted card catalogs in the 1870s and 1880s, the index card became the working memory of libraries, offices, and science. Databases later copied its logic wholesale: a record is a card, a field is a line, a sort is a reorder. The physical card has outlived the filing cabinet it made obsolete.",
    whyTimeless: [
      "Uniform size makes every card interchangeable, so the set can be sorted by reordering alone.",
      "One card, one fact — a unit of knowledge that can be filed, shuffled, and retrieved.",
      "Its logic directly became the record-and-field model of every database.",
    ],
    anatomy: [
      {
        title: "The size",
        description:
          "The standard 3×5 (76×127 mm) rectangle, uniform across the entire set.",
      },
      {
        title: "The field",
        description:
          "The ruled lines that organize one record into structured entries.",
      },
      {
        title: "The tab",
        description:
          "The projecting divider that splits the drawer into searchable sections.",
      },
      {
        title: "The stock",
        description:
          "Stiff, durable paper that survives decades of filing and retrieval.",
      },
    ],
    material: "Cardstock",
    materials: ["Paper"],
    dimensions: "≈ 127 mm × 76 mm",
    image: "/objects/index-card/main.jpg",
    gallery: ["/objects/index-card/main.jpg"],
    quote:
      "The database was invented in 1876, in cardboard, by librarians who needed to find things.",
    quoteAuthor: "Archive note, Object 051",
    timeline: [
      {
        year: "1870s",
        title: "Card catalogs",
        description:
          "Libraries standardize the 3×5 card for catalog records.",
      },
      {
        year: "1880s",
        title: "The drawer",
        description:
          "The standardized card drawer and rod make filing and retrieval uniform.",
      },
      {
        year: "20th century",
        title: "Offices",
        description:
          "Index cards organize offices, science, and business for a century.",
      },
      {
        year: "Today",
        title: "The card's logic lives",
        description:
          "Physical cards persist even as their record-and-sort model moves to databases.",
      },
    ],
    sources: [
      { title: "Index card — Wikipedia", url: "https://en.wikipedia.org/wiki/Index_card" },
      { title: "Library catalog — Wikipedia", url: "https://en.wikipedia.org/wiki/Library_catalog" },
    ],
    imageCredit: {
      creator: "ArnoldReinhold",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Index_card,_3_by_5_inch.agr.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "envelope",
    slug: "envelope",
    number: "052",
    name: "Envelope",
    category: "writing",
    year: "1845",
    yearNum: 1845,
    designer: "Edwin Hill & Warren De La Rue",
    origin: "England",
    description:
      "A folded paper wrapper with a gummed flap: privacy, address, and transport in one sheet.",
    longDescription:
      "Before the envelope, letters were folded and sealed by the sender — private, but without a clean place for an address or a space for transit. The envelope separated the letter from its packaging: a flat paper sleeve that protects the contents, carries the address on its face, and is sealed with a gummed flap that clearly signals whether the letter has been opened. The machine that cut and folded envelopes in one operation was patented by Edwin Hill and Warren De La Rue in 1845, making them cheap enough for the penny post.\n\nThe envelope's design is a single clever piece of geometry. One sheet is folded with diamond-shaped ends, gummed on the flaps, and glued shut; the back flaps overlap to seal, while the front stays smooth for the address. The same fold survives in the modern window envelope, whose transparent panel simply moved the address onto the letter inside.",
    whyTimeless: [
      "One flat sheet folds into a self-sealing package with a clear address face — total economy of material.",
      "The gummed flap gives a visible, tamper-evident seal.",
      "Its fold geometry was so complete that modern machinery still uses it.",
    ],
    anatomy: [
      {
        title: "The face",
        description:
          "The smooth front that carries the address and stamps.",
      },
      {
        title: "The flaps",
        description:
          "The diamond-folded back that overlaps to close the packet.",
      },
      {
        title: "The gum",
        description:
          "The adhesive that seals the flap and marks tampering.",
      },
      {
        title: "The window",
        description:
          "The transparent panel that lets the letter's own address show through.",
      },
    ],
    material: "Paper",
    materials: ["Paper"],
    dimensions: "≈ 110 mm × 220 mm (DL)",
    image: "/objects/envelope/main.jpg",
    gallery: ["/objects/envelope/main.jpg"],
    quote:
      "The envelope is a letter's bodyguard: thin as paper, yet it keeps the message intact for strangers to handle.",
    quoteAuthor: "Archive note, Object 052",
    timeline: [
      {
        year: "Before 1840",
        title: "Folded letters",
        description:
          "Letters are folded and sealed with wax; addressing and transport are awkward.",
      },
      {
        year: "1845",
        title: "The envelope machine",
        description:
          "Edwin Hill and Warren De La Rue patent a machine that cuts and folds envelopes.",
      },
      {
        year: "1901",
        title: "The window",
        description:
          "The Americus window envelope removes the need to address the envelope separately.",
      },
      {
        year: "Today",
        title: "Still standard",
        description:
          "Email has thinned the mail, but the envelope's fold is unchanged.",
      },
    ],
    sources: [
      { title: "Envelope — Wikipedia", url: "https://en.wikipedia.org/wiki/Envelope" },
    ],
    imageCredit: {
      creator: "Photograph: Frank C. Müller, Baden-Baden",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Briefumschlag_(fcm).jpg",
      license: "CC BY-SA 2.5",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "postage-stamp",
    slug: "postage-stamp",
    number: "053",
    name: "Postage Stamp",
    category: "writing",
    year: "1840",
    yearNum: 1840,
    designer: "Rowland Hill (postal reform)",
    origin: "United Kingdom",
    description:
      "A printed paper square that prepays a letter's journey — the first successful flat-rate ticket.",
    longDescription:
      "Before the stamp, postage was paid by the recipient, priced by distance and weight, and calculated by hand — slow, expensive, and easily refused. Rowland Hill's reform of 1840 made postage cheap and uniform, and paid it in advance by the sender, using a small printed paper square as proof: the world's first adhesive postage stamp, the Penny Black, issued in London in May 1840. The pictured pair shows the Penny Black and its red successor, cancelled with the Maltese Cross.\n\nThe stamp's design is a masterpiece of cheap security. Printed by engraving, it is hard to counterfeit; its perforated edges separate cleanly into identical units; its gum adheres to the letter; and its face declares the payment so any carrier can verify it at a glance. A century and a half later, the stamp still carries the same function and much the same form — including its small rectangle and its perforation.",
    whyTimeless: [
      "Engraved printing made the stamp hard to forge and cheap to mass-produce.",
      "Perforations turn a printed sheet into identical, separable units of prepayment.",
      "Its visible face lets a carrier verify payment instantly, without calculation.",
    ],
    anatomy: [
      {
        title: "The design",
        description:
          "The engraved image and denomination that declare the value at a glance.",
      },
      {
        title: "The perforation",
        description:
          "The punched edge that separates stamps cleanly into identical units.",
      },
      {
        title: "The gum",
        description:
          "The adhesive back that attaches the stamp to the letter.",
      },
      {
        title: "The paper",
        description:
          "Specialized security paper, watermarked and hard to substitute.",
      },
    ],
    material: "Engraved paper",
    materials: ["Paper"],
    dimensions: "≈ 20 mm × 24 mm",
    image: "/objects/postage-stamp/main.jpg",
    gallery: ["/objects/postage-stamp/main.jpg"],
    quote:
      "The stamp is a public contract printed in miniature: this scrap of paper has already paid the way.",
    quoteAuthor: "Archive note, Object 053",
    timeline: [
      {
        year: "1837",
        title: "Postal reform",
        description:
          "Rowland Hill proposes uniform prepaid postage in his pamphlet Post Office Reform.",
      },
      {
        year: "1840",
        title: "The Penny Black",
        description:
          "The world's first adhesive postage stamp is issued on 6 May 1840.",
      },
      {
        year: "1841",
        title: "The Penny Red",
        description:
          "The black stamp is replaced by the red version, easier for cancellation marks to show.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "Modern stamps still prepay postage in the same printed, perforated, gummed form.",
      },
    ],
    sources: [
      { title: "Postage stamp — Wikipedia", url: "https://en.wikipedia.org/wiki/Postage_stamp" },
      { title: "Penny Black — Wikipedia", url: "https://en.wikipedia.org/wiki/Penny_Black" },
    ],
    imageCredit: {
      creator: "Engraved by C & F Heath",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Penny_Black_and_Penny_Red_RA.jpg",
      license: "Public domain",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "chisel",
    slug: "chisel",
    number: "054",
    name: "Chisel",
    category: "tools",
    year: "c. 3000 BCE",
    yearNum: -3000,
    designer: "Unknown — Bronze Age",
    origin: "Everywhere",
    description:
      "A blade driven by a mallet, converting a blow into a precise shave of wood or stone.",
    longDescription:
      "The chisel is a wedge with an edge and a handle: place it where material must go, drive it with a blow or a push, and it removes exactly what is before its edge and nothing else. Bronze chisels appear in the ancient world, and the tool has worked the same way ever since — shaping timber, stone, and metal in every craft.\n\nThe chisel's design is an exercise in force direction. The cutting edge must hold a precise bevel angle for the material; the shank must transmit the blow without bending; the handle must absorb the mallet's impact. The tool is completely manual, completely reliable, and its failures are all repairable — a dull edge is sharpened, a split handle is replaced. The pictured wood chisel shows the form resolved: blade, bevel, ferrule, and a turned wooden handle.",
    whyTimeless: [
      "A directed wedge removes exactly the material before its edge — the most direct cutting principle.",
      "Blow and shave are fully controlled by the craftsman, needing no power source.",
      "It is one blade and one handle, both of which are simple, repairable parts.",
    ],
    anatomy: [
      {
        title: "The edge",
        description:
          "The beveled cutting face whose angle is matched to the material.",
      },
      {
        title: "The blade",
        description:
          "The steel shank that transmits force without flexing or breaking.",
      },
      {
        title: "The ferrule",
        description:
          "The metal collar that keeps the handle from splitting under the blow.",
      },
      {
        title: "The handle",
        description:
          "The grip that absorbs the mallet's impact and steers the cut.",
      },
    ],
    material: "Steel blade, wooden handle",
    materials: ["Steel", "Wood"],
    dimensions: "≈ 250 mm × 25 mm",
    image: "/objects/chisel/main.jpg",
    gallery: ["/objects/chisel/main.jpg"],
    quote:
      "Give a craftsman a hammer and a chisel, and he can shape the world's wood — he already has for five thousand years.",
    quoteAuthor: "Archive note, Object 054",
    timeline: [
      {
        year: "c. 3000 BCE",
        title: "Bronze chisels",
        description:
          "Bronze chisels shape stone and wood in the ancient world.",
      },
      {
        year: "Antiquity",
        title: "Stonework",
        description:
          "Chisels carve masonry, sculpture, and inscription across civilizations.",
      },
      {
        year: "Industrial era",
        title: "Steel",
        description:
          "High-carbon steel gives chisels edges that hold for far longer.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The mallet-driven chisel remains standard in woodworking and stonemasonry.",
      },
    ],
    sources: [
      { title: "Chisel — Wikipedia", url: "https://en.wikipedia.org/wiki/Chisel" },
    ],
    imageCredit: {
      creator: "Unknown",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Scalpello_1_2KA2667.tif",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "mallet",
    slug: "mallet",
    number: "055",
    name: "Mallet",
    category: "tools",
    year: "c. 10,000 BCE",
    yearNum: -10000,
    designer: "Unknown — prehistoric",
    origin: "Everywhere",
    description:
      "A hammer whose head is softer than the work, delivering force without marking it.",
    longDescription:
      "The mallet is the hammer's gentler cousin: a striking tool whose wooden or composite head is softer than the surface it strikes, so it can deliver a firm blow without denting, bruising, or marring the work. Woodworkers drive chisels with mallets, carvers shape timber, and every joinery bench has kept one for exactly this reason.\n\nThe mallet's design is about matching head to task. Because wood on wood gives slightly, the blow transfers fully but the impact spreads across the head's face — protecting both the struck chisel handle and the workpiece. The simple form — a block of wood on a handle — has been used since tools were first hafted, and remains the standard in every workshop because it is a problem of materials, not mechanism, and the material answer has not changed.",
    whyTimeless: [
      "A head softer than the work delivers full force without marking the surface.",
      "Wood-on-wood contact protects chisel handles and delicate joinery alike.",
      "It is a block and a handle — the minimum possible striking tool, still unreplaced.",
    ],
    anatomy: [
      {
        title: "The head",
        description:
          "A block of wood (or composite) softer than the struck surface.",
      },
      {
        title: "The face",
        description:
          "A flat, slightly crowned striking surface that spreads the blow.",
      },
      {
        title: "The handle",
        description:
          "A gripped lever that transmits the swing accurately to the head.",
      },
      {
        title: "The weight",
        description:
          "Mass tuned to drive chisels firmly without over-striking.",
      },
    ],
    material: "Wood",
    materials: ["Wood", "Composite"],
    dimensions: "≈ 300 mm × 100 mm head",
    image: "/objects/mallet/main.jpg",
    gallery: ["/objects/mallet/main.jpg"],
    quote:
      "The mallet exists to be the one tool in the workshop that never leaves a mark.",
    quoteAuthor: "Archive note, Object 055",
    timeline: [
      {
        year: "Prehistory",
        title: "Wooden hammers",
        description:
          "Wooden-headed mallets strike without damaging in early woodworking.",
      },
      {
        year: "Antiquity",
        title: "Craft standard",
        description:
          "Carpenters and carvers use mallets across Egypt, Greece, and China.",
      },
      {
        year: "20th century",
        title: "Composites",
        description:
          "Plastic and rubber mallets extend the principle to metalwork and paving.",
      },
      {
        year: "Today",
        title: "Still wooden",
        description:
          "The wooden mallet remains the standard companion to the chisel.",
      },
    ],
    sources: [
      { title: "Mallet — Wikipedia", url: "https://en.wikipedia.org/wiki/Mallet" },
    ],
    imageCredit: {
      creator: "CEphoto, Uwe Aranas",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Wooden-hammer-01.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "file",
    slug: "file",
    number: "056",
    name: "File",
    category: "tools",
    year: "c. 1000 BCE",
    yearNum: -1000,
    designer: "Unknown — Iron Age",
    origin: "Everywhere",
    description:
      "A steel bar covered in tiny cutting teeth that removes metal a thousand small shavings at a time.",
    longDescription:
      "The file is a cutting tool made of many cuts: a hardened steel bar whose surface is scored with rows of teeth, so drawing it across metal removes material in thousands of tiny shavings. Files of iron appear in the ancient world, and the tool has remained essentially unchanged — its manufacture, cutting the teeth into a steel blank, still produces the same result today.\n\nThe file's design is a study in controlled aggression. The teeth are cut at an angle so the file cuts on the push stroke and rides free on the return; their spacing sets the coarseness, from roughing to finishing; the flat face lets the work be flattened, rounded, or shaped by guiding pressure. A file needs no power and no setup, and it is repairable by any toolmaker. The pictured hand file, with its tang and handle, is the universal form.",
    whyTimeless: [
      "A grid of tiny teeth removes material predictably in thousands of controlled shavings.",
      "The cutting direction, spacing, and shape are all tuned to the material and the job.",
      "It is a hardened steel bar with teeth — no mechanism, no power, no setup.",
    ],
    anatomy: [
      {
        title: "The teeth",
        description:
          "Rows of cut edges that shave material on each stroke.",
      },
      {
        title: "The face",
        description:
          "The flat or shaped working surface carrying the teeth.",
      },
      {
        title: "The tang",
        description:
          "The narrowed end that mounts the handle.",
      },
      {
        title: "The handle",
        description:
          "The grip that guides the cut and applies pressure.",
      },
    ],
    material: "Hardened steel",
    materials: ["Steel"],
    dimensions: "≈ 350 mm long",
    image: "/objects/file/main.jpg",
    gallery: ["/objects/file/main.jpg"],
    quote:
      "A file is patience made of steel: it removes nothing at all, and then everything.",
    quoteAuthor: "Archive note, Object 056",
    timeline: [
      {
        year: "c. 1000 BCE",
        title: "Iron files",
        description:
          "Iron files shape metal and stone in the early Iron Age.",
      },
      {
        year: "Middle Ages",
        title: "Cut files",
        description:
          "Chisel-cut teeth give files a precise, repeatable cutting action.",
      },
      {
        year: "19th century",
        title: "Machine-cut files",
        description:
          "Machine cutting produces files of uniform tooth geometry.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The hand file remains standard in workshops from locksmiths to jewelers.",
      },
    ],
    sources: [
      { title: "File (tool) — Wikipedia", url: "https://en.wikipedia.org/wiki/File_(tool)" },
    ],
    imageCredit: {
      creator: "Luke Milburn",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Hand_File.jpg",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "handsaw",
    slug: "handsaw",
    number: "057",
    name: "Hand Saw",
    category: "tools",
    year: "c. 3000 BCE",
    yearNum: -3000,
    designer: "Unknown — ancient Egypt",
    origin: "Egypt",
    description:
      "A toothed blade drawn across timber, cutting with a line of small wedges instead of one big one.",
    longDescription:
      "The saw replaces brute force with a row of small wedges: each tooth of a saw blade is a tiny cutting edge, so a single back-and-forth motion makes many cuts at once and carries the waste out as sawdust. Copper saws appear in ancient Egypt, and the principle has dominated woodworking ever since.\n\nThe handsaw's design balances a set of conflicting demands. The blade must be thin enough to cut with little waste yet stiff enough not to buckle; the teeth must be set alternately left and right so the cut is wider than the blade and it does not bind; the handle must direct the stroke without the hand slipping. Each of these is a solved compromise, refined over millennia. The pictured saw, with its wooden handle and straight steel blade, is the design at its most complete.",
    whyTimeless: [
      "A row of wedges converts one long stroke into many small cuts, cutting quickly and straight.",
      "Tooth set makes the kerf wider than the blade, so the saw never binds in the cut.",
      "The blade-and-handle form needs no power and is repairable for a lifetime.",
    ],
    anatomy: [
      {
        title: "The blade",
        description:
          "A thin steel strip whose toothed edge does the cutting.",
      },
      {
        title: "The teeth",
        description:
          "Small wedges whose geometry sets the cut speed and finish.",
      },
      {
        title: "The set",
        description:
          "Alternating tooth bend that widens the kerf and prevents binding.",
      },
      {
        title: "The handle",
        description:
          "A grip aligned with the blade to steer the cut accurately.",
      },
    ],
    material: "Steel blade, wooden handle",
    materials: ["Steel", "Wood"],
    dimensions: "≈ 600 mm blade",
    image: "/objects/handsaw/main.jpg",
    gallery: ["/objects/handsaw/main.jpg"],
    quote:
      "The saw is a hundred small knives doing one job, and it finishes before the single blade could begin.",
    quoteAuthor: "Archive note, Object 057",
    timeline: [
      {
        year: "c. 3000 BCE",
        title: "Copper saws",
        description:
          "Copper saws cut wood and soft stone in ancient Egypt.",
      },
      {
        year: "Antiquity",
        title: "Iron blades",
        description:
          "Iron saws with set teeth become standard across the Mediterranean.",
      },
      {
        year: "Industrial era",
        title: "Rolled steel",
        description:
          "Machine-rolled steel makes blades long, flat, and cheap.",
      },
      {
        year: "Today",
        title: "Still hand",
        description:
          "Power saws dominate, yet the handsaw remains the precise default.",
      },
    ],
    sources: [
      { title: "Saw — Wikipedia", url: "https://en.wikipedia.org/wiki/Saw" },
    ],
    imageCredit: {
      creator: "Unknown (Cleveland Museum of Art)",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Unknown_artist_-_Hand_Saw_-_1920.70_-_Cleveland_Museum_of_Art.jpg",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "hand-brace",
    slug: "hand-brace",
    number: "058",
    name: "Hand Brace",
    category: "tools",
    year: "1859",
    yearNum: 1859,
    designer: "Nelson Spofford (patented)",
    origin: "United States",
    description:
      "A cranked frame that turns a drill bit with continuous rotary force, not just elbow.",
    longDescription:
      "Drilling by hand is a rotary job, and the hand brace turns the arm's push into continuous rotation. A U-shaped frame holds the bit at one end and a rotating head at the other; the woodworker presses the head with one hand and cranks the bow with the other, so every stroke of the crank is a full turn of the bit. The pictured brace is the Spofford type, patented by Nelson Spofford in 1859, a favorite of chair makers and traditional woodworkers.\n\nThe brace's genius is converting one motion into another efficiently. Cranking in a circle keeps the bit turning steadily, which cuts cleaner holes than the jerky back-and-forth of a bow drill. The chuck grips interchangeable bits; the head swivels for pressure; the whole tool is wood and steel, repairable and precise. Power drills have displaced it for speed, but no hand tool has ever matched its control or its silence.",
    whyTimeless: [
      "The crank converts a continuous push into continuous rotation, drilling cleanly and evenly.",
      "A simple chuck accepts any straight-shank bit, making it a complete drilling system.",
      "Wood and steel construction is repairable for generations.",
    ],
    anatomy: [
      {
        title: "The frame",
        description:
          "The cranked U-shaped body that carries the rotary motion.",
      },
      {
        title: "The chuck",
        description:
          "The jaws that grip and center the drill bit.",
      },
      {
        title: "The head",
        description:
          "The rotating pressure plate held by the guiding hand.",
      },
      {
        title: "The handle",
        description:
          "The crank grip that turns the whole assembly.",
      },
    ],
    material: "Steel and wood",
    materials: ["Steel", "Wood"],
    dimensions: "≈ 380 mm long",
    image: "/objects/hand-brace/main.jpg",
    gallery: ["/objects/hand-brace/main.jpg"],
    quote:
      "The brace is a drill in its most honest form: a crank, a chuck, and an arm that never runs out of power.",
    quoteAuthor: "Archive note, Object 058",
    timeline: [
      {
        year: "c. 1420",
        title: "The crank brace",
        description:
          "Cranked drills appear in European workshops and craft manuals.",
      },
      {
        year: "1859",
        title: "Spofford's patent",
        description:
          "Nelson Spofford patents his improved brace, a favorite of traditional woodworkers.",
      },
      {
        year: "19th–20th century",
        title: "The standard bit-brace",
        description:
          "The two-jaw chuck and interchangeable bits become the carpenter's standard.",
      },
      {
        year: "Today",
        title: "Still turned",
        description:
          "Power drills dominate, but the hand brace endures where control and quiet matter.",
      },
    ],
    sources: [
      { title: "Brace (tool) — Wikipedia", url: "https://en.wikipedia.org/wiki/Brace_(tool)" },
    ],
    imageCredit: {
      creator: "The Patriot Woodworker",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Spofford_Braces.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "pliers",
    slug: "pliers",
    number: "059",
    name: "Pliers",
    category: "tools",
    year: "c. 1500 BCE",
    yearNum: -1500,
    designer: "Unknown — Bronze Age",
    origin: "Europe",
    description:
      "Two levers joined at a fulcrum, concentrating the hand's grip into a firm, controlled pinch.",
    longDescription:
      "Pliers are a lever system: two arms joined at a pivot, with the hand's grip at one end and the jaws at the other, so the force is concentrated and controlled. Bronze forceps and pincers of this kind appear in the ancient world, and the principle has been at work in every craft that needs a firm pinch — blacksmithing, jewelry, electronics, and surgery.\n\nThe design is elegantly minimal. The pivot fixes the jaws' alignment; the length of the handles gives mechanical advantage; the shape of the jaws matches the work — flat, round, or needle. Because the tool is simply two levers, it is nearly indestructible, and its failure modes are limited to a blunt pivot or worn jaw, both repairable. The pictured flat-nosed pliers show the form at its most standard.",
    whyTimeless: [
      "Two levers on a pivot multiply and direct the hand's grip with perfect control.",
      "Jaw shapes adapt the same mechanism to every task from wire to surgery.",
      "It has no power source, no adjustment, and nothing to break beyond its steel.",
    ],
    anatomy: [
      {
        title: "The jaws",
        description:
          "Gripping faces shaped to the work — flat, needle, or round.",
      },
      {
        title: "The pivot",
        description:
          "The rivet or bolt that holds the two arms in constant alignment.",
      },
      {
        title: "The handles",
        description:
          "The lever arms that give the hand mechanical advantage.",
      },
      {
        title: "The cutters",
        description:
          "The hardened notches near the pivot that shear wire when pressed.",
      },
    ],
    material: "Forged steel",
    materials: ["Steel"],
    dimensions: "≈ 180 mm × 60 mm",
    image: "/objects/pliers/main.jpg",
    gallery: ["/objects/pliers/main.jpg"],
    quote:
      "Pliers are the hand with a better grip and a stronger squeeze, and nothing has improved on that trade.",
    quoteAuthor: "Archive note, Object 059",
    timeline: [
      {
        year: "c. 1500 BCE",
        title: "Bronze forceps",
        description:
          "Pincer-like bronze tools grip hot metal in early foundries.",
      },
      {
        year: "Antiquity",
        title: "Blacksmiths",
        description:
          "Forged pincers become standard equipment at the anvil.",
      },
      {
        year: "19th century",
        title: "Modern pliers",
        description:
          "Machined joints and hardened cutters make pliers precise instruments.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "From electrical work to surgery, the two-lever pinch remains definitive.",
      },
    ],
    sources: [
      { title: "Pliers — Wikipedia", url: "https://en.wikipedia.org/wiki/Pliers" },
    ],
    imageCredit: {
      creator: "Evan-Amos",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tool-pliers.jpg",
      license: "Public domain",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "wrench",
    slug: "wrench",
    number: "060",
    name: "Wrench",
    category: "tools",
    year: "1858",
    yearNum: 1858,
    designer: "Charles Moncky (monkey wrench)",
    origin: "United States",
    description:
      "An adjustable jaw that turns any nut or bolt, sizing itself to the fastener at hand.",
    longDescription:
      "A nut comes in many sizes, and the fixed spanner needs one wrench per size. The adjustable wrench solves that with a jaw whose opening is set by a screw, letting one tool fit many fasteners. The monkey wrench, with its sliding lower jaw, was patented in 1858 by Charles Moncky and quickly became the standard workshop fitting. The pictured example is a Mexican monkey wrench of around 1900.\n\nThe adjustable wrench is a master of the compromise between grip and adjustability. Its jaws are angled to grip the nut's flats and resist slipping under torque; its adjustment screw holds the jaw where it is set; its length gives leverage. No single part of it is complex, yet the combination — open jaw, sliding element, and locking screw — has never been improved on as a hand tool.",
    whyTimeless: [
      "An adjustable jaw fits a wide range of fasteners, replacing a whole set of fixed spanners.",
      "The sliding jaw and screw let one hand set and lock the opening.",
      "Forged steel construction survives a lifetime of torque and abuse.",
    ],
    anatomy: [
      {
        title: "The jaw",
        description:
          "The open, angled gripping face that fits the nut's flats.",
      },
      {
        title: "The slide",
        description:
          "The moving jaw piece that adjusts the opening size.",
      },
      {
        title: "The screw",
        description:
          "The worm gear that moves and locks the slide.",
      },
      {
        title: "The handle",
        description:
          "The lever arm that delivers torque to the jaws.",
      },
    ],
    material: "Forged steel",
    materials: ["Steel"],
    dimensions: "≈ 250 mm long",
    image: "/objects/wrench/main.jpg",
    gallery: ["/objects/wrench/main.jpg"],
    quote:
      "The adjustable wrench made one tool a whole drawer of tools, and the drawer never quite returned.",
    quoteAuthor: "Archive note, Object 060",
    timeline: [
      {
        year: "1835",
        title: "Early adjustable wrenches",
        description:
          "Solymon Merrick patents the first American wrench patents.",
      },
      {
        year: "1858",
        title: "The monkey wrench",
        description:
          "Charles Moncky patents the sliding-jaw monkey wrench.",
      },
      {
        year: "1892",
        title: "The crescent wrench",
        description:
          "The crescent-style adjustable wrench brings the design to full maturity.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The adjustable wrench remains the most common wrench in the world.",
      },
    ],
    sources: [
      { title: "Wrench — Wikipedia", url: "https://en.wikipedia.org/wiki/Wrench" },
    ],
    imageCredit: {
      creator: "Cvmontuy",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Monkey_wrench_Mexico_1900.jpg",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "screwdriver",
    slug: "screwdriver",
    number: "061",
    name: "Screwdriver",
    category: "tools",
    year: "c. 1450",
    yearNum: 1450,
    designer: "Unknown — European craftsmen",
    origin: "Germany / Europe",
    description:
      "A shaft that turns a screw's head, keeping torque aligned with the fastener's axis.",
    longDescription:
      "The screwdriver appeared when the screw became a common fastener — first in fifteenth-century European armor and clockwork, where screws held parts that must come apart again. The tool is a simple shaft: its tip mates with the screw's slot, its handle gives grip and torque, and its axis keeps the turning force in line with the screw so the screw does not cam out.\n\nThe screwdriver's design is a study in matching. The tip must fit the slot closely enough to transmit full torque without slipping; the shaft must be rigid so the turning force reaches the screw; the handle must be large enough for the grip that the screw's resistance demands. Slot, Phillips, and hex heads each demanded their own tip, and each is a refinement of the same basic contract: align, engage, turn. The pictured flat-bladed screwdriver is the original form, unchanged since the fifteenth century.",
    whyTimeless: [
      "A rigid shaft transmits torque directly along the screw's axis.",
      "The tip geometry matches the fastener's head, preventing slip and cam-out.",
      "It is a handle and a blade — nothing to adjust, maintain, or break.",
    ],
    anatomy: [
      {
        title: "The tip",
        description:
          "The ground blade that mates with the screw head's slot or cross.",
      },
      {
        title: "The shaft",
        description:
          "The rigid steel bar that transmits torque to the tip.",
      },
      {
        title: "The handle",
        description:
          "The grip sized for the turning force the screw demands.",
      },
      {
        title: "The ferrule",
        description:
          "The collar that reinforces the shaft-to-handle joint.",
      },
    ],
    material: "Steel shaft, plastic or wooden handle",
    materials: ["Steel", "Plastic", "Wood"],
    dimensions: "≈ 250 mm long",
    image: "/objects/screwdriver/main.jpg",
    gallery: ["/objects/screwdriver/main.jpg"],
    quote:
      "The screwdriver exists because someone once decided a screw should be removable — and made the tool to prove it.",
    quoteAuthor: "Archive note, Object 061",
    timeline: [
      {
        year: "c. 1450",
        title: "Screws in armor",
        description:
          "Screwdrivers appear with the screws of European armor and clockwork.",
      },
      {
        year: "18th century",
        title: "The flat tip",
        description:
          "The slotted screw and matching blade become the standard fastener pair.",
      },
      {
        year: "1936",
        title: "The Phillips head",
        description:
          "Henry Phillips' cross-head screw lets powered drivers center themselves.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The simple screwdriver remains the most-used hand tool in the world.",
      },
    ],
    sources: [
      { title: "Screwdriver — Wikipedia", url: "https://en.wikipedia.org/wiki/Screwdriver" },
    ],
    imageCredit: {
      creator: "Jiří Sedláček",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Big_flat_screwdriver.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "c-clamp",
    slug: "c-clamp",
    number: "062",
    name: "C-Clamp",
    category: "tools",
    year: "c. 1850",
    yearNum: 1850,
    designer: "Unknown — industrial era",
    origin: "United States / Europe",
    description:
      "A C-shaped frame and a screw that turn one hand's twist into a sustained, adjustable grip.",
    longDescription:
      "Holding two pieces together while glue dries or a joint is made is a job for a clamp, and the C-clamp is its most direct expression: a rigid C-shaped frame and a threaded screw, so that turning the screw advances the jaw and holds the work in a firm, adjustable grip that needs no continuing force from the hand.\n\nThe C-clamp's design is a screw mechanism in a frame. The C-shape leaves the work open on three sides — visible, reachable, and aligned; the screw converts many small turns of the handle into a strong, precise push; the swivel pad on the screw's end spreads the pressure and protects the surface. Because the screw is self-locking, the clamp holds its force indefinitely without power. Machine shops, woodshops, and welders have used the same geometry since the industrial era.",
    whyTimeless: [
      "The self-locking screw holds sustained force with no continuing effort.",
      "The C-frame leaves the work open and visible on three sides.",
      "It is two parts — frame and screw — and both are repairable or replaceable.",
    ],
    anatomy: [
      {
        title: "The frame",
        description:
          "The rigid C-shaped casting that bridges the gap to be clamped.",
      },
      {
        title: "The screw",
        description:
          "The threaded shaft that advances the movable jaw with each turn.",
      },
      {
        title: "The handle",
        description:
          "The bar that gives the hand leverage over the screw.",
      },
      {
        title: "The pad",
        description:
          "The swiveling foot that spreads pressure and protects the work.",
      },
    ],
    material: "Cast steel or iron",
    materials: ["Steel", "Metal"],
    dimensions: "≈ 230 mm opening capacity",
    image: "/objects/c-clamp/main.jpg",
    gallery: ["/objects/c-clamp/main.jpg"],
    quote:
      "A C-clamp is a third hand that never tires: it holds all day and never asks for a break.",
    quoteAuthor: "Archive note, Object 062",
    timeline: [
      {
        year: "Industrial era",
        title: "Screw clamps",
        description:
          "C-shaped screw clamps become workshop standards as machining and joinery industrialize.",
      },
      {
        year: "19th–20th century",
        title: "Ductile castings",
        description:
          "Cast-iron and steel frames make the clamp strong, cheap, and universal.",
      },
      {
        year: "20th century",
        title: "Specialized clamps",
        description:
          "Bar clamps and spring clamps appear, but the C-clamp stays the default.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The C-clamp is still the first clamp reached for in any shop.",
      },
    ],
    sources: [
      { title: "Clamp (tool) — Wikipedia", url: "https://en.wikipedia.org/wiki/Clamp_(tool)" },
    ],
    imageCredit: {
      creator: "Bff",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:C-clamp_3in_20141224_0996.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "caliper",
    slug: "caliper",
    number: "063",
    name: "Caliper",
    category: "tools",
    year: "1631",
    yearNum: 1631,
    designer: "Pierre Vernier (scale)",
    origin: "France",
    description:
      "A sliding rule with two measuring jaws, reading fractions of a millimetre with a vernier scale.",
    longDescription:
      "Measuring a small object precisely is the caliper's job, and its principle is ancient — jaws that span the object, read against a scale. The breakthrough that made it accurate was the vernier scale, invented in 1631 by the French mathematician Pierre Vernier: a short secondary scale whose subdivisions let the user read a fraction of the main scale's smallest division, often a hundredth of a millimetre.\n\nThe caliper's design is a coincidence of geometry and optics of the eye. The main beam carries a fixed jaw and a scale; the sliding jaw carries the vernier, which is calibrated so that one of its divisions always lines up exactly with one of the main scale's. Where they align, the fraction is known. The two jaws measure outside, inside, and depth. Digital calipers have replaced the eye with electronics, but the same sliding-jaw geometry remains, and the simple vernier caliper is still the precision default.",
    whyTimeless: [
      "The vernier scale reads fractions of a division precisely, with no lens required.",
      "One tool measures outside, inside, and depth through interchangeable jaw faces.",
      "Steel construction and a clean sliding fit give decades of reliable accuracy.",
    ],
    anatomy: [
      {
        title: "The beam",
        description:
          "The rigid main scale carrying the fixed jaw.",
      },
      {
        title: "The sliding jaw",
        description:
          "The moving jaw whose position is read against the beam.",
      },
      {
        title: "The vernier",
        description:
          "The secondary scale that resolves fractions of the main division.",
      },
      {
        title: "The lock",
        description:
          "The screw that holds the reading for transfer or inspection.",
      },
    ],
    material: "Steel and brass",
    materials: ["Steel", "Brass"],
    dimensions: "≈ 150 mm long",
    image: "/objects/caliper/main.jpg",
    gallery: ["/objects/caliper/main.jpg"],
    quote:
      "The vernier caliper lets an unassisted eye measure to a hundredth of a millimetre — a kind of magnifying glass for measurement.",
    quoteAuthor: "Archive note, Object 063",
    timeline: [
      {
        year: "1631",
        title: "The vernier scale",
        description:
          "Pierre Vernier publishes his scale for reading fractions of a division.",
      },
      {
        year: "19th century",
        title: "Precision manufacture",
        description:
          "Machined steel calipers bring vernier accuracy to workshops.",
      },
      {
        year: "20th century",
        title: "Dial and digital",
        description:
          "Dial and digital calipers add readouts without changing the measuring geometry.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The plain vernier caliper remains a standard precision instrument.",
      },
    ],
    sources: [
      { title: "Caliper — Wikipedia", url: "https://en.wikipedia.org/wiki/Caliper" },
      { title: "Pierre Vernier — Britannica", url: "https://www.britannica.com/biography/Pierre-Vernier" },
    ],
    imageCredit: {
      creator: "ArtMechanic",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Messschieber.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "spirit-level",
    slug: "spirit-level",
    number: "064",
    name: "Spirit Level",
    category: "tools",
    year: "1661",
    yearNum: 1661,
    designer: "Melchisédech Thévenot",
    origin: "France",
    description:
      "A glass tube of liquid and a bubble that finds true horizontal without any reference point.",
    longDescription:
      "Before the spirit level, finding level meant plumbing lines or trusting the eye. In 1661 the French instrument maker Melchisédech Thévenot devised the sealed glass vial of liquid with a bubble — the bubble always rises to the highest point of the tube, which, when the tube is slightly curved, is exactly its center. Place the tube on a surface, center the bubble, and the surface is level.\n\nThe level's design converts an invisible truth into a visible one. The sealed curved vial, the liquid, and the air bubble form a self-contained reference that needs no fixed point, no plumb line, and no knowledge of the horizon. The body that carries the vial is machined flat and true, so the bubble's position reports the surface beneath it. Builders, carpenters, and masons have trusted this same trick for three and a half centuries.",
    whyTimeless: [
      "The bubble in a sealed curved tube is a self-contained, always-correct reference for horizontal.",
      "It needs no external reference point, power, or calibration by the user.",
      "The machined true body translates the bubble's position directly to the surface.",
    ],
    anatomy: [
      {
        title: "The vial",
        description:
          "The sealed, slightly curved glass tube holding the liquid and bubble.",
      },
      {
        title: "The liquid",
        description:
          "The fluid whose surface the bubble always rises above.",
      },
      {
        title: "The body",
        description:
          "The machined straight edge whose true face is being tested.",
      },
      {
        title: "The marks",
        description:
          "The index lines that show when the bubble is centered.",
      },
    ],
    material: "Glass vial in a wooden or metal body",
    materials: ["Glass", "Wood", "Metal"],
    dimensions: "≈ 600 mm long",
    image: "/objects/spirit-level/main.jpg",
    gallery: ["/objects/spirit-level/main.jpg"],
    quote:
      "The spirit level found a way to see a straight line without looking at anything at all.",
    quoteAuthor: "Archive note, Object 064",
    timeline: [
      {
        year: "1661",
        title: "Thévenot's level",
        description:
          "Melchisédech Thévenot describes the sealed bubble vial for leveling.",
      },
      {
        year: "18th century",
        title: "Surveying",
        description:
          "Bubble levels become standard in surveying and instrument making.",
      },
      {
        year: "19th century",
        title: "The carpenter's level",
        description:
          "Machined wooden and metal levels enter the building trade.",
      },
      {
        year: "Today",
        title: "Still the bubble",
        description:
          "Laser levels coexist, but the bubble level remains the builder's default.",
      },
    ],
    sources: [
      { title: "Spirit level — Wikipedia", url: "https://en.wikipedia.org/wiki/Spirit_level" },
    ],
    imageCredit: {
      creator: "Dmitry Makeev",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Waterpass.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "plumb-bob",
    slug: "plumb-bob",
    number: "065",
    name: "Plumb Bob",
    category: "tools",
    year: "c. 3000 BCE",
    yearNum: -3000,
    designer: "Unknown — ancient Egypt",
    origin: "Egypt",
    description:
      "A weighted cone on a string that always points to the center of the earth.",
    longDescription:
      "Gravity is the only instrument that never lies, and the plumb bob is the oldest tool built around it: a weight hung on a string that always hangs exactly vertical, giving a builder a reference line of perfect uprightness. Egyptian masons used plumb lines to raise the pyramids; the tool has been at work on every wall, column, and survey since.\n\nThe plumb bob's design is minimal to the point of inevitability. The weight's cone shape makes it hang nose-down and settle quickly without swinging; the string's natural tautness defines the vertical line; the pointed tip marks the exact spot. There is nothing to adjust because there is nothing to get wrong — the physics does all the work. Its only later refinement, a slight taper to reduce air resistance, changed nothing essential. Surveyors still carry one.",
    whyTimeless: [
      "Gravity supplies a perfect vertical reference that can never drift or fail.",
      "The cone weight settles fast and the pointed tip marks the exact line.",
      "It is a weight and a string — the most economical instrument ever devised.",
    ],
    anatomy: [
      {
        title: "The weight",
        description:
          "A dense cone that pulls the string taut and straight.",
      },
      {
        title: "The point",
        description:
          "The sharp tip that marks the vertical position precisely.",
      },
      {
        title: "The line",
        description:
          "The string whose tautness defines the vertical reference.",
      },
      {
        title: "The balance",
        description:
          "The weight distribution that makes the bob hang nose-down and steady.",
      },
    ],
    material: "Brass or steel (string)",
    materials: ["Brass", "Steel", "Fiber"],
    dimensions: "≈ 90 mm × 25 mm",
    image: "/objects/plumb-bob/main.jpg",
    gallery: ["/objects/plumb-bob/main.jpg"],
    quote:
      "A plumb bob is the simplest instrument in the world, and the only one that consults the center of the earth.",
    quoteAuthor: "Archive note, Object 065",
    timeline: [
      {
        year: "c. 3000 BCE",
        title: "Pyramid builders",
        description:
          "Egyptian masons use plumb lines to raise vertical walls.",
      },
      {
        year: "Antiquity",
        title: "Roman survey",
        description:
          "Roman surveyors use plumb bobs and the chorobates for leveling.",
      },
      {
        year: "Middle Ages",
        title: "Cathedral builders",
        description:
          "Masons carry plumb lines to keep towers and walls upright.",
      },
      {
        year: "Today",
        title: "Still hanging",
        description:
          "Laser levels coexist, but the plumb bob remains the definitive vertical reference.",
      },
    ],
    sources: [
      { title: "Plumb bob — Wikipedia", url: "https://en.wikipedia.org/wiki/Plumb_bob" },
    ],
    imageCredit: {
      creator: "Salil Kumar Mukherjee",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Plumb_bob_with_string.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "push-pin",
    slug: "push-pin",
    number: "066",
    name: "Push Pin",
    category: "tools",
    year: "1904",
    yearNum: 1904,
    designer: "Edwin Moore",
    origin: "United States",
    description:
      "A pin and a flat head, joined so a fingertip can drive it and a thumb can pull it out.",
    longDescription:
      "Before the push pin, mounting a paper to a board meant a nail and a hammer, or a pin that broke fingernails. In 1904 Edwin Moore patented a pin whose head is a flat, slightly concave disc — large enough and comfortable enough to press in with a fingertip, and shaped so it can be pulled out just as easily. He founded Moore Push-Pin to sell it, and the design has not changed since.\n\nThe push pin's genius is in the head-to-pin relationship. The head's size spreads the pressing force so the fingertip does not hurt; its concave or ridged face gives a grip for removal; the pin's length and diameter are tuned to hold firm in cork, wood, or fiberboard yet pull out cleanly. The whole object is a study in the ergonomics of the fingertip — and a complete office product that has resisted every attempt at improvement.",
    whyTimeless: [
      "A broad head lets the bare fingertip drive the pin without pain or tools.",
      "Its shape gives grip for removal as easily as for insertion.",
      "One piece of stamped steel and a pin — cheap, strong, and perfect as-is.",
    ],
    anatomy: [
      {
        title: "The head",
        description:
          "The flat disc that spreads force and carries color or grip.",
      },
      {
        title: "The pin",
        description:
          "The slender point that holds firm in the board.",
      },
      {
        title: "The grip",
        description:
          "The concave or ridged face that eases removal.",
      },
      {
        title: "The length",
        description:
          "Sized to hold in board materials without protruding or bending.",
      },
    ],
    material: "Steel pin, plated head",
    materials: ["Steel", "Plastic", "Metal"],
    dimensions: "≈ 20 mm overall",
    image: "/objects/push-pin/main.jpg",
    gallery: ["/objects/push-pin/main.jpg"],
    quote:
      "The push pin is the only fastening tool that works entirely with the pressure of a fingertip.",
    quoteAuthor: "Archive note, Object 066",
    timeline: [
      {
        year: "1904",
        title: "Moore's patent",
        description:
          "Edwin Moore patents the push pin and founds Moore Push-Pin.",
      },
      {
        year: "Early 20th century",
        title: "Office standard",
        description:
          "The push pin becomes a staple of offices, schools, and notice boards.",
      },
      {
        year: "20th century",
        title: "Color heads",
        description:
          "Colored heads add coding and decoration without changing the mechanism.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The fingertip-driven pin remains exactly Moore's 1904 design.",
      },
    ],
    sources: [
      { title: "Thumbtack — Wikipedia", url: "https://en.wikipedia.org/wiki/Thumbtack" },
    ],
    imageCredit: {
      creator: "Muldentaler2",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Reisszwecken85.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "binder-clip",
    slug: "binder-clip",
    number: "067",
    name: "Binder Clip",
    category: "tools",
    year: "1911",
    yearNum: 1911,
    designer: "Louis E. Baltzley",
    origin: "United States",
    description:
      "A spring-steel jaw with folding handles that holds a stack of papers in a firm, reusable grip.",
    longDescription:
      "The binder clip was invented in 1911 by the Washington, D.C. inventor Louis E. Baltzley, who needed a way to hold the pages of his father's manuscripts. He devised a folded steel plate whose edges act as jaws, closed by the spring tension of the steel itself, with two folding wire handles that open the jaws when squeezed. It holds far more paper than a paper clip and releases it without damage.\n\nThe binder clip's design is elegant in its use of material memory. The spring-steel plate is stamped so that its natural tendency is to pinch; the folded handles give the user a mechanical advantage to open it. Because the steel remembers its shape, the clip can clamp and release thousands of times. The form has proven so right that modern binder clips are, dimension for dimension, Baltzley's original.",
    whyTimeless: [
      "Stamped spring steel provides lasting clamp force from the material itself.",
      "Folding handles multiply grip force to open jaws that can hold dozens of pages.",
      "Reusable thousands of times with no loss of tension.",
    ],
    anatomy: [
      {
        title: "The jaw",
        description:
          "The folded steel edges that grip the paper stack.",
      },
      {
        title: "The spring",
        description:
          "The steel's natural tension that keeps the jaws closed.",
      },
      {
        title: "The handles",
        description:
          "The folding wire levers that open the jaws against the spring.",
      },
      {
        title: "The capacity",
        description:
          "The jaw gap that accepts everything from a few pages to a thick stack.",
      },
    ],
    material: "Spring steel and plated wire",
    materials: ["Steel", "Metal"],
    dimensions: "≈ 25 mm × 12 mm (small)",
    image: "/objects/binder-clip/main.jpg",
    gallery: ["/objects/binder-clip/main.jpg"],
    quote:
      "A binder clip is a paper clip with an appetite: it will hold a whole chapter without complaint.",
    quoteAuthor: "Archive note, Object 067",
    timeline: [
      {
        year: "1911",
        title: "Baltzley's patent",
        description:
          "Louis E. Baltzley patents the binder clip in Washington, D.C.",
      },
      {
        year: "1910s",
        title: "Manufacture",
        description:
          "The clip enters production and spreads through offices and publishing.",
      },
      {
        year: "20th century",
        title: "Standard sizes",
        description:
          "Fixed size ranges make the binder clip a universal office fastener.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "Modern binder clips reproduce Baltzley's 1911 geometry exactly.",
      },
    ],
    sources: [
      { title: "Binder clip — Wikipedia", url: "https://en.wikipedia.org/wiki/Binder_clip" },
    ],
    imageCredit: {
      creator: "Polyparadigm",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Binder_clips.JPG",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "tape-dispenser",
    slug: "tape-dispenser",
    number: "068",
    name: "Tape Dispenser",
    category: "tools",
    year: "1932",
    yearNum: 1932,
    designer: "3M (Scotch Tape dispenser)",
    origin: "United States",
    description:
      "A weighted block that holds a roll of adhesive tape, tears it at a serrated edge, and stays put.",
    longDescription:
      "Cellulose tape was invented in 1930, but it was unusable without a way to hold the roll, find the end, and tear a clean strip. In 1932 3M put its Scotch tape on a weighted dispenser with a serrated cutting edge, and the design that resulted — a heavy base, a roll spindle, and a toothed tearing edge — has defined the office desk ever since.\n\nThe dispenser's design is about ungluing the job's steps. The weight keeps the dispenser anchored while one hand works; the spindle frees the roll to turn smoothly; the serrated edge tears the tape cleanly against itself; and the whole is shaped so the tape unwinds at a comfortable, straight angle. Later tape types changed the adhesive, never the dispenser's logic. The pictured weighted steel dispenser is the classic form.",
    whyTimeless: [
      "A heavy base anchors the dispenser so the user needs only one hand.",
      "The serrated edge tears clean strips with one motion against the teeth.",
      "The free-turning spindle feeds tape smoothly and without snagging.",
    ],
    anatomy: [
      {
        title: "The base",
        description:
          "The weighted block that keeps the dispenser stable in use.",
      },
      {
        title: "The spindle",
        description:
          "The post that holds and freely rotates the tape roll.",
      },
      {
        title: "The cutting edge",
        description:
          "The serrated teeth that tear the tape cleanly.",
      },
      {
        title: "The guide",
        description:
          "The shaping that holds the tape at a straight, tearable angle.",
      },
    ],
    material: "Cast steel or plastic",
    materials: ["Metal", "Plastic"],
    dimensions: "≈ 180 mm × 90 mm",
    image: "/objects/tape-dispenser/main.jpg",
    gallery: ["/objects/tape-dispenser/main.jpg"],
    quote:
      "The tape dispenser is proof that a product is not finished until the messy part has been designed out.",
    quoteAuthor: "Archive note, Object 068",
    timeline: [
      {
        year: "1930",
        title: "Cellulose tape",
        description:
          "3M introduces transparent cellulose tape.",
      },
      {
        year: "1932",
        title: "The dispenser",
        description:
          "3M markets Scotch tape on a weighted dispenser with a serrated cutter.",
      },
      {
        year: "Mid-20th century",
        title: "Desk standard",
        description:
          "The tape dispenser becomes a fixture of every office desk.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The weighted base, spindle, and teeth remain the dispenser's defining parts.",
      },
    ],
    sources: [
      { title: "Tape dispenser — Wikipedia", url: "https://en.wikipedia.org/wiki/Tape_dispenser" },
    ],
    imageCredit: {
      creator: "Evan-Amos",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tape-dispenser.jpg",
      license: "Public domain",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "utility-knife",
    slug: "utility-knife",
    number: "069",
    name: "Utility Knife",
    category: "tools",
    year: "c. 1930",
    yearNum: 1930,
    designer: "Attributed to Stanley Works",
    origin: "United States / United Kingdom",
    description:
      "A retractable blade in a pocket-sized handle, always sharp because the blade is replaceable.",
    longDescription:
      "Every serious knife eventually dulls, and sharpening is a skill not everyone has. The utility knife solves the problem by making the blade disposable: a hardened segment carried in a sliding handle, extended to cut and retracted for safety, snapped off or replaced when dull. The retractable-blade knife was developed in the 1920s and 1930s, most famously by Stanley Works, and the picture is complete — a plastic or steel handle, a sliding button, and a blade that renews itself.\n\nThe utility knife's design separates the permanent and the consumable parts of a knife. The handle, mechanism, and safety live on; only the blade is spent, and a new one costs nearly nothing. The result is a knife that is always sharp, always safe when closed, and cheap to maintain forever — which is why the box cutter is the default cutting tool of shipping, packing, and construction.",
    whyTimeless: [
      "Replaceable blades keep the tool permanently sharp with no sharpening skill.",
      "The retractable blade protects the user and the pocket when not cutting.",
      "The handle is a durable instrument; only the blade is consumable.",
    ],
    anatomy: [
      {
        title: "The blade",
        description:
          "A hardened segment whose edge can be snapped off or replaced when dull.",
      },
      {
        title: "The handle",
        description:
          "The grip that carries and shields the blade.",
      },
      {
        title: "The slide",
        description:
          "The mechanism that extends and retracts the blade.",
      },
      {
        title: "The lock",
        description:
          "The latch that holds the blade out during cutting.",
      },
    ],
    material: "Plastic and steel",
    materials: ["Plastic", "Steel"],
    dimensions: "≈ 150 mm × 40 mm",
    image: "/objects/utility-knife/main.jpg",
    gallery: ["/objects/utility-knife/main.jpg"],
    quote:
      "The box cutter doesn't make you a better sharpener — it makes sharpening unnecessary.",
    quoteAuthor: "Archive note, Object 069",
    timeline: [
      {
        year: "1920s–30s",
        title: "Retractable blades",
        description:
          "Stanley and others develop the retractable-blade utility knife.",
      },
      {
        year: "1950s",
        title: "Snap-off blades",
        description:
          "Scored blades that snap off a fresh segment extend the tool's life.",
      },
      {
        year: "20th century",
        title: "Shipping standard",
        description:
          "The box cutter becomes the default tool of shipping and packing.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The sliding handle and disposable blade remain the design.",
      },
    ],
    sources: [
      { title: "Utility knife — Wikipedia", url: "https://en.wikipedia.org/wiki/Utility_knife" },
    ],
    imageCredit: {
      creator: "Evan-Amos",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Box-cutter.jpg",
      license: "Public domain",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "rope",
    slug: "rope",
    number: "070",
    name: "Rope",
    category: "tools",
    year: "c. 28,000 BCE",
    yearNum: -28000,
    designer: "Unknown — prehistoric",
    origin: "Everywhere",
    description:
      "Fibers twisted so that tension tightens the structure instead of pulling it apart.",
    longDescription:
      "Rope is one of the oldest manufactured objects — twisted-fiber cordage has been found in cave sites dating to around 28,000 BCE — and it is one of the most ingenious. The twist is the entire invention: when a rope is loaded, the strands of the twist tighten against one another, so the structure grows stronger, not weaker, under tension.\n\nThe rope's design is a study in material logic. Short, weak fibers are twisted into strong yarns, the yarns into strands, and the strands into a rope — with the twist direction alternated so the rope does not unlay itself. The result converts cheap plant or animal fiber into a lifting, tying, and hauling tool of enormous strength. Modern synthetic ropes improve the material but not the principle, and the ancient twist remains the way every rope is still made.",
    whyTimeless: [
      "Twist converts weak short fibers into a strong continuous cord, strengthened by load.",
      "Layering yarn, strand, and rope achieves strength no single fiber could.",
      "It is the same twisted structure from prehistoric caves to modern climbing lines.",
    ],
    anatomy: [
      {
        title: "The fibers",
        description:
          "The short natural or synthetic filaments that form the base material.",
      },
      {
        title: "The twist",
        description:
          "The helical lay that makes tension tighten the structure.",
      },
      {
        title: "The strands",
        description:
          "Twisted yarns bundled into the rope's working elements.",
      },
      {
        title: "The lay",
        description:
          "The alternating twist direction that keeps the rope from unlaying itself.",
      },
    ],
    material: "Hemp, cotton, or synthetic fiber",
    materials: ["Fiber", "Composite"],
    dimensions: "≈ 10 m × 12 mm (typical)",
    image: "/objects/rope/main.jpg",
    gallery: ["/objects/rope/main.jpg"],
    quote:
      "Rope is mathematics made of fibers: the same twist has been holding things together for thirty thousand years.",
    quoteAuthor: "Archive note, Object 070",
    timeline: [
      {
        year: "c. 28,000 BCE",
        title: "Earliest cordage",
        description:
          "Twisted fiber cordage appears in prehistoric cave sites.",
      },
      {
        year: "Antiquity",
        title: "Rigging and hauling",
        description:
          "Rope builds ships, lifts stones, and binds civilizations.",
      },
      {
        year: "19th century",
        title: "Machine ropewalks",
        description:
          "Mechanized rope-making produces uniform, reliable cordage.",
      },
      {
        year: "20th century",
        title: "Synthetics",
        description:
          "Nylon and polyester improve strength and durability, not the twist.",
      },
    ],
    sources: [
      { title: "Rope — Wikipedia", url: "https://en.wikipedia.org/wiki/Rope" },
    ],
    imageCredit: {
      creator: "Nevit Dilmen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Coiled_rope_03235.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "abacus",
    slug: "abacus",
    number: "071",
    name: "Abacus",
    category: "tools",
    year: "c. 2700 BCE",
    yearNum: -2700,
    designer: "Unknown — Sumerian",
    origin: "Mesopotamia",
    description:
      "Counters on rods that turn arithmetic into a physical, visible procedure.",
    longDescription:
      "The abacus is calculation made visible: a frame of rods on which counters are slid to represent place values, so adding and subtracting become moves the eye can follow and the hand can correct. Counting boards were used in Mesopotamia as early as the third millennium BCE, and the framed rod-abacus that followed spread through China, Greece, Rome, and every trading culture that needed reliable sums.\n\nIts design is a model of how to externalize mental work. Each rod holds a fixed place value; each counter is worth its position; a calculation is a sequence of movements, each one checkable by eye. Because the mechanism has no hidden state, mistakes are visible and fixable. The abacus was still in professional use in the twentieth century — the pictured example served the State Department Store in Ulaanbaatar from 1923 to 1970 — and it remains the fastest way to teach place value ever devised.",
    whyTimeless: [
      "Rods and beads make place value and arithmetic visible and self-checking.",
      "Every state of a calculation is inspectable — there is no hidden logic.",
      "It needs no power, never breaks, and works as well as any calculator for addition.",
    ],
    anatomy: [
      {
        title: "The frame",
        description:
          "The rigid structure that holds the rods in fixed positions.",
      },
      {
        title: "The rods",
        description:
          "The columns that give each row of counters its place value.",
      },
      {
        title: "The counters",
        description:
          "The beads that are moved to represent numbers.",
      },
      {
        title: "The bar",
        description:
          "The crossbar that separates units from fives on the traditional frame.",
      },
    ],
    material: "Wood, with wooden or metal counters",
    materials: ["Wood", "Metal"],
    dimensions: "≈ 300 mm × 200 mm",
    image: "/objects/abacus/main.jpg",
    gallery: ["/objects/abacus/main.jpg"],
    quote:
      "The abacus is arithmetic with its sleeves rolled up: you can see every number it is holding.",
    quoteAuthor: "Archive note, Object 071",
    timeline: [
      {
        year: "c. 2700 BCE",
        title: "Counting boards",
        description:
          "Sumerian counting boards perform arithmetic with physical counters.",
      },
      {
        year: "Antiquity",
        title: "Roman and Chinese frames",
        description:
          "The framed abacus spreads across Rome, China, and the Hellenistic world.",
      },
      {
        year: "Mid-20th century",
        title: "Professional use",
        description:
          "The pictured abacus serves the State Department Store in Ulaanbaatar for nearly fifty years.",
      },
      {
        year: "Today",
        title: "Teaching and memory",
        description:
          "The abacus survives as a teaching tool and a living tradition in Asia.",
      },
    ],
    sources: [
      { title: "Abacus — Wikipedia", url: "https://en.wikipedia.org/wiki/Abacus" },
    ],
    imageCredit: {
      creator: "K.F.",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Abacus_of_State_Department_Store.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "thermometer",
    slug: "thermometer",
    number: "072",
    name: "Thermometer",
    category: "tools",
    year: "1654",
    yearNum: 1654,
    designer: "Ferdinand II de' Medici",
    origin: "Italy",
    description:
      "A sealed tube of liquid that rises and falls with temperature, turning heat into a number.",
    longDescription:
      "Heat has always been felt but never measured, until the sealed liquid thermometer arrived in the seventeenth century. Ferdinand II de' Medici, Grand Duke of Tuscany, produced the first sealed spirit thermometers in 1654, protecting the liquid from air pressure so that its expansion and contraction reflected temperature alone. The glass tube, the bulb of liquid, and the scale became the standard instrument of climate, medicine, and cooking.\n\nThe thermometer's design is the physics made readable. The liquid's expansion is amplified by the narrow bore of the tube, so a small change in temperature produces a large, visible change in the column's height; the fixed points of the scale give the height a meaning. Mercury or spirit in a sealed glass tube has been the form ever since, and even digital sensors still present their readings on the same kind of linear scale.",
    whyTimeless: [
      "A sealed tube makes liquid expansion respond to temperature alone, not air pressure.",
      "The narrow bore amplifies tiny expansions into a clearly readable column.",
      "It converts an invisible sensation into a precise, comparable number.",
    ],
    anatomy: [
      {
        title: "The bulb",
        description:
          "The reservoir of liquid at the base that expands with heat.",
      },
      {
        title: "The bore",
        description:
          "The narrow capillary that amplifies the liquid's movement.",
      },
      {
        title: "The liquid",
        description:
          "Mercury or spirit that expands predictably with temperature.",
      },
      {
        title: "The scale",
        description:
          "The marked tube that gives the column height a numerical meaning.",
      },
    ],
    material: "Glass tube with liquid fill",
    materials: ["Glass", "Metal"],
    dimensions: "≈ 300 mm long",
    image: "/objects/thermometer/main.jpg",
    gallery: ["/objects/thermometer/main.jpg"],
    quote:
      "Before the thermometer, heat was an opinion. After it, heat was a number.",
    quoteAuthor: "Archive note, Object 072",
    timeline: [
      {
        year: "1654",
        title: "The sealed thermometer",
        description:
          "Ferdinand II de' Medici makes the first sealed spirit thermometers in Florence.",
      },
      {
        year: "1714",
        title: "Mercury and scale",
        description:
          "Daniel Gabriel Fahrenheit develops the mercury thermometer and a reliable scale.",
      },
      {
        year: "1742",
        title: "Celsius",
        description:
          "Anders Celsius proposes the centigrade scale used worldwide.",
      },
      {
        year: "Today",
        title: "Still reading",
        description:
          "Digital sensors coexist with the sealed liquid column that made measurement possible.",
      },
    ],
    sources: [
      { title: "Thermometer — Wikipedia", url: "https://en.wikipedia.org/wiki/Thermometer" },
    ],
    imageCredit: {
      creator: "Martinvl",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:CelsiusKelvinThermometer.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "weighing-scale",
    slug: "weighing-scale",
    number: "073",
    name: "Balance Scale",
    category: "tools",
    year: "c. 3000 BCE",
    yearNum: -3000,
    designer: "Unknown — ancient",
    origin: "Mesopotamia / Egypt",
    description:
      "Two pans on a beam that compare any two masses against gravity, honestly and forever.",
    longDescription:
      "The balance scale is measurement by comparison: hang a pan on each end of a beam, put the unknown in one and known weights in the other, and gravity does the arithmetic. When the beam hangs level, the two masses are equal. Balances appear in Egypt and Mesopotamia around 3000 BCE, and the principle has been the world's standard of honest weighing ever since.\n\nThe balance's design is gravity made into an instrument. The beam must swing freely on its fulcrum; the pans must hang true; the knife-edge pivot must offer almost no friction, so that even a small difference in mass tips the beam visibly. Because the mechanism compares like with like, it needs no calibration against anything but itself — which is why the balance became the symbol of justice as well as commerce, and why it has never been improved on in principle.",
    whyTimeless: [
      "The beam compares two masses directly against gravity, needing no external standard.",
      "A near-frictionless pivot makes even tiny differences visible.",
      "It is impartial by construction — the same physics in a market or a laboratory.",
    ],
    anatomy: [
      {
        title: "The beam",
        description:
          "The lever that balances the two pans against each other.",
      },
      {
        title: "The pivot",
        description:
          "The low-friction knife edge that lets the beam swing freely.",
      },
      {
        title: "The pans",
        description:
          "The suspended dishes that carry the object and the weights.",
      },
      {
        title: "The pillar",
        description:
          "The upright that supports the beam and marks the balance point.",
      },
    ],
    material: "Brass",
    materials: ["Brass", "Metal"],
    dimensions: "≈ 300 mm × 200 mm",
    image: "/objects/weighing-scale/main.jpg",
    gallery: ["/objects/weighing-scale/main.jpg"],
    quote:
      "The balance is the only measuring instrument that asks nothing of anyone but gravity.",
    quoteAuthor: "Archive note, Object 073",
    timeline: [
      {
        year: "c. 3000 BCE",
        title: "First balances",
        description:
          "Egyptian and Mesopotamian traders weigh goods on two-pan balances.",
      },
      {
        year: "Antiquity",
        title: "Standard of trade",
        description:
          "Balances and standard weights govern commerce across the ancient world.",
      },
      {
        year: "Middle Ages",
        title: "The symbol of justice",
        description:
          "The balance becomes the emblem of law and fairness.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "Laboratory and market balances still use the two-pan comparison.",
      },
    ],
    sources: [
      { title: "Weighing scale — Wikipedia", url: "https://en.wikipedia.org/wiki/Weighing_scale" },
    ],
    imageCredit: {
      creator: "Nikodem Nijaki",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Balance_scale_IMGP9722.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "magnifying-glass",
    slug: "magnifying-glass",
    number: "074",
    name: "Magnifying Glass",
    category: "tools",
    year: "c. 1250",
    yearNum: 1250,
    designer: "Attributed to 13th-century scholars",
    origin: "Europe",
    description:
      "A convex lens on a handle that makes the small large, and the invisible visible.",
    longDescription:
      "The magnifying glass began as the reading stone: a convex slab of glass or crystal that enlarged text, described by scholars in the thirteenth century, with Roger Bacon writing about its powers around 1250. The mounted handle came soon after, and the design — a convex lens in a frame on a stem — has been unchanged for nearly eight centuries.\n\nThe magnifying glass works because a convex lens bends light rays so they converge, presenting a magnified virtual image to the eye. Its design is minimal: the lens does all the work, the frame holds it, the handle aims it. It is the simplest optical instrument, the gateway to lenses in spectacles, microscopes, and telescopes. A glass lens, a frame, and a handle have been enlarging the world since the Middle Ages, and no redesign has displaced them.",
    whyTimeless: [
      "A convex lens magnifies by pure optics, needing no mechanism or power.",
      "The handle lets the lens be aimed by hand at any object or text.",
      "It is the ancestor of every lens instrument, unchanged since its invention.",
    ],
    anatomy: [
      {
        title: "The lens",
        description:
          "The convex glass (or crystal) that bends light to magnify the subject.",
      },
      {
        title: "The frame",
        description:
          "The rim that holds and protects the lens edge.",
      },
      {
        title: "The handle",
        description:
          "The grip that positions the lens at the correct focal distance.",
      },
      {
        title: "The focal length",
        description:
          "The lens curvature that sets the magnification and working distance.",
      },
    ],
    material: "Glass and metal",
    materials: ["Glass", "Metal"],
    dimensions: "≈ 200 mm long",
    image: "/objects/magnifying-glass/main.jpg",
    gallery: ["/objects/magnifying-glass/main.jpg"],
    quote:
      "The magnifying glass is the whole history of optics in a handle: it made the small world speak.",
    quoteAuthor: "Archive note, Object 074",
    timeline: [
      {
        year: "c. 1250",
        title: "Reading stones",
        description:
          "Scholars use convex crystal slabs to enlarge text; Roger Bacon describes their power.",
      },
      {
        year: "13th century",
        title: "The mounted lens",
        description:
          "Lenses set in frames with handles become the magnifying glass.",
      },
      {
        year: "Late 13th century",
        title: "Spectacles",
        description:
          "The same lens principle is mounted as reading glasses in Italy.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The handle-mounted convex lens remains the standard inspection tool.",
      },
    ],
    sources: [
      { title: "Magnifying glass — Wikipedia", url: "https://en.wikipedia.org/wiki/Magnifying_glass" },
      { title: "Roger Bacon — Britannica", url: "https://www.britannica.com/biography/Roger-Bacon" },
    ],
    imageCredit: {
      creator: "Tomomarusan",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Magnifying_glass.jpg",
      license: "CC BY 2.5",
      licenseUrl: "https://creativecommons.org/licenses/by/2.5",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "wheel",
    slug: "wheel",
    number: "075",
    name: "Wheel",
    category: "mechanical",
    year: "c. 3150 BCE",
    yearNum: -3150,
    designer: "Unknown — Copper Age",
    origin: "Ljubljana Marshes, Slovenia",
    description:
      "A circle that rolls: the oldest, most copied, and most undisplaced mechanism ever made.",
    longDescription:
      "The wheel is one of humanity's few truly fundamental inventions, and the oldest surviving example of a wheel with an axle is the Ljubljana Marshes Wheel of around 3150 BCE — two planks of ash and oak joined into a circle, found in a Slovenian marsh. Its principle is devastatingly simple: because a circle touches the ground at a single point, rolling replaces sliding, and friction — the enemy of every load — almost disappears.\n\nThe wheel's design is a problem of geometry rather than mechanism. The circle must be true, the axle must pass through its center, and the bearing must let the two turn independently. Everything that followed — carts, gears, pulleys, clocks, engines — is an application of the same revolving circle. The Ljubljana wheel is the earliest proof that the geometry was already understood, and that the design was complete five thousand years ago.",
    whyTimeless: [
      "Rolling replaces sliding, cutting friction and effort to a fraction.",
      "The circle's uniformity makes the rotation smooth and the load predictable.",
      "Every machine ever built is an extension of this one revolving geometry.",
    ],
    anatomy: [
      {
        title: "The rim",
        description:
          "The circular outer surface that rolls across the ground.",
      },
      {
        title: "The hub",
        description:
          "The central bearing through which the axle passes.",
      },
      {
        title: "The spokes",
        description:
          "The members that carry load from the hub to the rim.",
      },
      {
        title: "The axle",
        description:
          "The fixed shaft that lets the wheel rotate around the load's center.",
      },
    ],
    material: "Wood (modern: steel, rubber, alloys)",
    materials: ["Wood", "Steel", "Rubber"],
    dimensions: "≈ 720 mm diameter (Ljubljana wheel)",
    image: "/objects/wheel/main.jpg",
    gallery: ["/objects/wheel/main.jpg"],
    quote:
      "Every civilization that adopted the wheel adopted the same geometry — because there is only one.",
    quoteAuthor: "Archive note, Object 075",
    timeline: [
      {
        year: "c. 3150 BCE",
        title: "Ljubljana Marshes",
        description:
          "The oldest surviving wheel with an axle is made of ash and oak in Slovenia.",
      },
      {
        year: "c. 2000 BCE",
        title: "Spoked wheels",
        description:
          "Spoked chariot wheels lighten the wheel and raise its speed.",
      },
      {
        year: "Industrial era",
        title: "Steel and bearings",
        description:
          "Iron wheels, then ball bearings and pneumatic tires, perfect the rolling contact.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The revolving circle remains the basis of transport and machinery.",
      },
    ],
    sources: [
      { title: "Wheel — Wikipedia", url: "https://en.wikipedia.org/wiki/Wheel" },
      { title: "Ljubljana Marshes Wheel — Wikipedia", url: "https://en.wikipedia.org/wiki/Ljubljana_Marshes_Wheel" },
    ],
    imageCredit: {
      creator: "Petar Milošević",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Ljubljana_Marshes_Wheel_with_axle_(oldest_wooden_wheel_yet_discovered).jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "gear",
    slug: "gear",
    number: "076",
    name: "Gear",
    category: "mechanical",
    year: "c. 150 BCE",
    yearNum: -150,
    designer: "Unknown — Hellenistic",
    origin: "Greece",
    description:
      "Toothed wheels that lock rotation together, transmitting and transforming motion with certainty.",
    longDescription:
      "A gear is a wheel that refuses to slip: its teeth mesh with a neighbor's so that one wheel's rotation forces the other's, transmitting power at a fixed, unbreakable ratio. The most famous early proof of the technology is the Antikythera mechanism, a Hellenistic computer of bronze gears built around 150 BCE that predicted the motions of the heavens.\n\nThe gear's design is geometry made into a machine. The tooth shape — in modern form the involute curve — ensures that meshing teeth roll against each other smoothly and continuously, so torque transfers without jamming or jolting. Varying the tooth count between two gears changes speed and force: a small gear driving a large one trades speed for power. Gears are the muscles and joints of every clock, gearbox, and engine, and the toothed wheel's logic has never been replaced.",
    whyTimeless: [
      "Meshing teeth transmit rotation at a fixed, non-slipping ratio.",
      "The involute tooth form makes engagement smooth and continuous.",
      "Changing tooth counts transforms speed, force, and direction — the essence of machinery.",
    ],
    anatomy: [
      {
        title: "The teeth",
        description:
          "The meshing projections that transfer rotation between wheels.",
      },
      {
        title: "The face",
        description:
          "The involute tooth profile that rolls smoothly against its partner.",
      },
      {
        title: "The hub",
        description:
          "The center that carries the shaft and the torque.",
      },
      {
        title: "The ratio",
        description:
          "The tooth-count relationship that sets speed and force.",
      },
    ],
    material: "Metal (steel, bronze)",
    materials: ["Metal", "Steel"],
    dimensions: "≈ 200 mm diameter",
    image: "/objects/gear/main.jpg",
    gallery: ["/objects/gear/main.jpg"],
    quote:
      "A gear is a wheel that keeps its promises: it never lets the motion it started slip away.",
    quoteAuthor: "Archive note, Object 076",
    timeline: [
      {
        year: "c. 150 BCE",
        title: "Antikythera",
        description:
          "The Antikythera mechanism computes astronomical cycles with bronze gears.",
      },
      {
        year: "Middle Ages",
        title: "Clocks",
        description:
          "Toothed wheels drive the first mechanical clocks and water-raising machines.",
      },
      {
        year: "18th–19th century",
        title: "Involute teeth",
        description:
          "The involute tooth form standardizes smooth, strong gearing.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "Gears still mesh in every gearbox, from wristwatches to wind turbines.",
      },
    ],
    sources: [
      { title: "Gear — Wikipedia", url: "https://en.wikipedia.org/wiki/Gear" },
      { title: "Antikythera mechanism — Britannica", url: "https://www.britannica.com/topic/Antikythera-mechanism" },
    ],
    imageCredit: {
      creator: "David Whelan",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:A_gear_wheel_that_washed_up_on_the_beach_(9273493350).jpg",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "chain",
    slug: "chain",
    number: "077",
    name: "Chain",
    category: "mechanical",
    year: "c. 400 BCE",
    yearNum: -400,
    designer: "Unknown — Iron Age",
    origin: "Europe",
    description:
      "Interlocking rings that are strong under tension yet fold, coil, and bend like cloth.",
    longDescription:
      "A chain is rope made of metal: a series of interlocking rings that transfers tensile force while remaining flexible. Iron chains appear in the ancient world — the Gallo-Roman tradition made chains of linked rings more than two thousand years ago — and they have served ever since for anchoring, lifting, suspending, and binding.\n\nThe chain's genius is in the ring. Each ring passes through its neighbors, so tension loads every ring in a loop and the whole chain fails only when a single ring fails — and because the rings are separate, the chain bends, coils, and packs like a textile. When a chain needs to do work rather than merely hold, the link becomes a toothed or bushed element, as in the roller chains that transmit power in bicycles and machinery. But the plain linked chain, older than most inventions, is still the simplest strong-and-flexible connector there is.",
    whyTimeless: [
      "Linked rings carry tension with complete flexibility and compact stowage.",
      "Each ring is a separate, replaceable element — repair is local, not total.",
      "Metal gives the strength that fiber cannot, and the ring gives it flexibility.",
    ],
    anatomy: [
      {
        title: "The links",
        description:
          "The interlocking rings that transmit the load.",
      },
      {
        title: "The interlock",
        description:
          "The passing of each link through its neighbors that holds the chain together.",
      },
      {
        title: "The weld",
        description:
          "The closed joint that makes each link a complete ring.",
      },
      {
        title: "The lay",
        description:
          "The alternating orientation of links that keeps the chain flat and true.",
      },
    ],
    material: "Steel (also iron, brass)",
    materials: ["Steel", "Metal"],
    dimensions: "≈ 4 m × 10 mm (typical)",
    image: "/objects/chain/main.jpg",
    gallery: ["/objects/chain/main.jpg"],
    quote:
      "A chain is strength that can fold into a pocket and reach across a harbor.",
    quoteAuthor: "Archive note, Object 077",
    timeline: [
      {
        year: "c. 400 BCE",
        title: "Iron link chains",
        description:
          "Gallo-Roman smiths forge chains of interlocking iron rings.",
      },
      {
        year: "Antiquity",
        title: "Mooring and lifting",
        description:
          "Chains anchor ships and raise weights throughout the ancient world.",
      },
      {
        year: "19th century",
        title: "Roller chains",
        description:
          "Bushed roller chains transmit power in machinery and bicycles.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "From anchor cables to bicycle drivetrains, the linked ring endures.",
      },
    ],
    sources: [
      { title: "Chain — Wikipedia", url: "https://en.wikipedia.org/wiki/Chain" },
    ],
    imageCredit: {
      creator: "Richard Leonard",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Metal_chain_(134253865).jpg",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "pulley",
    slug: "pulley",
    number: "078",
    name: "Pulley",
    category: "mechanical",
    year: "c. 1500 BCE",
    yearNum: -1500,
    designer: "Unknown — ancient",
    origin: "Mesopotamia",
    description:
      "A grooved wheel that redirects a rope, trading a change of direction for a gain in force.",
    longDescription:
      "The pulley is a wheel and a rope with a groove between them. Its first trick is redirection: loop a rope over a grooved wheel and a downward pull on one end becomes an upward pull on the other — the basis of the bucket well and the crane. Its second trick is force multiplication: with a system of pulleys, a modest pull on the rope raises a load several times heavier.\n\nThe pulley's design is the groove. The wheel's rim is shaped to cradle the rope, so the rope stays centered, does not slip off, and turns the wheel freely with little friction. One pulley changes direction; a block of several multiplies force by the number of rope segments. The pulley has been at work in wells, ships, and construction since antiquity — the pictured example hangs in a Maltese windmill — and no alternative has ever replaced the grooved wheel.",
    whyTimeless: [
      "The groove holds the rope centered while the wheel turns freely.",
      "Direction change and force multiplication come from the same simple element.",
      "Every lifting system — from wells to cranes — still runs on the grooved wheel.",
    ],
    anatomy: [
      {
        title: "The wheel",
        description:
          "The grooved disc that the rope runs over.",
      },
      {
        title: "The groove",
        description:
          "The channel that cradles the rope and keeps it aligned.",
      },
      {
        title: "The axle",
        description:
          "The pivot that lets the wheel rotate with minimal friction.",
      },
      {
        title: "The shell",
        description:
          "The casing that mounts the pulley and anchors the rope's support.",
      },
    ],
    material: "Metal and wood",
    materials: ["Metal", "Wood"],
    dimensions: "≈ 300 mm wheel",
    image: "/objects/pulley/main.jpg",
    gallery: ["/objects/pulley/main.jpg"],
    quote:
      "A pulley does nothing but change direction — and that little thing moves the world.",
    quoteAuthor: "Archive note, Object 078",
    timeline: [
      {
        year: "c. 1500 BCE",
        title: "Early pulleys",
        description:
          "Mesopotamian wells and cranes use wheels to redirect rope.",
      },
      {
        year: "Antiquity",
        title: "Blocks and tackle",
        description:
          "Greek engineers multiply force with compound pulley systems.",
      },
      {
        year: "Middle Ages",
        title: "Cathedrals and ships",
        description:
          "Pulleys lift stone and rig sails across medieval Europe.",
      },
      {
        year: "Today",
        title: "Still grooved",
        description:
          "Every crane, elevator, and sailboat still uses the grooved wheel.",
      },
    ],
    sources: [
      { title: "Pulley — Wikipedia", url: "https://en.wikipedia.org/wiki/Pulley" },
    ],
    imageCredit: {
      creator: "Qasinka",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2025_Pulley_(Windmill_in_Xaghra).jpg",
      license: "CC0",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "spring",
    slug: "spring",
    number: "079",
    name: "Spring",
    category: "mechanical",
    year: "c. 1450",
    yearNum: 1450,
    designer: "Unknown — European clockmakers",
    origin: "Europe",
    description:
      "A coil of elastic steel that stores energy, returns it on demand, and never grows tired.",
    longDescription:
      "The spring is a store of energy in metal: wind it or compress it and it holds the effort, ready to release it when the load comes off. The coil spring appeared in European clockmaking around the fifteenth century, first as the mainspring that made portable clocks possible, and its logic has since powered, cushioned, and returned nearly everything mechanical.\n\nThe spring's design is material memory exploited. Elastic steel is deformed within its limits, storing the work of deformation as potential energy; the coil multiplies the length over which that energy is stored into a compact package. A spring can absorb a shock, return a lever, meter a mechanism, or cushion a ride — all from the same wound length of wire. Nothing else stores energy so cheaply, simply, and repeatably, which is why the coil spring has never been replaced.",
    whyTimeless: [
      "Elastic steel stores energy reversibly, releasing it predictably millions of times.",
      "The coil packs a long working length into a compact, mountable package.",
      "One simple element powers clocks, suspends vehicles, and returns every button.",
    ],
    anatomy: [
      {
        title: "The coil",
        description:
          "The helical winding that packs stored length into a small space.",
      },
      {
        title: "The wire",
        description:
          "The elastic steel whose deformation stores the energy.",
      },
      {
        title: "The pitch",
        description:
          "The spacing between coils that sets the spring's rate and travel.",
      },
      {
        title: "The ends",
        description:
          "The closed or ground ends that mount the spring and distribute load.",
      },
    ],
    material: "Spring steel",
    materials: ["Steel"],
    dimensions: "≈ 60 mm × 40 mm (typical)",
    image: "/objects/spring/main.jpg",
    gallery: ["/objects/spring/main.jpg"],
    quote:
      "A spring is a promise of energy: every compression is a debt it will repay.",
    quoteAuthor: "Archive note, Object 079",
    timeline: [
      {
        year: "c. 1450",
        title: "Clock mainsprings",
        description:
          "Coil springs drive the first portable clocks in Europe.",
      },
      {
        year: "17th century",
        title: "Watch balance springs",
        description:
          "Hairsprings make mechanical watches keep accurate time.",
      },
      {
        year: "19th century",
        title: "Industrial springs",
        description:
          "Machine-drawn spring steel cushions vehicles and powers mechanisms.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The coiled elastic wire remains the universal energy store.",
      },
    ],
    sources: [
      { title: "Spring (device) — Wikipedia", url: "https://en.wikipedia.org/wiki/Spring_(device)" },
    ],
    imageCredit: {
      creator: "FASTILY",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Coil_springs_1_2014-12-14.JPG",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "ball-bearing",
    slug: "ball-bearing",
    number: "080",
    name: "Ball Bearing",
    category: "mechanical",
    year: "1883",
    yearNum: 1883,
    designer: "Friedrich Fischer",
    origin: "Germany",
    description:
      "Balls that turn sliding friction into rolling friction, letting machines spin almost forever.",
    longDescription:
      "Every rotating machine suffers the same enemy: friction at the axle. The ball bearing attacks it by putting steel balls between the moving and fixed parts, so that sliding — which grinds and heats — becomes rolling, which barely resists at all. Friedrich Fischer built the first machines to produce perfectly round, identical steel balls in 1883 in Schweinfurt, Germany, making precision bearings practical for industry.\n\nThe bearing's design is a study in uniformity. The balls must be spherical to a few millionths of a metre so that each carries an equal share of the load; the races must guide them without pinching; the cage must keep them evenly spaced. The result lets a shaft spin at thousands of revolutions with almost no loss. Every wheel, engine, and electric motor runs on the same trick, and the ball bearing has never been improved on in principle.",
    whyTimeless: [
      "Rolling replaces sliding, cutting friction and wear by an order of magnitude.",
      "Perfectly round balls share the load equally, giving long, quiet life.",
      "One compact unit lets any shaft spin fast and free — the heart of the machine age.",
    ],
    anatomy: [
      {
        title: "The balls",
        description:
          "The precision steel spheres that carry the load in rolling contact.",
      },
      {
        title: "The races",
        description:
          "The grooved rings that guide and support the balls.",
      },
      {
        title: "The cage",
        description:
          "The separator that keeps the balls evenly spaced.",
      },
      {
        title: "The seals",
        description:
          "The shields that keep the grease in and the grit out.",
      },
    ],
    material: "Hardened steel",
    materials: ["Steel"],
    dimensions: "≈ 25 mm outer diameter (pictured)",
    image: "/objects/ball-bearing/main.jpg",
    gallery: ["/objects/ball-bearing/main.jpg"],
    quote:
      "The ball bearing turned a grinding struggle into a glide, and every machine has been spinning on it since.",
    quoteAuthor: "Archive note, Object 080",
    timeline: [
      {
        year: "1869",
        title: "Bicycle bearings",
        description:
          "Early ball bearings roll on bicycles and other light machines.",
      },
      {
        year: "1883",
        title: "Fischer's machine",
        description:
          "Friedrich Fischer produces uniform steel balls, making bearings precise and affordable.",
      },
      {
        year: "1907",
        title: "The self-aligning bearing",
        description:
          "Sven Wingquist founds SKF on the self-aligning ball bearing.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The rolling ball carries the modern world — the pictured SKF bearing shows the form.",
      },
    ],
    sources: [
      { title: "Ball bearing — Wikipedia", url: "https://en.wikipedia.org/wiki/Ball_bearing" },
    ],
    imageCredit: {
      creator: "R. Henrik Nilsson",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:1950s_ball_bearing_129_HA_by_Swedish_company_SKF_made_in_Sweden.jpg",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "hinge",
    slug: "hinge",
    number: "081",
    name: "Hinge",
    category: "mechanical",
    year: "c. 1000 BCE",
    yearNum: -1000,
    designer: "Unknown — ancient",
    origin: "Mediterranean",
    description:
      "A pivot that lets a door swing on a single fixed axis, forever aligned.",
    longDescription:
      "The hinge is a joint for doors: two leaves joined at a pin, so the door turns on a fixed, invisible axis and returns to its frame every time. Bronze door hinges are known from the ancient world, and the form has never needed a rival — a swinging door can do nothing better than swing on a true pivot.\n\nThe hinge's design is about constraining motion. The pin holds the two leaves in constant alignment; the knuckles distribute the load along the pivot; the leaves spread the fastening into the door and frame. It is a machine with one degree of freedom, and that is precisely its strength: the door can only do what a door should. From cupboard to cathedral, the butt hinge is so settled that its dimensions are among the most standardized of any object — the pictured example is the everyday form.",
    whyTimeless: [
      "A single pin constrains the door to exactly one motion — a perfect joint.",
      "The knuckle-and-leaf form distributes load and spreads fastening.",
      "It is simple, repairable, and so standardized that replacement is trivial.",
    ],
    anatomy: [
      {
        title: "The leaves",
        description:
          "The plates that fasten to the door and the frame.",
      },
      {
        title: "The knuckles",
        description:
          "The interleaved cylinders that form the pivot joint.",
      },
      {
        title: "The pin",
        description:
          "The rod through the knuckles that defines the axis of rotation.",
      },
      {
        title: "The screws",
        description:
          "The fixings that spread the hinge's load into the wood.",
      },
    ],
    material: "Steel or brass",
    materials: ["Steel", "Brass"],
    dimensions: "≈ 100 mm × 80 mm (typical)",
    image: "/objects/hinge/main.jpg",
    gallery: ["/objects/hinge/main.jpg"],
    quote:
      "A hinge gives a door the one thing it needs: an axis that never argues about where it points.",
    quoteAuthor: "Archive note, Object 081",
    timeline: [
      {
        year: "Antiquity",
        title: "Bronze hinges",
        description:
          "Bronze door hinges pivot the gates of the ancient world.",
      },
      {
        year: "Middle Ages",
        title: "Wrought iron",
        description:
          "Forged iron hinges carry heavy church and castle doors.",
      },
      {
        year: "Industrial era",
        title: "The standard butt hinge",
        description:
          "Pressed steel and standardized sizes make hinges universal hardware.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "Every swinging door still depends on the knuckle-and-pin joint.",
      },
    ],
    sources: [
      { title: "Hinge — Wikipedia", url: "https://en.wikipedia.org/wiki/Hinge" },
    ],
    imageCredit: {
      creator: "JonRichfield",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Butt_Hinge_annotated.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "caster",
    slug: "caster",
    number: "082",
    name: "Caster",
    category: "mechanical",
    year: "1876",
    yearNum: 1876,
    designer: "David A. Fisher",
    origin: "United States",
    description:
      "A wheel on a swivel that lets a load be pushed in any direction without being lifted.",
    longDescription:
      "Furniture, carts, and machinery are heavy, and the caster makes them mobile: a small wheel mounted on a swiveling fork, so the whole assembly turns to follow the push. The swivel caster was perfected in the late nineteenth century — David A. Fisher's patent of 1876 was among the key designs — and it turned heavy objects into things a single person could reposition.\n\nThe caster's design is a lesson in direction-following. The wheel rolls straight, while the swivel lets the wheel steer into the direction of the push, so the load never has to be lifted, only aimed. The offset pivot is what makes it work: because the wheel trails behind the swivel axis, any sideways push swings the wheel around and the load follows. From office chairs to hospital beds to shopping carts, the swivel caster is why the modern world rolls.",
    whyTimeless: [
      "The swiveling wheel steers itself into the direction of the push.",
      "The offset pivot turns any sideways force into a graceful change of direction.",
      "One compact unit gives heavy objects full mobility with no lifting.",
    ],
    anatomy: [
      {
        title: "The wheel",
        description:
          "The rolling element that carries the load.",
      },
      {
        title: "The fork",
        description:
          "The bracket that mounts the wheel and carries the swivel.",
      },
      {
        title: "The swivel",
        description:
          "The bearing that lets the whole assembly turn to follow the push.",
      },
      {
        title: "The stem",
        description:
          "The mounting that fixes the caster to the load.",
      },
    ],
    material: "Steel with rubber wheel",
    materials: ["Steel", "Rubber", "Metal"],
    dimensions: "≈ 120 mm wheel",
    image: "/objects/caster/main.jpg",
    gallery: ["/objects/caster/main.jpg"],
    quote:
      "The caster gave the heaviest objects the gift of changing their mind about where they stand.",
    quoteAuthor: "Archive note, Object 082",
    timeline: [
      {
        year: "1876",
        title: "Swivel caster patent",
        description:
          "David A. Fisher patents a swivel caster design in the United States.",
      },
      {
        year: "Late 19th century",
        title: "Furniture and industry",
        description:
          "Casters roll furniture, machinery, and carts across workshops and homes.",
      },
      {
        year: "20th century",
        title: "The office chair",
        description:
          "The swivel caster makes the modern rolling office chair possible.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "Shopping carts, hospital beds, and luggage all roll on the swivel caster.",
      },
    ],
    sources: [
      { title: "Caster — Wikipedia", url: "https://en.wikipedia.org/wiki/Caster" },
    ],
    imageCredit: {
      creator: "Lambtron",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Swivel_caster.jpg",
      license: "Public domain",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "screw",
    slug: "screw",
    number: "083",
    name: "Screw",
    category: "mechanical",
    year: "1841",
    yearNum: 1841,
    designer: "Sir Joseph Whitworth (thread standardization)",
    origin: "England",
    description:
      "An inclined plane wrapped in a helix: the fastener that pulls, presses, and holds.",
    longDescription:
      "The screw is one of the six simple machines — an inclined plane coiled into a helix — and as a fastener it does what a nail cannot: it can be removed. Its threads convert a turning force into a powerful linear pull, so a screw both joins and can be undone. Hand-cut wood screws date to the sixteenth century; the machine screw reached its modern form in 1841, when Joseph Whitworth standardized the thread profile so that any screw and any nut could mate.\n\nThe screw's design is about the thread. Its pitch sets how far the screw advances per turn; its angle converts rotation into axial force; its pointed tip self-locates in wood. A screw holds by friction and shape together, and it returns the favor of being turned by letting the turner turn it out. Standardized threads turned the screw from a custom part into the universal fastener of machinery, and that system is still in use.",
    whyTimeless: [
      "The helix converts rotation into strong, controllable linear force.",
      "A screw joins and releases — the fastener that is never permanently committed.",
      "Whitworth's thread standard made any screw fit any nut, forever.",
    ],
    anatomy: [
      {
        title: "The threads",
        description:
          "The helical ridges that convert turning into forward force.",
      },
      {
        title: "The head",
        description:
          "The driven face that accepts the turning tool.",
      },
      {
        title: "The point",
        description:
          "The self-locating tip that starts the screw in the material.",
      },
      {
        title: "The pitch",
        description:
          "The thread spacing that sets the screw's advance per turn.",
      },
    ],
    material: "Steel (coated)",
    materials: ["Steel"],
    dimensions: "≈ 40 mm × 6 mm (typical)",
    image: "/objects/screw/main.jpg",
    gallery: ["/objects/screw/main.jpg"],
    quote:
      "The screw is a promise kept under tension: it holds as long as you turn it, and releases when you turn it back.",
    quoteAuthor: "Archive note, Object 083",
    timeline: [
      {
        year: "Antiquity",
        title: "Archimedes' screw",
        description:
          "The helical screw raises water in the ancient Mediterranean.",
      },
      {
        year: "15th–16th century",
        title: "Hand-cut screws",
        description:
          "Cut wood screws fasten armor, clocks, and instruments.",
      },
      {
        year: "1841",
        title: "Whitworth threads",
        description:
          "Joseph Whitworth standardizes the thread form for interchangeable screws.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The threaded helix remains the world's most common removable fastener.",
      },
    ],
    sources: [
      { title: "Screw — Wikipedia", url: "https://en.wikipedia.org/wiki/Screw" },
      { title: "Joseph Whitworth — Britannica", url: "https://www.britannica.com/biography/Joseph-Whitworth-Baronet" },
    ],
    imageCredit: {
      creator: "Mynameisnatmo",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Black_wood_screw_with_flat_Phillips_head.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "nail",
    slug: "nail",
    number: "084",
    name: "Nail",
    category: "mechanical",
    year: "c. 2120 BCE",
    yearNum: -2120,
    designer: "Unknown — Neo-Sumerian",
    origin: "Lagash (Girsu), Mesopotamia",
    description:
      "A pin that joins by friction and deformation — the oldest, simplest, cheapest fastener.",
    longDescription:
      "The nail is a fastener that works by being driven: a pointed pin forced into material that grips it by friction and compression. Its ancestor is the foundation nail, and the pictured example is the ritual foundation nail of Gudea, ruler of Lagash — a bronze peg from around 2120 BCE, dedicating the building of the E-ninnu temple at Girsu. The Mesopotamians drove such pegs into foundations as a dedicatory act, and the ordinary nail has done the everyday equivalent ever since.\n\nThe nail's design is almost entirely about proportion. A pointed tip eases penetration; a head stops the nail from pulling through; the shank's friction and the material's grip hold it in place. Iron wire nails, machine-cut and mass-produced from the nineteenth century, made the nail astonishingly cheap — a few cents buys a hundred. Nothing joins wood faster, cheaper, or more simply, which is why the nail remains the default fastener of building.",
    whyTimeless: [
      "Friction and deformation hold it in place — the simplest possible joint.",
      "The pointed tip, straight shank, and head are all a pin needs to work.",
      "Machine production made it nearly free, and no alternative has matched its economy.",
    ],
    anatomy: [
      {
        title: "The point",
        description:
          "The tapered tip that eases penetration and parts the material.",
      },
      {
        title: "The shank",
        description:
          "The straight body that grips by friction and compression.",
      },
      {
        title: "The head",
        description:
          "The flat top that stops the nail from pulling through.",
      },
      {
        title: "The drive",
        description:
          "The surface struck to set the nail — hammer or machine.",
      },
    ],
    material: "Bronze (modern: steel wire)",
    materials: ["Bronze", "Steel", "Metal"],
    dimensions: "≈ 230 mm long (foundation nail)",
    image: "/objects/nail/main.jpg",
    gallery: ["/objects/nail/main.jpg"],
    quote:
      "The nail is the humblest of machines and the most honest: it holds, and everyone can see how.",
    quoteAuthor: "Archive note, Object 084",
    timeline: [
      {
        year: "c. 2120 BCE",
        title: "Foundation nail of Gudea",
        description:
          "A bronze peg dedicates the E-ninnu temple at Girsu, Mesopotamia.",
      },
      {
        year: "Antiquity",
        title: "Bronze and iron nails",
        description:
          "Metal nails join the ships, buildings, and armor of the ancient world.",
      },
      {
        year: "1790s–1820s",
        title: "Cut nails",
        description:
          "Machine-cut nails replace handmade wrought nails.",
      },
      {
        year: "1850s",
        title: "Wire nails",
        description:
          "Cheap steel wire nails make the fastener nearly free.",
      },
    ],
    sources: [
      { title: "Nail (fastener) — Wikipedia", url: "https://en.wikipedia.org/wiki/Nail_(fastener)" },
      { title: "Foundation nail — Louvre collection", url: "https://collections.louvre.fr/en/" },
    ],
    imageCredit: {
      creator: "Rama",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Foundation_nail_IMG_0073-black.jpg",
      license: "CC BY-SA 2.0 fr",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/fr/deed.en",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "washer",
    slug: "washer",
    number: "085",
    name: "Washer",
    category: "mechanical",
    year: "c. 1850",
    yearNum: 1850,
    designer: "Unknown — industrial era",
    origin: "United States / Europe",
    description:
      "A ring of metal that spreads a bolt's grip across a wider area, saving both parts from damage.",
    longDescription:
      "A bolt head or nut presses with concentrated force onto a small area — enough to crush soft wood or deform a thin sheet. The washer is the fix: a flat ring that slips under the nut or bolt head, spreading the clamping force over a wider circle so the work is not damaged and the joint stays tight. Machine washers appeared alongside industrial fastening in the nineteenth century.\n\nThe washer's design is geometry as insurance. Its inner diameter clears the bolt; its outer diameter distributes the load; its flatness keeps the bearing even. There are refinements — spring washers that resist loosening, lock washers with split rings — but the plain flat washer is the core, and it is one of the cheapest, most reliable improvements in all of engineering. The pictured stack of washers, arranged like a skyline, shows the humble ring in quantity.",
    whyTimeless: [
      "A flat ring spreads clamping force over a wider area, protecting both parts.",
      "It is a standard, interchangeable component with zero moving parts.",
      "Its geometry is so settled that it has stayed identical for nearly two centuries.",
    ],
    anatomy: [
      {
        title: "The bore",
        description:
          "The inner hole that clears the bolt or stud.",
      },
      {
        title: "The face",
        description:
          "The flat bearing surface that spreads the clamping pressure.",
      },
      {
        title: "The edge",
        description:
          "The outer diameter that sets how wide the load is spread.",
      },
      {
        title: "The thickness",
        description:
          "Enough material to bear the load without crushing.",
      },
    ],
    material: "Steel",
    materials: ["Steel"],
    dimensions: "≈ 20 mm × 10 mm (typical)",
    image: "/objects/washer/main.jpg",
    gallery: ["/objects/washer/main.jpg"],
    quote:
      "The washer is a few grams of metal that saves a joint from a lifetime of damage.",
    quoteAuthor: "Archive note, Object 085",
    timeline: [
      {
        year: "Antiquity",
        title: "Early rings",
        description:
          "Ring spacers ease the load under bolts in early machinery.",
      },
      {
        year: "19th century",
        title: "Industrial washers",
        description:
          "Machine-made flat washers accompany standardized bolts.",
      },
      {
        year: "20th century",
        title: "Specialized washers",
        description:
          "Spring and lock washers refine the plain ring for specific jobs.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "The plain flat washer remains in every joint, everywhere.",
      },
    ],
    sources: [
      { title: "Washer (hardware) — Wikipedia", url: "https://en.wikipedia.org/wiki/Washer_(hardware)" },
    ],
    imageCredit: {
      creator: "Dietmar Rabich",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Unterlegscheiben,_Mini-Skyline_--_2020_--_3875.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "buckle",
    slug: "buckle",
    number: "086",
    name: "Buckle",
    category: "everyday",
    year: "c. 620",
    yearNum: 620,
    designer: "Unknown — Anglo-Saxon goldsmith",
    origin: "East Anglia, England",
    description:
      "A frame and a pin that hold a strap fast. From a king's belt to a backpack, the same two pieces of logic.",
    longDescription:
      "The buckle is one of the oldest fasteners in the world: a frame, a bar, and a pin that catches one end of a strap and holds it under tension. Its history runs from Roman belt fittings to the masterwork shown here — the great gold buckle from the Sutton Hoo ship-burial in Suffolk, a seventh-century Anglo-Saxon treasure now at the British Museum.\n\nSutton Hoo's buckle is ornamented with interlaced animals in gold, but its mechanism is the one that has never changed: the strap passes over the crossbar, the pin drops through a punched hole, and the tongue's spring or a friction fit locks it. That same frame-and-tongue logic secures watchbands, tool belts, helmets, and luggage today. The buckle's genius is that it holds fast under strain yet releases instantly with a single small motion — a quality almost no other closure combines.",
    whyTimeless: [
      "A frame, a bar, and a pin combine to hold tension yet release in one motion.",
      "It never needs power, adjustment, or maintenance beyond the strap it fastens.",
      "The identical mechanism fastens ceremonial gold and everyday cloth across fifteen centuries.",
    ],
    anatomy: [
      {
        title: "The frame",
        description:
          "The outer loop that receives the strap and sets the buckle's size.",
      },
      {
        title: "The crossbar",
        description:
          "The central bar the strap threads over and wraps around.",
      },
      {
        title: "The tongue",
        description:
          "The pivoting pin that drops through a hole in the strap to lock it.",
      },
      {
        title: "The ends",
        description:
          "Often chape or roller fixtures that protect the strap and guide the tongue.",
      },
    ],
    material: "Gold (historic examples); metal, plastic, and webbing straps today",
    materials: ["Metal", "Gold"],
    dimensions: "≈ 130 mm × 80 mm (Sutton Hoo buckle)",
    image: "/objects/buckle/main.jpg",
    gallery: ["/objects/buckle/main.jpg"],
    quote:
      "A king's fastener and a schoolbag's fastener share one logic: hold under strain, release on demand.",
    quoteAuthor: "Archive note, Object 086",
    timeline: [
      {
        year: "Antiquity",
        title: "Roman fittings",
        description:
          "Frame-and-tongue buckles fasten belts across the Roman world.",
      },
      {
        year: "c. 620",
        title: "Sutton Hoo",
        description:
          "The great gold buckle — a marvel of Anglo-Saxon metalwork — is buried with an East Anglian king.",
      },
      {
        year: "Modern era",
        title: "Every strap",
        description:
          "The buckle settles into luggage, helmets, watches, and boots.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "Plastic and aluminium versions repeat the ancient geometry by the millions.",
      },
    ],
    sources: [
      { title: "Buckle — Wikipedia", url: "https://en.wikipedia.org/wiki/Buckle" },
      { title: "Sutton Hoo — Wikipedia", url: "https://en.wikipedia.org/wiki/Sutton_Hoo" },
      { title: "Sutton Hoo belt buckle — British Museum", url: "https://www.britishmuseum.org/collection/object/H_1939-1010-5" },
    ],
    imageCredit: {
      creator: "Michel wal",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Sutton_Hoo_belt_buckle.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "button",
    slug: "button",
    number: "087",
    name: "Button",
    category: "everyday",
    year: "c. 2000 BCE",
    yearNum: -2000,
    designer: "Unknown — prehistoric fastener makers",
    origin: "Indus Valley / Europe",
    description:
      "A disc pushed through a loop. The simplest closure in the wardrobe, and among the oldest.",
    longDescription:
      "A button is a disc — of shell, bone, horn, metal, or plastic — that passes through a slit or loop and is held in place by its own diameter. The idea is nearly as old as clothing: the earliest known buttons, functional discs with crossed holes from the Indus Valley, date to around 2000 BCE, long before they ever carried thread as ornament.\n\nFor most of history the button carried status as much as it held cloth — the Spanish example shown here, a delicate 12 mm metal piece from about 1650–75, belonged to a world of tailors, guilds, and sumptuary law. Yet the mechanics are untouched: a button small enough to push through, large enough not to slip back. That single trick of proportion makes the button faster than a tie, more reliable than a pin, and cheaper than a clasp, so it remains the default closure on the world's clothing.",
    whyTimeless: [
      "Its holding power comes purely from geometry — diameter in, diameter out.",
      "It costs almost nothing, breaks rarely, and needs no tools to use.",
      "Combined with a buttonhole, it is a two-part machine that has never been bettered.",
    ],
    anatomy: [
      {
        title: "The disc",
        description:
          "A flat or domed body wide enough not to slip back through its own hole.",
      },
      {
        title: "The holes",
        description:
          "Usually four (or two), arranged so thread can seat it firmly to the cloth.",
      },
      {
        title: "The rim",
        description:
          "The outer edge that catches on the buttonhole's far side.",
      },
      {
        title: "The shank (optional)",
        description:
          "A raised stem or fabric loop that lifts the button clear for thicker cloth.",
      },
    ],
    material: "Metal (shown); also plastic, shell, wood, bone, horn",
    materials: ["Metal", "Plastic", "Bone", "Wood"],
    dimensions: "12 mm diameter (shown)",
    image: "/objects/button/main.jpg",
    gallery: ["/objects/button/main.jpg"],
    quote:
      "Four thousand years of buttons, and each one still works by being too wide for its own hole.",
    quoteAuthor: "Archive note, Object 087",
    timeline: [
      {
        year: "c. 2000 BCE",
        title: "Indus Valley",
        description:
          "Earliest known functional buttons are cast discs with crossed holes.",
      },
      {
        year: "Middle Ages",
        title: "Fitted clothing",
        description:
          "Buttons spread across Europe as tailored garments make closures essential.",
      },
      {
        year: "c. 1650",
        title: "Status and skill",
        description:
          "Ornamental metal button-making becomes a specialized craft.",
      },
      {
        year: "Today",
        title: "Default closure",
        description:
          "Industrial plastic buttons number in the billions each year.",
      },
    ],
    sources: [
      { title: "Button — Wikipedia", url: "https://en.wikipedia.org/wiki/Button" },
    ],
    imageCredit: {
      creator: "Peach State Button Club",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Spanish_button_ca._1650-75_12mm_f&b.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "carabiner",
    slug: "carabiner",
    number: "088",
    name: "Carabiner",
    category: "tools",
    year: "c. 1911",
    yearNum: 1911,
    designer: "Descended from 19th-century snap hooks",
    origin: "Alps, Europe",
    description:
      "A spring-loaded gate that lets a link connect in one hand, one moment, while a life depends on the other way.",
    longDescription:
      "A carabiner is an oval or D-shaped connecting link with a spring-loaded gate on one side. Press the gate and the opening clears for a rope or ring; release it and the gate snaps shut, re-forming a closed loop. The design grew out of the snap hooks mountaineers used in the Alps in the late nineteenth century and became the standard connector of modern climbing by the early twentieth.\n\nThe Petzl example shown here, with its ball-lock mechanism, represents the refinement: the gate cannot open accidentally, yet it never needs tools, batteries, or maintenance. A carabiner's worth is measured in grams and trust — the whole object exists to do one job, hold a closed loop under load, and it does it with a part count of roughly two. Builders, sailors, rescuers, and climbers all rely on the same happy compromise between strength and one-handed release.",
    whyTimeless: [
      "A spring-loaded gate converts a loop into a connector that opens and closes in one hand.",
      "No power, no threads, no tools — just reliable geometry and a spring.",
      "The same part secures climbing ropes, keys, rescue gear, and industrial lines.",
    ],
    anatomy: [
      {
        title: "The spine",
        description:
          "The closed, load-bearing arc that carries the full applied force.",
      },
      {
        title: "The gate",
        description:
          "A spring-loaded arm that opens inward and closes automatically when released.",
      },
      {
        title: "The hinge or nose",
        description:
          "The point where gate and spine meet — the exact line of closure that takes the load.",
      },
      {
        title: "The locking sleeve (optional)",
        description:
          "A threaded or ball-lock collar that prevents the gate from opening under snagging.",
      },
    ],
    material: "Aluminium or steel alloy (shown: Petzl, ball-lock)",
    materials: ["Metal", "Steel"],
    dimensions: "≈ 100 mm × 55 mm",
    image: "/objects/carabiner/main.jpg",
    gallery: ["/objects/carabiner/main.jpg"],
    quote:
      "A few grams of aluminium holding a closed loop — and with it, possibly, everything.",
    quoteAuthor: "Archive note, Object 088",
    timeline: [
      {
        year: "19th century",
        title: "Alpine snap hooks",
        description:
          "Climbers adopt spring-hooked metal links for belays and anchors.",
      },
      {
        year: "c. 1911",
        title: "The carabiner",
        description:
          "The modern oval link becomes standard equipment in the Alps.",
      },
      {
        year: "Mid-20th century",
        title: "Locking gates",
        description:
          "Threaded and twist-lock sleeves protect against accidental opening.",
      },
      {
        year: "Today",
        title: "Everywhere",
        description:
          "Lightweight alloy carabiners hang from rigs, ropes, and keychains worldwide.",
      },
    ],
    sources: [
      { title: "Carabiner — Wikipedia", url: "https://en.wikipedia.org/wiki/Carabiner" },
    ],
    imageCredit: {
      creator: "Stefan Bellini",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Carabiner_for_climbing_Petzl_ball_lock.JPG",
      license: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "flashlight",
    slug: "flashlight",
    number: "089",
    name: "Flashlight",
    category: "household",
    year: "1899",
    yearNum: 1899,
    designer: "Conrad Hubert (American Electrical Novelty and Manufacturing)",
    origin: "United States",
    description:
      "A lamp you can hold in your hand, pointed exactly where the darkness is. A personal sun on demand.",
    longDescription:
      "Before the flashlight there were lanterns and candles — flames that were dangerous, smoky, and fixed. In 1899 Conrad Hubert's New York firm assembled the first practical battery torch: a dry cell, a small bulb, and a switch in a hand-held tube. The name 'flashlight' stuck because early carbon-filament bulbs could only 'flash' briefly on thin early batteries.\n\nThe vintage metal example shown here comes from the PRL era of Polish manufacturing, a stout sheet-metal torch built to last. Its anatomy is the anatomy of practically every flashlight since: a battery tube, a lamp, a lens, and a switch. No candles, no flame, no waiting for daylight — light became something you carry. The idea has spread from the pocket torch to the phone's LED, but the original bargain — small, portable, instantly activated light — is untouched.",
    whyTimeless: [
      "A battery, a lamp, a switch, and a tube — four parts that fit in a hand.",
      "It converts stored energy into light instantly, without flame or smoke.",
      "From campsites to blackouts, it remains the first tool reached when the lights fail.",
    ],
    anatomy: [
      {
        title: "The tube",
        description:
          "The housing that holds batteries and completes the circuit through the body.",
      },
      {
        title: "The lamp",
        description:
          "The light source — filament bulb historically, LED in modern torches.",
      },
      {
        title: "The switch",
        description:
          "The mechanical contact that breaks or makes the circuit.",
      },
      {
        title: "The reflector and lens",
        description:
          "The optics that shape a bare glow into a directed beam.",
      },
    ],
    material: "Sheet metal (shown); modern: aluminium, plastic, polymer",
    materials: ["Metal", "Steel", "Plastic"],
    dimensions: "≈ 130 mm × 45 mm",
    image: "/objects/flashlight/main.jpg",
    gallery: ["/objects/flashlight/main.jpg"],
    quote:
      "Portable, instant, obedient light — the most quietly revolutionary product of its decade.",
    quoteAuthor: "Archive note, Object 089",
    timeline: [
      {
        year: "1899",
        title: "Conrad Hubert",
        description:
          "The first hand-held battery torch is assembled in New York City.",
      },
      {
        year: "1900s",
        title: "Pocket torches",
        description:
          "Flashlights catch on with police, miners, and the general public.",
      },
      {
        year: "Mid-20th century",
        title: "Every home",
        description:
          "Durable metal torches become a cupboard essential.",
      },
      {
        year: "Today",
        title: "Into the phone",
        description:
          "LEDs miniaturize lighting until every pocket carries a flashlight.",
      },
    ],
    sources: [
      { title: "Flashlight — Wikipedia", url: "https://en.wikipedia.org/wiki/Flashlight" },
    ],
    imageCredit: {
      creator: "ElisaVintage",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Stara_latarka_PRL_vintage_metalowa.jpg",
      license: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "hair-brush",
    slug: "hair-brush",
    number: "090",
    name: "Hair Brush",
    category: "everyday",
    year: "c. 1850",
    yearNum: 1850,
    designer: "Unknown — joined mass manufacture in the 19th century",
    origin: "Europe / United States",
    description:
      "A cushioned slab of bristles. Part grooming tool, part tiny daily ritual performed on the crown of the head.",
    longDescription:
      "Brushes for the hair descend from a simple and ancient gesture: passing a row of stiff fibres across the scalp to detangle and smooth. Where early brushes were private implements of bone and boar bristle, the nineteenth century industrialized them — curled, cushioned, and mounted on wooden or plastic bodies in factories that turned out millions.\n\nThe modern brush shown here, a mass-produced example, illustrates the settled design: a resilient pad set with tufts of bristle, often served by a handle so the whole tool balances in one hand. Bristles flex against the scalp and glide through hair; the pad absorbs the shock of each stroke. Whether the bristles are boar, nylon, or plastic, the arrangement — a field of springy tines — has stabilized into the form we recognize on every bathroom vanity.",
    whyTimeless: [
      "A field of springy bristles on a cushioned pad detangles without tearing.",
      "It balances in one hand and works without power, water, or instruction.",
      "The design has outlived every competitor from combs to no-brush styles.",
    ],
    anatomy: [
      {
        title: "The body",
        description:
          "A carved or moulded slab that anchors the bristles and fits the hand.",
      },
      {
        title: "The pad",
        description:
          "The cushioned base that lets bristles flex against the scalp.",
      },
      {
        title: "The bristles",
        description:
          "The tufted fibres — boar, nylon, or plastic — that part and smooth the hair.",
      },
      {
        title: "The handle",
        description:
          "The grip that balances the brush and guides its stroke.",
      },
    ],
    material: "Plastic (shown), with bristles; historic: wood and boar bristle",
    materials: ["Plastic", "Wood", "Fiber"],
    dimensions: "≈ 230 mm × 70 mm",
    image: "/objects/hair-brush/main.jpg",
    gallery: ["/objects/hair-brush/main.jpg"],
    quote:
      "Strokes down, ends off, thoughts gathered — the hairbrush is a daily machine for composure.",
    quoteAuthor: "Archive note, Object 090",
    timeline: [
      {
        year: "Antiquity",
        title: "Boar bristle",
        description:
          "Early brushes and combs are carved from wood and bone with animal bristle.",
      },
      {
        year: "18th century",
        title: "The workshop",
        description:
          "Bristle brushes are produced by specialist brush-makers.",
      },
      {
        year: "19th century",
        title: "Mass manufacture",
        description:
          "Factories press bodies and set bristles by the thousands, making brushes universal.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "Plastic-bodied cushion brushes repeat a form generations old.",
      },
    ],
    sources: [
      { title: "Hairbrush — Wikipedia", url: "https://en.wikipedia.org/wiki/Hairbrush" },
    ],
    imageCredit: {
      creator: "Evan-Amos",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Conair-brush.jpg",
      license: "Public domain",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "hourglass",
    slug: "hourglass",
    number: "091",
    name: "Hourglass",
    category: "household",
    year: "14th century",
    yearNum: 1300,
    designer: "Unknown — medieval glassmakers and turners",
    origin: "Europe",
    description:
      "Two glass drums and a stream of sand that measures time by falling. A clock with no hands and no wind.",
    longDescription:
      "An hourglass is a pair of glass bulbs joined by a narrow neck, filled with dry sand that empties steadily from one chamber to the other. Because sand falls at an even rate through a regulated aperture, the amount that has fallen is a reliable measure of elapsed time. The form appeared across Europe by the fourteenth century, treasured aboard ships and in churches where wind-up clocks failed.\n\nThe wooden example shown here — a turned frame holding twin glass bulbs — displays the classic construction. The illustrated running time is one hour, indicated by its name. Unlike a clockwork or water clock, the hourglass needs no wind, no water, no calibration: you turn it over and it simply runs. Its dignified simplicity made it a symbol, from the vanitas paintings of the sixteenth century to the final 'egg timer' on stovetops today.",
    whyTimeless: [
      "Gravity and a regulated neck measure time with no moving, powered, or calibrated parts.",
      "It is self-starting — you turn it and it runs, forever, untouched.",
      "Its honest, visible passage of sand makes time tangible.",
    ],
    anatomy: [
      {
        title: "The upper bulb",
        description:
          "The full chamber whose contents set the total measured time.",
      },
      {
        title: "The neck",
        description:
          "The narrow aperture that regulates the falling stream's flow rate.",
      },
      {
        title: "The sand",
        description:
          "Fine dry grains whose uniform size keeps the rate steady.",
      },
      {
        title: "The frame",
        description:
          "Usually wood or metal posts that hold the glass bulbs safely apart.",
      },
    ],
    material: "Glass, wooden frame",
    materials: ["Glass", "Wood"],
    dimensions: "250 mm tall; 115 mm frame diameter (shown)",
    image: "/objects/hourglass/main.jpg",
    gallery: ["/objects/hourglass/main.jpg"],
    quote:
      "Time, measured by nothing but falling sand — a clock stripped of every inch of complication.",
    quoteAuthor: "Archive note, Object 091",
    timeline: [
      {
        year: "Antiquity",
        title: "Water clocks",
        description:
          "Time is measured by flowing water before sand takes the stage.",
      },
      {
        year: "14th century",
        title: "The hourglass",
        description:
          "Sand-filled glass timers appear across Europe, prized at sea and in church.",
      },
      {
        year: "16th century",
        title: "Emblem of time",
        description:
          "The hourglass becomes a symbol of mortality in art and print.",
      },
      {
        year: "Today",
        title: "Egg timer",
        description:
          "The same geometry still sits on kitchen counters, measuring three-minute eggs.",
      },
    ],
    sources: [
      { title: "Hourglass — Wikipedia", url: "https://en.wikipedia.org/wiki/Hourglass" },
    ],
    imageCredit: {
      creator: "S Sepp",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Wooden_hourglass_3.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "key-ring",
    slug: "key-ring",
    number: "092",
    name: "Key Ring",
    category: "everyday",
    year: "c. 1900",
    yearNum: 1900,
    designer: "Unknown — split-ring keychain makers",
    origin: "Europe / United States",
    description:
      "A split coil of spring steel that gathers twenty keys into a handful. The jingle of a life at your belt loop.",
    longDescription:
      "A key ring is a small circle of spring steel — a 'split ring' — whose ends pass one over the other so keys can be threaded on and slid around to the closed portion. Press the ends apart, add a key, and let the spring snap shut; the ring holds the key captive forever, or until you pry it open again.\n\nThe modern example shown here is a tritium light keyring, whose glowing capsule adds visibility to the same ancient job of keeping keys together. Its predecessor, the simple split ring, appeared around the turn of the twentieth century and has since become a universal pocket object. Rings gather identity — door keys, car keys, office keys — into one tactile, jangling handful that names a person's whole day, and the coiled loop still does it better than any magnetic, clasp, or pouch.",
    whyTimeless: [
      "Split spring steel holds keys captive yet accepts a new one in seconds.",
      "Zero moving parts beyond the spring itself — nothing to break, jam, or power.",
      "It turns many disparate keys into one continuous object you can find by feel.",
    ],
    anatomy: [
      {
        title: "The coil",
        description:
          "A helically wound ring of spring steel whose turns overlap by about two-thirds.",
      },
      {
        title: "The end",
        description:
          "The free terminal that pries out to admit a key's hole.",
      },
      {
        title: "The captive section",
        description:
          "The closed arc where keys slide and settle in a tight nest.",
      },
      {
        title: "The fob or light (optional)",
        description:
          "Added visibility, identification, or grip on a modern ring.",
      },
    ],
    material: "Steel (shown with plastic and tritium light fob)",
    materials: ["Steel", "Plastic"],
    dimensions: "≈ 40 mm × 40 mm",
    image: "/objects/key-ring/main.jpg",
    gallery: ["/objects/key-ring/main.jpg"],
    quote:
      "Hours of a life, condensed into a jingling coil of steel on a belt loop.",
    quoteAuthor: "Archive note, Object 092",
    timeline: [
      {
        year: "Antiquity",
        title: "Keys, loose",
        description:
          "Keys are carried individually, threaded on cords, or kept in pouches.",
      },
      {
        year: "c. 1900",
        title: "Split ring",
        description:
          "The spring-steel keyring gathers keys into one portable coil.",
      },
      {
        year: "20th century",
        title: "The fob",
        description:
          "Rings sprout identifiers, tokens, and miniature tools.",
      },
      {
        year: "Today",
        title: "Still jangling",
        description:
          "Even in the age of digital locks, the key ring holds the household's practice keys.",
      },
    ],
    sources: [
      { title: "Keychain — Wikipedia", url: "https://en.wikipedia.org/wiki/Keychain" },
    ],
    imageCredit: {
      creator: "Esquilo",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tritium_light_keyring.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "kickstand",
    slug: "kickstand",
    number: "093",
    name: "Kickstand",
    category: "mechanical",
    year: "c. 1930",
    yearNum: 1930,
    designer: "Multiple patents; standardized mid-20th century",
    origin: "Europe / United States",
    description:
      "A hinged leg that lets a two-wheeled machine rest on its own. One leaning reason a bicycle never falls over.",
    longDescription:
      "A two-wheeled vehicle is unstable when still — its balance depends entirely on forward motion. The kickstand solves this with wicked simplicity: a leg hinged near the axle, kicked down to lean the bicycle onto the ground for rest, then kicked up the moment you ride away.\n\nThe green bicycle shown here rests on its central kickstand — the leg mounted at the bottom bracket so the bike stands level at both wheels. Earlier machines leaned on walls or trees, or simply fell. The central kickstand, standardized in the mid-twentieth century, lets a rider park almost anywhere: pavement, dirt, grass, a sidewalk. It is one of the few mechanical parts that raises a machine off the ground and holds it there with just gravity, geometry, and a small spring.",
    whyTimeless: [
      "A single hinged prop converts a falling two-wheeler into a resting one.",
      "No power, no brake, no stand — a leg and a pivot are the whole of it.",
      "It still defeats every motorized alternative for simplicity and price.",
    ],
    anatomy: [
      {
        title: "The leg",
        description:
          "A shaped strut strong enough to take the bicycle's full weight.",
      },
      {
        title: "The hinge",
        description:
          "A pivoting mount near the axle or bottom bracket that swings the leg down and up.",
      },
      {
        title: "The foot",
        description:
          "A flattened tip, often bent or padded, that grips whatever surface it meets.",
      },
      {
        title: "The spring",
        description:
          "A small tension spring that holds the leg up when riding and down when parked.",
      },
    ],
    material: "Steel",
    materials: ["Steel"],
    dimensions: "≈ 250 mm leg (typical)",
    image: "/objects/kickstand/main.jpg",
    gallery: ["/objects/kickstand/main.jpg"],
    quote:
      "A machine too simple to notice, that has held up ten thousand parked bicycles at once.",
    quoteAuthor: "Archive note, Object 093",
    timeline: [
      {
        year: "19th century",
        title: "Leaning and falling",
        description:
          "Early bicycles are propped on walls and trees, or simply laid down.",
      },
      {
        year: "c. 1930",
        title: "Central kickstand",
        description:
          "A bracket-mounted leg lets the bicycle stand level on both wheels.",
      },
      {
        year: "Mid-century",
        title: "Standard equipment",
        description:
          "The kickstand ships on commuters and cruisers worldwide.",
      },
      {
        year: "Today",
        title: "Still the lean",
        description:
          "Weight-saving riders remove it; practicality keeps it fitted on millions of bikes.",
      },
    ],
    sources: [
      { title: "Kickstand — Wikipedia", url: "https://en.wikipedia.org/wiki/Kickstand" },
    ],
    imageCredit: {
      creator: "Richard Masoner / Cyclelicious",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Green_bicycle.jpg",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "needle",
    slug: "needle",
    number: "094",
    name: "Needle",
    category: "household",
    year: "c. 25,000 BCE",
    yearNum: -25000,
    designer: "Unknown — Upper Paleolithic craftspeople",
    origin: "Eurasia",
    description:
      "A sliver of metal with a point and an eye. Among the oldest manufactured tools, and still the way cloth is joined.",
    longDescription:
      "The needle is a sharpened splinter — bone at first, then bronze and steel — with a hole at one end to carry thread. It is one of the most ancient tools humans ever made: eyed needles of bone found in Upper Paleolithic Europe and Asia date back roughly twenty-five thousand years, used to sew fitted clothing that let people survive colder climates.\n\nThe gold-tipped example shown here, threaded with green and brown yarn, shows the form settled to near-perfection: a long taper for piercing, a polished eye to guide the thread, a smooth body so the fabric is drawn along without tearing. So complete is the design that the modern sewing needle differs from its prehistoric ancestor mainly in material and precision. Garments, sails, upholstery, and surgical repairs all still begin with pushing a needle point through something, and pulling thread after it.",
    whyTimeless: [
      "A point to pierce and an eye to carry thread — the complete machine is two features.",
      "It has been the means of clothing humans for twenty-five millennia.",
      "Every needle, from bone to surgical steel, obeys the same two-part design.",
    ],
    anatomy: [
      {
        title: "The point",
        description:
          "A sharp taper that parts threads without tearing the fabric.",
      },
      {
        title: "The eye",
        description:
          "A polished hole that holds thread firmly yet lets it slip free as stitches form.",
      },
      {
        title: "The blade",
        description:
          "The long, smooth shaft that follows the point through the cloth.",
      },
      {
        title: "The finish",
        description:
          "Slender tapers and polished plating, from gold tip to surgical steel.",
      },
    ],
    material: "Steel with plated or gold-tipped finish",
    materials: ["Steel"],
    dimensions: "≈ 50 mm × 1 mm (typical)",
    image: "/objects/needle/main.jpg",
    gallery: ["/objects/needle/main.jpg"],
    quote:
      "A pointed splinter with a hole — the tool that first dressed humanity, now in a kitchen drawer.",
    quoteAuthor: "Archive note, Object 094",
    timeline: [
      {
        year: "c. 25,000 BCE",
        title: "Bone needles",
        description:
          "Upper Paleolithic peoples sew fitted clothing with eyed bone needles.",
      },
      {
        year: "Antiquity",
        title: "Bronze and iron",
        description:
          "Metal needles replace bone as metallurgy spreads.",
      },
      {
        year: "16th century",
        title: "The steel needle",
        description:
          "European needle-makers perfect the drawn-wire steel needle.",
      },
      {
        year: "Today",
        title: "Unchanged",
        description:
          "From tailoring to surgery, the needle still works by point and eye.",
      },
    ],
    sources: [
      { title: "Sewing needle — Wikipedia", url: "https://en.wikipedia.org/wiki/Sewing_needle" },
    ],
    imageCredit: {
      creator: "W.carter",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Sewing_needle_with_two_threads.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "rotary-dial",
    slug: "rotary-dial",
    number: "095",
    name: "Rotary Dial",
    category: "mechanical",
    year: "1919",
    yearNum: 1919,
    designer: "Developed from step-by-step switching (Almon B. Strowger lineage)",
    origin: "United States",
    description:
      "A numbered wheel with a spring that lets one finger dial a city. The first interface between a person and a machine network.",
    longDescription:
      "Once a telephone could reach any subscriber, someone had to tell the exchange whom you wanted — and without disturbing an operator each time. The rotary dial was the answer: a numbered wheel you turn against a finger stop, then release to spin back under spring tension, sending the right number of electrical pulses across the line to a step-by-step switch. By the 1920s it was the standard way to place a call.\n\nThe example shown here is the dial face itself — each number on its hole, the finger stop at ten. Its logic is beautiful: the position of your finger stop selects the number; the return of the wheel counts it out; a bridge across nine and zero allows local dialing and exchange prefixes. For half a century the rotary dial taught billions the grammar of reaching each other, digit by digit, before buttons and tones replaced its pulses.",
    whyTimeless: [
      "It translates a finger's pull into a precise, unambiguous count of pulses.",
      "A spring and an escapement do the counting — no electronics, no power but the caller's hand.",
      "It was the first mass interface between the human hand and the switched network.",
    ],
    anatomy: [
      {
        title: "The finger wheel",
        description:
          "The numbered disc your finger turns, carrying a hole for each digit.",
      },
      {
        title: "The finger stop",
        description:
          "The metal or plastic edge that positions the wheel for each digit.",
      },
      {
        title: "The spring return",
        description:
          "The coiled spring that snaps the wheel back, generating the pulse train.",
      },
      {
        title: "The contacts",
        description:
          "The electrical switch that breaks the line the correct number of times.",
      },
    ],
    material: "Metal and moulded plastic (shown); earlier models of brass and bakelite",
    materials: ["Metal", "Plastic", "Brass"],
    dimensions: "≈ 90 mm diameter (finger wheel)",
    image: "/objects/rotary-dial/main.jpg",
    gallery: ["/objects/rotary-dial/main.jpg"],
    quote:
      "One finger, one spring, and the whole city answered your turn of a wheel.",
    quoteAuthor: "Archive note, Object 095",
    timeline: [
      {
        year: "1890s",
        title: "Step-by-step",
        description:
          "Strowger switches make automatic connection possible in principle.",
      },
      {
        year: "1919",
        title: "Dial service",
        description:
          "The rotary dial becomes the standard customer interface to the exchange.",
      },
      {
        year: "Mid-century",
        title: "Every home",
        description:
          "Rotary telephones sit on desks in every country that had wires.",
      },
      {
        year: "1960s–80s",
        title: "Tones and buttons",
        description:
          "Push-button and DTMF dialing gradually retire the rotary dial.",
      },
    ],
    sources: [
      { title: "Rotary dial — Wikipedia", url: "https://en.wikipedia.org/wiki/Rotary_dial" },
    ],
    imageCredit: {
      creator: "Mark Fickett",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Rotary_Dial_Front.jpg",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "rubber-band",
    slug: "rubber-band",
    number: "096",
    name: "Rubber Band",
    category: "everyday",
    year: "1845",
    yearNum: 1845,
    designer: "Stephen Perry; vulcanized rubber after Charles Goodyear",
    origin: "England",
    description:
      "A loop of stretched natural rubber that holds a bundle together with its own memory.",
    longDescription:
      "A rubber band is a ring of elastic material that stores energy when stretched and returns to its original size when released. The story begins with Charles Goodyear's 1839 discovery of vulcanization, which cured rubber into a stable, resilient material; in 1845 Stephen Perry of London patented the elastic band, and the rubber band has bound papers, produce, and thoughts ever since.\n\nThe studio photograph shown here catches a bundle of multicoloured bands — the modern palette. Each one is simply a loop moulded or cut from vulcanized rubber, whose cross-section (round or square) sets its strength and stretch. It requires no adhesive, no clamp, no fastener: tension alone holds the bundled object, and the band's own elasticity does the gripping. A sack of letters, a bunch of asparagus, a rolled poster — all kept together by a closed elastic hoop that costs nothing and is thrown away without a thought.",
    whyTimeless: [
      "Elastic memory does the work — stretch it, wrap it, and tension becomes the fastener.",
      "No adhesive, hardware, or mechanism; a closed loop is the whole invention.",
      "It is reusable for years, flexible in shape, and free by the handful.",
    ],
    anatomy: [
      {
        title: "The loop",
        description:
          "A closed ring of vulcanized rubber whose size defines how much it must stretch.",
      },
      {
        title: "The cross-section",
        description:
          "Round for strength or square for grip; its width sets the clamping force.",
      },
      {
        title: "The elasticity",
        description:
          "The material memory that returns the band to its resting size and holds the load.",
      },
      {
        title: "The surface",
        description:
          "A tacky, grippy coat that keeps the band from sliding off a smooth bundle.",
      },
    ],
    material: "Rubber (vulcanized natural or synthetic)",
    materials: ["Rubber"],
    dimensions: "≈ 60 mm loop (typical)",
    image: "/objects/rubber-band/main.jpg",
    gallery: ["/objects/rubber-band/main.jpg"],
    quote:
      "A hoop of memory that does in a second what a thousand clamps could not do so simply.",
    quoteAuthor: "Archive note, Object 096",
    timeline: [
      {
        year: "1839",
        title: "Vulcanization",
        description:
          "Charles Goodyear's process makes rubber resilient and durable.",
      },
      {
        year: "1845",
        title: "The elastic band",
        description:
          "Stephen Perry's London patent introduces the rubber band to offices.",
      },
      {
        year: "Late 1800s",
        title: "Small bands",
        description:
          "Narrow bands are mass-produced for holding documents and goods.",
      },
      {
        year: "Today",
        title: "The desk staple",
        description:
          "Coloured elastic bands still bundle everything the office prints.",
      },
    ],
    sources: [
      { title: "Rubber band — Wikipedia", url: "https://en.wikipedia.org/wiki/Rubber_band" },
    ],
    imageCredit: {
      creator: "Bill Ebbesen",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Rubber_bands_-_Colors_-_Studio_photo_2011.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "shoelace",
    slug: "shoelace",
    number: "097",
    name: "Shoelace",
    category: "everyday",
    year: "c. 1790",
    yearNum: 1790,
    designer: "Unknown — laces replaced buckles with mass production",
    origin: "Europe",
    description:
      "A cord that holds a shoe by friction alone. A knot is the whole of the mechanism.",
    longDescription:
      "A shoelace is a length of cord — braided cotton, nylon, or leather — passed through eyelets and tied. Its working principle is beautiful because it contains no principle at all: after lacing, a single bow knot is tightened for wear and loosened for removal, and the friction of the knot holds the shoe on through an entire day of walking.\n\nWhile lacing shoes is ancient, the shoelace as we know it spread in the late eighteenth century as cheap braided cords and metal-tipped aglets replaced buckles on ordinary footwear. The example shown here is a modern pair — rounded or flat braid with the hard aglet tip that keeps the strand from fraying as it is threaded. Simple, replaceable, adjustable with a tug, the shoelace performs one indispensable job: holding a shoe to a foot, and releasing it on command.",
    whyTimeless: [
      "A cord and a knot hold a shoe through every gait, stride, and season.",
      "It adjusts continuously — tighter, looser, retied — without any mechanism.",
      "A few cents of braid beats every buckle, clasp, and Velcro alternative for fit.",
    ],
    anatomy: [
      {
        title: "The lace",
        description:
          "The braided cord that crosses and carries the tension of the fit.",
      },
      {
        title: "The aglet",
        description:
          "The stiff tip, often metal or plastic, that feeds easily through eyelets.",
      },
      {
        title: "The eyelets",
        description:
          "The grommets or punched holes that route the lace across the shoe.",
      },
      {
        title: "The knot",
        description:
          "A friction bow that holds tight under load and undoes in a pull.",
      },
    ],
    material: "Cloth braid (cotton or nylon); tips of metal or plastic",
    materials: ["Fiber"],
    dimensions: "≈ 700 mm × 4 mm (typical pair)",
    image: "/objects/shoelace/main.jpg",
    gallery: ["/objects/shoelace/main.jpg"],
    quote:
      "All the fixing power a shoe needs, held in a length of braid tied by hand.",
    quoteAuthor: "Archive note, Object 097",
    timeline: [
      {
        year: "Antiquity",
        title: "Laces, ancient",
        description:
          "Footwear is laced with cords long before buttons or buckles.",
      },
      {
        year: "18th century",
        title: "Buckles give way",
        description:
          "Cheap braided laces with metal tips replace buckles on everyday shoes.",
      },
      {
        year: "19th century",
        title: "Industrial braid",
        description:
          "Machines spin strong, uniform cotton and later nylon laces.",
      },
      {
        year: "Today",
        title: "Still tied",
        description:
          "Even slip-on and strapped sneakers admit no better adjustable fastener.",
      },
    ],
    sources: [
      { title: "Shoelaces — Wikipedia", url: "https://en.wikipedia.org/wiki/Shoelaces" },
    ],
    imageCredit: {
      creator: "Jonas Bergsten",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Shoelaces_20050719_001.jpg",
      license: "Public domain",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "suitcase",
    slug: "suitcase",
    number: "098",
    name: "Suitcase",
    category: "everyday",
    year: "c. 1900",
    yearNum: 1900,
    designer: "Luggage makers of the trunk and steamer era",
    origin: "United States / Europe",
    description:
      "A rigid shell that packs a week of a life into one carried box. The suitcase made travel a matter of per-person possibility.",
    longDescription:
      "When ordinary people began to travel by railway and steamship, they needed luggage they could carry alone — lighter than the great cabin trunks of the wealthy. The suitcase answered: a rectangular rigid shell with a lid, a handle, and a latch, sized for one traveler to lift and one porter to stack. By the early twentieth century, branded makers like Belber produced hard-shell cases in ribbon-striped vulcanized fibre and leather.\n\nThe striped Belber example shown here captures that golden age of the case: a patterned rigid shell, leather trim, metal corners, and twin latches snapping closed over a gasket. Inside, clothes fold into a constrained volume that slides under a bed or into a train rack. The modern soft-sided wheeled bag is its descendant, but the founding bargain — a person-sized box that carries a life away and brings it home — is the same.",
    whyTimeless: [
      "A rigid shell, a handle, and a latch make one traveler self-sufficient on any journey.",
      "Its rectangular volume stacks, stores, and rides beside the traveler.",
      "From steamer trunk to wheelie bag, the suitcase's logic has barely budged in a century.",
    ],
    anatomy: [
      {
        title: "The shell",
        description:
          "A rigid body, in vulcanized fibre or leather, that protects and shapes the contents.",
      },
      {
        title: "The lid",
        description:
          "The hinged half that opens to the full footprint of the packed case.",
      },
      {
        title: "The handle",
        description:
          "A grip positioned over the balance point for carrying by hand.",
      },
      {
        title: "The latches",
        description:
          "Snap closures, often with locking hasps, that seal the shell's opening.",
      },
    ],
    material: "Vulcanized fibre board with leather trim (shown)",
    materials: ["Fiber", "Leather", "Metal"],
    dimensions: "≈ 660 mm × 460 mm × 200 mm",
    image: "/objects/suitcase/main.jpg",
    gallery: ["/objects/suitcase/main.jpg"],
    quote:
      "A week of clean shirts and folded plans, sealed in a patterned shell fit for one person's hands.",
    quoteAuthor: "Archive note, Object 098",
    timeline: [
      {
        year: "19th century",
        title: "Trunks first",
        description:
          "Travel belongs to cabin trunks carried by servants and porters.",
      },
      {
        year: "c. 1900",
        title: "The suitcase",
        description:
          "Lighter hard-shell cases let ordinary travelers pack and carry for themselves.",
      },
      {
        year: "Early 1900s",
        title: "The golden age",
        description:
          "Striped Belber-style cases and leather-trimmed luggage define rail travel.",
      },
      {
        year: "Today",
        title: "Wheels and zips",
        description:
          "Soft-sided wheeled bags update the case without abandoning its box.",
      },
    ],
    sources: [
      { title: "Suitcase — Wikipedia", url: "https://en.wikipedia.org/wiki/Suitcase" },
    ],
    imageCredit: {
      creator: "Sandrine Z",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Belber_Striped_Suitcase.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "sundial",
    slug: "sundial",
    number: "099",
    name: "Sundial",
    category: "household",
    year: "c. 1500 BCE",
    yearNum: -1500,
    designer: "Unknown — ancient astronomers and stonemasons",
    origin: "Egypt / Greece",
    description:
      "A shadow cast by the sun, read like a hand on an unmoving clock. Time measured by the Earth's own turning.",
    longDescription:
      "A sundial tells time by the position of the sun's shadow: a projecting edge — the gnomon — throws a shadow across a marked face, and the shadow's angle changes as the Earth turns. The idea is at least 3,500 years old, from Egyptian shadow clocks to the Greek and Roman dials perfected across the ancient world.\n\nThe example shown here, on the west front of the cellarium at Maulbronn Monastery in Germany, is a classical wall-mounted dial whose gnomon points along the axis of the world. At noon the shadow will be shortest and aligned; morning and evening it stretches long. No gears, springs, or winding — a sundial runs on sunlight and geometry, which is why it survived for millennia until well-made mechanical clocks. It remains a reminder that the first clock was simply the Earth's shadow.",
    whyTimeless: [
      "A shadow's angle and the turning Earth measure time with no moving parts at all.",
      "It needs no winding, no power, and no calibration beyond its own alignment.",
      "Its quiet reliance on the cosmos makes visible a fact clocks hide.",
    ],
    anatomy: [
      {
        title: "The gnomon",
        description:
          "The projecting edge or style whose shadow performs the measuring.",
      },
      {
        title: "The dial face",
        description:
          "The marked surface onto which the shadow falls, engraved with hour lines.",
      },
      {
        title: "The alignment",
        description:
          "The orientation, often toward celestial north, that corrects for latitude.",
      },
      {
        title: "The hour lines",
        description:
          "Engraved marks that translate shadow position into time of day.",
      },
    ],
    material: "Stone (shown); also brass, copper, and painted wood",
    materials: ["Stone", "Brass"],
    dimensions: "≈ 600 mm × 400 mm (monastery dial)",
    image: "/objects/sundial/main.jpg",
    gallery: ["/objects/sundial/main.jpg"],
    quote:
      "A wall that tells the hour by standing still while the world turns.",
    quoteAuthor: "Archive note, Object 099",
    timeline: [
      {
        year: "c. 1500 BCE",
        title: "Shadow clocks",
        description:
          "Egyptian instruments divide the day by reading shadows.",
      },
      {
        year: "Antiquity",
        title: "Greek and Roman dials",
        description:
          "Sundials are refined into accurate fixed and portable instruments.",
      },
      {
        year: "Middle Ages",
        title: "Monastery dials",
        description:
          "Medieval monasteries mount stone dials, as at Maulbronn, to time the offices.",
      },
      {
        year: "Today",
        title: "Ornament and truth",
        description:
          "Modern sundials are garden ornaments that still keep honest solar time.",
      },
    ],
    sources: [
      { title: "Sundial — Wikipedia", url: "https://en.wikipedia.org/wiki/Sundial" },
    ],
    imageCredit: {
      creator: "H. Zell",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Sundial_-_Maulbronn_Monastery.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "sunglasses",
    slug: "sunglasses",
    number: "100",
    name: "Sunglasses",
    category: "everyday",
    year: "1929",
    yearNum: 1929,
    designer: "Foster Grant (popularized mass-market sunglasses)",
    origin: "United States",
    description:
      "Lenses tinted to take the glare out of daylight. A small pane of protection worn on the face.",
    longDescription:
      "Sunglasses darken the light that reaches the eyes, cutting glare and reducing strain. Tinted lenses have ancient precedents — smoky quartz goggles among Arctic peoples, smoked-glass spectacles in imperial Rome and eighteenth-century Europe — but the modern mass-market product arrived in 1929, when Foster Grant began selling them cheaply to the American public, and sunglasses became a democratic accessory rather than a rarity.\n\nThe pair shown here is a contemporary example: moulded plastic frames, a brow bar, and tinted lenses shaped to shield both the front and the side of the eye. The essential idea is unchanged across centuries — let the eye work comfortably in brightness by filtering what reaches it. Whether the tint is offered for style, driving, or sport, the dark lens still does what it did at Pompeii and on the glacier.",
    whyTimeless: [
      "A darkened pane filters light without effort, power, or adjustment.",
      "It protects the eye along every line of sight the wearer looks through.",
      "The design is same at a pioneer's temple and a driver's dashboard.",
    ],
    anatomy: [
      {
        title: "The lenses",
        description:
          "Tinted glass or polymer optics that cut transmission of glare.",
      },
      {
        title: "The frame",
        description:
          "The moulded or metal surround that mounts the lenses to the face.",
      },
      {
        title: "The temples",
        description:
          "The arms that grip the head and hold the frame in place.",
      },
      {
        title: "The bridge",
        description:
          "The arch that spans the nose and sets the lenses' spacing.",
      },
    ],
    material: "Plastic frame and tinted lenses (shown)",
    materials: ["Plastic", "Glass"],
    dimensions: "≈ 140 mm × 50 mm",
    image: "/objects/sunglasses/main.jpg",
    gallery: ["/objects/sunglasses/main.jpg"],
    quote:
      "Two small darkened panes that turn a glaring noon into a comfortable, wearable hour.",
    quoteAuthor: "Archive note, Object 100",
    timeline: [
      {
        year: "Antiquity",
        title: "Predecessors",
        description:
          "Smoky quartz and smoked glass shield eyes from snow and sun.",
      },
      {
        year: "18th century",
        title: "Tinted spectacles",
        description:
          "European spectacles are ground in tinted glass for comfort.",
      },
      {
        year: "1929",
        title: "Foster Grant",
        description:
          "Cheap mass-produced sunglasses turn a rarity into an everyday accessory.",
      },
      {
        year: "Today",
        title: "On every face",
        description:
          "Sunglasses are style, sport protection, and glare control in one.",
      },
    ],
    sources: [
      { title: "Sunglasses — Wikipedia", url: "https://en.wikipedia.org/wiki/Sunglasses" },
    ],
    imageCredit: {
      creator: "Ildar Sagdejev (Specious)",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2008-07-27_Sunglasses.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "thimble",
    slug: "thimble",
    number: "101",
    name: "Thimble",
    category: "household",
    year: "c. 1000",
    yearNum: 1000,
    designer: "Unknown — medieval metalworkers",
    origin: "Medieval Europe",
    description:
      "A metal cap of dimples that turns a needle's push from a punishment into a craft.",
    longDescription:
      "Every push of a needle through stiff cloth ends in the same place: the pad of the thumb or finger. The thimble is the small metal cup that meets that pressure, its surface dotted with pits so the needle's head grips without slipping. Bronze thimbles with punched dimples appear across Europe by the later Middle Ages, replacing earlier leather and wood guards.\n\nThe brass example shown here is the settled form: a domed cap that fits the fingertip, a band of small pits across the working surface, and a rolled or open base for a comfortable fit. Slip it on and a day of mending is no longer a day of sore fingertips. Cheaper forms are pressed from sheet metal and moulded plastic, but the domed dimpled cup survives because nothing simpler both shields the finger and seats the needle.",
    whyTimeless: [
      "A dimpled cap absorbs the needle's push and grips its head against slipping.",
      "No mechanism, no moving part — shape alone does the protecting.",
      "It has stayed identical for a thousand years of needlework.",
    ],
    anatomy: [
      {
        title: "The crown",
        description:
          "The domed top that bears the needle's thrust for the big pushing strokes.",
      },
      {
        title: "The pits",
        description:
          "The dimpled surface that grips the needle head and stops it skidding.",
      },
      {
        title: "The band",
        description:
          "The encircling rows of pits that serve the side strokes of sewing.",
      },
      {
        title: "The rim",
        description:
          "A rolled or turned base that fits the finger comfortably without cutting.",
      },
    ],
    material: "Brass or steel (shown: brass)",
    materials: ["Brass", "Metal"],
    dimensions: "≈ 18 mm × 15 mm",
    image: "/objects/thimble/main.jpg",
    gallery: ["/objects/thimble/main.jpg"],
    quote:
      "A fingertip of dimpled metal that turned needlework from pain into patience.",
    quoteAuthor: "Archive note, Object 101",
    timeline: [
      {
        year: "Antiquity",
        title: "Early guards",
        description:
          "Leather and wooden shields protect fingers before metal thimbles.",
      },
      {
        year: "c. 1000",
        title: "Bronze thimbles",
        description:
          "Punched-metal thimbles appear across medieval Europe.",
      },
      {
        year: "18th–19th centuries",
        title: "Makers and heirlooms",
        description:
          "Decorative thimbles are cast, engraved, and passed down.",
      },
      {
        year: "Today",
        title: "Still mending",
        description:
          "Plastic and steel thimbles remain in every sewing box.",
      },
    ],
    sources: [
      { title: "Thimble — Wikipedia", url: "https://en.wikipedia.org/wiki/Thimble" },
    ],
    imageCredit: {
      creator: "Clément Bucco-Lechat",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Thimble.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "umbrella",
    slug: "umbrella",
    number: "102",
    name: "Umbrella",
    category: "everyday",
    year: "c. 1000 BCE",
    yearNum: -1000,
    designer: "Unknown — ancient canopy makers",
    origin: "China / Ancient world",
    description:
      "A collapsible canopy that folds the sky overhead into a corner of your bag.",
    longDescription:
      "The umbrella is a canopy on a collapsible frame — fabric stretched over ribs that fan open to shed rain or sun, then fold down to a rod you can carry. Umbrellas are ancient: canopies of the kind appeared in China and the ancient Near East thousands of years ago, and by eighteenth-century Paris the collapsible rain umbrella had become a fixture of city life.\n\nThe modern folding example shown here, with its case, shows the design at full maturity: telescoping central shaft, hinged ribs, and a fabric canopy that opens on a button and furls back for the pocket. The logic is old — a fan of ribs supporting a waterproof skin — and it still defeats every permanent roof or hood for portability. Rain arrives, you open it; the sun returns and it shrinks to the size of a bottle.",
    whyTimeless: [
      "A fan of ribs and a fabric skin create a portable roof that deploys in seconds.",
      "It folds out of existence when not needed — the umbrella's great trick.",
      "From silk canopies to coated nylon, the same mechanism has shed weather for ages.",
    ],
    anatomy: [
      {
        title: "The canopy",
        description:
          "The waterproof fabric skin that sheds rain and sun over its ribs.",
      },
      {
        title: "The ribs",
        description:
          "The hinged arms that fan out to tension the canopy and fold in to furl it.",
      },
      {
        title: "The shaft and runner",
        description:
          "The central pole and sliding sleeve that raise and lower the ribs.",
      },
      {
        title: "The handle",
        description:
          "The grip, often hooked, that holds the folded and open umbrella both.",
      },
    ],
    material: "Fabric canopy, metal ribs, plastic or wood handle (shown)",
    materials: ["Fiber", "Metal", "Plastic"],
    dimensions: "≈ 300 mm folded; 650 mm open radius",
    image: "/objects/umbrella/main.jpg",
    gallery: ["/objects/umbrella/main.jpg"],
    quote:
      "Weather, folded to fit a coat pocket, and opened by a thumb on rising rain.",
    quoteAuthor: "Archive note, Object 102",
    timeline: [
      {
        year: "Antiquity",
        title: "Ancient canopies",
        description:
          "Canopies of ceremony and shade appear in China and the Near East.",
      },
      {
        year: "c. 1000 BCE",
        title: "Protection",
        description:
          "Large rain and sun umbrellas spread across the ancient world.",
      },
      {
        year: "18th century",
        title: "Paris folding",
        description:
          "The collapsible rain umbrella becomes a standard city accessory.",
      },
      {
        year: "Today",
        title: "In the bag",
        description:
          "Compact folding umbrellas shrug off weather from doorstep to station.",
      },
    ],
    sources: [
      { title: "Umbrella — Wikipedia", url: "https://en.wikipedia.org/wiki/Umbrella" },
    ],
    imageCredit: {
      creator: "Kritzolina",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Folding_umbrella_01.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "wallet",
    slug: "wallet",
    number: "103",
    name: "Wallet",
    category: "everyday",
    year: "17th century",
    yearNum: 1650,
    designer: "Unknown — leatherworkers of the modern era",
    origin: "Europe",
    description:
      "A flat folding file that keeps identity and coin together. The pocket-sized index of a person's dealings.",
    longDescription:
      "A wallet is a folding case that keeps the small objects of a life — currency, cards, receipts, identity — together in one worn and softened package. Flat paper money spread through Europe in the seventeenth century, and with it the need for a carrying case: the wallet replaced the purse and pouch as the everyday pocket-file, designed to slip flat into a coat.\n\nThe example shown here is a classic bi-fold: a supple leather shell that folds over a stack of notes between two card-bearing panels. Slide cards into the slots, fold the bill pocket over, and the whole day's identity compresses to the thickness of a thumb. It is among the last genuinely personal machines — a private cabinet, carried against the body, whose every crease records its owner.",
    whyTimeless: [
      "A flat folding shell stores rigid cards and soft notes in a thumb-thick pocket.",
      "It adjusts to exactly the contents, thickening or thinning as needed.",
      "It carries identity itself — the most personal object most people own.",
    ],
    anatomy: [
      {
        title: "The shell",
        description:
          "The leather body that folds around the contents and wears in.",
      },
      {
        title: "The bill pocket",
        description:
          "A flat sleeve that holds folded notes flush against the case.",
      },
      {
        title: "The card slots",
        description:
          "Narrow pockets that seat cards firmly and release them with a thumb.",
      },
      {
        title: "The fold",
        description:
          "The hinge across the middle that lets the wallet close to pocket thickness.",
      },
    ],
    material: "Leather (shown)",
    materials: ["Leather"],
    dimensions: "≈ 110 mm × 90 mm, closed",
    image: "/objects/wallet/main.jpg",
    gallery: ["/objects/wallet/main.jpg"],
    quote:
      "A folded leather cabinet that holds what a life needs to prove about itself.",
    quoteAuthor: "Archive note, Object 103",
    timeline: [
      {
        year: "Antiquity",
        title: "Purses and pouches",
        description:
          "Coin and goods are carried in tied pouches and hanging purses.",
      },
      {
        year: "17th century",
        title: "Paper money",
        description:
          "Flat banknotes spread and the folding wallet follows.",
      },
      {
        year: "20th century",
        title: "Cards",
        description:
          "Credit cards add rigid slots to the wallet's classic design.",
      },
      {
        year: "Today",
        title: "Thin and worn",
        description:
          "Even as phones replace the wallet's cash, its small cabinet survives.",
      },
    ],
    sources: [
      { title: "Wallet — Wikipedia", url: "https://en.wikipedia.org/wiki/Wallet" },
    ],
    imageCredit: {
      creator: "TheArmadillo (English Wikipedia), via Commons",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:WalletMpegMan.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0/",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "watch",
    slug: "watch",
    number: "104",
    name: "Watch",
    category: "mechanical",
    year: "1920s",
    yearNum: 1920,
    designer: "Multiple pioneers of the self-winding wristwatch",
    origin: "Switzerland / Europe",
    description:
      "A tiny self-winding clock carried on the wrist, turning the wearer's motion into time.",
    longDescription:
      "A wristwatch is a clock shrunk to the wrist, and the self-winding watch adds a marvel: it needs no key, because the natural motion of the wearer's arm powers the mainspring. A weighted rotor swings with each movement, winding the spring through a train of gears; that stored energy then escapes with metronomic precision through the escapement.\n\nThe example shown here is a modern self-winding wristwatch with a transparent caseback, its movement visible — the rotor, gear train, and balance wheel caught in the open. The wristwatch itself became standard across the Western world during the First World War, and the automatic mechanism was refined through the 1920s and 1930s. To wear it is to be powered by your own day: walk, gesture, drive, and the watch rewinds itself, keeping time without ever being touched.",
    whyTimeless: [
      "The wearer's own motion winds the spring — no key, no battery, no thought.",
      "A train of gears and an escapement keep time with mechanical precision.",
      "It condenses centuries of horology to a case the size of a coin.",
    ],
    anatomy: [
      {
        title: "The rotor",
        description:
          "A weighted half-disc that swings with arm motion to wind the mainspring.",
      },
      {
        title: "The mainspring",
        description:
          "The coiled store of energy released gradually by the gear train.",
      },
      {
        title: "The escapement",
        description:
          "The regulating mechanism that divides energy into evenly spaced beats.",
      },
      {
        title: "The balance",
        description:
          "The oscillating wheel that sets the watch's rate, tick by tick.",
      },
    ],
    material: "Steel case, glass, brass movement (shown)",
    materials: ["Steel", "Glass", "Brass"],
    dimensions: "≈ 40 mm × 45 mm case",
    image: "/objects/watch/main.jpg",
    gallery: ["/objects/watch/main.jpg"],
    quote:
      "Time powered by a lifted cup of coffee — the watch that winds itself from your day.",
    quoteAuthor: "Archive note, Object 104",
    timeline: [
      {
        year: "16th century",
        title: "Pocket clocks",
        description:
          "Portable spring-driven clocks are perfected for the pocket.",
      },
      {
        year: "Early 1900s",
        title: "The wristwatch",
        description:
          "The wristwatch standardizes in military and civilian life.",
      },
      {
        year: "1920s–30s",
        title: "Self-winding",
        description:
          "Automatic movements make the unwound watch a thing of the past.",
      },
      {
        year: "Today",
        title: "Mechanical and quartz",
        description:
          "Self-winding wristwatches remain a worn, living piece of machinery.",
      },
    ],
    sources: [
      { title: "Automatic watch — Wikipedia", url: "https://en.wikipedia.org/wiki/Automatic_watch" },
      { title: "Watch — Wikipedia", url: "https://en.wikipedia.org/wiki/Watch" },
    ],
    imageCredit: {
      creator: "Petar Milosevic",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Self-winding_wristwatch_(transparent_backside).jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
  {
    id: "zipper",
    slug: "zipper",
    number: "105",
    name: "Zipper",
    category: "mechanical",
    year: "1893",
    yearNum: 1893,
    designer: "Whitcomb L. Judson; perfected by Gideon Sundback (1913)",
    origin: "United States",
    description:
      "A line of interlocking teeth, opened and closed by a single sliding pull. The smoothest lock clothing has ever worn.",
    longDescription:
      "The zipper is a fastener built from a row of interlocking teeth that a sliding element — the slider — forces together or apart by moving one way or the other. Whitcomb Judson patented his 'clasp locker' for shoes in 1893; after two decades of refinement, Gideon Sundback's 1913 design perfected the interlocking teeth and the slider that met them, making the modern zipper reliable enough for clothing.\n\nThe example shown here pairs a metal-toothed zipper with a plastic coil version, illustrating the two great families of the device. Each side carries a chain of teeth; the slider, fitted with an internal Y-shaped channel, presses the two chains together as it passes one way and parts them as it returns. With a single continuous motion a zipper fastens a full seam — faster and flatter than any hook, button, or lace — which is why it closes trousers, jackets, tents, and luggage without ever being re-engineered.",
    whyTimeless: [
      "A slider moves up the chain and teeth interlock; move it down and they part — one motion, full closure.",
      "It fastens and unfastens a long seam almost instantly, thousands of times over.",
      "Interlocking geometry does the holding, so there is nothing to wear out but the slider.",
    ],
    anatomy: [
      {
        title: "The teeth",
        description:
          "The interlocking elements — metal or plastic coil — that catch and hold each other.",
      },
      {
        title: "The tape",
        description:
          "The fabric strip that carries the teeth and sews the zipper into the garment.",
      },
      {
        title: "The slider",
        description:
          "The pull that guides the teeth together or apart through its Y-shaped channel.",
      },
      {
        title: "The stops",
        description:
          "Top and bottom fittings that keep the slider from running off the chain.",
      },
    ],
    material: "Metal teeth on fabric tape (shown), or plastic coil",
    materials: ["Metal", "Fiber", "Plastic"],
    dimensions: "≈ 200 mm × 25 mm (typical)",
    image: "/objects/zipper/main.jpg",
    gallery: ["/objects/zipper/main.jpg"],
    quote:
      "One pull and a whole seam is closed — the fastener that made dress fast and luggage sealed.",
    quoteAuthor: "Archive note, Object 105",
    timeline: [
      {
        year: "1893",
        title: "Judson's clasp locker",
        description:
          "Whitcomb Judson patents a hook-and-eye 'clasp locker' for shoes.",
      },
      {
        year: "1913",
        title: "Sundback's zipper",
        description:
          "Gideon Sundback perfects interlocking teeth and the reliable slider.",
      },
      {
        year: "1920s–30s",
        title: "Clothing adopts it",
        description:
          "The zipper moves from boots to trousers, jackets, and luggage.",
      },
      {
        year: "Today",
        title: "Every seam",
        description:
          "Metal and coil zippers close the world's garments and gear by the billions.",
      },
    ],
    sources: [
      { title: "Zipper — Wikipedia", url: "https://en.wikipedia.org/wiki/Zipper" },
    ],
    imageCredit: {
      creator: "Woodbine9",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Coil_plastic_and_metal_zippers.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      changes: "Downloaded and resized for local display (max 1920 px)",
    },
  },
];

export const objectBySlug = new Map(objects.map((o) => [o.slug, o]));

export const featuredObject = objects.find((o) => o.featured) ?? objects[0];
