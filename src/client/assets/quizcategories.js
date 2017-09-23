/* eslint-disable */
const categories = {
  // first level: category
  // second level: subcategory
  // thrird level: quiz array
  CTN: {
    title: 'Countries & Capitals',
    categories: {
      NA: {
        title: 'North America',
        categories: {
          NACO: {
            title: 'Countries of North America',
            quiz: true,
            path: '/NA/get-countries',
            layer: '_LABEL',
          },
          NACA: {
            title: 'Capitals of North America',
            quiz: true,
            path: '/NA/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
          USST: {
            title: 'States of USA',
            quiz: true,
            path: '/US/get-states',
            layer: 'USST_',
          },
          USCP: {
            title: 'Capitals of USA',
            quiz: true,
            path: '/US/get-states',
            cap: true,
            layer: 'USSTCAP_',
          },
          MXST: {
            title: 'States of Mexico',
            quiz: true,
            path: '/MX/get-states',
            layer: 'MXST_',
          },
          CAST: {
            title: 'Provinces of Canada',
            quiz: true,
            path: '/CA/get-states',
            layer: 'CAST_',
          },
        },
      },
      SA: {
        title: 'South America',
        categories: {
          SACO: {
            title: 'Countries of South America',
            quiz: true,
            path: '/SA/get-countries',
            layer: '_LABEL',
          },
          SACA: {
            title: 'Capitals of South America',
            quiz: true,
            path: '/SA/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
        },
      },
      AF: {
        title: 'Africa',
        categories: {
          AFCO: {
            title: 'Countries of Africa',
            quiz: true,
            path: '/AF/get-countries',
            layer: '_LABEL',
          },
          AFCA: {
            title: 'Capitals of Africa',
            quiz: true,
            path: '/AF/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
          ZAST: {
            title: 'States of South Africa',
            quiz: true,
            path: '/ZA/get-states',
            layer: 'ZAST_',
          },
        },
      },
      EU: {
        title: 'Europe',
        categories: {
          EUCO: {
            title: 'Countries of Europe',
            quiz: true,
            path: '/EU/get-countries',
            layer: '_LABEL',
          },
          EUCA: {
            title: 'Capitals of Europe',
            quiz: true,
            path: '/EU/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
          GBST: {
            title: 'States of Great Britain',
            quiz: true,
            path: '/GB/get-countries',
            layer: 'GBST_',
          },
        },
      },
      AS: {
        title: 'Asia',
        categories: {
          ASCO: {
            title: 'Countries of Asia',
            quiz: true,
            path: '/AS/get-countries',
            layer: '_LABEL',
          },
          ASCA: {
            title: 'Capitals of Asia',
            quiz: true,
            path: '/AS/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
        },
      },
      OC: {
        title: 'Oceania',
        categories: {
          OCCO: {
            title: 'Countries of Oceania',
            quiz: true,
            path: '/OC/get-countries',
            layer: '_LABEL',
          },
          OCCA: {
            title: 'Capitals of Oceania',
            quiz: true,
            path: '/OC/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
          AUST: {
            title: 'States of Australia',
            quiz: true,
            path: '/AU/get-states',
            layer: 'AUST_',
          },
        },
      },
    },
  },
  BOW: {
    title: 'Bodies of Water',
    categories: {
      BW: {
        title: '29 Major Bodies of Water',
        quiz: true,
        path: '/get-bodies-of-water',
        layer: '_LABEL',
      },
    },
  },
  GTC: {
    title: 'Guess the City',
    categories: {
      GC: {
        title: 'City Guesser', 
        quiz: true,
        path:'/not-available',
      },
    },
  },
  LDF: {
    title: 'Landforms',
    categories: {
      LF: {
        title: 'Major Landforms',
        quiz: true,
        path:'/not-available',
      },
    },
  },
  LRS: {
    title: 'World Leaders',
    categories: {
      LS: {
        title: 'Leaders of the World',
        quiz: true,
        path:'/not-available',
      },
    },
  },
}

module.exports = categories