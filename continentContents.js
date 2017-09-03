const CONTINENTS = {
  NA: {
    lonlat: [-68.56, 35.7],
    zoom: 3.16,
    countries: [
        // 'Antigua and Barbuda', // Antigua and Barbuda
        'Bahamas', // Bahamas
        'Barbados', // Barbados
        // 'Belize', // Belize
        // 'Canada', // Canada
        // 'Costa Rica', // Costa Rica
        // 'Cuba', // Cuba
        // 'Dominica', // Dominica
        // 'Dominican Republic', // Dominican Republic
        // 'El Salvador', // El Salvador
        // 'Grenada', // Grenada
        // 'Guatemala', // Guatemala
        // 'Haiti', // Haiti
        // 'Honduras', // Honduras
        // 'Jamaica', // Jamaica
        // 'Mexico', // Mexico
        // 'Nicaragua', // Nicaragua
        // 'Panama', // Panama
        // 'Saint Kitts and Nevis', // Saint Kitts and Nevis
        // 'Saint Lucia', // Saint Lucia
        // 'Saint Vincent and the Grenadines', // Saint Vincent and the Grenadines
        // 'Trinidad and Tobago', // Trinidad and Tobago
        // 'United States', // United States of America
    ],
    abbrevs: {
        // 'Antigua and Barbuda': 'AG', // Antigua and Barbuda
        'Bahamas': 'BS', // Bahamas
        'Barbados': 'BB', // Barbados
        // 'Belize': 'BZ', // Belize
        // 'Canada': 'CA', // Canada
        // 'Costa Rica': 'CR', // Costa Rica
        // 'Cuba': 'CU', // Cuba
        // 'Dominica': 'DM', // Dominica
        // 'Dominican Republic': 'DO', // Dominican Republic
        // 'El Salvador': 'SV', // El Salvador
        // 'Grenada': 'GD', // Grenada
        // 'Guatemala': 'GT', // Guatemala
        // 'Haiti': 'HT', // Haiti
        // 'Honduras': 'HN', // Honduras
        // 'Jamaica': 'JM', // Jamaica
        // 'Mexico': 'MX', // Mexico
        // 'Nicaragua': 'NI', // Nicaragua
        // 'Panama': 'PA', // Panama
        // 'Saint Kitts and Nevis': 'KN', // Saint Kitts and Nevis
        // 'Saint Lucia': 'LC', // Saint Lucia
        // 'Saint Vincent and the Grenadines': 'VC', // Saint Vincent and the Grenadines
        // 'Trinidad and Tobago': 'TT', // Trinidad and Tobago
        // 'United States': 'US', // United States of America
    },
  },
  SA: {
    lonlat: [-53.74, -22.99],
    zoom: 2.66,
    countries: [
        // 'Argentina',
        'Bolivia',
        'Brazil',
        // 'Chile',
        // 'Colombia',
        // 'Ecuador',
        // 'Guyana',
        // 'Paraguay',
        // 'Peru',
        // 'Suriname',
        // 'Uruguay',
        // 'Venezuela',
    ],
    abbrevs: {
        // 'Argentina': 'AR',
        'Bolivia': 'BO', 
        'Brazil': 'BR',
        // 'Chile': 'CL',
        // 'Colombia': 'CO',
        // 'Ecuador': 'EC',
        // 'Guyana': 'GY',
        // 'Paraguay': 'PY',
        // 'Peru': 'PE',
        // 'Suriname': 'SR',
        // 'Uruguay': 'UY',
        // 'Venezuela': 'VE',
    },
  },
  AF: {
    lonlat: [32.54, 1.52],
    zoom: 2.79,
  //   countries: [
  //       'South Africa',
  //       'Botswana', 
  //       'Namibia',
  //       'Madagascar',
  //       'Zimbabwe',
  //       'Mozambique',
  //       'Angola',
  //       'Malawi',
  //       'Zambia',
  //       'Tanzania',
  //       'Burundi',
  //       'Rwanda',
  //       'Democratic Republic of the Congo', 
  //       'Republic of the Congo',
  //       'Gabon',
  //       'Equatorial Guinea',
  //       'Uganda',
  //       'Kenya',
  //       'Cameroon',
  //       'Central African Repulic',
  //       'South Sudan',
  //       'Djibouti',
  //       'Ethiopia',
  //       'Somalia',
  //       'Sudan',
  //       'Egypt',
  //       'Libya',
  //       'Chad',
  //       'Nigeria',
  //       'Niger',
  //       'Algeria',
  //       'Tunisia',
  //       'Morocco',
  //       'Western Sahara',
  //       'Mali',
  //       'Mauritania',
  //       'Senegal',
  //       'Burkina Faso',
  //       'Benin',
  //       'Togo',
  //       'Ghana',
  //       'Ivory Coast',
  //       'Liberia',
  //       'Guinea',
  //       'Sierra Leone',
  //       'Guinea-Bissau',
  //       'The Gambia',
  //       'Cape Verde',
  //       'Eritrea',
  //       'Lesotho',
  //       'Swaziland',
  //       'Sao Tome and Principe',
  //       'Comoros',
  //       'Mauritius',
  //       'Seychelles',
  //   ],
  //   abbrevs: {
  //       'South Africa': 'ZA',
  //       'Botswana': 'BW', 
  //       'Namibia': 'NA',
  //       'Madagascar': 'MG',
  //       'Zimbabwe': 'ZW',
  //       'Mozambique': 'MZ',
  //       'Angola': 'AO',
  //       'Malawi': 'MW',
  //       'Zambia': 'ZM',
  //       'Tanzania': 'TZ',
  //       'Burundi': 'BI',
  //       'Rwanda': 'RW',
  //       'Democratic Republic of the Congo': 'CD', 
  //       'Republic of the Congo': 'CG',
  //       'Gabon': 'GA',
  //       'Equatorial Guinea': 'GQ',
  //       'Uganda': 'UG',
  //       'Kenya': 'KE',
  //       'Cameroon': 'CM',
  //       'Central African Repulic': 'CF',
  //       'South Sudan': 'SS',
  //       'Djibouti': 'DJ',
  //       'Ethiopia': 'ET',
  //       'Somalia': 'SO',
  //       'Sudan': 'SD',
  //       'Egypt': 'EG',
  //       'Libya':'LY',
  //       'Chad': 'TD',
  //       'Nigeria': 'NG',
  //       'Niger': 'NE',
  //       'Algeria': 'DZ',
  //       'Tunisia': 'TN',
  //       'Morocco': 'MA',
  //       'Western Sahara': 'EH',
  //       'Mali': 'ML',
  //       'Mauritania': 'MR',
  //       'Senegal': 'SN',
  //       'Burkina Faso': 'BF',
  //       'Benin': 'BJ',
  //       'Togo': 'TG',
  //       'Ghana': 'GH',
  //       'Ivory Coast': 'CI',
  //       'Liberia': 'LR',
  //       'Guinea': 'GN',
  //       'Sierra Leone': 'SL',
  //       'Guinea-Bissau': 'GW',
  //       'The Gambia': 'GM',
  //       'Cape Verde': 'CV',
  //       'Eritrea': 'ER',
  //       'Lesotho': 'LS',
  //       'Swaziland': 'SZ',
  //       'Sao Tome and Principe': 'ST',
  //       'Comoros': 'KM',
  //       'Mauritius': 'MU',
  //       'Seychelles': 'SC',
  //   },
  },
  EU: {
    lonlat: [23.57, 53.38],
    zoom: 3.36,
    countries: [
        'Portugal',
        'Spain',
        'France',
        'Ireland',
        'United Kingdom',
        'Netherlands',
        'Denmark',
        'Germany',
        'Belgium',
        'Luxembourg',
        'Switzerland',
        'Italy',
        'Iceland',
        'Norway',
        'Sweden',
        'Finland',
        'Estonia',
        'Latvia',
        'Lithuania',
        'Austria',
        'Slovenia',
        'Croatia',
        'Bosnia and Herzegovina',
        'Montenegro',
        'Kosovo',
        'Albania',
        'Republic of Macedonia',
        'Greece',
        'Turkey',
        'Romania',
        'Bulgaria',
        'Serbia',
        'Malta',
        'Moldova',
        'Ukraine',
        'Cyprus',
        'Poland',
        'Slovakia',
        'Hungary',
        'Czech Republic',
        'Russia',
        'Belarus',
        'Andorra',
        'Monaco',
        'San Marino',
        'Liechtenstein',
    ],
    abbrevs: {
        'Portugal': 'PT',
        'Spain': 'ES',
        'France': 'FR',
        'Ireland': 'IE',
        'United Kingdom': 'GB',
        'Netherlands': 'NL',
        'Denmark': 'DK',
        'Germany': 'DE',
        'Belgium': 'BE',
        'Luxembourg': 'LU',
        'Switzerland': 'CH',
        'Italy': 'IT',
        'Iceland': 'IS',
        'Norway': 'NO',
        'Sweden': 'SE',
        'Finland': 'FI',
        'Estonia': 'EE',
        'Latvia': 'LV',
        'Lithuania': 'LT',
        'Austria': 'AT',
        'Slovenia': 'SI',
        'Croatia': 'HR',
        'Bosnia and Herzegovina': 'BA',
        'Montenegro': 'ME',
        'Kosovo': 'XK',
        'Albania': 'AL',
        'Republic of Macedonia': 'MK',
        'Greece': 'GR',
        'Turkey': 'TR',
        'Romania': 'RO',
        'Bulgaria': 'BG',
        'Serbia': 'RS',
        'Malta': 'MT',
        'Moldova': 'MD',
        'Ukraine': 'UA',
        'Cyprus': 'CY',
        'Poland': 'PL',
        'Slovakia': 'SK',
        'Hungary': 'HU',
        'Czech Republic': 'CZ',
        'Russia': 'RU',
        'Belarus': 'BY',
        'Andorra': 'AD',
        'Monaco': 'MC',
        'San Marino': 'SM',
        'Liechtenstein': 'LI',
    }
  },
  AS: {
    lonlat: [90.93, 28.19],
    zoom: 2.87,
  //   countries: [
  //       'LB', // Lebanon 
  //       'SY', // Syria
  //       'IL', // Israel
  //       'JO', // Jordan
  //       'SA', // Saudi Arabia
  //       'IQ', // Iraq
  //       'BH', // Bahrain
  //       'QA', // Qatar
  //       'AE', // United Arab Emirates
  //       'OM', // Oman
  //       'YE', // Yemen
  //       'KW', // Kuwait
  //       'IR', // Iran
  //       'GE', // Georgia
  //       'AM', // Armenia
  //       'AZ', // Azerbaijan
  //       'TM', // Turkmenistan
  //       'UZ', // Uzbekistan
  //       'KZ', // Kazakhstan
  //       'KG', // Kyrgyzstan
  //       'TJ', // Tajikistan
  //       'AF', // Afghanistan
  //       'PK', // Pakistan
  //       'MN', // Mongolia
  //       'CN', // China
  //       'NP', // Nepal
  //       'IN', // India
  //       'BT', // Bhutan
  //       'BD', // Bangladesh
  //       'MM', // Myanmar (Burma)
  //       'TH', // Thailand
  //       'VN', // Vietnam
  //       'KH', // Cambodia
  //       'KP', // North Korea
  //       'KR', // South Korea
  //       'JP', // Japan
  //       'TW', // Taiwan
  //       'PH', // Philippines
  //       'MV', // Maldives
  //       'LK', // Sri Lanka
  //       'MY', // Malaysia
  //       'SG', // Singapore
  //       'ID', // Indonesia
  //       'BN', // Brunei
  //       'LA', // Laos
  //       'TL', // Timor-Leste
  //       'PS', // Palestine
  //       'TR', // Turkey
  //       'RU', // Russia
  //   ],
  },
  OC: {
    lonlat: [161.85, -21.84],
    zoom: 3.07,
  //   countries: [
  //       'Australia',
  //       'New Zealand',
  //       'Papua New Guinea',
  //       'Solomon Islands',
  //       'Vanuatu',
  //       'Fiji',
  //       'Federated States of Micronesia',
  //       'Marshall Islands',
  //       'Kiribati',
  //       'Samoa',
  //       'Tonga',
  //       'Tuvalu',
  //       'Nauru',
  //       'Palau',
  //       'New Caledonia',
  //       'Cook Islands',
  //   ],
  //   abbrevs: {
  //       'Australia': 'AU',
  //       'New Zealand': 'NZ',
  //       'Papua New Guinea': 'PG',
  //       'Solomon Islands': 'SB',
  //       'Vanuatu': 'VU',
  //       'Fiji': 'FJ',
  //       'Federated States of Micronesia': 'FM',
  //       'Marshall Islands': 'MH',
  //       'Kiribati': 'KI',
  //       'Samoa': 'WS',
  //       'Tonga': 'TO',
  //       'Tuvalu': 'TV',
  //       'Nauru': 'NR',
  //       'Palau': 'PW',
  //       'New Caledonia': 'NC',
  //       'Cook Islands': 'CK',
  //   },
  },
}

module.exports = CONTINENTS;


// 'PT', // Portugal
// 'ES', // Spain
// 'FR', // France
// 'IE', // Ireland
// 'GB', // United Kingdom
// 'NL', // Nederland / Netherlands
// 'DK', // Danmark / Denmark
// 'DE', // Deutschland / Germany
// 'BE', // Belgique // Belgium
// 'LU', // Luxembourg
// 'CH', // Switzerland
// 'IT', // Italia / Italy
// 'IS', // Island / Iceland
// 'NO', // Norge / Norway
// 'SE', // Sverige / Sweden
// 'FI', // Suomi / Finland
// 'EE', // Eesti / Estonia
// 'LV', // Latvija / Latvia
// 'LT', // Lietuva / Lithuania
// 'AT', // Osterreich / Austria
// 'SI', // Slovenija / Slovenia
// 'HR', // Hrvatska / Croatia
// 'BA', // Bosna i Hercegovina / Bosnia and Herzegovina
// 'ME', // Crna Gora / Montenegro
// 'XK', // Kosove / Kosovo
// 'AL', // Shqiperia / Albania
// 'MK', // Republic of Macedonia
// 'GR', // Greece
// 'TR', // Turkey
// 'RO', // Romania
// 'BG', // Bulgaria
// 'RS', // Serbia
// 'MT', // Malta
// 'MD', // Moldova
// 'UA', // Ukraine
// 'CY', // Cyprus
// 'PL', // Polska / Poland
// 'SK', // Slovensko / Slovakia
// 'HU', // Hungary
// 'CZ', // Cesko / Czech Republic
// 'RU', // Russia
// 'BY', // Belarus
// 'AD', // Andorra
// 'MC', // Monaco 
// 'SM', // San Marino
// 'LI', // Liechtenstein


