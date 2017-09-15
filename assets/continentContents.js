const CONTINENTS = {
  NA: {
    name: 'North America',
    lonlat: [-68.56, 35.7],
    zoom: 3.16,
    countries: [
      {
        abbrv: 'US',
        name: 'the United States',
        cap: 'Washington',
        lonlat: [-95.784,39.01],
        zoom: 4,
        states: [
          {abbrv: 'AL', name: 'Alabama', cap: 'Montgomery'},
          {abbrv: 'AK', name: 'Alaska', cap: 'Juneau'},
          {abbrv: 'AR', name: 'Arkansas', cap: 'Little Rock'},
          {abbrv: 'AZ', name: 'Arizona', cap: 'Phoenix'},
          {abbrv: 'CA', name: 'California', cap: 'Sacramento'},
          {abbrv: 'CO', name: 'Colorado', cap: 'Denver'},
          {abbrv: 'CT', name: 'Connecticut', cap: 'Hartford'},
          {abbrv: 'DE', name: 'Delaware', cap: 'Dover'},
          {abbrv: 'FL', name: 'Florida', cap: 'Tallahassee'},
          {abbrv: 'GA', name: 'Georgia', cap: 'Atlanta'}, 
          {abbrv: 'HI', name: 'Hawaii', cap: 'Honolulu'},
          {abbrv: 'IA', name: 'Iowa', cap: 'Des Moines'},
          {abbrv: 'ID', name: 'Idaho', cap: 'Boise'},
          {abbrv: 'IL', name: 'Illinois', cap: 'Springfield'},
          {abbrv: 'IN', name: 'Indiana', cap: 'Indianapolis'}, 
          {abbrv: 'KS', name: 'Kansas', cap: 'Topeka'},
          {abbrv: 'KY', name: 'Kentucky', cap: 'Frankfort'},
          {abbrv: 'LA', name: 'Louisiana', cap: 'Baton Rouge'},
          {abbrv: 'MA', name: 'Massachusetts', cap: 'Boston'},
          {abbrv: 'MD', name: 'Maryland', cap: 'Annapolis'},
          {abbrv: 'ME', name: 'Maine', cap: 'Augusta'},
          {abbrv: 'MI', name: 'Michigan', cap: 'Lansing'},
          {abbrv: 'MN', name: 'Minnesota', cap: 'Saint Paul'},
          {abbrv: 'MO', name: 'Missouri', cap: 'Jefferson City'},
          {abbrv: 'MS', name: 'Mississippi', cap: 'Jackson'},
          {abbrv: 'MT', name: 'Montana', cap: 'Helena'},
          {abbrv: 'NC', name: 'North Carolina', cap: 'Raleigh'},
          {abbrv: 'ND', name: 'North Dakota', cap: 'Bismark'},
          {abbrv: 'NE', name: 'Nebraska', cap: 'Lincoln'},
          {abbrv: 'NH', name: 'New Hampshire', cap: 'Concord'},
          {abbrv: 'NJ', name: 'New Jersey', cap: 'Trenton'},
          {abbrv: 'NM', name: 'New Mexico', cap: 'Santa Fe'}, 
          {abbrv: 'NV', name: 'Nevada', cap: 'Carson City'},
          {abbrv: 'NY', name: 'New York', cap: 'Albany'},
          {abbrv: 'OH', name: 'Ohio', cap: 'Columbus'},
          {abbrv: 'OK', name: 'Oklahoma', cap: 'Oklahoma City'}, 
          {abbrv: 'OR', name: 'Oregon', cap: 'Salem'},
          {abbrv: 'PA', name: 'Pennsylvania', cap: 'Harrisburg'},
          {abbrv: 'RI', name: 'Rhode Island', cap: 'Providence'},
          {abbrv: 'SC', name: 'South Carolina', cap: 'Columbia'},
          {abbrv: 'SD', name: 'South Dakota', cap: 'Pierre'},
          {abbrv: 'TN', name: 'Tennessee', cap: 'Nashville'},
          {abbrv: 'TX', name: 'Texas', cap: 'Austin'},
          {abbrv: 'UT', name: 'Utah', cap: 'Salt Lake City'},
          {abbrv: 'VA', name: 'Virginia', cap: 'Richmond'},
          {abbrv: 'VT', name: 'Vermont', cap: 'Montpelier'},
          {abbrv: 'WA', name: 'Washington', cap: 'Olympia'},
          {abbrv: 'WI', name: 'Wisconsin', cap: 'Madison'},
          {abbrv: 'WV', name: 'West Virginia', cap: 'Charleston'},
          {abbrv: 'WY', name: 'Wyoming', cap: 'Cheyenne'},
        ],
      },
      {
        abbrv: 'MX',
        name: 'Mexico',
        cap: 'Mexico City',
        lonlat: [-100.13,25.061],
        zoom: 4.68,
        states: [
          {abbrv: 'AGS', name: 'Aguascalientes', cap: 'Aguascalientes'},
          {abbrv: 'BC',  name: 'Baja California', cap: 'Mexicali'},
          {abbrv: 'BCS', name: 'Baja California Sur', cap: 'La Paz'},
          {abbrv: 'CAM', name: 'Campeche', cap: 'San Francisco de Campeche'},
          {abbrv: 'CHP', name: 'Chiapas', cap: 'Tuxtla Gutierrez'},
          {abbrv: 'CHH', name: 'Chihuahua', cap: 'Chihuahua'},
          {abbrv: 'COA', name: 'Coahuila', cap: 'Saltillo'},
          {abbrv: 'COL', name: 'Colima', cap: 'Colima'},
          {abbrv: 'DF',  name: 'Distrito Federal', cap: 'Mexico City'},
          {abbrv: 'DUR', name: 'Durango', cap: 'Victoria de Durango'},
          {abbrv: 'GTO', name: 'Guanajuato', cap: 'Guanajuato'},
          {abbrv: 'GRO', name: 'Guerrero', cap: 'Chilpancingo de los Bravo'},
          {abbrv: 'HDG', name: 'Hidalgo', cap: 'Pachuca'},
          {abbrv: 'JAL', name: 'Jalisco', cap: 'Guadalajara'},
          {abbrv: 'MIC', name: 'Michoacán', cap: 'Morelia'},
          {abbrv: 'MOR', name: 'Morelos', cap: 'Cuernavaca'},
          {abbrv: 'NAY', name: 'Nayarit', cap: 'Tepic'},
          {abbrv: 'NL',  name: 'Nuevo León', cap: 'Monterrey'},
          {abbrv: 'OAX', name: 'Oaxaca', cap: 'Oaxaca de Juarez'},
          {abbrv: 'PUE', name: 'Puebla', cap: 'Puebla de Zaragoza'},
          {abbrv: 'QUE', name: 'Querétaro', cap: 'Santiago de Querétaro'},
          {abbrv: 'QR',  name: 'Quintana Roo', cap: 'Chetumal'},
          {abbrv: 'SLP', name: 'San Luis Potosi', cap: 'Saint Luis Potosi'},
          {abbrv: 'SIN', name: 'Sinaloa', cap: 'Culiacan'},
          {abbrv: 'SON', name: 'Sonora', cap: 'Hermosillo'},
          {abbrv: 'TAB', name: 'Tabasco', cap: 'Villahermosa'},
          {abbrv: 'TAM', name: 'Tamaulipas', cap: 'Cuidad Victoria'},
          {abbrv: 'TLA', name: 'Tlaxcala', cap: 'Tlaxcala'},
          {abbrv: 'VER', name: 'Veracruz', cap: 'Xalapa'},
          {abbrv: 'YUC', name: 'Yucatán', cap: 'Merida'},
          {abbrv: 'ZAC', name: 'Zacatecas', cap: 'Zacatecas'},
        ],
      },
      {
        abbrv: 'CA',
        name: 'Canada',
        cap: 'Ottawa',
        lonlat: [-93.84,56.75],
        zoom: 3.61,
        states: [
          {name: 'Alberta', cap: 'Edmonton', abbrv: 'AB'},
          {name: 'British Columbia', cap: 'Victoria', abbrv: 'BC'},
          {name: 'Manitoba', cap: 'Winnipeg', abbrv: 'MB'},
          {name: 'New Brunswick', cap: 'Fredericton', abbrv: 'NB'},
          {name: 'Newfoundland', cap: 'St. Johns', abbrv: 'NL'},
          {name: 'Northwest Territories', cap: 'Yellowknife', abbrv: 'NT'},
          {name: 'Nova Scotia', cap: 'Halifax', abbrv: 'NS'},
          {name: 'Nunavut', cap: 'Iqaluit', abbrv: 'NU'},
          {name: 'Ontario', cap: 'Toronto', abbrv: 'ON'},
          {name: 'Prince Edward Island', cap: 'Charlottetown', abbrv: 'PE'},
          {name: 'Quebec', cap: 'Quebec City', abbrv: 'QC'},
          {name: 'Saskatchewan', cap: 'Regina', abbrv: 'SK'},
          {name: 'Yukon', cap: 'Whitehorse', abbrv: 'YT'},
        ],
      },
      {
        abbrv: 'AG',
        name: 'Antigua and Barbuda',
        cap: 'St. Johns',
        states: [],
      },
      {
        abbrv: 'BS',
        name: 'Bahamas',
        cap: 'Nassau',
        states: [],
      },
      {
        abbrv: 'BB',
        name: 'Barbados',
        cap: 'Bridgetown',
        states: [],
      },
      {
        abbrv: 'BZ',
        name: 'Belize',
        cap: 'Belmopan',
        states: [],
      },
      {
        abbrv: 'CR',
        name: 'Costa Rica',
        cap: 'San Jose',
        states: [],
      },
      {
        abbrv: 'CU',
        name: 'Cuba',
        cap: 'Havana',
        states: [],
      },
      {
        abbrv: 'DO',
        name: 'Dominican Republic',
        cap: 'Santo Domingo',
        states: [],
      },
      {
        abbrv: 'DM',
        name: 'Dominica',
        cap: 'Roseau',
        states: [],
      },
      {
        abbrv: 'SV',
        name: 'El Salvador',
        cap: 'San Salvador',
        states: [],
      },
      {
        abbrv: 'GD',
        name: 'Grenada',
        cap: 'St. George',
        states: [],
      },
      {
        abbrv: 'HT',
        name: 'Haiti',
        cap: 'Port-au-Prince',
        states: [],
      },
      {
        abbrv: 'GT',
        name: 'Guatemala',
        cap: 'Guatemala City',
        states: [],
      },
      {
        abbrv: 'HN',
        name: 'Honduras',
        cap: 'Tegucigalpa',
        states: [],
      },
      {
        abbrv: 'JM',
        name: 'Jamaica',
        cap: 'Kingston',
        states: [],
      },
      {
        abbrv: 'NI',
        name: 'Nicaragua',
        cap: 'Managua',
        states: {},
      },
      {
        abbrv: 'PA',
        name: 'Panama',
        cap: 'Panama City',
        states: {},
      },
      {
        abbrv: 'KN',
        name: 'Saint Kitts and Nevis',
        cap: 'Basseterre',
        states: {},
      },
      {
        abbrv: 'LC',
        name: 'Saint Lucia',
        cap: 'Castries',
        states: {},
      },
      {
        abbrv: 'VC',
        name: 'Saint Vincent and the Grenadines',
        cap: 'Kingstown',
        states: {},
      },
      {
        abbrv: 'TT',
        name: 'Trinidad and Tobago',
        cap: 'Port of Spain',
        states: {},
      },
    ],
  },
  SA: {
    name: 'South America',
    lonlat: [-53.74, -22.99],
    zoom: 2.66,
    countries: [
      {
        abbrv: 'AR',
        name: 'Argentina',
        cap: 'Buenos Aires',
        states: [],
      },
      {
        abbrv: 'BO',
        name: 'Bolivia',
        cap: 'La Paz',
        alt_cap: 'Sucre',
        states: [],
      },
      {
        abbrv: 'BR',
        name: 'Brazil',
        cap: 'Brasília',
        lonlat: [-51.46,-12.9],
        zoom: 3.74,
        states: [
          {name: 'Acre'},
          {name: 'Alagoas'},
          {name: 'Amapá'},
          {name: 'Amazonas'},
          {name: 'Bahia'},
          {name: 'Ceará'},
          {name: 'Distrito Federal'},
          {name: 'Espírito Santo'},
          {name: 'Goiás'},
          {name: 'Maranhão'},
          {name: 'Mato Grasso'},
          {name: 'Mato Grosso do Sul'},
          {name: 'Minas Gerais'},
          {name: 'Paraná'},
          {name: 'Paraíba'},
          {name: 'Pará'},
          {name: 'Pernambuco'},
          {name: 'Piauí'},
          {name: 'Rio Grande do Norte'},
          {name: 'Rio Grande do Sul'},
          {name: 'Rio de Janeiro'},
          {name: 'Rondônia'},
          {name: 'Roraima'},
          {name: 'Santa Catarina'},
          {name: 'Sergipe'},
          {name: 'São Paulo'},
          {name: 'Tocantins'},
        ],
      },
      {
        abbrv: 'CL',
        name: 'Chile',
        cap: 'Santiago',
        states: [],
      },
      {
        abbrv: 'CO',
        name: 'Colombia',
        cap: 'Bogota',
        states: [],
      },
      {
        abbrv: 'EC',
        name: 'Ecuador',
        cap: 'Quito',
        states: [],
      },
      {
        abbrv: 'GY',
        name: 'Guyana',
        cap: 'Georgetown',
        states: [],
      },
      {
        abbrv: 'PY',
        name: 'Paraguay',
        cap: 'Asuncion',
        states: [],
      },
      {
        abbrv: 'PE',
        name: 'Peru',
        cap: 'Lima',
        states: [],
      },
      {
        abbrv: 'SR',
        name: 'Suriname',
        cap: 'Paramaribo',
        states: [],
      },
      {
        abbrv: 'UY',
        name: 'Uruguay',
        cap: 'Montevideo',
        states: [],
      },
      {
        abbrv: 'VE',
        name: 'Venezuela',
        cap: 'Caracas',
        states: [],
      },
    ],
  },
  AF: {
    name: 'Africa',
    lonlat: [32.54, 1.52],
    zoom: 2.79,
    countries: [
      {
        abbrv: 'ZA',
        name: 'South Africa',
        cap: ['Cape Town', 'Bloemfontein', 'Pretoria'],
        lonlat: [25.612,-27.794],
        zoom: 5.05,
        states: [
          {abbrv: 'ECP', name: 'Eastern Cape', cap: 'Bhisho'},
          {abbrv: 'FST', name: 'Free State', cap: 'Bloemfontein'},
          {abbrv: 'GAU', name: 'Gauteng', cap: 'Johannesburg'},
          {abbrv: 'KAW', name: 'KawZulu-Natal', cap: 'Pietermaritzburg'},
          {abbrv: 'LIM', name: 'Limpopo', cap: 'Polokwane'},
          {abbrv: 'MPU', name: 'Mpumalanga', cap: 'Nelspruit'},
          {abbrv: 'NWT', name: 'North West', cap: 'Mahikeng'},
          {abbrv: 'NCP', name: 'Northern Cape', cap: 'Kimberley'},
          {abbrv: 'WCP', name: 'Western Cape', cap: 'Cape Town'},
        ],
      },
      {
        abbrv: 'BW',
        name: 'Botswana',
        cap: '',
        states: [],
      },
      {
        abbrv: 'NA',
        name: 'Namibia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'MG',
        name: 'Madagascar',
        cap: '',
        states: [],
      },
      {
        abbrv: 'ZW',
        name: 'Zimbabwe',
        cap: '',
        states: [],
      },
      {
        abbrv: 'MZ',
        name: 'Mozambique',
        cap: '',
        states: [],
      },
      {
        abbrv: 'AO',
        name: 'Angola',
        cap: '',
        states: [],
      },
      {
        abbrv: 'MW',
        name: 'Malawi',
        cap: '',
        states: [],
      },
      {
        abbrv: 'ZM',
        name: 'Zambia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'TZ',
        name: 'Tanzania',
        cap: '',
        states: [],
      },
      {
        abbrv: 'BI',
        name: 'Burundi',
        cap: '',
        states: [],
      },
      {
        abbrv: 'RW',
        name: 'Rwanda',
        cap: '',
        states: [],
      },
      {
        abbrv: 'CD',
        name: 'Democratic Republic of the Congo',
        cap: '',
        states: [],
      },
      {
        abbrv: 'CG',
        name: 'Republic of the Congo',
        cap: '',
        states: [],
      },
      {
        abbrv: 'GA',
        name: 'Gabon',
        cap: '',
        states: [],
      },
      {
        abbrv: 'GQ',
        name: 'Equatorial Guinea',
        cap: '',
        states: [],
      },
      {
        abbrv: 'UG',
        name: 'Uganda',
        cap: '',
        states: [],
      },
      {
        abbrv: 'KE',
        name: 'Kenya',
        cap: '',
        states: [],
      },
      {
        abbrv: 'CM',
        name: 'Cameroon',
        cap: '',
        states: [],
      },
      {
        abbrv: 'CF',
        name: 'Central African Republic',
        cap: '',
        states: [],
      },
      {
        abbrv: 'SS',
        name: 'South Sudan',
        cap: '',
        states: [],
      },
      {
        abbrv: 'DJ',
        name: 'Djibouti',
        cap: '',
        states: [],
      },
      {
        abbrv: 'ET',
        name: 'Ethiopia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'SO',
        name: 'Somalia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'SD',
        name: 'Sudan',
        cap: '',
        states: [],
      },
      {
        abbrv: 'EG',
        name: 'Egypt',
        cap: '',
        states: [],
      },
      {
        abbrv: 'LY',
        name: 'Libya',
        cap: '',
        states: [],
      },
      {
        abbrv: 'TD',
        name: 'Chad',
        cap: '',
        states: [],
      },
      {
        abbrv: 'NG',
        name: 'Nigeria',
        cap: '',
        states: [],
      },
      {
        abbrv: 'NE',
        name: 'Niger',
        cap: '',
        states: [],
      },
      {
        abbrv: 'DZ',
        name: 'Algeria',
        cap: '',
        states: [],
      },
      {
        abbrv: 'TN',
        name: 'Tunisia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'MA',
        name: 'Morocco',
        cap: '',
        states: [],
      },
      {
        abbrv: 'EH',
        name: 'Western Sahara',
        cap: '',
        states: [],
      },
      {
        abbrv: 'ML',
        name: 'Mali',
        cap: '',
        states: [],
      },
      {
        abbrv: 'MR',
        name: 'Mauritania',
        cap: '',
        states: [],
      },
      {
        abbrv: 'SN',
        name: 'Senegal',
        cap: '',
        states: [],
      },
      {
        abbrv: 'BF',
        name: 'Burkina Faso',
        cap: '',
        states: [],
      },
      {
        abbrv: 'BJ',
        name: 'Benin',
        cap: '',
        states: [],
      },
      {
        abbrv: 'TG',
        name: 'Togo',
        cap: '',
        states: [],
      },
      {
        abbrv: 'GH',
        name: 'Ghana',
        cap: '',
        states: [],
      },
      {
        abbrv: 'CI',
        name: 'Ivory Coast',
        cap: '',
        states: [],
      },
      {
        abbrv: 'LR',
        name: 'Liberia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'GN',
        name: 'Guinea',
        cap: '',
        states: [],
      },
      {
        abbrv: 'SL',
        name: 'Sierra Leone',
        cap: '',
        states: [],
      },
      {
        abbrv: 'GW',
        name: 'Guinea-Bissau',
        cap: '',
        states: [],
      },
      {
        abbrv: 'GM',
        name: 'Gambia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'CV',
        name: 'Cape Verde',
        cap: '',
        states: [],
      },
      {
        abbrv: 'ER',
        name: 'Eritrea',
        cap: '',
        states: [],
      },
      {
        abbrv: 'LS',
        name: 'Lesotho',
        cap: '',
        states: [],
      },
      {
        abbrv: 'SZ',
        name: 'Swaziland',
        cap: '',
        states: [],
      },
      {
        abbrv: 'ST',
        name: 'Sao Tome and Principe',
        cap: '',
        states: [],
      },
      {
        abbrv: 'KM',
        name: 'Comoros',
        cap: '',
        states: [],
      },
      {
        abbrv: 'MU',
        name: 'Mauritius',
        cap: '',
        states: [],
      },
      {
        abbrv: 'SC',
        name: 'Seychelles',
        cap: '',
        states: [],
      },
    ],
  },
  EU: {
    lonlat: [23.57, 53.38],
    zoom: 3.36,
    name: 'Europe',
    countries: [
      {
        abbrv: 'PT',
        name: 'Portugal',
        cap: '',
        states: [],
      },
      {
        abbrv: 'ES',
        name: 'Spain',
        cap: '',
        states: [],
      },
      {
        abbrv: 'FR',
        name: 'France',
        cap: '',
        states: [],
      },
      {
        abbrv: 'IE',
        name: 'Ireland',
        cap: '',
        states: [],
      },
      {
        abbrv: 'GB',
        name: 'United Kingdom',
        cap: 'London',
        lonlat: [-2.698,55.115],
        zoom: 5.05,
        states: [
          {abbrv: 'ENG', name: 'England', cap: 'London'},
          {abbrv: 'SCO', name: 'Scotland', cap: 'Edinburgh'},
          {abbrv: 'WAL', name: 'Wales', cap: 'Cardiff'},
          {abbrv: 'NIR', name: 'Northern Ireland', cap: 'Belfast'},
        ],
      },
      {
        abbrv: 'NL',
        name: 'Netherlands',
        cap: '',
        states: [],
      },
      {
        abbrv: 'DK',
        name: 'Denmark',
        cap: '',
        states: [],
      },
      {
        abbrv: 'DE',
        name: 'Germany',
        cap: '',
        states: [],
      },
      {
        abbrv: 'BE',
        name: 'Belgium',
        cap: '',
        states: [],
      },
      {
        abbrv: 'LU',
        name: 'Luxembourg',
        cap: '',
        states: [],
      },
      {
        abbrv: 'CH',
        name: 'Switzerland',
        cap: '',
        states: [],
      },
      {
        abbrv: 'IT',
        name: 'Italy',
        cap: '',
        states: [],
      },
      {
        abbrv: 'IS',
        name: 'Iceland',
        cap: '',
        states: [],
      },
      {
        abbrv: 'NO',
        name: 'Norway',
        cap: '',
        states: [],
      },
      {
        abbrv: 'SE',
        name: 'Sweden',
        cap: '',
        states: [],
      },
      {
        abbrv: 'FI',
        name: 'Finland',
        cap: '',
        states: [],
      },
      {
        abbrv: 'EE',
        name: 'Estonia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'LV',
        name: 'Latvia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'LT',
        name: 'Lithuania',
        cap: '',
        states: [],
      },
      {
        abbrv: 'AT',
        name: 'Austria',
        cap: '',
        states: [],
      },
      {
        abbrv: 'SI',
        name: 'Slovenia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'HR',
        name: 'Croatia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'BA',
        name: 'Bosnia and Herzegovina',
        cap: '',
        states: [],
      },
      {
        abbrv: 'ME',
        name: 'Montenegro',
        cap: '',
        states: [],
      },
      {
        abbrv: 'XK',
        name: 'Kosovo',
        cap: '',
        states: [],
      },
      {
        abbrv: 'AL',
        name: 'Albania',
        cap: '',
        states: [],
      },
      {
        abbrv: 'MK',
        name: 'Republic of Macedonia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'GR',
        name: 'Greece',
        cap: '',
        states: [],
      },
      {
        abbrv: 'TR',
        name: 'Turkey',
        cap: '',
        states: [],
      },
      {
        abbrv: 'RO',
        name: 'Romania',
        cap: '',
        states: [],
      },
      {
        abbrv: 'BG',
        name: 'Bulgaria',
        cap: '',
        states: [],
      },
      {
        abbrv: 'RS',
        name: 'Serbia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'MT',
        name: 'Malta',
        cap: '',
        states: [],
      },
      {
        abbrv: 'MD',
        name: 'Moldova',
        cap: '',
        states: [],
      },
      {
        abbrv: 'UA',
        name: 'Ukraine',
        cap: '',
        states: [],
      },
      {
        abbrv: 'CY',
        name: 'Cyprus',
        cap: '',
        states: [],
      },
      {
        abbrv: 'PL',
        name: 'Poland',
        cap: '',
        states: [],
      },
      {
        abbrv: 'SK',
        name: 'Slovakia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'HU',
        name: 'Hungary',
        cap: '',
        states: [],
      },
      {
        abbrv: 'CZ',
        name: 'Czech Republic',
        cap: '',
        states: [],
      },
      {
        abbrv: 'RU',
        name: 'Russia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'BY',
        name: 'Belarus',
        cap: '',
        states: [],
      },
      {
        abbrv: 'AD',
        name: 'Andorra',
        cap: '',
        states: [],
      },
      {
        abbrv: 'MC',
        name: 'Monaco',
        cap: '',
        states: [],
      },
      {
        abbrv: 'SM',
        name: 'San Marino',
        cap: '',
        states: [],
      },
      {
        abbrv: 'LI',
        name: 'Liechtenstein',
        cap: '',
        states: [],
      },
    ],
  },
  AS: {
    name: 'Asia',
    lonlat: [90.93, 28.19],
    zoom: 2.87,
    countries: [
      {
        abbrv: 'LB',
        name: 'Lebanon',
        cap: '',
        states: [],
      },
      {
        abbrv: 'SY',
        name: 'Syria',
        cap: '',
        states: [],
      },
      {
        abbrv: 'IL',
        name: 'Israel',
        cap: '',
        states: [],
      },
      {
        abbrv: 'JO',
        name: 'Jordan',
        cap: '',
        states: [],
      },
      {
        abbrv: 'SA',
        name: 'Saudi Arabia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'IQ',
        name: 'Iraq',
        cap: '',
        states: [],
      },
      {
        abbrv: 'BH',
        name: 'Bahrain',
        cap: '',
        states: [],
      },
      {
        abbrv: 'QA',
        name: 'Qatar',
        cap: '',
        states: [],
      },
      {
        abbrv: 'AE',
        name: 'United Arab Emirates',
        cap: '',
        states: [],
      },
      {
        abbrv: 'OM',
        name: 'Oman',
        cap: '',
        states: [],
      },
      {
        abbrv: 'YE',
        name: 'Yemen',
        cap: '',
        states: [],
      },
      {
        abbrv: 'KW',
        name: 'Kuwait',
        cap: '',
        states: [],
      },
      {
        abbrv: 'IR',
        name: 'Iran',
        cap: '',
        states: [],
      },
      {
        abbrv: 'GE',
        name: 'Georgia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'AM',
        name: 'Armenia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'AZ',
        name: 'Azerbaijan',
        cap: '',
        states: [],
      },
      {
        abbrv: 'TM',
        name: 'Turkmenistan',
        cap: '',
        states: [],
      },
      {
        abbrv: 'UZ',
        name: 'Uzbekistan',
        cap: '',
        states: [],
      },
      {
        abbrv: 'KZ',
        name: 'Kazakhstan',
        cap: '',
        states: [],
      },
      {
        abbrv: 'KG',
        name: 'Kyrgyzstan',
        cap: '',
        states: [],
      },
      {
        abbrv: 'TJ',
        name: 'Tajikistan',
        cap: '',
        states: [],
      },
      {
        abbrv: 'AF',
        name: 'Afghanistan',
        cap: '',
        states: [],
      },
      {
        abbrv: 'PK',
        name: 'Pakistan',
        cap: '',
        states: [],
      },
      {
        abbrv: 'MN',
        name: 'Mongolia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'CN',
        name: 'China',
        cap: '',
        states: [],
      },
      {
        abbrv: 'NP',
        name: 'Nepal',
        cap: '',
        states: [],
      },
      {
        abbrv: 'IN',
        name: 'India',
        cap: '',
        lonlat: [81.29,24.074],
        zoom: 4.04,
        states: [],
      },
      {
        abbrv: 'BT',
        name: 'Bhutan',
        cap: '',
        states: [],
      },
      {
        abbrv: 'BD',
        name: 'Bangladesh',
        cap: '',
        states: [],
      },
      {
        abbrv: 'MM',
        name: 'Myanmar',
        cap: '',
        states: [],
      },
      {
        abbrv: 'TH',
        name: 'Thailand',
        cap: '',
        states: [],
      },
      {
        abbrv: 'VN',
        name: 'Vietnam',
        cap: '',
        states: [],
      },
      {
        abbrv: 'KH',
        name: 'Cambodia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'KP',
        name: 'North Korea',
        cap: '',
        states: [],
      },
      {
        abbrv: 'KR',
        name: 'South Korea',
        cap: '',
        states: [],
      },
      {
        abbrv: 'JP',
        name: 'Japan',
        cap: '',
        states: [],
      },
      {
        abbrv: 'TW',
        name: 'Taiwan',
        cap: '',
        states: [],
      },
      {
        abbrv: 'PH',
        name: 'Philippines',
        cap: '',
        states: [],
      },
      {
        abbrv: 'MV',
        name: 'Maldives',
        cap: '',
        states: [],
      },
      {
        abbrv: 'LK',
        name: 'Sri Lanka',
        cap: '',
        states: [],
      },
      {
        abbrv: 'MY',
        name: 'Malaysia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'SG',
        name: 'Singapore',
        cap: '',
        states: [],
      },
      {
        abbrv: 'ID',
        name: 'Indonesia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'BN',
        name: 'Brunei',
        cap: '',
        states: [],
      },
      {
        abbrv: 'LA',
        name: 'Laos',
        cap: '',
        states: [],
      },
      {
        abbrv: 'TL',
        name: 'Timor-Leste',
        cap: '',
        states: [],
      },
      {
        abbrv: 'PS',
        name: 'Palestine',
        cap: '',
        states: [],
      },
      {
        abbrv: 'TR',
        name: 'Turkey',
        cap: '',
        states: [],
      },
      {
        abbrv: 'RU',
        name: 'Russia',
        cap: '',
        states: [],
      },
    ],
  },
  OC: {
    name: 'Oceania',
    lonlat: [169.21, -19.58],
    zoom: 3.07,
    countries: [
      {
        abbrv: 'AU',
        name: 'Australia',
        cap: 'Canberra',
        lonlat: [136.33,-27.06],
        zoom: 3.76,
        states: [
          {abbrv: 'NSW', name: 'New South Wales', cap: 'Sydney'},
          {abbrv: 'QLD', name: 'Queensland', cap: 'Brisbane'},
          {abbrv: 'SA', name: 'South Australia', cap: 'Adelaide'},
          {abbrv: 'TAS', name: 'Tasmania', cap: 'Hobart'},
          {abbrv: 'VIC', name: 'Victoria', cap: 'Melbourne'},
          {abbrv: 'WA', name: 'Western Australia', cap: 'Perth'},
        ],
      },
      {
        abbrv: 'NZ',
        name: 'New Zealand',
        cap: '',
        states: [],
      },
      {
        abbrv: 'PG',
        name: 'Papua New Guinea',
        cap: '',
        states: [],
      },
      {
        abbrv: 'SB',
        name: 'Solomon Islands',
        cap: '',
        states: [],
      },
      {
        abbrv: 'VU',
        name: 'Vanuatu',
        cap: '',
        states: [],
      },
      {
        abbrv: 'FJ',
        name: 'Fiji',
        cap: '',
        states: [],
      },
      {
        abbrv: 'FM',
        name: 'Federated States of Micronesia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'MH',
        name: 'Marshall Islands',
        cap: '',
        states: [],
      },
      {
        abbrv: 'KI',
        name: 'Kiribati',
        cap: '',
        states: [],
      },
      {
        abbrv: 'WS',
        name: 'Samoa',
        cap: '',
        states: [],
      },
      {
        abbrv: 'TO',
        name: 'Tonga',
        cap: '',
        states: [],
      },
      {
        abbrv: 'TV',
        name: 'Tuvalu',
        cap: '',
        states: [],
      },
      {
        abbrv: 'NR',
        name: 'Nauru',
        cap: '',
        states: [],
      },
      {
        abbrv: 'PW',
        name: 'Palau',
        cap: '',
        states: [],
      },
      {
        abbrv: 'NC',
        name: 'New Caledonia',
        cap: '',
        states: [],
      },
      {
        abbrv: 'CK',
        name: 'Cook Islands',
        cap: '',
        states: [],
      },
    ],
  },
}

module.exports = CONTINENTS
