/**
 * GlingVachan.js - Hindi Grammar Topic
 * Topic: संज्ञा के विकार (लिंग और वचन)
 */

if (typeof Hindi === 'undefined') { window.Hindi = {}; }

Hindi.lingvachan = {
    title: "संज्ञा के विकार: लिंग और वचन 🚻",
    content: `
        <section style="text-align: left; padding: 10px;">
            <p style="font-size: 1.4rem; line-height: 1.8; color: #555; background: #fff9f0; padding: 15px; border-radius: 15px; border: 1px solid #ffeaa7;">
                संज्ञा शब्दों के रूप में परिवर्तन लाने वाले तत्वों को <b>'विकार'</b> कहते हैं। संज्ञा में मुख्य रूप से तीन कारणों से बदलाव आता है: <b>लिंग, वचन और कारक।</b>
            </p>

            <h2 style="color: #FF6B6B; font-size: 2.2rem; border-bottom: 3px solid #FF6B6B; display: inline-block; margin-top: 30px;">1. लिंग (Gender)</h2>
            <p style="font-size: 1.4rem; margin-top: 10px;">शब्द के जिस रूप से स्त्री या पुरुष जाति का बोध हो, उसे लिंग कहते हैं।</p>
            
            <div style="display: flex; gap: 20px; margin: 20px 0; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 250px; background: #f0f7ff; padding: 20px; border-radius: 20px; border-top: 8px solid #4D96FF; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                    <h3 style="color: #4D96FF; margin-top: 0;">पुल्लिंग (Masculine)</h3>
                    <p style="font-size: 1.2rem;">पुरुष जाति का बोध कराने वाले शब्द।</p>
                    <div style="background: white; padding: 10px; border-radius: 10px;">
                        <i>उदाहरण:</i> <b>बेटा, शेर, हिमालय, आम, सोमवार।</b>
                    </div>
                </div>
                
                <div style="flex: 1; min-width: 250px; background: #fff5f5; padding: 20px; border-radius: 20px; border-top: 8px solid #FF6B6B; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                    <h3 style="color: #FF6B6B; margin-top: 0;">स्त्रीलिंग (Feminine)</h3>
                    <p style="font-size: 1.2rem;">स्त्री जाति का बोध कराने वाले शब्द।</p>
                    <div style="background: white; padding: 10px; border-radius: 10px;">
                        <i>उदाहरण:</i> <b>बेटी, शेरनी, गंगा, तितली, हिन्दी।</b>
                    </div>
                </div>
            </div>

            <h2 style="color: #6BCB77; font-size: 2.2rem; border-bottom: 3px solid #6BCB77; display: inline-block; margin-top: 40px;">2. वचन (Number)</h2>
            <p style="font-size: 1.4rem; margin-top: 10px;">संज्ञा शब्द की संख्या (एक या अनेक) बताने वाले रूप को वचन कहते हैं।</p>

            <div style="background: #f8fff9; padding: 25px; border-radius: 20px; border-right: 10px solid #6BCB77; margin: 25px 0;">
                <div style="margin-bottom: 15px;">
                    <b style="font-size: 1.5rem; color: #2e7d32;">● एकवचन (Singular):</b> 
                    <span style="font-size: 1.3rem;"> किसी एक व्यक्ति या वस्तु का बोध। (जैसे: <b>पुस्तक, चूहा</b>)</span>
                </div>
                <div>
                    <b style="font-size: 1.5rem; color: #2e7d32;">● बहुवचन (Plural):</b> 
                    <span style="font-size: 1.3rem;"> एक से अधिक का बोध। (जैसे: <b>पुस्तकें, चूहे</b>)</span>
                </div>
            </div>

            <div style="background: #34495e; color: white; padding: 20px; border-radius: 20px; margin-top: 30px;">
                <h3 style="color: #FFD93D; margin-top: 0;">💡 विशेष नियम (Important Rules)</h3>
                <ul style="font-size: 1.2rem; line-height: 1.8;">
                    <li><b>आदर:</b> बड़ों को आदर देने के लिए हमेशा <b>बहुवचन</b> का प्रयोग होता है। (जैसे: गांधीजी महान थे।)</li>
                    <li><b>सदैव बहुवचन:</b> प्राण, हस्ताक्षर, आँसू, दर्शन, होश।</li>
                    <li><b>सदैव एकवचन:</b> पानी, सोना, वर्षा, आकाश, जनता।</li>
                </ul>
            </div>
        </section>

        <hr style="border: 2px dashed #ccc; margin: 50px 0;">

        <div class="quiz-panel" id="hindi-quiz-wrapper" style="background: #FFF; padding: 35px; border-radius: 35px; border: 5px solid #6BCB77; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
            <div style="display: flex; justify-content: space-between; font-size: 1.6rem; font-weight: bold; margin-bottom: 30px;">
                <span id="hq-progress" style="color: #6BCB77;">प्रश्न: 1 / 40</span>
                <span id="hq-score" style="color: #FF6B6B;">स्कोर: 0</span>
            </div>
            
            <div id="h-question-container" style="min-height: 220px; text-align: center;">
                <h4 id="hq-text" style="font-size: 1.8rem; color: #2c3e50; margin-bottom: 35px; line-height: 1.5;">क्विज़ लोड हो रहा है...</h4>
                <div id="h-options-box"></div>
            </div>
            
            <div style="display: flex; justify-content: space-between; gap: 20px; margin-top: 45px;">
                <button class="option-btn" style="background:#eee; flex:1; text-align:center; padding: 20px; font-size: 1.3rem;" onclick="window.prevHindiQuestion()">पीछे (Back)</button>
                <button class="option-btn" style="background:#6BCB77; color:white; flex:1; text-align:center; padding: 20px; font-size: 1.3rem;" onclick="window.nextHindiQuestion()">आगे (Next)</button>
            </div>
            <button class="option-btn" style="margin-top:30px; background:transparent; border: 3px solid #6BCB77; color:#6BCB77; font-size: 1.2rem; text-align:center; padding: 15px; width: 100%;" onclick="window.resetHindiQuiz()">शुरू से शुरू करें</button>
        </div>
    `,
    quizData: [
        { q: "1. 'नायक' शब्द का सही स्त्रीलिंग क्या है?", options: ["नायकी", "नायिका", "नायिकाएँ"], correct: 1 },
        { q: "2. 'चिड़िया' का बहुवचन रूप पहचानें:", options: ["चिड़ियों", "चिड़ियाँ", "चिड़ियाएँ"], correct: 1 },
        { q: "3. संज्ञा के रूप में परिवर्तन लाने वाले तत्व कहलाते हैं:", options: ["विशेषण", "विकार", "अव्यय"], correct: 1 },
        { q: "4. 'प्राण' शब्द का प्रयोग हमेशा किस वचन में होता है?", options: ["एकवचन", "बहुवचन", "दोनों में"], correct: 1 },
        { q: "5. 'बैल' का सही स्त्रीलिंग शब्द क्या है?", options: ["भैंस", "गऊ", "गाय"], correct: 2 },
        { q: "6. 'जनता' शब्द व्याकरण के अनुसार क्या है?", options: ["सदैव एकवचन", "सदैव बहुवचन", "पुल्लिंग"], correct: 0 },
        { q: "7. 'कवि' का स्त्रीलिंग रूप क्या होगा?", options: ["कवियित्री", "कवयित्री", "कविनी"], correct: 1 },
        { q: "8. 'आँसू' निकल पड़े। यहाँ 'आँसू' क्या है?", options: ["एकवचन", "बहुवचन", "स्त्रीलिंग"], correct: 1 },
        { q: "9. 'हाथी' का सही स्त्रीलिंग चुनें:", options: ["हाथिन", "हथिनी", "हाथियाँ"], correct: 1 },
        { q: "10. 'सोना' (धातु) किस वचन में प्रयोग होता है?", options: ["एकवचन", "बहुवचन", "दोनों"], correct: 0 },
        { q: "11. 'भगवान' का स्त्रीलिंग रूप क्या है?", options: ["भगवानी", "भगवती", "भाग्या"], correct: 1 },
        { q: "12. 'चाकू' का बहुवचन रूप क्या होगा?", options: ["चाकू", "चाकुओं", "चाकुएँ"], correct: 0 },
        { q: "13. 'विद्वान' का स्त्रीलिंग शब्द है:", options: ["विदुषी", "विद्वानी", "विद्वता"], correct: 0 },
        { q: "14. 'अध्यापक' का स्त्रीलिंग क्या है?", options: ["अध्यापकी", "अध्यापिका", "शिक्षक"], correct: 1 },
        { q: "15. इनमें से कौन सा शब्द पुल्लिंग है?", options: ["नदी", "हिमालय", "हिन्दी"], correct: 1 },
        { q: "16. 'वधु' का बहुवचन रूप होगा:", options: ["वधुएँ", "वधुएँ", "वधुएँ"], correct: 1 },
        { q: "17. 'हस्ताक्षर' शब्द क्या है?", options: ["एकवचन", "बहुवचन", "स्त्रीलिंग"], correct: 1 },
        { q: "18. 'माता' का पुल्लिंग रूप क्या है?", options: ["बाप", "पिता", "भाई"], correct: 1 },
        { q: "19. 'सहेली' का बहुवचन रूप चुनें:", options: ["सहेलियाँ", "सहेलियाँ", "सहेलियों"], correct: 0 },
        { q: "20. 'वीर' का स्त्रीलिंग क्या है?", options: ["वीरता", "वीरांगना", "वीरी"], correct: 1 },
        { q: "21. 'माला' का बहुवचन रूप है:", options: ["मालाएँ", "मालें", "मालियाँ"], correct: 0 },
        { q: "22. 'अभिनेता' का स्त्रीलिंग क्या होगा?", options: ["अभिनेत्री", "अभिनय", "अभिनेताइन"], correct: 0 },
        { q: "23. 'पंडित' का स्त्रीलिंग रूप पहचानें:", options: ["पंडिता", "पंडिताइन", "पंडितानी"], correct: 1 },
        { q: "24. 'आकाश' शब्द प्रयुक्त होता है:", options: ["एकवचन में", "बहुवचन में", "दोनों में"], correct: 0 },
        { q: "25. 'बुढ़िया' का बहुवचन रूप क्या है?", options: ["बुढियों", "बुढ़ियाँ", "बुढ़ियाएँ"], correct: 1 },
        { q: "26. 'पुत्र' का स्त्रीलिंग रूप है:", options: ["पुत्री", "बेटी", "लड़की"], correct: 0 },
        { q: "27. 'दर्शन' शब्द हमेशा किस वचन में रहता है?", options: ["एकवचन", "बहुवचन", "नपुंसकलिंग"], correct: 1 },
        { q: "28. 'बन्दर' का स्त्रीलिंग रूप क्या है?", options: ["बन्दरिया", "बन्दरी", "बन्दरिन"], correct: 0 },
        { q: "29. 'मिठाई' का बहुवचन रूप है:", options: ["मिठाईयां", "मिठाइयाँ", "मिठाइये"], correct: 1 },
        { q: "30. 'दूल्हा' का स्त्रीलिंग रूप क्या है?", options: ["दुल्हिन", "दुल्हन", "दुल्हनिया"], correct: 1 },
        { q: "31. 'पेड़' से पत्ता गिरा। 'पेड़' क्या है?", options: ["पुल्लिंग", "स्त्रीलिंग", "नपुंसकलिंग"], correct: 0 },
        { q: "32. 'वस्तु' का बहुवचन रूप पहचानें:", options: ["वस्तुएँ", "वस्तुएँ", "वस्तुओं"], correct: 1 },
        { q: "33. 'श्रीमान' का स्त्रीलिंग रूप क्या है?", options: ["श्रीमती", "श्रीमती", "श्रीमिणी"], correct: 0 },
        { q: "34. 'अतिथि' का बहुवचन क्या होगा?", options: ["अतिथियों", "अतिथि", "अतिथियाँ"], correct: 1 },
        { q: "35. 'सेठ' का स्त्रीलिंग रूप है:", options: ["सेठानी", "सेठिन", "सेठी"], correct: 0 },
        { q: "36. 'साधु' का स्त्रीलिंग रूप क्या है?", options: ["साध्वी", "साधुनी", "साधुइन"], correct: 0 },
        { q: "37. 'नदी' का बहुवचन रूप क्या है?", options: ["नदियाँ", "नदियाँ", "नदियाँ"], correct: 1 },
        { q: "38. 'शिष्य' का स्त्रीलिंग रूप है:", options: ["शिष्या", "शिष्यी", "शिष्यिन"], correct: 0 },
        { q: "39. 'गऊ' का बहुवचन रूप क्या होगा?", options: ["गवें", "गौएँ", "गायें"], correct: 1 },
        { q: "40. व्याकरण में 'वचन' का अर्थ क्या है?", options: ["प्रॉमिस", "संख्या", "भाषा"], correct: 1 }
    ]
};
