/**
 * Gpreposition.js - Total English Grammar Solution
 * Topic: Prepositions (Place, Time, Direction, Phrasal & Fixed Preposition Exceptions)
 * Prefix: G (Grammar Module Protocol)
 */

if (typeof English === 'undefined') { window.English = {}; }

English.preposition = {
    title: "The Preposition: Structural Relation Engine 🗺️",
    content: `
        <section style="text-align: left; padding: 10px; font-family: 'Segoe UI', sans-serif;">
            
            <!-- 1. Core Concept -->
            <div style="background: #fdf2f8; padding: 25px; border-radius: 25px; border-left: 10px solid #db2777; margin-bottom: 30px;">
                <h2 style="color: #9d174d; font-size: 2.2rem; margin-top:0;">1. What is a Preposition?</h2>
                <p style="font-size: 1.3rem; line-height: 1.8;">
                    A <b>Preposition</b> is a word placed before a Noun or a Pronoun to show its relationship with some other word in the sentence. It acts as a structural bridge.
                    <br><br>
                    <i>Example:</i> "The computer teacher sits <b>at</b> his desk and loads the script <b>into</b> the server." ('At' shows position; 'into' shows dynamic inward motion).
                </p>
            </div>

            <!-- 2. Primary Classifications -->
            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #db2777; display: inline-block; margin-bottom: 20px;">2. Core Types of Prepositions</h2>
            <div style="background: white; padding: 20px; border-radius: 20px; border: 1px solid #eee; line-height: 1.8; box-shadow: 0 4px 10px rgba(0,0,0,0.05); margin-bottom: 30px;">
                <p style="font-size: 1.2rem;"><b>1. Preposition of Place:</b> Indicates static position or location.<br><i>Examples:</i> live <u>in</u> Delhi, wait <u>at</u> the lab door, book <u>on</u> the table.</p>
                <hr style="border: 0; border-top: 1px solid #eee;">
                <p style="font-size: 1.2rem;"><b>2. Preposition of Time:</b> Indicates when an occurrence happens.<br><i>Examples:</i> boot up <u>at</u> 4 o'clock, launch <u>on</u> Monday, deployed <u>in</u> 2026.</p>
                <hr style="border: 0; border-top: 1px solid #eee;">
                <p style="font-size: 1.2rem;"><b>3. Preposition of Direction/Motion:</b> Indicates dynamic path trajectories.<br><i>Examples:</i> walk <u>towards</u> the laboratory, dive <u>into</u> data structures, jump <u>over</u> the console block.</p>
            </div>

            <!-- 3. Confusing Word Pairs -->
            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #2563eb; display: inline-block; margin-bottom: 20px;">3. Confusing Preposition Pairs</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                <div style="background: #fffbeb; padding: 20px; border-radius: 15px; border: 1px solid #fef08a;">
                    <h3 style="color: #a16207; margin-top: 0;">A. Between vs. Among</h3>
                    <p style="font-size: 1.1rem; line-height: 1.6;">
                        • <b>Between:</b> Used for exactly two distinct entities.<br><i>"Divide the logic tasks between Suresh and Ramesh."</i><br><br>
                        • <b>Among:</b> Used for more than two entities or groups.<br><i>"Distribute the certificates among all the students."</i>
                    </p>
                </div>
                <div style="background: #f0fdfa; padding: 20px; border-radius: 15px; border: 1px solid #99f6e4;">
                    <h3 style="color: #0f766e; margin-top: 0;">B. In vs. Into</h3>
                    <p style="font-size: 1.1rem; line-height: 1.6;">
                        • <b>In:</b> Implies a state of rest or location inside an area.<br><i>"The files are located in the database directory."</i><br><br>
                        • <b>Into:</b> Implies movement from outside to inside.<br><i>"Paste the newly modified code into the style sheet."</i>
                    </p>
                </div>
            </div>

            <!-- 4. Advanced Fixed Prepositions (Class 11 & 12 Board Level) -->
            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #dc2626; display: inline-block; margin-bottom: 20px;">4. Fixed Preposition Rules (Board Traps)</h2>
            <div style="background: #fef2f2; padding: 25px; border-radius: 20px; border-left: 5px solid #dc2626; line-height: 1.8;">
                <p style="font-size: 1.2rem; margin-top:0;"><b>Certain words are strictly locked to specific prepositions:</b></p>
                <ul style="font-size: 1.15rem; padding-left: 20px; color: #991b1b; margin-bottom: 0;">
                    <li><b>Senior / Junior / Superior:</b> Always followed by <b>'to'</b>, never 'than'. <br><i>"He is senior <b>to</b> me in experience."</i></li>
                    <li><b>Abide:</b> Always followed by <b>'by'</b>.<br><i>"Every programmer must abide <b>by</b> the standard prefix layout rules."</i></li>
                    <li><b>Abstain / Refrain:</b> Always followed by <b>'from'</b>.<br><i>"Please abstain <b>from</b> modifying unverified application branches."</i></li>
                    <li><b>Die:</b> Takes <b>'of'</b> for diseases, but <b>'from'</b> for overwork/hunger.<br><i>"The old man died <b>of</b> malaria."</i> vs. <i>"He died <b>from</b> severe exhaustion."</i></li>
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
    /* --- Gpreposition.js: 200 Pure Prepositions Questions --- */

quizData: [
    // BATCH 1: Spatial, Temporal, and Directional Prepositions (1 - 50)
    { q: "1. Complete the sentence parameter: 'The candidate is highly eligible _______ the honours diploma program.'", options: ["for", "to", "with"], correct: 0 },
    { q: "2. Choose the correct preposition: 'The diagnostic system crash occurred _______ exactly midnight.'", options: ["on", "in", "at"], correct: 2 },
    { q: "3. 'The project manager divided the layout tasks _______ the five full-stack programmers.'", options: ["between", "among", "into"], correct: 1 },
    { q: "4. Identify the directional preposition: 'The student poured the water _______ the copper container.'", options: ["in", "into", "on"], correct: 1 },
    { q: "5. 'The master repository files are stored safely _______ the secondary backup server vault.'", options: ["at", "on", "in"], correct: 2 },
    { q: "6. 'The institutional seminar is scheduled to launch _______ Monday morning.'", options: ["at", "in", "on"], correct: 2 },
    { q: "7. 'Prashant Sagar sits _______ his dedicated technical workstation desk.'", options: ["at", "on", "in"], correct: 0 },
    { q: "8. 'The code compiler loop will finish processing _______ ten minutes.'", options: ["at", "on", "in"], correct: 2 },
    { q: "9. 'The minimalist 3D logo asset layout was placed _______ the center of the canvas banner.'", options: ["at", "in", "over"], correct: 0 },
    { q: "10. 'The patient registration center is located _______ New Delhi.'", options: ["at", "in", "on"], correct: 1 },
    { q: "11. 'The dynamic scoreboard hung _______ the main presentation wall framework.'", options: ["on", "at", "into"], correct: 0 },
    { q: "12. 'He walked _______ the administrative office block to collect his certificate guidelines.'", options: ["towards", "into", "at"], correct: 0 },
    { q: "13. 'The tablet computing device was placed neatly _______ the wooden study desk.'", options: ["on", "over", "at"], correct: 0 },
    { q: "14. 'The software development framework was deployed _______ the year 2026.'", options: ["at", "on", "in"], correct: 2 },
    { q: "15. 'The technical assistant dropped his smart stylus pen _______ the floor interface.'", options: ["onto", "into", "in"], correct: 0 },
    { q: "16. 'The classroom session will terminate exactly _______ 4 o'clock.'", options: ["in", "on", "at"], correct: 2 },
    { q: "17. 'The structural support columns are situated _______ the secondary evaluation block.'", options: ["behind", "between", "through"], correct: 0 },
    { q: "18. 'The game player jumped _______ the virtual balance barrier column.'", options: ["over", "through", "into"], correct: 0 },
    { q: "19. 'We need to update the file prefix configurations _______ the next deployment cycle.'", options: ["before", "under", "between"], correct: 0 },
    { q: "20. 'The validation script runs continuously _______ the background environment.'", options: ["in", "on", "at"], correct: 0 },
    { q: "21. 'Suresh sat _______ Ramesh and Ramesh's junior coding assistant during the exam loop.'", options: ["among", "between", "besides"], correct: 1 },
    { q: "22. 'The online portal stays operational _______ the winter vacation period.'", options: ["throughout", "between", "onto"], correct: 0 },
    { q: "23. 'The master workbook details are scattered _______ all the student workdesks.'", options: ["between", "among", "into"], correct: 1 },
    { q: "24. 'The signal receiver panel is fixed _______ the roof framework layout.'", options: ["on", "at", "in"], correct: 0 },
    { q: "25. 'The medical evaluation script was executed _______ dawn.'", options: ["at", "in", "on"], correct: 0 },
    { q: "26. 'The tracking data packets traveled _______ the secure local network gateway.'", options: ["through", "over", "between"], correct: 0 },
    { q: "27. 'Please sign your profile confirmation parameters _______ the dotted baseline.'", options: ["above", "over", "on"], correct: 0 },
    { q: "28. 'The user instructions guide book is placed _______ the tablet case model.'", options: ["under", "between", "into"], correct: 0 },
    { q: "29. 'The tech validation team will arrive _______ an hour.'", options: ["within", "between", "onto"], correct: 0 },
    { q: "30. 'The dynamic game characters moved swiftly _______ the maze boundaries.'", options: ["through", "across", "over"], correct: 1 },
    { q: "31. 'The corporate office building stands right _______ the metro terminal station.'", options: ["opposite", "between", "into"], correct: 0 },
    { q: "32. 'The math puzzle logic challenge rules are displayed _______ the blackboard system.'", options: ["on", "at", "in"], correct: 0 },
    { q: "33. 'The conversion script was running smoothly _______ noon.'", options: ["at", "in", "on"], correct: 0 },
    { q: "34. 'The network cables run _______ the false flooring layout.'", options: ["underneath", "between", "throughout"], correct: 0 },
    { q: "35. 'The team walked _______ the main entrance path to enter the evaluation lab.'", options: ["along", "between", "onto"], correct: 0 },
    { q: "36. 'The software patch was uploaded _______ midnight.'", options: ["at", "in", "on"], correct: 0 },
    { q: "37. 'The student preparation sheets were compiled _______ the course instructor.'", options: ["by", "with", "from"], correct: 0 },
    { q: "38. 'The interface layout remains stable _______ extreme data load conditions.'", options: ["under", "between", "into"], correct: 0 },
    { q: "39. 'The technical seminar continues from morning _______ evening.'", options: ["till / until", "at", "on"], correct: 0 },
    { q: "40. 'The diagnostic framework properties are stored _______ a secure database partition.'", options: ["inside", "onto", "between"], correct: 0 },
    { q: "41. 'Sita arrived at the testing lab exactly _______ time.'", options: ["on", "at", "in"], correct: 0 },
    { q: "42. 'The platform patch will be released _______ a few days.'", options: ["in", "on", "at"], correct: 0 },
    { q: "43. 'The dynamic assets moved _______ the primary projection grid axis.'", options: ["along", "between", "into"], correct: 0 },
    { q: "44. 'The user registration data logs are updated _______ the completion of each session.'", options: ["after", "between", "under"], correct: 0 },
    { q: "45. 'The student sat quietly _______ his guide while debugging the loop.'", options: ["beside", "besides", "between"], correct: 0 },
    { q: "46. 'The software development project must be completed _______ a month.'", options: ["within", "between", "onto"], correct: 0 },
    { q: "47. 'The network tower is located far _______ the city limits.'", options: ["beyond", "between", "through"], correct: 0 },
    { q: "48. 'The text file tags were altered _______ mistake.'", options: ["by", "with", "from"], correct: 0 },
    { q: "49. 'The validation engine checked every variable entry _______ top to bottom.'", options: ["from", "by", "with"], correct: 0 },
    { q: "50. 'The core program components are structured _______ specific design guidelines.'", options: ["according to", "besides", "between"], correct: 0 },

    // BATCH 2: Mixed Combinations and Positional Word Traps (51 - 100)
    { q: "51. Choose the accurate statement structure matching location specifications:", options: ["He lives at Rohini in New Delhi.", "He lives in Rohini at New Delhi.", "He lives on Rohini on New Delhi."], correct: 0 },
    { q: "52. 'The tech assistant is sitting _______ the front row interface.'", options: ["in", "on", "at"], correct: 0 },
    { q: "53. Complete using appropriate time prepositions: 'The framework update launched _______ 5 PM _______ July 15th.'", options: ["at, on", "in, at", "on, in"], correct: 0 },
    { q: "54. Select the correct option: 'The system has been executing background validation loops _______ three hours.'", options: ["for", "since", "from"], correct: 0 },
    { q: "55. 'The instructor has been mentoring student preparation groups _______ 2025.'", options: ["since", "for", "from"], correct: 0 },
    { q: "56. Identify the correct positional expression string block:", options: ["The master key is in the drawer in the desk.", "The master key is on the drawer at the desk.", "The master key is inside drawer onto the desk."], correct: 0 },
    { q: "57. 'Suresh is working _______ a complex full-stack tracking logic loop.'", options: ["on", "at", "with"], correct: 0 },
    { q: "58. Choose the error-free variant: 'The tablet device fell _______ the floor surface.'", options: ["to", "onto", "in"], correct: 1 },
    { q: "59. 'The conversion application parameters have been altered _______ recognition.'", options: ["beyond", "under", "through"], correct: 0 },
    { q: "60. 'The structural analyst lives _______ the third floor interface layout.'", options: ["on", "in", "at"], correct: 0 },
    { q: "61. Identify the option that cleanly differentiates 'beside' and 'besides' rules:", options: ["Besides his tablet device, he has a laptop box beside him.", "Beside his tablet device, he has a laptop box besides him.", "Besides his tablet device, he has a laptop box besides him."], correct: 0 },
    { q: "62. '_______ coding algorithms, Prashant Sagar enjoys designing minimalist 3D logos.'", options: ["Besides", "Beside", "Between"], correct: 0 },
    { q: "63. 'The student stood _______ the computer teacher to view the error console logs.'", options: ["beside", "besides", "between"], correct: 0 },
    { q: "64. Select the sentence with correct temporal arrangement order constraints:", options: ["We expect the validation script to stabilize by tomorrow morning.", "We expect the validation script to stabilize on tomorrow morning.", "We expect the validation script to stabilize at tomorrow morning."], correct: 0 },
    { q: "65. 'The medical consultation platform went offline _______ the maintenance window loop.'", options: ["during", "between", "into"], correct: 0 },
    { q: "66. Choose the structurally correct option variation:", options: ["The patient registration logs are safe inside the database server.", "The patient registration logs are safe inside to the database server.", "The patient registration logs are safe inside on the database server."], correct: 0 },
    { q: "67. 'He threw the corrupted storage drive _______ the dustbin box.'", options: ["into", "in", "onto"], correct: 0 },
    { q: "68. 'The text alignment properties are modified _______ CSS variables.'", options: ["through / via", "between", "into"], correct: 0 },
    { q: "69. Select the option that uses correct prepositional combinations: 'The data packets arrived _______ time _______ the presentation.'", options: ["in, for", "at, in", "on, onto"], correct: 0 },
    { q: "70. 'The code blocks were distributed _______ all the testing divisions.'", options: ["among", "between", "into"], correct: 0 },
    { q: "71. Correct the statement: 'The child hid among the two massive structural columns.'", options: ["The child hid between the two massive structural columns.", "The child hid into the two massive structural columns.", "The child hid behind of the two massive structural columns."], correct: 0 },
    { q: "72. 'The platform framework is built _______ open-source compilation technologies.'", options: ["upon / on", "with", "into"], correct: 0 },
    { q: "73. 'The math logic application coordinates were calculated _______ extreme accuracy.'", options: ["with", "by", "from"], correct: 0 },
    { q: "74. Select the accurate sentence layout option matching formal constraints:", options: ["The supervisor traveled to New Delhi by car.", "The supervisor traveled to New Delhi in car.", "The supervisor traveled to New Delhi on car."], correct: 0 },
    { q: "75. 'The candidate verified his certification records _______ person.'", options: ["in", "by", "with"], correct: 0 },
    { q: "76. Choose the incorrect layout format alignment sequence from the options below:", options: ["He wrote the script code with ink.", "He wrote the script code in ink.", "He wrote the script code with a pen."], correct: 0 },
    { q: "77. 'The system properties must match _______ the master configuration blueprint parameters.'", options: ["with", "to", "No preposition is required after the verb 'match' here."], correct: 2 },
    { q: "78. 'Sita has been preparing interactive quiz engines _______ last November.'", options: ["since", "for", "from"], correct: 0 },
    { q: "79. 'The administrative committee met _______ the afternoon session loop.'", options: ["in", "at", "on"], correct: 0 },
    { q: "80. Select the correct choice: 'The full-stack application will remain accessible _______ 24 hours.'", options: ["for", "during", "since"], correct: 0 },
    { q: "81. 'The user profile metadata was updated _______ the cloud interface database gateway.'", options: ["through", "between", "onto"], correct: 0 },
    { q: "82. Choose the error-free sentence framework matching distribution constraints:", options: ["The assets were allocated between the distinct development hubs.", "The assets were allocated among the distinct development hubs.", "Both choices match up safely depending on distinct hub numbers."], correct: 2 },
    { q: "83. 'The target program execution speed is dependent _______ hardware capabilities.'", options: ["on / upon", "with", "to"], correct: 0 },
    { q: "84. Fix the preposition error: 'The tech assistant stepped inside of the server storage room.'", options: ["The tech assistant stepped inside the server storage room.", "The tech assistant stepped inside to the server storage room.", "The tech assistant stepped into inside the server storage room."], correct: 0 },
    { q: "85. 'The candidate received his master's degree certificate _______ convocation.'", options: ["at", "in", "on"], correct: 0 },
    { q: "86. Select the correct syntax option matching focus parameters:", options: ["He works at night on his tablet code projects.", "He works in night on his tablet code projects.", "He works on night on his tablet code projects."], correct: 0 },
    { q: "87. 'The portal data compression routines are handled _______ automated loop modules.'", options: ["by", "with", "throughout"], correct: 0 },
    { q: "88. Choose the correct structural configuration matching spatial logic layouts:", options: ["The file folder was sitting on top of the workstation rack terminal.", "The file folder was sitting on top at the workstation rack terminal.", "The file folder was sitting top of the workstation rack terminal."], correct: 0 },
    { q: "89. 'The algorithm compilation script successfully finished _______ less than a second.'", options: ["in", "within", "Both choices function safely as temporal duration boundaries"], correct: 2 },
    { q: "90. 'Suresh walked directly _______ the master terminal node when the error alarm rang.'", options: ["to", "at", "into"], correct: 0 },
    { q: "91. Complete the layout accurately: 'The minimalist 3D asset graphic model is currently _______ production.'", options: ["in", "under", "on"], correct: 0 },
    { q: "92. Choose the sentence displaying correct usage of time boundary prepositions:", options: ["Please submit the student evaluation sheets by Friday evening.", "Please submit the student evaluation sheets until Friday evening.", "Please submit the student evaluation sheets since Friday evening."], correct: 0 },
    { q: "93. 'The structural balance calculations were verified _______ independent script runs.'", options: ["through / by means of", "with", "into"], correct: 0 },
    { q: "94. Identify the layout displaying a syntactic error in relation parameters:", options: ["The analyst discussed about the variable discrepancies layout error exception.", "The analyst discussed the variable discrepancies layout error exception.", "The analyst commented on the variable discrepancies layout error exception."], correct: 0 },
    { q: "95. 'The presentation banner asset was aligned vertically _______ the display coordinates.'", options: ["with", "to", "by"], correct: 0 },
    { q: "96. Apply structural layout metrics: 'The patient registration gateway goes live _______ exactly 9 AM.'", options: ["at", "on", "in"], correct: 0 },
    { q: "97. 'Sita sits beneath the shadow structure of the ancient oak tree.' - The word 'beneath' operates as a:", options: ["Preposition of Place", "Preposition of Motion", "Relative Adverb"], correct: 0 },
    { q: "98. Choose the correct choice: 'He is proficient _______ compiling code tags and string array definitions.'", options: ["in", "at", "with"], correct: 0 },
    { q: "99. 'The network switch is mounted safely _______ the server enclosure cabinet.'", options: ["inside", "into", "onto"], correct: 0 },
    { q: "100. Identify the target pattern rule: Place prepositions require proper scale metrics alignment:", options: ["At handling specific point addresses; In handling enclosed geographical spaces.", "At handling enclosed spaces; In handling specific point addresses.", "They can be distributed arbitrarily without tracking rules."], correct: 0 },

    // BATCH 3: Advanced Fixed Prepositions - Part 1 (101 - 150)
    { q: "101. Fill inside the syntax blank: 'You must strictly refrain _______ overriding existing tablet configurations.'", options: ["to", "from", "by"], correct: 1 },
    { q: "102. Complete the fixed preposition exception: 'He is superior _______ his rival in executing JavaScript variable arrays.'", options: ["than", "to", "with"], correct: 1 },
    { q: "103. Choose the error-free variant featuring fixed adjective dependencies:", options: ["Suresh is senior to me in the computer applications faculty directory.", "Suresh is senior than me in the computer applications faculty directory.", "Suresh is senior over me in the computer applications faculty directory."], correct: 0 },
    { q: "104. 'Every full-stack programmer must abide _______ the standard file prefix structure conventions.'", options: ["by", "with", "to"], correct: 0 },
    { q: "105. 'The institutional management requires all candidates to comply _______ safety regulations.'", options: ["with", "to", "by"], correct: 0 },
    { q: "106. 'He has deep structural knowledge and is highly proficient _______ backend database design.'", options: ["in", "at", "with"], correct: 0 },
    { q: "107. Complete the fixed exception line: 'The software development instructor has a strong aversion _______ redundant scripts.'", options: ["to", "from", "for"], correct: 0 },
    { q: "108. 'The candidate was declared fully eligible _______ the corporate technical scholarship award.'", options: ["for", "to", "with"], correct: 0 },
    { q: "109. Choose the correct option: 'The system analyst is completely absorbed _______ debugging the conversion matrix.'", options: ["in", "with", "at"], correct: 0 },
    { q: "110. 'You must systematically abstain _______ executing unverified patch branches onto the production node.'", options: ["from", "to", "by"], correct: 0 },
    { q: "111. Fix the error: 'The client is highly satisfied by your clean minimalist 3D interface layout designs.'", options: ["The client is highly satisfied with your clean minimalist 3D interface layout designs.", "The client is highly satisfied at your clean minimalist 3D interface layout designs.", "No correction required block layout formatting."], correct: 0 },
    { q: "112. Complete the fixed combination: 'The diagnostic system module is immune _______ external malware execution vectors.'", options: ["to", "from", "against"], correct: 0 },
    { q: "113. 'The student preparation plan is highly conducive _______ securing top score brackets.'", options: ["to", "for", "with"], correct: 0 },
    { q: "114. 'The software supervisor strongly objects _______ overriding verified user dashboard permissions.'", options: ["to", "against", "with"], correct: 0 },
    { q: "115. Identify the grammatically solid construction from the options below:", options: ["He was accused of manipulating the master configuration parameters.", "He was accused for manipulating the master configuration parameters.", "He was accused with manipulating the master configuration parameters."], correct: 0 },
    { q: "116. 'The conversion script output is completely identical _______ the legacy reference schema.'", options: ["to", "with", "from"], correct: 0 },
    { q: "117. Choose the sentence featuring an accurate execution of a fixed verb-preposition dependency:", options: ["The platform manager compensated the tech crew for their extra debugging hours.", "The platform manager compensated the tech crew with their extra debugging hours.", "The platform manager compensated the tech crew to their extra debugging hours."], correct: 0 },
    { q: "118. 'Every institutional candidate must look forward _______ meeting the academic review committee.'", options: ["to", "for", "towards"], correct: 0 },
    { q: "119. Complete the fixed relation string: 'The technical assistant is deeply adapted _______ working on multiple platform architectures.'", options: ["to", "with", "in"], correct: 0 },
    { q: "120. 'The portal interface design is highly essential _______ establishing positive student preparation experiences.'", options: ["for", "to", "with"], correct: 0 },
    { q: "121. Fix the layout syntax: 'The development hub is fully equipped by modern diagnostic hardware assets.'", options: ["The development hub is fully equipped with modern diagnostic hardware assets.", "The development hub is fully equipped of modern diagnostic hardware assets.", "The development hub is fully equipped to modern diagnostic hardware assets."], correct: 0 },
    { q: "122. 'The system supervisor is completely accountable _______ the executive board _______ data security preservation failures.'", options: ["to, for", "for, to", "with, by"], correct: 0 },
    { q: "123. Identify the error: 'The young designer has an incredible talent to creating minimalist 3D brand logos.'", options: ["It requires 'talent for creating' or 'talent in creating'.", "It requires 'talent with creating'.", "The sentence is already free of error presence."], correct: 0 },
    { q: "124. 'The student was completely cured _______ his confusion regarding CSS layout tag logic.' - Choose the word:", options: ["of", "from", "with"], correct: 0 },
    { q: "125. Choose the accurate fixed preposition matching standard curriculum targets:", options: ["Sita is extremely good at resolving data exception flags in the console loop.", "Sita is extremely good in resolving data exception flags in the console loop.", "Sita is extremely good with resolving data exception flags in the console loop."], correct: 0 },
    { q: "126. 'The full-stack application logic framework is highly susceptible _______ runtime thread block lockouts.'", options: ["to", "for", "with"], correct: 0 },
    { q: "127. 'The candidate was thoroughly disqualified _______ participating inside the progressive level design tournament.'", options: ["from", "to", "for"], correct: 0 },
    { q: "128. Complete the structure loop: 'The new patient consultation layout is superior _______ the legacy baseline model.'", options: ["to", "than", "with"], correct: 0 },
    { q: "129. Choose the correct formatting sentence variation option:", options: ["The technical supervisor has absolute faith in your ability to optimize the master repository.", "The technical supervisor has absolute faith on your ability to optimize the master repository.", "The technical supervisor has absolute faith with your ability to optimize the master repository."], correct: 0 },
    { q: "130. 'The software engineer succeeded _______ locating the core variable index overflow bug.'", options: ["in", "at", "with"], correct: 0 },
    { q: "131. Identify the structural fixed combination loop: 'The research data is highly relevant _______ tracking column transformations.'", options: ["to", "with", "for"], correct: 0 },
    { q: "132. 'The portal validation routine is fully capable _______ scanning complex string arrays rapidly.'", options: ["of", "for", "to"], correct: 0 },
    { q: "133. Select the correct syntax choice for fixed behavioral constraints: 'We must be polite _______ our institutional clients.'", options: ["to", "with", "towards"], correct: 0 },
    { q: "134. Complete the relation line: 'The computer instructor was highly pleased _______ the student's responsive dashboard project.'", options: ["with", "at", "by"], correct: 0 },
    { q: "135. 'The interface rendering flaw is completely specific _______ low-end tablet display hardware drivers.'", options: ["to", "for", "with"], correct: 0 },
    { q: "136. Choose the error-free variant containing a fixed noun-preposition alignment code:", options: ["The technical group has an urgent need for additional file tracking server space.", "The technical group has an urgent need of additional file tracking server space.", "The technical group has an urgent need to additional file tracking server space."], correct: 0 },
    { q: "137. 'The candidate is highly familiar _______ the file naming prefix parameters established by the master guide.'", options: ["with", "to", "at"], correct: 0 },
    { q: "138. 'The math logic application is completely free _______ redundant code tag strings.'", options: ["from / of", "with", "by"], correct: 0 },
    { q: "139. Fix the statement layout error: 'The platform supervisor was angry at the technician's negligence.'", options: ["The sentence is correct because 'angry at' applies to things or actions.", "Change to 'angry with the technician's negligence'.", "Change to 'angry on the technician's negligence'."], correct: 0 },
    { q: "140. 'Suresh was extremely angry _______ his junior coding assistant for losing the source data files.'", options: ["with", "at", "on"], correct: 0 },
    { q: "141. 'The customer care executive is highly attentive _______ the patient profile details.'", options: ["to", "for", "with"], correct: 0 },
    { q: "142. Complete the layout line: 'The security breach was entirely due _______ a missing framework validation check.'", options: ["to", "by", "from"], correct: 0 },
    { q: "143. Choose the accurate statement structure containing fixed targets constraints:", options: ["He has a deep passion for full-stack application development workflows.", "He has a deep passion to full-stack application development workflows.", "He has a deep passion with full-stack application development workflows."], correct: 0 },
    { q: "144. 'The institutional strategy loop is fully customized and adapted _______ the master exam board curriculum.'", options: ["to", "for", "with"], correct: 0 },
    { q: "145. 'The development team is highly confident _______ securing outstanding platform performance milestones.'", options: ["of / in", "to", "with"], correct: 0 },
    { q: "146. 'The newly launched portal interface is highly popular _______ the student preparation user group.'", options: ["among / with", "between", "into"], correct: 0 },
    { q: "147. 'The project manager is highly anxious _______ the impending technical repository release schedule.'", options: ["about / for", "to", "with"], correct: 0 },
    { q: "148. Complete the structural fixed preposition tracking logic selection string block: 'He is slow _______ grasping...'", options: ["at / of", "in", "to"], correct: 0 },
    { q: "149. Choose the accurate alignment option matching senior board exam metrics parameters:", options: ["Sita has a profound respect for her senior computer applications guide.", "Sita has a profound respect to her senior computer applications guide.", "Sita has a profound respect with her senior computer applications guide."], correct: 0 },
    { q: "150. What is the standard operational rule regarding the adjective 'different' inside board syntax evaluations?", options: ["It is strictly followed by the preposition 'from', never 'than'.", "It is followed by 'than' when comparing discrete text objects.", "It operates interchangeably with 'with' and 'to' across structural frameworks."], correct: 0 },

    // BATCH 4: Advanced Fixed Prepositions and Idiomatic Phrasal Links (151 - 200)
    { q: "151. Complete the fixed verb dependency: 'The system administrator apologized _______ the client _______ the server downtime loop.'", options: ["to, for", "for, to", "with, by"], correct: 0 },
    { q: "152. 'The platform developer must prevent the validation loop _______ crashing the database repository node.'", options: ["from", "to", "against"], correct: 0 },
    { q: "153. Choose the error-free phrase variation matching fixed syntactic parameters:", options: ["The candidate succeeded in clearing the technical evaluation challenge format.", "The candidate succeeded at clearing the technical evaluation challenge format.", "The candidate succeeded to clear the technical evaluation challenge format."], correct: 0 },
    { q: "154. 'The primary algorithm logic model is based _______ strict mathematical theorem constants.'", options: ["on / upon", "with", "at"], correct: 0 },
    { q: "155. 'Suresh is highly dedicated _______ completing his full-stack documentation checklist.'", options: ["to", "for", "with"], correct: 0 },
    { q: "156. Complete the statement safely: 'The school management expressed deep satisfaction _______ the student preparation outcomes.'", options: ["with", "at", "for"], correct: 0 },
    { q: "157. 'The technical assistant is deeply ashamed _______ his conversion script variable mismatch error.'", options: ["of", "from", "with"], correct: 0 },
    { q: "158. Fix the syntax exception trap line: 'The old institutional founder died from severe lung cancer yesterday.'", options: ["Change 'from' to 'of' because 'die of' is strictly mandatory for specific diseases.", "Change 'from' to 'by'.", "The sentence is already structurally solid and flawless."], correct: 0 },
    { q: "159. 'The exhausted programmer died _______ extreme overwork and absolute sleep deprivation parameters.'", options: ["from", "of", "with"], correct: 0 },
    { q: "160. Choose the accurate option: 'The database system administrator has been provided _______ a secure terminal key.'", options: ["with", "for", "to"], correct: 0 },
    { q: "161. 'The interactive game scoreboard provides critical metrics _______ the development team context loop.'", options: ["to / for", "with", "into"], correct: 0 },
    { q: "162. What does the word 'abstained' strictly require as its trailing structural preposition?", options: ["from", "to", "against"], correct: 0 },
    { q: "163. Complete the logic loop: 'The new patient registration interface layout is junior _______ the legacy system build.'", options: ["to", "than", "over"], correct: 0 },
    { q: "164. 'The corporate board expects everyone to refrain _______ copying unauthorized template repositories.'", options: ["from", "to", "by"], correct: 0 },
    { q: "165. Choose the accurate line variation free of structural conflicts:", options: ["The consultant insisted on reviewing the variable validation logs manually.", "The consultant insisted to review the variable validation logs manually.", "The consultant insisted for reviewing the variable validation logs manually."], correct: 0 },
    { q: "166. 'The software development instructor has supreme authority _______ the laboratory network allocation nodes.'", options: ["over", "on", "at"], correct: 0 },
    { q: "167. Identify the error-free sentence structure option matching standard grammar metrics:", options: ["Sita is extremely affectionate towards her younger sister.", "Sita is extremely affectionate with her younger sister.", "Sita is extremely affectionate for her younger sister."], correct: 0 },
    { q: "168. 'The interface layout dimensions are completely proportional _______ the background grid coordinates.'", options: ["to", "with", "for"], correct: 0 },
    { q: "169. Fix the syntax trap line: 'The diagnostic system is now safe from malware intrusion threats.' - Why is 'safe from' correct?", options: ["Because 'safe' takes 'from' when denoting protection or preservation boundaries.", "Because it functions as an absolute adjective anchor loop.", "It is a stylistic variation without structural rule backing parameters."], correct: 0 },
    { q: "170. 'The candidate was thoroughly congratulated _______ securing the first rank rank position.'", options: ["on / upon", "for", "at"], correct: 0 },
    { q: "171. Choose the accurate statement structure containing fixed participle dependencies:", options: ["The computer teacher is highly popular with his engineering students.", "The computer teacher is highly popular among to his engineering students.", "The computer teacher is highly popular with for his engineering students."], correct: 0 },
    { q: "172. 'The platform architecture layout consists _______ five distinct semantic layers.'", options: ["of", "with", "from"], correct: 0 },
    { q: "173. What is the standard distribution rule for the verb 'consist' vs 'comprise' inside formal board syntax testing?", options: ["'Consist' requires the trailing preposition 'of'; 'Comprise' does not take a preposition in active voice configurations.", "'Consist' does not take a preposition; 'Comprise' strictly requires the trailing preposition 'of'.", "They can be used interchangeably with 'of' and 'with' across all formatting levels without restriction."], correct: 0 },
    { q: "174. 'The master repository architecture comprises _______ ten distinct data indexing branches.'", options: ["No preposition is utilized following the active verb 'comprises'", "of", "with"], correct: 0 },
    { q: "175. Complete the structural constraint safely: 'He has an incredible taste _______ minimalist 3D graphic design concepts.'", options: ["for", "in", "with"], correct: 0 },
    { q: "176. Choose the option without structural discrepancies or relational logic errors:", options: ["The candidate is highly blind to his own structural validation bugs.", "The candidate is highly blind of his own structural validation bugs.", "The candidate is highly blind with his own structural validation bugs."], correct: 0 },
    { q: "177. 'The old technician is unfortunately blind _______ his left eye interface node.' - Choose the fixed term:", options: ["in / of", "to", "with"], correct: 0 },
    { q: "178. Identify the statement containing an explicit fixed preposition syntax error trap condition:", options: ["Suresh is highly inferior than his supervisor in full-stack programming experience.", "Suresh is highly inferior to his supervisor in full-stack programming experience.", "Suresh is highly inferior to his supervisor with full-stack programming experience."], correct: 0 },
    { q: "179. Why is 'inferior to' mandatory on board evaluations while 'inferior than' is flagged as a failure?", options: ["Because words derived from Latin comparative stems take 'to' as their comparison relater node.", "Because 'inferior' operates exclusively as a coordinate conjunction link.", "Because 'than' can only follow superlative attributes safely inside text models."], correct: 0 },
    { q: "180. 'The validation module is highly essential _______ maintaining tracking parity.' - Fill accurately:", options: ["to / for", "with", "by"], correct: 0 },
    { q: "181. Select the error-free sentence layout option matching formal board constraints:", options: ["The structural analyst compared the new dataset with the baseline reference schema.", "The structural analyst compared the new dataset to the baseline reference schema.", "Both options are valid depending on whether the comparison highlights similarity or alignment parity."], correct: 2 },
    { q: "182. 'The client was highly indifferent _______ the technical repository structure variations.' - Choose the link:", options: ["to", "with", "at"], correct: 0 },
    { q: "183. What is the explicit grammatical requirement of the verb 'prefer' inside structural comparison loops?", options: ["It must be followed by 'to', never 'than'.", "It must be followed by 'than' when comparing infinite noun blocks.", "It operates interchangeably with 'over' and 'than' inside standard sentence frameworks."], correct: 0 },
    { q: "184. 'Suresh prefers writing clean vanilla layout code _______ using complex heavy structural tools.'", options: ["to", "than", "over"], correct: 0 },
    { q: "185. Choose the accurate statement structure containing relational prepositional configurations:", options: ["The team is fully prepared for handling the patient consultation portal traffic load.", "The team is fully prepared to handling the patient consultation portal traffic load.", "The team is fully prepared with handling the patient consultation portal traffic load."], correct: 0 },
    { q: "186. 'Sita has an intense familiarity _______ the advanced properties of CSS variable definitions.'", options: ["with", "to", "for"], correct: 0 },
    { q: "187. Identify the verbal qualification parameter variant containing structural preposition failures:", options: ["The supervisor is extremely proud of the team's outstanding preparation achievements.", "The supervisor is extremely proud on the team's outstanding preparation achievements.", "The supervisor is extremely proud with the team's outstanding preparation achievements."], correct: 0 },
    { q: "188. 'The school committee has a strong objection _______ modifying the institutional logo branding parameters.'", options: ["to", "against", "on"], correct: 0 },
    { q: "189. 'The tech assistant is fully confident _______ the stability of the math game scoring engine loops.'", options: ["of / in", "with", "to"], correct: 0 },
    { q: "190. Complete the statement safely: 'The application framework is highly compatible _______ low-end tablet devices.'", options: ["with", "to", "for"], correct: 0 },
    { q: "191. 'The project manager was deeply astonished _______ the rapid execution performance of the script.'", options: ["at", "with", "by"], correct: 0 },
    { q: "192. Select the correct adverb pairing format for standard qualitative descriptions containing fixed links:", options: ["He was highly shocked at the sudden system directory crash exception loop.", "He was highly shocked with the sudden system directory crash exception loop.", "He was highly shocked on the sudden system directory crash exception loop."], correct: 0 },
    { q: "193. What is the general structural distribution parameter for the verb 'differ' inside textbook board logic?", options: ["It takes 'from' when indicating distinction or difference; It takes 'with' when indicating disagreement.", "It takes 'with' when indicating distinction; It takes 'from' when indicating disagreement parameters.", "It strictly rules out any preposition trailing its terminal structural path layout node."], correct: 0 },
    { q: "194. 'My final conversion layout code design differs significantly _______ the reference sheet blueprint.'", options: ["from", "with", "by"], correct: 0 },
    { q: "195. 'The senior systems analyst differs sharply _______ the director regarding repository access policies.'", options: ["with", "from", "on"], correct: 0 },
    { q: "196. Choose the option without errors or layout discrepancies containing relational fixed markers:", options: ["The institution is fully capable of providing top-tier computer education materials.", "The institution is fully capable to provide top-tier computer education materials.", "The institution is fully capable for providing top-tier computer education materials layout tracking."], correct: 0 },
    { q: "197. 'Suresh is highly capable _______ balancing corporate accounts and managing backend code branches.'", options: ["of", "to", "for"], correct: 0 },
    { q: "198. Identify the statement containing an explicit fixed preposition mismatch condition on secondary tests:", options: ["The software structure is fully custom-tailored and responsive to user inputs.", "The software structure is fully custom-tailored and responsive with user inputs.", "The software structure is fully custom-tailored and responsive towards user inputs."], correct: 1 },
    { q: "199. Select the structurally sound sentence parameter variation containing correct phrasal linkages:", options: ["In accordance with your tablet requirements, all code files carry a strict prefix indicator.", "In accordance to your tablet requirements, all code files carry a strict prefix indicator.", "In accordance with your tablet requirements, all code files carry a strict prefix indicator layout module."], correct: 0 },
    { q: "200. Which component represents the ultimate relational link parameter designed to bridge a noun placeholder block to its surrounding semantic environment within a syntax chain hierarchy loop?", options: ["The Preposition", "The Conjunction connector block", "The Interjection expressor head"], correct: 0 }
  ]
};
