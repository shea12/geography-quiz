/* eslint-disable */
const categories = {
  // first level: category
  // second level: subcategory
  // thrird level: quiz array
  CTN: {
    buttoncolor: '#F6EB8D',
    disabled: false,
    title: 'Continents',
    categories: {
      NA: {
        buttoncolor: '#F2E35D',
        title: 'North America',
        categories: {
          NACO: {
            buttoncolor: '#EFDB2E',
            title: 'Countries',
            desc: 'Can you name all 23 countries of North America?',
            quiz: true,
            path: '/NA/get-countries',
            layer: 'C_',
          },
          NACA: {
            buttoncolor: '#EFDB2E',
            title: 'Capitals',
            desc: 'Can you name all the North American capitals?',
            quiz: true,
            path: '/NA/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
          US: {
            buttoncolor: '#EFDB2E',
            title: 'United States',
            categories: {
              USST: {
                buttoncolor: '#CFBB0C',
                title: 'US States',
                desc: 'Can you name all 50 US states?',
                quiz: true,
                path: '/US/get-states',
                layer: 'ST_US_',
              },
              USCP: {
                buttoncolor: '#CFBB0C',
                title: 'US Capitals',
                desc: 'Do you know all the US state capitals?',
                quiz: true,
                path: '/US/get-states',
                cap: true,
                layer: 'STCAP_US',
              },
              USTE: {
                buttoncolor: '#CFBB0C',
                title: 'US Territories',
                desc: 'Can you name the 5 populated US territories?',
                quiz: true,
                path: '/US/get-territories',
                layer: 'USTE_',
              },
            },
          },
          MX: {
            buttoncolor: '#EFDB2E',
            title: 'Mexico',
            categories: {
              MXST: {
                buttoncolor: '#CFBB0C',
                title: 'States of Mexico',
                desc: 'Can you name all the states of Mexico?',
                quiz: true,
                path: '/MX/get-states',
                layer: 'ST_CA_',
              },
            },
          },
          CA: {
            buttoncolor: '#EFDB2E',
            title: 'Canada',
            categories: {
              CAST: {
                buttoncolor: '#CFBB0C',
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
        buttoncolor: '#F2E35D',
        title: 'South America',
        categories: {
          SACO: {
            buttoncolor: '#EFDB2E',
            title: 'Countries',
            desc: 'Can you name 12 countries of South America?',
            quiz: true,
            path: '/SA/get-countries',
            layer: 'C_',
          },
          SACA: {
            buttoncolor: '#EFDB2E',
            title: 'Capitals',
            desc: 'Can you name all the South American capitals?',
            quiz: true,
            path: '/SA/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
          BRST: {
            buttoncolor: '#EFDB2E',
            title: 'Brazil',
            desc: 'Can you name each state of Brazil?',
            quiz: true,
            path: '/BR/get-states',
            layer: 'ST_BR_',
          },
        },
      },
      AF: {
        buttoncolor: '#F2E35D',
        title: 'Africa',
        categories: {
          AFCO: {
            buttoncolor: '#EFDB2E',
            title: 'Countries',
            desc: 'Can you name all 55 countries of Africa?',
            quiz: true,
            path: '/AF/get-countries',
            layer: 'C_',
          },
          AFCA: {
            buttoncolor: '#EFDB2E',
            title: 'Capitals',
            desc: 'Can you name each capital of Africa?',
            quiz: true,
            path: '/AF/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
          ZAST: {
            buttoncolor: '#EFDB2E',
            title: 'South Africa',
            desc: 'Can you name each province of South Africa?',
            quiz: true,
            path: '/ZA/get-states',
            layer: 'ST_ZA_',
          },
        },
      },
      EU: {
        buttoncolor: '#F2E35D',
        title: 'Europe',
        categories: {
          EUCO: {
            buttoncolor: '#EFDB2E',
            title: 'Countries',
            desc: 'Can you name all 46 countries of Europe? Hint: there are 5 micro-states',
            quiz: true,
            path: '/EU/get-countries',
            layer: 'C_',
          },
          EUCA: {
            buttoncolor: '#EFDB2E',
            title: 'Capitals',
            desc: 'Can you name all the capitals of Europe?',
            quiz: true,
            path: '/EU/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
          GBST: {
            buttoncolor: '#EFDB2E',
            title: 'United Kingdom',
            desc: 'Can you name the 4 countries that comprise the United Kingdom?',
            quiz: true,
            path: '/GB/get-states',
            layer: 'ST_GB_',
          },
        },
      },
      AS: {
        buttoncolor: '#F2E35D',
        title: 'Asia',
        categories: {
          ASCO: {
            buttoncolor: '#EFDB2E',
            title: 'Countries',
            desc: 'Can you name all countries of Asia?',
            quiz: true,
            path: '/AS/get-countries',
            layer: 'C_',
          },
          ASCA: {
            buttoncolor: '#EFDB2E',
            title: 'Capitals',
            desc: 'Can you name all the capitals of Asia?',
            quiz: true,
            path: '/AS/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
          JPST: {
            buttoncolor: '#EFDB2E',
            title: 'Japan',
            desc: 'Can you name each of the 4 main Japanese islands?',
            quiz: true,
            path: '/JP/get-states',
            layer: 'ST_JP_',
          },
        },
      },
      OC: {
        buttoncolor: '#F2E35D',
        title: 'Oceania',
        categories: {
          OCCO: {
            buttoncolor: '#EFDB2E',
            title: 'Countries',
            desc: 'Can you name all countries of Oceania?',
            quiz: true,
            path: '/OC/get-countries',
            layer: 'C_',
          },
          OCCA: {
            buttoncolor: '#EFDB2E',
            title: 'Capitals',
            desc: 'Can you name all the capitals of Oceania?',
            quiz: true,
            path: '/OC/get-countries',
            cap: true,
            layer: 'CCAP_',
          },
          AUST: {
            buttoncolor: '#EFDB2E',
            title: 'Australia',
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
    buttoncolor: '#A1B0FB', // purple
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
    buttoncolor: '#F5B95F', // orange
    title: 'World Leaders',
    disabled: false,
    desc: 'Can you identify the leader of each G20 country? Note: there are 19 countries in this quiz, the collective EU is the 20th of the G20',
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
    disabled: true,
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
