/**
 * Gpronoun.js - Total English Grammar Solution
 * Topic: Pronouns (Classification, Person-Number-Case Paradigm & Advanced Syntax Rules)
 */

if (typeof English === 'undefined') { window.English = {}; }

English.pronoun = {
    title: "The Pronoun: Core & Advanced Grammar 🔄",
    content: `
        <section style="text-align: left; padding: 10px; font-family: 'Segoe UI', sans-serif;">
            
            <!-- 1. Core Concept -->
            <div style="background: #fdf2f8; padding: 25px; border-radius: 25px; border-left: 10px solid #ec4899; margin-bottom: 30px;">
                <h2 style="color: #9d174d; font-size: 2.2rem; margin-top:0;">1. What is a Pronoun?</h2>
                <p style="font-size: 1.3rem; line-height: 1.8;">
                    A <b>Pronoun</b> is a word used in place of a noun to avoid awkward repetition. It acts as a substitute head for noun phrases.
                    <br><br>
                    <i>Example:</i> "Instead of saying: <b>Prashant</b> made a quiz app because <b>Prashant</b> wanted to help students," we say: "<b>Prashant</b> made a quiz app because <b>he</b> wanted to help them."
                </p>
            </div>

            <!-- 2. Master Case & Person Chart (Crucial for All Classes) -->
            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #ec4899; display: inline-block; margin-bottom: 20px;">2. Personal Pronouns Paradigm</h2>
            <p style="font-size: 1.2rem; line-height: 1.6;">Personal pronouns change their form based on their grammatical case:</p>
            
            <div style="overflow-x: auto; margin-bottom: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); border-radius: 15px;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; background: white; font-size: 1.1rem;">
                    <thead>
                        <tr style="background: #f3f4f6; border-bottom: 2px solid #e5e7eb;">
                            <th style="padding: 12px; color: #374151;">Person</th>
                            <th style="padding: 12px; color: #374151;">Subjective Case</th>
                            <th style="padding: 12px; color: #374151;">Objective Case</th>
                            <th style="padding: 12px; color: #374151;">Possessive Pronoun</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid #f3f4f6;">
                            <td style="padding: 12px; font-weight: bold;">1st Person (Speaker)</td>
                            <td style="padding: 12px; color: #2563eb;">I / We</td>
                            <td style="padding: 12px; color: #059669;">Me / Us</td>
                            <td style="padding: 12px; color: #d97706;">Mine / Ours</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f3f4f6;">
                            <td style="padding: 12px; font-weight: bold;">2nd Person (Listener)</td>
                            <td style="padding: 12px; color: #2563eb;">You</td>
                            <td style="padding: 12px; color: #059669;">You</td>
                            <td style="padding: 12px; color: #d97706;">Yours</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; font-weight: bold;">3rd Person (Spoken of)</td>
                            <td style="padding: 12px; color: #2563eb;">He / She / It / They</td>
                            <td style="padding: 12px; color: #059669;">Him / Her / It / Them</td>
                            <td style="padding: 12px; color: #d97706;">His / Hers / Its / Theirs</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- 3. Key Classifications -->
            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #8b5cf6; display: inline-block; margin-bottom: 20px;">3. Core Classifications</h2>
            <div style="background: white; padding: 20px; border-radius: 20px; border: 1px solid #eee; line-height: 1.8; box-shadow: 0 4px 10px rgba(0,0,0,0.05); margin-bottom: 30px;">
                <p style="font-size: 1.2rem;"><b>1. Relative Pronoun (संबंधवाचक):</b> Connects clauses and refers back to a noun.<br><i>Examples:</i> The teacher <u>who</u> guided me. / The code <u>which</u> failed.</p>
                <hr>
                <p style="font-size: 1.2rem;"><b>2. Demonstrative Pronoun (संकेतवाचक):</b> Points out specific objects.<br><i>Examples:</i> <u>This</u> is a great dashboard. / <u>Those</u> are files.</p>
                <hr>
                <p style="font-size: 1.2rem;"><b>3. Reflexive & Emphatic (निजवाचक):</b> Words ending in '-self' or '-selves'.<br><i>Examples:</i> He checked the server <u>himself</u>. (Emphatic) / She hurt <u>herself</u>. (Reflexive)</p>
                <hr>
                <p style="font-size: 1.2rem;"><b>4. Indefinite Pronoun (अनिश्चयवाचक):</b> Refers to non-specific people or things.<br><i>Examples:</i> <u>Someone</u> added a file. / <u>Everyone</u> is ready.</p>
            </div>

            <!-- 4. Advanced Syntax & Placement Orders (Class 11 & 12 Boards) -->
            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #ef4444; display: inline-block; margin-bottom: 20px;">4. Pronoun Syntax Rules (High School Exceptions)</h2>
            <div style="background: #fffbeb; padding: 25px; border-radius: 20px; border-left: 5px solid #f59e0b; line-height: 1.8;">
                <p style="font-size: 1.2rem; margin-top:0;"><b>The Arrangement Order Formula:</b></p>
                <ul style="font-size: 1.15rem; padding-left: 20px;">
                    <li><b>Rule 231 (Normal Situations):</b> When pronouns of different persons are combined, the order must be <b>2nd Person ➔ 3rd Person ➔ 1st Person</b>.<br><i>Example:</i> <u>You, he, and I</u> are developing this application.</li>
                    <li><b>Rule 123 (Negative/Blame Situations):</b> If a mistake or confession is involved, the sequence flips to <b>1st Person ➔ 2nd Person ➔ 3rd Person</b>.<br><i>Example:</i> <u>I, you, and he</u> made the variable error.</li>
                </ul>
                <hr>
                <p style="font-size: 1.2rem;"><b>Critical Board Exam Pitfalls:</b></p>
                <ul style="font-size: 1.15rem; padding-left: 20px; color: #b45309;">
                    <li>❌ It is me who did it. ➔  It is <b>I</b> who did it. (Use subjective case after 'to be' verbs).</li>
                    <li>❌ Between you and I, the logic is correct. ➔  Between you and <b>me</b>... (Use objective case after prepositions).</li>
                    <li>❌ Everyone should backup their data. ➔  Everyone should backup <b>his or her</b> data. (Indefinite singular coordinates).</li>
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
    /* --- Gpronoun.js: 200 Pure Pronouns Questions --- */

quizData: [
    // BATCH 1: Identifying Types of Pronouns (1 - 50)
    { q: "1. Identify the relative pronoun: 'The app which you designed functions perfectly.'", options: ["you", "which", "app"], correct: 1 },
    { q: "2. What type of pronoun is 'Who' in: 'Who verified the database files?'", options: ["Relative Pronoun", "Interrogative Pronoun", "Demonstrative Pronoun"], correct: 1 },
    { q: "3. Identify the pronoun type: 'This is the laptop my father gifted me.'", options: ["Demonstrative Pronoun", "Indefinite Pronoun", "Reflexive Pronoun"], correct: 0 },
    { q: "4. 'The students solved the mathematical puzzle themselves.' - Here, 'themselves' is a:", options: ["Reflexive Pronoun", "Emphatic Pronoun", "Relative Pronoun"], correct: 0 },
    { q: "5. 'The teacher himself checked the assignment notebooks.' - Here, 'himself' acts as an:", options: ["Emphatic Pronoun", "Reflexive Pronoun", "Indefinite Pronoun"], correct: 0 },
    { q: "6. Which of the following words is an indefinite pronoun?", options: ["Those", "Somebody", "Whom"], correct: 1 },
    { q: "7. 'That is the majestic peak of the Himalayas.' - The word 'That' is a:", options: ["Demonstrative Pronoun", "Relative Pronoun", "Personal Pronoun"], correct: 0 },
    { q: "8. 'Whose bag is left on the teacher's desk?' - The word 'Whose' is an:", options: ["Interrogative Pronoun", "Relative Pronoun", "Possessive Pronoun"], correct: 0 },
    { q: "9. 'We love our country.' - In this sentence, the word 'We' is a:", options: ["Personal Pronoun", "Demonstrative Pronoun", "Relative Pronoun"], correct: 0 },
    { q: "10. 'The lady whom you met yesterday is a computer teacher.' - The word 'whom' is a:", options: ["Relative Pronoun", "Interrogative Pronoun", "Distributive Pronoun"], correct: 0 },
    { q: "11. Identify the distributive pronoun from the options below:", options: ["Each", "All", "Some"], correct: 0 },
    { q: "12. 'None of the strategies yielded any positive result.' - The word 'None' is an:", options: ["Indefinite Pronoun", "Distributive Pronoun", "Personal Pronoun"], correct: 0 },
    { q: "13. 'They are preparing for their final examinations.' - The word 'They' is a:", options: ["Third Person Pronoun", "First Person Pronoun", "Second Person Pronoun"], correct: 0 },
    { q: "14. 'What do you want to build using HTML and CSS?' - The word 'What' is an:", options: ["Interrogative Pronoun", "Relative Pronoun", "Demonstrative Pronoun"], correct: 0 },
    { q: "15. 'These are the minimalist 3D logos designed for the brand.' - Here, 'These' is a:", options: ["Demonstrative Pronoun", "Possessive Pronoun", "Relative Pronoun"], correct: 0 },
    { q: "16. 'Either of the two pathways leads to the main dashboard.' - The word 'Either' is a:", options: ["Distributive Pronoun", "Indefinite Pronoun", "Relative Pronoun"], correct: 0 },
    { q: "17. 'Many were invited to the online consultation, but few came.' - Here, 'Many' is an:", options: ["Indefinite Pronoun", "Demonstrative Pronoun", "Personal Pronoun"], correct: 0 },
    { q: "18. 'The house whose roof was damaged has been repaired.' - The word 'whose' here acts as a:", options: ["Relative Pronoun", "Interrogative Pronoun", "Emphatic Pronoun"], correct: 0 },
    { q: "19. 'She speaks English fluently.' - The word 'She' belongs to which category?", options: ["Personal Pronoun", "Relative Pronoun", "Reflexive Pronoun"], correct: 0 },
    { q: "20. 'Neither of the code snippets contains any syntax error.' - The word 'Neither' is a:", options: ["Distributive Pronoun", "Indefinite Pronoun", "Relative Pronoun"], correct: 0 },
    { q: "21. 'You should always believe in yourself.' - In this sentence, 'yourself' is a:", options: ["Reflexive Pronoun", "Emphatic Pronoun", "Personal Pronoun"], correct: 0 },
    { q: "22. 'All of the quiz questions are meticulously verified.' - The word 'All' functions as an:", options: ["Indefinite Pronoun", "Distributive Pronoun", "Demonstrative Pronoun"], correct: 0 },
    { q: "23. Choose the interrogative pronoun: 'Which is your favorite educational game?'", options: ["Which", "your", "favorite"], correct: 0 },
    { q: "24. 'Those are the birds that migrate from Siberia.' - The word 'Those' is a:", options: ["Demonstrative Pronoun", "Personal Pronoun", "Relative Pronoun"], correct: 0 },
    { q: "25. 'One must do one's duty carefully.' - In this sentence, the word 'One' is an:", options: ["Indefinite Pronoun", "Personal Pronoun", "Distributive Pronoun"], correct: 0 },
    { q: "26. 'The two rival teams played aggressively against each other.' - 'each other' is a:", options: ["Reciprocal Pronoun", "Reflexive Pronoun", "Demonstrative Pronoun"], correct: 0 },
    { q: "27. 'The students helped one another during the practical lab.' - 'one another' is a:", options: ["Reciprocal Pronoun", "Indefinite Pronoun", "Distributive Pronoun"], correct: 0 },
    { q: "28. 'Is there anything inside the locker?' - The word 'anything' is an:", options: ["Indefinite Pronoun", "Interrogative Pronoun", "Relative Pronoun"], correct: 0 },
    { q: "29. 'The old man walked across the busy road by himself.' - Here, 'himself' is a:", options: ["Reflexive Pronoun", "Emphatic Pronoun", "Personal Pronoun"], correct: 0 },
    { q: "30. 'Who engineered the backend engine framework?' - The word 'Who' is an:", options: ["Interrogative Pronoun", "Relative Pronoun", "Indefinite Pronoun"], correct: 0 },
    { q: "31. 'The balance score sheet which you generated is accurate.' - 'which' is a:", options: ["Relative Pronoun", "Interrogative Pronoun", "Demonstrative Pronoun"], correct: 0 },
    { q: "32. Identify the pronoun in: 'Few escaped the system crash without data loss.'", options: ["Few", "escaped", "system"], correct: 0 },
    { q: "33. 'This book is mine; that one is yours.' - The word 'mine' is a:", options: ["Possessive Pronoun", "Personal Pronoun", "Demonstrative Pronoun"], correct: 0 },
    { q: "34. 'The script itself is flawless, but the layout needs adjustment.' - 'itself' is an:", options: ["Emphatic Pronoun", "Reflexive Pronoun", "Relative Pronoun"], correct: 0 },
    { q: "35. 'Whom did the principal nominate for the honors diploma?' - 'Whom' is an:", options: ["Interrogative Pronoun", "Relative Pronoun", "Personal Pronoun"], correct: 0 },
    { q: "36. 'The dynamic interface that you created works flawlessly.' - The word 'that' is a:", options: ["Relative Pronoun", "Demonstrative Pronoun", "Conjunction"], correct: 0 },
    { q: "37. 'Someone has deliberately tampered with the file tags.' - 'Someone' is an:", options: ["Indefinite Pronoun", "Personal Pronoun", "Distributive Pronoun"], correct: 0 },
    { q: "38. 'Each of the participants received a certificate.' - The word 'Each' is a:", options: ["Distributive Pronoun", "Indefinite Pronoun", "Relative Pronoun"], correct: 0 },
    { q: "39. 'This minimalist design is hers.' - In this statement, 'hers' is a:", options: ["Possessive Pronoun", "Personal Pronoun", "Demonstrative Pronoun"], correct: 0 },
    { q: "40. 'What an absolute display of talent it was!' - The word 'What' here is used as an:", options: ["Exclamatory Pronoun", "Interrogative Pronoun", "Relative Pronoun"], correct: 0 },
    { q: "41. 'They themselves confessed their mistake in the algorithm.' - 'themselves' is an:", options: ["Emphatic Pronoun", "Reflexive Pronoun", "Personal Pronoun"], correct: 0 },
    { q: "42. 'The book whose author won the prize is selling fast.' - The word 'whose' is a:", options: ["Relative Pronoun", "Interrogative Pronoun", "Possessive Adjective"], correct: 0 },
    { q: "43. Find the indefinite pronoun: 'Nobody can solve this complex equation.'", options: ["Nobody", "solve", "equation"], correct: 0 },
    { q: "44. 'These mangoes are sweet, but those are sour.' - The word 'those' functions as a:", options: ["Demonstrative Pronoun", "Personal Pronoun", "Distributive Pronoun"], correct: 0 },
    { q: "45. 'I completed the registration framework myself.' - The word 'myself' is a:", options: ["Reflexive Pronoun", "Emphatic Pronoun", "Personal Pronoun"], correct: 0 },
    { q: "46. 'Everything is systematically aligned in the directory.' - 'Everything' is an:", options: ["Indefinite Pronoun", "Distributive Pronoun", "Demonstrative Pronoun"], correct: 0 },
    { q: "47. 'Which of these configurations do you prefer?' - The word 'Which' is an:", options: ["Interrogative Pronoun", "Relative Pronoun", "Demonstrative Pronoun"], correct: 0 },
    { q: "48. 'The doctor whom we consulted yesterday is very experienced.' - 'whom' is a:", options: ["Relative Pronoun", "Interrogative Pronoun", "Personal Pronoun"], correct: 0 },
    { q: "49. 'Ours is a country with rich cultural diversity.' - The word 'Ours' is a:", options: ["Possessive Pronoun", "Personal Pronoun", "Demonstrative Pronoun"], correct: 0 },
    { q: "50. 'Either option is viable, but neither is perfect.' - The word 'neither' acts as a:", options: ["Distributive Pronoun", "Indefinite Pronoun", "Relative Pronoun"], correct: 0 },

    // BATCH 2: Person, Number, and Case Paradigms (51 - 100)
    { q: "51. Complete the sentence: 'Between you and _______, the system configuration is stable.'", options: ["I", "me", "myself"], correct: 1 },
    { q: "52. 'He gave a set of instructions to my brother and _______.' - Fill the blank:", options: ["I", "me", "myself"], correct: 1 },
    { q: "53. Which of the following pronouns belongs to the First Person Plural category?", options: ["I", "We", "They"], correct: 1 },
    { q: "54. Identify the objective case form of the pronoun 'She':", options: ["Her", "Hers", "Herself"], correct: 0 },
    { q: "55. 'It was _______ who verified the diagnostic reports.' - Choose the correct case:", options: ["he", "him", "himself"], correct: 0 },
    { q: "56. What is the possessive pronoun corresponding to 'They'?", options: ["Their", "Theirs", "Them"], correct: 1 },
    { q: "57. 'Let you and _______ initiate the server backup procedure.' - Select the correct pronoun:", options: ["I", "me", "myself"], correct: 1 },
    { q: "58. Which of the following is a Second Person pronoun form?", options: ["You", "He", "Us"], correct: 0 },
    { q: "59. 'No one but _______ attended the special grammar lecture.' - Fill the blank:", options: ["he", "him", "himself"], correct: 1 },
    { q: "60. Choose the correct objective case form of 'Who':", options: ["Whose", "Whom", "Whoever"], correct: 1 },
    { q: "61. 'The principal praised the programmers, explicitly including _______.'", options: ["he", "him", "himself"], correct: 1 },
    { q: "62. What is the subjective case form of the objective pronoun 'us'?", options: ["I", "We", "Our"], correct: 1 },
    { q: "63. 'The secret must remain strictly between her and _______.' - Fill the blank:", options: ["them", "they", "themselves"], correct: 0 },
    { q: "64. 'It might have been _______ who modified the style properties.'", options: ["she", "her", "herself"], correct: 0 },
    { q: "65. Which pronoun is used in the neuter gender singular form?", options: ["He", "She", "It"], correct: 2 },
    { q: "66. 'They invited my family and _______ to the tech seminar.'", options: ["I", "me", "myself"], correct: 1 },
    { q: "67. 'Nobody but _______ knows the decryption algorithm key.'", options: ["she", "her", "herself"], correct: 1 },
    { q: "68. What is the possessive pronoun form of 'We'?", options: ["Our", "Ours", "Us"], correct: 1 },
    { q: "69. 'Are you confident that the strategy was executed by _______?'", options: ["they", "them", "themselves"], correct: 1 },
    { q: "70. Choose the subjective case form required after comparison: 'He is taller than _______.'", options: ["me", "I", "myself"], correct: 1 },
    { q: "71. 'She can write code as fast as _______.' - Complete the statement:", options: ["him", "he", "himself"], correct: 1 },
    { q: "72. 'Let _______ handle the database synchronization phase.'", options: ["we", "us", "ourselves"], correct: 1 },
    { q: "73. Identify the objective case pronoun in: 'The teacher called them into the laboratory.'", options: ["teacher", "called", "them"], correct: 2 },
    { q: "74. 'The responsibility is completely _______.' - Choose the possessive pronoun:", options: ["your", "yours", "your's"], correct: 1 },
    { q: "75. Which pronoun represents the third person plural subjective case?", options: ["Them", "They", "Their"], correct: 1 },
    { q: "76. 'Except you and _______, everyone submitted the documentation code.'", options: ["he", "him", "himself"], correct: 1 },
    { q: "77. 'It is _______ who designed the interactive math game framework.'", options: ["I", "me", "myself"], correct: 0 },
    { q: "78. What is the objective case of the relative pronoun 'that'?", options: ["that", "those", "which"], correct: 0 },
    { q: "79. 'The laptop screen belongs to my colleague, not to _______.'", options: ["I", "me", "mine"], correct: 1 },
    { q: "80. 'If I were _______, I would deploy the application instantly.'", options: ["he", "him", "his"], correct: 0 },
    { q: "81. Which pronoun changes its form completely in the objective case?", options: ["You", "It", "I"], correct: 2 },
    { q: "82. 'The manager assigned the task to Suresh and _______.'", options: ["she", "her", "herself"], correct: 1 },
    { q: "83. 'They run the operational loops much better than _______.'", options: ["we", "us", "ours"], correct: 0 },
    { q: "84. Identify the subjective case pronoun: 'You, she, and I must corporate.'", options: ["You", "she", "All options are subjective case pronouns"], correct: 2 },
    { q: "85. What is the objective form of the masculine singular personal pronoun?", options: ["He", "His", "Him"], correct: 2 },
    { q: "86. 'The dynamic system automatically logs you and _______ out after ten minutes.'", options: ["I", "me", "myself"], correct: 1 },
    { q: "87. 'Who is standing at the door? It is _______.'", options: ["I", "me", "myself"], correct: 0 },
    { q: "88. 'We must stand by our commitments, and they must stand by _______.'", options: ["their", "theirs", "them"], correct: 1 },
    { q: "89. Select the third person singular feminine subjective case pronoun:", options: ["She", "Her", "Hers"], correct: 0 },
    { q: "90. 'The software platform belongs to the school, so the credit is _______.'", options: ["their", "theirs", "them"], correct: 1 },
    { q: "91. 'Let there be no dispute between you and _______.'", options: ["she", "her", "herself"], correct: 1 },
    { q: "92. 'He works harder than _______ does.' - Complete using structural symmetry:", options: ["me", "I", "myself"], correct: 1 },
    { q: "93. What is the objective case matching the personal pronoun 'it'?", options: ["its", "it", "itself"], correct: 1 },
    { q: "94. 'The client sent the verification parameters directly to _______.'", options: ["we", "us", "ours"], correct: 1 },
    { q: "95. 'It was clearly _______ who initiated the diagnostic testing process.'", options: ["they", "them", "their"], correct: 0 },
    { q: "96. Find the objective pronoun: 'The computer teacher taught us JavaScript logic.'", options: ["teacher", "taught", "us"], correct: 2 },
    { q: "97. 'This minimalist portfolio is completely _______.'", options: ["mine", "my", "myself"], correct: 0 },
    { q: "98. 'Sita is as qualified for the full-stack role as _______.'", options: ["she", "her", "herself"], correct: 0 },
    { q: "99. 'Suresh and _______ are debugging the application code.'", options: ["I", "me", "myself"], correct: 0 },
    { q: "100. What form is 'Ourselves' classified as under case parameters?", options: ["Subjective", "Objective", "Compound Personal (Reflexive/Emphatic)"], correct: 2 },

    // BATCH 3: Relative & Interrogative Pronoun Mechanics (101 - 150)
    { q: "101. 'This is the programmer _______ cracked the complex algorithmic challenge.'", options: ["who", "whom", "which"], correct: 0 },
    { q: "102. 'The presentation template _______ you selected looks highly professional.'", options: ["who", "which", "whom"], correct: 1 },
    { q: "103. 'The professional scholar _______ book you are reviewing is an MCA graduate.'", options: ["who", "whose", "whom"], correct: 1 },
    { q: "104. 'The candidate _______ the committee selected has excellent credentials.'", options: ["who", "whose", "whom"], correct: 2 },
    { q: "105. 'I have verified all the dynamic data blocks _______ were missing.'", options: ["who", "that", "whom"], correct: 1 },
    { q: "106. '_______ did you see at the online consultation dashboard desk?'", options: ["Who", "Whom", "Which"], correct: 1 },
    { q: "107. '_______ of these three minimalist layout concepts do you prefer?'", options: ["Who", "Whom", "Which"], correct: 2 },
    { q: "108. 'The school team _______ wins the coding championship will receive a trophy.'", options: ["that", "who", "whom"], correct: 0 },
    { q: "109. 'Here is the laptop _______ configurations you requested.'", options: ["whose", "which", "that"], correct: 0 },
    { q: "110. 'Take _______ option suits your implementation workflow best.'", options: ["whichever", "whoever", "whomever"], correct: 0 },
    { q: "111. '_______ is the absolute objective function of this algorithm logic?'", options: ["Who", "What", "Which"], correct: 1 },
    { q: "112. 'The computer instructor _______ gave me this notebook has returned to Delhi.'", options: ["who", "whom", "which"], correct: 0 },
    { q: "113. 'The system files _______ were uploaded onto the server are secure.'", options: ["who", "which/that", "whom"], correct: 1 },
    { q: "114. 'To _______ should the data validation message be sent?'", options: ["who", "whom", "whose"], correct: 1 },
    { q: "115. '_______ broke the global text variable validation schema?'", options: ["Who", "Whom", "Which"], correct: 0 },
    { q: "116. 'The user profile _______ password was reset needs to re-authenticate.'", options: ["which", "whose", "that"], correct: 1 },
    { q: "117. 'Listen carefully to _______ the technical guide states.'", options: ["what", "which", "that"], correct: 0 },
    { q: "118. 'The exact strategy _______ they adopted failed completely.'", options: ["who", "that", "whom"], correct: 1 },
    { q: "119. '_______ are you speaking to over the communications system?'", options: ["Who", "Whom", "Which"], correct: 1 },
    { q: "120. 'Give the supplementary material to _______ requests it first.'", options: ["whoever", "whomever", "whichever"], correct: 0 },
    { q: "121. 'The historical monument, _______ we visited last summer, is stunning.'", options: ["who", "which", "whom"], correct: 1 },
    { q: "122. '_______ wrote the documentation template for the quiz engine app?'", options: ["Who", "Whom", "Which"], correct: 0 },
    { q: "123. 'The file prefix constraint, _______ was introduced yesterday, is working.'", options: ["who", "which", "whom"], correct: 1 },
    { q: "124. 'The client _______ requirement parameters were updated is satisfied.'", options: ["who", "whose", "whom"], correct: 1 },
    { q: "125. '_______ of these digital branding layouts looks more minimalist?'", options: ["Who", "What", "Which"], correct: 2 },
    { q: "126. 'I do not clearly comprehend _______ you mean by this code logic.'", options: ["what", "which", "that"], correct: 0 },
    { q: "127. 'The dynamic script will execute _______ task comes up next in the queue.'", options: ["whichever", "whoever", "whomever"], correct: 0 },
    { q: "128. '_______ did the system administrator assign the master credentials to?'", options: ["Who", "Whom", "Which"], correct: 1 },
    { q: "129. 'The old textbook, _______ pages had turned yellow, was kept in the library.'", options: ["whose", "which", "that"], correct: 0 },
    { q: "130. 'The software developers _______ built the interface are highly talented.'", options: ["who", "whom", "which"], correct: 0 },
    { q: "131. 'The device _______ battery is completely drained needs charging.'", options: ["which", "whose", "that"], correct: 1 },
    { q: "132. '_______ do you think is responsible for the text rendering bug?'", options: ["Who", "Whom", "Which"], correct: 0 },
    { q: "133. 'He is the type of leader _______ always values student preparation feedback.'", options: ["who", "whom", "which"], correct: 0 },
    { q: "134. 'The balance sheet data block _______ you compiled has some discrepancies.'", options: ["who", "which/that", "whom"], correct: 1 },
    { q: "135. 'By _______ was this incredible interactive math puzzle engineered?'", options: ["who", "whom", "whose"], correct: 1 },
    { q: "136. 'The candidate _______ you strongly recommended has been shortlisted.'", options: ["who", "whose", "whom toggle"], correct: 2 },
    { q: "137. '_______ is the name of the new application folder directory?'", options: ["Who", "What", "Which"], correct: 1 },
    { q: "138. 'The algorithm core _______ calculates the progressive levels functions well.'", options: ["who", "that", "whom"], correct: 1 },
    { q: "139. 'The graphic designer _______ 3D minimalist logo we deployed is famous.'", options: ["who", "whose", "whom"], correct: 1 },
    { q: "140. '_______ of the matching variables did you declare in the style sheet?'", options: ["Who", "What", "Which"], correct: 2 },
    { q: "141. 'He discovered _______ he was searching for in the database.'", options: ["what", "which", "that"], correct: 0 },
    { q: "142. 'The software instructions _______ were provided are easy to execute.'", options: ["who", "which/that", "whom"], correct: 1 },
    { q: "143. '_______ compiled the file prefix rules into the system directory?'", options: ["Who", "Whom", "Which"], correct: 0 },
    { q: "144. 'The medical expert _______ dashboard was non-responsive is online now.'", options: ["who", "whose", "whom"], correct: 1 },
    { q: "145. 'The target platform will accept _______ format you upload.'", options: ["whichever", "whoever", "whomever"], correct: 0 },
    { q: "146. '_______ are the primary parameters of an assertive expression?'", options: ["Who", "What", "Which"], correct: 1 },
    { q: "147. 'The student preparation plan, _______ was drafted carefully, succeeded.'", options: ["who", "which", "whom"], correct: 1 },
    { q: "148. 'The tracking system _______ monitored the game scores has stopped.'", options: ["who", "that", "whom"], correct: 1 },
    { q: "149. 'To _______ should the system root administration query be escalated?'", options: ["who", "whom", "whose"], correct: 1 },
    { q: "150. 'He is an independent full-stack developer _______ works alone.'", options: ["who", "whom", "which"], correct: 0 },

    // BATCH 4: Advanced Syntax Rules & Pronoun Case Agreement (151 - 200)
    { q: "151. Choose the grammatically accurate statement:", options: ["You, he, and I are working together.", "I, you, and he are working together.", "You, I, and he are working together."], correct: 0 },
    { q: "152. 'I, you, and he made the variable error.' - Why is this order correct?", options: ["Because it follows normal courtesy protocol.", "Because sequence 1-2-3 applies during confession of error or blame.", "It is grammatically incorrect."], correct: 1 },
    { q: "153. Complete the statement: 'Every student must bring _______ own workbook.'", options: ["their", "his or her", "our"], correct: 1 },
    { q: "154. 'Each of the software developers must verify _______ code framework.'", options: ["their", "his", "our"], correct: 1 },
    { q: "155. 'It is _______ who did it.' - Select the correct choice for formal board exams:", options: ["I", "me", "myself"], correct: 0 },
    { q: "156. Fix the syntax: 'One should always protect their personal data directory.'", options: ["One should always protect one's personal data directory.", "One should always protect his personal data directory.", "No correction required."], correct: 0 },
    { q: "157. 'Neither Suresh nor Ramesh has submitted _______ dashboard script.'", options: ["their", "his", "they"], correct: 1 },
    { q: "158. 'The committee was unified in _______ approach to full-stack development.'", options: ["its", "their", "it's"], correct: 0 },
    { q: "159. 'The technical support staff were divided in _______ diagnostic solutions.'", options: ["its", "their", "theirs"], correct: 1 },
    { q: "160. Choose the error-free variant:", options: ["None of the boys completed his task.", "None of the boys completed their task.", "None of the boys completed our task."], correct: 1 },
    { q: "161. 'Many a student _______ failed to comprehend the relative pronoun constraints.'", options: ["has", "have", "are"], correct: 0 },
    { q: "162. Complete the sentence: 'Many a student has failed to submit _______ project.'", options: ["their", "his or her", "they"], correct: 1 },
    { q: "163. 'He is one of those developers who _______ expert in JavaScript structure.'", options: ["is", "are", "was"], correct: 1 },
    { q: "164. 'This is the only one of his compilation models that _______ flawlessly.'", options: ["execute", "executes", "executing"], correct: 1 },
    { q: "165. Choose the accurate statement:", options: ["Such a student as him should be guided.", "Such a student as he should be guided.", "Such a student like him should be guided."], correct: 1 },
    { q: "166. 'Suresh is the person whom I think is responsible for the algorithm crash.' - Fix the error:", options: ["Change 'whom' to 'who' because it acts as subject for 'is responsible'.", "Change 'whom' to 'whose'.", "No error present."], correct: 0 },
    { q: "167. 'Suresh is the candidate whom we chose for the full-stack developer role.' - Is 'whom' correct?", options: ["Yes, it functions perfectly as object of 'we chose'.", "No, it must be 'who'.", "No, it must be 'which'."], correct: 0 },
    { q: "168. 'The manager split the complex operations block between you and _______.'", options: ["he", "him", "himself"], correct: 1 },
    { q: "169. 'Everyone should configure _______ file system systematically.'", options: ["their", "his or her", "our"], correct: 1 },
    { q: "170. Choose the correct variant for reflexive usage:", options: ["He availed himself of the premium operational tools.", "He availed of the premium operational tools.", "He availed his own self of the premium operational tools."], correct: 0 },
    { q: "171. 'She absent_ from the technical presentation yesterday.' - Complete using reflexive logic:", options: ["absented herself", "absented", "absented her own self"], correct: 0 },
    { q: "172. 'They enjoyed _______ at the digital branding product launch event.'", options: ["themselves", "theirselves", "himself"], correct: 0 },
    { q: "173. Identify the error-free statement:", options: ["My laptop is more advanced than yours.", "My laptop is more advanced than your's.", "My laptop is more advanced than you."], correct: 0 },
    { q: "174. 'Sita's script structure is more optimized than _______.' - Fill the blank accurately:", options: ["Gita", "Gita's", "Gitas"], correct: 1 },
    { q: "175. 'The climate of Delhi is hotter than _______ of Shimla.'", options: ["that", "those", "this"], correct: 0 },
    { q: "176. 'The algorithmic frameworks of Java are more complex than _______ of Python.'", options: ["that", "those", "this"], correct: 1 },
    { q: "177. Choose the statement free of syntactic discrepancies:", options: ["Who do you think engineered the interactive database?", "Whom do you think engineered the interactive database?", "Whose do you think engineered the interactive database?"], correct: 0 },
    { q: "178. 'Anybody can access the dashboard interface if _______ possess credentials.'", options: ["he", "they", "one"], correct: 1 },
    { q: "179. 'You, your colleague, and I must coordinate _______ deployment plan.'", options: ["our", "your", "their"], correct: 0 },
    { q: "180. 'You and your junior assistant must verify _______ operational parameters.'", options: ["our", "your", "their"], correct: 1 },
    { q: "181. 'Neither of the full-stack system options has _______ database active.'", options: ["its", "their", "it's"], correct: 0 },
    { q: "182. 'Each asset module must be tracked by _______ unique key identification.'", options: ["its", "their", "it's"], correct: 0 },
    { q: "183. Identify the error: 'Let you and I build the user tracking engine code together.'", options: ["It must be 'you and me' because objective case is mandatory after 'let'.", "It must be 'me and you'.", "There is no structural mismatch."], correct: 0 },
    { q: "184. 'All depends on _______ completing the diagnostic verification phase on schedule.'", options: ["you", "your", "yours"], correct: 1 },
    { q: "185. 'I highly appreciate _______ taking the initiative to fix the code syntax error.'", options: ["him", "his", "himself"], correct: 1 },
    { q: "186. 'There is no chance of _______ qualifying for the technical certification.'", options: ["them", "their", "themselves"], correct: 1 },
    { q: "187. Choose the correct structural option:", options: ["He was candidate who they thought would win.", "He was candidate whom they thought would win.", "He was candidate whose they thought would win."], correct: 0 },
    { q: "188. 'The program loop executes automatically, _______ is highly efficient.'", options: ["which", "that", "what"], correct: 0 },
    { q: "189. 'Suresh is one of those technical instructors who _______ always ready to assist.'", options: ["is", "are", "was"], correct: 1 },
    { q: "190. 'This is one of the most minimalist 3D interfaces that _______ been deployed.'", options: ["has", "have", "was"], correct: 1 },
    { q: "191. 'Sita is the girl who I know _______ scored highest in computer applications.'", options: ["has", "have", "having"], correct: 0 },
    { q: "192. Identify the accurate phrasing:", options: ["It is a secret between you and me.", "It is a secret between you and I.", "It is a secret between you and myself."], correct: 0 },
    { q: "193. 'No one can replace _______ in managing student preparation assets.'", options: ["he", "him", "himself"], correct: 1 },
    { q: "194. 'Our full-stack development team is much more integrated than _______.'", options: ["their", "theirs", "them"], correct: 1 },
    { q: "195. 'The data system requires that everyone checks _______ variable definitions.'", options: ["their", "his or her", "our"], correct: 1 },
    { q: "196. 'The historical city and _______ rich cultural heritage attract tourists.'", options: ["its", "their", "it's"], correct: 0 },
    { q: "197. 'One must not boast of _______ technical accomplishments.'", options: ["his", "one's", "their"], correct: 1 },
    { q: "198. Select the structurally solid sentence variation:", options: ["He is the man whom I believe can fix the algorithmic code.", "He is the man who I believe can fix the algorithmic code.", "He is the man whose I believe can fix the algorithmic code."], correct: 1 },
    { q: "199. 'Suresh and myself completed the application tracking database yesterday.' - Correct this syntax:", options: ["Suresh and I completed...", "Suresh and me completed...", "No modification required."], correct: 0 },
    { q: "200. Which component represents the ultimate structural substitute for an expansive noun block head parameter?", options: ["The Adverb modifier", "The Pronoun", "The Conjunction element"], correct: 1 }
]
};
