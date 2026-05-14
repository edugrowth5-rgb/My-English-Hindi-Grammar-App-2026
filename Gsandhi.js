/**
 * Gsandhi.js - Higher Class Edition
 */

if (typeof Hindi === 'undefined') { window.Hindi = {}; }

Hindi.sandhi = {
    title: "संधि: नियमों का विस्तृत विश्लेषण 🤝",
    content: `
        <section style="text-align: left; padding: 10px;">
        
        <div style="background: #fdfaf0; padding: 25px; border-radius: 25px; border: 2px solid #FFD93D; margin-bottom: 30px;">
                <h2 style="color: #d4a017; font-size: 2.2rem; margin-top:0;">1. संधि की पूर्ण परिभाषा</h2>
                <p style="font-size: 1.4rem; line-height: 1.8;">
                    दो समीपवर्ती वर्णों (Letters) के परस्पर मेल से जो <b>विकार (परिवर्तन)</b> उत्पन्न होता है, उसे <b>संधि</b> कहते हैं। 
                    सरल शब्दों में, जब दो ध्वनियाँ आपस में मिलती हैं और नया रूप लेती हैं।
                </p>
            </div>
            
            <!-- स्वर संधि के 5 उप-भेद -->
            <div style="background: #fff9f0; padding: 25px; border-radius: 25px; border: 2px solid #FFD93D; margin-bottom: 30px;">
                <h2 style="color: #d4a017; font-size: 2rem; margin-top:0;">1. स्वर संधि के पंच-भेद (Higher Level)</h2>
                <p style="font-size: 1.2rem;">उच्च कक्षाओं में स्वर संधि के नियमों को समझना अनिवार्य है:</p>
                
                <div style="margin-top:15px; display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:15px;">
                    <!-- 1. दीर्घ -->
                    <div style="background:white; padding:15px; border-radius:12px; border-top:5px solid #FF6B6B;">
                        <b style="color:#FF6B6B;">1. दीर्घ संधि:समान स्वर मिलकर दीर्घ (बड़ा) हो जाते हैं।</b><br>
                        (अ/आ + अ/आ = आ)<br>
                        <i>उदा:</i> हिम + आलय = <b>हिमालय</b>
                    </div>
                    <!-- 2. गुण -->
                    <div style="background:white; padding:15px; border-radius:12px; border-top:5px solid #4D96FF;">
                        <b style="color:#4D96FF;">2. गुण संधि:अ/आ के बाद इ/उ आने पर ए/ओ हो जाता है।</b><br>
                        (अ + इ = ए, अ + उ = ओ)<br>
                        <i>उदा:</i> नर + ईश = <b>नरेश</b>
                    </div>
                    <!-- 3. वृद्धि -->
                    <div style="background:white; padding:15px; border-radius:12px; border-top:5px solid #FFD93D;">
                        <b style="color:#b8860b;">3. वृद्धि संधि:अ/आ के बाद ए/ऐ आने पर 'ऐ' और ओ/औ आने पर 'औ' हो जाता है।</b><br>
                        (अ + ए = ऐ, अ + ओ = औ)<br>
                        <i>उदा:</i> सदा + एव = <b>सदैव</b>
                    </div>
                    <!-- 4. यण -->
                    <div style="background:white; padding:15px; border-radius:12px; border-top:5px solid #6BCB77;">
                        <b style="color:#2e7d32;">4. यण संधि:इ/उ/ऋ के बाद अन्य स्वर आने पर य/व/र हो जाता है।</b><br>
                        (इ/उ + अन्य स्वर = य/व)<br>
                        <i>उदा:</i> सु + आगत = <b>स्वागत</b>
                    </div>
                    <!-- 5. अयादि -->
                    <div style="background:white; padding:15px; border-radius:12px; border-top:5px solid #9b59b6;">
                        <b style="color:#9b59b6;">5. अयादि संधि:ए/ऐ/ओ/औ के बाद अन्य स्वर आने पर अय/आय/अव/आव हो जाता है।</b><br>
                        (ए/ओ + अन्य स्वर = अय/अव)<br>
                        <i>उदा:</i> पो + अन = <b>पवन</b>
                    </div>
                </div>
            </div>

            <!-- व्यंजन और विसर्ग नियम -->
<div style="background: #5C7AEA; color: white; padding: 25px; border-radius: 25px; margin-top: 30px; box-shadow: 0 8px 16px rgba(92, 122, 234, 0.3);">
    <h3 style="color: #FFD93D; margin-top: 0; font-size: 1.8rem;">💡 व्यंजन और विसर्ग के प्रमुख नियम(Important Rules)</h3>
    <ul style="font-size: 1.3rem; line-height: 1.8; list-style-type: disc; padding-left: 20px;">
        <li>वर्ग के पहले वर्ण का तीसरे में बदलना: <b>दिक् + गंबर = दिगंबर</b></li>
        <li>विसर्ग का 'र' होना: <b>निः + आशा = निराशा</b></li>
        <li>विसर्ग का 'श/ष/स' होना: <b>निः + चल = निश्चल</b></li>
    </ul>
</div>
</section>

        <!-- Quiz Panel (40 Questions - Master Level) -->
        <div class="quiz-panel" id="hindi-quiz-wrapper" style="background: #fff; padding: 35px; border-radius: 35px; border: 5px solid #4D96FF;">
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
        </div>
    `,
    quizData: [
        { q: "1. 'पवन' शब्द में कौन सी स्वर संधि है?", options: ["यण संधि", "अयादि संधि", "गुण संधि"], correct: 1 },
        { q: "2. 'अ + ई = ए' किस संधि का सूत्र है?", options: ["दीर्घ संधि", "गुण संधि", "वृद्धि संधि"], correct: 1 },
        { q: "3. 'यद्यपि' का सही संधि विच्छेद क्या होगा?", options: ["यद + अपि", "यदि + अपि", "यद्या + पि"], correct: 1 },
        { q: "4. 'दिक् + गज' = 'दिग्गज' किस संधि का उदाहरण है?", options: ["स्वर", "व्यंजन", "विसर्ग"], correct: 1 },
        { q: "5. 'मनः + हर' की संधि क्या होगी?", options: ["मनहर", "मनोहर", "मनिहर"], correct: 1 },
        { q: "6. 'सदैव' में कौन सी संधि है?", options: ["गुण", "वृद्धि", "यण"], correct: 1 },
        { q: "7. 'भानूदय' में कौन सी संधि है?", options: ["दीर्घ", "गुण", "अयादि"], correct: 0 },
        { q: "8. 'इति + आदि' = 'इत्यादि' किस संधि का नियम है?", options: ["यण संधि", "अयादि संधि", "वृद्धि संधि"], correct: 0 },
        { q: "9. 'उज्ज्वल' का सही विच्छेद क्या है?", options: ["उज + ज्वल", "उत + ज्वल", "उत् + ज्वल"], correct: 2 },
        { q: "10. 'निश्चल' में कौन सी संधि है?", options: ["स्वर", "व्यंजन", "विसर्ग"], correct: 2 },
        // ... (इसमें आप और 30 चुनौतीपूर्ण प्रश्न जोड़ सकते हैं)
        { q: "11. 'ने + अन' = 'नयन' में संधि है:", options: ["अयादि", "यण", "गुण"], correct: 0 },
        { q: "12. 'गिरि + ईश' की संधि:", options: ["गिरीश", "गिरेश", "गिरिश"], correct: 0 },
        { q: "13. 'स्वागत' का विच्छेद:", options: ["स्वा + गत", "सु + आगत", "स + आगत"], correct: 1 },
        { q: "14. 'मतैक्य' में संधि है:", options: ["वृद्धि", "गुण", "दीर्घ"], correct: 0 },
        { q: "15. 'जगदीश' का विच्छेद:", options: ["जगत + ईश", "जगत् + ईश", "जग + ईश"], correct: 1 },
        { q: "16. 'भानु + उदय' में संधि है:", options: ["दीर्घ", "गुण", "यण"], correct: 0 },
        { q: "17. 'निश्चल' का विच्छेद:", options: ["निस + चल", "निः + चल", "नि + चल"], correct: 1 },
        { q: "18. 'महा + ऋषि' =", options: ["महार्षि", "महर्षि", "महारिषि"], correct: 1 },
        { q: "19. 'एकैक' में संधि है:", options: ["वृद्धि", "गुण", "दीर्घ"], correct: 0 },
        { q: "20. 'दिगम्बर' का विच्छेद:", options: ["दिग + अम्बर", "दिक् + अम्बर", "दिक् + म्बर"], correct: 1 },
        { q: "21. 'इ + अ = य' किसमें होता है?", options: ["यण", "अयादि", "गुण"], correct: 0 },
        { q: "22. 'नरेश' में संधि है:", options: ["गुण", "वृद्धि", "दीर्घ"], correct: 0 },
        { q: "23. 'नमस्ते' का विच्छेद:", options: ["नमः + ते", "नम + ते", "नमस + ते"], correct: 0 },
        { q: "24. 'परोपकार' में संधि है:", options: ["गुण", "वृद्धि", "यण"], correct: 0 },
        { q: "25. 'नै + अक' =", options: ["नायक", "नयक", "नायक"], correct: 0 },
        { q: "26. 'सज्जन' में संधि है:", options: ["व्यंजन", "स्वर", "विसर्ग"], correct: 0 },
        { q: "27. 'देवेन्द्र' का विच्छेद:", options: ["देव + इन्द्र", "देव + इन्द्र", "देवी + इन्द्र"], correct: 0 },
        { q: "28. 'निराशा' का विच्छेद:", options: ["निरा + आशा", "निः + आशा", "निर + आशा"], correct: 1 },
        { q: "29. 'उ + अ = व' किसमें होता है?", options: ["यण", "अयादि", "वृद्धि"], correct: 0 },
        { q: "30. 'लघु + उत्तर' =", options: ["लघुत्तर", "लघूत्तर", "लघोत्तर"], correct: 1 },
        { q: "31. 'वनौषधि' में संधि है:", options: ["वृद्धि", "गुण", "दीर्घ"], correct: 0 },
        { q: "32. 'तल्लीन' का विच्छेद:", options: ["तल + लीन", "तत + लीन", "तत् + लीन"], correct: 2 },
        { q: "33. 'महौषध' का विच्छेद:", options: ["महा + औषध", "महा + औषध", "महो + औषध"], correct: 1 },
        { q: "34. 'अयादि' संधि का उदाहरण:", options: ["पवन", "महेश", "विद्या"], correct: 0 },
        { q: "35. 'विसर्ग' का 'श' होना:", options: ["निश्चय", "मनोहर", "निराशा"], correct: 0 },
        { q: "36. 'उत + हार' =", options: ["उद्धार", "उधार", "उतहार"], correct: 0 },
        { q: "37. 'य + ओ = यो' किसमें है?", options: ["गुण", "यण", "अयादि"], correct: 0 },
        { q: "38. 'सदा + एव' =", options: ["सदेव", "सदैव", "सदाएव"], correct: 1 },
        { q: "39. 'व्यंजन' संधि का उदाहरण:", options: ["सज्जन", "रमेश", "निश्चल"], correct: 0 },
        { q: "40. संधि के कुल भेद हैं:", options: ["3", "5", "8"], correct: 0 }
    ]
};
