 /**
 * Gverb.js - Total English Grammar Solution
 * Topic: Verbs (Transitivity, Regular/Irregular Conjugation, Auxiliaries, Modals & Non-Finites)
 */

if (typeof English === 'undefined') { window.English = {}; }

English.verb = {
    title: "The Verb: Core & Advanced Action Engine ⚙️",
    content: `
        <section style="text-align: left; padding: 10px; font-family: 'Segoe UI', sans-serif;">
            
            <!-- 1. Core Concept -->
            <div style="background: #f0fdfa; padding: 25px; border-radius: 25px; border-left: 10px solid #0d9488; margin-bottom: 30px;">
                <h2 style="color: #115e59; font-size: 2.2rem; margin-top:0;">1. What is a Verb?</h2>
                <p style="font-size: 1.3rem; line-height: 1.8;">
                    A <b>Verb</b> is a word used to describe an action, state, or occurrence. It forms the main predicate of a sentence. Without a verb, a complete thought cannot exist.
                    <br><br>
                    <i>Example:</i> "The developer <b>built</b> the code, and now the application <b>runs</b> smoothly." (Built describes a physical/mental action; runs describes a functional occurrence).
                </p>
            </div>

            <!-- 2. Transitive vs Intransitive (Class 5-8 Core) -->
            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #0d9488; display: inline-block; margin-bottom: 20px;">2. Transitive vs. Intransitive Verbs</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                <div style="background: white; padding: 20px; border-radius: 15px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
                    <h3 style="color: #0d9488; margin-top: 0;">A. Transitive Verbs (सकर्मक)</h3>
                    <p style="font-size: 1.1rem;">Requires a <b>direct object</b> to receive the action and complete the meaning.</p>
                    <hr style="border: 0; border-top: 1px solid #eee;">
                    <i>Example:</i> The programmer modified <u>the script</u>. (If you just say 'modified', the question 'modified what?' remains unanswered).
                </div>
                <div style="background: white; padding: 20px; border-radius: 15px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
                    <h3 style="color: #0d9488; margin-top: 0;">B. Intransitive Verbs (अकर्मक)</h3>
                    <p style="font-size: 1.1rem;">Does <b>not require an object</b>. The action terminates with the subject.</p>
                    <hr style="border: 0; border-top: 1px solid #eee;">
                    <i>Example:</i> The computer teacher smiled. / The server crashed. (Makes complete sense without an object).
                </div>
            </div>

            <!-- 3. Finite vs Non-Finite (The High School Split) -->
            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #3b82f6; display: inline-block; margin-bottom: 20px;">3. Verb Forms: Finite vs. Non-Finite</h2>
            <p style="font-size: 1.2rem; line-height: 1.6;">This classification marks the transition into secondary board exam parameters:</p>

            <div style="background: white; padding: 20px; border-radius: 20px; border: 1px solid #eee; line-height: 1.8; box-shadow: 0 4px 10px rgba(0,0,0,0.05); margin-bottom: 30px;">
                <p style="font-size: 1.2rem;"><b>1. Finite Verbs:</b> Change their form according to the tense, number, and person of the subject.<br><i>Example:</i> He <b>is</b> coding. / They <b>are</b> coding. / We <b>coded</b> yesterday.</p>
                <hr style="border: 0; border-top: 1px solid #eee;">
                <p style="font-size: 1.2rem;"><b>2. Non-Finite Verbs:</b> Do not change their form regardless of subject or tense changes. They split into 3 categories:</p>
                <ul style="font-size: 1.15rem; padding-left: 20px; color: #1e3a8a;">
                    <li><b>Infinitive (to + V1):</b> He wants <u>to learn</u> full-stack web development.</li>
                    <li><b>Gerund (V1 + ing functioning as a noun):</b> <u>Debugging</u> requires immense patience.</li>
                    <li><b>Participle (Acts as an adjective):</b> I found a <u>broken</u> database link.</li>
                </ul>
            </div>

            <!-- 4. Modals & Auxiliaries (Class 11 & 12 Syntax Guardrails) -->
            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #ef4444; display: inline-block; margin-bottom: 20px;">4. Auxiliary and Modal Constraints (Advanced)</h2>
            <div style="background: #fffbeb; padding: 25px; border-radius: 20px; border-left: 5px solid #f59e0b; line-height: 1.8;">
                <p style="font-size: 1.2rem; margin-top:0;"><b>Key Modal Rules to Prevent Errors:</b></p>
                <ul style="font-size: 1.15rem; padding-left: 20px; color: #9a3412;">
                    <li><b>Lest...Should Rule:</b> The word 'lest' (meaning 'for fear that') must always be followed by the modal 'should'.<br>❌ Walk carefully lest you may fall. ➔ Walk carefully lest you <b>should</b> fall.</li>
                    <li><b>Asif...Were Rule:</b> Imaginary conditions following 'as if' take the subjunctive 'were' regardless of the subject's singular nature.<br>❌ He commands as if he is the principal. ➔ He commands as if he <b>were</b> the principal.</li>
                    <li><b>Bare Infinitive Rule:</b> Verbs like 'make', 'let', 'bid', and 'watch' take infinitives without 'to' in active voice expressions.<br>❌ He made me to rewrite the script. ➔ He made me <b>rewrite</b> the script.</li>
                </ul>
            </div>
        </section>

 <hr style="border: 2px dashed #eee; margin: 40px 0;">

        <div class="quiz-panel" id="quiz-wrapper" style="background: #FFF9F0; padding: 30px; border-radius: 30px; border: 4px solid #FFD93D;">
            <div style="display: flex; justify-content: space-between; font-size: 1.5rem; font-weight: bold; margin-bottom: 25px;">
                <span id="q-progress" style="color: #FF6B6B;">Question: 1 / 20</span>
                <span id="q-score" style="color: #6BCB77;">Score: 0</span>
            </div>
            
            <div id="question-container" style="min-height: 200px;">
                <h4 id="q-text" style="font-size: 1.7rem; color: #2c3e50; margin-bottom: 30px; text-align: center;">Loading Quiz Questions...</h4>
                <div id="options-box"></div>
            </div>
            
            <div style="display: flex; justify-content: space-between; gap: 20px; margin-top: 40px;">
                <button class="option-btn" style="background:#eee; flex:1; text-align:center; padding: 15px; font-size: 1.2rem;" onclick="window.prevQuestion()">Back / पीछे</button>
                <button class="option-btn" style="background:#6BCB77; color:white; flex:1; text-align:center; padding: 15px; font-size: 1.2rem;" onclick="window.nextQuestion()">Next / आगे</button>
            </div>
            <button class="option-btn" style="margin-top:25px; background:transparent; border: 2px solid #FF6B6B; color:#FF6B6B; font-size: 1.1rem; text-align:center; padding: 10px;" onclick="window.resetQuiz()">Restart Quiz / शुरू से शुरू करें</button>
        </div>
    `,
    /* --- Gverb.js: 200 Pure Verbs Questions --- */

quizData: [
    // BATCH 1: Transitivity and Basic Action Mechanics (1 - 50)
    { q: "1. Identify the transitive verb target object: 'The student built an interactive math game.'", options: ["built", "interactive math game", "student"], correct: 1 },
    { q: "2. What type of verb is 'crashed' in: 'The legacy file directory crashed unexpectedly.'?", options: ["Transitive Verb", "Intransitive Verb", "Modal Auxiliary"], correct: 1 },
    { q: "3. 'Prashant Sagar teaches computer applications.' - In this sentence, 'teaches' acts as a:", options: ["Transitive Verb", "Intransitive Verb", "Auxiliary Verb"], correct: 0 },
    { q: "4. Identify the intransitive verb: 'The intense heat dissipated gradually as night fell.'", options: ["dissipated", "fell", "Both options are intransitive verbs"], correct: 2 },
    { q: "5. 'The corporate client purchased a new server module.' - Find the direct object:", options: ["client", "purchased", "new server module"], correct: 2 },
    { q: "6. 'The baby slept soundly in the wooden cradle.' - The verb 'slept' is:", options: ["Transitive", "Intransitive", "Incomplete Predication"], correct: 1 },
    { q: "7. 'The programmer modified the global variable schema.' - The verb 'modified' functions as:", options: ["A Transitive Verb", "An Intransitive Verb", "A Non-Finite Modifier"], correct: 0 },
    { q: "8. 'The birds are chirping outside the laboratory window.' - The main verb is:", options: ["are", "chirping", "outside"], correct: 1 },
    { q: "9. 'He gave the assistant an informative guide book.' - Identify the indirect object:", options: ["He", "the assistant", "informative guide book"], correct: 1 },
    { q: "10. 'The validation script runs continuously on the server.' - The verb 'runs' is:", options: ["Transitive", "Intransitive", "Auxiliary"], correct: 1 },
    { q: "11. Find the transitive expression: 'The storm destroyed the minimalist 3D banner setup.'", options: ["storm", "destroyed", "banner setup"], correct: 1 },
    { q: "12. 'Fire burns brightly.' - The verb 'burns' inside this statement is:", options: ["Transitive", "Intransitive", "Modal"], correct: 1 },
    { q: "13. 'She wrote a beautiful poem regarding nature.' - What is the direct object?", options: ["She", "a beautiful poem", "nature"], correct: 1 },
    { q: "14. 'The old engine failed during the progressive level stress test.' - The verb 'failed' is:", options: ["Transitive", "Intransitive", "Helping Verb"], correct: 1 },
    { q: "15. 'The manager called a meeting of full-stack developers.' - The verb 'called' is:", options: ["Transitive", "Intransitive", "Non-Finite"], correct: 0 },
    { q: "16. 'The water is boiling in the copper container.' - The verb phrase is:", options: ["is boiling", "boiling in", "copper container"], correct: 0 },
    { q: "17. 'Suresh sent an e-mail to the patient consultation platform.' - 'sent' functions as a:", options: ["Transitive Verb", "Intransitive Verb", "Linking Verb"], correct: 0 },
    { q: "18. 'The historical monument stands near the river bank.' - The verb 'stands' is:", options: ["Transitive", "Intransitive", "Transitive of Complete Person"], correct: 1 },
    { q: "19. 'The computer teacher explained the algorithm framework clearly.' - Find the object:", options: ["computer teacher", "algorithm framework", "clearly"], correct: 1 },
    { q: "20. 'The strong wind blew all night.' - The verb 'blew' inside this sentence is:", options: ["Transitive", "Intransitive", "Auxiliary"], correct: 1 },
    { q: "21. 'The system analyst cracked the decryption matrix code.' - The verb is:", options: ["Transitive", "Intransitive", "Incomplete"], correct: 0 },
    { q: "22. 'The presentation ended at exactly four o'clock.' - The verb 'ended' is:", options: ["Transitive", "Intransitive", "Modal Verb"], correct: 1 },
    { q: "23. 'They are playing a friendly match of cricket.' - What is the direct object?", options: ["They", "a friendly match", "cricket"], correct: 1 },
    { q: "24. 'The rain stopped before the technical team arrived.' - The verbs in this sentence are:", options: ["Both are Transitive", "Both are Intransitive", "First is Transitive, second is Intransitive"], correct: 1 },
    { q: "25. 'He brings his laptop device to the workplace daily.' - The verb 'brings' is:", options: ["Transitive", "Intransitive", "Linking"], correct: 0 },
    { q: "26. 'The patient sneezed loudly inside the consultation room.' - The verb 'sneezed' is:", options: ["Transitive", "Intransitive", "Primary Auxiliary"], correct: 1 },
    { q: "27. 'The full-stack platform manages patient records safely.' - Identify the verb status:", options: ["Transitive", "Intransitive", "Defective"], correct: 0 },
    { q: "28. 'The dark clouds vanished quickly from the blue sky.' - The verb 'vanished' is:", options: ["Transitive", "Intransitive", "Copulative"], correct: 1 },
    { q: "29. 'Sita baked a delicious chocolate cake for the class.' - 'baked' functions as a:", options: ["Transitive Verb", "Intransitive Verb", "Linking Verb"], correct: 0 },
    { q: "30. 'The clock ticks continuously throughout the day.' - The verb 'ticks' is:", options: ["Transitive", "Intransitive", "Modal Component"], correct: 1 },
    { q: "31. 'The student asked a highly innovative query about CSS variables.' - The verb is:", options: ["Transitive", "Intransitive", "Anomalous"], correct: 0 },
    { q: "32. 'The dynamic interface layout looks elegant.' - Here, 'looks' acts as a:", options: ["Transitive Verb", "Intransitive Linking Verb", "Modal Auxiliary"], correct: 1 },
    { q: "33. 'He grew a minimalist beard during the long winter vacation.' - 'grew' is:", options: ["Transitive", "Intransitive", "Helping"], correct: 0 },
    { q: "34. 'The ancient tree grew rapidly in the fertile soil valley.' - Here, 'grew' is:", options: ["Transitive", "Intransitive", "Passive Extension"], correct: 1 },
    { q: "35. 'The children are flying colorful paper kites in the park.' - The verb is:", options: ["Transitive", "Intransitive", "Stative"], correct: 0 },
    { q: "36. 'The white birds fly high up in the blue sky.' - The verb 'fly' in this sentence is:", options: ["Transitive", "Intransitive", "Linking"], correct: 1 },
    { q: "37. 'He broke the glass partition by accident.' - The verb 'broke' is utilized as:", options: ["Transitive", "Intransitive", "Causative"], correct: 0 },
    { q: "38. 'The fragile porcelain vase broke into a thousand tiny pieces.' - Here, 'broke' is:", options: ["Transitive", "Intransitive", "Incomplete"], correct: 1 },
    { q: "39. 'The uniform guard rang the brass bell at noon.' - The verb 'rang' functions as:", options: ["Transitive", "Intransitive", "Modal Reference"], correct: 0 },
    { q: "40. 'The phone rang loudly while I was configuring the system directory.' - 'rang' is:", options: ["Transitive", "Intransitive", "Auxiliary"], correct: 1 },
    { q: "41. 'The dynamic system automatically saves your progression layout.' - Identify the verb:", options: ["saves (Transitive)", "saves (Intransitive)", "automatically (Auxiliary)"], correct: 0 },
    { q: "42. 'The pilot landed the commercial airplane safely on the runway.' - 'landed' is:", options: ["Transitive", "Intransitive", "Linking Phrase"], correct: 0 },
    { q: "43. 'The eagle landed on the top peak branch of the ancient oak.' - Here, 'landed' is:", options: ["Transitive", "Intransitive", "Stative Linking"], correct: 1 },
    { q: "44. 'The software developers built a new medical platform.' - Find the action verb:", options: ["built", "platform", "medical"], correct: 0 },
    { q: "45. 'The continuous noise drove the technical designer crazy.' - The verb 'drove' is:", options: ["Transitive", "Intransitive", "Defective Mode"], correct: 0 },
    { q: "46. 'He drove all the way to New Delhi without a single stop.' - Here, 'drove' is:", options: ["Transitive", "Intransitive", "Auxiliary Mode"], correct: 1 },
    { q: "47. 'The student preparation strategy yielded outstanding outcomes.' - 'yielded' is:", options: ["Transitive", "Intransitive", "Copula"], correct: 0 },
    { q: "48. 'The old castle wall crumbled slowly over centuries.' - The verb 'crumbled' is:", options: ["Transitive", "Intransitive", "Helping Verb"], correct: 1 },
    { q: "49. 'She speaks the English language exceptionally fluently.' - The verb is:", options: ["Transitive", "Intransitive", "Anomalous Finite"], correct: 0 },
    { q: "50. 'The young child speaks softly to avoid waking the sleeping baby.' - 'speaks' is:", options: ["Transitive", "Intransitive", "Linking Framework"], correct: 1 },

    // BATCH 2: Regular/Irregular Conjugations & Auxiliary Systems (51 - 100)
    { q: "51. What is the past participle form (V3) of the irregular verb 'Fly'?", options: ["Flew", "Flown", "Flyed"], correct: 1 },
    { q: "52. Choose the correct past tense form (V2) of the verb 'Seek':", options: ["Seeked", "Sought", "Soughten"], correct: 1 },
    { q: "53. What is the past participle form (V3) of the irregular verb 'Choose'?", options: ["Chose", "Chosen", "Choosed"], correct: 1 },
    { q: "54. Select the correct past tense form (V2) of 'Lay' (meaning to place down safely):", options: ["Layed", "Laid", "Lied"], correct: 1 },
    { q: "55. 'The sun has _______ behind the western mountain range.' - Fill the blank:", options: ["rose", "risen", "raised"], correct: 1 },
    { q: "56. What is the past participle form (V3) of the verb 'Sing'?", options: ["Sang", "Sung", "Sungen"], correct: 1 },
    { q: "57. Choose the correct past tense (V2) of 'Lie' (meaning to rest on a flat bed surface):", options: ["Lied", "Lay", "Laid"], correct: 1 },
    { q: "58. What is the past participle form (V3) of the irregular verb 'Drive'?", options: ["Drove", "Driven", "Drived"], correct: 1 },
    { q: "59. 'He has _______ all the drinking water stored inside the copper flask.'", options: ["drank", "drunk", "drinked"], correct: 1 },
    { q: "60. Select the past participle form (V3) of the verb 'Write':", options: ["Wrote", "Written", "Writed"], correct: 1 },
    { q: "61. What category of verb forms 'ed' endings like 'played' and 'modified'?", options: ["Regular Verbs", "Irregular Verbs", "Anomalous Auxiliaries"], correct: 0 },
    { q: "62. Verbs like 'run/ran/run' or 'go/went/gone' change internally and are called:", options: ["Regular Verbs", "Irregular Verbs", "Defective Operators"], correct: 1 },
    { q: "63. What is the past participle form (V3) of 'Bite'?", options: ["Bit", "Bitten", "Bited"], correct: 1 },
    { q: "64. 'The technical supervisor has _______ the file naming prefix blueprint.'", options: ["forgot", "forgotten", "forgetted"], correct: 1 },
    { q: "65. Select the past tense form (V2) of the irregular verb 'Freeze':", options: ["Freezed", "Froze", "Frozen"], correct: 1 },
    { q: "66. What is the past participle form (V3) of 'Freeze'?", options: ["Froze", "Frozen", "Freezed"], correct: 1 },
    { q: "67. 'The template cloth has _______ due to washing machine operations.'", options: ["shrunk", "shrank", "shrunken"], correct: 0 },
    { q: "68. What is the past tense form (V2) of the irregular verb 'Wear'?", options: ["Wore", "Worn", "Weared"], correct: 0 },
    { q: "69. 'The bell was _______ systematically by the institutional guard.'", options: ["rang", "rung", "ringed"], correct: 1 },
    { q: "70. Choose the correct past participle form (V3) of 'Speak':", options: ["Spoke", "Spoken", "Speaked"], correct: 1 },
    { q: "71. In 'Prashant Sagar is debugging the application', the word 'is' functions as a:", options: ["Primary Auxiliary Verb", "Modal Auxiliary Verb", "Principal Action Verb"], correct: 0 },
    { q: "72. Which of the following elements is categorized as a primary auxiliary operator?", options: ["Can", "Have", "Must"], correct: 1 },
    { q: "73. 'We have finalized the user registration validation script.' - Here, 'have' is an:", options: ["Auxiliary Verb", "Principal Verb", "Infinitive Operator"], correct: 0 },
    { q: "74. 'The system does not overwrite database files arbitrarily.' - The word 'does' is an:", options: ["Action Verb", "Auxiliary Verb", "Non-Finite Form"], correct: 1 },
    { q: "75. Primary auxiliary verbs include various configurations of three core stems: Be, Do, and:", options: ["Have", "Can", "Will"], correct: 0 },
    { q: "76. 'He did complete the assignment challenge yesterday.' - Why is 'did' used here?", options: ["As a main action verb representing past tense.", "As an auxiliary verb used to add emphatic emphasis.", "It is syntactically redundant."], correct: 1 },
    { q: "77. Which helper verb sets the progressive continuous aspect paradigm?", options: ["Forms of 'Be' (is, am, are, was, were)", "Forms of 'Have' (has, have, had)", "Forms of 'Do' (do, does, did)"], correct: 0 },
    { q: "78. Which auxiliary configuration sets the perfect aspect paradigm structure?", options: ["Forms of 'Be'", "Forms of 'Have'", "Forms of 'Do'"], correct: 1 },
    { q: "79. What is the past tense (V2) of the static irregular verb 'Cost'?", options: ["Cost", "Costed", "Costs"], correct: 0 },
    { q: "80. Select the correct past participle form (V3) of the irregular verb 'Burst':", options: ["Bursted", "Burst", "Bursten"], correct: 1 },
    { q: "81. What is the past tense form (V2) of the irregular verb 'Blow'?", options: ["Blew", "Blown", "Blowed"], correct: 0 },
    { q: "82. Choose the correct past participle form (V3) of the verb 'Hide':", options: ["Hid", "Hidden", "Hided"], correct: 1 },
    { q: "83. What is the past tense form (V2) of the irregular verb 'Catch'?", options: ["Catched", "Caught", "Caughten"], correct: 1 },
    { q: "84. 'The bird has _______ away to the marshy nesting fields.' - Complete the blank:", options: ["flew", "flown", "flyed"], correct: 1 },
    { q: "85. What is the past participle form (V3) of the irregular verb 'Begin'?", options: ["Began", "Begun", "Beginned"], correct: 1 },
    { q: "86. Select the correct past tense form (V2) of the verb 'Begin':", options: ["Began", "Begun", "Beginned"], correct: 0 },
    { q: "87. What is the past participle form (V3) of the irregular verb 'Throw'?", options: ["Threw", "Thrown", "Throwed"], correct: 1 },
    { q: "88. 'The data system analyst has _______ the variable parameters.'", options: ["chosen", "chose", "choosed"], correct: 0 },
    { q: "89. What is the past tense form (V2) of the irregular verb 'Ride'?", options: ["Rided", "Rode", "Ridden"], correct: 1 },
    { q: "90. Choose the past participle form (V3) of the verb 'Ride':", options: ["Rode", "Ridden", "Rided"], correct: 1 },
    { q: "91. In 'He has a computer device', the word 'has' operates fundamentally as a:", options: ["Helping Auxiliary Verb", "Principal Main Verb indicating possession", "Defective Participle"], correct: 1 },
    { q: "92. 'They are computer science students.' - The word 'are' inside this sentence is a:", options: ["Helping Auxiliary Verb", "Linking Verb (Copula) showing state", "Transitive Action Verb"], correct: 1 },
    { q: "93. What is the past participle form (V3) of the irregular verb 'Shake'?", options: ["Shook", "Shaken", "Shaked"], correct: 1 },
    { q: "94. Select the past tense form (V2) of the irregular verb 'Shake':", options: ["Shook", "Shaken", "Shaked"], correct: 0 },
    { q: "95. What is the past participle form (V3) of the irregular verb 'Steal'?", options: ["Stole", "Stolen", "Stealed"], correct: 1 },
    { q: "96. Choose the past tense form (V2) of the irregular verb 'Tear'?", options: ["Tored", "Tore", "Torn"], correct: 1 },
    { q: "97. 'The structural blueprint sheet was _______ apart by mistake.'", options: ["tore", "torn", "teared"], correct: 1 },
    { q: "98. What is the past participle form (V3) of the irregular verb 'Swear'?", options: ["Swore", "Sworn", "Sweared"], correct: 1 },
    { q: "99. Select the past tense form (V2) of the irregular verb 'Grow':", options: ["Grew", "Grown", "Growed"], correct: 0 },
    { q: "100. What is the past participle form (V3) of the irregular verb 'Grow'?", options: ["Grew", "Grown", "Growed"], correct: 1 },

    // BATCH 3: Modal Auxiliary Operations & Functional Limits (101 - 150)
    { q: "101. Choose the syntactically correct statement option:", options: ["Run fast lest you will miss the train.", "Run fast lest you should miss the train.", "Run fast lest you may miss the train."], correct: 1 },
    { q: "102. Complete the subjunctive expression: 'He behaves as if he _______ the master root administrator.'", options: ["is", "was", "were"], correct: 2 },
    { q: "103. Which modal auxiliary is explicitly used to signify moral obligation or logical duty?", options: ["May", "Ought to", "Can"], correct: 1 },
    { q: "104. 'You _______ complete your full-stack documentation project on absolute schedule.'", options: ["must", "might", "could"], correct: 0 },
    { q: "105. '_______ you please assist me with configuring these CSS grid coordinates?'", options: ["Should", "Would", "May"], correct: 1 },
    { q: "106. Which modal operator is optimally designed to indicate a polite, formal permission request?", options: ["Can", "May", "Must"], correct: 1 },
    { q: "107. 'Work diligently lest the validation script _______ flag error exceptions.'", options: ["would", "should", "might"], correct: 1 },
    { q: "108. 'He talks as though he _______ an authority in computer graphics.'", options: ["is", "was", "were"], correct: 2 },
    { q: "109. Which modal signifies past habitual action pattern loops?", options: ["Should", "Used to / Would", "Must"], correct: 1 },
    { q: "110. 'If I were a technical wizard, I _______ optimize the entire platform routing.'", options: ["will", "would", "shall"], correct: 1 },
    { q: "111. 'You _______ not download unauthorized executable software files onto the system.'", options: ["must", "might", "could"], correct: 0 },
    { q: "112. '_______ God grant you sustainable success inside your educational initiatives!'", options: ["May", "Can", "Will"], correct: 0 },
    { q: "113. Which modal indicates structural internal capability or physical strength parameter limits?", options: ["May", "Can", "Must"], correct: 1 },
    { q: "114. 'When he was an MCA student, he _______ spend ten hours coding daily.'", options: ["will", "would", "ought"], correct: 1 },
    { q: "115. 'She _______ solve the tracking system issues when she was in office.'", options: ["can", "could", "may"], correct: 1 },
    { q: "116. 'It _______ rain heavily over New Delhi tonight; clouds are clustering.'", options: ["must", "may", "ought"], correct: 1 },
    { q: "117. 'You _______ respect your academic guides and senior computer instructors.'", options: ["can", "should / ought to", "might"], correct: 1 },
    { q: "118. Which modal auxiliary carries the lowest statistical probability parameter?", options: ["May", "Might", "Must"], correct: 1 },
    { q: "119. 'He practiced day and night so that he _______ clear the technical evaluation.'", options: ["may", "might", "will"], correct: 1 },
    { q: "120. 'We _______ to submit our registration blueprints before the deadline closes.'", options: ["must", "ought", "should"], correct: 1 },
    { q: "121. 'You _______ have informed the technical administrator before restarting the host system.'", options: ["should", "can", "may"], correct: 0 },
    { q: "122. Which modal functions as a semi-modal expressing absolute lack of courage or challenge defiance?", options: ["Need", "Dare", "Used to"], correct: 1 },
    { q: "123. 'You _______ not write any redundant style parameters; the file size limit is tight.'", options: ["need", "dare", "may"], correct: 0 },
    { q: "124. 'How _______ you overwrite my technical repository files without explicit consent?'", options: ["need", "dare", "should"], correct: 1 },
    { q: "125. 'If you run the conversion algorithm loop, it _______ process data files quickly.'", options: ["will", "would", "should"], correct: 0 },
    { q: "126. 'We _______ to have a minimalist 3D logo designed during our branding meeting.'", options: ["should", "used", "must"], correct: 1 },
    { q: "127. 'He entered the server room quietly lest the warning sirens _______ trigger.'", options: ["would", "should", "might"], correct: 1 },
    { q: "128. '_______ you have any questions, feel free to contact the computer teacher.'", options: ["Should", "Would", "May"], correct: 0 },
    { q: "129. 'I _______ rather construct the interface using clean HTML tags than use tools.'", options: ["will", "should", "would"], correct: 2 },
    { q: "130. 'You _______ not have purchased a new tablet device; the institutional one is working.'", options: ["need", "should", "must"], correct: 0 },
    { q: "131. Identify the modal that conveys a mandatory requirement or strict institutional rule:", options: ["May", "Can", "Must"], correct: 2 },
    { q: "132. 'Candidates _______ answer any five queries out of the total ten option blocks.'", options: ["must", "shall / may", "might"], correct: 1 },
    { q: "133. 'I am certain that the diagnostic analysis software _______ execute flawlessly.'", options: ["will", "would", "might"], correct: 0 },
    { q: "134. '_______ you mind checking the variable properties assignment inside the style script?'", options: ["Should", "Would", "Can"], correct: 1 },
    { q: "135. 'The logic schema is so simple that a beginner _______ comprehend it within minutes.'", options: ["can", "might", "should"], correct: 0 },
    { q: "136. 'He looks exhausted. He _______ have been debugging the loop framework all night.'", options: ["can", "must", "may"], correct: 1 },
    { q: "137. 'We _______ always backup our source directories before deploying updates.'", options: ["might", "should", "could"], correct: 1 },
    { q: "138. 'The data system validation routine _______ execute automatically if configured right.'", options: ["ought", "will", "might"], correct: 1 },
    { q: "139. '_______ I access the user dashboards layout directly from this portal terminal?'", options: ["May", "Must", "Will"], correct: 0 },
    { q: "140. 'He requested that he _______ be permitted to use the master laboratory.'", options: ["may", "might", "will"], correct: 1 },
    { q: "141. 'You _______ leave the classroom once you finish completing the quiz sheet.'", options: ["must", "may / can", "might"], correct: 1 },
    { q: "142. 'The consultation platform code structure _______ require minor updates next month.'", options: ["might", "must", "ought"], correct: 0 },
    { q: "143. 'He worked out with extreme intensity so that he _______ win the championship.'", options: ["may", "might", "will"], correct: 1 },
    { q: "144. 'We _______ not cross the railway tracking lines; it is dangerous.'", options: ["must", "need", "might"], correct: 0 },
    { q: "145. '_______ you live long and prosper in your web development career!'", options: ["May", "Can", "Will"], correct: 0 },
    { q: "146. 'I am checking if this software component _______ run smoothly on low-end tablets.'", options: ["can", "must", "ought"], correct: 0 },
    { q: "147. 'He _______ speak four languages fluently when he was living in Europe.'", options: ["can", "could", "may"], correct: 1 },
    { q: "148. 'You _______ go there now; the server supervisor is waiting for your file updates.'", options: ["should", "might", "could"], correct: 0 },
    { q: "149. '_______ the balance scores match up, the game engine automatically unlocks level two.'", options: ["Should", "Would", "May"], correct: 0 },
    { q: "150. Which modal auxiliary functions primarily to convey a regular necessity or urgent requirement?", options: ["Must", "May", "Could"], correct: 0 },

    // BATCH 4: Finite vs Non-Finite Verb Systems (151 - 200)
    { q: "151. Underline the non-finite verb category in: 'Coding helps develop logical tracking parameters.'", options: ["helps (Finite)", "Coding (Gerund Non-Finite)", "develop (Infinitive Non-Finite)"], correct: 1 },
    { q: "152. Find the non-finite participle modifier in: 'I found a broken database link inside the file directory.'", options: ["found", "broken", "inside"], correct: 1 },
    { q: "153. 'He wants to learn full-stack web development.' - The underlined component 'to learn' is a/an:", options: ["Finite Verb", "Infinitive Non-Finite", "Gerund Operator"], correct: 1 },
    { q: "154. 'Debugging requires immense patience and extreme focus.' - The word 'Debugging' acts as a/an:", options: ["Present Participle Adjective", "Gerund functioning as a Noun Subject", "Finite Action Verb"], correct: 1 },
    { q: "155. Choose the correct bare infinitive structure variation for active voice format expressions:", options: ["He made me to rewrite the script.", "He made me rewrite the script.", "He made me rewriting the script."], correct: 1 },
    { q: "156. 'The teacher watched the students execute the tracking game code.' - 'execute' is a:", options: ["Bare Infinitive", "To-Infinitive", "Gerund Modifier"], correct: 0 },
    { q: "157. Identify the verbal component: 'The smiling computer teacher guided the class.' - 'smiling' is a:", options: ["Gerund", "Present Participle acting as an Adjective", "Finite Action Verb"], correct: 1 },
    { q: "158. 'Having completed the registration phase, the patient waited for the doctor.' - 'Having completed' is a:", options: ["Perfect Participle", "Present Participle", "Gerund Loop"], correct: 0 },
    { q: "159. 'Swimming is an excellent physical conditioning exercise.' - The word 'Swimming' functions as a:", options: ["Noun (Gerund Subject)", "Adjective (Participle)", "Finite Action Copula"], correct: 0 },
    { q: "160. 'The instructor enjoys teaching complex semantic grid rules.' - The word 'teaching' is a:", options: ["Finite Verb", "Gerund functioning as Object of the Verb", "Infinitive String"], correct: 1 },
    { q: "161. 'We went to the local authority office to verify our registration details.' - 'to verify' is a:", options: ["Finite Connector", "Infinitive of Purpose", "Gerund Complement"], correct: 1 },
    { q: "162. Identify the finite verb: 'They want to upgrade their tablet computing applications.'", options: ["want", "to upgrade", "their"], correct: 0 },
    { q: "163. 'Hearing the emergency warning alarm sirens, the technician rushed to the server hub.' - 'Hearing' is a:", options: ["Gerund Noun", "Present Participle Clause Modifier", "Finite Operational Verb"], correct: 1 },
    { q: "164. 'The software script was difficult to debug without proper inline variable documentation.' - 'to debug' is a:", options: ["Gerund Modifier", "Infinitive modifying an Adjective", "Finite Predicate Head"], correct: 1 },
    { q: "165. 'I object to overriding existing parameters without testing.' - The word 'overriding' here is a:", options: ["Participle", "Gerund following a Preposition", "Infinitive Stem"], correct: 1 },
    { q: "166. Choose the correct structural selection: 'It is no use _______ over an unrecoverable system crash.'", options: ["to cry", "crying", "cryed"], correct: 1 },
    { q: "167. 'The project manager let the senior analyst design the 3D brand logo.' - 'design' is a:", options: ["Bare Infinitive", "To-Infinitive", "Gerund Complement"], correct: 0 },
    { q: "168. 'The system files require immediate processing.' - The word 'processing' acts as a:", options: ["Participle Adjective", "Gerund Object", "Finite Event Head"], correct: 1 },
    { q: "169. 'The programmer spent three hours trying to locate the logic error.' - 'trying' is a:", options: ["Finite Verb", "Participle Complement structure", "Gerund Subject"], correct: 1 },
    { q: "170. 'A fading variable definition can cause validation script execution loops to drop.' - 'fading' is a:", options: ["Gerund", "Present Participle Adjective", "Finite Action Stem"], correct: 1 },
    { q: "171. Identify the non-finite verb layout framework variant: 'To error is human, to forgive divine.'", options: ["Both 'To error' and 'To forgive' are Infinitives", "Both are Gerunds", "They are Finite Stems"], correct: 0 },
    { q: "172. 'I noticed the technical team working diligently on balancing the server loads.' - 'working' is a:", options: ["Gerund", "Present Participle Complement", "Finite Continuous Extension"], correct: 1 },
    { q: "173. 'The master registration data sheets are kept inside the locked cabinet box.' - 'locked' is a:", options: ["Past Participle acting as an Adjective", "Gerund Modifier", "Finite Past Tense Head"], correct: 0 },
    { q: "174. 'Having verified the prefix configurations, he closed the text editor module.' - Identify the verbal:", options: ["Having verified (Perfect Participle)", "closed (Non-Finite Verb)", "editor (Gerund)"], correct: 0 },
    { q: "175. 'He is fond of collecting vintage computer architecture textbooks.' - 'collecting' functions as a:", options: ["Participle Adjective", "Gerund as Object of Preposition 'of'", "Finite progressive event"], correct: 1 },
    { q: "176. 'The executive manager bade the candidate submit his honors diploma credentials.' - 'submit' is a:", options: ["Bare Infinitive", "To-Infinitive String", "Gerund Layout"], correct: 0 },
    { q: "177. 'The student preparation course requires rigorous training.' - 'training' acts as a/an:", options: ["Adjective Modifier", "Gerund Noun Object", "Action Event Mode"], correct: 1 },
    { q: "178. Select the error-free non-finite verbal application phrase variation:", options: ["He is looking forward to meet the principal.", "He is looking forward to meeting the principal.", "He is looking forward meet the principal."], correct: 1 },
    { q: "179. 'The code analysis tool is used for identifying logic flaws.' - 'identifying' is a:", options: ["Participle Element", "Gerund Object of the Preposition 'for'", "Finite Aspect Head"], correct: 1 },
    { q: "180. 'To check the code loop condition is highly essential before compiler deployment.' - 'To check' is a:", options: ["Infinitive Noun Subject", "Gerund Modifier Phrase", "Finite Action Clause"], correct: 0 },
    { q: "181. 'The historical city features many fascinating tourist locations.' - 'fascinating' is a:", options: ["Gerund Noun", "Present Participle Adjective", "Finite Passive Target"], correct: 1 },
    { q: "182. 'The consultation team succeeded in resolving the dashboard errors.' - 'resolving' is a:", options: ["Infinitive Clause", "Gerund following Preposition 'in'", "Participle Target Modifier"], correct: 1 },
    { q: "183. Identify the infinitive category format: 'He was selected to coordinate the game design team.'", options: ["to coordinate (To-Infinitive)", "selected (Infinitive)", "team (Bare Infinitive)"], correct: 0 },
    { q: "184. 'Seeing is believing.' - In this philosophical grammar statement, the two words are:", options: ["Both are Present Participles", "Both are Gerunds functioning as Subject and Complement", "They are Finite Aspects"], correct: 1 },
    { q: "185. 'The target platform avoids saving temporary session cache buffers.' - 'saving' functions as a:", options: ["Participle Modifier", "Gerund Object of the transitive verb 'avoids'", "Finite Event Component"], correct: 1 },
    { q: "186. 'The structural support pillars are showing signs of cracking.' - 'cracking' here acts as a:", options: ["Participle Adjective", "Gerund Noun", "Finite Aspect Marker"], correct: 1 },
    { q: "187. 'The candidate spent his evening compiling his portfolio sample data.' - 'compiling' is a:", options: ["Gerund", "Present Participle acting as a Modifier Complement", "Finite Continuous Verb"], correct: 1 },
    { q: "188. 'A burnt child dreads fire.' - The word 'burnt' inside this proverb functions as a:", options: ["Past Participle used Adjectively", "Gerund Subject Modifier", "Finite Past Target Event"], correct: 0 },
    { q: "189. 'He expects his students to achieve outstanding grades in computer applications.' - 'to achieve' is a:", options: ["Gerund Complement", "To-Infinitive Modifier", "Finite Subordinate Operator"], correct: 1 },
    { q: "190. 'The validation script framework stopped executing due to parameter index truncation.' - 'executing' is a:", options: ["Participle Adjective", "Gerund Object of the verb 'stopped'", "Finite Progressive Marker"], correct: 1 },
    { q: "191. Choose the grammatically sound format variant containing a conditional verbal modifier:", options: ["Weather permitting, the technical launch will proceed tomorrow.", "Weather permitted, the technical launch will proceed tomorrow.", "To weather permit, the technical launch will proceed."], correct: 0 },
    { q: "192. 'The platform administrator ordered the script to run in safe container mode.' - 'to run' is a:", options: ["Gerund Extension", "Infinitive acting as Object Complement", "Finite Aspect Shift"], correct: 1 },
    { q: "193. 'Barking dogs seldom bite.' - The word 'Barking' inside this textbook phrase functions as a:", options: ["Gerund Noun Head", "Present Participle Adjective Modifying 'dogs'", "Finite Predicate Opening"], correct: 1 },
    { q: "194. 'The full-stack system requires the administrator to authenticate his profile identity.' - 'to authenticate' is:", options: ["Gerund Modifier", "To-Infinitive Phrase", "Finite Auxiliary Mode"], correct: 1 },
    { q: "195. 'The medical expert enjoys analyzing complex patient diagnostic reports.' - 'analyzing' is a:", options: ["Finite Action Head", "Gerund operating as Direct Object", "Present Participle Adjective"], correct: 1 },
    { q: "196. 'The dynamic balancing algorithm prevents the server from overloading.' - 'overloading' is a:", options: ["Participle Modifier", "Gerund Noun acting as Object of Preposition 'from'", "Finite Progressive Target"], correct: 1 },
    { q: "197. 'Driven by extreme poverty, the old worker left his native farming village.' - 'Driven' functions as a:", options: ["Past Participle phrase introductory modifier", "Gerund Subject Block", "Finite Past Passive Verb"], correct: 0 },
    { q: "198. 'He managed to complete the 3D logo design rendering routine inside an hour.' - 'to complete' is a:", options: ["Gerund Noun Complement", "To-Infinitive operating as Direct Object", "Finite Operational Target"], correct: 1 },
    { q: "199. 'The primary validation loop requires manual checking before execution cycles begin.' - 'checking' is a:", options: ["Participle Descriptor", "Gerund Object of the verb 'requires'", "Finite Aspect Marker"], correct: 1 },
    { q: "200. Which verbal component type behaves simultaneously as an action engine and a noun head parameter inside text schemas?", options: ["The Participle Adjective modifier", "The Gerund", "The Finite Verb Copula"], correct: 1 }
  ]
};
