const sessionToUserMap = {
  'session-001': 'Alice',
  'session-002': 'Bob',
  'session-003': 'Charlie',
  'session-004': 'Diane',
  'session-005': 'Eve',
  'session-006': 'Frank',
  'session-007': 'Grace',
  'session-008': 'Henry',
  'session-009': 'Iris',
  'session-010': 'Jack',
  'session-011': 'Karen',
  'session-012': 'Leo',
  'session-013': 'Mia',
  'session-014': 'Noah',
  'session-015': 'Olivia',
  'session-016': 'Paul',
  'session-017': 'Quinn',
  'session-018': 'Rachel',
  'session-019': 'Sam',
  'session-020': 'Tina',
  'session-021': 'Uma',
  'session-022': 'Victor',
  'session-023': 'Walter',
  'session-024': 'Xander',
  'session-025': 'Yara',
};

const userSessionsMap = {
  'Alice': ['session-001'],
  'Bob': ['session-002'],
  'Charlie': ['session-003'],
  'Diane': ['session-004'],
  'Eve': ['session-005'],
  'Frank': ['session-006'],
  'Grace': ['session-007'],
  'Henry': ['session-008'],
  'Iris': ['session-009'],
  'Jack': ['session-010'],
  'Karen': ['session-011'],
  'Leo': ['session-012'],
  'Mia': ['session-013'],
  'Noah': ['session-014'],
  'Olivia': ['session-015'],
  'Paul': ['session-016'],
  'Quinn': ['session-017'],
  'Rachel': ['session-018'],
  'Sam': ['session-019'],
  'Tina': ['session-020'],
  'Uma': ['session-021'],
  'Victor': ['session-022'],
  'Walter': ['session-023'],
  'Xander': ['session-024'],
  'Yara': ['session-025'],
};

const cartHistoryMap = {
  'Alice': [
    {
      timestamp: 1620000050,
      items: [
        {
          productId: 'prod-001',
          quantity: 1,
          price: 99.99,
        },
      ],
      total: 99.99,
    },
    {
      timestamp: 1620000060,
      items: [
        {
          productId: 'prod-001',
          quantity: 1,
          price: 99.99,
        },
        {
          productId: 'prod-003',
          quantity: 1,
          price: 49.99,
        },
      ],
      total: 149.98,
    },
  ],
  'Bob': [
    {
      timestamp: 1620001060,
      items: [
        {
          productId: 'prod-010',
          quantity: 1,
          price: 79.99,
        },
      ],
      total: 79.99,
    },
    {
      timestamp: 1620024000,
      items: [
        {
          productId: 'prod-010',
          quantity: 1,
          price: 79.99,
        },
        {
          productId: 'prod-011',
          quantity: 500,
          price: 29.99,
        },
      ],
      total: 15079.99,
    },
  ],
  'Charlie': [
    {
      timestamp: 1620002040,
      items: [
        {
          productId: 'prod-020',
          quantity: 1,
          price: 49.99,
        },
      ],
      total: 49.99,
    },
    {
      timestamp: 1620002050,
      items: [
        {
          productId: 'prod-020',
          quantity: 1,
          price: 49.99,
        },
        {
          productId: 'prod-021',
          quantity: 1,
          price: 39.99,
        },
      ],
      total: 89.98,
    },
  ],
  'Diane': [
    {
      timestamp: 1620003050,
      items: [
        {
          productId: 'prod-030',
          quantity: 1,
          price: 69.99,
        },
      ],
      total: 69.99,
    },
    {
      timestamp: 1620024010,
      items: [
        {
          productId: 'prod-030',
          quantity: 1,
          price: 69.99,
        },
        {
          productId: 'prod-031',
          quantity: 1000,
          price: 59.99,
        },
      ],
      total: 60069.98,
    },
  ],
  'Eve': [
    {
      timestamp: 1620004060,
      items: [
        {
          productId: 'prod-040',
          quantity: 1,
          price: 199.99,
        },
      ],
      total: 199.99,
    },
    {
      timestamp: 1620004070,
      items: [
        {
          productId: 'prod-040',
          quantity: 1,
          price: 199.99,
        },
        {
          productId: 'prod-041',
          quantity: 1,
          price: 89.99,
        },
      ],
      total: 289.98,
    },
  ],
  'Frank': [
    {
      timestamp: 1620005050,
      items: [
        {
          productId: 'prod-050',
          quantity: 1,
          price: 119.99,
        },
      ],
      total: 119.99,
    },
    {
      timestamp: 1620024020,
      items: [
        {
          productId: 'prod-050',
          quantity: 1,
          price: 119.99,
        },
        {
          productId: 'prod-051',
          quantity: 250,
          price: 44.99,
        },
      ],
      total: 11374.49,
    },
  ],
  'Grace': [
    {
      timestamp: 1620006070,
      items: [
        {
          productId: 'prod-060',
          quantity: 1,
          price: 79.99,
        },
      ],
      total: 79.99,
    },
    {
      timestamp: 1620006080,
      items: [
        {
          productId: 'prod-060',
          quantity: 1,
          price: 79.99,
        },
        {
          productId: 'prod-061',
          quantity: 1,
          price: 54.99,
        },
      ],
      total: 134.98,
    },
  ],
  'Henry': [
    {
      timestamp: 1620007040,
      items: [
        {
          productId: 'prod-070',
          quantity: 1,
          price: 89.99,
        },
      ],
      total: 89.99,
    },
    {
      timestamp: 1620024030,
      items: [
        {
          productId: 'prod-070',
          quantity: 1,
          price: 89.99,
        },
        {
          productId: 'prod-071',
          quantity: 5000,
          price: 34.99,
        },
      ],
      total: 175089.99,
    },
  ],
  'Iris': [
    {
      timestamp: 1620008060,
      items: [
        {
          productId: 'prod-080',
          quantity: 1,
          price: 129.99,
        },
      ],
      total: 129.99,
    },
    {
      timestamp: 1620008070,
      items: [
        {
          productId: 'prod-080',
          quantity: 1,
          price: 129.99,
        },
        {
          productId: 'prod-081',
          quantity: 1,
          price: 74.99,
        },
      ],
      total: 204.98,
    },
  ],
  'Jack': [
    {
      timestamp: 1620009050,
      items: [
        {
          productId: 'prod-090',
          quantity: 1,
          price: 109.99,
        },
      ],
      total: 109.99,
    },
    {
      timestamp: 1620024040,
      items: [
        {
          productId: 'prod-090',
          quantity: 1,
          price: 109.99,
        },
        {
          productId: 'prod-091',
          quantity: 750,
          price: 39.99,
        },
      ],
      total: 30109.48,
    },
  ],
  'Karen': [
    {
      timestamp: 1620010070,
      items: [
        {
          productId: 'prod-100',
          quantity: 1,
          price: 159.99,
        },
      ],
      total: 159.99,
    },
    {
      timestamp: 1620010080,
      items: [
        {
          productId: 'prod-100',
          quantity: 1,
          price: 159.99,
        },
        {
          productId: 'prod-101',
          quantity: 1,
          price: 84.99,
        },
      ],
      total: 244.98,
    },
  ],
  'Leo': [
    {
      timestamp: 1620011040,
      items: [
        {
          productId: 'prod-110',
          quantity: 1,
          price: 99.99,
        },
      ],
      total: 99.99,
    },
    {
      timestamp: 1620024050,
      items: [
        {
          productId: 'prod-110',
          quantity: 1,
          price: 99.99,
        },
        {
          productId: 'prod-111',
          quantity: 2000,
          price: 49.99,
        },
      ],
      total: 100099.99,
    },
  ],
  'Mia': [
    {
      timestamp: 1620012060,
      items: [
        {
          productId: 'prod-120',
          quantity: 1,
          price: 89.99,
        },
      ],
      total: 89.99,
    },
    {
      timestamp: 1620012070,
      items: [
        {
          productId: 'prod-120',
          quantity: 1,
          price: 89.99,
        },
        {
          productId: 'prod-121',
          quantity: 1,
          price: 64.99,
        },
      ],
      total: 154.98,
    },
  ],
  'Noah': [
    {
      timestamp: 1620013040,
      items: [
        {
          productId: 'prod-130',
          quantity: 1,
          price: 74.99,
        },
      ],
      total: 74.99,
    },
    {
      timestamp: 1620024060,
      items: [
        {
          productId: 'prod-130',
          quantity: 1,
          price: 74.99,
        },
        {
          productId: 'prod-131',
          quantity: 333,
          price: 29.99,
        },
      ],
      total: 10059.66,
    },
  ],
  'Olivia': [
    {
      timestamp: 1620014070,
      items: [
        {
          productId: 'prod-140',
          quantity: 1,
          price: 249.99,
        },
      ],
      total: 249.99,
    },
    {
      timestamp: 1620014080,
      items: [
        {
          productId: 'prod-140',
          quantity: 1,
          price: 249.99,
        },
        {
          productId: 'prod-141',
          quantity: 1,
          price: 124.99,
        },
      ],
      total: 374.98,
    },
  ],
  'Paul': [
    {
      timestamp: 1620015040,
      items: [
        {
          productId: 'prod-150',
          quantity: 1,
          price: 139.99,
        },
      ],
      total: 139.99,
    },
    {
      timestamp: 1620024070,
      items: [
        {
          productId: 'prod-150',
          quantity: 1,
          price: 139.99,
        },
        {
          productId: 'prod-151',
          quantity: 1500,
          price: 54.99,
        },
      ],
      total: 82639.49,
    },
  ],
  'Quinn': [
    {
      timestamp: 1620016060,
      items: [
        {
          productId: 'prod-160',
          quantity: 1,
          price: 109.99,
        },
      ],
      total: 109.99,
    },
    {
      timestamp: 1620016070,
      items: [
        {
          productId: 'prod-160',
          quantity: 1,
          price: 109.99,
        },
        {
          productId: 'prod-161',
          quantity: 1,
          price: 69.99,
        },
      ],
      total: 179.98,
    },
  ],
  'Rachel': [
    {
      timestamp: 1620017040,
      items: [
        {
          productId: 'prod-170',
          quantity: 1,
          price: 94.99,
        },
      ],
      total: 94.99,
    },
    {
      timestamp: 1620024080,
      items: [
        {
          productId: 'prod-170',
          quantity: 1,
          price: 94.99,
        },
        {
          productId: 'prod-171',
          quantity: 888,
          price: 44.99,
        },
      ],
      total: 40028.11,
    },
  ],
  'Sam': [
    {
      timestamp: 1620018070,
      items: [
        {
          productId: 'prod-180',
          quantity: 1,
          price: 139.99,
        },
      ],
      total: 139.99,
    },
    {
      timestamp: 1620018080,
      items: [
        {
          productId: 'prod-180',
          quantity: 1,
          price: 139.99,
        },
        {
          productId: 'prod-181',
          quantity: 1,
          price: 79.99,
        },
      ],
      total: 219.98,
    },
  ],
  'Tina': [
    {
      timestamp: 1620019040,
      items: [
        {
          productId: 'prod-190',
          quantity: 1,
          price: 119.99,
        },
      ],
      total: 119.99,
    },
    {
      timestamp: 1620024090,
      items: [
        {
          productId: 'prod-190',
          quantity: 1,
          price: 119.99,
        },
        {
          productId: 'prod-191',
          quantity: 777,
          price: 39.99,
        },
      ],
      total: 31139.22,
    },
  ],
  'Uma': [
    {
      timestamp: 1620020060,
      items: [
        {
          productId: 'prod-200',
          quantity: 1,
          price: 169.99,
        },
      ],
      total: 169.99,
    },
    {
      timestamp: 1620020070,
      items: [
        {
          productId: 'prod-200',
          quantity: 1,
          price: 169.99,
        },
        {
          productId: 'prod-201',
          quantity: 1,
          price: 94.99,
        },
      ],
      total: 264.98,
    },
  ],
  'Victor': [
    {
      timestamp: 1620021040,
      items: [
        {
          productId: 'prod-210',
          quantity: 1,
          price: 84.99,
        },
      ],
      total: 84.99,
    },
    {
      timestamp: 1620024100,
      items: [
        {
          productId: 'prod-210',
          quantity: 1,
          price: 84.99,
        },
        {
          productId: 'prod-211',
          quantity: 444,
          price: 29.99,
        },
      ],
      total: 13429.55,
    },
  ],
  'Walter': [],
  'Xander': [
    {
      timestamp: 1620022050,
      items: [
        {
          productId: 'prod-230',
          quantity: 1,
          price: 179.99,
        },
      ],
      total: 179.99,
    },
    {
      timestamp: 1620022060,
      items: [
        {
          productId: 'prod-230',
          quantity: 1,
          price: 179.99,
        },
        {
          productId: 'prod-231',
          quantity: 999,
          price: 59.99,
        },
      ],
      total: 60039.90,
    },
  ],
  'Yara': [
    {
      timestamp: 1620023010,
      items: [
        {
          productId: 'prod-240',
          quantity: 1,
          price: 299.99,
        },
      ],
      total: 299.99,
    },
  ],
};

module.exports = {
  sessionToUserMap,
  userSessionsMap,
  cartHistoryMap,
};
