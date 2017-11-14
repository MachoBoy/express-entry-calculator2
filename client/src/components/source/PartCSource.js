const PartCSource = {
  EDU_HEADER_1: [
    'With good official language proficiency (Canadian Language Benchmark Level [CLB] 7 or higher) and a post-secondary degree',
    'points for CLB 7 or more on all first official language abilities, with one or more under CLB 9',
    'points for CLB 9 or more on all four first official language abilities'
  ],

  EDU_HEADER_2: [
    'With Canadian work experience and a post-secondary degree',
    'points for education + 1 year of Canadian work experience',
    'points for education + 2 years or more of Canadian work experience'
  ],

  FWE_HEADER_1: [
    'Years of experience',
    'points for foreign work experience + CLB 7 or more on all first official language abilities, one or more under 9',
    'points for foreign work experience + CLB 9 or more on all four first official language abilities'
  ],

  FWE_HEADER_2: [
    'Years of experience',
    'points for foreign work experience + 1 year of Canadian work experience',
    'points for foreign work experience + 2 years or more of Canadian work experience'
  ],

  COQ_HEADER: [
    'Certificate of qualification (trade occupations) – With good official language proficiency (Canadian Language Benchmark Level [CLB] 5 or higher)',
    'points for certificate of qualification + CLB 5 or more on all first official language abilities, one or more under 7',
    'points for certificate of qualification + CLB 7 or more on all four first official language abilities'
  ],

  EDU_DATA: [
    {
      factor: 'Secondary school (high school) credential or less',
      value: 0,
      value2: 0
    },
    {
      factor: 'Post-secondary program credential of one year or longer',
      value: 13,
      value2: 25
    },
    {
      factor:
        'Two or more post-secondary program credentials AND at least one of these credentials was issued on completion of a post-secondary program of three years or longer',
      value: 25,
      value2: 50
    }
  ],

  FWE_DATA: [
    { factor: 'No foreign work experience', value: 0, value2: 0 },
    {
      factor: '1 or 2 years of foreign work experience',
      value: 13,
      value2: 25
    },
    {
      factor: '3 years or more of foreign work experience',
      value: 25,
      value2: 50
    }
  ],

  COQ_DATA: [
    { factor: 'With a certificate of qualification', value: 25, value2: 50 }
  ]
};
export default PartCSource;
