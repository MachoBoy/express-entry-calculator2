const PartASource = {
  WITHSPOUSE_AGE_HEADER: ['factor', 'With a spouse or common-law partner'],

  WITHOUTSPOUSE_AGE_HEADER: [
    'factor',
    'Without a spouse or common-law partner'
  ],

  WITHSPOUSE_EDU_HEADER: [
    'Level of Education',
    'With a spouse or common-law partner'
  ],

  WITHOUTSPOUSE_EDU_HEADER: [
    'Level of Education',
    'Without a spouse or common-law partner'
  ],

  WITHSPOUSE_LANG_HEADER: [
    'Canadian Language Benchmark (CLB) level per ability',
    'With a spouse or common-law partner'
  ],

  WITHOUTSPOUSE_LANG_HEADER: [
    'Canadian Language Benchmark (CLB) level per ability',
    'Without a spouse or common-law partner'
  ],

  WITHPOUSE_WORK_HEADER: [
    'Canadian work experience',
    'With a spouse or common-law partner'
  ],

  WITHOUTSPOUSE_WORK_HEADER: [
    'Canadian work experience',
    'Without a spouse or common-law partner'
  ],

  WITHSPOUSE_AGE_DATA: [
    { key: '17', text: '17 years of age or less', value: 0 },
    { key: '18', text: '18 years of age', value: 90 },
    { key: '19', text: '19 years of age', value: 95 },
    { text: '20 to 29 years of age', value: 100 },
    { text: '30 years of age', value: 95 },
    { text: '31 years of age', value: 90 },
    { text: '32 years of age', value: 85 },
    { text: '33 years of age', value: 80 },
    { text: '34 years of age', value: 75 },
    { text: '35 years of age', value: 70 },
    { text: '36 years of age', value: 65 },
    { text: '37 years of age', value: 60 },
    { text: '38 years of age', value: 55 },
    { text: '39 years of age', value: 50 },
    { text: '40 years of age', value: 45 },
    { text: '41 years of age', value: 35 },
    { text: '42 years of age', value: 25 },
    { text: '43 years of age', value: 15 },
    { text: '44 years of age', value: 5 },
    { text: '45 years of age or more', value: 0 }
  ],

  WITHOUTSPOUSE_AGE_DATA: [
    { key: '20', text: '17 years of age or less', value: 0 }, //0
    { key: '21', text: '18 years of age', value: 99 }, //99
    { key: '22', text: '19 years of age', value: 105 }, //105
    { text: '20 to 29 years of age', value: 110 },
    { text: '30 years of age', value: 105 },
    { text: '31 years of age', value: 99 },
    { text: '32 years of age', value: 94 },
    { text: '33 years of age', value: 88 },
    { text: '34 years of age', value: 83 },
    { text: '35 years of age', value: 77 },
    { text: '36 years of age', value: 72 },
    { text: '37 years of age', value: 66 },
    { text: '38 years of age', value: 61 },
    { text: '39 years of age', value: 55 },
    { text: '40 years of age', value: 50 },
    { text: '41 years of age', value: 39 },
    { text: '42 years of age', value: 28 },
    { text: '43 years of age', value: 17 },
    { text: '44 years of age', value: 6 },
    { text: '45 years of age or more', value: 0 }
  ],

  WITHOUTSPOUSE_EDU_DATA: [
    { text: 'Less than secondary school (high school)', value: '0' },
    { text: 'Secondary diploma (high school graduation)', value: 30 },
    {
      text:
        'One-year degree, diploma or certificate from a university, college, trade or technical school, or other institute',
      value: 90
    },
    {
      text:
        'Two-year program at a university, college, trade or technical school, or other institute',
      value: 98
    },
    {
      text:
        "Bachelor's degree OR a three or more year program at a university, college, trade or technical school, or other institute",
      value: 120
    },
    {
      text:
        'Two or more certificates, diplomas, or degrees. One must be for a program of three or more years',
      value: 128
    },
    {
      text:
        "Master's degree, OR professional degree needed to practice in a licensed profession (For “professional degree,” the degree program must have been in: medicine, veterinary medicine, dentistry, optometry, law, chiropractic medicine, or pharmacy.)",
      value: 135
    },
    { text: 'Doctoral level university degree (Ph.D.)', value: 150 }
  ],

  WITHSPOUSE_EDU_DATA: [
    { text: 'Less than secondary school (high school)', value: 0 },
    { text: 'Secondary diploma (high school graduation)', value: 28 },
    {
      text:
        'One-year degree, diploma or certificate from a university, college, trade or technical school, or other institute',
      value: 84
    },
    {
      text:
        'Two-year program at a university, college, trade or technical school, or other institute',
      value: 91
    },
    {
      text:
        "Bachelor's degree OR a three or more year program at a university, college, trade or technical school, or other institute",
      value: 112
    },
    {
      text:
        'Two or more certificates, diplomas, or degrees. One must be for a program of three or more years',
      value: 119
    },
    {
      text:
        "Master's degree, OR professional degree needed to practice in a licensed profession (For “professional degree,” the degree program must have been in: medicine, veterinary medicine, dentistry, optometry, law, chiropractic medicine, or pharmacy.)",
      value: 126
    },
    { text: 'Doctoral level university degree (Ph.D.)', value: 140 }
  ],

  WITHSPOUSE_LANG_FIRST_DATA: [
    { text: 'Less than CLB 4', value: 0 },
    { text: 'Less than CLB 4 or 5', value: 6 },
    { text: 'Less than CLB 6', value: 8 },
    { text: 'Less than CLB 7', value: 16 },
    { text: 'Less than CLB 8', value: 22 },
    { text: 'Less than CLB 9', value: 29 },
    { text: 'Less than CLB 10 or more', value: 32 }
  ],

  WITHOUTSPOUSE_LANG_FIRST_DATA: [
    { text: 'Less than CLB 4', value: 0 },
    { text: 'Less than CLB 4 or 5', value: 6 },
    { text: 'Less than CLB 6', value: 8 },
    { text: 'Less than CLB 7', value: 16 },
    { text: 'Less than CLB 8', value: 22 },
    { text: 'Less than CLB 9', value: 29 },
    { text: 'Less than CLB 10 or more', value: 32 }
  ],

  WITHSPOUSE_LANG_SECOND_DATA: [
    { text: 'Less than CLB 4', value: 0 },
    { text: 'Less than CLB 5 or 6', value: 1 },
    { text: 'Less than CLB 7 or 8', value: 3 },
    { text: 'Less than CLB 9 or more', value: 6 }
  ],

  WITHOUTSPOUSE_LANG_SECOND_DATA: [
    { text: 'Less than CLB 4', value: 0 },
    { text: 'Less than CLB 5 or 6', value: 1 },
    { text: 'Less than CLB 7 or 8', value: 3 },
    { text: 'Less than CLB 9 or more', value: 6 }
  ],

  WITHSPOUSE_WORK_DATA: [
    { text: 'None or less than a year', value: 0 },
    { text: '1 year', value: 35 },
    { text: '2 year', value: 46 },
    { text: '3 year', value: 56 },
    { text: '4 year', value: 63 },
    { text: '5 year', value: 70 }
  ],

  WITHOUTSPOUSE_WORK_DATA: [
    { text: 'None or less than a year', value: 0 },
    { text: '1 year', value: 40 },
    { text: '2 year', value: 53 },
    { text: '3 year', value: 64 },
    { text: '4 year', value: 72 },
    { text: '5 year', value: 80 }
  ]
};

export default PartASource;
