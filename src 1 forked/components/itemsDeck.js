const basicDeck = [
  {
    id: 1,
    card: "Resources", // "Laser",
    description: "Laser description",
    cost: 3,
    actions: [
      {
      key: 1,
      type: "damage",    
      description: "damage to functional capacity",
      quantity: 2,
      },
    ],
    action: "attack",
    quantity: 1,
    type: "Physical",
    // type: "Structural",
    color: "0, 0, 0"
  },
  {
    id: 2,
    card: "Resources", // "Optics",
    description: "Optics description",
    cost: 3,
    actions: [
      {
        key: 1,
        type: "damage",    
        description: "damage to functional capacity",
        quantity: 1,
      },
      {
        key: 2,
        type: "card",    
        description: "damage to functional capacity",
        quantity: 1,
        },
    ],
    action: "attack",
    quantity: 1,
    type: "Physical",
    // type: "Structural",
    color: "0, 0, 0"
  },
  {
    id: 3,
    card: "Resources", // "Laser",
    description: "Laser description",
    cost: 3,
    actions: [
      {
      key: 1,
      type: "damage",    
      description: "damage to functional capacity",
      quantity: 2,
      },
    ],
    action: "attack",
    quantity: 1,
    type: "Physical",
    // type: "Structural",
    color: "0, 0, 0"
  },
  {
    id: 4,
    card: "Resources", // "Advanced laser",
    description: "Advanced laser description",
    cost: 4,
    actions: [
      {
      key: 1,
      type: "attack",    
      description: "resource to spend",
      quantity: 3,
      },
    ],
    action: "resource",
    quantity: 1,
    type: "Physical",
    color: "0, 0, 0"
  },
  {
    id: 5,
    card: "Resources", // "Efficient process",
    description: "Efficient process description",
    cost: 4,
    actions: [
      {
      key: 1,
      type: "resources",    
      description: "resource to spend",
      quantity: 3,
      },
    ],
    action: "resource",
    quantity: 1,
    type: "Physical",
    color: "0, 0, 0"
  },
];

export default basicDeck;
