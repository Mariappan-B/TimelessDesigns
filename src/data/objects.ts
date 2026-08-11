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
];

export const objectBySlug = new Map(objects.map((o) => [o.slug, o]));

export const featuredObject = objects.find((o) => o.featured) ?? objects[0];
