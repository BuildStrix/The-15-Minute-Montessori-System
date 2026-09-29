export interface ActivityData {
  id: string;
  pillar: 'practical-life' | 'sensorial' | 'language' | 'movement';
  pillarName: string;
  number: string;
  title: string;
  age: string;
  time: string;
  objective: string;
  materials: string[];
  steps: string[];
  parentScript: string;
  scriptDeliveryTip: string;
  observationChecklist: string[];
  makeEasier: string;
  makeHarder: string;
  cleanupTip: string;
}

export const ACTIVITIES: ActivityData[] = [
  {
    id: 'pouring-water',
    pillar: 'practical-life',
    pillarName: 'Practical Life',
    number: 'Activity 04',
    title: 'Water Pouring Between Two Pitchers',
    age: '20 months – 3.5 years',
    time: '12–15 minutes',
    objective: 'Bilateral hand stabilization, wrist rotation, controlled deceleration, and spill awareness.',
    materials: [
      '2 small matching glass or ceramic cream pitchers (2–3 oz capacity)',
      '1 low-sided wooden activity tray (approx. 10" x 7")',
      '1 small absorbent cotton sponge or folded linen cloth',
      '1/4 cup room-temperature water'
    ],
    steps: [
      'Carry the tray with both hands to a child-height table. Place it gently with no sound.',
      'Fill the pitcher on the left with water. Leave the right pitcher empty.',
      'Grasp the handle of the left pitcher with your dominant thumb and index finger. Support the underside with two fingers of your other hand.',
      'Lift smoothly, center the spout directly over the mouth of the right pitcher, and pour slowly until the last drop falls.',
      'Wipe the spout rim if a droplet remains, set the pitcher down, pause, and whisper: "Now it is your turn."'
    ],
    parentScript: 'Watch my hands hold the handle. When water pours, listen to the quiet stream. Now you try.',
    scriptDeliveryTip: 'Speak slowly in a calm whisper. Resist holding their hands—allow minor spills to occur naturally so the child notices cause and effect.',
    observationChecklist: [
      'Uses non-dominant hand underneath for structural stabilization',
      'Visually tracks the liquid stream from spout into target pitcher',
      'Recognizes when pouring is finished before tipping pitcher upside down',
      'Notices water droplets on the tray and spontaneously reaches for the sponge'
    ],
    makeEasier: 'Substitute dry white beans or whole chickpeas for water to eliminate liquid anxiety and let the child hear the falling rhythm.',
    makeHarder: 'Add one droplet of blue food coloring and draw a thin tape mark on the receiving pitcher to practice stopping at a specific volume.',
    cleanupTip: 'Spilled water on the tray is welcomed work. Model: "Our tray is wet. Press, wipe, dry. Squeeze the sponge together."'
  },
  {
    id: 'texture-basket',
    pillar: 'sensorial',
    pillarName: 'Sensorial',
    number: 'Activity 12',
    title: 'Texture Mystery Basket',
    age: '18 months – 4 years',
    time: '10–15 minutes',
    objective: 'Tactile discrimination, stereognostic sense, and naming tactile properties without visual cues.',
    materials: [
      '1 shallow woven wicker or fabric basket',
      '4 matching pairs of fabric swatches (rough burlap, slippery silk, ribbed corduroy, soft flannel)',
      '1 soft cotton sleep mask or bandana (optional for older toddlers)'
    ],
    steps: [
      'Invite your child: "I have something for our fingertips to explore." Unroll the small floor mat.',
      'Place the basket between you. Remove one swatch: stroke it with the pads of three fingertips, closing your eyes with a soft smile.',
      'Offer the swatch to your child: "Feel this. It is rough." Allow them to feel it undisturbed.',
      'Remove all swatches onto the mat. Model finding the matching duplicate purely by texture with closed eyes.',
      'Invite the child to close their eyes and discover pairs: "Can your fingers find the one that feels like silk?"'
    ],
    parentScript: 'Close your eyes. Let your fingertips do the seeing. Can you find the piece that feels like silk?',
    scriptDeliveryTip: 'Keep verbal commentary minimal while the child touches the fabric. Let tactile nerve endings deliver the cognitive feedback.',
    observationChecklist: [
      'Slows down erratic hand motions to stroke the fabric deliberately',
      'Closes eyes voluntarily or averts gaze to focus sensory attention on touch',
      'Correctly pairs textures based on friction and weave differences',
      'Uses vocabulary words like "smooth," "scratchy," or "coarse"'
    ],
    makeEasier: 'Keep eyes wide open and begin with only two strongly contrasting textures (e.g., rough sandpaper vs. soft plush fleece).',
    makeHarder: 'Use six pairs including natural materials (smooth river stone vs. porous pumice stone, polished wood vs. pine bark).',
    cleanupTip: 'Stack the matching pairs together like folded blankets and return the basket to its designated low shelf.'
  },
  {
    id: 'sound-match',
    pillar: 'language',
    pillarName: 'Language',
    number: 'Activity 18',
    title: 'Object-to-Picture Sound Match',
    age: '22 months – 4 years',
    time: '12–15 minutes',
    objective: 'Phonemic initial-sound awareness, linking 3D physical realities to 2D representations, and vocabulary precision.',
    materials: [
      '4 miniature familiar objects (metal spoon, key, small cup, real green leaf)',
      '4 matching photo cards (clear photographs on sturdy cardstock with plain backgrounds)',
      '1 small fabric pouch or drawstring bag'
    ],
    steps: [
      'Sit beside your child (not across, so you share the same left-to-right orientation).',
      'Lay the 4 picture cards in a horizontal line from left to right on the table.',
      'Reach into the pouch, pull out the metal spoon, hold it close to your lips, and emphasize the initial phoneme: "/s/ ... /s/ ... spoon."',
      'Scan the cards slowly: "Where is the picture of the spoon?" Place the miniature gently on top of the matching photograph.',
      'Hand the pouch to your child: "Reach inside. What do you feel?"'
    ],
    parentScript: 'Look at my lips: /s/ ... spoon. Where is the card that matches our spoon?',
    scriptDeliveryTip: 'Isolate the phonetic sound (/s/, not "ess"). Exaggerate mouth shape naturally without singing or turning it into a quiz.',
    observationChecklist: [
      'Watches parent’s mouth during initial phoneme isolation',
      'Accurately matches 3D object to the 2D photograph counterpart',
      'Attempts to reproduce the isolated sound before placing the item',
      'Shows satisfaction when aligning the object precisely within the card borders'
    ],
    makeEasier: 'Match real object to identical real object (spoon to duplicate spoon) before introducing 2D photographs.',
    makeHarder: 'Three-period lesson extension: "Show me the object that begins with /k/. What is the name of this object?"',
    cleanupTip: 'Each item says goodnight to its picture before tucking away inside the cotton pouch.'
  }
];

export const ROADMAP_WEEKS = [
  {
    week: 'Week 1',
    title: 'Foundations of Order & Independence',
    theme: 'Establishing the Low Shelf, Work Mat Rituals & Bilateral Hands',
    focus: 'Order, Coordination & Spatial Calm',
    description: 'We transition out of chaotic toy bins and set up a quiet 3-tray shelf. Your child learns how to carry a tray with two hands, unroll a small floor mat, and complete one uninterrupted cycle.',
    sampleDaily: ['Tray Carrying', 'Dry Grain Pouring', 'Household Object Naming', 'Walking the Masking Tape Line', 'Mat Rolling Ritual']
  },
  {
    week: 'Week 2',
    title: 'Awakening the Senses',
    theme: 'Tactile Discrimination, Sound Pairing & Sensory Refinement',
    focus: 'Tactile, Auditory & Visual Pairing',
    description: 'Isolating single physical properties: rough versus smooth, heavy versus light, loud versus quiet. Builds cognitive categorization and prolonged sensory focus without electronic stimulation.',
    sampleDaily: ['Texture Mystery Basket', 'Kitchen Spice Scent Jars', 'Loud & Soft Shaker Pairs', 'The Silence Bell Game', 'Fabric Pairing']
  },
  {
    week: 'Week 3',
    title: 'Language & Vocabulary Explosion',
    theme: 'Nomenclature Cards, Phonemic Sounds & Precise Real-World Words',
    focus: 'Phonological Awareness & 3-Period Lessons',
    description: 'Moving beyond babytalk to rich, specific vocabulary. Introducing the Montessori 3-period lesson ("This is / Show me / What is") and early phonemic sound discovery.',
    sampleDaily: ['Object-to-Picture Matching', 'Classified Kitchen Nomenclature', 'Initial Sound Basket (/b/ /m/ /s/)', 'Story Sequencing with Real Photos', 'Mystery Bag Guessing']
  },
  {
    week: 'Week 4',
    title: 'Grace, Courtesy & Gross Body Control',
    theme: 'Controlled Equilibrium, Carrying Glass & Intentional Stillness',
    focus: 'Proprioception, Vestibular System & Social Grace',
    description: 'Toddlers possess a deep biological need for heavy work and maximum effort. We channel this energy into balancing along floor tape, carrying delicate glassware, and quiet body regulation.',
    sampleDaily: ['Walking the Spiral Line', 'Carrying a Real Glass Cup', 'Bean Bag Head Balance', 'Quiet Chair Moving Without Scrapes', 'Gentle Greeting & Door Closing']
  },
  {
    week: 'Week 5',
    title: 'Practical Life in the Real Kitchen',
    theme: 'Food Preparation, Plant Care, Spills & Household Agency',
    focus: 'Self-Efficacy & Practical Contribution',
    description: 'Children don’t want fake toy kitchens—they want to participate in the real home. Safe knife work with soft bananas, table washing, plant misting, and peeling clementines.',
    sampleDaily: ['Peeling & Slicing a Soft Banana', 'Table Scrubbing with Real Suds', 'Plant Leaf Misting & Wiping', 'Juicing Orange Halves', 'Folding Napkins & Setting Table']
  },
  {
    week: 'Week 6',
    title: 'Integration & Sustained Focus',
    theme: 'Multi-Step Cycles, Self-Initiated Work & 30-Minute Concentration',
    focus: 'Deep Focus & Autonomous Work Cycles',
    description: 'We weave all four pillars together into autonomous morning rhythms. You will witness your child choosing work independently, repeating it with deep concentration, and restoring it without reminders.',
    sampleDaily: ['Autonomous 3-Step Morning Tray', 'Shoe Polishing Sequence', 'Sorting Cut Flowers into Mini Vases', 'The Family Table Service', 'Weekly Progress Celebration']
  }
];

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  childAge: string;
  location: string;
  highlight: string;
  pillarImpact: string;
  dateBadge: string; // e.g. "3 weeks ago", "5 weeks ago", "2 months ago"
  verifiedBuyer: boolean;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    quote: 'The 4:30 PM meltdown hour used to be pure survival mode. Having the verbatim scripts changed everything. I stopped talking too much, set out the pitcher pouring tray, and my 2.5-year-old sat concentrating for 22 uninterrupted minutes.',
    author: 'Elena R.',
    childAge: 'Mother of Lucas (28 months)',
    location: 'Austin, TX',
    highlight: '22 minutes of quiet focus',
    pillarImpact: 'Practical Life',
    dateBadge: '3 weeks ago',
    verifiedBuyer: true
  },
  {
    id: 't-2',
    quote: 'I spent months saving Pinterest crafts that took 40 minutes to set up and lasted 30 seconds. This playbook proved you do not need expensive wooden kits or dyed pasta. A small cotton sponge, water, and dried lentils was all we needed. Worth 10x the $47.',
    author: 'Marcus & Chloe T.',
    childAge: 'Parents of Maya (3 years)',
    location: 'Seattle, WA',
    highlight: 'Zero prep fatigue',
    pillarImpact: 'Sensorial & Order',
    dateBadge: '5 weeks ago',
    verifiedBuyer: true
  },
  {
    id: 't-3',
    quote: 'As an AMI-trained former primary educator, I was skeptical of home parent guides. The 15-Minute Montessori System captures the authentic pedagogical precision: single-property isolation, precise non-corrective language, and realistic developmental adaptations.',
    author: 'Claire V., M.Ed',
    childAge: 'Montessori Educator & Mom to Noah (22 months)',
    location: 'Denver, CO',
    highlight: 'Authentic pedagogy',
    pillarImpact: 'Educator Verified',
    dateBadge: '7 weeks ago',
    verifiedBuyer: true
  },
  {
    id: 't-4',
    quote: 'My daughter used to ask for the tablet every single morning before breakfast. Week 1 with the work mat ritual replaced screens naturally. She now wakes up, walks to her low shelf, picks a tray with two hands, and works completely independently.',
    author: 'David P.',
    childAge: 'Father of Sophie (3.5 years)',
    location: 'Chicago, IL',
    highlight: 'Naturally replaced morning screens',
    pillarImpact: 'Independence',
    dateBadge: '2 months ago',
    verifiedBuyer: true
  },
  {
    id: 't-5',
    quote: 'We started the kitchen independence activities from Week 5. My 2-year-old now slices bananas with a dull butter knife, wipes up spills with her tiny sponge, and feels so proud. The verbatim scripts on what NOT to say saved me from hovering.',
    author: 'Hannah M.',
    childAge: 'Mother of Nora (25 months)',
    location: 'Portland, OR',
    highlight: 'Real kitchen independence',
    pillarImpact: 'Self-Efficacy',
    dateBadge: '2.5 months ago',
    verifiedBuyer: true
  },
  {
    id: 't-6',
    quote: 'Worth every penny. The 15-minute time frame is genuinely achievable for working parents. We do one tray when I get home from work, and it sets a calm tone for the rest of the evening.',
    author: 'Julian & Sam K.',
    childAge: 'Parents of Leo (3 years)',
    location: 'Boston, MA',
    highlight: 'Realistic for working parents',
    pillarImpact: 'Evening Calm',
    dateBadge: '3 months ago',
    verifiedBuyer: true
  }
];

export const INCLUDED_FEATURES = [
  {
    title: 'The 15-Minute Montessori System Playbook (140-Page PDF)',
    desc: 'The complete parent guide formatted for easy reading on smartphones, tablets, or home printing. Crystal clear typography and calming photography.'
  },
  {
    title: '30 Step-by-Step Daily Activity Guides',
    desc: 'Each activity features exact materials, numbered steps, verbatim scripts, observation rubrics, easier/harder adaptations, and cleanup routines.'
  },
  {
    title: 'Verbatim Parent Scripts Cheat Sheet',
    desc: 'Word-for-word scripts showing you exactly what to say (and what NOT to say) to invite focus, handle resistance, and step back peacefully.'
  },
  {
    title: 'Household Materials Master Checklist',
    desc: 'No expensive specialty Montessori kits needed. 100% designed around everyday items already in your kitchen, pantry, and linen closet.'
  },
  {
    title: '6 Weekly Planning Roadmaps & Daily Rhythm Visualizer',
    desc: 'Never wonder what to do on Tuesday morning. A structured 5-day-a-week plan balancing Practical Life, Sensorial, Language, and Movement.'
  },
  {
    title: 'The Montessori Troubleshooting Playbook',
    desc: 'Direct solutions for: "My child walks away in 30 seconds," "They throw the materials," "They resist cleanup," and "Sibling interruptions."'
  },
  {
    title: 'Developmental Milestone Observation Checklists',
    desc: 'Simple check-ins to track fine-motor grip, hand-eye coordination, balance, and vocabulary growth over the 6-week journey.'
  },
  {
    title: 'Printable Work Mat & Tray Layout Specs',
    desc: 'Exact dimension guidelines and printable boundary cards to help your child visually understand where work begins and ends.'
  },
  {
    title: 'FREE BONUS: The 5-Day No-Prep Play Plan ($19 Value)',
    desc: 'A complete 5-day emergency starter kit when you need zero prep time and zero stress on a rainy afternoon. Included free.'
  },
  {
    title: 'Lifetime Access & Free Future Edition Updates',
    desc: 'Single one-time payment of $47. No recurring subscriptions. Print as many copies as your household needs.'
  }
];

export const FAQ_ITEMS = [
  {
    q: 'My toddler has a short attention span. Will 15 minutes actually work?',
    a: 'Yes, 15 minutes is the biological sweet spot for toddlers aged 18 months to 4 years. The activities are specifically designed with high initial tactile engagement that captivates them immediately. Many parents find their children choose to repeat the activity for 20 to 30 minutes once the rhythm is established.'
  },
  {
    q: 'Do I need to buy expensive wooden Montessori toys or shelves?',
    a: 'Absolutely not. Authentic Montessori was founded on real everyday objects. Every single activity in this playbook utilizes items you already own: small cups, dry lentils, kitchen sponges, cotton fabrics, and masking tape. You do not need a high-end playroom.'
  },
  {
    q: 'How is this different from free Pinterest ideas or Instagram reels?',
    a: 'Random social media ideas lack developmental progression and require tedious shopping lists. This is a coherent 6-week curriculum with verbatim parent scripts, pedagogical observation checklists, and built-in adaptations for when an activity is too hard or too easy.'
  },
  {
    q: 'What if my child is 18 months vs 3.5 years old?',
    a: 'Every single activity contains our explicit "Make it Easier" and "Make it Harder" modifications. An 18-month-old starts pouring dry beans, while a 3.5-year-old pours colored water to exact volume markings.'
  },
  {
    q: 'How do I receive the product after purchase?',
    a: 'You receive instant digital access immediately after checkout on Whop. You can download the PDF files to your phone, iPad, or computer, or send them to a local print shop. It comes with lifetime access and our 30-day money-back guarantee.'
  }
];
