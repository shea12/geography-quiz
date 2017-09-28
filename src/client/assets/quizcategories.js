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
            title: 'Countries',
            desc: 'Can you name all 23 countries of North America? Hint: zoom in on the Caribbean Sea',
            quiz: true,
            path: '/NA/get-countries',
            layer: 'C_',
          },
          NACA: {
            title: 'Capitals',
            desc: 'Can you name all the capitals?',
            quiz: true,
            path: '/NA/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
          US: {
            title: 'United States',
            categories: {
              USST: {
                title: 'US States',
                desc: 'Can you name all 50 states?',
                quiz: true,
                path: '/US/get-states',
                layer: 'ST_US_',
              },
              USTE: {
                title: 'US Territories',
                desc: 'Can you name the 5 populated US territories?',
                quiz: true,
                path: '/US/get-territories',
                layer: 'USTE_',
              },
              USCP: {
                title: 'US Capitals',
                desc: 'Do you know all the US state capitals?',
                quiz: true,
                path: '/US/get-states',
                cap: true,
                layer: 'STCAP_US',
              },
            },
          },
          MX: {
            title: 'Mexico',
            categories: {
              MXST: {
                title: 'States of Mexico',
                desc: 'Can you name all the states of Mexico?',
                quiz: true,
                path: '/MX/get-states',
                layer: 'ST_CA_',
              },
            },
          },
          CA: {
            title: 'Canada',
            categories: {
              CAST: {
                title: 'Provinces of Canada',
                desc: 'Can you name all provinces of Canada?',
                quiz: true,
                path: '/CA/get-states',
                layer: 'ST_CA_',
              },
            },
          },
        },
      },
      SA: {
        buttoncolor: '#f78680',
        title: 'South America',
        categories: {
          SACO: {
            title: 'Countries',
            desc: 'Can you name 12 countries of South America?',
            quiz: true,
            path: '/SA/get-countries',
            layer: 'C_',
          },
          SACA: {
            title: 'Capitals',
            desc: 'Can you name all the capitals of the 12 South American countries?',
            quiz: true,
            path: '/SA/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
          BRST: {
            title: 'Brazil',
            desc: 'Can you name each state of Brazil?',
            quiz: true,
            path: '/BR/get-states',
            layer: 'ST_BR_',
          },
        },
      },
      AF: {
        buttoncolor: '#f78680',
        title: 'Africa',
        categories: {
          AFCO: {
            title: 'Countries',
            desc: 'Can you name all 55 countries of Africa?',
            quiz: true,
            path: '/AF/get-countries',
            layer: 'C_',
          },
          AFCA: {
            title: 'Capitals',
            desc: 'Can you name each country capital?',
            quiz: true,
            path: '/AF/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
          ZAST: {
            title: 'South Africa',
            desc: 'Can you name each province of South Africa?',
            quiz: true,
            path: '/ZA/get-states',
            layer: 'ST_ZA_',
          },
        },
      },
      EU: {
        buttoncolor: '#f78680',
        title: 'Europe',
        categories: {
          EUCO: {
            title: 'Countries',
            desc: 'Can you name all 46 countries of Europe? Hint: there are 5 micro-states',
            quiz: true,
            path: '/EU/get-countries',
            layer: 'C_',
          },
          EUCA: {
            title: 'Capitals',
            desc: 'Can you name every european capital?',
            quiz: true,
            path: '/EU/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
          GBST: {
            title: 'Countries of the UK',
            desc: 'Can you name all 4 countries of the United Kingdom?',
            quiz: true,
            path: '/GB/get-countries',
            layer: 'ST_GB_',
          },
        },
      },
      AS: {
        buttoncolor: '#f78680',
        title: 'Asia',
        categories: {
          ASCO: {
            title: 'Countries',
            desc: 'Can you name all countries of Asia?',
            quiz: true,
            path: '/AS/get-countries',
            layer: 'C_',
          },
          ASCA: {
            title: 'Capitals',
            desc: 'Can you name all the capitals?',
            quiz: true,
            path: '/AS/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
          JPST: {
            title: 'Japan',
            desc: 'Can you name each of the 4 main Japanese islands?',
            quiz: true,
            path: '/JP/get-states',
            layer: 'ST_JP_',
          },
        },
      },
      OC: {
        buttoncolor: '#f78680',
        title: 'Oceania',
        categories: {
          OCCO: {
            title: 'Countries',
            desc: 'Can you name all countries of Oceania?',
            quiz: true,
            path: '/OC/get-countries',
            layer: 'C_',
          },
          OCCA: {
            title: 'Capitals',
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
  BW: {
    buttoncolor: '#c2e59e', // light green
    title: 'Bodies of Water',
    disabled: false,
    desc: 'Can you name these 29 major bodies of water around the world?',
    quiz: true,
    path: '/get-bodies-of-water',
    layer: 'BW_',
    // categories: {
    //   BW: {
    //     buttoncolor: '#87e079', // change this
    //     title: 'Random Body of Water',
    //   },
    // },
  },
  LF: {
    buttoncolor: '#e5d55b', // yellow
    title: 'Landmarks',
    disabled: false,
    desc: 'Can you name each of these world landmarks?',
    quiz: true,
    path:'/get-landmarks',
    layer: 'LM_',
    // categories: {
    //   LF: {
    //     title: 'Major Landforms',
    //     desc: 'Can you name each of these notable landforms?',
    //     quiz: true,
    //     path:'/not-available',
    //   },
    // },
  },
  LR: {
    buttoncolor: '#eda553', // orange
    title: 'World Leaders',
    disabled: false,
    desc: 'Can you identify the leader of each G20 country? Note: there are 19 countries in this quiz, the EU is the 20th of the G20',
    quiz: true,
    path:'/get-g20-leaders',
    layer: 'C_',
    // categories: {
    //   LS: {
    //     title: 'Leaders of the World',
    //     desc: 'Can you identify the leader of each of these countries?',
    //     quiz: true,
    //     path:'/not-available',
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
}

module.exports = categories
