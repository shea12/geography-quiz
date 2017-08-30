const CONTINENTS = {
  NA: {
    lonlat: [-86.49, 35.27],
    zoom: 3.16,
    countries: [
        'AG': 'Antigua and Barbuda', // Antigua and Barbuda
        'BS': 'Bahamas', // Bahamas
        'BB': 'Barbados', // Barbados
        'BZ': 'Belize', // Belize
        'CA': 'Canada', // Canada
        'CR': 'Costa Rica', // Costa Rica
        'CU': 'Cuba', // Cuba
        'DM': 'Dominica', // Dominica
        'DO': 'Dominican Republic', // Dominican Republic
        'SV': 'El Salvador', // El Salvador
        'GD': 'Grenada', // Grenada
        'GT': 'Guatemala', // Guatemala
        'HT': 'Haiti', // Haiti
        'HN': 'Honduras', // Honduras
        'JM': 'Jamaica', // Jamaica
        'MX': 'Mexico', // Mexico
        'NI': 'Nicaragua', // Nicaragua
        'PA': 'Panama', // Panama
        'KN': 'Saint Kitts and Nevis', // Saint Kitts and Nevis
        'LC': 'Saint Lucia', // Saint Lucia
        'VC': 'Saint Vincent and the Grenadines', // Saint Vincent and the Grenadines
        'TT': 'Trinidad and Tobago', // Trinidad and Tobago
        'US': 'United States of America', // United States of America
    ],
  },
  SA: {
    lonlat: [-60.81, -26.15],
    zoom: 2.8,
    countries: [
        'AR', // Argentina
        'BO', // Bolivia
        'BR', // Brazil
        'CL', // Chile
        'CO', // Colombia
        'EC', // Ecuador
        'GY', // Guyana
        'PY', // Paraguay
        'PE', // Peru
        'SR', // Suriname
        'UY', // Uruguay
        'VE', // Venezuela
    ],
  },
  AF: {
    lonlat: [22.48, 1.62],
    zoom: 2.79,
    countries: [
        'ZA', // South Africa
        'BW', // Botswana 
        'NA', // Namibia
        'MG', // Madagascar
        'ZW', // Zimbabwe
        'MZ', // Mozambique
        'AO', // Angola
        'MW', // Malawi
        'ZM', // Zambia
        'TZ', // Tanzania
        'BI', // Burundi
        'RW', // Rwanda
        'CD', // Democratic Republic of the Congo 
        'CG', // Republic of the Congo
        'GA', // Gabon
        'GQ', // Equatorial Guinea
        'UG', // Uganda
        'KE', // Kenya
        'CM', // Cameroon
        'CF', // Central African Repulic
        'SS', // South Sudan
        'DJ', // Djibouti
        'ET', // Ethiopia
        'SO', // Somalia
        'SD', // Sudan
        'EG', // Egypt
        'LY', // Libya
        'TD', // Chad
        'NG', // Nigeria
        'NE', // Niger
        'DZ', // Algeria
        'TN', // Tunisia
        'MA', // Morocco
        'EH', // Western Sahara
        'ML', // Mali
        'MR', // Mauritania
        'SN', // Senegal
        'BF', // Burkina Faso
        'BJ', // Benin
        'TG', // Togo
        'GH', // Ghana
        'CI', // Ivory Coast
        'LR', // Liberia
        'GN', // Guinea
        'SL', // Sierra Leone
        'GW', // Guinea-Bissau
        'GM', // The Gambia
        'CV', // Cape Verde
        'ER', // Eritrea
        'LS', // Lesotho
        'SZ', // Swaziland
        'ST', // Sao Tome and Principe
        'KM', // Comoros
        'MU', // Mauritius
        'SC', // Seychelles
    ],
  },
  EU: {
    lonlat: [15.0, 54.18],
    zoom: 3.34,
    countries: [
        'PT', // Portugal
        'ES', // Spain
        'FR', // France
        'IE', // Ireland
        'GB', // United Kingdom
        'NL', // Nederland / Netherlands
        'DK', // Danmark / Denmark
        'DE', // Deutschland / Germany
        'LU', // Luxembourg
        'CH', // Switzerland
        'IT', // Italia / Italy
        'AT', // Osterreich / Austria
        'SI', // Slovenija / Slovenia
        'HR', // Hrvatska / Croatia
        'BA', // Bosna i Hercegovina / Bosnia and Herzegovina
        'ME', // Crna Gora / Montenegro
        'XK', // Kosove / Kosovo
        'AL', // Shqiperia / Albania
        'ME', // Republic of Macedonia
        'GR', // Greece
        'BG', // Bulgaria
        'RS', // Serbia
        'MT', // Malta
        'TR', // Turkey
        'RO', // Romania
        'MD', // Moldova
        'UA', // Ukraine
        'CY', // Cyprus
        'EE', // Eesti / Estonia
        'LV', // Latvija / Latvia
        'LT', // Lietuva / Lithuania
        'PL', // Polska / Poland
        'SK', // Slovensko / Slovakia
        'HU', // Hungary
        'CZ', // Cesko / Czech Republic
        'NO', // Norge / Norway
        'SE', // Sverige / Sweden
        'FI', // Suomi / Finland
        'RU', // Russia
        'IS', // Island / Iceland
        'AD', // Andorra
        'MC', // Monaco 
        'SM', // San Marino
        'LI', // Liechtenstein
        'BY', // Belarus
        'BE', // Belgique // Belgium
    ],
  },
  AS: {
    lonlat: [90.93, 28.19],
    zoom: 2.87,
    countries: [
        'LB', // Lebanon 
        'SY', // Syria
        'IL', // Israel
        'JO', // Jordan
        'SA', // Saudi Arabia
        'IQ', // Iraq
        'BH', // Bahrain
        'QA', // Qatar
        'AE', // United Arab Emirates
        'OM', // Oman
        'YE', // Yemen
        'KW', // Kuwait
        'IR', // Iran
        'GE', // Georgia
        'AM', // Armenia
        'AZ', // Azerbaijan
        'TM', // Turkmenistan
        'UZ', // Uzbekistan
        'KZ', // Kazakhstan
        'KG', // Kyrgyzstan
        'TJ', // Tajikistan
        'AF', // Afghanistan
        'PK', // Pakistan
        'MN', // Mongolia
        'CN', // China
        'NP', // Nepal
        'IN', // India
        'BT', // Bhutan
        'BD', // Bangladesh
        'MM', // Myanmar (Burma)
        'TH', // Thailand
        'VN', // Vietnam
        'KH', // Cambodia
        'KP', // North Korea
        'KR', // South Korea
        'JP', // Japan
        'TW', // Taiwan
        'PH', // Philippines
        'MV', // Maldives
        'LK', // Sri Lanka
        'MY', // Malaysia
        'SG', // Singapore
        'ID', // Indonesia
        'BN', // Brunei
        'LA', // Laos
        'TL', // Timor-Leste
        'PS', // Palestine
        'TR', // Turkey
        'RU', // Russia
    ],
  },
  OC: {
    lonlat: [161.85, -21.84],
    zoom: 3.07,
    countries: [
        'AU', // Australia
        'NZ', // New Zealand
        'PG', // Papua New Guinea
        'SB', // Solomon Islands
        'VU', // Vanuatu
        'FJ', // Fiji
        'FM', // Federated States of Micronesia
        'MH', // Marshall Islands
        'KI', // Kiribati
        'WS', // Samoa
        'TO', // Tonga
        'TV', // Tuvalu
        'NR', // Nauru
        'PW', // Palau
        'NC', // New Caledonia
        'CK', // Cook Islands
    ],
  },
}

module.exports = CONTINENTS;
