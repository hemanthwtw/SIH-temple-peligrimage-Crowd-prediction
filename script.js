// --- API KEYS ---
// API Keys are integrated directly into the code as requested.
const GEMINI_API_KEY = "AIzaSyDHGQPrXJLH4rNItDNgiXPro3GjZPyr0Bc";


// --- MULTILINGUAL SUPPORT ---
const translations = {
    en: {
        mainTitle: "Temple Surge Predictor",
        subTitle: "Estimate potential visitor surges at major temples in India.",
        selectTempleLabel: "Select Temple",
        selectDateLabel: "Select Date",
        predictButton: "Predict Surge",
        templeKashi: "Kashi Vishwanath, Varanasi",
        templeTirumala: "Tirumala Tirupati, Andhra Pradesh",
        templeVaishno: "Vaishno Devi, Jammu & Kashmir",
        templeGolden: "Golden Temple, Amritsar",
        templeJagannath: "Jagannath Temple, Puri",
        templeAnnavaram: "Annavaram, Andhra Pradesh",
        templeVijayawada: "Kanaka Durga, Vijayawada",
        templeSabarimala: "Sabarimala, Kerala",
        templeKamakhya: "Kamakhya, Guwahati",
        templeSwamimalai: "Swamimalai, Tamil Nadu",
        templeDwarkadhish: "Dwarkadhish, Dwaraka",
        templePavagadh: "Kalika Mata, Pavagadh",
        templeAmbaji: "Ambaji, Gujarat",
        templeAinavilli: "Ainavilli Siddi Vinayaka, Ainavilli",
        disclaimer: "Disclaimer: This is a prototype using mock data for demonstration purposes. Predictions and advisories are illustrative and not a substitute for official guidance.",
        solutionInfo: "The proposed solution should ensure devotee safety, reduced waiting times, smooth mobility, and improved pilgrimage experience, while being scalable across different temple towns in India.",
        predictionFor: "Prediction for",
        predictedSurgeLevel: "Predicted Surge Level",
        tripAdvisory: "Trip Advisory ✨",
        smartQueue: "Smart Queue 🎟️",
        monitoring: "Monitoring 🛰️",
        emergency: "Emergency 🛡️",
        traffic: "Traffic 🚗",
        pilgrimInfo: "Pilgrim Info 📱",
        accessibility: "Accessibility ♿",
        templeMap: "Temple Map 📍",
        weather: "Weather 🌦️",
        festivalCalendar: "Festival Calendar 📅",
        liveMonitoringTitle: "Live Crowd Monitoring Dashboard",
        futurePredictionTitle: "AI Predicted Crowd Distribution",
        aiAnalysis: "Live AI Analysis:",
        initializing: "Initializing analysis...",
        zoneEntrance: "Main Entrance",
        zoneSanctum: "Sanctum Queue",
        zonePrasad: "Prasad Counter",
        zoneExit: "Exit Path",
        dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        loadingText: "Loading..."
    },
    hi: {
        mainTitle: "मंदिर सर्ज भविष्यवक्ता",
        subTitle: "भारत के प्रमुख मंदिरों में संभावित भक्तों की भीड़ का अनुमान लगाएं।",
        selectTempleLabel: "मंदिर चुनें",
        selectDateLabel: "दिनांक चुनें",
        predictButton: "भीड़ का अनुमान लगाएं",
        templeKashi: "काशी विश्वनाथ, वाराणसी",
        templeTirumala: "तिरुमाला तिरुपति, आंध्र प्रदेश",
        templeVaishno: "वैष्णो देवी, जम्मू और कश्मीर",
        templeGolden: "स्वर्ण मंदिर, अमृतसर",
        templeJagannath: "जगन्नाथ मंदिर, पुरी",
        templeAnnavaram: "अन्नावरम, आंध्र प्रदेश",
        templeVijayawada: "कनक दुर्गा, विजयवाड़ा",
        templeSabarimala: "सबरीमाला, केरल",
        templeKamakhya: "कामाख्या, गुवाहाटी",
        templeSwamimalai: "स्वामीमलाई, तमिलनाडु",
        templeDwarkadhish: "द्वारकाधीश, द्वारका",
        templePavagadh: "कालिका माता, पावागढ़",
        templeAmbaji: "अंबाजी, गुजरात",
        templeAinavilli: "ऐनविल्ली सिद्धि विनायक, ऐनविल्ली",
        disclaimer: "अस्वीकरण: यह प्रदर्शन उद्देश्यों के लिए मॉक डेटा का उपयोग करने वाला एक प्रोटोटाइप है। भविष्यवाणियां और सलाह केवल उदाहरण के लिए हैं और आधिकारिक मार्गदर्शन का विकल्प नहीं हैं।",
        solutionInfo: "प्रस्तावित समाधान को भक्त सुरक्षा, कम प्रतीक्षा समय, सुगम गतिशीलता और बेहतर तीर्थयात्रा अनुभव सुनिश्चित करना चाहिए, साथ ही भारत के विभिन्न मंदिर शहरों में स्केलेबल होना चाहिए।",
        predictionFor: "के लिए भविष्यवाणी",
        predictedSurgeLevel: "अनुमानित भीड़ स्तर",
        tripAdvisory: "यात्रा सलाह ✨",
        smartQueue: "स्मार्ट कतार 🎟️",
        monitoring: "निगरानी 🛰️",
        emergency: "आपातकाल 🛡️",
        traffic: "यातायात 🚗",
        pilgrimInfo: "तीर्थयात्री जानकारी 📱",
        accessibility: "सुलभता ♿",
        templeMap: "मंदिर का नक्शा 📍",
        weather: "मौसम 🌦️",
         festivalCalendar: "त्योहार कैलेंडर 📅",
        liveMonitoringTitle: "लाइव भीड़ निगरानी डैशबोर्ड",
        futurePredictionTitle: "एआई अनुमानित भीड़ वितरण",
        aiAnalysis: "लाइव एआई विश्लेषण:",
        initializing: "विश्लेषण शुरू हो रहा है...",
        zoneEntrance: "मुख्य प्रवेश द्वार",
        zoneSanctum: "गर्भगृह कतार",
        zonePrasad: "प्रसाद काउंटर",
        zoneExit: "निकास पथ",
        dayNames: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
        monthNames: ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"],
        loadingText: "लोड हो रहा है..."
    },
    te: {
        mainTitle: "ఆలయ రద్దీ అంచనా",
        subTitle: "భారతదేశంలోని ప్రధాన దేవాలయాలలో భక్తుల రద్దీని అంచనా వేయండి.",
        selectTempleLabel: "ఆలయం ఎంచుకోండి",
        selectDateLabel: "తేదీ ఎంచుకోండి",
        predictButton: "రద్దీని అంచనా వేయండి",
        templeKashi: "కాశీ విశ్వనాథ్, వారణాసి",
        templeTirumala: "తిరుమల తిరుపతి, ఆంధ్రప్రదేశ్",
        templeVaishno: "వైష్ణో దేవి, జమ్మూ & కాశ్మీర్",
        templeGolden: "స్వర్ణ దేవాలయం, అమృత్‌సర్",
        templeJagannath: "జగన్నాథ ఆలయం, పూరి",
        templeAnnavaram: "అన్నవరం, ఆంధ్రప్రదేశ్",
        templeVijayawada: "కనక దుర్గ, విజయవాడ",
        templeSabarimala: "శబరిమల, కేరళ",
        templeKamakhya: "కామాఖ్య, గౌహతి",
        templeSwamimalai: "స్వామిమలై, తమిళనాడు",
        templeDwarkadhish: "ద్వారకాధీశ, ద్వారక",
        templePavagadh: "కాళికా మాత, పావగఢ్",
        templeAmbaji: "అంబాజీ, గుజరాత్",
        templeAinavilli: "ఐనవిల్లి సిద్ధి వినాయక, ఐనవిల్లి",
        disclaimer: "నిరాకరణ: ఇది ప్రదర్శన ప్రయోజనాల కోసం మాక్ డేటాను ఉపయోగించే నమూనా. అంచనాలు మరియు సలహాలు ఉదాహరణ ప్రయోజనాల కోసం మాత్రమే మరియు అధికారిక మార్గదర్శకత్వానికి ప్రత్యామ్నాయం కాదు.",
        solutionInfo: "ప్రతిపాదిత పరిష్కారం భక్తుల భద్రత, తగ్గిన నిరీక్షణ సమయాలు, సులభమైన రవాణా మరియు మెరుగైన తీర్థయాత్ర అనుభవాన్ని నిర్ధారించాలి, అదే సమయంలో భారతదేశంలోని వివిధ ఆలయ పట్టణాలలో స్కేలబుల్‌గా ఉండాలి.",
        predictionFor: "కోసం అంచనా",
        predictedSurgeLevel: "అంచనా వేయబడిన రద్దీ స్థాయి",
        tripAdvisory: "యాత్ర సలహా ✨",
        smartQueue: "స్మార్ట్ క్యూ 🎟️",
        monitoring: "పర్యవేక్షణ 🛰️",
        emergency: "అత్యవసర పరిస్థితి 🛡️",
        traffic: "ట్రాఫిక్ 🚗",
        pilgrimInfo: "యాత్రికుల సమాచారం 📱",
        accessibility: "ప్రాప్యత ♿",
        templeMap: "ఆలయ పటం 📍",
        weather: "వాతావరణం 🌦️",
        festivalCalendar: "పండుగ క్యాలెండర్ 📅",
        liveMonitoringTitle: "లైవ్ క్రౌడ్ మానిటరింగ్ డాష్‌బోర్డ్",
        futurePredictionTitle: "AI అంచనా వేసిన జన సమూహ పంపిణీ",
        aiAnalysis: "లైవ్ AI విశ్లేషణ:",
        initializing: "విశ్లేషణ ప్రారంభమవుతోంది...",
        zoneEntrance: "ప్రధాన ప్రవేశం",
        zoneSanctum: "గర్భగుడి క్యూ",
        zonePrasad: "ప్రసాదం కౌంటర్",
        zoneExit: "నిష్క్రమణ మార్గం",
        dayNames: ["ఆది", "సోమ", "మంగళ", "బుధ", "గురు", "శుక్ర", "శని"],
        monthNames: ["జనవరి", "ఫిబ్రవరి", "మార్చి", "ఏప్రిల్", "మే", "జూన్", "జూలై", "ఆగస్టు", "సెప్టెంబర్", "అక్టోబర్", "నవంబర్", "డిసెంబర్"],
        loadingText: "లోడ్ అవుతోంది..."
    },
    mr: {
        mainTitle: "मंदिर गर्दी अंदाज",
        subTitle: "भारतातील प्रमुख मंदिरांमध्ये संभाव्य भाविकांच्या गर्दीचा अंदाज घ्या.",
        selectTempleLabel: "मंदिर निवडा",
        selectDateLabel: "तारीख निवडा",
        predictButton: "गर्दीचा अंदाज लावा",
        templeKashi: "काशी विश्वनाथ, वाराणसी",
        templeTirumala: "तिरुमला तिरुपती, आंध्र प्रदेश",
        templeVaishno: "वैष्णो देवी, जम्मू आणि काश्मीर",
        templeGolden: "सुवर्ण मंदिर, अमृतसर",
        templeJagannath: "जगन्नाथ मंदिर, पुरी",
        templeAnnavaram: "अन्नवरम, आंध्र प्रदेश",
        templeVijayawada: "कनक दुर्गा, विजयवाडा",
        templeSabarimala: "सबरीमाला, केरळ",
        templeKamakhya: "कामाख्या, गुवाहाटी",
        templeSwamimalai: "स्वामीमलाई, तामिळनाडू",
        templeDwarkadhish: "द्वारकाधीश, द्वारका",
        templePavagadh: "कालिका माता, पावागड",
        templeAmbaji: "अंबाजी, गुजरात",
        templeAinavilli: "ऐनविल्ली सिद्धी विनायक, ऐनविल्ली",
        disclaimer: "अस्वीकरण: हा प्रदर्शनाच्या उद्देशाने मॉक डेटा वापरणारा एक नमुना आहे. अंदाज आणि सूचना केवळ उदाहरणासाठी आहेत आणि अधिकृत मार्गदर्शनाचा पर्याय नाहीत.",
        solutionInfo: "प्रस्तावित समाधानाने भाविकांची सुरक्षा, कमी प्रतीक्षा वेळ, सुलभ गतिशीलता आणि सुधारित तीर्थक्षेत्र अनुभव सुनिश्चित केला पाहिजे, तसेच भारतातील विविध मंदिर शहरांमध्ये स्केलेबल असावा.",
        predictionFor: "साठी अंदाज",
        predictedSurgeLevel: "अपेक्षित गर्दीची पातळी",
        tripAdvisory: "प्रवासाचा सल्ला ✨",
        smartQueue: "स्मार्ट रांग 🎟️",
        monitoring: "देखरेख 🛰️",
        emergency: "आपत्कालीन 🛡️",
        traffic: "वाहतूक 🚗",
        pilgrimInfo: "यात्रेकरू माहिती 📱",
        accessibility: "प्रवेशयोग्यता ♿",
        templeMap: "मंदिर नकाशा 📍",
        weather: "हवामान 🌦️",
        festivalCalendar: "सण कॅलेंडर 📅",
        liveMonitoringTitle: "थेट गर्दी देखरेख डॅशबोर्ड",
        futurePredictionTitle: "एआय अंदाजित गर्दी वितरण",
        aiAnalysis: "थेट एआय विश्लेषण:",
        initializing: "विश्लेषण सुरू होत आहे...",
        zoneEntrance: "मुख्य प्रवेशद्वार",
        zoneSanctum: "गर्भगृह रांग",
        zonePrasad: "प्रसाद काउंटर",
        zoneExit: "बाहेर जाण्याचा मार्ग",
        dayNames: ["रवि", "सोम", "मंगळ", "बुध", "गुरु", "शुक्र", "शनि"],
        monthNames: ["जानेवारी", "फेब्रुवारी", "मार्च", "एप्रिल", "मे", "जून", "जुलै", "ऑगस्ट", "सप्टेंबर", "ऑक्टोबर", "नोव्हेंबर", "डिसेंबर"],
        loadingText: "लोड होत आहे..."
    },
    gu: {
        mainTitle: "મંદિર ભીડ આગાહી",
        subTitle: "ભારતના મુખ્ય મંદિરોમાં સંભવિત મુલાકાતીઓની ભીડનો અંદાજ લગાવો.",
        selectTempleLabel: "મંદિર પસંદ કરો",
        selectDateLabel: "તારીખ પસંદ કરો",
        predictButton: "ભીડની આગાહી કરો",
        templeKashi: "કાશી વિશ્વનાથ, વારાણસી",
        templeTirumala: "તિરુમાલા તિરુપતિ, આંધ્ર પ્રદેશ",
        templeVaishno: "વૈષ્ણો દેવી, જમ્મુ અને કાશ્મીર",
        templeGolden: "સુવર્ણ મંદિર, અમૃતસર",
        templeJagannath: "જગન્નાથ મંદિર, પુરી",
        templeAnnavaram: "અન્નવરમ, આંધ્ર પ્રદેશ",
        templeVijayawada: "કનક દુર્ગા, વિજયવાડા",
        templeSabarimala: "સબરીમાલા, કેરળ",
        templeKamakhya: "કામાખ્યા, ગુવાહાટી",
        templeSwamimalai: "સ્વામીમલાઈ, તમિલનાડુ",
        templeDwarkadhish: "દ્વારકાધીશ, દ્વારકા",
        templePavagadh: "કાલિકા માતા, પાવાગઢ",
        templeAmbaji: "અંબાજી, ગુજરાત",
        templeAinavilli: "ઐનવિલ્લી સિદ્ધિ વિનાયક, ઐનવિલ્લી",
        disclaimer: "અસ્વીકરણ: આ પ્રદર્શન હેતુઓ માટે મોક ડેટાનો ઉપયોગ કરીને એક પ્રોટોટાઇપ છે. આગાહીઓ અને સલાહો દૃષ્ટાંતરૂપ છે અને સત્તાવાર માર્ગદર્શનનો વિકલ્પ નથી.",
        solutionInfo: "સૂચિત ઉકેલ ભક્તોની સલામતી, ઓછો પ્રતીક્ષા સમય, સરળ ગતિશીલતા અને સુધારેલ તીર્થયાત્રાનો અનુભવ સુનિશ્ચિત કરે છે, જ્યારે ભારતના વિવિધ મંદિર નગરોમાં માપી શકાય તેવું છે.",
        predictionFor: "માટે આગાહી",
        predictedSurgeLevel: "અપેક્ષિત ભીડનું સ્તર",
        tripAdvisory: "પ્રવાસ સલાહ ✨",
        smartQueue: "સ્માર્ટ કતાર 🎟️",
        monitoring: "નિરીક્ષણ 🛰️",
        emergency: "આપત્કાલીન 🛡️",
        traffic: "ટ્રાફિક 🚗",
        pilgrimInfo: "યાત્રાળુ માહિતી 📱",
        accessibility: "ઍક્સેસિબિલિટી ♿",
        templeMap: "મંદિરનો નકશો 📍",
        weather: "હવામાન 🌦️",
        festivalCalendar: "તહેવાર કેલેન્ડર 📅",
        liveMonitoringTitle: "લાઇવ ભીડ નિરીક્ષણ ડેશબોર્ડ",
        futurePredictionTitle: "AI દ્વારા અનુમાનિત ભીડનું વિતરણ",
        aiAnalysis: "લાઇવ AI વિશ્લેષણ:",
        initializing: "વિશ્લેષણ શરૂ કરી રહ્યું છે...",
        zoneEntrance: "મુખ્ય પ્રવેશદ્વાર",
        zoneSanctum: "ગર્ભગૃહ કતાર",
        zonePrasad: "પ્રસાદ કાઉન્ટર",
        zoneExit: "બહાર નીકળવાનો માર્ગ",
        dayNames: ["રવિ", "સોમ", "મંગળ", "બુધ", "ગુરુ", "શુક્ર", "શનિ"],
        monthNames: ["જાન્યુઆરી", "ફેબ્રુઆરી", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઑગસ્ટ", "સપ્ટેમ્બર", "ઑક્ટોબર", "નવેમ્બર", "ડિસેમ્બર"],
        loadingText: "લોડ કરી રહ્યું છે..."
    }
};

const languageSelector = document.getElementById('languageSelector');
let lastPredictionState = null; // To store the last prediction data
let currentCalendarDate = new Date(2025, 0, 1); // Start calendar in Jan 2025

function translateUI(lang) {
    document.querySelectorAll('[data-translate-key]').forEach(el => {
        const key = el.getAttribute('data-translate-key');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
    const templeOptions = document.getElementById('temple').options;
    for (let i = 0; i < templeOptions.length; i++) {
        const key = templeOptions[i].getAttribute('data-translate-key');
         if (translations[lang] && translations[lang][key]) {
            templeOptions[i].text = translations[lang][key];
        }
    }
}

languageSelector.addEventListener('change', (event) => {
    const newLang = event.target.value;
    translateUI(newLang);
    if (lastPredictionState) {
        renderResultCard(newLang);
    }
});

// --- MOCK DATA & AI LOGIC ---
const festivalSurgeFactors = {
    "2025-03-14": { factor: 3.5, reason: "Holi" },
    "2025-10-21": { factor: 4.5, reason: "Diwali" },
    "2025-10-22": { factor: 4.2, reason: "Diwali" },
    "2025-09-22": { factor: 3.0, reason: "Navratri Start" },
    "2025-10-02": { factor: 3.2, reason: "Dussehra / Navratri End" },
    "2025-08-16": { factor: 2.8, reason: "Janmashtami" },
    "2025-02-26": { factor: 3.8, reason: "Maha Shivratri" },
    "2025-01-26": { factor: 2.0, reason: "Republic Day" },
    "2025-08-15": { factor: 2.2, reason: "Independence Day" },
    "2025-10-02": { factor: 2.5, reason: "Gandhi Jayanti" },
    "2025-12-25": { factor: 2.1, reason: "Christmas / Holiday Season" },
    "2025-06-27": { factor: 5.0, reason: "Jagannath Rath Yatra", temple: "jagannath_temple" }
};

const templeData = {
    kashi_vishwanath: {
        baseVisitors: 15000,
        coords: { lat: 25.3109, lng: 83.0107 },
        backgroundImage: "https://images.unsplash.com/photo-1622233859604-0c5825103c80?q=80&w=1932&auto=format&fit=crop",
        pois: [
            { name: 'Washrooms', icon: '🚻', latOffset: 0.0005, lngOffset: 0.0008 },
            { name: 'First Aid', icon: '⚕️', latOffset: 0.0006, lngOffset: -0.0008 },
            { name: 'Main Entrance (Gate 4)', icon: '🚪', latOffset: -0.0008, lngOffset: 0 },
            { name: 'Main Sanctum', icon: '🕉️', latOffset: 0, lngOffset: 0 },
            { name: 'Prasad Counter', icon: ' प्रसाद', latOffset: -0.0004, lngOffset: -0.0006 },
            { name: 'Wheelchair Assistance', icon: '♿', latOffset: -0.0007, lngOffset: 0.0007 },
        ]
    },
    tirumala_tirupati: {
        baseVisitors: 60000,
        coords: { lat: 13.6833, lng: 79.3484 },
        backgroundImage: "https://images.unsplash.com/photo-1608661438558-8add83a2702a?q=80&w=1964&auto=format&fit=crop",
        pois: [
            { name: 'Washrooms', icon: '🚻', latOffset: 0.0010, lngOffset: -0.0015 },
            { name: 'Medical Center', icon: '⚕️', latOffset: -0.0015, lngOffset: -0.0012 },
            { name: 'Main Entrance (Vaikuntam)', icon: '🚪', latOffset: 0, lngOffset: 0.0020 },
            { name: 'Main Sanctum', icon: '🕉️', latOffset: 0, lngOffset: 0 },
            { name: 'Laddu Counter', icon: ' प्रसाद', latOffset: 0.0018, lngOffset: 0.0010 },
            { name: 'Wheelchair Assistance', icon: '♿', latOffset: -0.0005, lngOffset: 0.0018 },
        ]
    },
    vaishno_devi: {
        baseVisitors: 25000,
        coords: { lat: 33.0298, lng: 74.9482 },
        backgroundImage: "https://images.unsplash.com/photo-1605658142319-93ab841415ae?q=80&w=2070&auto=format&fit=crop",
        pois: [
            { name: 'Washrooms', icon: '🚻', latOffset: 0.0004, lngOffset: 0.0006 },
            { name: 'Medical Post', icon: '⚕️', latOffset: -0.0005, lngOffset: -0.0005 },
            { name: 'Bhawan Entrance', icon: '🚪', latOffset: -0.0010, lngOffset: 0 },
            { name: 'Holy Cave', icon: '🕉️', latOffset: 0, lngOffset: 0 },
        ]
    },
    golden_temple: {
        baseVisitors: 40000,
        coords: { lat: 31.6200, lng: 74.8765 },
        backgroundImage: "https://images.unsplash.com/photo-1631525418349-f515d1163a33?q=80&w=1931&auto=format&fit=crop",
        pois: [
             { name: 'Washrooms', icon: '🚻', latOffset: 0.0006, lngOffset: 0.0006 },
             { name: 'First Aid', icon: '⚕️', latOffset: 0.0006, lngOffset: -0.0006 },
             { name: 'Main Entrance', icon: '🚪', latOffset: -0.0010, lngOffset: 0 },
             { name: 'Harmandir Sahib', icon: '🕉️', latOffset: 0, lngOffset: 0 },
             { name: 'Langar Hall', icon: '🍲', latOffset: 0.0008, lngOffset: 0.0002 },
        ]
    },
    jagannath_temple: {
        baseVisitors: 20000,
        coords: { lat: 19.8049, lng: 85.8182 },
        backgroundImage: "https://images.unsplash.com/photo-1605325251693-78922a7e1291?q=80&w=1974&auto=format&fit=crop",
        pois: [
            { name: 'Washrooms', icon: '🚻', latOffset: -0.0005, lngOffset: 0.0005 },
            { name: 'Medical Aid', icon: '⚕️', latOffset: -0.0005, lngOffset: -0.0005 },
            { name: 'Lion Gate (Main Entrance)', icon: '🚪', latOffset: 0.0010, lngOffset: 0 },
            { name: 'Main Sanctum', icon: '🕉️', latOffset: 0, lngOffset: 0 },
        ]
    },
     annavaram: {
        baseVisitors: 18000,
        coords: { lat: 17.2917, lng: 82.3789 },
        backgroundImage: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Annavaram_Temple_-_Rajahmundry.jpg",
        pois: [
            { name: 'Washrooms', icon: '🚻', latOffset: 0.0008, lngOffset: -0.0005 },
            { name: 'Medical Aid', icon: '⚕️', latOffset: 0.0008, lngOffset: 0.0005 },
            { name: 'Main Entrance', icon: '🚪', latOffset: -0.001, lngOffset: 0 },
            { name: 'Main Sanctum', icon: '🕉️', latOffset: 0, lngOffset: 0 },
        ]
    },
    vijayawada: {
        baseVisitors: 22000,
        coords: { lat: 16.5167, lng: 80.6000 },
        backgroundImage: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Vijayawada_Kanaka_Durga_Temple.jpg",
        pois: [
            { name: 'Washrooms', icon: '🚻', latOffset: -0.0006, lngOffset: 0.0006 },
            { name: 'First Aid', icon: '⚕️', latOffset: 0.0005, lngOffset: -0.0005 },
            { name: 'Main Entrance', icon: '🚪', latOffset: -0.0012, lngOffset: 0 },
            { name: 'Main Sanctum', icon: '🕉️', latOffset: 0, lngOffset: 0 },
        ]
    },
    sabarimala: {
        baseVisitors: 50000,
        coords: { lat: 9.2876, lng: 77.0815 },
        backgroundImage: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Sabarimala_Temple_Kerala.jpg",
        pois: [
            { name: 'Washrooms', icon: '🚻', latOffset: 0.0005, lngOffset: 0.0008 },
            { name: 'Medical Center', icon: '⚕️', latOffset: 0.0008, lngOffset: -0.0005 },
            { name: 'Pathinettampadi', icon: '🚪', latOffset: -0.0007, lngOffset: 0 },
            { name: 'Main Sanctum', icon: '🕉️', latOffset: 0, lngOffset: 0 },
        ]
    },
    kamakhya: {
        baseVisitors: 10000,
        coords: { lat: 26.1664, lng: 91.7058 },
        backgroundImage: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Kamakhya_Temple_Guwahati_Assam.jpg",
        pois: [
            { name: 'Washrooms', icon: '🚻', latOffset: 0.0004, lngOffset: -0.0004 },
            { name: 'First Aid', icon: '⚕️', latOffset: 0.0004, lngOffset: 0.0004 },
            { name: 'Main Entrance', icon: '🚪', latOffset: -0.0008, lngOffset: 0 },
            { name: 'Main Sanctum', icon: '🕉️', latOffset: 0, lngOffset: 0 },
        ]
    },
    swamimalai: {
        baseVisitors: 8000,
        coords: { lat: 10.9575, lng: 79.3259 },
        backgroundImage: "https://upload.wikimedia.org/wikipedia/commons/2/22/Swamimalai_temple_view.jpg",
        pois: [
            { name: 'Washrooms', icon: '🚻', latOffset: 0.0003, lngOffset: 0.0003 },
            { name: 'First Aid', icon: '⚕️', latOffset: -0.0003, lngOffset: 0.0003 },
            { name: 'Main Entrance', icon: '🚪', latOffset: 0, lngOffset: -0.0005 },
            { name: 'Main Sanctum', icon: '🕉️', latOffset: 0, lngOffset: 0 },
        ]
    },
    dwarkadhish: {
        baseVisitors: 15000,
        coords: { lat: 22.2384, lng: 68.9675 },
        backgroundImage: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Dwarkadhish_Temple%2C_Dwarka.jpg",
        pois: [
            { name: 'Washrooms', icon: '🚻', latOffset: -0.0004, lngOffset: -0.0004 },
            { name: 'Medical Aid', icon: '⚕️', latOffset: 0.0004, lngOffset: -0.0004 },
            { name: 'Moksha Dwar', icon: '🚪', latOffset: 0, lngOffset: 0.0008 },
            { name: 'Main Sanctum', icon: '🕉️', latOffset: 0, lngOffset: 0 },
        ]
    },
    pavagadh: {
        baseVisitors: 12000,
        coords: { lat: 22.4578, lng: 73.5186 },
        backgroundImage: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Pavagadh_Mahakali_Temple.jpg",
        pois: [
            { name: 'Washrooms', icon: '🚻', latOffset: -0.0003, lngOffset: 0.0003 },
            { name: 'First Aid', icon: '⚕️', latOffset: 0.0003, lngOffset: -0.0003 },
            { name: 'Ropeway Station', icon: '🚠', latOffset: -0.001, lngOffset: 0 },
            { name: 'Main Sanctum', icon: '🕉️', latOffset: 0, lngOffset: 0 },
        ]
    },
    ambaji: {
        baseVisitors: 14000,
        coords: { lat: 24.3315, lng: 72.8532 },
        backgroundImage: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Ambaji_Temple_Close-up.jpg",
        pois: [
            { name: 'Washrooms', icon: '🚻', latOffset: 0.0005, lngOffset: 0.0005 },
            { name: 'Medical Center', icon: '⚕️', latOffset: 0.0005, lngOffset: -0.0005 },
            { name: 'Main Entrance', icon: '🚪', latOffset: -0.001, lngOffset: 0 },
            { name: 'Main Sanctum', icon: '🕉️', latOffset: 0, lngOffset: 0 },
        ]
    },
    ainavilli: {
        baseVisitors: 10000,
        coords: { lat: 16.6900, lng: 81.9300 },
        backgroundImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ainavilli_Vinayaka_Temple_Gopuram.jpg/1280px-Ainavilli_Vinayaka_Temple_Gopuram.jpg",
        pois: [
            { name: 'Washrooms', icon: '🚻', latOffset: 0.0004, lngOffset: 0.0004 },
            { name: 'First Aid', icon: '⚕️', latOffset: -0.0004, lngOffset: 0.0004 },
            { name: 'Main Entrance', icon: '🚪', latOffset: 0, lngOffset: -0.0006 },
            { name: 'Main Sanctum', icon: '🕉️', latOffset: 0, lngOffset: 0 },
        ]
    }
};

let liveMonitoringInterval = null;

function predictSurge(temple, dateStr) {
    const date = new Date(dateStr);
    const dayOfWeek = date.getDay();
    let baseVisitors = templeData[temple]?.baseVisitors || 20000;
    let surgeFactor = 1.0;
    let reason = "Normal Day";

    if (festivalSurgeFactors[dateStr]) {
        const event = festivalSurgeFactors[dateStr];
        if (!event.temple || event.temple === temple) {
            surgeFactor = event.factor;
            reason = event.reason;
        }
    }

    if (surgeFactor === 1.0) {
        if (dayOfWeek === 0 || dayOfWeek === 6) { 
            surgeFactor = 1.8;
            reason = "Weekend";
        } else if (dayOfWeek === 5) { 
            surgeFactor = 1.3;
            reason = "Start of Weekend";
        }
    }
    
    const month = date.getMonth(); 
    if ((month >= 4 && month <= 6) || (month === 11)) {
         if (surgeFactor < 1.5) {
            surgeFactor *= 1.4;
            reason = reason === "Normal Day" ? "Vacation Season" : `${reason} & Vacation Season`;
         }
    }

    const predictedVisitors = Math.round(baseVisitors * surgeFactor);

    let surgeLevel = "Low";
    let surgeColor = "text-green-600";
    if (surgeFactor >= 4.0) {
        surgeLevel = "Very High";
        surgeColor = "text-red-600 font-bold";
    } else if (surgeFactor >= 2.5) {
        surgeLevel = "High";
        surgeColor = "text-orange-600 font-semibold";
    } else if (surgeFactor >= 1.5) {
        surgeLevel = "Moderate";
        surgeColor = "text-yellow-600";
    }

    return { predictedVisitors, surgeLevel, surgeColor, reason, surgeFactor };
}

// --- GEMINI API INTEGRATIONS ---
async function makeGeminiApiCall(userQuery, systemPrompt, responseSchema = null) {
    if (!GEMINI_API_KEY) {
        throw new Error("Gemini API Key is missing.");
    }
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${GEMINI_API_KEY}`;
    const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
    };
    if (responseSchema) {
        payload.generationConfig = {
            responseMimeType: "application/json",
            responseSchema: responseSchema
        };
    }
    
    const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
    }
    const result = await response.json();
    const candidate = result.candidates?.[0];
    const text = candidate?.content?.parts?.[0]?.text;
    if (!text) {
        throw new Error("No content in API response.");
    }
    return text;
}

async function getTripAdvisory(templeName, date, surgeLevel, reason, lang) {
    const langName = {en: 'English', hi: 'Hindi', te: 'Telugu', mr: 'Marathi', gu: 'Gujarati'}[lang];
    const systemPrompt = "You are a helpful travel assistant for India. Provide a concise, friendly, and practical travel advisory in 2-3 short bullet points for a devotee visiting a temple on a specific day. Focus on managing crowds and having a smooth visit.";
    const userQuery = `I am planning to visit ${templeName} on ${date}. The predicted crowd surge level is "${surgeLevel}" because of "${reason}". Please provide a travel advisory in ${langName}.`;
    try {
        const text = await makeGeminiApiCall(userQuery, systemPrompt);
        return text.replace(/\*/g, '').replace(/(\r\n|\n|\r)/gm, "<br>");
    } catch (error) {
        console.error("Error fetching Gemini advisory:", error);
        return lang === 'hi' ? "सलाह उत्पन्न नहीं की जा सकी। कृपया जांचें कि आपका जेमिनी एपीआई कुंजी मान्य है या नहीं।" : "Could not generate advisory. The provided Gemini API key may be invalid or have restrictions.";
    }
}

async function getSmartQueueInfo(templeName, date, surgeLevel, reason, lang) {
    const langName = {en: 'English', hi: 'Hindi', te: 'Telugu', mr: 'Marathi', gu: 'Gujarati'}[lang];
    const systemPrompt = `You are an AI for a temple's smart queue system. Based on the user's query, return a JSON object with 'estimatedWaitTime', 'proTip', and 'systemDescription', all in ${langName}.`;
    const userQuery = `I am visiting ${templeName} on ${date}. The predicted crowd surge level is "${surgeLevel}" due to "${reason}". Provide smart queue information in ${langName}.`;
    const schema = { type: "OBJECT", properties: { estimatedWaitTime: { type: "STRING" }, proTip: { type: "STRING" }, systemDescription: { type: "STRING" } }, required: ["estimatedWaitTime", "proTip", "systemDescription"] };
    try {
        const jsonText = await makeGeminiApiCall(userQuery, systemPrompt, schema);
        return JSON.parse(jsonText);
    } catch (error) { console.error("Error fetching Smart Queue info:", error); return null; }
}

async function getLiveAIAnalysis(templeName, densityData, lang) {
    const langName = {en: 'English', hi: 'Hindi', te: 'Telugu', mr: 'Marathi', gu: 'Gujarati'}[lang];
    const systemPrompt = `You are an AI surveillance analyst. You receive real-time crowd density data. Provide a very brief, actionable insight (1-2 sentences) for the security team in ${langName}.`;
    const userQuery = `Temple: ${templeName}. Current crowd density: ${JSON.stringify(densityData)}. Critical observation and action?`;
     try {
        return await makeGeminiApiCall(userQuery, systemPrompt);
    } catch (error) { console.error("Error fetching AI Analysis:", error); return lang === 'hi' ? "वास्तविक समय के विश्लेषण की प्रतीक्षा है..." : "Awaiting real-time analysis..."; }
}

async function getEmergencyAnalysis(templeName, event, lang) {
    const langName = {en: 'English', hi: 'Hindi', te: 'Telugu', mr: 'Marathi', gu: 'Gujarati'}[lang];
    const systemPrompt = `You are an AI for an emergency response system. You received a critical alert. Provide an immediate, clear, 2-part JSON response: a 'response_plan' and an 'all_clear_message', both in ${langName}.`;
    const userQuery = `CRITICAL ALERT at ${templeName}: ${event.type} detected at ${event.location}. High crowd density nearby. Generate response plan and all-clear message.`;
    const schema = { type: "OBJECT", properties: { response_plan: { type: "STRING" }, all_clear_message: { type: "STRING" } }, required: ["response_plan", "all_clear_message"] };
     try {
        const jsonText = await makeGeminiApiCall(userQuery, systemPrompt, schema);
        return JSON.parse(jsonText);
    } catch (error) { console.error("Error fetching Emergency Analysis:", error); return null; }
}

async function getTrafficAdvisory(templeName, trafficData, lang) {
    const langName = {en: 'English', hi: 'Hindi', te: 'Telugu', mr: 'Marathi', gu: 'Gujarati'}[lang];
    const systemPrompt = `You are an AI traffic management assistant. Based on real-time data, provide a concise advisory as a JSON object with 'parking_status' and 'travel_tip', both in ${langName}.`;
    const userQuery = `Traffic data for ${templeName}: ${JSON.stringify(trafficData)}. Generate advisory.`;
    const schema = { type: "OBJECT", properties: { parking_status: { type: "STRING" }, travel_tip: { type: "STRING" } }, required: ["parking_status", "travel_tip"] };
    try {
        const jsonText = await makeGeminiApiCall(userQuery, systemPrompt, schema);
        return JSON.parse(jsonText);
    } catch (error) { console.error("Error fetching Traffic Advisory:", error); return null; }
}

async function getPilgrimInfo(templeName, date, surgeFactor, lang) {
    const langName = {en: 'English', hi: 'Hindi', te: 'Telugu', mr: 'Marathi', gu: 'Gujarati'}[lang];
    const systemPrompt = `You are an AI assistant for a pilgrim app. Return a JSON object with practical, real-time info: 'temple_timings', 'special_rituals', 'facility_info', 'emergency_contact', all in ${langName}.`;
    const cloakroomStatus = surgeFactor > 3.5 ? "At full capacity, long queues expected" : "Available near Gate 2";
    const specialRitual = surgeFactor > 3 ? "Special evening Aarti at 7:00 PM due to high attendance." : "Standard daily rituals are on schedule.";
    const userQuery = `Provide pilgrim info for ${templeName} for ${date}. Surge factor is ${surgeFactor.toFixed(1)}. Status: Cloakroom '${cloakroomStatus}', rituals '${specialRitual}'.`;
    const schema = { type: "OBJECT", properties: { temple_timings: { type: "STRING" }, special_rituals: { type: "STRING" }, facility_info: { type: "STRING" }, emergency_contact: { type: "STRING" } }, required: ["temple_timings", "special_rituals", "facility_info", "emergency_contact"] };
    try {
        const jsonText = await makeGeminiApiCall(userQuery, systemPrompt, schema);
        return JSON.parse(jsonText);
    } catch (error) { console.error("Error fetching Pilgrim Info:", error); return null; }
}

async function getAccessibilityInfo(templeName, surgeLevel, reason, lang) {
    const langName = {en: 'English', hi: 'Hindi', te: 'Telugu', mr: 'Marathi', gu: 'Gujarati'}[lang];
    const systemPrompt = `You are an AI assistant for temple accessibility. Provide practical info for elderly/differently-abled pilgrims. Return JSON object with 'navigation_assistance', 'priority_services', and 'accessibility_tip', all in ${langName}.`;
    const userQuery = `Accessibility info for ${templeName}. Surge: ${surgeLevel} due to ${reason}.`;
    const schema = { type: "OBJECT", properties: { navigation_assistance: { type: "STRING" }, priority_services: { type: "STRING" }, accessibility_tip: { type: "STRING" } }, required: ["navigation_assistance", "priority_services", "accessibility_tip"] };
    try {
        const jsonText = await makeGeminiApiCall(userQuery, systemPrompt, schema);
        return JSON.parse(jsonText);
    } catch (error) { console.error("Error fetching Accessibility Info:", error); return null; }
}

async function getMapInsights(templeName, surgeLevel, reason, lang) {
    const langName = {en: 'English', hi: 'Hindi', te: 'Telugu', mr: 'Marathi', gu: 'Gujarati'}[lang];
    const systemPrompt = `You are an AI navigation assistant. Based on crowd level, provide a tip for navigating temple POIs. Mention washrooms/medical aid and suggest less crowded alternatives if surge is high. Return JSON with 'navigation_tip' and 'poi_status_alert', both in ${langName}.`;
    const userQuery = `At ${templeName}, surge is ${surgeLevel} due to ${reason}. Give me a navigation tip and POI status alerts.`;
    const schema = { type: "OBJECT", properties: { navigation_tip: { type: "STRING" }, poi_status_alert: { type: "STRING" } }, required: ["navigation_tip", "poi_status_alert"] };
    try {
        const jsonText = await makeGeminiApiCall(userQuery, systemPrompt, schema);
        return JSON.parse(jsonText);
    } catch (error) { console.error("Error fetching Map Insights:", error); return null; }
}

async function getWeatherForecast(templeName, date, lang) {
    const langName = {en: 'English', hi: 'Hindi', te: 'Telugu', mr: 'Marathi', gu: 'Gujarati'}[lang];
    const systemPrompt = `You are a weather forecaster. Provide a simple weather forecast for a location on a specific date. Return a JSON object with 'icon' (a single emoji like ☀️, ☁️, 🌧️, 🌩️, 🌫️), 'temperature' (e.g., '25°C - 32°C'), and 'tip' (a short, helpful weather-related tip), all in ${langName}.`;
    const userQuery = `What is the weather forecast for ${templeName} on ${date}?`;
    const schema = { type: "OBJECT", properties: { icon: { type: "STRING" }, temperature: { type: "STRING" }, tip: { type: "STRING" } }, required: ["icon", "temperature", "tip"] };
     try {
        const jsonText = await makeGeminiApiCall(userQuery, systemPrompt, schema);
        return JSON.parse(jsonText);
    } catch (error) { console.error("Error fetching Weather Forecast:", error); return null; }
}

 async function getFestivalDetails(festivalName, lang) {
    const langName = {en: 'English', hi: 'Hindi', te: 'Telugu', mr: 'Marathi', gu: 'Gujarati'}[lang];
    const systemPrompt = `You are a cultural expert on Indian festivals. Provide a concise, informative description of the festival mentioned. Explain why it is celebrated and where it is most famously celebrated. Respond in ${langName}.`;
    const userQuery = `Tell me about the festival: ${festivalName}.`;
    try {
        const text = await makeGeminiApiCall(userQuery, systemPrompt);
        return text.replace(/(\r\n|\n|\r)/gm, "<br>");
    } catch (error) {
        console.error("Error fetching festival details:", error);
        return lang === 'hi' ? "विवरण प्राप्त करने में असमर्थ।" : "Unable to fetch details.";
    }
}

// --- DOM MANIPULATION & EVENT LISTENERS ---

const predictBtn = document.getElementById('predictBtn');
const templeSelect = document.getElementById('temple');
const dateInput = document.getElementById('date');
const resultDiv = document.getElementById('result');
const loader = document.getElementById('loader');
const passModal = document.getElementById('passModal');
const passContent = document.getElementById('passContent');
const closePassBtn = document.getElementById('closePassBtn');
const calendarModal = document.getElementById('calendarModal');
const closeCalendarBtn = document.getElementById('closeCalendarBtn');
const openCalendarBtn = document.getElementById('openCalendarBtn');
const prevMonthBtn = document.getElementById('prevMonthBtn');
const nextMonthBtn = document.getElementById('nextMonthBtn');
const calendarGrid = document.getElementById('calendarGrid');
const calendarMonthYear = document.getElementById('calendarMonthYear');
const festivalDetailsDiv = document.getElementById('festivalDetails');
const festivalDetailsTitle = document.getElementById('festivalDetailsTitle');
const festivalDetailsContent = document.getElementById('festivalDetailsContent');

const today = new Date().toISOString().split('T')[0];
dateInput.value = today;
dateInput.min = today;

function cleanupFeatures() {
    if (liveMonitoringInterval) {
        clearInterval(liveMonitoringInterval);
        liveMonitoringInterval = null;
    }
    const featureContent = document.getElementById('feature-content');
    if(featureContent) featureContent.innerHTML = '';
}

function renderResultCard(lang) {
    if (!lastPredictionState) return;

    const { prediction, templeName, dateString, selectedTemple, isLive } = lastPredictionState;
    resultDiv.innerHTML = `
        <h3 class="text-xl font-semibold text-gray-800 text-center">${translations[lang].predictionFor} ${templeName}</h3>
        <p class="text-center text-gray-500 text-sm">${dateString}</p>
        <div class="mt-4 text-center">
            <p class="text-lg" >${translations[lang].predictedSurgeLevel}:</p>
            <p class="text-4xl ${prediction.surgeColor}">${prediction.surgeLevel}</p>
        </div>
        <div id="feature-buttons" class="mt-6 grid grid-cols-3 gap-3 text-center">
            <button id="advisoryBtn" class="btn btn-secondary text-sm">${translations[lang].tripAdvisory}</button>
            <button id="smartQueueBtn" class="btn btn-tertiary text-sm">${translations[lang].smartQueue}</button>
            <button id="liveMonitorBtn" class="btn btn-quaternary text-sm">${translations[lang].monitoring}</button>
            <button id="emergencyBtn" class="btn btn-emergency text-sm">${translations[lang].emergency}</button>
            <button id="trafficBtn" class="btn btn-traffic text-sm">${translations[lang].traffic}</button>
            <button id="pilgrimBtn" class="btn btn-info text-sm">${translations[lang].pilgrimInfo}</button>
            <button id="accessibilityBtn" class="btn btn-accessibility text-sm">${translations[lang].accessibility}</button>
            <button id="mapBtn" class="btn btn-map text-sm">${translations[lang].templeMap}</button>
            <button id="weatherBtn" class="btn btn-weather text-sm">${translations[lang].weather}</button>
        </div>
        <div id="feature-content" class="mt-4"></div>
    `;
    
    document.getElementById('advisoryBtn').addEventListener('click', (e) => handleFeatureClick(e.currentTarget, showTripAdvisory, [templeName, dateString, prediction, lang]));
    document.getElementById('smartQueueBtn').addEventListener('click', (e) => handleFeatureClick(e.currentTarget, showSmartQueue, [templeName, dateString, prediction, lang]));
    document.getElementById('liveMonitorBtn').addEventListener('click', (e) => handleFeatureClick(e.currentTarget, showMonitoringDashboard, [templeName, prediction, isLive, lang]));
    document.getElementById('emergencyBtn').addEventListener('click', (e) => handleFeatureClick(e.currentTarget, showEmergencyDashboard, [templeName, prediction.surgeFactor, lang]));
    document.getElementById('trafficBtn').addEventListener('click', (e) => handleFeatureClick(e.currentTarget, showTrafficDashboard, [templeName, prediction.surgeFactor, lang]));
    document.getElementById('pilgrimBtn').addEventListener('click', (e) => handleFeatureClick(e.currentTarget, showPilgrimPlatform, [templeName, dateString, prediction, lang]));
    document.getElementById('accessibilityBtn').addEventListener('click', (e) => handleFeatureClick(e.currentTarget, showAccessibilityInfo, [templeName, prediction, lang]));
    document.getElementById('mapBtn').addEventListener('click', (e) => handleFeatureClick(e.currentTarget, showTempleMap, [selectedTemple, prediction, lang]));
    document.getElementById('weatherBtn').addEventListener('click', (e) => handleFeatureClick(e.currentTarget, showWeatherForecast, [templeName, dateString, lang]));
}


predictBtn.addEventListener('click', () => {
    cleanupFeatures();
    const selectedTemple = templeSelect.value;
    const selectedDate = dateInput.value;
    const isLive = selectedDate === today;
    if (!selectedDate) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `<p class="text-center text-red-500 text-center">Please select a date.</p>`;
        return;
    }
    resultDiv.style.display = 'none';
    loader.style.display = 'block';
    
    setTimeout(() => {
        const prediction = predictSurge(selectedTemple, selectedDate);
        const templeName = templeSelect.options[templeSelect.selectedIndex].text;
        const dateString = new Date(selectedDate).toDateString();
        const lang = languageSelector.value;
        
        lastPredictionState = { prediction, templeName, dateString, selectedTemple, isLive };

        loader.style.display = 'none';
        resultDiv.style.display = 'block';

        renderResultCard(lang);

    }, 1000);
});

const handleFeatureClick = async (button, featureFunction, args) => {
    const lang = languageSelector.value;
    const originalText = button.innerHTML;
    const buttons = document.querySelectorAll('#feature-buttons .btn');
    
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn === button) {
            btn.innerHTML = `<span class="spinner"></span> ${translations[lang].loadingText}`;
        }
    });

    try {
        await featureFunction(...args);
    } catch (error) {
        console.error("Feature error:", error);
    } finally {
        buttons.forEach(btn => {
            btn.disabled = false;
            // Restore original text for all buttons
            const originalKey = btn.id.replace('Btn','');
            const translationKey = {
                'advisory': 'tripAdvisory', 'smartQueue': 'smartQueue', 'liveMonitor': 'monitoring',
                'emergency': 'emergency', 'traffic': 'traffic', 'pilgrim': 'pilgrimInfo',
                'accessibility': 'accessibility', 'map': 'templeMap', 'weather': 'weather'
            }[originalKey];
             if(translationKey && translations[lang][translationKey]) {
                 btn.innerHTML = translations[lang][translationKey];
             }
        });
    }
};

async function showTripAdvisory(templeName, dateString, prediction, lang) {
    cleanupFeatures();
    const featureContent = document.getElementById('feature-content');
    featureContent.innerHTML = `<div class="loader feature-loader"></div>`;
    const advisoryText = await getTripAdvisory(templeName, dateString, prediction.surgeLevel, prediction.reason, lang);
    featureContent.innerHTML = `<div class="p-4 bg-indigo-50 rounded-lg text-gray-700 text-sm">${advisoryText}</div>`;
}

async function showSmartQueue(templeName, dateString, prediction, lang) {
    cleanupFeatures();
    const featureContent = document.getElementById('feature-content');
    featureContent.innerHTML = `<div class="loader feature-loader"></div>`;
    const queueInfo = await getSmartQueueInfo(templeName, dateString, prediction.surgeLevel, prediction.reason, lang);
    if (queueInfo) {
        const buttonText = lang === 'hi' ? "वर्चुअल कतार में शामिल हों" : "Join Virtual Queue";
        featureContent.innerHTML = `
            <div class="p-4 bg-teal-50 rounded-lg text-left text-sm space-y-3">
                <p><strong>${lang === 'hi' ? 'सिस्टम जानकारी' : 'System Info'}:</strong> ${queueInfo.systemDescription}</p>
                <p><strong>${lang === 'hi' ? 'अनुमानित प्रतीक्षा समय' : 'Estimated Wait Time'}:</strong> <span class="font-bold text-teal-700">${queueInfo.estimatedWaitTime}</span></p>
                <p><strong>${lang === 'hi' ? 'प्रो टिप' : 'Pro Tip'}:</strong> ${queueInfo.proTip}</p>
                <div class="text-center pt-2">
                    <button id="joinQueueBtn" class="btn" style="background-color: #14b8a6; font-size: 0.875rem; padding: 0.5rem 1rem;">${buttonText}</button>
                </div>
            </div>`;
        document.getElementById('joinQueueBtn').addEventListener('click', () => generateDigitalPass(templeName, dateString, queueInfo.estimatedWaitTime));
    } else {
        featureContent.innerHTML = `<p class="text-center text-red-500">${lang === 'hi' ? 'स्मार्ट कतार की जानकारी प्राप्त नहीं हो सकी।' : 'Could not retrieve smart queue information.'}</p>`;
    }
}

function showMonitoringDashboard(templeName, prediction, isLive, lang) {
    if (isLive) {
        startLiveMonitoring(templeName, prediction.surgeFactor, lang);
    } else {
        showFuturePrediction(templeName, prediction.surgeFactor, lang);
    }
}

function getBarColor(percentage) {
    if (percentage > 85) return 'bg-red-500';
    if (percentage > 60) return 'bg-yellow-500';
    return 'bg-green-500';
}

function showFuturePrediction(templeName, baseSurgeFactor, lang) {
    cleanupFeatures();
    const featureContent = document.getElementById('feature-content');
    const zoneNames = {
        entrance: translations[lang].zoneEntrance,
        sanctum: translations[lang].zoneSanctum,
        prasad: translations[lang].zonePrasad,
        exit: translations[lang].zoneExit,
    };
    
    // Calculate static predicted densities
    const baseDensity = baseSurgeFactor * 20;
    const densities = {
        entrance: Math.min(100, Math.floor(baseDensity * 1.1)),
        sanctum: Math.min(100, Math.floor(baseDensity * 1.2)),
        prasad: Math.min(100, Math.floor(baseDensity * 0.9)),
        exit: Math.min(100, Math.floor(baseDensity * 0.7)),
    };

    let dashboardHTML = `<div class="p-4 bg-gray-50 rounded-lg border">
        <h4 class="text-lg font-bold text-center text-gray-800 mb-4">${translations[lang].futurePredictionTitle}</h4>
        <div class="space-y-3">`;

    for (const zone in densities) {
        const percentage = densities[zone];
        const color = getBarColor(percentage);
        dashboardHTML += `
            <div>
                <label class="text-sm font-medium text-gray-700">${zoneNames[zone]}</label>
                <div class="progress-bar-container mt-1">
                    <div class="progress-bar ${color}" style="width: ${percentage}%">${percentage}%</div>
                </div>
            </div>`;
    }

    dashboardHTML += `</div></div>`;
    featureContent.innerHTML = dashboardHTML;
}

function startLiveMonitoring(templeName, baseSurgeFactor, lang) {
    cleanupFeatures();
    const featureContent = document.getElementById('feature-content');
    const zoneNames = {
        entrance: translations[lang].zoneEntrance,
        sanctum: translations[lang].zoneSanctum,
        prasad: translations[lang].zonePrasad,
        exit: translations[lang].zoneExit,
    };
    
    featureContent.innerHTML = `
        <div class="p-4 bg-gray-50 rounded-lg border">
            <h4 class="text-lg font-bold text-center text-gray-800 mb-4">${translations[lang].liveMonitoringTitle}</h4>
            <div class="space-y-3" id="monitoring-bars">
                <!-- Bars will be generated here -->
            </div>
            <div id="alert-box" class="mt-4 p-3 rounded-lg text-white font-semibold text-center" style="display:none;"></div>
            <div class="mt-4 p-3 bg-pink-50 rounded-lg">
                 <h5 class="font-bold text-pink-800">${translations[lang].aiAnalysis}</h5>
                 <p id="ai-analysis-text" class="text-sm text-pink-700 italic">${translations[lang].initializing}</p>
            </div>
        </div>`;
    
    const monitoringBars = document.getElementById('monitoring-bars');
    for(const zone in zoneNames) {
        monitoringBars.innerHTML += `
             <div>
                <label class="text-sm font-medium text-gray-700">${zoneNames[zone]}</label>
                <div class="progress-bar-container mt-1">
                    <div id="bar-${zone}" class="progress-bar bg-gray-400" style="width: 0%">0%</div>
                </div>
            </div>
        `;
    }

    const alertBox = document.getElementById('alert-box');
    const aiAnalysisText = document.getElementById('ai-analysis-text');
    let callAICounter = 0;

    const updateBars = async () => {
        const densityData = {}; let highDensityZone = null;
        for (const zone in zoneNames) {
            const randomFactor = 0.8 + Math.random() * 0.4;
            let density = Math.min(100, Math.floor(baseSurgeFactor * 20 * randomFactor));
            if (Math.random() > 0.95) density = Math.min(100, density + 20);
            densityData[zone] = `${density}%`;
            const barEl = document.getElementById(`bar-${zone}`);
            barEl.style.width = `${density}%`;
            barEl.className = `progress-bar ${getBarColor(density)}`;
            barEl.textContent = `${density}%`;
            if (density > 85) { highDensityZone = { name: zoneNames[zone], density }; }
        }

        if (highDensityZone) {
            alertBox.style.display = 'block';
            alertBox.className = 'mt-4 p-3 rounded-lg text-white font-semibold text-center bg-red-500';
            alertBox.textContent = lang === 'hi' ? `अलर्ट: ${highDensityZone.name} पर भारी भीड़ (${highDensityZone.density}%) का पता चला!` : `ALERT: High crowd density (${highDensityZone.density}%) detected at ${highDensityZone.name}!`;
            alertBox.style.animation = 'pulse-red 2s infinite';
        } else { 
            alertBox.style.display = 'none';
            alertBox.style.animation = 'none'; 
        }
        
        callAICounter++;
        if (callAICounter >= 2) { // Call AI more frequently for live data
            callAICounter = 0; 
            aiAnalysisText.textContent = lang === 'hi' ? "नए डेटा का विश्लेषण किया जा रहा है..." : "Analyzing new data...";
            const analysis = await getLiveAIAnalysis(templeName, densityData, lang);
            aiAnalysisText.textContent = analysis;
        }
    };
    
    updateBars(); // Initial call
    liveMonitoringInterval = setInterval(updateBars, 5000);
}

async function showEmergencyDashboard(templeName, surgeFactor, lang) {
    cleanupFeatures();
    const featureContent = document.getElementById('feature-content');
    featureContent.innerHTML = `<div class="loader feature-loader"></div>`;
    let event = null;
    if (Math.random() < surgeFactor / 10) { event = { type: Math.random() < 0.3 ? "Medical Assistance Request" : "Panic Button Activation", location: ["Main Entrance", "Prasad Counter", "Sanctum Queue"][Math.floor(Math.random() * 3)] }; }
    let analysis = { response_plan: "All systems normal. Maintain standard patrol routes.", all_clear_message: "Situation nominal."};
    if (event) { analysis = await getEmergencyAnalysis(templeName, event, lang) || analysis; }
    featureContent.innerHTML = `
        <div class="p-4 bg-red-50 rounded-lg border border-red-200">
            <h4 class="text-lg font-bold text-center text-red-800 mb-4">${lang === 'hi' ? 'आपातकालीन और सुरक्षा डैशबोर्ड' : 'Emergency & Safety Dashboard'}</h4>
            <div class="p-3 rounded-lg ${event ? 'bg-red-500 text-white animate-pulse' : 'bg-green-500 text-white'}">
                <p class="font-bold text-center">${event ? `${lang === 'hi' ? 'अलर्ट' : 'ALERT'}: ${event.type}` : `${lang === 'hi' ? 'स्थिति: सब ठीक है' : 'STATUS: ALL CLEAR'}`}</p>
                ${event ? `<p class="text-sm text-center">${lang === 'hi' ? 'स्थान' : 'Location'}: ${event.location}</p>` : ''}
            </div>
            <div class="mt-4">
                <h5 class="font-bold text-red-800">${lang === 'hi' ? 'एआई प्रतिक्रिया योजना:' : 'AI Response Plan:'}</h5>
                <p class="text-sm text-red-700 italic">${analysis.response_plan}</p>
            </div>
        </div>`;
}

async function showTrafficDashboard(templeName, surgeFactor, lang) {
    cleanupFeatures();
    const featureContent = document.getElementById('feature-content');
    featureContent.innerHTML = `<div class="loader feature-loader"></div>`;
    const parkingCapacity = Math.max(0, 100 - Math.floor(surgeFactor * 20));
    const shuttleWaitTime = Math.floor(surgeFactor * 5);
    const trafficData = { parking_capacity_percent: parkingCapacity, shuttle_wait_minutes: shuttleWaitTime };
    const advisory = await getTrafficAdvisory(templeName, trafficData, lang);
    if (advisory) {
        featureContent.innerHTML = `
        <div class="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h4 class="text-lg font-bold text-center text-amber-800 mb-4">${lang === 'hi' ? 'यातायात और गतिशीलता डैशबोर्ड' : 'Traffic & Mobility Dashboard'}</h4>
            <div class="grid grid-cols-2 gap-4 text-center">
                <div><p class="text-sm text-amber-700">${lang === 'hi' ? 'पार्किंग उपलब्धता' : 'Parking Availability'}</p><p class="text-3xl font-bold text-amber-800">${parkingCapacity}%</p></div>
                <div><p class="text-sm text-amber-700">${lang === 'hi' ? 'शटल प्रतीक्षा समय' : 'Shuttle Wait Time'}</p><p class="text-3xl font-bold text-amber-800">~${shuttleWaitTime} <span class="text-lg">${lang === 'hi' ? 'मिनट' : 'min'}</span></p></div>
            </div>
             <div class="mt-4 p-3 bg-amber-100 rounded-lg">
                <h5 class="font-bold text-amber-900">${lang === 'hi' ? 'एआई-जनरेटेड सलाह:' : 'AI-Generated Advisory:'}</h5>
                <p class="text-sm text-amber-800 mt-1"><strong>${lang === 'hi' ? 'पार्किंग:' : 'Parking:'}</strong> ${advisory.parking_status}</p>
                <p class="text-sm text-amber-800 mt-1"><strong>${lang === 'hi' ? 'यात्रा टिप:' : 'Travel Tip:'}</strong> ${advisory.travel_tip}</p>
            </div>
        </div>`;
    } else { featureContent.innerHTML = `<p class="text-center text-red-500">${lang === 'hi' ? 'यातायात की जानकारी प्राप्त नहीं हो सकी।' : 'Could not retrieve traffic information.'}</p>`; }
}

async function showPilgrimPlatform(templeName, dateString, prediction, lang) {
    cleanupFeatures();
    const featureContent = document.getElementById('feature-content');
    featureContent.innerHTML = `<div class="loader feature-loader"></div>`;
    const pilgrimInfo = await getPilgrimInfo(templeName, dateString, prediction.surgeFactor, lang);
    if (pilgrimInfo) {
        featureContent.innerHTML = `
            <div class="p-4 bg-blue-50 rounded-lg border border-blue-200 text-left text-sm space-y-3">
                 <h4 class="text-lg font-bold text-center text-blue-800 mb-2">${lang === 'hi' ? 'तीर्थयात्री सूचना केंद्र' : 'Pilgrim Information Hub'}</h4>
                 <p><strong>🕒 ${lang === 'hi' ? 'मंदिर का समय:' : 'Temple Timings:'}</strong> ${pilgrimInfo.temple_timings}</p>
                 <p><strong>✨ ${lang === 'hi' ? 'विशेष अनुष्ठान:' : 'Special Rituals:'}</strong> ${pilgrimInfo.special_rituals}</p>
                 <p><strong>🚻 ${lang === 'hi' ? 'सुविधाएं:' : 'Facilities:'}</strong> ${pilgrimInfo.facility_info}</p>
                 <p><strong>📞 ${lang === 'hi' ? 'आपातकालीन संपर्क:' : 'Emergency Contact:'}</strong> <span class="font-mono">${pilgrimInfo.emergency_contact}</span></p>
            </div>`;
    } else { featureContent.innerHTML = `<p class="text-center text-red-500">${lang === 'hi' ? 'तीर्थयात्री जानकारी प्राप्त नहीं हो सकी।' : 'Could not retrieve pilgrim information.'}</p>`; }
}

async function showAccessibilityInfo(templeName, prediction, lang) {
    cleanupFeatures();
    const featureContent = document.getElementById('feature-content');
    featureContent.innerHTML = `<div class="loader feature-loader"></div>`;
    const accessibilityInfo = await getAccessibilityInfo(templeName, prediction.surgeLevel, prediction.reason, lang);
    if (accessibilityInfo) {
        featureContent.innerHTML = `
            <div class="p-4 bg-slate-50 rounded-lg border border-slate-200 text-left text-sm space-y-3">
                 <h4 class="text-lg font-bold text-center text-slate-800 mb-2">${lang === 'hi' ? 'सुलभता जानकारी' : 'Accessibility Information'}</h4>
                 <p><strong>♿ ${lang === 'hi' ? 'नेविगेशन:' : 'Navigation:'}</strong> ${accessibilityInfo.navigation_assistance}</p>
                 <p><strong>⭐ ${lang === 'hi' ? 'प्राथमिकता सेवाएं:' : 'Priority Services:'}</strong> ${accessibilityInfo.priority_services}</p>
                 <p><strong>💡 ${lang === 'hi' ? 'प्रो टिप:' : 'Pro Tip:'}</strong> ${accessibilityInfo.accessibility_tip}</p>
            </div>`;
    } else { featureContent.innerHTML = `<p class="text-center text-red-500">${lang === 'hi' ? 'सुलभता जानकारी प्राप्त नहीं हो सकी।' : 'Could not retrieve accessibility information.'}</p>`; }
}

function showTempleMap(templeKey, prediction, lang) {
    cleanupFeatures();
    const featureContent = document.getElementById('feature-content');
    
    featureContent.innerHTML = `
        <div class="p-4 bg-gray-50 rounded-lg border">
            <h4 class="text-lg font-bold text-center text-gray-800 mb-4">${lang === 'hi' ? 'मंदिर परिसर का नक्शा' : 'Temple Complex Map'}</h4>
            <div id="map-canvas" class="w-full h-80 bg-gray-200 rounded-lg mb-4 border-2 border-gray-300"></div>
            <div id="map-insights" class="p-3 bg-emerald-50 rounded-lg">
                <h5 class="font-bold text-emerald-800">${lang === 'hi' ? 'एआई नेविगेशन और स्थिति:' : 'AI Navigation & Status:'}</h5>
                <div id="map-insights-content"><div class="loader feature-loader"></div></div>
            </div>
        </div>`;
    
    window.initMap = () => {
        const temple = templeData[templeKey];
        const map = new google.maps.Map(document.getElementById('map-canvas'), {
            center: temple.coords,
            zoom: 18,
            mapTypeId: 'satellite'
        });
        
        const infoWindow = new google.maps.InfoWindow();

        temple.pois.forEach(poi => {
            const marker = new google.maps.Marker({
                position: { 
                    lat: temple.coords.lat + (poi.latOffset || 0),
                    lng: temple.coords.lng + (poi.lngOffset || 0)
                },
                map: map,
                title: poi.name,
                icon: {
                     url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><text x="20" y="20" font-size="24" text-anchor="middle" dominant-baseline="central">${poi.icon}</text></svg>`)}`,
                     scaledSize: new google.maps.Size(40, 40)
                }
            });

            marker.addListener('click', () => {
                infoWindow.setContent(`<strong>${poi.name}</strong>`);
                infoWindow.open(map, marker);
            });
        });
    };

    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&libraries=places&callback=initMap`;
        script.async = true;
        script.defer = true;
        const existingScripts = document.querySelectorAll('script[src^="https://maps.googleapis.com"]');
        existingScripts.forEach(s => s.remove());
        document.head.appendChild(script);
    } else {
        window.initMap();
    }

    const insightsContent = document.getElementById('map-insights-content');
    const templeName = templeSelect.options[templeSelect.selectedIndex].text;
    getMapInsights(templeName, prediction.surgeLevel, prediction.reason, lang).then(mapInsights => {
        if (mapInsights) {
            insightsContent.innerHTML = `
                <p class="text-sm text-emerald-700 mt-1"><strong>${lang === 'hi' ? 'अलर्ट:' : 'Alert:'}</strong> ${mapInsights.poi_status_alert}</p>
                <p class="text-sm text-emerald-700 mt-1"><strong>${lang === 'hi' ? 'टिप:' : 'Tip:'}</strong> ${mapInsights.navigation_tip}</p>
            `;
        } else {
            insightsContent.innerHTML = `<p class="text-center text-red-500">${lang === 'hi' ? 'नक्शा जानकारी प्राप्त नहीं हो सकी।' : 'Could not retrieve map insights.'}</p>`;
        }
    });
}

async function showWeatherForecast(templeName, dateString, lang) {
    cleanupFeatures();
    const featureContent = document.getElementById('feature-content');
    featureContent.innerHTML = `<div class="loader feature-loader"></div>`;
    const weatherInfo = await getWeatherForecast(templeName, dateString, lang);
    if(weatherInfo) {
         featureContent.innerHTML = `
            <div class="p-4 bg-cyan-50 rounded-lg border border-cyan-200 text-center">
                 <h4 class="text-lg font-bold text-center text-cyan-800 mb-2">${lang === 'hi' ? 'मौसम का पूर्वानुमान' : 'Weather Forecast'}</h4>
                 <div class="text-6xl my-2">${weatherInfo.icon}</div>
                 <p class="text-xl font-semibold text-cyan-900">${weatherInfo.temperature}</p>
                 <p class="text-sm text-cyan-700 mt-2"><strong>${lang === 'hi' ? 'टिप:' : 'Tip:'}</strong> ${weatherInfo.tip}</p>
            </div>
         `;
    } else {
         featureContent.innerHTML = `<p class="text-center text-red-500">${lang === 'hi' ? 'मौसम की जानकारी प्राप्त नहीं हो सकी।' : 'Could not retrieve weather information.'}</p>`;
    }
}

function generateDigitalPass(templeName, date, waitTime) {
    const queueNumber = `V-${Math.floor(100000 + Math.random() * 900000)}`;
    const waitHoursMatch = waitTime.match(/\d+/);
    const waitHours = waitHoursMatch ? parseInt(waitHoursMatch[0], 10) : 1;
    const currentTime = new Date();
    const entryTime = new Date(currentTime.getTime() + waitHours * 60 * 60 * 1000);
    const formattedEntryTime = entryTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });

    passContent.innerHTML = `
        <div class="border-2 border-dashed border-gray-300 p-4 rounded-lg">
            <h3 class="text-lg font-bold text-gray-800">Digital Darshan Pass</h3>
            <p class="text-sm text-gray-500">${templeName}</p>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=DarshanPass_${queueNumber}_${date}" alt="QR Code" class="mx-auto my-4 rounded-md">
            <div class="text-left space-y-2">
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Queue No:</strong> <span class="font-mono bg-gray-100 p-1 rounded">${queueNumber}</span></p>
                <p><strong>Estimated Entry:</strong> <span class="font-bold text-xl text-teal-600">${formattedEntryTime}</span></p>
            </div>
        </div>
    `;
    passModal.style.display = 'flex';
}

function renderCalendar(year, month, lang) {
    const monthYearString = `${translations[lang].monthNames[month]} ${year}`;
    calendarMonthYear.textContent = monthYearString;
    calendarGrid.innerHTML = '';

    translations[lang].dayNames.forEach(day => {
        const dayEl = document.createElement('div');
        dayEl.className = 'font-bold text-gray-600 text-center';
        dayEl.textContent = day;
        calendarGrid.appendChild(dayEl);
    });

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        calendarGrid.appendChild(document.createElement('div'));
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day';
        dayEl.textContent = day;
        
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        if (festivalSurgeFactors[dateStr]) {
            dayEl.classList.add('festival');
            dayEl.dataset.festival = festivalSurgeFactors[dateStr].reason;
            dayEl.dataset.date = dateStr;
            dayEl.addEventListener('click', async () => {
                const festivalName = dayEl.dataset.festival;
                festivalDetailsTitle.textContent = festivalName;
                festivalDetailsContent.innerHTML = `<div class="loader feature-loader"></div>`;
                festivalDetailsDiv.style.display = 'block';
                const details = await getFestivalDetails(festivalName, lang);
                festivalDetailsContent.innerHTML = details;
            });
        }

        calendarGrid.appendChild(dayEl);
    }
}

// --- MODAL LISTENERS & INITIALIZERS ---
closePassBtn.addEventListener('click', () => { passModal.style.display = 'none'; });
passModal.addEventListener('click', (e) => { if (e.target === passModal) { passModal.style.display = 'none'; } });

openCalendarBtn.addEventListener('click', () => {
     renderCalendar(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth(), languageSelector.value);
     calendarModal.style.display = 'flex';
});
closeCalendarBtn.addEventListener('click', () => { 
    calendarModal.style.display = 'none'; 
    festivalDetailsDiv.style.display = 'none';
});
calendarModal.addEventListener('click', (e) => { 
    if (e.target === calendarModal) { 
        calendarModal.style.display = 'none'; 
        festivalDetailsDiv.style.display = 'none';
    } 
});

prevMonthBtn.addEventListener('click', () => {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
    renderCalendar(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth(), languageSelector.value);
    festivalDetailsDiv.style.display = 'none';
});
nextMonthBtn.addEventListener('click', () => {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
    renderCalendar(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth(), languageSelector.value);
     festivalDetailsDiv.style.display = 'none';
});

function updateBackground() {
    const selectedTempleKey = templeSelect.value;
    const imageUrl = templeData[selectedTempleKey]?.backgroundImage;
    if (imageUrl) {
        document.body.style.backgroundImage = `url('${imageUrl}')`;
    }
}

templeSelect.addEventListener('change', updateBackground);

// Initial setup on page load
translateUI(languageSelector.value);
updateBackground();
