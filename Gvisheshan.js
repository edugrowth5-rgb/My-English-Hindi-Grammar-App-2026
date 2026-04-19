/**
 * Gvisheshan.js - Hindi Grammar Topic
 * Topic: विशेषण (Adjective) - Detailed Theory & 40 Quiz
 */

if (typeof Hindi === 'undefined') { window.Hindi = {}; }

Hindi.visheshan = {
    title: "विशेषण: शब्द जो विशेषता बताते हैं ✨",
    content: `
        <section style="text-align: left; padding: 10px;">
            
            <div style="background: #fff9f0; padding: 25px; border-radius: 25px; border: 2px solid #FFD93D; margin-bottom: 30px;">
                <h2 style="color: #d4a017; font-size: 2.2rem; margin-top:0;">1. विशेषण और विशेष्य (Definition)</h2>
                <p style="font-size: 1.4rem; line-height: 1.8;">
                    जो शब्द <b>संज्ञा</b> या <b>सर्वनाम</b> के गुण, दोष, संख्या या मात्रा की विशेषता बताते हैं, उन्हें <b>विशेषण</b> कहते हैं।
                </p>
                <div style="background: white; padding: 15px; border-radius: 15px; margin-top: 15px; border: 1px dashed #d4a017;">
                    <p style="font-size: 1.3rem; margin: 5px 0;"><b>विशेष्य (Visheshya):</b> जिसकी विशेषता बताई जाए।</p>
                    <p style="font-size: 1.3rem; margin: 5px 0;"><b>प्रविशेषण (Pravishashan):</b> जो विशेषण की भी विशेषता बताए (जैसे: <u>बहुत</u> सुंदर)।</p>
                </div>
            </div>

            <h2 style="color: #4D96FF; font-size: 2rem; margin-top: 40px; border-bottom: 3px solid #4D96FF; display: inline-block;">2. विशेषण के 4 मुख्य भेद</h2>

            <div style="background: #f0f7ff; padding: 25px; border-radius: 20px; border-left: 10px solid #4D96FF; margin: 25px 0;">
                <h3 style="color: #4D96FF; font-size: 1.8rem; margin-top:0;">(i) गुणवाचक विशेषण (Qualitative)</h3>
                <p style="font-size: 1.3rem;">ये संज्ञा के गुण, दोष, रंग, आकार, समय या स्थान को बताते हैं।</p>
                <ul style="font-size: 1.2rem; line-height: 1.8;">
                    <li><b>गुण/दोष:</b> अच्छा, बुरा, वीर, कायर, ईमानदार।</li>
                    <li><b>रंग:</b> लाल, पीला, चमकीला, धुंधला।</li>
                    <li><b>आकार:</b> गोल, चौकोर, लंबा, भारी, पतला।</li>
                </ul>
            </div>

            <div style="background: #f0fff0; padding: 25px; border-radius: 20px; border-left: 10px solid #6BCB77; margin: 25px 0;">
                <h3 style="color: #2e7d32; font-size: 1.8rem; margin-top:0;">(ii) संख्यावाचक विशेषण (Numeral)</h3>
                <p style="font-size: 1.3rem;">जिनसे संज्ञा की गिनती का पता चले।</p>
                <p style="font-size: 1.2rem;">
                    <b>1. निश्चित:</b> दो कलम, दस लड़के, पहली मंजिल।<br>
                    <b>2. अनिश्चित:</b> कुछ लोग, कई छात्र, बहुत से आम।
                </p>
            </div>

            <div style="background: #fff5f5; padding: 25px; border-radius: 20px; border-left: 10px solid #FF6B6B; margin: 25px 0;">
                <h3 style="color: #FF6B6B; font-size: 1.8rem; margin-top:0;">(iii) परिमाणवाचक विशेषण (Quantitative)</h3>
                <p style="font-size: 1.3rem;">ये संज्ञा की मात्रा या नाप-तोल (Measurement) को बताते हैं।</p>
                <p style="font-size: 1.2rem;">
                    <b>1. निश्चित:</b> 2 किलो चीनी, 5 मीटर कपड़ा, 1 लीटर दूध।<br>
                    <b>2. अनिश्चित:</b> थोड़ा पानी, कम तेल, सारा अनाज।
                </p>
            </div>

            <div style="background: #f5f0ff; padding: 25px; border-radius: 20px; border-left: 10px solid #9b59b6; margin: 25px 0;">
                <h3 style="color: #9b59b6; font-size: 1.8rem; margin-top:0;">(iv) सार्वनामिक विशेषण (Demonstrative)</h3>
                <p style="font-size: 1.3rem;">जब सर्वनाम शब्द संज्ञा से ठीक पहले आकर विशेषण का काम करें।</p>
                <p style="font-size: 1.2rem;">
                    <i>उदाहरण:</i> <b>वह</b> घर मेरा है। <b>यह</b> लड़का समझदार है। <b>कौन</b> लोग आए हैं?
                </p>
            </div>
        </section>

        <hr style="border: 2px dashed #eee; margin: 50px 0;">

        <div class="quiz-panel" id="hindi-quiz-wrapper" style="background: #fff; padding: 35px; border-radius: 35px; border: 5px solid #FFD93D; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
            <div style="display: flex; justify-content: space-between; font-size: 1.6rem; font-weight: bold; margin-bottom: 30px;">
                <span id="hq-progress" style="color: #FF6B6B;">प्रश्न: 1 / 40</span>
                <span id="hq-score" style="color: #6BCB77;">स्कोर: 0</span>
            </div>
            
            <div id="h-question-container" style="min-height: 220px; text-align: center;">
                <h4 id="hq-text" style="font-size: 1.8rem; color: #2c3e50; margin-bottom: 35px; line-height: 1.5;">लोड हो रहा है...</h4>
                <div id="h-options-box"></div>
            </div>
            
            <div style="display: flex; justify-content: space-between; gap: 20px; margin-top: 45px;">
                <button class="option-btn" style="background:#eee; flex:1; text-align:center; padding: 20px; font-size: 1.3rem;" onclick="window.prevHindiQuestion()">पीछे</button>
                <button class="option-btn" style="background:#6BCB77; color:white; flex:1; text-align:center; padding: 20px; font-size: 1.3rem;" onclick="window.nextHindiQuestion()">आगे</button>
            </div>
            <button class="option-btn" style="margin-top:30px; background:transparent; border: 3px solid #FF6B6B; color:#FF6B6B; font-size: 1.2rem; text-align:center; padding: 15px; width: 100%;" onclick="window.resetHindiQuiz()">क्विज़ शुरू से शुरू करें</button>
        </div>
    `,
    quizData: [
        { q: "1. 'लाल' टमाटर बहुत ताजा है। 'लाल' क्या है?", options: ["संज्ञा", "विशेषण", "क्रिया"], correct: 1 },
        { q: "2. 'दो किलो' चावल दे दो। यह कौन सा विशेषण है?", options: ["संख्यावाचक", "परिमाणवाचक", "गुणवाचक"], correct: 1 },
        { q: "3. विशेषण जिस शब्द की विशेषता बताते हैं, उसे कहते हैं:", options: ["प्रविशेषण", "विशेष्य", "सर्वनाम"], correct: 1 },
        { q: "4. 'वह' कुत्ता काला है। 'वह' यहाँ क्या है?", options: ["संज्ञा", "सार्वनामिक विशेषण", "गुणवाचक"], correct: 1 },
        { q: "5. 'कक्षा में तीस छात्र हैं' में 'तीस' क्या है?", options: ["निश्चित संख्यावाचक", "अनिश्चित संख्यावाचक", "परिमाणवाचक"], correct: 0 },
        { q: "6. 'थोड़ा' पानी दीजिये। यह कैसा विशेषण है?", options: ["संख्यावाचक", "परिमाणवाचक", "गुणवाचक"], correct: 1 },
        { q: "7. 'वीर' सिपाही सीमा पर हैं। 'वीर' है:", options: ["गुणवाचक", "संख्यावाचक", "सार्वनामिक"], correct: 0 },
        { q: "8. 'बहुत सुंदर' दृश्य है। 'बहुत' क्या है?", options: ["विशेषण", "प्रविशेषण", "विशेष्य"], correct: 1 },
        { q: "9. 'लाल, खट्टा, बड़ा' किस विशेषण के उदाहरण हैं?", options: ["गुणवाचक", "संख्यावाचक", "परिमाणवाचक"], correct: 0 },
        { q: "10. 'कुछ फल' ले आओ।", options: ["निश्चित संख्यावाचक", "अनिश्चित संख्यावाचक", "परिमाणवाचक"], correct: 1 },
        { q: "11. 'पाँच लीटर' तेल लाओ।", options: ["निश्चित परिमाणवाचक", "संख्यावाचक", "अनिश्चित परिमाणवाचक"], correct: 0 },
        { q: "12. विशेषण के कितने मुख्य भेद होते हैं?", options: ["तीन", "चार", "पाँच"], correct: 1 },
        { q: "13. 'यह' घर मेरा है। 'यह' क्या है?", options: ["सर्वनाम", "सार्वनामिक विशेषण", "संज्ञा"], correct: 1 },
        { q: "14. 'मीठा' फल सबको अच्छा लगता है।", options: ["गुणवाचक", "संख्यावाचक", "परिमाणवाचक"], correct: 0 },
        { q: "15. 'गर्म' चाय मत पियो।", options: ["परिमाणवाचक", "गुणवाचक", "संख्यावाचक"], correct: 1 },
        { q: "16. 'विशाल' पर्वत खड़ा है। 'विशाल' है:", options: ["गुणवाचक", "परिमाणवाचक", "संख्यावाचक"], correct: 0 },
        { q: "17. 'दस' आम।", options: ["संख्यावाचक", "परिमाणवाचक", "सार्वनामिक"], correct: 0 },
        { q: "18. 'ज्यादा' शोर मत करो।", options: ["गुणवाचक", "अनिश्चित परिमाणवाचक", "निश्चित संख्यावाचक"], correct: 1 },
        { q: "19. 'पुराना' सिक्का मिला।", options: ["संख्यावाचक", "गुणवाचक", "परिमाणवाचक"], correct: 1 },
        { q: "20. 'कौन' व्यक्ति चिल्ला रहा है?", options: ["सार्वनामिक", "संख्यावाचक", "गुणवाचक"], correct: 0 },
        { q: "21. 'दो मीटर' कपड़ा।", options: ["संख्यावाचक", "परिमाणवाचक", "गुणवाचक"], correct: 1 },
        { q: "22. 'चतुर' लोमड़ी।", options: ["गुणवाचक", "संख्यावाचक", "परिमाणवाचक"], correct: 0 },
        { q: "23. 'चार' दिन।", options: ["निश्चित संख्यावाचक", "अनिश्चित संख्यावाचक", "परिमाणवाचक"], correct: 0 },
        { q: "24. 'सफेद' गाय। विशेष्य चुनें:", options: ["सफेद", "गाय", "घास"], correct: 1 },
        { q: "25. 'नीला' आकाश। विशेषण चुनें:", options: ["नीला", "आकाश", "बादल"], correct: 0 },
        { q: "26. 'कम' खाना खाओ।", options: ["संख्यावाचक", "परिमाणवाचक", "गुणवाचक"], correct: 1 },
        { q: "27. 'उस' लड़के को यहाँ लाओ।", options: ["सार्वनामिक", "संख्यावाचक", "परिमाणवाचक"], correct: 0 },
        { q: "28. 'गोल' पृथ्वी।", options: ["गुणवाचक", "संख्यावाचक", "परिमाणवाचक"], correct: 0 },
        { q: "29. 'पतला' लड़का दौड़ रहा है।", options: ["दशावाचक (गुणवाचक)", "संख्यावाचक", "परिमाणवाचक"], correct: 0 },
        { q: "30. 'एक किलो' घी।", options: ["संख्यावाचक", "निश्चित परिमाणवाचक", "गुणवाचक"], correct: 1 },
        { q: "31. 'मेरी' साइकिल नई है।", options: ["सार्वनामिक", "संख्यावाचक", "परिमाणवाचक"], correct: 0 },
        { q: "32. 'बुद्धिमान' छात्रा।", options: ["गुणवाचक", "संख्यावाचक", "परिमाणवाचक"], correct: 0 },
        { q: "33. 'अनगिनत' तारे।", options: ["निश्चित संख्यावाचक", "अनिश्चित संख्यावाचक", "परिमाणवाचक"], correct: 1 },
        { q: "34. 'अंधेरी' रात।", options: ["गुणवाचक", "संख्यावाचक", "परिमाणवाचक"], correct: 0 },
        { q: "35. 'गहरा' नीला समुद्र।", options: ["गुणवाचक", "संख्यावाचक", "परिमाणवाचक"], correct: 0 },
        { q: "36. 'हल्का' वजन उठाओ।", options: ["गुणवाचक", "संख्यावाचक", "परिमाणवाचक"], correct: 0 },
        { q: "37. 'दूसरा' लड़का खड़ा हो।", options: ["निश्चित संख्यावाचक", "अनिश्चित संख्यावाचक", "परिमाणवाचक"], correct: 0 },
        { q: "38. 'खतरनाक' रास्ता।", options: ["गुणवाचक", "संख्यावाचक", "परिमाणवाचक"], correct: 0 },
        { q: "39. 'आधा लीटर' तेल।", options: ["परिमाणवाचक", "संख्यावाचक", "गुणवाचक"], correct: 0 },
        { q: "40. 'स्वस्थ' नागरिक देश की शक्ति हैं।", options: ["गुणवाचक", "संख्यावाचक", "परिमाणवाचक"], correct: 0 }
    ]
};
