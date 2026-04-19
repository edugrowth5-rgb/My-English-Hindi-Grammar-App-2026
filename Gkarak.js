/**
 * Gkarak.js - Hindi Grammar Topic
 * Topic: कारक (Case) - संज्ञा का क्रिया से संबंध
 */

if (typeof Hindi === 'undefined') { window.Hindi = {}; }

Hindi.karak = {
    title: "कारक (Case): संज्ञा का आधार 🔗",
    content: `
        <section style="text-align: left; padding: 10px;">
            <p style="font-size: 1.4rem; line-height: 1.8; color: #333; background: #f0f7ff; padding: 20px; border-radius: 20px; border: 2px solid #4D96FF;">
                संज्ञा या सर्वनाम के जिस रूप से उसका संबंध वाक्य के अन्य शब्दों (विशेषकर क्रिया) के साथ जाना जाए, उसे <b>कारक</b> कहते हैं। 
                <br><i>जैसे:</i> <b>राम ने</b> रावण को मारा। (यहाँ 'ने' और 'को' कारक चिह्न हैं)
            </p>

            <h2 style="color: #4D96FF; font-size: 2.2rem; border-bottom: 3px solid #4D96FF; display: inline-block; margin-top: 30px;">कारक के भेद और चिह्न (Vibhakti)</h2>
            <p style="font-size: 1.3rem; margin-top: 10px;">हिन्दी में कारक के <b>8 भेद</b> होते हैं। इन्हें याद करने के लिए यह तालिका (Table) सबसे आसान है:</p>

            <div style="overflow-x: auto; margin-top: 20px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 1.2rem; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                    <thead style="background: #4D96FF; color: white;">
                        <tr>
                            <th style="padding: 15px; border: 1px solid #ddd;">कारक (Karak)</th>
                            <th style="padding: 15px; border: 1px solid #ddd;">चिह्न (Sign)</th>
                            <th style="padding: 15px; border: 1px solid #ddd;">अर्थ (Meaning)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td style="padding: 12px; border: 1px solid #eee;">1. कर्ता (Karta)</td><td style="padding: 12px; border: 1px solid #eee; font-weight: bold; color: #FF6B6B;">ने</td><td style="padding: 12px; border: 1px solid #eee;">काम करने वाला</td></tr>
                        <tr><td style="padding: 12px; border: 1px solid #eee;">2. कर्म (Karma)</td><td style="padding: 12px; border: 1px solid #eee; font-weight: bold; color: #FF6B6B;">को</td><td style="padding: 12px; border: 1px solid #eee;">जिस पर काम का फल पड़े</td></tr>
                        <tr><td style="padding: 12px; border: 1px solid #eee;">3. करण (Karan)</td><td style="padding: 12px; border: 1px solid #eee; font-weight: bold; color: #FF6B6B;">से, के द्वारा</td><td style="padding: 12px; border: 1px solid #eee;">काम करने का साधन</td></tr>
                        <tr><td style="padding: 12px; border: 1px solid #eee;">4. संप्रदान (Sampradan)</td><td style="padding: 12px; border: 1px solid #eee; font-weight: bold; color: #FF6B6B;">को, के लिए</td><td style="padding: 12px; border: 1px solid #eee;">जिसके लिए काम किया जाए</td></tr>
                        <tr><td style="padding: 12px; border: 1px solid #eee;">5. अपादान (Apadan)</td><td style="padding: 12px; border: 1px solid #eee; font-weight: bold; color: #FF6B6B;">से (अलग होना)</td><td style="padding: 12px; border: 1px solid #eee;">किसी चीज से अलग होना</td></tr>
                        <tr><td style="padding: 12px; border: 1px solid #eee;">6. संबंध (Sambandh)</td><td style="padding: 12px; border: 1px solid #eee; font-weight: bold; color: #FF6B6B;">का, के, की</td><td style="padding: 12px; border: 1px solid #eee;">रिश्ता या संबंध बताना</td></tr>
                        <tr><td style="padding: 12px; border: 1px solid #eee;">7. अधिकरण (Adhikaran)</td><td style="padding: 12px; border: 1px solid #eee; font-weight: bold; color: #FF6B6B;">में, पर</td><td style="padding: 12px; border: 1px solid #eee;">काम का आधार या स्थान</td></tr>
                        <tr><td style="padding: 12px; border: 1px solid #eee;">8. संबोधन (Sambodhan)</td><td style="padding: 12px; border: 1px solid #eee; font-weight: bold; color: #FF6B6B;">हे! अरे! रे!</td><td style="padding: 12px; border: 1px solid #eee;">किसी को पुकारना</td></tr>
                    </tbody>
                </table>
            </div>

            <div style="background: #fff5f5; padding: 20px; border-radius: 20px; border: 2px solid #FF6B6B; margin-top: 30px;">
                <h3 style="color: #FF6B6B; margin-top: 0;">⚠️ सावधान: 'से' का अंतर</h3>
                <p style="font-size: 1.2rem;"><b>करण कारक:</b> पेन <b>से</b> लिखो (साधन)।</p>
                <p style="font-size: 1.2rem;"><b>अपादान कारक:</b> पेड़ <b>से</b> पत्ता गिरा (अलग होना)।</p>
            </div>
        </section>

        <hr style="border: 2px dashed #ccc; margin: 50px 0;">

        <div class="quiz-panel" id="hindi-quiz-wrapper" style="background: #FFF; padding: 35px; border-radius: 35px; border: 5px solid #4D96FF;">
            <div style="display: flex; justify-content: space-between; font-size: 1.6rem; font-weight: bold; margin-bottom: 30px;">
                <span id="hq-progress" style="color: #4D96FF;">प्रश्न: 1 / 40</span>
                <span id="hq-score" style="color: #6BCB77;">स्कोर: 0</span>
            </div>
            
            <div id="h-question-container" style="min-height: 220px; text-align: center;">
                <h4 id="hq-text" style="font-size: 1.8rem; color: #2c3e50; margin-bottom: 35px; line-height: 1.5;">क्विज़ लोड हो रहा है...</h4>
                <div id="h-options-box"></div>
            </div>
            
            <div style="display: flex; justify-content: space-between; gap: 20px; margin-top: 45px;">
                <button class="option-btn" style="background:#eee; flex:1; text-align:center; padding: 20px; font-size: 1.3rem;" onclick="window.prevHindiQuestion()">पीछे</button>
                <button class="option-btn" style="background:#4D96FF; color:white; flex:1; text-align:center; padding: 20px; font-size: 1.3rem;" onclick="window.nextHindiQuestion()">आगे</button>
            </div>
            <button class="option-btn" style="margin-top:30px; background:transparent; border: 3px solid #4D96FF; color:#4D96FF; font-size: 1.2rem; text-align:center; padding: 15px; width: 100%;" onclick="window.resetHindiQuiz()">शुरू से शुरू करें</button>
        </div>
    `,
    quizData: [
        { q: "1. 'राम ने रावण को मारा' में 'ने' कौन सा कारक है?", options: ["कर्म", "करण", "कर्ता"], correct: 2 },
        { q: "2. हिमालय 'से' गंगा निकलती है। 'से' यहाँ क्या है?", options: ["करण", "अपादान", "संबंध"], correct: 1 },
        { q: "3. कारक के कितने भेद होते हैं?", options: ["छह", "सात", "आठ"], correct: 2 },
        { q: "4. 'पेन से लिखो' में कौन सा कारक है?", options: ["करण", "अपादान", "संप्रदान"], correct: 0 },
        { q: "5. 'हे राम!' रक्षा करो। यह कौन सा कारक है?", options: ["अधिकरण", "संबोधन", "संबंध"], correct: 1 },
        { q: "6. 'को' और 'के लिए' किस कारक के चिह्न हैं?", options: ["करण", "संप्रदान", "अपादान"], correct: 1 },
        { q: "7. मेज 'पर' पुस्तक रखी है। यहाँ 'पर' है:", options: ["अधिकरण", "संबंध", "कर्म"], correct: 0 },
        { q: "8. 'वह राहुल का भाई है' में 'का' क्या दर्शाता है?", options: ["अपादान", "संबंध", "कर्ता"], correct: 1 },
        { q: "9. 'माँ बच्चे को दूध पिलाती है' में 'को' क्या है?", options: ["कर्ता", "कर्म", "करण"], correct: 1 },
        { q: "10. 'पेड़ से फल गिरा' में कौन सा कारक है?", options: ["करण", "अपादान", "संप्रदान"], correct: 1 },
        { q: "11. संज्ञा का क्रिया से संबंध बताने वाले शब्द कहलाते हैं:", options: ["विकार", "विशेषण", "कारक"], correct: 2 },
        { q: "12. कर्ता कारक का विभक्ति चिह्न क्या है?", options: ["को", "से", "ने"], correct: 2 },
        { q: "13. 'राम के लिए फल लाओ' में कारक है:", options: ["संप्रदान", "अपादान", "संबंध"], correct: 0 },
        { q: "14. 'मैं चाकू से फल काटता हूँ' में कारक है:", options: ["अपादान", "करण", "कर्म"], correct: 1 },
        { q: "15. 'अरे भाई!' इधर आओ।", options: ["संबोधन", "अधिकरण", "संबंध"], correct: 0 },
        { q: "16. 'गंगा का जल' में कौन सा कारक है?", options: ["कर्ता", "कर्म", "संबंध"], correct: 2 },
        { q: "17. 'बिल्ली छत पर बैठी है' में कारक है:", options: ["अपादान", "अधिकरण", "करण"], correct: 1 },
        { q: "18. अलग होने के अर्थ में कौन सा कारक आता है?", options: ["करण", "अपादान", "संप्रदान"], correct: 1 },
        { q: "19. संप्रदान कारक का अर्थ क्या है?", options: ["किसी को देना", "काम करना", "अलग होना"], correct: 0 },
        { q: "20. साधन के अर्थ में कौन सा कारक आता है?", options: ["अधिकरण", "करण", "कर्ता"], correct: 1 },
        { q: "21. 'वह बस से स्कूल जाता है' में 'से' है:", options: ["करण", "अपादान", "कर्म"], correct: 0 },
        { q: "22. अधिकरण कारक का चिह्न क्या है?", options: ["ने", "में/पर", "का/के/की"], correct: 1 },
        { q: "23. 'सीमा मोहन की बहन है।'", options: ["संबंध", "अधिकरण", "संप्रदान"], correct: 0 },
        { q: "24. 'भिखारी को दान दो' में 'को' है:", options: ["कर्म", "संप्रदान", "करण"], correct: 1 },
        { q: "25. 'आसमान में तारे हैं' में कारक है:", options: ["अधिकरण", "अपादान", "संबोधन"], correct: 0 },
        { q: "26. 'चाकू से सेब काटिए' में कारक है:", options: ["अपादान", "करण", "कर्म"], correct: 1 },
        { q: "27. 'मोहन घर से चला गया' में कारक है:", options: ["अधिकरण", "अपादान", "करण"], correct: 1 },
        { q: "28. संबोधन कारक का प्रयोग कहाँ होता है?", options: ["बुलाने में", "देने में", "रिश्ता बताने में"], correct: 0 },
        { q: "29. 'के द्वारा' किस कारक का चिह्न है?", options: ["करण", "कर्म", "संप्रदान"], correct: 0 },
        { q: "30. 'पिताजी बच्चों के लिए मिठाई लाए।'", options: ["संबंध", "संप्रदान", "कर्ता"], correct: 1 },
        { q: "31. अपादान कारक में 'से' का अर्थ है:", options: ["जोड़ना", "साधन", "अलग होना"], correct: 2 },
        { q: "32. 'वह अपनी कक्षा में प्रथम आया।'", options: ["अधिकरण", "करण", "संप्रदान"], correct: 0 },
        { q: "33. 'यह राम की पुस्तक है।'", options: ["कर्ता", "संबंध", "अपादान"], correct: 1 },
        { q: "34. 'अरे! तुम कब आए?'", options: ["संबोधन", "अधिकरण", "संबंध"], correct: 0 },
        { q: "35. 'शिक्षक ने छात्र को पढ़ाया।'", options: ["कर्ता और कर्म", "करण", "अपादान"], correct: 0 },
        { q: "36. कर्म कारक का चिह्न क्या है?", options: ["ने", "से", "को"], correct: 2 },
        { q: "37. 'छत से पानी गिर रहा है।'", options: ["अपादान", "करण", "अधिकरण"], correct: 0 },
        { q: "38. 'मोहन पेन से चित्र बनाता है।'", options: ["अपादान", "करण", "संप्रदान"], correct: 1 },
        { q: "39. 'मेरे भाई का घर बड़ा है।'", options: ["संबंध", "अधिकरण", "कर्ता"], correct: 0 },
        { q: "40. विभक्ति चिह्न को और क्या कहते हैं?", options: ["समास", "परसर्ग", "संधि"], correct: 1 }
    ]
};
