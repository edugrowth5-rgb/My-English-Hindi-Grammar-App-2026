/**
 * Gvilom.js - Complete Descriptive Edition (All Classes)
 * Features: Detailed Theory, 100 Quiz Questions & Essential Word List
 */

if (typeof Hindi === 'undefined') { window.Hindi = {}; }

Hindi.vilom = {
    title: "विलोम शब्द: विपरीत अर्थों का बोध ⚖️",
    content: `
        <section style="text-align: left; padding: 10px;">
            
            <div style="background: #fff5f5; padding: 25px; border-radius: 25px; border-left: 10px solid #FF6B6B; margin-bottom: 30px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                <h2 style="color: #FF6B6B; font-size: 2.2rem; margin-top:0;">1. विलोम शब्द क्या हैं?</h2>
                <p style="font-size: 1.4rem; line-height: 1.8;">
                    <b>परिभाषा:</b> जो शब्द एक-दूसरे का <b>विपरीत (उल्टा)</b> अर्थ प्रकट करते हैं, उन्हें <b>विलोम</b> या <b>विपरीतार्थक</b> शब्द कहते हैं। 
                </p>
                <div style="background: white; padding: 15px; border-radius: 12px; margin-top: 15px; border: 1px dashed #FF6B6B;">
                    <p style="font-size: 1.3rem; margin: 5px 0;"><i>उदाहरण 1:</i> <b>दिन</b> का उल्टा <b>रात</b>।</p>
                    <p style="font-size: 1.3rem; margin: 5px 0;"><i>उदाहरण 2:</i> <b>अमृत</b> का उल्टा <b>विष</b>।</p>
                    <p style="font-size: 1.3rem; margin: 5px 0;"><i>उदाहरण 3:</i> <b>आस्तिक</b> का उल्टा <b>नास्तिक</b>।</p>
                </div>
            </div>

            <div style="background: #f0f7ff; padding: 25px; border-radius: 25px; border-left: 10px solid #4D96FF; margin-bottom: 30px;">
                <h2 style="color: #4D96FF; font-size: 1.8rem; margin-top:0;">💡 व्याकरणिक नियम (Higher Level)</h2>
                <p style="font-size: 1.2rem; line-height: 1.6;">
                    विलोम शब्द बनाते समय हमेशा ध्यान रखें कि <b>तत्सम्</b> शब्द का विलोम तत्सम् होगा और <b>तद्भव</b> का तद्भव।
                    <br>• <b>आकाश</b> (तत्सम्) → <b>पाताल</b>
                    <br>• <b>आसमान</b> (तद्भव) → <b>धरती</b>
                </p>
            </div>

            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #333; display: inline-block; margin-bottom: 20px;">महत्वपूर्ण विलोम शब्द सूची</h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px; background: #fff; padding: 20px; border-radius: 20px; box-shadow: inset 0 0 10px rgba(0,0,0,0.05);">
                <div style="padding:8px; border-bottom:1px solid #eee;"><b>अंधकार</b> × प्रकाश</div>
                <div style="padding:8px; border-bottom:1px solid #eee;"><b>अमृत</b> × विष</div>
                <div style="padding:8px; border-bottom:1px solid #eee;"><b>आदि</b> × अंत</div>
                <div style="padding:8px; border-bottom:1px solid #eee;"><b>आकाश</b> × पाताल</div>
                <div style="padding:8px; border-bottom:1px solid #eee;"><b>आस्तिक</b> × नास्तिक</div>
                <div style="padding:8px; border-bottom:1px solid #eee;"><b>इच्छा</b> × अनिच्छा</div>
                <div style="padding:8px; border-bottom:1px solid #eee;"><b>उचित</b> × अनुचित</div>
                <div style="padding:8px; border-bottom:1px solid #eee;"><b>उत्तीर्ण</b> × अनुत्तीर्ण</div>
                <div style="padding:8px; border-bottom:1px solid #eee;"><b>कटु</b> × मधु</div>
                <div style="padding:8px; border-bottom:1px solid #eee;"><b>क्रय</b> × विक्रय</div>
                <div style="padding:8px; border-bottom:1px solid #eee;"><b>गुण</b> × दोष</div>
                <div style="padding:8px; border-bottom:1px solid #eee;"><b>जड़</b> × चेतन</div>
                <div style="padding:8px; border-bottom:1px solid #eee;"><b>जय</b> × पराजय</div>
                <div style="padding:8px; border-bottom:1px solid #eee;"><b>नवीन</b> × प्राचीन</div>
                <div style="padding:8px; border-bottom:1px solid #eee;"><b>धर्म</b> × अधर्म</div>
                <div style="padding:8px; border-bottom:1px solid #eee;"><b>वरदान</b> × अभिशाप</div>
                <div style="padding:8px; border-bottom:1px solid #eee;"><b>साक्षर</b> × निरक्षर</div>
                <div style="padding:8px; border-bottom:1px solid #eee;"><b>सजीव</b> × निर्जीव</div>
                <div style="padding:8px; border-bottom:1px solid #eee;"><b>हर्ष</b> × शोक</div>
                <div style="padding:8px; border-bottom:1px solid #eee;"><b>स्वदेश</b> × विदेश</div>
            </div>
        </section>

        <div class="quiz-panel" id="hindi-quiz-wrapper" style="background: #fff; padding: 35px; border-radius: 35px; border: 5px solid #FF6B6B; margin-top: 40px;">
            <div style="display: flex; justify-content: space-between; font-size: 1.6rem; font-weight: bold; margin-bottom: 30px;">
                <span id="hq-progress" style="color: #FF6B6B;">प्रश्न: 1 / 100</span>
                <span id="hq-score" style="color: #6BCB77;">स्कोर: 0</span>
            </div>
            <div id="h-question-container" style="min-height: 220px; text-align: center;">
                <h4 id="hq-text" style="font-size: 1.8rem; color: #2c3e50; margin-bottom: 35px;">क्विज़ लोड हो रहा है...</h4>
                <div id="h-options-box"></div>
            </div>
            <div style="display: flex; justify-content: space-between; gap: 20px; margin-top: 45px;">
                <button class="option-btn" style="background:#eee; flex:1;" onclick="window.prevHindiQuestion()">पीछे</button>
                <button class="option-btn" style="background:#FF6B6B; color:white; flex:1;" onclick="window.nextHindiQuestion()">आगे</button>
            </div>
        </div>
    `,
    quizData: [
        { q: "1. 'अमृत' का सही विलोम शब्द क्या है?", options: ["पानी", "विष", "सुधा"], correct: 1 },
        { q: "2. 'अंधकार' का विपरीतार्थक शब्द चुनें:", options: ["उजाला", "प्रकाश", "रात"], correct: 1 },
        { q: "3. 'आदि' का विलोम शब्द है:", options: ["शुरुआत", "प्रथम", "अंत"], correct: 2 },
        { q: "4. 'आस्तिक' का सही विलोम क्या होगा?", options: ["नास्तिक", "धार्मिक", "भक्त"], correct: 0 },
        { q: "5. 'नवीन' का विलोम शब्द पहचानें:", options: ["नया", "प्राचीन", "आधुनिक"], correct: 1 },
        { q: "6. 'उत्तीर्ण' का विपरीत शब्द है:", options: ["सफल", "पास", "अनुत्तीर्ण"], correct: 2 },
        { q: "7. 'आकाश' का सही विलोम क्या है?", options: ["पाताल", "धरती", "गगन"], correct: 0 },
        { q: "8. 'सजीव' का विलोम शब्द क्या है?", options: ["जीव", "निर्जीव", "मृत"], correct: 1 },
        { q: "9. 'क्रय' का विपरीतार्थक शब्द चुनें:", options: ["बेचना", "विक्रय", "खरीद"], correct: 1 },
        { q: "10. 'जड़' का सही विलोम शब्द है:", options: ["चेतन", "पेड़", "मूर्ख"], correct: 0 },
        { q: "11. 'धर्म' का विलोम शब्द है:", options: ["पाप", "पुण्य", "अधर्म"], correct: 2 },
        { q: "12. 'साक्षर' का विपरीत शब्द चुनें:", options: ["पढ़ा-लिखा", "अनपढ़", "निरक्षर"], correct: 2 },
        { q: "13. 'वरदान' का सही विलोम क्या होगा?", options: ["श्राप", "अभिशाप", "उपहार"], correct: 1 },
        { q: "14. 'हर्ष' का विलोम शब्द पहचानें:", options: ["खुशी", "शोक", "दुख"], correct: 1 },
        { q: "15. 'सत्य' का विपरीत शब्द है:", options: ["झूठ", "असत्य", "मिथ्या"], correct: 1 },
        { q: "16. 'प्रत्यक्ष' का विलोम शब्द क्या है?", options: ["परोक्ष", "सामने", "गुप्त"], correct: 0 },
        { q: "17. 'आयात' का सही विलोम शब्द चुनें:", options: ["निर्यात", "भेजना", "लाना"], correct: 0 },
        { q: "18. 'जटिल' का विलोम शब्द क्या है?", options: ["कठिन", "सरल", "मुश्किल"], correct: 1 },
        { q: "19. 'लाभ' का विपरीतार्थक शब्द है:", options: ["हानि", "नुकसान", "घाटा"], correct: 0 },
        { q: "20. 'अनुज' का सही विलोम क्या होगा?", options: ["छोटा", "अग्रज", "भाई"], correct: 1 },
        { q: "21. 'कोमल' का विलोम शब्द पहचानें:", options: ["मुलायम", "कठोर", "सख्त"], correct: 1 },
        { q: "22. 'ज्ञान' का विपरीत शब्द है:", options: ["विज्ञान", "अज्ञान", "मूर्खता"], correct: 1 },
        { q: "23. 'जीवन' का विलोम शब्द क्या है?", options: ["मरण", "मृत्यु", "दोनों"], correct: 2 },
        { q: "24. 'स्वर्ग' का सही विलोम क्या है?", options: ["नरक", "पाताल", "पृथ्वी"], correct: 0 },
        { q: "25. 'आलस्य' का विपरीतार्थक शब्द चुनें:", options: ["सुस्ती", "स्फूर्ति", "काम"], correct: 1 },
        { q: "26. 'मान' का विलोम शब्द क्या है?", options: ["सम्मान", "अपमान", "अभिमान"], correct: 1 },
        { q: "27. 'राजा' का विपरीत शब्द चुनें:", options: ["रानी", "प्रजा", "रंक"], correct: 2 },
        { q: "28. 'शीत' का सही विलोम क्या होगा?", options: ["ठंडा", "उष्ण", "शरद"], correct: 1 },
        { q: "29. 'शुभ' का विलोम शब्द पहचानें:", options: ["लाभ", "मंगल", "अशुभ"], correct: 2 },
        { q: "30. 'सुगंध' का विपरीत शब्द है:", options: ["खुशबू", "दुर्गंध", "महक"], correct: 1 },
        { q: "31. 'आदर' का सही विलोम क्या है?", options: ["निरादर", "सम्मान", "सत्कार"], correct: 0 },
        { q: "32. 'गुण' का विलोम शब्द क्या है?", options: ["विशेषता", "दोष", "अवगुण"], correct: 1 },
        { q: "33. 'सुलभ' का विपरीतार्थक शब्द चुनें:", options: ["सरल", "दुर्लभ", "कठिन"], correct: 1 },
        { q: "34. 'अल्पायु' का सही विलोम शब्द है:", options: ["दीर्घायु", "कम आयु", "वृद्ध"], correct: 0 },
        { q: "35. 'अपना' का विलोम शब्द है:", options: ["पराया", "दूसरा", "सबका"], correct: 0 },
        { q: "36. 'उदय' का विपरीत शब्द चुनें:", options: ["अस्त", "नष्ट", "अंत"], correct: 0 },
        { q: "37. 'एक' का सही विलोम क्या होगा?", options: ["दो", "अनेक", "सब"], correct: 1 },
        { q: "38. 'कठोर' का विलोम शब्द पहचानें:", options: ["सख्त", "मुलायम", "कोमल"], correct: 2 },
        { q: "39. 'कायर' का विपरीत शब्द है:", options: ["डरपोक", "वीर", "बहादुर"], correct: 1 },
        { q: "40. 'गुप्त' का विलोम शब्द क्या है?", options: ["छिपा", "प्रकट", "खुला"], correct: 1 },
        { q: "41. 'घृणा' का सही विलोम शब्द चुनें:", options: ["नफरत", "प्रेम", "दया"], correct: 1 },
        { q: "42. 'चंचल' का विलोम शब्द क्या है?", options: ["स्थिर", "तेज", "फुर्तीला"], correct: 0 },
        { q: "43. 'जवान' का विपरीतार्थक शब्द है:", options: ["बच्चा", "बूढ़ा", "वृद्ध"], correct: 1 },
        { q: "44. 'ठंडा' का सही विलोम क्या होगा?", options: ["बर्फ", "गर्म", "तप्त"], correct: 1 },
        { q: "45. 'दयालु' का विलोम शब्द पहचानें:", options: ["कृपालु", "निर्दय", "कठोर"], correct: 1 },
        { q: "46. 'देश' का विपरीत शब्द है:", options: ["प्रदेश", "विदेश", "गाँव"], correct: 1 },
        { q: "47. 'धनी' का सही विलोम क्या है?", options: ["गरीब", "निर्धन", "दरिद्र"], correct: 1 },
        { q: "48. 'नया' का विलोम शब्द क्या है?", options: ["पुराना", "प्राचीन", "नूतन"], correct: 0 },
        { q: "49. 'निंदा' का विपरीतार्थक शब्द चुनें:", options: ["बुराई", "स्तुति", "प्रशंसा"], correct: 1 },
        { q: "50. 'पक्ष' का सही विलोम शब्द है:", options: ["विपक्ष", "तटस्थ", "साथ"], correct: 0 },
        { q: "51. 'पाप' का विलोम शब्द है:", options: ["अधर्म", "पुण्य", "भलाई"], correct: 1 },
        { q: "52. 'फूल' का विपरीत शब्द चुनें:", options: ["काँटा", "कली", "पौधा"], correct: 0 },
        { q: "53. 'भारी' का सही विलोम क्या होगा?", options: ["वजन", "हल्का", "कम"], correct: 1 },
        { q: "54. 'भलाई' का विलोम शब्द पहचानें:", options: ["बुराई", "उपकार", "नेकी"], correct: 0 },
        { q: "55. 'मानव' का विपरीत शब्द है:", options: ["दानव", "पशु", "राक्षस"], correct: 0 },
        { q: "56. 'मित्र' का विलोम शब्द क्या है?", options: ["सखा", "शत्रु", "दुश्मन"], correct: 1 },
        { q: "57. 'यश' का सही विलोम शब्द चुनें:", options: ["कीर्ति", "अपयश", "नाम"], correct: 1 },
        { q: "58. 'रक्षक' का विलोम शब्द क्या है?", options: ["बचाने वाला", "भक्षक", "मारने वाला"], correct: 1 },
        { q: "59. 'विनाश' का विपरीतार्थक शब्द है:", options: ["नष्ट", "निर्माण", "सृजन"], correct: 1 },
        { q: "60. 'शांति' का सही विलोम क्या होगा?", options: ["सुकून", "अशांति", "शोर"], correct: 1 },
        { q: "61. 'सज्जन' का विलोम शब्द पहचानें:", options: ["दुर्जन", "बुरा", "दुष्ट"], correct: 0 },
        { q: "62. 'सफल' का विपरीत शब्द है:", options: ["पास", "असफल", "विफल"], correct: 1 },
        { q: "63. 'सावधान' का विलोम शब्द क्या है?", options: ["होशियार", "असावधान", "लापरवाह"], correct: 1 },
        { q: "64. 'सुख' का सही विलोम शब्द चुनें:", options: ["आनंद", "दुख", "कष्ट"], correct: 1 },
        { q: "65. 'सुबह' का विलोm शब्द क्या है?", options: ["दिन", "शाम", "रात"], correct: 1 },
        { q: "66. 'स्वतंत्र' का विपरीतार्थक शब्द है:", options: ["आजाद", "परतंत्र", "गुलाम"], correct: 1 },
        { q: "67. 'हल्का' का सही विलोम क्या होगा?", options: ["कम", "भारी", "वजन"], correct: 1 },
        { q: "68. 'हार' का विलोम शब्द पहचानें:", options: ["जीत", "विजय", "पराजय"], correct: 0 },
        { q: "69. 'हिंसा' का विपरीत शब्द है:", options: ["लड़ाई", "अहिंसा", "शांति"], correct: 1 },
        { q: "70. 'ज्ञान' का विलोम शब्द क्या है?", options: ["विज्ञान", "अज्ञान", "मूर्खता"], correct: 1 },
        { q: "71. 'क्षमा' का सही विलोम शब्द चुनें:", options: ["माफी", "दंड", "सजा"], correct: 1 },
        { q: "72. 'उपकार' का विलोम शब्द क्या है?", options: ["भलाई", "अपकार", "बुराई"], correct: 1 },
        { q: "73. 'उचित' का विपरीतार्थक शब्द है:", options: ["सही", "अनुचित", "गलत"], correct: 1 },
        { q: "74. 'आलस्य' का सही विलोम क्या होगा?", options: ["सुस्ती", "परिश्रम", "काम"], correct: 1 },
        { q: "75. 'अल्प' का विलोम शब्द पहचानें:", options: ["कम", "अधिक", "ज्यादा"], correct: 1 },
        { q: "76. 'कठिन' का विपरीत शब्द है:", options: ["मुश्किल", "सरल", "आसान"], correct: 1 },
        { q: "77. 'क्रय' का विलोम शब्द क्या है?", options: ["खरीद", "विक्रय", "बेचना"], correct: 1 },
        { q: "78. 'खिड़की' का सही विलोम शब्द चुनें (व्याकरणिक):", options: ["दरवाजा", "दीवार", "रोशनदान"], correct: 0 },
        { q: "79. 'गहरा' का विलोम शब्द क्या है?", options: ["नीचा", "उथला", "छिछला"], correct: 1 },
        { q: "80. 'गरीब' का विपरीतार्थक शब्द है:", options: ["निर्धन", "अमीर", "धनी"], correct: 1 },
        { q: "81. 'चतुर' का सही विलोम क्या होगा?", options: ["होशियार", "मूर्ख", "बुद्धिमान"], correct: 1 },
        { q: "82. 'चोर' का विलोम शब्द पहचानें:", options: ["पुलिस", "साधु", "ईमानदार"], correct: 1 },
        { q: "83. 'छोटा' का विपरीत शब्द है:", options: ["कम", "बड़ा", "विशाल"], correct: 1 },
        { q: "84. 'जहर' का विलोम शब्द क्या है?", options: ["विष", "अमृत", "दवा"], correct: 1 },
        { q: "85. 'झूठ' का सही विलोम शब्द चुनें:", options: ["असत्य", "सत्य", "सच"], correct: 2 },
        { q: "86. 'दाता' का विलोम शब्द क्या है?", options: ["देने वाला", "याचक", "भिखारी"], correct: 1 },
        { q: "87. 'दिन' का विपरीतार्थक शब्द है:", options: ["सुबह", "रात", "संध्या"], correct: 1 },
        { q: "88. 'धूप' का सही विलोम क्या होगा?", options: ["छाँव", "अंधेरा", "रात"], correct: 0 },
        { q: "89. 'धीरे' का विलोम शब्द पहचानें:", options: ["आहिस्ता", "तेज़", "जल्दी"], correct: 1 },
        { q: "90. 'नरक' का विपरीत शब्द है:", options: ["पाताल", "स्वर्ग", "पृथ्वी"], correct: 1 },
        { q: "91. 'निंदा' का विलोम शब्द क्या है?", options: ["बुराई", "प्रशंसा", "स्तुति"], correct: 2 },
        { q: "92. 'पवित्र' का सही विलोम शब्द चुनें:", options: ["शुद्ध", "अपवित्र", "गंदा"], correct: 1 },
        { q: "93. 'प्रश्न' का विलोम शब्द क्या है?", options: ["सवाल", "उत्तर", "जवाब"], correct: 1 },
        { q: "94. 'प्रेम' का विपरीतार्थक शब्द है:", options: ["प्यार", "घृणा", "नफरत"], correct: 1 },
        { q: "95. 'बेचना' का सही विलोम क्या होगा?", options: ["देना", "खरीदना", "लेना"], correct: 1 },
        { q: "96. 'भारी' का विलोम शब्द पहचानें:", options: ["वजन", "हल्का", "कम"], correct: 1 },
        { q: "97. 'मौन' का विपरीत शब्द है:", options: ["चुप", "मुखर", "बोलना"], correct: 1 },
        { q: "98. 'मोटा' का विलोम शब्द क्या है?", options: ["चौड़ा", "पतला", "बारीक"], correct: 1 },
        { q: "99. 'विष' का सही विलोम शब्द चुनें:", options: ["जहर", "अमृत", "पानी"], correct: 1 },
        { q: "100. 'विनाश' का सही विलोम शब्द है:", options: ["निर्माण", "सृजन", "दोनों"], correct: 2 }
    ]
};
