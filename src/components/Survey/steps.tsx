import { LabelVariant } from './SurveyStep';
import { ButtonVariant } from '../Button';

const OPTIONS_IF_PC_WERE_A_PERSON = {
  petite_and_elegant: 'Petite and elegant 👛',
  robust_and_sturdy: 'Robust and sturdy 💪',
  tall_and_slender: 'Tall and slender 📏',
} as const;

export type IfPcWereAPerson = (typeof OPTIONS_IF_PC_WERE_A_PERSON)[keyof typeof OPTIONS_IF_PC_WERE_A_PERSON];

const OPTIONS_ADJECTIVES = {
  slow_and_noisy: 'Slow and noisy but loyal ​😍​',
  fast_and_modern: 'Fast and modern 😎',
  iffy: 'Iffy, never know what to expect 😄',
} as const;

export type Adjective = (typeof OPTIONS_ADJECTIVES)[keyof typeof OPTIONS_ADJECTIVES];

const OPTIONS_CHARACTER = {
  daring_space_explorer: 'A daring space explorer 👩‍🚀​',
  brilliant_scientist: 'A brilliant scientist ​🧑‍🔬​',
  witty_ai_sidekick: 'A witty AI sidekick 🤖​',
} as const;

export type Character = (typeof OPTIONS_CHARACTER)[keyof typeof OPTIONS_CHARACTER];

type Step = {
  isQuestion?: boolean;
  label: string;
  labelVariant?: LabelVariant;
  options: string[];
  optionsVariant: ButtonVariant;
};

export const steps: Step[] = [
  {
    label:
      "We've got a fun way to help you name your PC. Answer these three quirky questions, and we'll suggest the perfect name for your computer. It's easy, entertaining, and the best part? It's all about embracing your inner geek",
    labelVariant: 'text',
    options: ["Let's name your PC"],
    optionsVariant: 'primary',
  },
  {
    isQuestion: true,
    label: 'If your PC were a person, what would it look like?',
    labelVariant: 'question',
    options: [
      OPTIONS_IF_PC_WERE_A_PERSON.petite_and_elegant,
      OPTIONS_IF_PC_WERE_A_PERSON.robust_and_sturdy,
      OPTIONS_IF_PC_WERE_A_PERSON.tall_and_slender,
    ],
    optionsVariant: 'option',
  },
  {
    isQuestion: true,
    label: 'Which of these adjectives would best describe your PC?',
    labelVariant: 'question',
    options: [OPTIONS_ADJECTIVES.slow_and_noisy, OPTIONS_ADJECTIVES.fast_and_modern, OPTIONS_ADJECTIVES.iffy],
    optionsVariant: 'option',
  },
  {
    isQuestion: true,
    label: 'If your PC were a character in a sci-fi movie, which role would it play?',
    labelVariant: 'question',
    options: [
      OPTIONS_CHARACTER.daring_space_explorer,
      OPTIONS_CHARACTER.brilliant_scientist,
      OPTIONS_CHARACTER.witty_ai_sidekick,
    ],
    optionsVariant: 'option',
  },
  {
    label: 'Your PC now has a name worthy of its awesomeness!',
    labelVariant: 'question',
    options: ['Click here to reveal it'],
    optionsVariant: 'secondary',
  },
];

const RESULTS = {
  [`${OPTIONS_IF_PC_WERE_A_PERSON.petite_and_elegant},${OPTIONS_ADJECTIVES.fast_and_modern},${OPTIONS_CHARACTER.brilliant_scientist}`]:
    {
      name: 'Pixie "Byte" Lightyear',
      poem: "In the world of code, she's a luminary bright, With a petite grace and bytes of light.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.petite_and_elegant},${OPTIONS_ADJECTIVES.fast_and_modern},${OPTIONS_CHARACTER.daring_space_explorer}`]:
    {
      name: 'Lily "Swift" Tripper',
      poem: "She's petite yet swift, exploring unknown skies, With every leap, she'll reach new highs.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.petite_and_elegant},${OPTIONS_ADJECTIVES.fast_and_modern},${OPTIONS_CHARACTER.witty_ai_sidekick}`]:
    {
      name: 'Bella "Swift" Botsmith',
      poem: "With wit and charm, she's AI's delight, Petite and swift, she shines so bright.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.petite_and_elegant},${OPTIONS_ADJECTIVES.slow_and_noisy},${OPTIONS_CHARACTER.brilliant_scientist}`]:
    {
      name: 'Moxie "Whiz" Dynamo',
      poem: "In the realm of science, she's a whiz, no doubt, Loyal and strong, she stands tall throughout.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.petite_and_elegant},${OPTIONS_ADJECTIVES.slow_and_noisy},${OPTIONS_CHARACTER.daring_space_explorer}`]:
    {
      name: 'Ella "Gadget" Hunter',
      poem: "Exploring the cosmos, with gadgets in her hand, In loyalty and courage, she'll take a stand.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.petite_and_elegant},${OPTIONS_ADJECTIVES.slow_and_noisy},${OPTIONS_CHARACTER.witty_ai_sidekick}`]:
    {
      name: 'Zoe "Dynamo" Botsmith',
      poem: "With a dynamo's spark and loyalty profound, Zoe's AI wit astounds all around.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.petite_and_elegant},${OPTIONS_ADJECTIVES.iffy},${OPTIONS_CHARACTER.brilliant_scientist}`]:
    {
      name: 'Luna "Quirk" Hotshot',
      poem: "In the land of quirk, Luna's genius does confound, With petite elegance and brilliance that astounds.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.petite_and_elegant},${OPTIONS_ADJECTIVES.iffy},${OPTIONS_CHARACTER.daring_space_explorer}`]:
    {
      name: 'Sassy "Spark" Tripper',
      poem: "She's sassy and sparky, in the cosmos, she'll roam, With an iffy spirit, she'll make space her home.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.petite_and_elegant},${OPTIONS_ADJECTIVES.iffy},${OPTIONS_CHARACTER.witty_ai_sidekick}`]:
    {
      name: 'Emily "Quirk" Botsmith',
      poem: "With an iffy charm and witty AI flair, Emily, the quirk, takes on tech's dare.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.robust_and_sturdy},${OPTIONS_ADJECTIVES.fast_and_modern},${OPTIONS_CHARACTER.brilliant_scientist}`]:
    {
      name: 'Max "Velocity" Prodigy',
      poem: "Max, the velocity, in science's vast domain, Robust and brilliant, he'll make his own terrain.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.robust_and_sturdy},${OPTIONS_ADJECTIVES.fast_and_modern},${OPTIONS_CHARACTER.daring_space_explorer}`]:
    {
      name: 'Leo "Velocity" Roamer',
      poem: "With velocity and courage, Leo sets the pace, In the cosmos, he'll explore with grace.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.robust_and_sturdy},${OPTIONS_ADJECTIVES.fast_and_modern},${OPTIONS_CHARACTER.witty_ai_sidekick}`]:
    {
      name: 'Jack "Velocity" Botsmith',
      poem: "With jack's velocity, AI's best mate, He's robust and modern, no need to debate.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.robust_and_sturdy},${OPTIONS_ADJECTIVES.slow_and_noisy},${OPTIONS_CHARACTER.brilliant_scientist}`]:
    {
      name: 'Ethan "Veracious" Hotshot',
      poem: "In science's realm, Ethan's veracious and bright, Robust and loyal, he'll shed a guiding light.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.robust_and_sturdy},${OPTIONS_ADJECTIVES.slow_and_noisy},${OPTIONS_CHARACTER.daring_space_explorer}`]:
    {
      name: 'Oliver "Veracious" Pilgrim',
      poem: 'With loyalty as firm as a rocky hill, Oliver, the pilgrim, explores with skill.',
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.robust_and_sturdy},${OPTIONS_ADJECTIVES.slow_and_noisy},${OPTIONS_CHARACTER.witty_ai_sidekick}`]:
    {
      name: 'Samuel "Veracious" Botsmith',
      poem: "Samuel, veracious, with wit and power, Robust and loyal in tech's finest hour.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.robust_and_sturdy},${OPTIONS_ADJECTIVES.iffy},${OPTIONS_CHARACTER.brilliant_scientist}`]:
    {
      name: 'William "Quirk" Prodigy',
      poem: "In the land of quirk, William's a prodigy bold, Robust and expectant, his brilliance unfolds.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.robust_and_sturdy},${OPTIONS_ADJECTIVES.iffy},${OPTIONS_CHARACTER.daring_space_explorer}`]:
    {
      name: 'Benjamin "Quirk" Pilgrim',
      poem: "In the cosmos, Benjamin explores without fear, With quirks and strength, he's a pioneer.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.robust_and_sturdy},${OPTIONS_ADJECTIVES.iffy},${OPTIONS_CHARACTER.witty_ai_sidekick}`]:
    {
      name: 'Henry "Quirk" Botsmith',
      poem: "With Henry the quirk, the AI's side, so strong, Robust and witty, he'll journey along.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.tall_and_slender},${OPTIONS_ADJECTIVES.fast_and_modern},${OPTIONS_CHARACTER.brilliant_scientist}`]:
    {
      name: 'Noah "Velocity" Sage',
      poem: "Noah, the sage, with a velocity so fast, In science, he'll explore, his brilliance unsurpassed.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.tall_and_slender},${OPTIONS_ADJECTIVES.fast_and_modern},${OPTIONS_CHARACTER.daring_space_explorer}`]:
    {
      name: 'James "Speed" Tripper',
      poem: "With speed and grace, James takes to the sky, In the cosmos, he'll soar oh so high.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.tall_and_slender},${OPTIONS_ADJECTIVES.fast_and_modern},${OPTIONS_CHARACTER.witty_ai_sidekick}`]:
    {
      name: 'Elijah "Brisk" Botsmith',
      poem: "Elijah, brisk and modern, AI's best mate, Tall and slender, he navigates.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.tall_and_slender},${OPTIONS_ADJECTIVES.slow_and_noisy},${OPTIONS_CHARACTER.brilliant_scientist}`]:
    {
      name: 'Daniel "Veracious" Sharp',
      poem: "Daniel, the sharp scientist, loyal and true, Tall and slender, with brilliance, he'll break through.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.tall_and_slender},${OPTIONS_ADJECTIVES.slow_and_noisy},${OPTIONS_CHARACTER.daring_space_explorer}`]:
    {
      name: 'Michael "Veracious" Hiker',
      poem: 'Michael, the hiker, explores far and wide, Tall and slender, with loyalty by his side.',
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.tall_and_slender},${OPTIONS_ADJECTIVES.slow_and_noisy},${OPTIONS_CHARACTER.witty_ai_sidekick}`]:
    {
      name: 'Matthew "Veracious" Botsmith',
      poem: "Matthew, the AI's best mate, a hiker with zest, Tall and slender, with loyalty that's the best.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.tall_and_slender},${OPTIONS_ADJECTIVES.iffy},${OPTIONS_CHARACTER.brilliant_scientist}`]:
    {
      name: 'Christopher "Quirk" Sage',
      poem: "In the land of quirk, Christopher's the sage, Tall and slender, in science, he'll engage.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.tall_and_slender},${OPTIONS_ADJECTIVES.iffy},${OPTIONS_CHARACTER.daring_space_explorer}`]:
    {
      name: 'Andrew "Quirk" Tripper',
      poem: "With quirks and courage, Andrew's a tripper, Tall and slender, through the cosmos, he'll flipper.",
    },
  [`${OPTIONS_IF_PC_WERE_A_PERSON.tall_and_slender},${OPTIONS_ADJECTIVES.iffy},${OPTIONS_CHARACTER.witty_ai_sidekick}`]:
    {
      name: 'William "Quirk" Botsmith',
      poem: "With quirks and wit, William's AI's delight, Tall and slender, he's sharp and bright.",
    },
};

export const getResults = (answers: string[]) => {
  return RESULTS[answers.join(',')];
};
