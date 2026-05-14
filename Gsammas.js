/**
 * Gsammas.js - Higher Class Edition
 * Topic: समास (Compounds) - पदों का मेल और विग्रह
 */

if (typeof Hindi === 'undefined') { window.Hindi = {}; }

Hindi.sammas = {
    title: "समास (Compounds): शब्दों का संक्षेपीकरण 🧩",
    content: `
        <section style="text-align: left; padding: 10px;">
            
            <!-- 1. विस्तृत परिभाषा -->
            <div style="background: #fdf2f2; padding: 25px; border-radius: 25px; border-left: 10px solid #FF6B6B; margin-bottom: 30px;">
                <h2 style="color: #FF6B6B; font-size: 2.2rem; margin-top:0;">1. समास की अवधारणा</h2>
                <p style="font-size: 1.4rem; line-height: 1.8;">
                    दो या दो से अधिक शब्दों के मेल से बने एक नए सार्थक शब्द को <b>समास</b> कहते हैं। 
                    उच्च कक्षाओं में इसे समझने के लिए दो मुख्य अंगों को जानना आवश्यक है:
                </p>
                <ul style="font-size: 1.2rem; line-height: 1.6;">
                    <li><b>सामासिक पद (समस्त पद):</b> समास के नियमों से बना शब्द (जैसे: राजपुत्र)।</li>
                    <li><b>समास विग्रह:</b> समस्त पद के सभी शब्दों को अलग-अलग करके उनके संबंध को स्पष्ट करना (जैसे: राजा का पुत्र)।</li>
                </ul>
            </div>

            <h2 style="color: #333; font-size: 2rem; margin-top: 40px; border-bottom: 3px solid #333; display: inline-block;">2. समास के 6 मुख्य भेद (Master Classification)</h2>
            <p style="font-size: 1.4rem; margin-top: 15px;">पदों की प्रधानता के आधार पर समास के भेद निम्नलिखित हैं:</p>

            <!-- 1. अव्ययीभाव -->
            <div style="margin-bottom: 25px; background: #fff; padding: 25px; border-radius: 20px; border: 2px solid #eee; border-top: 8px solid #4D96FF;">
                <h3 style="color: #4D96FF; font-size: 1.8rem; margin-top:0;">(i) अव्ययीभाव समास (Adverbial Compound)</h3>
                <p style="font-size: 1.3rem;">इसका <b>पहला पद प्रधान</b> और अव्यय होता है।</p>
                <p style="font-size: 1.2rem;"><i>पहचान:</i> यथा, प्रति, आ, भर, हर, अनु।<br>
                <i>उदाहरण:</i> <b>यथाशक्ति</b> (शक्ति के अनुसार), <b>प्रतिदिन</b> (प्रत्येक दिन)।</p>
            </div>

            <!-- 2. तत्पुरुष -->
            <div style="margin-bottom: 25px; background: #fff; padding: 25px; border-radius: 20px; border: 2px solid #eee; border-top: 8px solid #6BCB77;">
                <h3 style="color: #2e7d32; font-size: 1.8rem; margin-top:0;">(ii) तत्पुरुष समास (Determinate Compound)</h3>
                <p style="font-size: 1.3rem;">इसका <b>दूसरा पद प्रधान</b> होता है और विग्रह करने पर कारक चिह्नों का लोप होता है।</p>
                <p style="font-size: 1.2rem;"><i>उदाहरण:</i> <b>युद्धक्षेत्र</b> (युद्ध का क्षेत्र), <b>स्वर्गप्राप्त</b> (स्वर्ग को प्राप्त)।</p>
            </div>

            <!-- 3. कर्मधारय -->
            <div style="margin-bottom: 25px; background: #fff; padding: 25px; border-radius: 20px; border: 2px solid #eee; border-top: 8px solid #FFD93D;">
                <h3 style="color: #d4a017; font-size: 1.8rem; margin-top:0;">(iii) कर्मधारय समास (Appositional)</h3>
                <p style="font-size: 1.3rem;">इसमें विशेषण-विशेष्य या उपमान-उपमेय का संबंध होता है।</p>
                <p style="font-size: 1.2rem;"><i>उदाहरण:</i> <b>नीलकंठ</b> (नीला है जो कंठ), <b>चंद्रमुख</b> (चंद्र के समान मुख)।</p>
            </div>

            <!-- 4. द्विगु -->
            <div style="margin-bottom: 25px; background: #fff; padding: 25px; border-radius: 20px; border: 2px solid #eee; border-top: 8px solid #FF6B6B;">
                <h3 style="color: #FF6B6B; font-size: 1.8rem; margin-top:0;">(iv) द्विगु समास (Numeral Compound)</h3>
                <p style="font-size: 1.3rem;">इसका पहला पद <b>संख्यावाचक (Number)</b> होता है और यह समूह का बोध कराता है।</p>
                <p style="font-size: 1.2rem;"><i>उदाहरण:</i> <b>चौराहा</b> (चार राहों का समूह), <b>तिरंगा</b> (तीन रंगों का समूह)।</p>
            </div>

            <!-- 5. द्वंद्व -->
            <div style="margin-bottom: 25px; background: #fff; padding: 25px; border-radius: 20px; border: 2px solid #eee; border-top: 8px solid #9b59b6;">
                <h3 style="color: #9b59b6; font-size: 1.8rem; margin-top:0;">(v) द्वंद्व समास (Copulative)</h3>
                <p style="font-size: 1.3rem;">इसके <b>दोनों पद प्रधान</b> होते हैं और विग्रह करने पर 'और', 'या', 'अथवा' लगता है।</p>
                <p style="font-size: 1.2rem;"><i>उदाहरण:</i> <b>माता-पिता</b> (माता और पिता), <b>पाप-पुण्य</b> (पाप या पुण्य)।</p>
            </div>

            <!-- 6. बहुब्रीहि -->
            <div style="margin-bottom: 25px; background: #fff; padding: 25px; border-radius: 20px; border: 2px solid #eee; border-top: 8px solid #34495e;">
                <h3 style="color: #34495e; font-size: 1.8rem; margin-top:0;">(vi) बहुब्रीहि समास (Possessive)</h3>
                <p style="font-size: 1.3rem;">इसमें कोई भी पद प्रधान नहीं होता, बल्कि दोनों मिलकर किसी <b>तीसरे अर्थ</b> की ओर संकेत करते हैं।</p>
                <p style="font-size: 1.2rem;"><i>उदाहरण:</i> <b>लंबोदर</b> (लंबा है उदर जिनका अर्थात् गणेश), <b>दशानन</b> (रावण)।</p>
            </div>
        </section>

        <hr style="border: 2px dashed #ccc; margin: 50px 0;">

        <!-- Quiz Panel (40 Questions) -->
        <div class="quiz-panel" id="hindi-quiz-wrapper" style="background: #f0f7ff; padding: 35px; border-radius: 35px; border: 5px solid #4D96FF;">
            <div style="display: flex; justify-content: space-between; font-size: 1.6rem; font-weight: bold; margin-bottom: 30px;">
                <span id="hq-progress" style="color: #4D96FF;">प्रश्न: 1 / 40</span>
                <span id="hq-score" style="color: #6BCB77;">स्कोर: 0</span>
            </div>
            <div id="h-question-container" style="min-height: 220px; text-align: center;">
                <h4 id="hq-text" style="font-size: 1.8rem; color: #2c3e50; margin-bottom: 35px; line-height: 1.5;">लोड हो रहा है...</h4>
                <div id="h-options-box"></div>
            </div>
            <div style="display: flex; justify-content: space-between; gap: 20px; margin-top: 45px;">
                <button class="option-btn" style="background:#eee; flex:1;" onclick="window.prevHindiQuestion()">पीछे</button>
                <button class="option-btn" style="background:#4D96FF; color:white; flex:1;" onclick="window.nextHindiQuestion()">आगे</button>
            </div>
            <button class="option-btn" style="margin-top:30px; background:transparent; border: 3px solid #4D96FF; color:#4D96FF; font-size: 1.2rem; text-align:center; padding: 15px; width: 100%;" onclick="window.resetHindiQuiz()">क्विज़ रीसेट करें</button>
        </div>
    `,
    quizData: [
        { q: "1. 'यथाशक्ति' में कौन सा समास है?", options: ["तत्पुरुष", "अव्ययीभाव", "द्विगु"], correct: 1 },
        { q: "2. 'चौराहा' का समास भेद पहचानें:", options: ["द्वंद्व", "बहुब्रीहि", "द्विगु"], correct: 2 },
        { q: "3. 'नीलकंठ' (नीला है कंठ जिसका अर्थात् शिव) में समास है:", options: ["कर्मधारय", "बहुब्रीहि", "अव्ययीभाव"], correct: 1 },
        { q: "4. जिस समास के दोनों पद प्रधान हों, उसे क्या कहते हैं?", options: ["द्वंद्व", "तत्पुरुष", "द्विगु"], correct: 0 },
        { q: "5. 'राजपुत्र' का सही विग्रह क्या है?", options: ["राजा का पुत्र", "राजा और पुत्र", "राजा में पुत्र"], correct: 0 },
        { q: "6. 'दशानन' किस समास का उदाहरण है?", options: ["बहुब्रीहि", "कर्मधारय", "द्विगु"], correct: 0 },
        { q: "7. 'भाई-बहन' में कौन सा समास है?", options: ["तत्पुरुष", "द्वंद्व", "अव्ययीभाव"], correct: 1 },
        { q: "8. 'नवग्रह' शब्द में कौन सा समास है?", options: ["द्विगु", "कर्मधारय", "बहुब्रीहि"], correct: 0 },
        { q: "9. 'पीतांबर' (पीला है जो अंबर) में समास है:", options: ["अव्ययीभाव", "कर्मधारय", "द्वंद्व"], correct: 1 },
        { q: "10. जिसका पहला पद प्रधान और अव्यय हो:", options: ["तत्पुरुष", "द्वंद्व", "अव्ययीभाव"], correct: 2 },
        { q: "11. 'रसोईघर' (रसोई के लिए घर) में समास है:", options: ["तत्पुरुष", "द्विगु", "बहुब्रीहि"], correct: 0 },
        { q: "12. 'त्रिलोचन' किसके लिए प्रयुक्त होता है?", options: ["गणेश", "शिव", "विष्णु"], correct: 1 },
        { q: "13. 'हाथों-हाथ' में कौन सा समास है?", options: ["अव्ययीभाव", "द्वंद्व", "तत्पुरुष"], correct: 0 },
        { q: "14. 'सुख-दुख' में विग्रह क्या होगा?", options: ["सुख का दुख", "सुख और दुख", "सुख में दुख"], correct: 1 },
        { q: "15. 'महात्मा' (महान है जो आत्मा) में समास है:", options: ["कर्मधारय", "द्विगु", "अव्ययीभाव"], correct: 0 },
        { q: "16. 'पंचवटी' में पहला पद क्या है?", options: ["विशेषण", "संख्यावाचक", "अव्यय"], correct: 1 },
        { q: "17. 'गजानन' का अर्थ है:", options: ["हाथी", "गणेश", "रावण"], correct: 1 },
        { q: "18. 'देशभक्ति' का विग्रह है:", options: ["देश की भक्ति", "देश के लिए भक्ति", "देश और भक्ति"], correct: 1 },
        { q: "19. 'आजन्म' में उपसर्ग क्या है?", options: ["आ", "आज", "जम"], correct: 0 },
        { q: "20. 'लंबोदर' किस समास का उदाहरण है?", options: ["बहुब्रीहि", "द्विगु", "तत्पुरुष"], correct: 0 },
        { q: "21. 'शताब्दी' में कौन सा समास है?", options: ["द्विगु", "द्वंद्व", "तत्पुरुष"], correct: 0 },
        { q: "22. 'घनश्याम' का विग्रह है:", options: ["घन के समान श्याम", "घन और श्याम", "घन का श्याम"], correct: 0 },
        { q: "23. 'यथासमय' में समास है:", options: ["अव्ययीभाव", "कर्मधारय", "तत्पुरुष"], correct: 0 },
        { q: "24. 'हस्तलिखित' का अर्थ है:", options: ["हाथ का लिखा", "हाथ से लिखा", "हाथ और लिखा"], correct: 1 },
        { q: "25. 'दाल-चावल' में समास है:", options: ["द्वंद्व", "द्विगु", "तत्पुरुष"], correct: 0 },
        { q: "26. 'महापुरुष' में विशेषण क्या है?", options: ["पुरुष", "महान", "महा"], correct: 1 },
        { q: "27. 'सप्ताह' में कितने दिनों का समूह है?", options: ["5", "7", "10"], correct: 1 },
        { q: "28. 'चंद्रशेखर' (चंद्र है शिखर पर जिसके अर्थात् शिव) समास है:", options: ["बहुब्रीहि", "द्विगु", "कर्मधारय"], correct: 0 },
        { q: "29. 'प्रतिवर्ष' में समास है:", options: ["अव्ययीभाव", "तत्पुरुष", "द्वंद्व"], correct: 0 },
        { q: "30. 'विद्याधन' (विद्या रूपी धन) में समास है:", options: ["कर्मधारय", "द्विगु", "तत्पुरुष"], correct: 0 },
        { q: "31. 'आमरण' का अर्थ है:", options: ["मरने तक", "मरने के बाद", "जीवन भर"], correct: 0 },
        { q: "32. 'गुण-दोष' में समास है:", options: ["द्वंद्व", "द्विगु", "तत्पुरुष"], correct: 0 },
        { q: "33. 'नीलकमल' में 'नील' क्या है?", options: ["विशेषण", "विशेष्य", "अव्यय"], correct: 0 },
        { q: "34. 'अष्टाध्यायी' में समास है:", options: ["द्विगु", "बहुब्रीहि", "द्वंद्व"], correct: 0 },
        { q: "35. 'कामचोर' (काम से जी चुराने वाला) में समास है:", options: ["अपादान तत्पुरुष", "करण तत्पुरुष", "संबंध तत्पुरुष"], correct: 0 },
        { q: "36. 'दिन-रात' का विग्रह:", options: ["दिन और रात", "दिन का रात", "दिन में रात"], correct: 0 },
        { q: "37. 'पीतांबर' जब विष्णु के लिए आए तो समास होगा:", options: ["बहुब्रीहि", "कर्मधारय", "द्विगु"], correct: 0 },
        { q: "38. 'राहखर्च' का विग्रह:", options: ["राह का खर्च", "राह के लिए खर्च", "राह में खर्च"], correct: 1 },
        { q: "39. 'भरपेट' में समास है:", options: ["अव्ययीभाव", "तत्पुरुष", "द्वंद्व"], correct: 0 },
        { q: "40. समास का विलोम क्या होता है?", options: ["विच्छेद", "व्यास", "विग्रह"], correct: 1 }
    ]
};
