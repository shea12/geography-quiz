const CONTINENTS = {
  NA: {
    lonlat: [-86.49, 35.27],
    zoom: 3.16,
    countries: [
        // 'Antigua and Barbuda', // Antigua and Barbuda
        // 'Bahamas', // Bahamas
        // 'Barbados', // Barbados
        // 'Belize', // Belize
        'Canada', // Canada
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
        'Mexico', // Mexico
        // 'Nicaragua', // Nicaragua
        // 'Panama', // Panama
        // 'Saint Kitts and Nevis', // Saint Kitts and Nevis
        // 'Saint Lucia', // Saint Lucia
        // 'Saint Vincent and the Grenadines', // Saint Vincent and the Grenadines
        // 'Trinidad and Tobago', // Trinidad and Tobago
        'United States', // United States of America
    ],
    abbrevs: {
        // 'Antigua and Barbuda': 'AG', // Antigua and Barbuda
        // 'Bahamas': 'BS', // Bahamas
        // 'Barbados': 'BB', // Barbados
        // 'Belize': 'BZ', // Belize
        'Canada': 'CA', // Canada
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
        'Mexico': 'MX', // Mexico
        // 'Nicaragua': 'NI', // Nicaragua
        // 'Panama': 'PA', // Panama
        // 'Saint Kitts and Nevis': 'KN', // Saint Kitts and Nevis
        // 'Saint Lucia': 'LC', // Saint Lucia
        // 'Saint Vincent and the Grenadines': 'VC', // Saint Vincent and the Grenadines
        // 'Trinidad and Tobago': 'TT', // Trinidad and Tobago
        'United States of America': 'US', // United States of America
    },
  },
  SA: {
    lonlat: [-60.81, -26.15],
    zoom: 2.8,
  //   countries: [
  //       'Argentina',
  //       'Bolivia',
  //       'Brazil',
  //       'Chile',
  //       'Colombia',
  //       'Ecuador',
  //       'Guyana',
  //       'Paraguay',
  //       'Peru',
  //       'Suriname',
  //       'Uruguay',
  //       'Venezuela',
  //   ],
  //   abbrevs: {
  //       'Argentina': 'AR',
  //       'Bolivia': 'BO', 
  //       'Brazil': 'BR',
  //       'Chile': 'CL',
  //       'Colombia': 'CO',
  //       'Ecuador': 'EC',
  //       'Guyana': 'GY',
  //       'Paraguay': 'PY',
  //       'Peru': 'PE',
  //       'Suriname': 'SR',
  //       'Uruguay': 'UY',
  //       'Venezuela': 'VE',
  //   },
  },
  AF: {
    lonlat: [22.48, 1.62],
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
    lonlat: [15.0, 54.18],
    zoom: 3.34,
  //   countries: [
  //       'PT', // Portugal
  //       'ES', // Spain
  //       'FR', // France
  //       'IE', // Ireland
  //       'GB', // United Kingdom
  //       'NL', // Nederland / Netherlands
  //       'DK', // Danmark / Denmark
  //       'DE', // Deutschland / Germany
  //       'LU', // Luxembourg
  //       'CH', // Switzerland
  //       'IT', // Italia / Italy
  //       'AT', // Osterreich / Austria
  //       'SI', // Slovenija / Slovenia
  //       'HR', // Hrvatska / Croatia
  //       'BA', // Bosna i Hercegovina / Bosnia and Herzegovina
  //       'ME', // Crna Gora / Montenegro
  //       'XK', // Kosove / Kosovo
  //       'AL', // Shqiperia / Albania
  //       'ME', // Republic of Macedonia
  //       'GR', // Greece
  //       'BG', // Bulgaria
  //       'RS', // Serbia
  //       'MT', // Malta
  //       'TR', // Turkey
  //       'RO', // Romania
  //       'MD', // Moldova
  //       'UA', // Ukraine
  //       'CY', // Cyprus
  //       'EE', // Eesti / Estonia
  //       'LV', // Latvija / Latvia
  //       'LT', // Lietuva / Lithuania
  //       'PL', // Polska / Poland
  //       'SK', // Slovensko / Slovakia
  //       'HU', // Hungary
  //       'CZ', // Cesko / Czech Republic
  //       'NO', // Norge / Norway
  //       'SE', // Sverige / Sweden
  //       'FI', // Suomi / Finland
  //       'RU', // Russia
  //       'IS', // Island / Iceland
  //       'AD', // Andorra
  //       'MC', // Monaco 
  //       'SM', // San Marino
  //       'LI', // Liechtenstein
  //       'BY', // Belarus
  //       'BE', // Belgique // Belgium
  //   ],
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
