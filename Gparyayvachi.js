/**
 * Gparyayvachi.js - Mega Edition (All Classes)
 * Features: Detailed Theory, 100 Quiz Questions & Universal Word List
 */

if (typeof Hindi === 'undefined') { window.Hindi = {}; }

Hindi.paryayvachi = {
    title: "पर्यायवाची शब्द: शब्दों का महासागर 🌊",
    content: `
        <section style="text-align: left; padding: 10px;">
            
            <!-- 1. विस्तृत परिभाषा (Lower to Higher Base) -->
            <div style="background: #f0fdf4; padding: 25px; border-radius: 25px; border-left: 10px solid #6BCB77; margin-bottom: 30px;">
                <h2 style="color: #2e7d32; font-size: 2.2rem; margin-top:0;">1. पर्यायवाची की पूर्ण परिभाषा</h2>
                <p style="font-size: 1.4rem; line-height: 1.8;">
                    <b>परिभाषा:</b> जो शब्द समान अर्थ का बोध कराते हैं, उन्हें <b>पर्यायवाची</b> या <b>समानार्थी</b> शब्द कहते हैं। 
                    उच्च व्याकरण के अनुसार, ये शब्द अर्थ में समान होते हुए भी सूक्ष्म भावों में भिन्न हो सकते हैं।
                </p>
                <div style="background: white; padding: 15px; border-radius: 12px; margin-top: 15px; border: 1px dashed #6BCB77;">
                    <p style="font-size: 1.3rem;"><i>उदाहरण 1:</i> <b>जल</b> - नीर, वारि, पानी, तोय।</p>
                    <p style="font-size: 1.3rem;"><i>उदाहरण 2:</i> <b>अग्नि</b> - अनल, पावक, आग, ज्वाला।</p>
                </div>
            </div>

            <!-- 2. महा-सूची (Universal Word List) -->
            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #333; display: inline-block; margin-bottom: 20px;">विश्व-कोश: महत्वपूर्ण शब्दों की सूची</h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; background: #fff; padding: 20px; border-radius: 20px; box-shadow: inset 0 0 10px rgba(0,0,0,0.05);">
                <div style="padding:10px; border-bottom:1px solid #eee;"><b>अश्व:</b> घोड़ा, हय, बाजी, तुरंग, घोटक।</div>
                <div style="padding:10px; border-bottom:1px solid #eee;"><b>अंधकार:</b> तम, तिमिर, अँधेरा, तमस।</div>
                <div style="padding:10px; border-bottom:1px solid #eee;"><b>आकाश:</b> गगन, नभ, अंबर, व्योम, अनंत।</div>
                <div style="padding:10px; border-bottom:1px solid #eee;"><b>इच्छा:</b> चाह, अभिलाषा, कामना, आकांक्षा।</div>
                <div style="padding:10px; border-bottom:1px solid #eee;"><b>ईश्वर:</b> प्रभु, भगवान, परमात्मा, जगदीश।</div>
                <div style="padding:10px; border-bottom:1px solid #eee;"><b>कपड़ा:</b> वस्त्र, चीर, वसन, पट, अंबर।</div>
                <div style="padding:10px; border-bottom:1px solid #eee;"><b>कमल:</b> पंकज, जलज, सरोज, नीरज, राजीव।</div>
                <div style="padding:10px; border-bottom:1px solid #eee;"><b>गंगा:</b> भागीरथी, सुरसरि, मंदाकिनी, विष्णुपदी।</div>
                <div style="padding:10px; border-bottom:1px solid #eee;"><b>घर:</b> गृह, सदन, आवास, निलय, निकेतन।</div>
                <div style="padding:10px; border-bottom:1px solid #eee;"><b>चंद्रमा:</b> चाँद, हिमांशु, इंदु, सुधांशु, शशि।</div>
                <div style="padding:10px; border-bottom:1px solid #eee;"><b>जल:</b> पानी, नीर, तोय, वारि, अंबु।</div>
                <div style="padding:10px; border-bottom:1px solid #eee;"><b>नदी:</b> सरिता, तटिनी, तरंगिणी, आपगा।</div>
                <div style="padding:10px; border-bottom:1px solid #eee;"><b>पक्षी:</b> खग, विहग, पंछी, नभचर, पखेरू।</div>
                <div style="padding:10px; border-bottom:1px solid #eee;"><b>पृथ्वी:</b> धरा, धरती, भूमि, वसुधा, अवनि।</div>
                <div style="padding:10px; border-bottom:1px solid #eee;"><b>फूल:</b> पुष्प, कुसुम, सुमन, प्रसून।</div>
                <div style="padding:10px; border-bottom:1px solid #eee;"><b>बादल:</b> मेघ, जलद, वारिद, नीरद, घन।</div>
                <div style="padding:10px; border-bottom:1px solid #eee;"><b>वायु:</b> हवा, पवन, समीर, अनिल, मारुत।</div>
                <div style="padding:10px; border-bottom:1px solid #eee;"><b>समुद्र:</b> सागर, रत्नाकर, जलधि, सिंधु।</div>
                <div style="padding:10px; border-bottom:1px solid #eee;"><b>सूर्य:</b> सूरज, दिनकर, दिवाकर, भानु, रवि।</div>
                <div style="padding:10px; border-bottom:1px solid #eee;"><b>हाथी:</b> गज, कुंजर, हस्ती, मतंग, द्विरद।</div>
            </div>
        </section>

        <!-- Quiz Panel (100 Questions) -->
        <div class="quiz-panel" id="hindi-quiz-wrapper" style="background: #fff; padding: 35px; border-radius: 35px; border: 5px solid #6BCB77; margin-top: 40px;">
            <div style="display: flex; justify-content: space-between; font-size: 1.6rem; font-weight: bold; margin-bottom: 30px;">
                <span id="hq-progress" style="color: #2e7d32;">प्रश्न: 1 / 100</span>
                <span id="hq-score" style="color: #FF6B6B;">स्कोर: 0</span>
            </div>
            <div id="h-question-container" style="min-height: 220px; text-align: center;">
                <h4 id="hq-text" style="font-size: 1.8rem; color: #2c3e50; margin-bottom: 35px;">लोड हो रहा है...</h4>
                <div id="h-options-box"></div>
            </div>
            <div style="display: flex; justify-content: space-between; gap: 20px; margin-top: 45px;">
                <button class="option-btn" style="background:#eee; flex:1;" onclick="window.prevHindiQuestion()">पीछे</button>
                <button class="option-btn" style="background:#6BCB77; color:white; flex:1;" onclick="window.nextHindiQuestion()">आगे</button>
            </div>
        </div>
    `,
    quizData: [
        { q: "1. 'आकाश' का सही पर्यायवाची शब्द कौन सा है?", options: ["पावक", "गगन", "नीरज"], correct: 1 },
        { q: "2. 'पंकज' किसका पर्यायवाची शब्द है?", options: ["बादल", "कमल", "सूरज"], correct: 1 },
        { q: "3. 'अमृत' का समानार्थी शब्द चुनें:", options: ["विष", "सुधा", "वारि"], correct: 1 },
        { q: "4. 'सूरज' को और किस नाम से जाना जाता है?", options: ["शशि", "दिनकर", "जलद"], correct: 1 },
        { q: "5. 'जल' का पर्यायवाची शब्द इनमें से कौन सा नहीं है?", options: ["नीर", "तोय", "अनिल"], correct: 2 },
        { q: "6. 'अग्नि' का समानार्थी शब्द कौन सा है?", options: ["पावक", "समीर", "अंबर"], correct: 0 },
        { q: "7. 'हाथी' का पर्यायवाची शब्द पहचानें:", options: ["हय", "गज", "खग"], correct: 1 },
        { q: "8. 'चंद्रमा' का सही पर्यायवाची शब्द है:", options: ["शशि", "रवि", "भानु"], correct: 0 },
        { q: "9. 'पृथ्वी' का पर्यायवाची शब्द चुनें:", options: ["अवनि", "व्योम", "तरणी"], correct: 0 },
        { q: "10. 'नदी' का समानार्थी शब्द कौन सा है?", options: ["सरिता", "सागर", "जलधि"], correct: 0 },
        { q: "11. 'वायु' का पर्यायवाची शब्द है:", options: ["पवन", "पावक", "पुष्प"], correct: 0 },
        { q: "12. 'फूल' का सही समानार्थी शब्द क्या है?", options: ["सुमन", "तरु", "शाखा"], correct: 0 },
        { q: "13. 'घर' का पर्यायवाची शब्द पहचानें:", options: ["आवास", "गगन", "अनल"], correct: 0 },
        { q: "14. 'कपड़ा' का समानार्थी शब्द है:", options: ["वसन", "नीरज", "भानु"], correct: 0 },
        { q: "15. 'गंगा' को और क्या कहते हैं?", options: ["भागीरथी", "यमुना", "सरस्वती"], correct: 0 },
        { q: "16. 'बादल' का पर्यायवाची शब्द चुनें:", options: ["जलद", "जलज", "जल्दी"], correct: 0 },
        { q: "17. 'ईश्वर' का समानार्थी शब्द है:", options: ["प्रभु", "सेवक", "मानव"], correct: 0 },
        { q: "18. 'समुद्र' का पर्यायवाची शब्द क्या है?", options: ["सागर", "नदी", "झरना"], correct: 0 },
        { q: "19. 'पक्षी' का सही पर्यायवाची शब्द है:", options: ["खग", "गज", "हय"], correct: 0 },
        { q: "20. 'रात' का पर्यायवाची शब्द चुनें:", options: ["निशा", "दिन", "प्रभात"], correct: 0 },
        { q: "21. 'घोड़ा' का पर्यायवाची शब्द कौन सा है?", options: ["अश्व", "कुंजर", "खग"], correct: 0 },
        { q: "22. 'आँख' का समानार्थी शब्द है:", options: ["नयन", "श्रवण", "पद"], correct: 0 },
        { q: "23. 'अंधकार' का पर्यायवाची शब्द चुनें:", options: ["तिमिर", "प्रकाश", "उजाला"], correct: 0 },
        { q: "24. 'इच्छा' का समानार्थी शब्द है:", options: ["कामना", "अनिच्छा", "विरक्ति"], correct: 0 },
        { q: "25. 'तालाब' का पर्यायवाची शब्द है:", options: ["सरोवर", "नदी", "समुद्र"], correct: 0 },
        { q: "26. 'बगीचा' का समानार्थी शब्द क्या है?", options: ["उपवन", "वन", "गगन"], correct: 0 },
        { q: "27. 'माता' का पर्यायवाची शब्द है:", options: ["जननी", "पत्नी", "पुत्री"], correct: 0 },
        { q: "28. 'पुत्र' का समानार्थी शब्द चुनें:", options: ["सुत", "तात", "अनुज"], correct: 0 },
        { q: "29. 'राजा' का पर्यायवाची शब्द है:", options: ["नृप", "प्रजा", "भृत्य"], correct: 0 },
        { q: "30. 'शत्रु' का समानार्थी शब्द है:", options: ["अरि", "मित्र", "सखा"], correct: 0 },
        { q: "31. 'सोना' (Gold) का पर्यायवाची है:", options: ["कनक", "लोहा", "तांबा"], correct: 0 },
        { q: "32. 'सिंह' का समानार्थी शब्द क्या है?", options: ["केसरी", "गज", "कपि"], correct: 0 },
        { q: "33. 'हाथ' का पर्यायवाची शब्द चुनें:", options: ["कर", "पद", "लोचन"], correct: 0 },
        { q: "34. 'अतिथि' का समानार्थी शब्द है:", options: ["मेहमान", "मेजबान", "शत्रु"], correct: 0 },
        { q: "35. 'अरण्य' किसका पर्यायवाची है?", options: ["वन", "उपवन", "शहर"], correct: 0 },
        { q: "36. 'इंद्र' का पर्यायवाची शब्द है:", options: ["देवेंद्र", "राघव", "माधव"], correct: 0 },
        { q: "37. 'उन्नति' का समानार्थी शब्द है:", options: ["प्रगति", "पतन", "अधोगति"], correct: 0 },
        { q: "38. 'कमल' का एक और नाम:", options: ["राजीव", "रवि", "रमेश"], correct: 0 },
        { q: "39. 'किरण' का पर्यायवाची शब्द है:", options: ["अंशु", "नीर", "व्योम"], correct: 0 },
        { q: "40. 'कोयल' का समानार्थी शब्द है:", options: ["पिक", "काक", "हंस"], correct: 0 },
        { q: "41. 'गणेश' का पर्यायवाची शब्द चुनें:", options: ["लंबोदर", "सुरेश", "दिनेश"], correct: 0 },
        { q: "42. 'चतुर' का समानार्थी शब्द क्या है?", options: ["कुशल", "मूर्ख", "अज्ञानी"], correct: 0 },
        { q: "43. 'चाँदनी' का पर्यायवाची शब्द है:", options: ["ज्योत्स्ना", "धूप", "अंधेरा"], correct: 0 },
        { q: "44. 'जलज' किसका पर्यायवाची है?", options: ["कमल", "मछली", "मोती"], correct: 0 },
        { q: "45. 'झंडा' का समानार्थी शब्द है:", options: ["ध्वज", "डंडा", "कपड़ा"], correct: 0 },
        { q: "46. 'तलवार' का पर्यायवाची शब्द है:", options: ["असि", "बाण", "धनुष"], correct: 0 },
        { q: "47. 'दुख' का समानार्थी शब्द चुनें:", options: ["पीड़ा", "हर्ष", "आनंद"], correct: 0 },
        { q: "48. 'देवता' का पर्यायवाची शब्द है:", options: ["सुर", "असुर", "दानव"], correct: 0 },
        { q: "49. 'धनुष' का समानार्थी शब्द क्या है?", options: ["चाप", "तीर", "तलवार"], correct: 0 },
        { q: "50. 'नारी' का पर्यायवाची शब्द है:", options: ["महिला", "पुरुष", "बालक"], correct: 0 },
        { q: "51. 'पहाड़' का समानार्थी शब्द चुनें:", options: ["पर्वत", "मैदान", "घाटी"], correct: 0 },
        { q: "52. 'प्रकाश' का पर्यायवाची शब्द है:", options: ["ज्योति", "अंधकार", "छाया"], correct: 0 },
        { q: "53. 'भौंरा' का समानार्थी शब्द क्या है?", options: ["भ्रमर", "मक्खी", "तितली"], correct: 0 },
        { q: "54. 'मनुष्य' का पर्यायवाची शब्द है:", options: ["मानव", "पशु", "दानव"], correct: 0 },
        { q: "55. 'मित्र' का समानार्थी शब्द चुनें:", options: ["सखा", "रिपु", "अरि"], correct: 0 },
        { q: "56. 'मेघ' का पर्यायवाची शब्द है:", options: ["वारिद", "वारि", "वन"], correct: 0 },
        { q: "57. 'युद्ध' का समानार्थी शब्द क्या है?", options: ["रण", "शांति", "संधि"], correct: 0 },
        { q: "58. 'लक्ष्मी' का पर्यायवाची शब्द है:", options: ["कमला", "सरस्वती", "दुर्गा"], correct: 0 },
        { q: "59. 'विष्णु' का समानार्थी शब्द चुनें:", options: ["जनार्दन", "महेश", "गणेश"], correct: 0 },
        { q: "60. 'शरीर' का पर्यायवाची शब्द है:", options: ["देह", "आत्मा", "मन"], correct: 0 },
        { q: "61. 'सरस्वती' का समानार्थी शब्द क्या है?", options: ["शारदा", "रमा", "सिया"], correct: 0 },
        { q: "62. 'सांप' का पर्यायवाची शब्द है:", options: ["भुजंग", "मृग", "केसरी"], correct: 0 },
        { q: "63. 'स्त्री' का समानार्थी शब्द चुनें:", options: ["वनीता", "पुरुष", "तात"], correct: 0 },
        { q: "64. 'स्वर्ग' का पर्यायवाची शब्द है:", options: ["देवलोक", "नरक", "पाताल"], correct: 0 },
        { q: "65. 'हनुमान' का समानार्थी शब्द क्या है?", options: ["पवनपुत्र", "लक्ष्मण", "भरत"], correct: 0 },
        { q: "66. 'हिमालय' का पर्यायवाची शब्द है:", options: ["नगराज", "सागर", "अरावली"], correct: 0 },
        { q: "67. 'अमृत' का विलोम नहीं, पर्यायवाची क्या है?", options: ["पीयूष", "हलाहल", "गरल"], correct: 0 },
        { q: "68. 'अनुचर' का समानार्थी शब्द चुनें:", options: ["सेवक", "स्वामी", "नेता"], correct: 0 },
        { q: "69. 'अभिमान' का पर्यायवाची शब्द है:", options: ["दर्प", "नम्रता", "दया"], correct: 0 },
        { q: "70. 'आँसू' का समानार्थी शब्द क्या है?", options: ["अश्रु", "नीर", "लोचन"], correct: 0 },
        { q: "71. 'आज्ञा' का पर्यायवाची शब्द है:", options: ["अनुमति", "मनाही", "विरोध"], correct: 0 },
        { q: "72. 'उद्यान' का समानार्थी शब्द चुनें:", options: ["वाटिका", "खेती", "जंगल"], correct: 0 },
        { q: "73. 'कपटी' का पर्यायवाची शब्द है:", options: ["छली", "ईमानदार", "साधु"], correct: 0 },
        { q: "74. 'किनारा' का समानार्थी शब्द क्या है?", options: ["तट", "धार", "लहर"], correct: 0 },
        { q: "75. 'खल' का पर्यायवाची शब्द है:", options: ["दुष्ट", "सज्जन", "विद्वान"], correct: 0 },
        { q: "76. 'गगन' का समानार्थी शब्द चुनें:", options: ["व्योम", "धरती", "पाताल"], correct: 0 },
        { q: "77. 'गाय' का पर्यायवाची शब्द है:", options: ["धेनु", "अश्व", "गज"], correct: 0 },
        { q: "78. 'चतुरानन' किसका पर्यायवाची है?", options: ["ब्रह्मा", "विष्णु", "महेश"], correct: 0 },
        { q: "79. 'छात्र' का समानार्थी शब्द क्या है?", options: ["विद्यार्थी", "शिक्षक", "प्राचार्य"], correct: 0 },
        { q: "80. 'जलधि' किसका पर्यायवाची शब्द है?", options: ["समुद्र", "नदी", "तालाब"], correct: 0 },
        { q: "81. 'तनुज' का अर्थ है:", options: ["बेटा", "भाई", "पिता"], correct: 0 },
        { q: "82. 'तरु' का समानार्थी शब्द चुनें:", options: ["वृक्ष", "घास", "बेल"], correct: 0 },
        { q: "83. 'थकान' का पर्यायवाची शब्द है:", options: ["श्रान्ति", "शक्ति", "स्फूर्ति"], correct: 0 },
        { q: "84. 'दर्पण' का समानार्थी शब्द क्या है?", options: ["शीशा", "पत्थर", "दीवार"], correct: 0 },
        { q: "85. 'दास' का पर्यायवाची शब्द है:", options: ["गुलाम", "मालिक", "राजा"], correct: 0 },
        { q: "86. 'दिन' का समानार्थी शब्द चुनें:", options: ["दिवस", "रात", "संध्या"], correct: 0 },
        { q: "87. 'दीपक' का पर्यायवाची शब्द है:", options: ["दीप", "अंधेरा", "छाया"], correct: 0 },
        { q: "88. 'दुग्ध' का समानार्थी शब्द क्या है?", options: ["दूध", "पानी", "जूस"], correct: 0 },
        { q: "89. 'द्विज' किसके लिए प्रयोग होता है?", options: ["पक्षी/ब्राह्मण", "पशु", "राक्षस"], correct: 0 },
        { q: "90. 'धनी' का पर्यायवाची शब्द है:", options: ["धनवान", "निर्धन", "भिखारी"], correct: 0 },
        { q: "91. 'धीर' का समानार्थी शब्द चुनें:", options: ["धैर्यवान", "अधीर", "चंचल"], correct: 0 },
        { q: "92. 'नभचर' का अर्थ क्या है?", options: ["पक्षी", "मछली", "पशु"], correct: 0 },
        { q: "93. 'नूतन' का पर्यायवाची शब्द है:", options: ["नया", "पुराना", "प्राचीन"], correct: 0 },
        { q: "94. 'पवन' का समानार्थी शब्द क्या है?", options: ["समीर", "अनल", "जल"], correct: 0 },
        { q: "95. 'पावक' किसका पर्यायवाची है?", options: ["आग", "पानी", "हवा"], correct: 0 },
        { q: "96. 'पुष्प' का समानार्थी शब्द चुनें:", options: ["कुसुम", "पत्ता", "जड़"], correct: 0 },
        { q: "97. 'प्रसन्नता' का पर्यायवाची शब्द है:", options: ["हर्ष", "शोक", "दुख"], correct: 0 },
        { q: "98. 'बादल' का एक और पर्यायवाची:", options: ["नीरद", "नीरज", "नूपुर"], correct: 0 },
        { q: "99. 'बालक' का समानार्थी शब्द क्या है?", options: ["बच्चा", "युवा", "वृद्ध"], correct: 0 },
        { q: "100. 'भानु' किसका पर्यायवाची शब्द है?", options: ["सूर्य", "चंद्र", "तारा"], correct: 0 }
    ]
};
