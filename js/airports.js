// Airport Database
// Contains coordinates and information for major airports worldwide

const airports = {
    japan: [
        // ── Major Hubs ──
        { code: 'HND', name: 'Tokyo Haneda Airport',                 lat: 35.5494,  lng: 139.7798 },
        { code: 'NRT', name: 'Tokyo Narita International Airport',   lat: 35.7647,  lng: 140.3864 },
        { code: 'KIX', name: 'Osaka Kansai International Airport',   lat: 34.4273,  lng: 135.2444 },
        { code: 'ITM', name: 'Osaka Itami Airport',                  lat: 34.7855,  lng: 135.4384 },
        { code: 'NGO', name: 'Nagoya Chubu Centrair Airport',        lat: 34.8584,  lng: 136.8054 },
        { code: 'FUK', name: 'Fukuoka Airport',                      lat: 33.5859,  lng: 130.4511 },
        { code: 'CTS', name: 'Sapporo New Chitose Airport',          lat: 42.7752,  lng: 141.6920 },
        { code: 'OKA', name: 'Okinawa Naha Airport',                 lat: 26.1958,  lng: 127.6458 },
        { code: 'UKB', name: 'Kobe Airport',                         lat: 34.6328,  lng: 135.2239 },
        { code: 'SDJ', name: 'Sendai Airport',                       lat: 38.1397,  lng: 140.9169 },
        { code: 'HIJ', name: 'Hiroshima Airport',                    lat: 34.4361,  lng: 132.9194 },
        // ── Hokkaido ──
        { code: 'AKJ', name: 'Asahikawa Airport',                    lat: 43.6708,  lng: 142.4473 },
        { code: 'MMB', name: 'Memanbetsu Airport (Abashiri)',         lat: 43.8806,  lng: 144.1639 },
        { code: 'KUH', name: 'Kushiro Airport',                      lat: 43.0411,  lng: 144.1929 },
        { code: 'OBO', name: 'Obihiro Airport',                      lat: 42.7333,  lng: 143.2169 },
        { code: 'HKD', name: 'Hakodate Airport',                     lat: 41.7700,  lng: 140.8219 },
        { code: 'WKJ', name: 'Wakkanai Airport',                     lat: 45.4042,  lng: 141.8006 },
        // ── Tohoku ──
        { code: 'AOJ', name: 'Aomori Airport',                       lat: 40.7346,  lng: 140.6909 },
        { code: 'AXT', name: 'Akita Airport',                        lat: 39.6156,  lng: 140.2186 },
        { code: 'GAJ', name: 'Yamagata Airport',                     lat: 38.4119,  lng: 140.3711 },
        { code: 'FKS', name: 'Fukushima Airport',                    lat: 37.2269,  lng: 140.4308 },
        // ── Kanto / Chubu ──
        { code: 'FSZ', name: 'Shizuoka Airport (Fuji Dream)',        lat: 34.7960,  lng: 138.1892 },
        { code: 'KMQ', name: 'Komatsu Airport (Kanazawa)',           lat: 36.3946,  lng: 136.4064 },
        { code: 'TOY', name: 'Toyama Airport',                       lat: 36.6483,  lng: 137.1883 },
        { code: 'NKM', name: 'Nagoya Komaki Airport',                lat: 35.2550,  lng: 136.9239 },
        // ── Chugoku ──
        { code: 'YGJ', name: 'Yonago Kitaro Airport',                lat: 35.4922,  lng: 133.2361 },
        { code: 'IWJ', name: 'Iwami Airport (Masuda)',               lat: 34.6764,  lng: 131.7900 },
        { code: 'TTJ', name: 'Tottori Airport',                      lat: 35.5301,  lng: 134.1667 },
        // ── Shikoku ──
        { code: 'TAK', name: 'Takamatsu Airport',                    lat: 34.2142,  lng: 134.0161 },
        { code: 'MYJ', name: 'Matsuyama Airport',                    lat: 33.8272,  lng: 132.6996 },
        { code: 'TKS', name: 'Tokushima Awaodori Airport',           lat: 34.1329,  lng: 134.6066 },
        { code: 'KCZ', name: 'Kochi Ryoma Airport',                  lat: 33.5461,  lng: 133.6694 },
        // ── Kyushu ──
        { code: 'NGS', name: 'Nagasaki Airport',                     lat: 32.9169,  lng: 129.9136 },
        { code: 'KMJ', name: 'Kumamoto Airport',                     lat: 32.8373,  lng: 130.8552 },
        { code: 'OIT', name: 'Oita Airport',                         lat: 33.4792,  lng: 131.7369 },
        { code: 'KMI', name: 'Miyazaki Airport',                     lat: 31.8772,  lng: 131.4488 },
        { code: 'KOJ', name: 'Kagoshima Airport',                    lat: 31.8034,  lng: 130.7192 },
        { code: 'NGS', name: 'Nagasaki Airport',                     lat: 32.9169,  lng: 129.9136 },
        { code: 'HSG', name: 'Saga Airport',                         lat: 33.1497,  lng: 130.3022 },
        { code: 'UBJ', name: 'Yamaguchi-Ube Airport',                lat: 33.9300,  lng: 131.2789 },
        // ── Okinawa / Nansei Islands ──
        { code: 'ISG', name: 'New Ishigaki Airport',                 lat: 24.3964,  lng: 124.1872 },
        { code: 'MMY', name: 'Miyako Airport',                       lat: 24.7829,  lng: 125.2946 },
        { code: 'OKE', name: 'Okinoerabu Airport',                   lat: 27.4256,  lng: 128.7019 },
        // ── General / Business Aviation ──
        { code: 'YAO', name: 'Yao Airport (Osaka)',                  lat: 34.5966,  lng: 135.6029 },
    ],
    korea: [
        // ── Major International ──
        { code: 'ICN', name: 'Seoul Incheon International Airport',       lat: 37.4602,  lng: 126.4407 },
        { code: 'GMP', name: 'Seoul Gimpo International Airport',         lat: 37.5583,  lng: 126.7906 },
        { code: 'PUS', name: 'Busan Gimhae International Airport',        lat: 35.1795,  lng: 128.9382 },
        { code: 'CJU', name: 'Jeju International Airport',                lat: 33.5113,  lng: 126.4930 },
        { code: 'TAE', name: 'Daegu International Airport',               lat: 35.8948,  lng: 128.6586 },
        { code: 'CJJ', name: 'Cheongju International Airport',            lat: 36.7166,  lng: 127.4991 },
        { code: 'MWX', name: 'Muan International Airport',                lat: 34.9914,  lng: 126.3828 },
        { code: 'YNY', name: 'Yangyang International Airport',            lat: 38.0614,  lng: 128.6694 },
        // ── Domestic ──
        { code: 'KWJ', name: 'Gwangju Airport',                           lat: 35.1236,  lng: 126.8092 },
        { code: 'RSU', name: 'Yeosu Airport',                             lat: 34.8422,  lng: 127.6162 },
        { code: 'USN', name: 'Ulsan Airport',                             lat: 35.5935,  lng: 129.3520 },
        { code: 'KUV', name: 'Gunsan Airport',                            lat: 35.9038,  lng: 126.6159 },
        { code: 'HIN', name: 'Sacheon Airport (Jinju)',                   lat: 35.0886,  lng: 128.0703 },
        { code: 'KPO', name: 'Pohang Airport',                            lat: 35.9880,  lng: 129.4201 },
        { code: 'WJU', name: 'Wonju Airport',                             lat: 37.4382,  lng: 127.9604 },
        { code: 'SHO', name: 'Sokcho Airport',                            lat: 38.1442,  lng: 128.5986 },
        { code: 'MPK', name: 'Mokpo Airport',                             lat: 34.7589,  lng: 126.3805 },
        { code: 'KAG', name: 'Gangneung Airport',                         lat: 37.7536,  lng: 128.9441 },
        { code: 'SWU', name: 'Suwon Airport',                             lat: 37.2394,  lng: 127.0075 },
        { code: 'OKP', name: 'Jeonju (Kunsan) Airport',                   lat: 35.9038,  lng: 126.6159 },
    ],
    international: [
        // ── North America ──
        { code: 'JFK', name: 'New York JFK Airport',                      lat: 40.6413,  lng: -73.7781 },
        { code: 'EWR', name: 'Newark Liberty International Airport',      lat: 40.6895,  lng: -74.1745 },
        { code: 'LAX', name: 'Los Angeles International Airport',         lat: 34.0522,  lng: -118.2437 },
        { code: 'SFO', name: 'San Francisco International Airport',       lat: 37.6213,  lng: -122.3790 },
        { code: 'ORD', name: 'Chicago O\'Hare International Airport',     lat: 41.9742,  lng: -87.9073 },
        { code: 'DFW', name: 'Dallas/Fort Worth International Airport',   lat: 32.8998,  lng: -97.0403 },
        { code: 'MIA', name: 'Miami International Airport',               lat: 25.7959,  lng: -80.2870 },
        { code: 'BOS', name: 'Boston Logan International Airport',        lat: 42.3656,  lng: -71.0096 },
        { code: 'YYZ', name: 'Toronto Pearson International Airport',     lat: 43.6772,  lng: -79.6306 },
        { code: 'YVR', name: 'Vancouver International Airport',           lat: 49.1947,  lng: -123.1792 },
        { code: 'MEX', name: 'Mexico City International Airport',         lat: 19.4363,  lng: -99.0721 },
        // ── South America ──
        { code: 'GRU', name: 'São Paulo Guarulhos International Airport', lat: -23.4356, lng: -46.4731 },
        { code: 'EZE', name: 'Buenos Aires Ezeiza International Airport', lat: -34.8222, lng: -58.5358 },
        { code: 'SCL', name: 'Santiago Arturo Merino Benítez Airport',    lat: -33.3930, lng: -70.7858 },
        { code: 'BOG', name: 'Bogotá El Dorado International Airport',    lat: 4.7016,   lng: -74.1469 },
        { code: 'LIM', name: 'Lima Jorge Chávez International Airport',   lat: -12.0219, lng: -77.1143 },
        // ── Europe ──
        { code: 'LHR', name: 'London Heathrow Airport',                   lat: 51.4700,  lng: -0.4543 },
        { code: 'CDG', name: 'Paris Charles de Gaulle Airport',           lat: 49.0097,  lng: 2.5479 },
        { code: 'FRA', name: 'Frankfurt Airport',                         lat: 50.0379,  lng: 8.5622 },
        { code: 'AMS', name: 'Amsterdam Schiphol Airport',                lat: 52.3086,  lng: 4.7639 },
        { code: 'MUC', name: 'Munich Airport',                            lat: 48.3537,  lng: 11.7750 },
        { code: 'MAD', name: 'Madrid Barajas International Airport',      lat: 40.4839,  lng: -3.5680 },
        { code: 'FCO', name: 'Rome Fiumicino Airport',                    lat: 41.9742,  lng: 12.2389 },
        { code: 'MXP', name: 'Milan Malpensa International Airport',      lat: 45.6306,  lng: 8.7281 },
        { code: 'ZRH', name: 'Zurich Airport',                            lat: 47.4647,  lng: 8.5492 },
        { code: 'VIE', name: 'Vienna International Airport',              lat: 48.1103,  lng: 16.5697 },
        { code: 'BRU', name: 'Brussels Airport',                          lat: 50.9014,  lng: 4.4844 },
        { code: 'ARN', name: 'Stockholm Arlanda Airport',                 lat: 59.6519,  lng: 17.9186 },
        { code: 'OSL', name: 'Oslo Gardermoen Airport',                   lat: 60.1939,  lng: 11.1004 },
        { code: 'CPH', name: 'Copenhagen Kastrup Airport',                lat: 55.6180,  lng: 12.6508 },
        { code: 'HEL', name: 'Helsinki-Vantaa Airport',                   lat: 60.3172,  lng: 24.9633 },
        { code: 'ATH', name: 'Athens Eleftherios Venizelos Airport',      lat: 37.9364,  lng: 23.9445 },
        { code: 'IST', name: 'Istanbul Airport',                          lat: 41.2753,  lng: 28.7519 },
        // ── Middle East ──
        { code: 'DXB', name: 'Dubai International Airport',               lat: 25.2532,  lng: 55.3657 },
        { code: 'AUH', name: 'Abu Dhabi International Airport',           lat: 24.4330,  lng: 54.6511 },
        { code: 'DOH', name: 'Doha Hamad International Airport',          lat: 25.2731,  lng: 51.6083 },
        { code: 'RUH', name: 'Riyadh King Khalid International Airport',  lat: 24.9578,  lng: 46.6988 },
        { code: 'TLV', name: 'Tel Aviv Ben Gurion Airport',               lat: 32.0114,  lng: 34.8867 },
        // ── Africa ──
        { code: 'CAI', name: 'Cairo International Airport',               lat: 30.1219,  lng: 31.4056 },
        { code: 'JNB', name: 'Johannesburg OR Tambo International Airport', lat: -26.1367, lng: 28.2411 },
        { code: 'CPT', name: 'Cape Town International Airport',           lat: -33.9649, lng: 18.6017 },
        { code: 'NBO', name: 'Nairobi Jomo Kenyatta International Airport', lat: -1.3192, lng: 36.9275 },
        { code: 'LOS', name: 'Lagos Murtala Muhammed International Airport', lat: 6.5774,  lng: 3.3215 },
        { code: 'CMN', name: 'Casablanca Mohammed V International Airport', lat: 33.3675, lng: -7.5900 },
        // ── South Asia ──
        { code: 'DEL', name: 'Delhi Indira Gandhi International Airport', lat: 28.4353,  lng: 77.1115 },
        { code: 'BOM', name: 'Mumbai Chhatrapati Shivaji International Airport', lat: 19.0896, lng: 72.8656 },
        { code: 'BLR', name: 'Bengaluru Kempegowda International Airport', lat: 13.1986,  lng: 77.7066 },
        { code: 'CMB', name: 'Colombo Bandaranaike International Airport', lat: 7.1806,   lng: 79.8842 },
        { code: 'KTM', name: 'Kathmandu Tribhuvan International Airport', lat: 27.6966,  lng: 85.3591 },
        // ── Southeast Asia ──
        { code: 'SIN', name: 'Singapore Changi Airport',                  lat: 1.3644,   lng: 103.9915 },
        { code: 'BKK', name: 'Bangkok Suvarnabhumi Airport',              lat: 13.6811,  lng: 100.7477 },
        { code: 'KUL', name: 'Kuala Lumpur International Airport',        lat: 2.7456,   lng: 101.7072 },
        { code: 'CGK', name: 'Jakarta Soekarno-Hatta International Airport', lat: -6.1256, lng: 106.6559 },
        { code: 'MNL', name: 'Manila Ninoy Aquino International Airport', lat: 14.5086,  lng: 121.0196 },
        { code: 'SGN', name: 'Ho Chi Minh City Tan Son Nhat Airport',     lat: 10.8188,  lng: 106.6520 },
        { code: 'HAN', name: 'Hanoi Noi Bai International Airport',       lat: 21.2212,  lng: 105.8072 },
        { code: 'RGN', name: 'Yangon International Airport',              lat: 16.9073,  lng: 96.1332 },
        // ── East Asia ──
        { code: 'HKG', name: 'Hong Kong International Airport',           lat: 22.3080,  lng: 113.9185 },
        { code: 'PEK', name: 'Beijing Capital International Airport',     lat: 40.0724,  lng: 116.5974 },
        { code: 'PKX', name: 'Beijing Daxing International Airport',      lat: 39.5097,  lng: 116.4105 },
        { code: 'PVG', name: 'Shanghai Pudong International Airport',     lat: 31.1443,  lng: 121.8083 },
        { code: 'SHA', name: 'Shanghai Hongqiao International Airport',   lat: 31.1979,  lng: 121.3363 },
        { code: 'CAN', name: 'Guangzhou Baiyun International Airport',    lat: 23.3924,  lng: 113.2990 },
        { code: 'CTU', name: 'Chengdu Tianfu International Airport',      lat: 30.3125,  lng: 104.4438 },
        { code: 'TPE', name: 'Taipei Taoyuan International Airport',      lat: 25.0777,  lng: 121.2327 },
        // ── Oceania ──
        { code: 'SYD', name: 'Sydney Kingsford Smith Airport',            lat: -33.9461, lng: 151.1772 },
        { code: 'MEL', name: 'Melbourne Tullamarine Airport',             lat: -37.6690, lng: 144.8410 },
        { code: 'BNE', name: 'Brisbane Airport',                          lat: -27.3842, lng: 153.1175 },
        { code: 'PER', name: 'Perth Airport',                             lat: -31.9403, lng: 115.9672 },
        { code: 'AKL', name: 'Auckland International Airport',            lat: -37.0082, lng: 174.7850 },
    ]
};

// Function to initialize airport search with autocomplete
function initAirportSearch(inputElementId, suggestionsElementId, onSelectCallback) {
    const inputElement = document.getElementById(inputElementId);
    const suggestionsElement = document.getElementById(suggestionsElementId);
    
    if (!inputElement || !suggestionsElement) return;

    // make sure the browser won't interfere with airport codes/names
    inputElement.setAttribute('autocomplete', 'off');
    inputElement.setAttribute('spellcheck', 'false');
    inputElement.setAttribute('autocorrect', 'off');
    inputElement.setAttribute('autocapitalize', 'none');
    
    let selectedAirport = null;
    
    // Get all airports
    const allAirports = [...airports.japan, ...airports.korea, ...airports.international];
    
    // Set default airport (Tokyo Haneda)
    selectedAirport = airports.japan[0];
    inputElement.value = `${selectedAirport.name} (${selectedAirport.code})`;
    
    // Handle input changes
    inputElement.addEventListener('input', function() {
        const query = this.value.trim();
        
        if (query.length === 0) {
            suggestionsElement.style.display = 'none';
            return;
        }
        
        // Search airports
        const matches = searchAirports(query);
        
        if (matches.length === 0) {
            suggestionsElement.style.display = 'none';
            return;
        }
        
        // Display suggestions
        suggestionsElement.innerHTML = '';
        matches.forEach(airport => {
            const suggestion = document.createElement('div');
            suggestion.style.cssText = 'padding: 0.75rem 1rem; cursor: pointer; border-bottom: 1px solid #f0f0f0; transition: background 0.2s;';
            suggestion.innerHTML = `<strong>${airport.code}</strong> - ${airport.name}`;
            
            suggestion.addEventListener('mouseenter', function() {
                this.style.background = '#f5f7fa';
            });
            
            suggestion.addEventListener('mouseleave', function() {
                this.style.background = 'white';
            });
            
            suggestion.addEventListener('click', function() {
                selectedAirport = airport;
                inputElement.value = `${airport.name} (${airport.code})`;
                suggestionsElement.style.display = 'none';
                
                // Call the callback with airport coordinates
                if (onSelectCallback) {
                    onSelectCallback(airport.lat, airport.lng, airport);
                }
            });
            
            suggestionsElement.appendChild(suggestion);
        });
        
        suggestionsElement.style.display = 'block';
    });
    
    // Close suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target !== inputElement && e.target !== suggestionsElement) {
            suggestionsElement.style.display = 'none';
        }
    });
    
    // Handle Enter key
    inputElement.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const firstSuggestion = suggestionsElement.querySelector('div');
            if (firstSuggestion) {
                firstSuggestion.click();
            }
        }
    });
    
    return selectedAirport;
}

// Function to get airport by code
function getAirportByCode(code) {
    const allAirports = [...airports.japan, ...airports.korea, ...airports.international];
    return allAirports.find(airport => airport.code === code);
}

// Function to search airports by name or code
function searchAirports(query) {
    const allAirports = [...airports.japan, ...airports.korea, ...airports.international];
    const lowerQuery = query.toLowerCase();
    return allAirports.filter(airport => 
        airport.code.toLowerCase().includes(lowerQuery) ||
        airport.name.toLowerCase().includes(lowerQuery)
    );
}
