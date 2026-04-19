/**
 * Gkriya.js - Hindi Grammar Topic
 * Topic: क्रिया (Verb) - विस्तृत पाठ और 40 प्रश्न
 */

if (typeof Hindi === 'undefined') { window.Hindi = {}; }

Hindi.kriya = {
    title: "क्रिया (Verb): कार्य की शक्ति ⚡",
    content: `
        <section style="text-align: left; padding: 10px;">
            
            <div style="background: #fff5f5; padding: 25px; border-radius: 25px; border-left: 10px solid #FF6B6B; margin-bottom: 30px; box-shadow: 5px 5px 15px rgba(0,0,0,0.05);">
                <h2 style="color: #FF6B6B; font-size: 2.2rem; margin-top:0;">1. क्रिया क्या है? (Definition)</h2>
                <p style="font-size: 1.4rem; line-height: 1.8;">
                    जिन शब्दों से किसी <b>कार्य के होने</b> या <b>किए जाने</b> का बोध हो, उन्हें <b>क्रिया</b> कहते हैं। 
                    बिना क्रिया के वाक्य की रचना संभव नहीं है।
                </p>
                <div style="background: white; padding: 15px; border-radius: 12px; margin-top: 15px; border: 1px dashed #FF6B6B;">
                    <p style="font-size: 1.3rem; margin: 5px 0;"><i>उदाहरण:</i> राम <b>पढ़ता</b> है। पक्षी <b>उड़ते</b> हैं। बारिश <b>हो</b> रही है।</p>
                    <p style="font-size: 1.3rem; margin: 10px 0 0 0; color: #555;"><b>धातु (Root):</b> क्रिया के मूल रूप को धातु कहते हैं। जैसे: पढ़, लिख, जा। इसमें 'ना' जोड़ने से क्रिया बनती है (पढ़ना, लिखना)।</p>
                </div>
            </div>

            <h2 style="color: #4D96FF; font-size: 2rem; margin-top: 40px; border-bottom: 3px solid #4D96FF; display: inline-block;">2. क्रिया के भेद (कर्म के आधार पर)</h2>
            <p style="font-size: 1.4rem; margin-top: 15px;">मुख्य रूप से क्रिया के <b>दो भेद</b> माने जाते हैं:</p>

            <div style="margin-bottom: 25px; background: #f0f7ff; padding: 25px; border-radius: 20px; border-top: 8px solid #4D96FF;">
                <h3 style="color: #4D96FF; font-size: 1.8rem; margin-top:0;">(i) अकर्मक क्रिया (Intransitive Verb)</h3>
                <p style="font-size: 1.3rem;">जहाँ क्रिया का फल सीधा <b>कर्ता (Subject)</b> पर पड़ता है और कर्म की आवश्यकता नहीं होती।</p>
                <p style="font-size: 1.2rem; background: white; padding: 10px; border-radius: 10px; display: inline-block;">
                    <i>उदाहरण:</i> बच्चा <b>रोता</b> है। सांप <b>रेंगता</b> है। मोहन <b>हँसता</b> है।
                </p>
            </div>

            <div style="margin-bottom: 25px; background: #f0fff0; padding: 25px; border-radius: 20px; border-top: 8px solid #6BCB77;">
                <h3 style="color: #2e7d32; font-size: 1.8rem; margin-top:0;">(ii) सकर्मक क्रिया (Transitive Verb)</h3>
                <p style="font-size: 1.3rem;">जहाँ क्रिया का फल <b>कर्म (Object)</b> पर पड़ता है। इसमें 'क्या' या 'किसको' का उत्तर मिलता है।</p>
                <p style="font-size: 1.2rem; background: white; padding: 10px; border-radius: 10px; display: inline-block;">
                    <i>उदाहरण:</i> राम <b>आम</b> खाता है। (क्या खाता है? - आम)। सीता <b>पत्र</b> लिखती है।
                </p>
            </div>

            <div style="background: #34495e; color: white; padding: 20px; border-radius: 20px; margin-top: 30px;">
                <h3 style="color: #FFD93D; margin-top: 0;">💡 अन्य महत्वपूर्ण भेद</h3>
                <ul style="font-size: 1.2rem; line-height: 1.8;">
                    <li><b>संयुक्त क्रिया:</b> जब दो क्रियाएँ साथ आएँ (जैसे: वह खाना <u>खा चुका</u>)।</li>
                    <li><b>प्रेरणार्थक क्रिया:</b> जब कर्ता स्वयं काम न करके किसी और से कराए (जैसे: लिखवाना, पढ़वाना)।</li>
                    <li><b>नामधातु क्रिया:</b> जो संज्ञा या विशेषण से बने (जैसे: हाथ से <u>हथियाना</u>, बात से <u>बतियाना</u>)।</li>
                </ul>
            </div>
        </section>

        <hr style="border: 2px dashed #eee; margin: 50px 0;">

        <div class="quiz-panel" id="hindi-quiz-wrapper" style="background: #FFF; padding: 35px; border-radius: 35px; border: 5px solid #FF6B6B;">
            <div style="display: flex; justify-content: space-between; font-size: 1.6rem; font-weight: bold; margin-bottom: 30px;">
                <span id="hq-progress" style="color: #FF6B6B;">प्रश्न: 1 / 40</span>
                <span id="hq-score" style="color: #6BCB77;">स्कोर: 0</span>
            </div>
            
            <div id="h-question-container" style="min-height: 220px; text-align: center;">
                <h4 id="hq-text" style="font-size: 1.8rem; color: #2c3e50; margin-bottom: 35px; line-height: 1.5;">क्विज़ लोड हो रहा है...</h4>
                <div id="h-options-box"></div>
            </div>
            
            <div style="display: flex; justify-content: space-between; gap: 20px; margin-top: 45px;">
                <button class="option-btn" style="background:#eee; flex:1; text-align:center; padding: 20px; font-size: 1.3rem;" onclick="window.prevHindiQuestion()">पीछे</button>
                <button class="option-btn" style="background:#6BCB77; color:white; flex:1; text-align:center; padding: 20px; font-size: 1.3rem;" onclick="window.nextHindiQuestion()">आगे</button>
            </div>
            <button class="option-btn" style="margin-top:30px; background:transparent; border: 3px solid #FF6B6B; color:#FF6B6B; font-size: 1.2rem; text-align:center; padding: 15px; width: 100%;" onclick="window.resetHindiQuiz()">शुरू से शुरू करें</button>
        </div>
    `,
    quizData: [
        { q: "1. 'बच्चा सो रहा है' में कौन सी क्रिया है?", options: ["सकर्मक", "अकर्मक", "प्रेरणार्थक"], correct: 1 },
        { q: "2. क्रिया के मूल रूप को क्या कहते हैं?", options: ["धातु", "शब्द", "कारक"], correct: 0 },
        { q: "3. 'मोहन पुस्तक पढ़ता है' में कर्म क्या है?", options: ["मोहन", "पुस्तक", "पढ़ता"], correct: 1 },
        { q: "4. 'पढ़ना' से प्रेरणार्थक क्रिया बनेगी:", options: ["पढ़", "पढ़ाना/पढ़वाना", "पढ़ाई"], correct: 1 },
        { q: "5. जहाँ क्रिया का फल कर्म पर पड़े, उसे कहते हैं:", options: ["सकर्मक", "अकर्मक", "संयुक्त"], correct: 0 },
        { q: "6. 'हँसना' कैसी क्रिया है?", options: ["सकर्मक", "अकर्मक", "नामधातु"], correct: 1 },
        { q: "7. 'राधा ने फल खरीदे' में कौन सी क्रिया है?", options: ["अकर्मक", "सकर्मक", "पूर्वकालिक"], correct: 1 },
        { q: "8. 'लिख' धातु में 'ना' प्रत्यय लगाने से क्या बनेगा?", options: ["लिखा", "लिखना", "लेखन"], correct: 1 },
        { q: "9. 'माताजी ने खाना बनवाया' में क्रिया का कौन सा रूप है?", options: ["प्रेरणार्थक", "अकर्मक", "नामधातु"], correct: 0 },
        { q: "10. 'चिड़िया आकाश में उड़ रही है' में क्रिया है:", options: ["सकर्मक", "अकर्मक", "संयुक्त"], correct: 1 },
        { q: "11. 'बतियाना' शब्द किस क्रिया का उदाहरण है?", options: ["सकर्मक", "अकर्मक", "नामधातु"], correct: 2 },
        { q: "12. कर्म के आधार पर क्रिया के कितने भेद हैं?", options: ["दो", "तीन", "चार"], correct: 0 },
        { q: "13. 'उसने खाना खा लिया' में कौन सी क्रिया है?", options: ["नामधातु", "संयुक्त क्रिया", "अकर्मक"], correct: 1 },
        { q: "14. 'रोना' क्रिया का भेद है:", options: ["सकर्मक", "अकर्मक", "प्रेरणार्थक"], correct: 1 },
        { q: "15. 'मालिक नौकर से कार साफ करवाता है' में क्रिया है:", options: ["नामधातु", "प्रेरणार्थक", "अकर्मक"], correct: 1 },
        { q: "16. 'पिताजी अखबार पढ़ रहे हैं' में कर्म है:", options: ["पिताजी", "अखबार", "पढ़ रहे"], correct: 1 },
        { q: "17. 'उठना' का सकर्मक रूप क्या होगा?", options: ["उठ", "उठाना", "उठवाना"], correct: 1 },
        { q: "18. क्रिया की विशेषता बताने वाले शब्द क्या कहलाते हैं?", options: ["विशेषण", "क्रिया-विशेषण", "सर्वनाम"], correct: 1 },
        { q: "19. 'हाथ' संज्ञा से बनी क्रिया 'हथियाना' है:", options: ["प्रेरणार्थक", "नामधातु", "संयुक्त"], correct: 1 },
        { q: "20. 'वह खेलकर सो गया' में 'खेलकर' कैसी क्रिया है?", options: ["पूर्वकालिक", "नामधातु", "सकर्मक"], correct: 0 },
        { q: "21. 'राम स्कूल जाता है' में क्रिया है:", options: ["अकर्मक", "सकर्मक", "प्रेरणार्थक"], correct: 0 },
        { q: "22. 'क्या' और 'किसको' का उत्तर किस क्रिया में मिलता है?", options: ["सकर्मक", "अकर्मक", "दोनों"], correct: 0 },
        { q: "23. 'गाना' कैसी क्रिया है?", options: ["अकर्मक", "सकर्मक", "नामधातु"], correct: 1 },
        { q: "24. 'जा' धातु का मध्यम पुरुष रूप (तुम के साथ):", options: ["जाओ", "जाऊँ", "जाएगा"], correct: 0 },
        { q: "25. 'मोहन रोता है' में क्रिया का फल किस पर पड़ रहा है?", options: ["कर्म पर", "कर्ता पर", "किसी पर नहीं"], correct: 1 },
        { q: "26. 'वह गिर पड़ा' में क्रिया का भेद:", options: ["नामधातु", "संयुक्त", "अकर्मक"], correct: 1 },
        { q: "27. 'पढ़ना' का द्वितीय प्रेरणार्थक रूप:", options: ["पढ़ाना", "पढ़वाना", "पढ़"], correct: 1 },
        { q: "28. 'नदी बह रही है' में क्रिया है:", options: ["सकर्मक", "अकर्मक", "प्रेरणार्थक"], correct: 1 },
        { q: "29. 'घोड़ा दौड़ता है' में क्रिया का भेद:", options: ["अकर्मक", "सकर्मक", "संयुक्त"], correct: 0 },
        { q: "30. 'राम ने पत्र लिखा' में पत्र क्या है?", options: ["कर्ता", "कर्म", "क्रिया"], correct: 1 },
        { q: "31. 'दौड़ना' क्रिया का रूप है:", options: ["सकर्मक", "अकर्मक", "नामधातु"], correct: 1 },
        { q: "32. 'गर्म' विशेषण से बनी क्रिया 'गरमाना' है:", options: ["प्रेरणार्थक", "नामधातु", "अकर्मक"], correct: 1 },
        { q: "33. 'बच्चा दूध पीता है' में क्रिया है:", options: ["अकर्मक", "सकर्मक", "प्रेरणार्थक"], correct: 1 },
        { q: "34. 'वह घर पहुँच गया' में क्रिया का भेद:", options: ["संयुक्त", "नामधातु", "प्रेरणार्थक"], correct: 0 },
        { q: "35. 'काटना' का प्रेरणार्थक रूप:", options: ["कट", "कटवाना", "कटना"], correct: 1 },
        { q: "36. 'हवा चल रही है' में क्रिया है:", options: ["सकर्मक", "अकर्मक", "संयुक्त"], correct: 1 },
        { q: "37. 'मोहन ने आम खाया' में क्रिया का फल किस पर पड़ा?", options: ["मोहन पर", "आम पर", "खाने पर"], correct: 1 },
        { q: "38. 'सोना' (नींद लेना) कैसी क्रिया है?", options: ["सकर्मक", "अकर्मक", "प्रेरणार्थक"], correct: 1 },
        { q: "39. 'शिक्षक छात्रों को पढ़ाते हैं' में कर्म क्या है?", options: ["शिक्षक", "छात्रों को", "पढ़ाते"], correct: 1 },
        { q: "40. वाक्य का मुख्य आधार क्या होता है?", options: ["संज्ञा", "सर्वनाम", "क्रिया"], correct: 2 }
    ]
};
