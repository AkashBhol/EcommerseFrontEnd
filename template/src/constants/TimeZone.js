const timeZoneData = [
  {
    value: '-12:00',
    name: '(GMT-12:00) International Date Line West',
  },
  {
    value: '-11:00',
    name: '(UTC-11)Coordinated Universal Time-11',
  },
  {
    value: '-10:00',
    name: '(UTC-10)Hawaii',
  },
  {
    value: '-09:00',
    name: '(UTC-9)Alaska',
  },
  {
    value: '-08:00',
    name: '(UTC-8)Pacific time (American and Canada) Baja California',
  },
  {
    value: '-07:00',
    name: '(UTC-7)La Paz, The mountain time (American and Canada), Arizona',
  },
  {
    value: '-06:00',
    name: '(UTC-6)Saskatchewan, Central time, Central America',
  },
  {
    value: '-05:00',
    name: '(UTC-5)Bogota, Lima, Quito, Rio Branco, Eastern time, Indiana(East)',
  },
  {
    value: '-04:30',
    name: '(UTC-4:30)Caracas',
  },
  {
    value: '-04:00',
    name: '(UTC-4)Atlantic time, Cuiaba, Georgetown, La Paz, Santiago',
  },
  {
    value: '-03:30',
    name: '(UTC-3:30)Newfoundland',
  },
  {
    value: '-03:00',
    name: '(UTC-3)Brasilia, Buenos Aires, Greenland, Cayenne',
  },
  {
    value: '-02:00',
    name: '(UTC-2)The International Date Line West-02',
  },
  {
    value: '-01:00',
    name: '(UTC-1)Cape Verde Islands, Azores',
  },
  {
    value: '-00:00',
    name: '(UTC)Dublin, Edinburgh, Lisbon, London, The International Date Line West',
  },
  {
    value: '+01:00',
    name: '(UTC+1)Amsterdam, Brussels, Sarajevo',
  },
  {
    value: '+02:00',
    name: '(UTC+2)Beirut, Damascus, Eastern Europe, Cairo,Athens, Jerusalem',
  },
  {
    value: '+03:00',
    name: '(UTC+3)Baghdad, Kuwait, Moscow, St Petersburg,Nairobi',
  },
  {
    value: '+03:30',
    name: '(UTC+3:30)Teheran or Tehran',
  },
  {
    value: '+04:00',
    name: '(UTC+4)Abu Dhabi, Yerevan, Baku, Port Louis, Samarra',
  },
  {
    value: '+04:30',
    name: '(UTC+4:30)Kabul',
  },
  {
    value: '+05:00',
    name: '(UTC+5)Ashgabat, Islamabad, Karachi',
  },
  {
    value: '+05:30',
    name: '(UTC+5:30)Chennai, Calcutta Mumbai, New Delhi',
  },
  {
    value: '+05:45',
    name: '(UTC+5:45)Kathmandu',
  },
  {
    value: '+06:00',
    name: '(UTC+6)Astana, Dhaka, Novosibirsk',
  },
  {
    value: '+06:30',
    name: '(UTC+6:30)Yangon',
  },
  {
    value: '+07:00',
    name: '(UTC+7)Bangkok, Hanoi, Jakarta',
  },
  {
    value: '+08:00',
    name: '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi,Kuala Lumpur, Singapore',
  },
  {
    value: '+09:00',
    name: '(UTC+9)Osaka, Tokyo, Seoul, Yakutsk',
  },
  {
    value: '+09:30',
    name: '(UTC+9:30)Adelaide, Darwin',
  },
  {
    value: '+10:00',
    name: '(UTC+10)Brisbane, Vladivostok, Guam, Canberra',
  },
  {
    value: '+11:00',
    name: '(UTC+11)Solomon Islands, New Caledonia',
  },
  {
    value: '+12:00',
    name: '(UTC+12)Anadyr, Oakland, Wellington, Fiji',
  },
  {
    value: '+13:00',
    name: "(UTC+13)Nuku'alofa, The Samoa Islands",
  },
  {
    value: '+14:00',
    name: '(UTC+14)Christmas Island',
  },
];

const timeZoneMapping = {
  "Etc/GMT-12": "(GMT-12:00) International Date Line West",
  "Pacific/Pago_Pago": "(UTC-11)Coordinated Universal Time-11",
  "Pacific/Honolulu": "(UTC-10)Hawaii",
  "America/Anchorage": "(UTC-9)Alaska",
  "America/Los_Angeles": "(UTC-8)Pacific Time (US & Canada), Baja California",
  "America/Denver": "(UTC-7)La Paz, Mountain Time (US & Canada), Arizona",
  "America/Chicago": "(UTC-6)Saskatchewan, Central Time (US & Canada), Central America",
  "America/New_York": "(UTC-5)Bogota, Lima, Quito, Rio Branco, Eastern Time (US & Canada), Indiana (East)",
  "America/Caracas": "(UTC-4:30)Caracas",
  "America/Halifax": "(UTC-4)Atlantic Time (Canada), Cuiaba, Georgetown, La Paz, Santiago",
  "America/St_Johns": "(UTC-3:30)Newfoundland",
  "America/Sao_Paulo": "(UTC-3)Brasilia, Buenos Aires, Greenland, Cayenne",
  "America/Argentina/Buenos_Aires": "(UTC-3:00) Buenos Aires",
  "Africa/Lagos": "(UTC+1)Lagos, Algiers, Casablanca",
  "Africa/Cairo": "(UTC+2)Cairo, Johannesburg, Harare",
  "Africa/Nairobi": "(UTC+3)Nairobi, Baghdad, Kuwait, Moscow, St. Petersburg",
  "Africa/Algiers": "(UTC+1:00) West Central Africa",
  "Africa/Johannesburg": "(UTC+2)Cairo, Johannesburg, Harare",
  "Etc/GMT-2": "(UTC-2)International Date Line West-02",
  "Atlantic/Azores": "(UTC-1)Cape Verde Islands, Azores",
  "Europe/London": "(UTC)Dublin, Edinburgh, Lisbon, London",
  "Europe/Paris": "(UTC+1)Amsterdam, Brussels, Sarajevo",
  "Europe/Athens": "(UTC+2)Beirut, Damascus, Eastern Europe, Cairo, Athens, Jerusalem",
  "Europe/Moscow": "(UTC+3)Baghdad, Kuwait, Moscow, St. Petersburg, Nairobi",
  "Asia/Tehran": "(UTC+3:30)Tehran",
  "Asia/Dubai": "(UTC+4)Abu Dhabi, Yerevan, Baku, Port Louis, Samarra",
  "Asia/Kabul": "(UTC+4:30)Kabul",
  "Asia/Karachi": "(UTC+5)Ashgabat, Islamabad, Karachi",
  "Asia/Kolkata": "(UTC+5:30)Chennai, Kolkata, Mumbai, New Delhi",
  "Asia/Kathmandu": "(UTC+5:45)Kathmandu",
  "Asia/Dhaka": "(UTC+6)Astana, Dhaka, Novosibirsk",
  "Asia/Yangon": "(UTC+6:30)Yangon",
  "Asia/Bangkok": "(UTC+7)Bangkok, Hanoi, Jakarta",
  "Asia/Shanghai": "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi, Kuala Lumpur, Singapore",
  "Asia/Tokyo": "(UTC+9)Osaka, Tokyo, Seoul, Yakutsk",
  "Australia/Adelaide": "(UTC+9:30)Adelaide, Darwin",
  "Australia/Sydney": "(UTC+10)Brisbane, Vladivostok, Guam, Canberra",
  "Pacific/Guadalcanal": "(UTC+11)Solomon Islands, New Caledonia",
  "Pacific/Auckland": "(UTC+12)Anadyr, Oakland, Wellington, Fiji",
  "Pacific/Tongatapu": "(UTC+13)Nuku'alofa, Samoa Islands",
  "Pacific/Kiritimati": "(UTC+14)Christmas Island",
};

const timeZoneList = timeZoneData

export {timeZoneList, timeZoneMapping};
