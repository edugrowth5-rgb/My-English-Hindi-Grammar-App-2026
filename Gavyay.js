/**
 * Gavyay.js - Hindi Grammar Topic
 * Topic: अव्यय (अविकारी शब्द) - Detailed Theory & 40 Quiz
 */

if (typeof Hindi === 'undefined') { window.Hindi = {}; }

Hindi.avyay = {
    title: "अव्यय: जो कभी नहीं बदलते 💎",
    content: `
        <section style="text-align: left; padding: 10px;">
            
            <div style="background: #fdf2f2; padding: 25px; border-radius: 25px; border-left: 10px solid #FF6B6B; margin-bottom: 30px; box-shadow: 5px 5px 15px rgba(0,0,0,0.05);">
                <h2 style="color: #FF6B6B; font-size: 2.2rem; margin-top:0;">1. अव्यय किसे कहते हैं?</h2>
                <p style="font-size: 1.4rem; line-height: 1.8;">
                    ऐसे शब्द जिन पर <b>लिंग, वचन, पुरुष या काल</b> का कोई प्रभाव नहीं पड़ता और वे हर स्थिति में एक समान रहते हैं, उन्हें <b>अव्यय</b> (अ + व्यय = जो खर्च न हो) कहते हैं।
                </p>
                <p style="font-size: 1.2rem; margin-top: 10px; color: #666;">
                    <i>उदाहरण:</i> आज, कल, धीरे-धीरे, और, किंतु, शाबाश! आदि।
                </p>
            </div>

            <h2 style="color: #333; font-size: 2rem; margin-top: 40px; border-bottom: 3px solid #333; display: inline-block;">2. अव्यय के 4 मुख्य भेद</h2>

            <div style="margin-bottom: 25px; background: #fff; padding: 25px; border-radius: 20px; border: 2px solid #eee; border-top: 8px solid #4D96FF;">
                <h3 style="color: #4D96FF; font-size: 1.8rem; margin-top:0;">(i) क्रिया-विशेषण (Adverb)</h3>
                <p style="font-size: 1.3rem;">जो शब्द क्रिया की विशेषता बताते हैं।</p>
                <p style="font-size: 1.2rem;"><i>उदाहरण:</i> कछुआ <b>धीरे-धीरे</b> चलता है। तुम <b>कल</b> आना।</p>
            </div>

            <div style="margin-bottom: 25px; background: #fff; padding: 25px; border-radius: 20px; border: 2px solid #eee; border-top: 8px solid #6BCB77;">
                <h3 style="color: #2e7d32; font-size: 1.8rem; margin-top:0;">(ii) संबंधबोधक (Preposition)</h3>
                <p style="font-size: 1.3rem;">जो संज्ञा या सर्वनाम का संबंध वाक्य के अन्य शब्दों से जोड़ते हैं।</p>
                <p style="font-size: 1.2rem;"><i>उदाहरण:</i> घर <b>के सामने</b> बगीचा है। प्यास <b>के मारे</b> बुरा हाल है।</p>
            </div>

            <div style="margin-bottom: 25px; background: #fff; padding: 25px; border-radius: 20px; border: 2px solid #eee; border-top: 8px solid #FFD93D;">
                <h3 style="color: #d4a017; font-size: 1.8rem; margin-top:0;">(iii) समुच्चयबोधक (Conjunction)</h3>
                <p style="font-size: 1.3rem;">जो दो शब्दों या दो वाक्यों को आपस में जोड़ते हैं।</p>
                <p style="font-size: 1.2rem;"><i>उदाहरण:</i> राम <b>और</b> श्याम मित्र हैं। मेहनत करो <b>ताकि</b> सफल हो सको।</p>
            </div>

            <div style="margin-bottom: 25px; background: #fff; padding: 25px; border-radius: 20px; border: 2px solid #eee; border-top: 8px solid #9b59b6;">
                <h3 style="color: #9b59b6; font-size: 1.8rem; margin-top:0;">(iv) विस्मयादिबोधक (Interjection)</h3>
                <p style="font-size: 1.3rem;">जो आश्चर्य, हर्ष, शोक या घृणा के भाव प्रकट करते हैं।</p>
                <p style="font-size: 1.2rem;"><i>उदाहरण:</i> <b>वाह!</b> क्या दृश्य है। <b>छी!</b> यहाँ कितनी गंदगी है।</p>
            </div>

        </section>

        <hr style="border: 2px dashed #ccc; margin: 50px 0;">

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
                <button class="option-btn" style="background:#eee; flex:1; text-align:center; padding: 20px; font-size: 1.3rem;" onclick="window.prevHindiQuestion()">पीछे</button>
                <button class="option-btn" style="background:#6BCB77; color:white; flex:1; text-align:center; padding: 20px; font-size: 1.3rem;" onclick="window.nextHindiQuestion()">आगे</button>
            </div>
            <button class="option-btn" style="margin-top:30px; background:transparent; border: 3px solid #4D96FF; color:#4D96FF; font-size: 1.2rem; text-align:center; padding: 15px; width: 100%;" onclick="window.resetHindiQuiz()">क्विज़ शुरू से शुरू करें</button>
        </div>
    `,
    quizData: [
        { q: "1. 'अव्यय' का दूसरा नाम क्या है?", options: ["विकारी शब्द", "अविकारी शब्द", "नाम शब्द"], correct: 1 },
        { q: "2. 'वह धीरे-धीरे चलता है' में 'धीरे-धीरे' क्या है?", options: ["संज्ञा", "क्रिया-विशेषण", "संबंधबोधक"], correct: 1 },
        { q: "3. 'राम और श्याम' में 'और' कौन सा अव्यय है?", options: ["समुच्चयबोधक", "विस्मयादिबोधक", "क्रिया-विशेषण"], correct: 0 },
        { q: "4. 'शाबाश! तुमने अच्छा किया' में 'शाबाश' क्या है?", options: ["संबंधबोधक", "विस्मयादिबोधक", "क्रिया"], correct: 1 },
        { q: "5. घर 'के सामने' बगीचा है। 'के सामने' है:", options: ["संबंधबोधक", "समुच्चयबोधक", "विस्मयादिबोधक"], correct: 0 },
        { q: "6. अव्यय पर किसका प्रभाव नहीं पड़ता?", options: ["लिंग", "वचन", "दोनों का"], correct: 2 },
        { q: "7. 'लेकिन' किस प्रकार का अव्यय है?", options: ["क्रिया-विशेषण", "समुच्चयबोधक", "संबंधबोधक"], correct: 1 },
        { q: "8. 'वह प्रतिदिन पढ़ता है' में 'प्रतिदिन' है:", options: ["क्रिया-विशेषण", "संज्ञा", "सर्वनाम"], correct: 0 },
        { q: "9. विस्मयादिबोधक चिह्न कौन सा है?", options: ["?", "!", "।"], correct: 1 },
        { q: "10. 'अरे! तुम कब आए?' में 'अरे' है:", options: ["विस्मयादिबोधक", "संबंधबोधक", "क्रिया"], correct: 0 },
        { q: "11. 'वहाँ' किस प्रकार का क्रिया-विशेषण है?", options: ["कालवाचक", "स्थानवाचक", "रीतिवाचक"], correct: 1 },
        { q: "12. 'ताकि' शब्द क्या है?", options: ["संबंधबोधक", "समुच्चयबोधक", "निपात"], correct: 1 },
        { q: "13. 'प्यासे के बिना' रहा न गया।", options: ["संबंधबोधक", "समुच्चयबोधक", "विस्मयादिबोधक"], correct: 0 },
        { q: "14. 'अचानक' वर्षा होने लगी। 'अचानक' है:", options: ["रीतिवाचक क्रिया-विशेषण", "स्थानवाचक", "परिमाणवाचक"], correct: 0 },
        { q: "15. 'वाह! क्या बात है' में 'वाह' दर्शाता है:", options: ["शोक", "हर्ष (खुशी)", "घृणा"], correct: 1 },
        { q: "16. 'किंतु' का प्रयोग होता है:", options: ["दो वाक्यों को जोड़ने में", "विशेषता बताने में", "पुकारने में"], correct: 0 },
        { q: "17. 'नीचे' खड़ा हो जा। 'नीचे' है:", options: ["स्थानवाचक क्रिया-विशेषण", "कालवाचक", "रीतिवाचक"], correct: 0 },
        { q: "18. 'हाय! अब क्या होगा' में 'हाय' है:", options: ["शोक सूचक", "हर्ष सूचक", "विस्मय सूचक"], correct: 0 },
        { q: "19. 'राम के साथ' लक्ष्मण भी गए।", options: ["संबंधबोधक", "समुच्चयबोधक", "क्रिया-विशेषण"], correct: 0 },
        { q: "20. अव्यय के कितने मुख्य भेद हैं?", options: ["तीन", "चार", "पाँच"], correct: 1 },
        { q: "21. 'कल' विद्यालय बंद रहेगा। 'कल' है:", options: ["स्थानवाचक", "कालवाचक", "परिमाणवाचक"], correct: 1 },
        { q: "22. 'खूब' पढ़ो। 'खूब' क्या है?", options: ["रीतिवाचक", "परिमाणवाचक", "स्थानवाचक"], correct: 1 },
        { q: "23. 'अथवा' किस अव्यय का उदाहरण है?", options: ["समुच्चयबोधक", "विस्मयादिबोधक", "संबंधबोधक"], correct: 0 },
        { q: "24. 'सावधान!' आगे गड्ढा है।", options: ["हर्ष बोधक", "चेतावनी बोधक", "शोक बोधक"], correct: 1 },
        { q: "25. 'पेड़ के ऊपर' पक्षी हैं।", options: ["संबंधबोधक", "समुच्चयबोधक", "क्रिया-विशेषण"], correct: 0 },
        { q: "26. 'मगर' किस श्रेणी में आता है?", options: ["समुच्चयबोधक", "संबंधबोधक", "विस्मयादिबोधक"], correct: 0 },
        { q: "27. 'जल्दी' चलो। 'जल्दी' है:", options: ["रीतिवाचक क्रिया-विशेषण", "कालवाचक", "परिमाणवाचक"], correct: 0 },
        { q: "28. 'छी! छी!' कितनी बदबू है।", options: ["हर्ष", "घृणा", "विस्मय"], correct: 1 },
        { q: "29. 'भी' और 'ही' को क्या कहते हैं?", options: ["निपात", "संबंधबोधक", "समुच्चयबोधक"], correct: 0 },
        { q: "30. 'तथा' शब्द है:", options: ["विकारी", "अविकारी", "सर्वनाम"], correct: 1 },
        { q: "31. 'कम' बोलो। 'कम' है:", options: ["परिमाणवाचक क्रिया-विशेषण", "स्थानवाचक", "कालवाचक"], correct: 0 },
        { q: "32. 'पीछे' मुड़ो।", options: ["स्थानवाचक", "कालवाचक", "रीतिवाचक"], correct: 0 },
        { q: "33. 'यदि... तो' जोड़े वाले शब्द हैं:", options: ["संबंधबोधक", "समुच्चयबोधक", "निपात"], correct: 1 },
        { q: "34. 'अरे!' तुम यहाँ कैसे?", options: ["विस्मय सूचक", "शोक सूचक", "घृणा सूचक"], correct: 0 },
        { q: "35. 'छत के नीचे' मत सो।", options: ["संबंधबोधक", "समुच्चयबोधक", "क्रिया-विशेषण"], correct: 0 },
        { q: "36. 'चुप!' शोर मत करो।", options: ["हर्ष", "मौन सूचक", "शोक"], correct: 1 },
        { q: "37. 'इसलिए' शब्द है:", options: ["समुच्चयबोधक", "संबंधबोधक", "विस्मयादिबोधक"], correct: 0 },
        { q: "38. 'तेज़' दौड़ो।", options: ["रीतिवाचक क्रिया-विशेषण", "स्थानवाचक", "कालवाचक"], correct: 0 },
        { q: "39. 'बदले' में क्या लोगे?", options: ["संबंधबोधक", "समुच्चयबोधक", "क्रिया-विशेषण"], correct: 0 },
        { q: "40. अविकारी शब्द का अर्थ है:", options: ["बदलने वाला", "न बदलने वाला", "टूटने वाला"], correct: 1 }
    ]
};
