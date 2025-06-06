export interface FlowchartNode {
  id: string;
  label: string;
  level: number;
  category?: string;
}

export interface ContentSection {
  id: string;
  title: string;
  content: {
    text?: string;
    bullets?: string[];
    sections?: {
      title: string;
      bullets: string[];
      note?: string;
    }[];
    numbered?: string[];
    note?: string;
  };
}

export const flowchartNodes: FlowchartNode[] = [
  // Level 1 - Main topic
  { id: "puberty-blockers", label: "PUBERTY BLOCKERS", level: 1 },
  
  // Level 2 - Main categories
  { id: "who-uses-them", label: "WHO USES THEM?", level: 2, category: "left" },
  { id: "are-they-safe", label: "ARE THEY SAFE?", level: 2, category: "center" },
  { id: "how-do-they-work", label: "HOW DO THEY WORK?", level: 2, category: "right" },
  
  // Level 3 - Sub categories
  { id: "social-effects", label: "SOCIAL EFFECTS", level: 3, category: "left" },
  { id: "criteria-prescription", label: "CRITERIA FOR PRESCRIPTION", level: 3, category: "left" },
  { id: "physical-effects", label: "PHYSICAL EFFECTS", level: 3, category: "left" },
  
  { id: "side-effects", label: "SIDE EFFECTS", level: 3, category: "center" },
  { id: "will-child-regret", label: "WILL MY CHILD REGRET IT?", level: 3, category: "center" },
  
  { id: "types-blockers", label: "TYPES OF BLOCKERS", level: 3, category: "right" },
  { id: "next-steps", label: "NEXT STEPS", level: 3, category: "right" },
  { id: "how-administered", label: "HOW IS IT ADMINISTERED?", level: 3, category: "right" },
  
  // Level 4 - Detailed sub categories
  { id: "where-how-get", label: "WHERE/HOW DO I GET THEM?", level: 4 },
  { id: "changes-permanent", label: "ARE THE CHANGES PERMANENT?", level: 4 },
  { id: "mediating-side-effects", label: "MEDIATING SIDE EFFECTS", level: 4 },
  { id: "other-options", label: "OTHER OPTIONS", level: 4 },
  { id: "how-frequently", label: "HOW FREQUENTLY?", level: 4 },
];

export const contentSections: ContentSection[] = [
  {
    id: "puberty-blockers",
    title: "PUBERTY BLOCKERS",
    content: {
      bullets: [
        "Navigating gender-affirming care can be complex, overwhelming, and at times, even feel frightening. That's why our team is here to support you by answering any questions you may have about the purpose, mechanisms, effects, and safety of Puberty Blockers.",
        "To use the flowchart, click on the questions that are most relevant to you to gain a clearer understanding of the care provided through puberty blockers."
      ]
    }
  },
  {
    id: "who-uses-them",
    title: "WHO USES THEM?",
    content: {
      text: "Most people who utilize puberty blockers have begun puberty and:",
      bullets: [
        "Exhibit gender non-conformity or gender dysphoria",
        "Have gender dysphoria that began or worsened as puberty onset"
      ]
    }
  },
  {
    id: "social-effects",
    title: "SOCIAL EFFECTS",
    content: {
      bullets: [
        "Puberty Blockers may allow for youth to comfort and satisfaction in their own body instead of feeling the discomfort that transgender children often feel when undergoing puberty. Feeling comfortable means reduced negative experiences: sensory discomfort in clothing, shame when seeing one's image or reflection, or self-consciousness when speaking.",
        "Commonly, transgender people want to be recognized by others as their identified gender, and to not have their gender misclassified by others. Puberty Blockers limit misperception and misgendering, allowing social interactions to be validating rather than exclusionary."
      ]
    }
  },
  {
    id: "criteria-prescription",
    title: "CRITERIA FOR PRESCRIPTION",
    content: {
      numbered: [
        "Has a diagnosis of persistent well-documented gender dysphoria or gender incongruence from trained health care provider(s).",
        "Has had a review of co-existing conditions by health care provider(s).",
        "Potential risks, complications, and benefits have been discussed in detail.",
        "Consent has been given from the patient and, preferably, their guardians (However, parental consent is not required under the BC Infant Act)."
      ]
    }
  },
  {
    id: "where-how-get",
    title: "WHERE/HOW DO I GET THEM?",
    content: {
      bullets: [
        "Puberty Blockers are prescribed by doctors, including: some primary care providers, pediatric endocrinologists, gender-affirming care specialists, & more.",
        "Puberty Blockers are not legal in every U.S. state",
        "Insurance coverage varies"
      ]
    }
  },
  {
    id: "physical-effects",
    title: "PHYSICAL EFFECTS",
    content: {
      sections: [
        {
          title: "ASSIGNED FEMALE AT BIRTH",
          bullets: [
            "Prevents development of sex drive",
            "Stops breast development", 
            "Stops menstruation",
            "Prevents hip broadening"
          ]
        },
        {
          title: "ASSIGNED MALE AT BIRTH", 
          bullets: [
            "Prevents development of sex drive",
            "Slows growth of facial & body hair",
            "Prevents broadening of shoulders",
            "Limits penis, scrotum, & testicle growth"
          ]
        }
      ]
    }
  },
  {
    id: "changes-permanent",
    title: "ARE THE CHANGES PERMANENT?",
    content: {
      bullets: [
        "Changes are not permanent.",
        "When a person stops taking Puberty Blockers, puberty begins again.",
        "Puberty blockers allow youth to explore gender identity, and give families time to plan for future medical, legal, mental, and social steps."
      ]
    }
  },
  {
    id: "are-they-safe",
    title: "ARE THEY SAFE?",
    content: {
      bullets: [
        "Puberty Blockers have been used safely for decades to treat early puberty, endometriosis, & other diagnoses.",
        "Professional societies endorse puberty blockers for youth with gender dysphoria"
      ]
    }
  },
  {
    id: "types-blockers",
    title: "TYPES OF BLOCKERS",
    content: {
      text: "There are two kinds:",
      numbered: [
        "A flexible rod called histrelin acetate goes under the skin of the arm and lasts for 1 year.",
        "A shot called leuprolide acetate works for 1, 3, or 4 months at a time."
      ],
      bullets: [
        "Anti-androgens are another kind of medicine which have a similar effect to GnRHs. People who were assigned male at birth can also take these to lower testosterone levels."
      ]
    }
  },
  {
    id: "next-steps",
    title: "NEXT STEPS",
    content: {
      bullets: [
        "If your child chooses to, they can discontinue puberty blockers, which allows for puberty to continue"
      ],
      text: "OR",
      sections: [
        {
          title: "Switch from puberty blockers to hormone replacement therapy at ~16 yrs old",
          bullets: [
            "Transfeminine people → Estradiol",
            "Transmasculine people → Testosterone"
          ]
        }
      ]
    }
  },
  {
    id: "how-administered",
    title: "HOW IS IT ADMINISTERED?",
    content: {
      text: "Two GnRH options are available:",
      numbered: [
        "An arm implant under the skin",
        "An injection"
      ],
      bullets: [
        "Anti-androgens may also be used by people assigned male at birth orally, or via injection."
      ]
    }
  },
  {
    id: "how-frequently",
    title: "HOW FREQUENTLY?",
    content: {
      numbered: [
        "The flexible rod that goes under the skin of the arm lasts for 1 year.",
        "The injection works for 1, 3, or 4 months at a time."
      ],
      bullets: [
        "Anti-androgens are another kind of medicine which have a similar effect to GnRHs. People who were assigned male at birth can also take these to lower testosterone levels. The frequency of this oral medication, or injected medication, varies by patient. These can be taken as oral tablets every day, or injections which may not be taken daily."
      ]
    }
  },
  {
    id: "how-do-they-work",
    title: "HOW DO THEY WORK?",
    content: {
      bullets: [
        "\"Puberty Blockers\" is another way to say \"Gonadotropin-Releasing Hormone (GnRH) Analogues\"",
        "Puberty Blockers mimic the natural hormone, GnRH, in the body. They act like natural GnRH, but overstimulate hormone receptors. This reduces the production of sex hormones like estrogen and testosterone!"
      ]
    }
  },
  {
    id: "side-effects",
    title: "SIDE EFFECTS",
    content: {
      sections: [
        {
          title: "Long-term side effects may include:",
          bullets: [
            "Growth spurts",
            "Bone growth",
            "Bone density",
            "Fertility, depending on when the medicine is first taken"
          ],
          note: "* If assigned male at birth, and starting blockers in early puberty, one may not develop enough skin on the penis and scrotum to have some types of gender-affirming surgeries later on. Alternative surgery approaches are usually are available."
        },
        {
          title: "Notable short-term side effects may include:",
          bullets: [
            "Swelling at the site of the shot",
            "Weight gain",
            "Hot flashes",
            "Headaches",
            "Mood changes"
          ]
        }
      ]
    }
  },
  {
    id: "mediating-side-effects",
    title: "MEDIATING SIDE EFFECTS",
    content: {
      bullets: [
        "Patients should have their height checked every few months",
        "Yearly bone density & bone age tests may be advised to support bone health",
        "Youth taking puberty blockers may need to take calcium and vitamin D supplements"
      ]
    }
  },
  {
    id: "will-child-regret",
    title: "WILL MY CHILD REGRET IT?",
    content: {
      bullets: [
        "If your child regrets taking Puberty Blockers, they may choose to stop taking them at any time. Upon discontinuation, puberty will resume. Your child may then choose to pursue other gender-affirming care options at this time.",
        "Less than 5% of trans teens report regret with some aspect of their gender-affirming care related to hormones or puberty blockers"
      ]
    }
  },
  {
    id: "other-options",
    title: "OTHER OPTIONS",
    content: {
      text: "There are many gender-affirming care options for transgender minors undergoing puberty who do not wish to take Puberty Blockers. These include but are not limited to:",
      bullets: [
        "Hormone replacement therapy",
        "Chest binding (Assigned Female at Birth)",
        "Tucking (Assigned Male at Birth)",
        "Gender affirming surgeries",
        "Social transitioning (Picking a gender-affirming name, changing their appearance or expression)"
      ]
    }
  }
];
