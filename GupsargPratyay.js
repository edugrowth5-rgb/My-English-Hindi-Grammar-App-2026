/**
 * GupsargPratyay.js - Higher Class Edition
 */

if (typeof Hindi === 'undefined') { window.Hindi = {}; }

Hindi.upsargpratyay = {
    title: "उपसर्ग और प्रत्यय: उच्च स्तरीय विश्लेषण 🏗️",
    content: `
        <section style="text-align: left; padding: 10px;">
            
            <!-- उपसर्ग का विस्तृत वर्गीकरण -->
            <div style="background: #f0f7ff; padding: 25px; border-radius: 25px; border-left: 10px solid #4D96FF; margin-bottom: 30px;">
                <h2 style="color: #4D96FF; font-size: 2rem; margin-top:0;">1. उपसर्ग (Detailed Classification)</h2>
                <p style="font-size: 1.2rem;">उच्च कक्षाओं के लिए उपसर्गों को उनके स्रोत के आधार पर 3 भागों में बांटा जाता है:</p>
                
                <div style="margin-top:15px;">
                    <b style="color:#2c3e50; font-size:1.3rem;">A. संस्कृत के उपसर्ग (तत्सम्):</b>
                    <p style="font-size:1.1rem; background:white; padding:10px; border-radius:8px;">
                        जैसे: <b>अति</b> (अधिक) - अत्यंत, <b>अधि</b> (श्रेष्ठ) - अधिकार, <b>दुर्</b> (बुरा) - दुर्दशा।
                    </p>
                    
                    <b style="color:#2c3e50; font-size:1.3rem;">B. हिन्दी के उपसर्ग (तद्भव):</b>
                    <p style="font-size:1.1rem; background:white; padding:10px; border-radius:8px;">
                        जैसे: <b>अन</b> (अभाव) - अनपढ़, <b>बिन</b> (बिना) - बिनव्याहा, <b>चौ</b> (चार) - चौराहा।
                    </p>

                    <b style="color:#2c3e50; font-size:1.3rem;">C. विदेशी/आगत उपसर्ग (Urdu/English):</b>
                    <p style="font-size:1.1rem; background:white; padding:10px; border-radius:8px;">
                        जैसे: <b>बद</b> (बुरा) - बदनाम, <b>ला</b> (बिना) - लाचार, <b>सब</b> (उप) - सब-इंस्पेक्टर।
                    </p>
                </div>
            </div>

            <!-- प्रत्यय का विस्तृत वर्गीकरण -->
            <div style="background: #fff5f5; padding: 25px; border-radius: 25px; border-left: 10px solid #FF6B6B; margin-bottom: 30px;">
                <h2 style="color: #FF6B6B; font-size: 2rem; margin-top:0;">2. प्रत्यय: कृत् और तद्धित का अंतर</h2>
                
                <div style="margin-top:15px; background:white; padding:20px; border-radius:15px; border:1px solid #FF6B6B;">
                    <h4 style="color:#FF6B6B; margin-top:0;">(i) कृत् प्रत्यय (Krit Pratyay):</h4>
                    <p style="font-size:1.1rem;">जो क्रिया या धातु के अंत में लगते हैं। इनसे बने शब्द <b>'कृदंत'</b> कहलाते हैं।<br>
                    <i>जैसे:</i> लिख् + आवट = <b>लिखावट</b>, लड़ + आकू = <b>लड़ाकू</b>।</p>

                    <hr style="border:0; border-top:1px solid #eee;">

                    <h4 style="color:#FF6B6B;">(ii) तद्धित प्रत्यय (Taddhit Pratyay):</h4>
                    <p style="font-size:1.1rem;">जो संज्ञा, सर्वनाम या विशेषण के अंत में लगते हैं।<br>
                    <i>जैसे:</i> सुंदर + ता = <b>सुंदरता</b>, बच्चा + पन = <b>बचपन</b>।</p>
                </div>
            </div>
        </section>

        <!-- Quiz Panel (40 Questions - Higher Difficulty) -->
        <div class="quiz-panel" id="hindi-quiz-wrapper" style="background: #f0fdf4; padding: 35px; border-radius: 35px; border: 5px solid #6BCB77;">
            <div style="display: flex; justify-content: space-between; font-size: 1.6rem; font-weight: bold; margin-bottom: 30px;">
                <span id="hq-progress" style="color: #2e7d32;">प्रश्न: 1 / 40</span>
                <span id="hq-score" style="color: #FF6B6B;">स्कोर: 0</span>
            </div>
            <div id="h-question-container" style="min-height: 220px; text-align: center;">
                <h4 id="hq-text" style="font-size: 1.8rem; color: #2c3e50; margin-bottom: 35px; line-height: 1.5;">लोड हो रहा है...</h4>
                <div id="h-options-box"></div>
            </div>
            <!-- Navigation Buttons -->
            <div style="display: flex; justify-content: space-between; gap: 20px; margin-top: 45px;">
                <button class="option-btn" style="background:#eee; flex:1;" onclick="window.prevHindiQuestion()">पीछे</button>
                <button class="option-btn" style="background:#6BCB77; color:white; flex:1;" onclick="window.nextHindiQuestion()">आगे</button>
            </div>
        </div>
    `,
    quizData: [
        { q: "1. 'अत्यंत' शब्द में कौन सा संस्कृत उपसर्ग है?", options: ["अ", "अति", "अत्य"], correct: 1 },
        { q: "2. क्रिया या धातु के अंत में जुड़ने वाले प्रत्यय कहलाते हैं:", options: ["कृत् प्रत्यय", "तद्धित प्रत्यय", "विभक्ति"], correct: 0 },
        { q: "3. 'लिखावट' में कौन सा प्रत्यय है?", options: ["वट", "आवट", "वट"], correct: 1 },
        { q: "4. 'बदनाम' में प्रयुक्त उपसर्ग किस भाषा का है?", options: ["संस्कृत", "हिन्दी", "उर्दू/फारसी"], correct: 2 },
        { q: "5. 'सुंदरता' में 'ता' किस प्रकार का प्रत्यय है?", options: ["कृत्", "तद्धित", "स्त्री"], correct: 1 },
        { q: "6. 'अधि' उपसर्ग से बना शब्द है:", options: ["अधर्म", "अधिकार", "अनुशासन"], correct: 1 },
        { q: "7. 'लड़ाकू' शब्द में कौन सा प्रत्यय है?", options: ["कू", "आकू", "अकू"], correct: 1 },
        { q: "8. 'चौराहा' में 'चौ' किस भाषा का उपसर्ग है?", options: ["संस्कृत", "हिन्दी", "अंग्रेजी"], correct: 1 },
        { q: "9. 'वैज्ञानिक' शब्द में मूल शब्द और प्रत्यय क्या है?", options: ["विज्ञान + इक", "वैज्ञ + निक", "विज्ञ + इक"], correct: 0 },
        { q: "10. 'निर्' उपसर्ग का अर्थ क्या होता है?", options: ["बुरा", "बिना/निषेध", "सहित"], correct: 1 },
        // ... (आप इसमें 40 कठिन प्रश्न जोड़ सकते हैं)
        { q: "11. 'प्रहार' में उपसर्ग है:", options: ["प्र", "पर", "प्रा"], correct: 0 },
        { q: "12. 'दूधवाला' में प्रत्यय है:", options: ["वाला", "ला", "आला"], correct: 0 },
        { q: "13. 'उप' उपसर्ग का अर्थ है:", options: ["दूर", "समीप/छोटा", "पीछे"], correct: 1 },
        { q: "14. 'सजावट' शब्द है:", options: ["तद्धितांत", "कृदंत", "तद्भव"], correct: 1 },
        { q: "15. 'कमजोर' में उपसर्ग है:", options: ["क", "कम", "जोर"], correct: 1 },
        { q: "16. 'पांडित्य' में प्रत्यय है:", options: ["य", "त्य", "इत्य"], correct: 0 },
        { q: "17. 'परि' उपसर्ग से बना शब्द:", options: ["परिवार", "परिणाम", "दोनों"], correct: 2 },
        { q: "18. 'मिठास' में प्रत्यय है:", options: ["आस", "स", "ास"], correct: 0 },
        { q: "19. 'ला' उपसर्ग से बना शब्द 'लाजवाब' में 'ला' का अर्थ:", options: ["बिना", "सहित", "श्रेष्ठ"], correct: 0 },
        { q: "20. प्रत्यय के जुड़ने से शब्द के अर्थ में क्या होता है?", options: ["विस्तार", "परिवर्तन", "लोप"], correct: 1 },
        { q: "21. 'अभ्यास' में उपसर्ग है:", options: ["अ", "अभी", "अभि"], correct: 2 },
        { q: "22. 'घबराहट' में प्रत्यय है:", options: ["आहट", "हट", "हट"], correct: 0 },
        { q: "23. 'वि' उपसर्ग का अर्थ है:", options: ["विशेष", "अभाव", "दोनों"], correct: 2 },
        { q: "24. 'कौशल' में प्रत्यय है:", options: ["ल", "अ", "अल"], correct: 1 },
        { q: "25. 'अनुशासन' में उपसर्ग:", options: ["अनु", "अन", "अन्"], correct: 0 },
        { q: "26. 'मानवता' में मूल शब्द:", options: ["मान", "मानव", "मानवता"], correct: 1 },
        { q: "27. 'परा' उपसर्ग का अर्थ:", options: ["उल्टा/पीछे", "समीप", "आगे"], correct: 0 },
        { q: "28. 'सपेरा' में प्रत्यय:", options: ["रा", "एरा", "आ"], correct: 1 },
        { q: "29. 'दुष्' उपसर्ग का उदाहरण:", options: ["दुर्दशा", "दुष्कर", "दुबला"], correct: 1 },
        { q: "30. 'चमकीला' में प्रत्यय:", options: ["ईला", "कीला", "ला"], correct: 0 },
        { q: "31. 'प्रति' उपसर्ग का अर्थ:", options: ["सामने/हर एक", "पीछे", "अभाव"], correct: 0 },
        { q: "32. 'लड़कपन' में प्रत्यय:", options: ["पन", "पन्न", "न"], correct: 0 },
        { q: "33. 'उत' उपसर्ग का उदाहरण:", options: ["उल्लास", "उज्ज्वल", "दोनों"], correct: 2 },
        { q: "34. 'बुढ़ापा' में मूल शब्द:", options: ["बुढ़", "बूढ़ा", "बुढ़ा"], correct: 1 },
        { q: "35. 'बे' उपसर्ग का अर्थ:", options: ["बिना", "सहित", "बुरा"], correct: 0 },
        { q: "36. 'पर्वतीय' में प्रत्यय:", options: ["इय", "ईय", "य"], correct: 1 },
        { q: "37. 'वी' + ज्ञान =", options: ["विज्ञान", "विज्ञ", "ज्ञान"], correct: 0 },
        { q: "38. 'सजावट' में मूल क्रिया:", options: ["सजा", "सजाना", "सज"], correct: 2 },
        { q: "39. 'सु' उपसर्ग का विलोम उपसर्ग:", options: ["कु", "बे", "निर"], correct: 0 },
        { q: "40. 'तद्धित' प्रत्यय जुड़ते हैं:", options: ["क्रिया में", "संज्ञा/सर्वनाम में", "धातु में"], correct: 1 }
    ]
};
