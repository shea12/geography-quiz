/* eslint-disable */
const categories = {
  // first level: category
  // second level: subcategory
  // thrird level: quiz array
  CTN: {
    buttoncolor: '#f2baba', // light red
    disabled: false,
    title: 'Countries & Capitals',
    categories: {
      NA: {
        buttoncolor: '#f78680',
        title: 'North America',
        categories: {
          NACO: {
            title: 'Countries of N. America',
            desc: 'Can you name all 23 countries of North America? Hint: there are a lot of tiny Caribbean islands',
            quiz: true,
            path: '/NA/get-countries',
            layer: '_LABEL',
          },
          NACA: {
            title: 'Capitals of N. America',
            desc: 'Can you name all the capitals?',
            quiz: true,
            path: '/NA/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
          USST: {
            title: 'States of USA',
            desc: 'Can you name all 50 states?',
            quiz: true,
            path: '/US/get-states',
            layer: 'USST_',
          },
          USCP: {
            title: 'Capitals of USA',
            desc: 'Do you know all the US state capitals?',
            quiz: true,
            path: '/US/get-states',
            cap: true,
            layer: 'USSTCAP_',
          },
          MXST: {
            title: 'States of Mexico',
            desc: 'Can you name all the states of Mexico?',
            quiz: true,
            path: '/MX/get-states',
            layer: 'MXST_',
          },
          CAST: {
            title: 'Provinces of Canada',
            desc: 'Can you name all provinces of Canada?',
            quiz: true,
            path: '/CA/get-states',
            layer: 'CAST_',
          },
        },
      },
      SA: {
        buttoncolor: '#f78680',
        title: 'South America',
        categories: {
          SACO: {
            title: 'Countries of S. America',
            desc: 'Can you name 12 countries of South America?',
            quiz: true,
            path: '/SA/get-countries',
            layer: '_LABEL',
          },
          SACA: {
            title: 'Capitals of S. America',
            desc: 'Can you name all the capitals of the 12 South American countries?',
            quiz: true,
            path: '/SA/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
        },
      },
      AF: {
        buttoncolor: '#f78680',
        title: 'Africa',
        categories: {
          AFCO: {
            title: 'Countries of Africa',
            desc: 'Can you name all 55 countries of Africa? Hint: spelling counts',
            quiz: true,
            path: '/AF/get-countries',
            layer: '_LABEL',
          },
          AFCA: {
            title: 'Capitals of Africa',
            desc: 'Can you name each country capital?',
            quiz: true,
            path: '/AF/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
          ZAST: {
            title: 'States of South Africa',
            desc: 'Can you name each state of South Africa?',
            quiz: true,
            path: '/ZA/get-states',
            layer: 'ZAST_',
          },
        },
      },
      EU: {
        buttoncolor: '#f78680',
        title: 'Europe',
        categories: {
          EUCO: {
            title: 'Countries of Europe',
            desc: 'Can you name all 46 countries of Europe? Hint: there are 5 micro-states',
            quiz: true,
            path: '/EU/get-countries',
            layer: '_LABEL',
          },
          EUCA: {
            title: 'Capitals of Europe',
            desc: 'Can you name every european capital?',
            quiz: true,
            path: '/EU/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
          GBST: {
            title: 'States of the UK',
            desc: 'Can you name all 4 countries of the United Kingdom?',
            quiz: true,
            path: '/GB/get-countries',
            layer: 'GBST_',
          },
        },
      },
      AS: {
        buttoncolor: '#f78680',
        title: 'Asia',
        categories: {
          ASCO: {
            title: 'Countries of Asia',
            desc: 'Can you name all countries of Asia?',
            quiz: true,
            path: '/AS/get-countries',
            layer: '_LABEL',
          },
          ASCA: {
            title: 'Capitals of Asia',
            desc: 'Can you name all the capitals?',
            quiz: true,
            path: '/AS/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
        },
      },
      OC: {
        buttoncolor: '#f78680',
        title: 'Oceania',
        categories: {
          OCCO: {
            title: 'Countries of Oceania',
            desc: 'Can you name all countries of Oceania? Hint: lots of tiny islands',
            quiz: true,
            path: '/OC/get-countries',
            layer: '_LABEL',
          },
          OCCA: {
            title: 'Capitals of Oceania',
            desc: 'Can you name all the capitals?',
            quiz: true,
            path: '/OC/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
          AUST: {
            title: 'States of Australia',
            desc: 'Can you name all 6 states of Australia?',
            quiz: true,
            path: '/AU/get-states',
            layer: 'AUST_',
          },
        },
      },
    },
  },
  BOW: {
    buttoncolor: '#c2e59e', // light green
    title: 'Bodies of Water',
    disabled: false,
    desc: 'Can you name these 29 major bodies of water around the world?',
    quiz: true,
    path: '/get-bodies-of-water',
    layer: '_LABEL',
    // categories: {
    //   BW: {
    //     buttoncolor: '#87e079', // change this
    //     title: 'Random Body of Water',
    //   },
    // },
  },
  GTC: {
    buttoncolor: '#c7b6ed', // light purple
    title: 'Guess the City',
    disabled: false,
    desc: 'Can you identify the city?',
    quiz: true,
    path:'/not-available',
    // categories: {
    //   GC: {
    //     title: 'City Guesser',
    //     desc: 'Can you identify the city?',
    //     quiz: true,
    //     path:'/not-available',
    //   },
    // },
  },
  LDF: {
    buttoncolor: '#e5d55b', // yellow
    title: 'Landforms',
    disabled: false,
    desc: 'Can you name each of these notable landforms?',
    quiz: true,
    path:'/not-available',
    // categories: {
    //   LF: {
    //     title: 'Major Landforms',
    //     desc: 'Can you name each of these notable landforms?',
    //     quiz: true,
    //     path:'/not-available',
    //   },
    // },
  },
  LRS: {
    buttoncolor: '#eda553', // orange
    title: 'World Leaders',
    disabled: false,
    desc: 'Can you identify the leader of each of these countries?',
    quiz: true,
    path:'/not-available',
    // categories: {
    //   LS: {
    //     title: 'Leaders of the World',
    //     desc: 'Can you identify the leader of each of these countries?',
    //     quiz: true,
    //     path:'/not-available',
    //   },
    // },
  },
}

module.exports = categories
