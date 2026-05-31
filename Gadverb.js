/**
 * Gadverb.js - Total English Grammar Solution
 * Topic: Adverbs (Classifications, Position Syntax & Advanced Inversion Rules)
 */

if (typeof English === 'undefined') { window.English = {}; }

English.adverb = {
    title: "The Adverb: Core & Advanced Modifier Engine ⚡",
    content: `
        <section style="text-align: left; padding: 10px; font-family: 'Segoe UI', sans-serif;">
            
            <!-- 1. Core Concept -->
            <div style="background: #f0fdf4; padding: 25px; border-radius: 25px; border-left: 10px solid #16a34a; margin-bottom: 30px;">
                <h2 style="color: #14532d; font-size: 2.2rem; margin-top:0;">1. What is an Adverb?</h2>
                <p style="font-size: 1.3rem; line-height: 1.8;">
                    An <b>Adverb</b> is a word that modifies or adds details to a <b>Verb</b>, an <b>Adjective</b>, or another <b>Adverb</b>. It answers questions like <i>How? When? Where? How often?</i> or <i>To what extent?</i>
                    <br><br>
                    <i>Example:</i> "The full-stack platform runs <b>exceptionally</b> fast." ('Fast' is an adverb modifying the verb 'runs'; 'exceptionally' is an adverb modifying the another adverb 'fast').
                </p>
            </div>

            <!-- 2. Primary Classifications -->
            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #16a34a; display: inline-block; margin-bottom: 20px;">2. Types of Adverbs</h2>
            <div style="background: white; padding: 20px; border-radius: 20px; border: 1px solid #eee; line-height: 1.8; box-shadow: 0 4px 10px rgba(0,0,0,0.05); margin-bottom: 30px;">
                <p style="font-size: 1.2rem;"><b>1. Adverb of Manner:</b> Shows <i>how</i> an action takes place.<br><i>Examples:</i> code <u>diligently</u>, smile <u>gracefully</u>, run <u>fast</u>.</p>
                <hr style="border: 0; border-top: 1px solid #eee;">
                <p style="font-size: 1.2rem;"><b>2. Adverb of Time:</b> Shows <i>when</i> an action occurs.<br><i>Examples:</i> deploy <u>tomorrow</u>, arrive <u>late</u>, update <u>now</u>.</p>
                <hr style="border: 0; border-top: 1px solid #eee;">
                <p style="font-size: 1.2rem;"><b>3. Adverb of Place:</b> Shows <i>where</i> an action happens.<br><i>Examples:</i> sit <u>here</u>, look <u>up</u>, go <u>outside</u>.</p>
                <hr style="border: 0; border-top: 1px solid #eee;">
                <p style="font-size: 1.2rem;"><b>4. Adverb of Frequency:</b> Shows <i>how often</i> an action repeats.<br><i>Examples:</i> <u>always</u> backup, <u>seldom</u> crashes, <u>frequently</u> checks.</p>
                <hr style="border: 0; border-top: 1px solid #eee;">
                <p style="font-size: 1.2rem;"><b>5. Adverb of Degree / Quantity:</b> Shows <i>to what extent</i> or how much.<br><i>Examples:</i> <u>highly</u> innovative, <u>very</u> clean, <u>quite</u> stable.</p>
            </div>

            <!-- 3. M-P-T Placement Sequence Order Rule -->
            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #2563eb; display: inline-block; margin-bottom: 20px;">3. The M-P-T Syntax Formula</h2>
            <div style="background: #eff6ff; padding: 25px; border-radius: 20px; border-left: 5px solid #2563eb; line-height: 1.8; margin-bottom: 30px;">
                <p style="font-size: 1.25rem; margin-top:0;"><b>Ordering Multiple Adverbs:</b></p>
                <p style="font-size: 1.2rem;">
                    When a sentence contains adverbs of Manner, Place, and Time together, the strict mathematical positioning sequence must follow the order: <b>Manner ➔ Place ➔ Time (M-P-T)</b>.
                </p>
                <p style="font-size: 1.15rem; background: white; border-radius: 8px; padding: 10px 15px; border: 1px solid #bfdbfe;">
                    <i>Correct Example:</i> "He wrote the code <b>diligently</b> (Manner) <b>in the lab</b> (Place) <b>yesterday</b> (Time)."
                </p>
            </div>

            <!-- 4. Advanced Inversion & Traps (Class 11 & 12 Board Level) -->
            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #dc2626; display: inline-block; margin-bottom: 20px;">4. High School Syntax Pitfalls</h2>
            <div style="background: #fef2f2; padding: 25px; border-radius: 20px; border-left: 5px solid #dc2626; line-height: 1.8;">
                <p style="font-size: 1.2rem; margin-top:0;"><b>A. Adverbial Inversion Rule (Negative Openers):</b></p>
                <p style="font-size: 1.15rem;">
                    When a sentence begins with a restrictive/negative adverb like <i>Hardly, Scarcely, Seldom, Never,</i> or <i>Barely</i>, the structure must be <b>inverted</b> (Helping Verb comes before the Subject).
                    <br>
                    ❌ Seldom he checks the database loops. ➔ Seldom <b>does he check</b> the database loops.
                </p>
                <hr style="border: 0; border-top: 1px solid #fca5a5;">
                <p style="font-size: 1.2rem;"><b>B. Critical Mistakes to Prevent:</b></p>
                <ul style="font-size: 1.15rem; padding-left: 20px; color: #991b1b;">
                    <li><b>The 'Too...To' trap:</b> 'Too' implies an excess with a negative consequence. <br>❌ The problem is too simple to solve. (Incorrect meaning unless it's impossible to solve). ➔ The problem is <b>very</b> simple to solve.</li>
                    <li><b>The 'Enough' placement:</b> 'Enough' must always be placed <i>after</i> the adjective it modifies, never before. <br>❌ He is enough smart to balance books. ➔ He is <b>smart enough</b> to balance books.</li>
                    <li><b>The 'Hard' vs. 'Hardly' split:</b> 'Hard' means with energy; 'Hardly' means almost not at all. <br>❌ He hardly worked on his app, so he got top marks. ➔ He worked <b>hard</b> on his app...</li>
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
    /* --- Gadverb.js: 200 Pure Adverbs Questions --- */

quizData: [
    // BATCH 1: Identifying Types of Adverbs (1 - 50)
    { q: "1. Identify the adverb of manner: 'The student built the mathematics game fluidly.'", options: ["built", "fluidly", "mathematics"], correct: 1 },
    { q: "2. What type of adverb is 'seldom' in: 'Our optimized system seldom drops memory data logs.'?", options: ["Adverb of Manner", "Adverb of Degree", "Adverb of Frequency"], correct: 2 },
    { q: "3. 'The computer teacher explained the algorithm framework inside the laboratory yesterday.' - Here, 'yesterday' is an:", options: ["Adverb of Time", "Adverb of Place", "Adverb of Frequency"], correct: 0 },
    { q: "4. Identify the adverb of place: 'Please assemble the minimalist 3D asset components here.'", options: ["assemble", "minimalist", "here"], correct: 2 },
    { q: "5. 'The logic engine is highly complex to modify without senior guidance.' - The word 'highly' acts as an:", options: ["Adverb of Degree", "Adverb of Manner", "Adverb of Time"], correct: 0 },
    { q: "6. Which of the following words is a standard adverb of frequency?", options: ["Everywhere", "Frequently", "Beautifully"], correct: 1 },
    { q: "7. 'The diagnostic interface layout rendered perfectly on the tablet device.' - The word 'perfectly' is an:", options: ["Adverb of Manner", "Adverb of Place", "Adverb of Degree"], correct: 0 },
    { q: "8. 'We must look everywhere for the unrecovered style sheet template.' - Here, 'everywhere' is an:", options: ["Adverb of Place", "Adverb of Time", "Adverb of Frequency"], correct: 0 },
    { q: "9. 'The patient registration script will execute soon.' - The word 'soon' belongs to which category?", options: ["Adverb of Manner", "Adverb of Time", "Adverb of Frequency"], correct: 1 },
    { q: "10. 'The code compiler loop is completely automated.' - The word 'completely' functions as an:", options: ["Adverb of Degree / Quantity", "Adverb of Manner", "Adverb of Place"], correct: 0 },
    { q: "11. Find the adverb of frequency from the options below:", options: ["Diligently", "Always", "Outside"], correct: 1 },
    { q: "12. 'The full-stack platform handles queries efficiently.' - The word 'efficiently' is an:", options: ["Adverb of Manner", "Adverb of Degree", "Adverb of Time"], correct: 0 },
    { q: "13. 'The tech seminar will take place upstairs.' - The word 'upstairs' functions as an:", options: ["Adverb of Place", "Adverb of Manner", "Adverb of Time"], correct: 0 },
    { q: "14. 'He checks the variable properties allocation daily.' - The word 'daily' acts as an:", options: ["Adverb of Frequency", "Adverb of Degree", "Adverb of Place"], correct: 0 },
    { q: "15. 'The interface rendering performance was quite impressive.' - The word 'quite' is an:", options: ["Adverb of Degree", "Adverb of Manner", "Adverb of Frequency"], correct: 0 },
    { q: "16. 'The program stopped working immediately after the conversion loop launched.' - Here, 'immediately' is an:", options: ["Adverb of Time", "Adverb of Place", "Adverb of Degree"], correct: 0 },
    { q: "17. Identify the adverb of place: 'The team searched outside for the signal receiver panel.'", options: ["searched", "outside", "receiver"], correct: 1 },
    { q: "18. 'Suresh rarely writes redundant code blocks inside his style properties.' - 'rarely' is an:", options: ["Adverb of Frequency", "Adverb of Manner", "Adverb of Degree"], correct: 0 },
    { q: "19. 'The mathematical puzzle was solved easily by the student preparation group.' - 'easily' is an:", options: ["Adverb of Manner", "Adverb of Degree", "Adverb of Time"], correct: 0 },
    { q: "20. 'The balance sheet values are almost accurate.' - The word 'almost' functions as an:", options: ["Adverb of Degree", "Adverb of Manner", "Adverb of Frequency"], correct: 0 },
    { q: "21. Choose the adverb of time: 'We are deploying the online consultation application today.'", options: ["deploying", "consultation", "today"], correct: 2 },
    { q: "22. 'The server backup script automatically saves data parameters weekly.' - 'weekly' is an:", options: ["Adverb of Frequency", "Adverb of Time", "Adverb of Manner"], correct: 0 },
    { q: "23. 'The geometric asset alignment looks somewhat off.' - The word 'somewhat' is an:", options: ["Adverb of Degree", "Adverb of Manner", "Adverb of Place"], correct: 0 },
    { q: "24. 'The software development instructor walked away.' - The word 'away' functions as an:", options: ["Adverb of Place", "Adverb of Manner", "Adverb of Time"], correct: 0 },
    { q: "25. 'Sita writes semantic tag structures clearly.' - The word 'clearly' is classified as an:", options: ["Adverb of Manner", "Adverb of Frequency", "Adverb of Place"], correct: 0 },
    { q: "26. Identify the adverb of degree: 'The platform update was too large for the low-end tablet device.'", options: ["too", "large", "device"], correct: 0 },
    { q: "27. 'The technical support staff will contact you shortly.' - The word 'shortly' is an:", options: ["Adverb of Time", "Adverb of Manner", "Adverb of Frequency"], correct: 0 },
    { q: "28. 'Our quiz engine database is updated regularly.' - The word 'regularly' acts as an:", options: ["Adverb of Frequency", "Adverb of Manner", "Adverb of Degree"], correct: 0 },
    { q: "29. 'The laboratory instruments were arranged neatly.' - Find the descriptive adverb of manner:", options: ["instruments", "arranged", "neatly"], correct: 2 },
    { q: "30. 'The validation parameters match up perfectly.' - 'perfectly' belongs to which adverbial class?", options: ["Adverb of Manner", "Adverb of Degree", "Adverb of Frequency"], correct: 0 },
    { v: "31. 'The system developer stepped forward to address the board.' - 'forward' is an:", options: ["Adverb of Place", "Adverb of Manner", "Adverb of Time"], correct: 0 },
    { q: "32. 'We have never bypassed the file naming prefix parameter logic.' - The word 'never' is an:", options: ["Adverb of Frequency", "Adverb of Degree", "Adverb of Manner"], correct: 0 },
    { q: "33. 'The medical diagnostic script was extremely accurate.' - The word 'extremely' functions as an:", options: ["Adverb of Degree", "Adverb of Manner", "Adverb of Time"], correct: 0 },
    { q: "34. Choose the adverb of time: 'The progressive game levels will launch tomorrow.'", options: ["progressive", "launch", "tomorrow"], correct: 2 },
    { q: "35. 'The child wept bitterly after losing the interactive tug-of-war game.' - 'bitterly' is an:", options: ["Adverb of Manner", "Adverb of Degree", "Adverb of Place"], correct: 0 },
    { q: "36. 'The data block elements are placed below.' - The word 'below' acts as an:", options: ["Adverb of Place", "Adverb of Time", "Preposition of object head"], correct: 0 },
    { q: "37. 'The full-stack system requires re-authentication occasionally.' - 'occasionally' is an:", options: ["Adverb of Frequency", "Adverb of Degree", "Adverb of Manner"], correct: 0 },
    { q: "38. 'The text rendering bug is deeply nested inside the style layer.' - The word 'deeply' is an:", options: ["Adverb of Degree / Extent", "Adverb of Place", "Adverb of Frequency"], correct: 0 },
    { q: "39. Find the adverb of manner: 'The principal spoke softly to the students.'", options: ["principal", "spoke", "softly"], correct: 2 },
    { q: "40. 'The transaction code has already been executed on the host.' - The word 'already' is an:", options: ["Adverb of Time", "Adverb of Degree", "Adverb of Frequency"], correct: 0 },
    { q: "41. 'The system files are stored safely inside the backup directory.' - 'safely' functions as an:", options: ["Adverb of Manner", "Adverb of Place", "Adverb of Frequency"], correct: 0 },
    { q: "42. 'Please place the minimalist digital banner there.' - The word 'there' functions as an:", options: ["Adverb of Place", "Adverb of Time", "Demonstrative Pronoun"], correct: 0 },
    { q: "43. 'The diagnostic framework loop repeats continually.' - The word 'continually' is an:", options: ["Adverb of Frequency", "Adverb of Degree", "Adverb of Manner"], correct: 0 },
    { q: "44. 'The variable constraint values are fully synchronized.' - The word 'fully' is an:", options: ["Adverb of Degree", "Adverb of Manner", "Adverb of Place"], correct: 0 },
    { q: "45. Choose the adverb of time: 'The student preparation session began earlier.'", options: ["preparation", "session", "earlier"], correct: 2 },
    { q: "46. 'The algorithm executed flawlessly, yielding outstanding outcomes.' - 'flawlessly' is an:", options: ["Adverb of Manner", "Adverb of Degree", "Adverb of Frequency"], correct: 0 },
    { q: "47. 'The structural support columns are situated nearby.' - The word 'nearby' acts as an:", options: ["Adverb of Place", "Adverb of Time", "Adjective modifier"], correct: 0 },
    { q: "48. 'The full-stack platform crashes sometimes during continuous testing.' - 'sometimes' is an:", options: ["Adverb of Frequency", "Adverb of Degree", "Adverb of Manner"], correct: 0 },
    { q: "49. 'The medical expert was intensely focused on the registration report.' - 'intensely' is an:", options: ["Adverb of Degree", "Adverb of Manner", "Adverb of Time"], correct: 0 },
    { q: "50. Find the descriptive adverb: 'The brave soldier fought fiercely until dawn.'", options: ["brave", "fiercely", "dawn"], correct: 1 },

    // BATCH 2: Adverbial Placement and M-P-T Sequence Rules (51 - 100)
    { q: "51. Choose the sequence matching the proper M-P-T syntax layout rule:", options: ["She sang beautifully at the launch last night.", "She sang last night beautifully at the launch.", "She sang at the launch last night beautifully."], correct: 0 },
    { q: "52. Select the grammatically accurate positioning of adverbs:", options: ["He wrote the script diligently in the lab yesterday.", "He wrote the script yesterday diligently in the lab.", "He wrote the script in the lab yesterday diligently."], correct: 0 },
    { q: "53. 'The team executed the conversion algorithm loop _______.' - Fill using the M-P-T rule formula:", options: ["successfully on the host server last week", "last week successfully on the host server", "on the host server successfully last week"], correct: 0 },
    { q: "54. Identify the sentence with correct adverb arrangement order constraints:", options: ["The structural analyst calculated properties accurately in office today.", "The structural analyst calculated properties today accurately in office.", "The structural analyst calculated properties in office accurately today."], correct: 0 },
    { q: "55. Apply the M-P-T sequence rule: 'The computer instructor lectured _______.'", options: ["eloquently in the classroom yesterday", "yesterday eloquently in the classroom", "in the classroom eloquently yesterday"], correct: 0 },
    { q: "56. Fix the layout line: 'Suresh arrived safely yesterday at New Delhi.'", options: ["Suresh arrived safely at New Delhi yesterday.", "Suresh arrived yesterday safely at New Delhi.", "No modification required."], correct: 0 },
    { q: "57. Complete the statement safely: 'The player performed _______.'", options: ["brilliantly in the competition today", "today brilliantly in the competition", "in the competition brilliantly today"], correct: 0 },
    { q: "58. Choose the correct positioning sequence for a verb of movement or destination:", options: ["He went to the laboratory quickly yesterday.", "He went quickly to the laboratory yesterday.", "He went yesterday to the laboratory quickly."], correct: 0 },
    { q: "59. 'The patient waited _______.' - Choose the correct syntax according to grammar parameters:", options: ["patiently at the diagnostic center this morning", "this morning patiently at the diagnostic center", "at the diagnostic center patiently this morning"], correct: 0 },
    { q: "60. Which alignment follows standard syntax rules?", options: ["The digital banner was displayed elegantly here last month.", "The digital banner was displayed here elegantly last month.", "The digital banner was displayed last month elegantly here."], correct: 0 },
    { q: "61. Where should the adverb of frequency 'always' be placed in relation to a single principal verb?", options: ["Before the principal verb", "After the principal verb", "At the absolute end of the expression string"], correct: 0 },
    { q: "62. 'He _______ backs up his source data directory.' - Fill the block using frequency rules:", options: ["always", "completely", "tomorrow"], correct: 0 },
    { q: "63. Adverbs of frequency like 'seldom', 'never', 'often' are placed where when an auxiliary verb is present?", options: ["Between the auxiliary verb and the main action verb", "Before the auxiliary verb module", "After the main action verb element"], correct: 0 },
    { q: "64. 'The system has _______ crashed during data synchronization phases.'", options: ["never", "neatly", "here"], correct: 0 },
    { q: "65. Select the correct position for the adverb of frequency: 'Suresh is late for the technical seminar.'", options: ["Suresh is often late...", "Suresh often is late...", "Suresh is late often..."], correct: 0 },
    { q: "66. Choose the structurally correct option variation:", options: ["They have frequently checked the error console logs.", "Frequently they have checked the error console logs.", "They have checked frequently the error console logs."], correct: 0 },
    { q: "67. 'He comes to the laboratory desk.' - Embed the adverb of frequency 'seldom' perfectly:", options: ["He seldom comes to the laboratory desk.", "He comes seldom to the laboratory desk.", "Seldom he comes to the laboratory desk."], correct: 0 },
    { q: "68. Where should adverbs of absolute time like 'yesterday', 'today' be ideally positioned?", options: ["At the very end or the very beginning of the sentence", "Directly before the main action predicate", "Between the subject head and auxiliary strings"], correct: 0 },
    { q: "69. Select the option that cleanly uses the adverb of time as an introductory element:", options: ["Yesterday, the system administrator reset the master host configurations.", "The system administrator reset yesterday the master host configurations.", "The system administrator reset the master host configurations yesterday, rapidly."], correct: 0 },
    { q: "70. 'The data compression module failed completely.' - The positioning of 'completely' is correct because:", options: ["Adverbs of degree modifying verbs are placed before or after the verb depending on completion parameters.", "It violates standard layout constraints.", "It functions as an adjective modifier head."], correct: 0 },
    { q: "71. Correct the statement: 'He always is working diligently on his tablet computing applications.'", options: ["He is always working diligently...", "He is working always diligently...", "Always he is working diligently..."], correct: 0 },
    { q: "72. Where does the adverb go when modifying an adjective? 'The interface is highly scalable.'", options: ["Directly before the adjective it qualifies", "Directly after the adjective it qualifies", "At the beginning of the clause block"], correct: 0 },
    { q: "73. 'The math puzzle setup was solved extraordinarily quickly.' - Here, 'extraordinarily' is placed:", options: ["Directly before the another adverb 'quickly' to modify it", "Directly after the verb element", "Redundantly inside the structure layout"], correct: 0 },
    { q: "74. Select the correct adverb placement variance matching standard grammar metrics:", options: ["I entirely agree with your computational logic model.", "I agree entirely with your computational logic model.", "Entirely I agree with your computational logic model."], correct: 0 },
    { q: "75. 'The candidate compiled his portfolio specifications smoothly.' - The adverb 'smoothly' is best placed:", options: ["After the direct object 'portfolio specifications'", "Between the subject and the transitive verb", "Before the transitional preposition block"], correct: 0 },
    { q: "76. Choose the incorrect layout alignment sequence from the options below:", options: ["He wrote beautifully the script code.", "He wrote the script code beautifully.", "Beautifully, he wrote the script code."], correct: 0 },
    { q: "77. 'The system files are situated _______.' - Complete matching the place syntax constraint parameters:", options: ["there inside the secondary storage vault", "inside the secondary storage vault there", "there yesterday inside the storage vault"], correct: 0 },
    { q: "78. 'Sita performs her tasks diligently.' - If we want to introduce intensive focus on frequency, we write:", options: ["Sita always performs her tasks diligently.", "Sita performs always her tasks diligently.", "Sita performs her tasks always diligently."], correct: 0 },
    { q: "79. 'The project manager reviewed the balance scoresheet data blocks yesterday.' - This arrangement is:", options: ["Syntactically flawless", "Flawed because time must precede the object block", "An inversion error exception"], correct: 0 },
    { q: "80. Select the correct structural position choice:", options: ["We successfully deployed the framework script.", "We deployed successfully the framework script.", "We deployed the framework script successfully layout."], correct: 0 },
    { q: "81. 'The student completed the validation loops manually.' - What type of positioning is shown?", options: ["End-position placement of adverb of manner", "Mid-position placement of frequency", "Initial-position orientation parameter"], correct: 0 },
    { q: "82. Choose the error-free sentence framework matching emphasis constraints:", options: ["Only he verified the customer profile database parameters.", "He verified only the customer profile database parameters.", "Both variations are valid but convey entirely distinct meanings."], correct: 2 },
    { q: "83. Where should the restrictive adverb 'only' be positioned inside a clean semantic sequence?", options: ["Directly before the word it is intended to modify and limit", "Always at the beginning of the baseline sentence string", "Always after the main object head parameter element"], correct: 0 },
    { q: "84. Fix the position error: 'The structural balance column almost fell down to the ground.'", options: ["The structural balance column almost fell down...", "Almost the structural balance column fell down...", "The structural balance column fell almost down..."], correct: 0 },
    { q: "85. 'The patient registration details are systematically structured.' - The adverb 'systematically' sits:", options: ["Between the auxiliary 'are' and the past participle adjective 'structured'", "Before the subject noun block", "After the structural coordinate markers"], correct: 0 },
    { q: "86. Select the correct syntax option matching focus parameters:", options: ["I have deliberately avoided modifying the host properties.", "Deliberately I have avoided modifying the host properties.", "I have avoided deliberately modifying the host properties."], correct: 0 },
    { q: "87. 'The game scoreboard tracks parameters simultaneously here today.' - This sequence is an instance of:", options: ["Manner-Place-Time (M-P-T) fulfillment", "Inversion architecture implementation", "Frequency structural collapse parameter"], correct: 0 },
    { q: "88. Choose the correct structural configuration:", options: ["The computer teacher clearly explained the context guidelines.", "The computer teacher explained clearly the context guidelines.", "Clearly the computer teacher explained the context guidelines."], correct: 0 },
    { q: "89. Where does an adverb of degree like 'almost', 'fully' sit when modifying a verb?", options: ["Directly before the principal action verb head", "At the very termination point of the syntax string", "Before the sentence coordinate markers"], correct: 0 },
    { q: "90. 'Suresh possesses enough expertise to balance books.' - Wait! If we use the adverb 'enough' with an adjective:", options: ["The adverb must follow the adjective directly.", "The adverb must precede the adjective directly.", "The rule remains identical to noun usage constraints."], correct: 0 },
    { q: "91. Complete the layout accurately: 'He is smart _______ to handle full-stack web platforms.'", options: ["enough", "too", "very"], correct: 0 },
    { q: "92. Choose the sentence displaying correct placement of 'enough':", options: ["The configuration module is stable enough for target deployment.", "The configuration module is enough stable for target deployment.", "The configuration module enough is stable for target deployment."], correct: 0 },
    { q: "93. 'The tutorial instructions were clear enough to follow.' - Here, 'enough' qualifies:", options: ["The adjective 'clear' and is correctly positioned after it", "The noun framework component", "The auxiliary root node element"], correct: 0 },
    { q: "94. Identify the layout displaying a syntactic error in adverb placement parameters:", options: ["The professional candidate is enough qualified for the honors diploma.", "The professional candidate is qualified enough for the honors diploma.", "The team has sufficient resources to finalize operations."], correct: 0 },
    { q: "95. 'The algorithm validation framework is complex enough to challenge experts.' - Is 'enough' valid here?", options: ["Yes, because it follows the adjective 'complex' which it modifies.", "No, it must be rewritten as 'enough complex'.", "No, 'enough' can only qualify nominal expressions safely."], correct: 0 },
    { q: "96. Apply structural layout metrics: 'Sita ran fast _______ to break the previous record track.'", options: ["enough", "too", "very"], correct: 0 },
    { q: "97. 'He was brave enough to point out the logic discrepancy parameters.' - This configuration is:", options: ["Syntactically accurate and solid", "Flawed because 'enough' should precede 'brave'", "An instance of comparative breakdown metrics"], correct: 0 },
    { q: "98. Choose the correct usage: 'The server rack space is roomy _______ to fit two new units.'", options: ["enough", "quite", "rather"], correct: 0 },
    { q: "99. 'The code text box field is wide enough to display long string arrays.' - The word 'enough' is an:", options: ["Adverb of Degree qualifying an adjective", "Adjective qualifying a noun head parameter", "Conjunction linker model element"], correct: 0 },
    { q: "100. Identify the target pattern rule: Adjective + Adverb configuration specification requirement parameters:", options: ["Adjective + Enough", "Enough + Adjective", "Adverb + Enough + Adjective string loop"], correct: 0 },

    // BATCH 3: Restrictive Opener Inversion Rules (101 - 150)
    { q: "101. Fill in the blank safely: 'Scarcely _______ the server rebooted when the application crashed again.'", options: ["did", "had", "has"], correct: 1 },
    { q: "102. Choose the error-free variant featuring adverbial inversion patterns:", options: ["Hardly had the instructor opened the code editor when the power failed.", "Hardly the instructor had opened the code editor when the power failed.", "Hardly the instructor opened the code editor when the power failed."], correct: 0 },
    { q: "103. 'Seldom _______ our database tracking loops experience index truncation failures.'", options: ["do", "does", "did"], correct: 0 },
    { q: "104. Correct the sequence structure: 'Never I have seen such a minimalist 3D logo layout concept.'", options: ["Never have I seen such a minimalist 3D logo layout concept.", "Never I seen have such a minimalist 3D logo layout concept.", "I never have seen such a minimalist 3D logo layout concept."], correct: 0 },
    { q: "105. 'Barely _______ the patient completed her registration form when the doctor called her name.'", options: ["had", "did", "was"], correct: 0 },
    { q: "106. Sentence opening with restrictive adverbs require inversion. Which of the following is an inversion model?", options: ["No sooner did the compiler execute than the style properties loaded.", "No sooner the compiler did execute than the style properties loaded.", "No sooner the compiler executed than the style properties loaded."], correct: 0 },
    { q: "107. Complete the inverted grammar line: 'Little _______ they realize that the data sync file was corrupted.'", options: ["did", "had", "have"], correct: 0 },
    { q: "108. 'Rarely _______ a full-stack platform perform with such zero-latency optimization parameters.'", options: ["does", "do", "is"], correct: 0 },
    { q: "109. Choose the correct syntax choice: 'Under no circumstances _______ the administrator overwrite tablet files.'", options: ["should", "must", "Both choices are correct because they follow inversion protocols"], correct: 2 },
    { q: "110. 'Not only _______ they validate the algorithm parameters, but they also designed a 3D interface asset.'", options: ["did", "have", "had"], correct: 0 },
    { q: "111. Fix the error: 'On no account we can disclose patient diagnostic records to third parties.'", options: ["On no account can we disclose patient diagnostic records...", "On no account we disclosure can patient diagnostic records...", "On no account can disclose we patient diagnostic records..."], correct: 0 },
    { q: "112. Complete the inversion string block: 'Only then _______ the student comprehend the M-P-T rule formula.'", options: ["did", "had", "was"], correct: 0 },
    { q: "113. 'Scarcely had the tech seminar commenced _______ the system encountered an internet loop dropout.'", options: ["when", "than", "then"], correct: 0 },
    { q: "114. 'No sooner had the computer teacher logged onto the workstation _______ the interface stabilized.'", options: ["than", "when", "then"], correct: 0 },
    { q: "115. Identify the grammatically solid construction from the options below:", options: ["Hardly had Suresh initiated code conversion when the tablet battery died.", "Hardly Suresh had initiated code conversion when the tablet battery died.", "Hardly had Suresh initiated code conversion than the tablet battery died."], correct: 0 },
    { q: "116. 'Never again _______ the school management accept unverified registration profile schemas.'", options: ["will", "is", "has"], correct: 0 },
    { q: "117. Choose the sentence featuring an accurate execution of adverbial inversion parameters:", options: ["Seldom have we witnessed such outstanding preparation outcomes.", "Seldom we have witnessed such outstanding preparation outcomes.", "Seldom have witnessed we such outstanding preparation outcomes."], correct: 0 },
    { q: "118. 'Only by working hard _______ the development team complete the patient consultation project.'", options: ["did", "could", "was"], correct: 1 },
    { q: "119. Complete the restrictive adverb opener syntax loop: 'Barely _______ the validation routine run...'", options: ["had", "did", "has"], correct: 0 },
    { q: "120. 'In vain _______ the tech assistant attempt to decrypt the master repository asset.'", options: ["did", "had", "was"], correct: 0 },
    { q: "121. Fix the layout syntax: 'Not until yesterday I realized the importance of file naming prefixes.'", options: ["Not until yesterday did I realize the importance of file naming prefixes.", "Not until yesterday I did realize the importance of file naming prefixes.", "Not until yesterday have I realized the importance of file naming prefixes."], correct: 0 },
    { q: "122. 'Only after matching all data parameters _______ the portal grant access privileges.'", options: ["does", "did", "will"], correct: 0 },
    { q: "123. Identify the error: 'No sooner the system analyst cracked the code than the alert message triggered.'", options: ["It requires inversion: 'No sooner had the system analyst cracked...'", "It requires a change from 'than' to 'when'.", "There is no error presence inside this expression format."], correct: 0 },
    { q: "124. 'Little did the programmer suspect that a missing text semicolon tag could drop the server.' - This sentence is:", options: ["Perfectly valid because 'little' triggers a subject-verb inversion loop.", "Flawed because 'little' cannot open an active clause.", "An instance of mismatched tense alignment parameters."], correct: 0 },
    { q: "125. Choose the accurate alignment option matching board parameters:", options: ["Rarely do we find such clean semantic layout tag architecture inside student projects.", "Rarely we find such clean semantic layout tag architecture inside student projects.", "Rarely do find we such clean semantic layout tag architecture inside student projects."], correct: 0 },
    { q: "126. 'Under no conditions _______ anyone modify the core mathematical formula constants.'", options: ["can", "should", "Both options are valid because they adhere to inversion syntax rules"], correct: 2 },
    { q: "127. 'Hardly had the game engine updated the scores _______ level two unlocked instantly.'", options: ["when", "than", "then"], correct: 0 },
    { q: "128. Complete the negative restriction layout string: 'On no account _______ the files be overwritten.'", options: ["must", "should", "Both options are valid under inversion rules"], correct: 2 },
    { q: "129. Choose the correct formatting sentence variation option:", options: ["Scarcely had I declared the global variables when the console threw an exception error.", "Scarcely I declared the global variables when the console threw an exception error.", "Scarcely had I declared the global variables than the console threw an exception error."], correct: 0 },
    { q: "130. 'Only by checking file structures manually _______ the user prevent catastrophic file corruption loops.'", options: ["can", "did", "was"], correct: 0 },
    { q: "131. Identify the structural inverted format element loop: 'Never before _______ our institution...' ", options: ["had", "has", "did"], correct: 0 },
    { q: "132. 'Not for one moment _______ the system analyst believe the diagnostic report was genuine.'", options: ["did", "had", "was"], correct: 0 },
    { q: "133. Select the correct syntax choice for parallel emphasis alignment:", options: ["No sooner had the balance scoresheet synced than the dynamic scoreboard updated.", "No sooner the balance scoresheet had synced than the dynamic scoreboard updated.", "No sooner had the balance scoresheet synced when the dynamic scoreboard updated."], correct: 0 },
    { q: "134. Complete the inversion string: 'Seldom _______ such complex variables compile without an explicit framework warning.'", options: ["do", "does", "did"], correct: 0 },
    { q: "135. 'Hardly had the patient registered her profile name _______ the validation engine crashed.'", options: ["when", "than", "then"], correct: 0 },
    { q: "136. Choose the error-free variant containing a negative structural opener:", options: ["Never have I bypassed the required file naming configurations on my tablet.", "Never I have bypassed the required file naming configurations on my tablet.", "I have never bypassed the required file naming configurations on my tablet statement."], correct: 0 },
    { q: "137. 'Little _______ the student know that his grammar quiz platform would scale globally.'", options: ["did", "had", "was"], correct: 0 },
    { q: "138. 'Rarely _______ the server console drop player data blocks under normal operations load.'", options: ["does", "do", "did"], correct: 0 },
    { q: "139. Fix the inversion line error: 'On no account you should execute untested scripts.'", options: ["On no account should you execute untested scripts.", "On no account you execute should untested scripts.", "No correction needed statement block layout."], correct: 0 },
    { q: "140. 'Not only did Suresh design a minimalist 3D interface logo, _______ he also engineered the code.'", options: ["but", "than", "then"], correct: 0 },
    { q: "141. 'Scarcely had the consultation portal gone online _______ a hundred profiles registered.'", options: ["when", "than", "then"], correct: 0 },
    { q: "142. Complete the layout: 'No sooner had the game score reached max threshold _______ level three loaded.'", options: ["than", "when", "then"], correct: 0 },
    { q: "143. Choose the accurate statement structure containing adverb inversion metrics:", options: ["Barely had the data sync completed when the primary power grid shut down.", "Barely the data sync had completed when the primary power grid shut down.", "Barely had the data sync completed than the primary power grid shut down."], correct: 0 },
    { q: "144. 'Only then did the full-stack developer realize the variable discrepancy.' - This statement is:", options: ["Perfectly valid because 'only then' forces an inversion structure.", "Flawed because 'did' must trail the subject head block parameter.", "An active voice layout structural failure condition."], correct: 0 },
    { q: "145. 'Under no circumstances _______ the master administrator key token be modified without written authorization.'", options: ["can", "should", "Both options are structurally solid inverted expressions"], correct: 2 },
    { q: "146. 'Little _______ the corporate client anticipate the rapid scaling of the PWA asset portal.'", options: ["did", "had", "was"], correct: 0 },
    { q: "147. 'Never in my entire career _______ I seen such optimized CSS variable implementations.'", options: ["have", "had", "did"], correct: 0 },
    { q: "148. Complete the negative layout restriction sequence string block: 'On no account _______ we...'", options: ["can", "should", "Both choices are grammatically acceptable under inversion models"], correct: 2 },
    { q: "149. Choose the accurate alignment matching secondary metrics constraints:", options: ["Hardly had the compiler finished checking code logic when the alert tone played.", "Hardly the compiler had finished checking code logic when the alert tone played.", "Hardly had the compiler finished checking code logic than the alert tone played."], correct: 0 },
    { q: "150. What is the fundamental operational objective of applying subject-auxiliary inversion following a negative adverbial opener?", options: ["To add intense focal emphasis and preserve proper syntax arrangement parameters", "To reduce the required character length of the text block", "To convert the statement format into an interrogative framework loop"], correct: 0 },

    // BATCH 4: Confusing Word Pairs, Intensifiers, and Syntax Pitfalls (151 - 200)
    { q: "151. Identify the correct adverbial position variant:", options: ["He works enough hard to clear evaluations.", "He works hard enough to clear evaluations.", "He enough works hard to clear."], correct: 1 },
    { q: "152. 'The logic engine is too complex to modify without senior guidance.' - What does 'too' signify here?", options: ["It means it is very simple to modify.", "It means it is excessively complex, making it impossible/unwise to modify alone.", "It functions as an unnecessary connector element."], correct: 1 },
    { q: "153. Complete the statement safely using correct intensifier pairs: 'The data layout design is _______ simple to use.'", options: ["very", "too", "quite"], correct: 0 },
    { q: "154. Fix the structural error trap: 'The math game puzzle application level is too simple to clear easily.'", options: ["Change 'too' to 'very' because the consequence is positive/achievable.", "Change 'too' to 'enough'.", "The sentence is already syntactically immaculate."], correct: 0 },
    { q: "155. 'Suresh _______ worked on his portfolio app module, so he failed the technical evaluation.' - Choose the word:", options: ["hard", "hardly", "hardly ever"], correct: 1 },
    { q: "156. 'The candidate practiced _______ on coding structures, securing an honors diploma.' - Choose the word:", options: ["hard", "hardly", "hardly ever"], correct: 0 },
    { q: "157. What is the explicit structural difference between the adverbs 'Hard' and 'Hardly'?", options: ["'Hard' means with intense energy/effort; 'Hardly' means almost not at all.", "'Hard' is an adjective only; 'Hardly' is its corresponding adverb form.", "There is zero semantic variance; they are interchangeable configuration variables."], correct: 0 },
    { q: "158. Complete the structural sequence: 'The full-stack platform was optimized so well that it could _______ crash.'", options: ["hard", "hardly", "highly"], correct: 1 },
    { q: "159. 'He arrived _______ for the corporate technical presentation meeting loop.' - Complete using time adverbs:", options: ["late", "lately", "latest"], correct: 0 },
    { q: "160. 'Have you verified any modern JavaScript framework libraries _______?' - Choose the accurate option:", options: ["late", "lately", "latest"], correct: 1 },
    { q: "161. What does the adverb 'lately' explicitly signify in formal high school board syntax structures?", options: ["It means recently or within a short period leading up to the present.", "It means arriving after the scheduled boundary time limits.", "It acts as a superlative degree metric variable."], correct: 0 },
    { q: "162. 'The system administrator has been working excessively hard _______.' - Select the correct word:", options: ["late", "lately", "latest"], correct: 1 },
    { q: "163. Complete the logic loop: 'The digital banner graphic asset was positioned _______ up on the main dashboard layout.'", options: ["high", "highly", "highest"], correct: 0 },
    { q: "164. 'The computer science course model is _______ recommended by the master board.'", options: ["high", "highly", "higher"], correct: 1 },
    { q: "165. Choose the accurate line variation free of semantic conflicts:", options: ["The technical instructor spoke highly of the student preparation outcomes.", "The technical instructor spoke high of the student preparation outcomes.", "The technical instructor spoke highest of the student preparation outcomes."], correct: 0 },
    { q: "166. 'The validation loop failed because the variables were declared _______.' - Choose the manner modifier:", options: ["wrong", "wrongly", "wrongful"], correct: 1 },
    { q: "167. Identify the error-free sentence structure option matching standard grammar metrics:", options: ["The interactive game functions perfectly now.", "The interactive game functions perfect now.", "The interactive game perfect functions now."], correct: 0 },
    { q: "168. 'The interface layout parameters look _______ clean and minimalist.' - Choose the intensifier:", options: ["very", "too", "much"], correct: 0 },
    { q: "169. Fix the syntax trap line: 'I am much happy with your responsive doctor dashboard setup.'", options: ["I am very happy with your responsive doctor dashboard setup.", "I am too happy with your responsive doctor dashboard setup.", "No correction required statement layout format."], correct: 0 },
    { q: "170. When modifying a past participle verb form, which intensive adverb is standard? 'He was _______ pleased.'", options: ["much", "very", "too"], correct: 0 },
    { q: "171. Choose the accurate statement structure containing past participle modifiers:", options: ["The team was much interested in exploring the new diagnostic script framework.", "The team was very interested in exploring the new diagnostic script framework.", "The team was too interested in exploring the new diagnostic script framework."], correct: 0 },
    { q: "172. 'The full-stack database software structure is _______ superior to the legacy platform model.'", options: ["much", "very", "too"], correct: 0 },
    { q: "173. What is the standard distribution rule for intensifiers 'very' and 'much' before adjectives?", options: ["'Very' is used with positive degree adjectives; 'Much' is used with comparative degree adjectives.", "'Very' is used with comparative degree adjectives; 'Much' is used with positive degree adjectives.", "They can be used interchangeably across all degree levels without structural restrictions."], correct: 0 },
    { q: "174. 'The execution speed of the tracking algorithm is _______ faster after index tuning.'", options: ["much", "very", "too"], correct: 0 },
    { q: "175. Complete the structural constraint safely: 'He is _______ wiser than his junior code assistant.'", options: ["much", "very", "too"], correct: 0 },
    { q: "176. Choose the option without structural discrepancies or intensifier error conditions:", options: ["The new medical platform interface dashboard is very much optimized.", "The new medical platform interface dashboard is too much optimized.", "The new medical platform interface dashboard is very optimized layout tracking."], correct: 2 },
    { q: "177. 'The student felt _______ discouraged after the syntax evaluation script crashed his compilation.'", options: ["much", "very", "too"], correct: 1 },
    { q: "178. Identify the statement containing an explicit adverbial syntax error trap condition:", options: ["Suresh runs fastly to catch the city bus to New Delhi.", "Suresh runs fast to catch the city bus to New Delhi.", "Suresh runs quickly to catch the city bus to New Delhi."], correct: 0 },
    { q: "179. Why is the word 'fastly' grammatically prohibited in formal high school testing protocols?", options: ["Because 'fast' functions simultaneously as both the adjective and the adverb form.", "Because it belongs exclusively to conversational slang models.", "Because it shifts the baseline syntax node parameter structure into an abstract noun status."], correct: 0 },
    { q: "180. 'The code conversion tool is running _______.' - Fill using the accurate adverb form:", options: ["fast", "fastly", "quick alternative"], correct: 0 },
    { q: "181. Select the error-free sentence layout option matching formal constraints:", options: ["The corporate server loop executed quite successfully yesterday.", "The corporate server loop executed quiet successfully yesterday.", "The corporate server loop executed quietest successfully yesterday."], correct: 0 },
    { q: "182. 'Please remain completely _______ while the system diagnostics run.' - Choose the target parameter:", options: ["quiet", "quite", "quit"], correct: 0 },
    { q: "183. What is the explicit grammatical difference between 'quite' and 'quiet' inside structural configurations?", options: ["'Quite' is an intensifier adverb meaning completely/fairly; 'Quiet' is an adjective meaning silent.", "'Quite' is an adjective meaning silent; 'Quiet' is an intensifier adverb meaning completely.", "There is zero structural variance; they are graphic variations of an identical root node parameter."], correct: 0 },
    { q: "184. 'The student preparation data records are _______ complete.' - Select the correct adverb:", options: ["quite", "quiet", "quits"], correct: 0 },
    { q: "185. Choose the accurate statement structure containing sequential adverb configurations:", options: ["He rarely ever makes mistake loops inside text naming strings.", "He rarely never makes mistake loops inside text naming strings.", "He rarely always makes mistake loops inside text naming strings."], correct: 0 },
    { q: "186. 'Suresh is _______ tired to continue debugging the style block matrix coordinates tonight.'", options: ["too", "very", "much"], correct: 0 },
    { q: "187. Identify the verbal qualification parameter variant containing double negative errors:", options: ["He could not hardly trace the variable error exception in the editor console.", "He could hardly trace the variable error exception in the editor console.", "He could not trace the variable error exception in the editor console statement loop."], correct: 0 },
    { q: "188. Why is 'could not hardly' flagged as a severe syntax failure condition on board exams?", options: ["Because both 'not' and 'hardly' carry negative values, creating a contradictory double negative.", "Because it forces an illegal inversion loop inside a standard main clause structure.", "Because 'hardly' can only modify infinite verb stems safely."], correct: 0 },
    { q: "189. 'The technical support analyst can _______ identify the unlinked directory roots.'", options: ["scarcely", "not scarcely", "scarcely never"], correct: 0 },
    { q: "190. Complete the statement safely: 'We have _______ any database storage memory left on the tablet host node.'", options: ["hardly", "not hardly", "hardly never"], correct: 0 },
    { q: "191. 'The project manager was _______ annoyed by the constant template variations.'", options: ["rather", "fairly", "quite alternative"], correct: 0 },
    { q: "192. Select the correct adverb pairing format for standard qualitative descriptions:", options: ["The interface dashboard layout is fairly intuitive to navigate.", "The interface dashboard layout is rather intuitive to navigate.", "The interface dashboard layout is too much intuitive to navigate."], correct: 0 },
    { q: "193. What is the general structural distribution variance between intensive modifiers 'fairly' and 'rather'?", options: ["'Fairly' is typically paired with pleasant/positive traits; 'Rather' handles unfavorable/negative traits.", "'Fairly' modifies comparative adjectives exclusively; 'Rather' modifies baseline positive items.", "They operate with identical syntactic coordinates across all types of adjective descriptors."], correct: 0 },
    { q: "194. 'The script runtime error is _______ problematic for low-end configurations.'", options: ["rather", "fairly", "too much alternative"], correct: 0 },
    { q: "195. 'The computer teacher introduced a _______ brilliant logic architecture methodology today.'", options: ["rather", "fairly", "not hardly option"], correct: 0 },
    { q: "196. Choose the option without errors or layout discrepancies containing intensive adverbs:", options: ["The interactive quiz framework operates remarkably smoothly on all platforms.", "The interactive quiz framework operates remarkable smoothly on all platforms.", "The interactive quiz framework operates remarkably smooth on all platforms design configuration."], correct: 0 },
    { q: "197. 'Sita is a _______ structured coder, and her layouts deploy efficiently.'", options: ["highly", "high", "highest position"], correct: 0 },
    { q: "198. Identify the statement containing an explicit intensifier misplacement condition:", options: ["The balance sheet calculation logic was enough accurate to pass testing audits.", "The balance sheet calculation logic was accurate enough to pass testing audits.", "The calculation logic was sufficiently accurate to pass testing audits."], correct: 0 },
    { q: "199. Select the structurally sound sentence parameter variation containing parallel comparative structures:", options: ["The more systematically you align files, the more efficiently your system runs.", "The more systematically you align files, more efficiently your system runs.", "More systematically you align files, the more efficiently your system runs layout model loop."], correct: 0 },
    { q: "200. Which component represents the ultimate structural modifier parameter designed to qualify an action predicate, adjective attribute, or sister modifier element within a text string sequence?", options: ["The Adverb", "The Noun head parameter", "The Preposition connector unit"], correct: 0 }
  ]
};
