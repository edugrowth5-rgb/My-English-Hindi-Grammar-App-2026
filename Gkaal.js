/**
 * Gkaal.js - Hindi Grammar Topic
 * Topic: काल (Tense) - समय की पहचान
 */

if (typeof Hindi === 'undefined') { window.Hindi = {}; }

Hindi.kaal = {
    title: "काल (Tense): समय का चक्र ⏳",
    content: `
        <section style="text-align: left; padding: 10px;">
            
            <div style="background: #f0f7ff; padding: 25px; border-radius: 25px; border-left: 10px solid #4D96FF; margin-bottom: 30px; box-shadow: 5px 5px 15px rgba(0,0,0,0.05);">
                <h2 style="color: #4D96FF; font-size: 2.2rem; margin-top:0;">1. काल किसे कहते हैं?</h2>
                <p style="font-size: 1.4rem; line-height: 1.8;">
                    क्रिया के जिस रूप से उसके <b>होने के समय</b> का बोध हो, उसे <b>काल</b> कहते हैं। 
                </p>
                <p style="font-size: 1.3rem; margin-top: 10px; background: white; padding: 10px; border-radius: 10px; border: 1px solid #d0e4ff;">
                    <i>उदाहरण:</i> राम पढ़ रहा था (बीता समय), राम पढ़ रहा है (चल रहा समय), राम पढ़ेगा (आने वाला समय)।
                </p>
            </div>

            <h2 style="color: #333; font-size: 2rem; margin-top: 40px; border-bottom: 3px solid #333; display: inline-block;">2. काल के मुख्य भेद (Types)</h2>

            <div style="margin-bottom: 25px; background: #fff5f5; padding: 25px; border-radius: 20px; border-top: 8px solid #FF6B6B;">
                <h3 style="color: #FF6B6B; font-size: 1.8rem; margin-top:0;">(i) भूतकाल (Past Tense) 🔙</h3>
                <p style="font-size: 1.3rem;">क्रिया के जिस रूप से बीते हुए समय का बोध हो।</p>
                <p style="font-size: 1.2rem; background: white; padding: 10px; border-radius: 10px;">
                    <i>उदाहरण:</i> वह कल **गया था**। हमने खाना **खा लिया**।
                </p>
            </div>

            <div style="margin-bottom: 25px; background: #f0fff0; padding: 25px; border-radius: 20px; border-top: 8px solid #6BCB77;">
                <h3 style="color: #2e7d32; font-size: 1.8rem; margin-top:0;">(ii) वर्तमान काल (Present Tense) 🕒</h3>
                <p style="font-size: 1.3rem;">क्रिया के जिस रूप से वर्तमान (अभी चल रहे) समय का बोध हो।</p>
                <p style="font-size: 1.2rem; background: white; padding: 10px; border-radius: 10px;">
                    <i>उदाहरण:</i> बच्चा **खेल रहा है**। मैं **पढ़ता हूँ**।
                </p>
            </div>

            <div style="margin-bottom: 25px; background: #f5f0ff; padding: 25px; border-radius: 20px; border-top: 8px solid #9b59b6;">
                <h3 style="color: #9b59b6; font-size: 1.8rem; margin-top:0;">(iii) भविष्य काल (Future Tense) 🔜</h3>
                <p style="font-size: 1.3rem;">क्रिया के जिस रूप से आने वाले समय का बोध हो।</p>
                <p style="font-size: 1.2rem; background: white; padding: 10px; border-radius: 10px;">
                    <i>उदाहरण:</i> हम दिल्ली **जाएंगे**। कल बारिश **होगी**।
                </p>
            </div>

            <div style="background: #34495e; color: white; padding: 20px; border-radius: 20px; margin-top: 30px;">
                <h3 style="color: #FFD93D; margin-top: 0;">💡 पहचान के आसान तरीके</h3>
                <ul style="font-size: 1.2rem; line-height: 1.8;">
                    <li><b>था, थी, थे</b> दिखे तो समझो <b>भूतकाल</b> है।</li>
                    <li><b>है, हूँ, हो, रहा है</b> दिखे तो समझो <b>वर्तमान काल</b> है।</li>
                    <li><b>गा, गी, गे</b> दिखे तो समझो <b>भविष्य काल</b> है।</li>
                </ul>
            </div>
        </section>

        <hr style="border: 2px dashed #eee; margin: 50px 0;">

        <div class="quiz-panel" id="hindi-quiz-wrapper" style="background: #FFF9F0; padding: 35px; border-radius: 35px; border: 5px solid #FFD93D;">
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
            <button class="option-btn" style="margin-top:30px; background:transparent; border: 3px solid #FFD93D; color:#d4a017; font-size: 1.2rem; text-align:center; padding: 15px; width: 100%;" onclick="window.resetHindiQuiz()">शुरू से शुरू करें</button>
        </div>
    `,
    quizData: [
        { q: "1. 'राम स्कूल जा रहा है' में कौन सा काल है?", options: ["भूतकाल", "वर्तमान काल", "भविष्य काल"], correct: 1 },
        { q: "2. 'हम कल सिनेमा जाएंगे' वाक्य किस काल का है?", options: ["वर्तमान", "भूत", "भविष्य"], correct: 2 },
        { q: "3. क्रिया के होने के समय को क्या कहते हैं?", options: ["कारक", "संज्ञा", "काल"], correct: 2 },
        { q: "4. 'वह सो रहा था' में कौन सा काल है?", options: ["भूतकाल", "वर्तमान काल", "भविष्य काल"], correct: 0 },
        { q: "5. 'शायद आज वर्षा हो' कौन सा काल है?", options: ["सामान्य वर्तमान", "संभाव्य भविष्य", "भूतकाल"], correct: 1 },
        { q: "6. 'गा, गी, गे' किस काल की पहचान है?", options: ["भूतकाल", "वर्तमान काल", "भविष्य काल"], correct: 2 },
        { q: "7. 'मैं खाना खा चुका हूँ' में काल है:", options: ["वर्तमान काल", "भविष्य काल", "भूतकाल"], correct: 0 },
        { q: "8. 'बच्चा रोया' वाक्य किस काल का है?", options: ["भूतकाल", "वर्तमान काल", "भविष्य काल"], correct: 0 },
        { q: "9. काल के मुख्य कितने भेद होते हैं?", options: ["दो", "तीन", "चार"], correct: 1 },
        { q: "10. 'अध्यापक पढ़ा रहे हैं' किस काल का उदाहरण है?", options: ["भूतकाल", "भविष्य काल", "वर्तमान काल"], correct: 2 },
        { q: "11. 'उसने पत्र लिखा होगा' में कौन सा काल है?", options: ["संदिग्ध भूत", "सामान्य भविष्य", "वर्तमान"], correct: 0 },
        { q: "12. 'कल छुट्टी रहेगी' किस काल का वाक्य है?", options: ["वर्तमान", "भविष्य", "भूत"], correct: 1 },
        { q: "13. 'था, थी, थे' किस काल की सहायक क्रियाएँ हैं?", options: ["भूतकाल", "वर्तमान काल", "भविष्य काल"], correct: 0 },
        { q: "14. 'तुम पढ़ते तो पास हो जाते' कौन सा काल है?", options: ["हेतुहेतुमद भूत", "सामान्य वर्तमान", "भविष्य"], correct: 0 },
        { q: "15. 'चिड़िया उड़ रही है' में काल है:", options: ["वर्तमान काल", "भूतकाल", "भविष्य काल"], correct: 0 },
        { q: "16. 'प्रधानमंत्री कल भाषण देंगे' में कौन सा काल है?", options: ["भूतकाल", "सामान्य भविष्य", "वर्तमान काल"], correct: 1 },
        { q: "17. 'माँ खाना बना रही थी' में काल है:", options: ["अपूर्ण भूत", "पूर्ण वर्तमान", "भविष्य"], correct: 0 },
        { q: "18. 'सूर्य पूरब में निकलता है' में काल है:", options: ["भूतकाल", "भविष्य काल", "वर्तमान काल"], correct: 2 },
        { q: "19. जो समय बीत चुका है, उसे कहते हैं:", options: ["वर्तमान", "भविष्य", "भूत"], correct: 2 },
        { q: "20. 'शायद वह आता हो' में काल है:", options: ["संभाव्य वर्तमान", "सामान्य भविष्य", "भूतकाल"], correct: 0 },
        { q: "21. 'वह लिखता है' में काल का भेद है:", options: ["सामान्य वर्तमान", "अपूर्ण वर्तमान", "पूर्ण वर्तमान"], correct: 0 },
        { q: "22. 'गाड़ी आ चुकी थी' में काल है:", options: ["सामान्य भूत", "पूर्ण भूत", "आसन्न भूत"], correct: 1 },
        { q: "23. 'पक्षी उड़े' में कौन सा काल है?", options: ["सामान्य भूत", "वर्तमान", "भविष्य"], correct: 0 },
        { q: "24. 'हम मैच देखेंगे' में काल है:", options: ["भूत", "भविष्य", "वर्तमान"], correct: 1 },
        { q: "25. 'मोहन पढ़ता होगा' में कौन सा काल है?", options: ["संदिग्ध वर्तमान", "सामान्य भूत", "भविष्य"], correct: 0 },
        { q: "26. 'वह गया' वाक्य है:", options: ["सामान्य भूत", "पूर्ण भूत", "अपूर्ण भूत"], correct: 0 },
        { q: "27. 'बारिश हो रही होगी' में काल है:", options: ["संदिग्ध वर्तमान", "भविष्य", "भूत"], correct: 0 },
        { q: "28. 'लड़के खेल रहे हैं' में क्रिया किस काल की है?", options: ["वर्तमान", "भूत", "भविष्य"], correct: 0 },
        { q: "29. 'कल बाज़ार बंद था' में काल है:", options: ["वर्तमान", "भूत", "भविष्य"], correct: 1 },
        { q: "30. 'मैं डॉक्टर बनूँगा' में काल है:", options: ["भविष्य", "भूत", "वर्तमान"], correct: 0 },
        { q: "31. 'आसन्न भूत' का उदाहरण है:", options: ["मैं अभी आया हूँ", "मैं गया था", "मैं जाऊंगा"], correct: 0 },
        { q: "32. 'तू जाता' में कौन सा काल है?", options: ["हेतुहेतुमद भूत", "वर्तमान", "भविष्य"], correct: 0 },
        { q: "33. 'सीता खाना खा रही है' में वर्तमान का कौन सा भेद है?", options: ["अपूर्ण वर्तमान", "सामान्य वर्तमान", "पूर्ण वर्तमान"], correct: 0 },
        { q: "34. 'वह पुस्तक पढ़ेगी' में काल है:", options: ["सामान्य भविष्य", "भूत", "वर्तमान"], correct: 0 },
        { q: "35. 'पिताजी कल आएंगे' में काल है:", options: ["भविष्य", "भूत", "वर्तमान"], correct: 0 },
        { q: "36. 'राम ने रावण को मारा' में काल है:", options: ["सामान्य भूत", "वर्तमान", "भविष्य"], correct: 0 },
        { q: "37. 'तुम क्या कर रहे हो?' में काल है:", options: ["वर्तमान", "भूत", "भविष्य"], correct: 0 },
        { q: "38. 'वह काम कर चुका होगा' में काल है:", options: ["संदिग्ध भूत", "वर्तमान", "भविष्य"], correct: 0 },
        { q: "39. 'शायद पिताजी आए हों' में काल है:", options: ["संभाव्य वर्तमान", "भूत", "भविष्य"], correct: 0 },
        { q: "40. आने वाले समय को क्या कहते हैं?", options: ["वर्तमान", "भूत", "भविष्य"], correct: 2 }
    ]
};
