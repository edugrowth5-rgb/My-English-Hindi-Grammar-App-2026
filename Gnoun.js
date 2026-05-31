/**
 * Gnoun.js - Total English Grammar Solution
 * Topic: Nouns (Classification, Gender, Number, Case & Advanced Syntax Rules)
 */

if (typeof English === 'undefined') { window.English = {}; }

English.noun = {
    title: "The Noun: Core & Advanced Grammar 🏷️",
    content: `
        <section style="text-align: left; padding: 10px; font-family: 'Segoe UI', sans-serif;">
            
            <!-- 1. Conceptual Breakdown -->
            <div style="background: #eff6ff; padding: 25px; border-radius: 25px; border-left: 10px solid #3b82f6; margin-bottom: 30px;">
                <h2 style="color: #1e40af; font-size: 2.2rem; margin-top:0;">1. What is a Noun?</h2>
                <p style="font-size: 1.3rem; line-height: 1.8;">
                    A <b>Noun</b> is a word used as the name of a person, place, thing, animal, quality, condition, or activity. 
                    In modern linguistics, it functions as the head of a noun phrase.
                    <br><br>
                    <i>Example:</i> <b>"Prashant Sagar</b> teaches his <b>students</b> with great <b>enthusiasm</b>." (Prashant Sagar, students, and enthusiasm are all nouns).
                </p>
            </div>

            <!-- 2. Classification of Nouns (Class 5-10 Core) -->
            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #3b82f6; display: inline-block; margin-bottom: 20px;">2. Classification (5 Main Types)</h2>
            <div style="background: white; padding: 20px; border-radius: 20px; border: 1px solid #eee; line-height: 1.8; box-shadow: 0 4px 10px rgba(0,0,0,0.05); margin-bottom: 30px;">
                <p style="font-size: 1.2rem;"><b>1. Proper Noun (व्यक्तिवाचक):</b> Names a specific person, place, or thing. Always capitalized.<br><i>Examples:</i> India, New Delhi, Jupiter.</p>
                <hr>
                <p style="font-size: 1.2rem;"><b>2. Common Noun (जातिवाचक):</b> A general name given to every person or thing of the same class or kind.<br><i>Examples:</i> teacher, city, book, river.</p>
                <hr>
                <p style="font-size: 1.2rem;"><b>3. Collective Noun (समूहवाचक):</b> Names a group or collection of persons or things taken as a whole.<br><i>Examples:</i> army, crowd, flock, committee, jury.</p>
                <hr>
                <p style="font-size: 1.2rem;"><b>4. Material Noun (द्रव्यवाचक):</b> Names a substance, matter, or material from which things are made.<br><i>Examples:</i> gold, iron, copper, wood, milk.</p>
                <hr>
                <p style="font-size: 1.2rem;"><b>5. Abstract Noun (भाववाचक):</b> Names a quality, action, state, or feeling that cannot be seen or touched.<br><i>Examples:</i> honesty, childhood, bravery, laughter, wisdom.</p>
            </div>

            <!-- 3. Countable vs Uncountable (Modern Grammar) -->
            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #10b981; display: inline-block; margin-bottom: 20px;">3. Countable vs Uncountable</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                <div style="background: #f0fdf4; padding: 20px; border-radius: 15px; border: 1px solid #a7f3d0;">
                    <h3 style="color: #047857; margin-top: 0;">Countable Nouns</h3>
                    <p style="font-size: 1.1rem;">Nouns that can be counted using numbers. They have singular and plural forms.</p>
                    <i>Examples:</i> book (books), student (students), computer.
                </div>
                <div style="background: #fef2f2; padding: 20px; border-radius: 15px; border: 1px solid #fecaca;">
                    <h3 style="color: #b91c1c; margin-top: 0;">Uncountable Nouns</h3>
                    <p style="font-size: 1.1rem;">Nouns that cannot be counted. They do not have plural forms. (Includes Materials & Abstracts).</p>
                    <i>Examples:</i> milk, gold, honesty, hair, information, furniture.
                </div>
            </div>

            <!-- 4. Advanced Syntax & Noun Cases (Class 11 & 12 Edge) -->
            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #ef4444; display: inline-block; margin-bottom: 20px;">4. Noun Cases & Syntax Rules (Advanced)</h2>
            <div style="background: #fffbeb; padding: 25px; border-radius: 20px; border-left: 5px solid #f59e0b; line-height: 1.8;">
                <p style="font-size: 1.2rem; margin-top:0;"><b>A. Noun Cases (कारक):</b></p>
                <ul style="font-size: 1.15rem; padding-left: 20px;">
                    <li><b>Nominative Case:</b> When a noun works as a subject. (e.g., <u>Ram</u> is playing.)</li>
                    <li><b>Objective/Accusative Case:</b> When a noun works as a direct object. (e.g., He loves <u>music</u>.)</li>
                    <li><b>Possessive/Genitive Case:</b> Shows ownership. (e.g., This is <u>Sita's</u> book.)</li>
                </ul>
                <hr>
                <p style="font-size: 1.2rem;"><b>B. Critical Syntax Mistakes to Avoid:</b></p>
                <ul style="font-size: 1.15rem; padding-left: 20px; color: #b45309;">
                    <li>❌ The hardwares are old. ➔  The hardware is old. (Uncountable nouns never take 's').</li>
                    <li>❌ I bought two dozens bananas. ➔  I bought two dozen bananas.</li>
                    <li>❌ Cattle is grazing. ➔  Cattle are grazing. ('Cattle', 'People', 'Gentry' are always plural).</li>
                    <li>❌ Mathematics are tough. ➔  Mathematics is tough. (Names of subjects ending in 's' are singular).</li>
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
    /* --- Gnoun.js: 200 Pure Nouns Questions --- */

quizData: [
    // BATCH 1: Identifying Types of Nouns (1 - 50)
    { q: "1. Which type of noun is 'Honesty'?", options: ["Common Noun", "Collective Noun", "Abstract Noun"], correct: 2 },
    { q: "2. What type of noun is 'Army'?", options: ["Proper Noun", "Collective Noun", "Material Noun"], correct: 1 },
    { q: "3. 'New Delhi is the capital of India.' - In this sentence, 'New Delhi' is a:", options: ["Common Noun", "Proper Noun", "Abstract Noun"], correct: 1 },
    { q: "4. Identify the material noun from the options below:", options: ["Gold", "Ring", "Beautiful"], correct: 0 },
    { q: "5. 'The crowd cheered loudly for the team.' - What kind of noun is 'crowd'?", options: ["Common Noun", "Material Noun", "Collective Noun"], correct: 2 },
    { q: "6. Which of the following words is an abstract noun?", options: ["Child", "Childhood", "Children"], correct: 1 },
    { q: "7. 'The Ganga is a sacred river.' - In this sentence, 'river' is a:", options: ["Proper Noun", "Common Noun", "Collective Noun"], correct: 1 },
    { q: "8. Identify the collective noun: 'A flock of birds flew over the lake.'", options: ["flock", "birds", "lake"], correct: 0 },
    { q: "9. 'This table is made of premium wood.' - Here, 'wood' functions as a:", options: ["Proper Noun", "Material Noun", "Abstract Noun"], correct: 1 },
    { q: "10. Which type of noun represents a state, quality, or action?", options: ["Material Noun", "Common Noun", "Abstract Noun"], correct: 2 },
    { q: "11. 'Shakespeare was a great playwright.' - The word 'Shakespeare' is a:", options: ["Proper Noun", "Common Noun", "Collective Noun"], correct: 0 },
    { q: "12. Find the abstract noun among these options:", options: ["Friend", "Friendly", "Friendship"], correct: 2 },
    { q: "13. 'A pride of lions was basking in the sun.' - The word 'pride' is a:", options: ["Common Noun", "Collective Noun", "Material Noun"], correct: 1 },
    { q: "14. 'Copper is used for making electrical wires.' - The word 'Copper' is a:", options: ["Material Noun", "Proper Noun", "Common Noun"], correct: 0 },
    { q: "15. 'The boys are playing football.' - The word 'boys' belongs to which category?", options: ["Proper Noun", "Common Noun", "Collective Noun"], correct: 1 },
    { q: "16. Which of these is a collective noun for a group of ships?", options: ["Fleet", "Bunch", "Pack"], correct: 0 },
    { q: "17. 'Laughter is good for health.' - The word 'Laughter' is an:", options: ["Abstract Noun", "Common Noun", "Proper Noun"], correct: 0 },
    { q: "18. 'Prashant Sagar is a computer teacher.' - Here, 'teacher' is a:", options: ["Proper Noun", "Common Noun", "Collective Noun"], correct: 1 },
    { q: "19. Identify the material noun: 'She drank a whole glass of milk.'", options: ["glass", "milk", "whole"], correct: 1 },
    { q: "20. 'The jury gave a unanimous verdict.' - The word 'jury' is a:", options: ["Collective Noun", "Common Noun", "Proper Noun"], correct: 0 },
    { q: "21. Which word is a proper noun in: 'We are going to visit Paris next month.'?", options: ["visit", "Paris", "month"], correct: 1 },
    { q: "22. 'His bravery earned him a medal.' - The word 'bravery' is an:", options: ["Abstract Noun", "Common Noun", "Material Noun"], correct: 0 },
    { q: "23. Choose the collective noun for a group of keys or grapes:", options: ["Herd", "Bunch", "Swarm"], correct: 1 },
    { q: "24. 'Plastic is causing severe environmental pollution.' - The word 'Plastic' is a:", options: ["Material Noun", "Common Noun", "Proper Noun"], correct: 0 },
    { q: "25. 'A swarm of bees attacked the hiker.' - The word 'swarm' is a:", options: ["Common Noun", "Collective Noun", "Abstract Noun"], correct: 1 },
    { q: "26. Identify the abstract noun denoting a period of human life:", options: ["Man", "Youth", "Boy"], correct: 1 },
    { q: "27. 'The Mount Everest is the highest peak.' - The words 'Mount Everest' are a:", options: ["Proper Noun", "Common Noun", "Collective Noun"], correct: 0 },
    { q: "28. 'Water is essential for life.' - The word 'Water' represents a:", options: ["Common Noun", "Material Noun", "Abstract Noun"], correct: 1 },
    { q: "29. Find the collective noun: 'The police managed to disperse the angry mob.'", options: ["police", "disperse", "mob"], correct: 2 },
    { q: "30. 'The laptop is kept on the desk.' - The word 'laptop' is a:", options: ["Common Noun", "Proper Noun", "Material Noun"], correct: 0 },
    { q: "31. Which of the following is an abstract noun derived from the verb 'judge'?", options: ["Judicial", "Judgment", "Judge"], correct: 1 },
    { q: "32. 'A pack of wolves surrounded the deer.' - The word 'pack' is a:", options: ["Collective Noun", "Common Noun", "Proper Noun"], correct: 0 },
    { q: "33. 'The bridge is constructed out of solid steel.' - Here, 'steel' is a:", options: ["Common Noun", "Material Noun", "Abstract Noun"], correct: 1 },
    { q: "34. 'The Nile is the longest river.' - The word 'Nile' is a:", options: ["Proper Noun", "Common Noun", "Collective Noun"], correct: 0 },
    { q: "35. 'Poverty is a curse.' - The word 'Poverty' is an:", options: ["Abstract Noun", "Common Noun", "Proper Noun"], correct: 0 },
    { q: "36. Which of these is a collective noun for a group of musicians?", options: ["Band", "Crew", "Gang"], correct: 0 },
    { q: "37. 'Cotton clothes are comfortable in summer.' - The word 'Cotton' is a:", options: ["Material Noun", "Common Noun", "Abstract Noun"], correct: 0 },
    { q: "38. 'The students are sitting in the classroom.' - The word 'classroom' is a:", options: ["Common Noun", "Proper Noun", "Collective Noun"], correct: 0 },
    { q: "39. Identify the abstract noun: 'The depth of the ocean is mysterious.'", options: ["depth", "ocean", "mysterious"], correct: 0 },
    { q: "40. 'A school of fish was swimming near the coral reef.' - The word 'school' here is a:", options: ["Common Noun", "Collective Noun", "Proper Noun"], correct: 1 },
    { q: "41. 'Jupiter is the largest planet in the solar system.' - 'Jupiter' is a:", options: ["Proper Noun", "Common Noun", "Collective Noun"], correct: 0 },
    { q: "42. 'The architecture of this palace displays immense beauty.' - 'beauty' is an:", options: ["Abstract Noun", "Common Noun", "Material Noun"], correct: 0 },
    { q: "43. Find the material noun: 'Woolen sweaters are worn in winter.'", options: ["Sweaters", "Wool", "Winter"], correct: 1 },
    { q: "44. 'A crew of sailors boarded the ship.' - The word 'crew' is a:", options: ["Collective Noun", "Common Noun", "Proper Noun"], correct: 0 },
    { q: "45. 'The book contains valuable information.' - The word 'book' is a:", options: ["Common Noun", "Proper Noun", "Material Noun"], correct: 0 },
    { q: "46. What type of noun is 'Cruelty'?", options: ["Common Noun", "Abstract Noun", "Proper Noun"], correct: 1 },
    { q: "47. Choose the collective noun for a group of cattle or elephants:", options: ["Flock", "Herd", "Pack"], correct: 1 },
    { q: "48. 'Silver ornaments are shining.' - The word 'Silver' is a:", options: ["Material Noun", "Common Noun", "Proper Noun"], correct: 0 },
    { q: "49. 'We must show kindness to animals.' - The word 'kindness' is an:", options: ["Abstract Noun", "Common Noun", "Proper Noun"], correct: 0 },
    { q: "50. 'A troupe of dancers performed gracefully.' - The word 'troupe' is a:", options: ["Common Noun", "Collective Noun", "Proper Noun"], correct: 1 },

    // BATCH 2: Countable vs Uncountable Nouns (51 - 100)
    { q: "51. Identify the uncountable noun among the following options:", options: ["Water", "Pen", "Chair"], correct: 0 },
    { q: "52. Which of the following nouns is countable?", options: ["Information", "Luggage", "Notebook"], correct: 2 },
    { q: "53. 'The chef added some salt to the soup.' - The word 'salt' is an:", options: ["Countable Noun", "Uncountable Noun", "Plural Noun"], correct: 1 },
    { q: "54. 'He bought three apples from the shop.' - The word 'apples' is a:", options: ["Countable Noun", "Uncountable Noun", "Abstract Noun"], correct: 0 },
    { q: "55. 'Knowledge is a powerful tool.' - The word 'Knowledge' is an:", options: ["Countable Noun", "Uncountable Noun", "Collective Noun"], correct: 1 },
    { q: "56. Which of the following is an uncountable material noun?", options: ["Coin", "Gold", "Ring"], correct: 1 },
    { q: "57. 'The classroom is filled with modern furniture.' - The word 'furniture' is:", options: ["Countable", "Uncountable", "Countable plural"], correct: 1 },
    { q: "58. 'I need some advice regarding my career.' - The word 'advice' is:", options: ["Countable Noun", "Uncountable Noun", "Proper Noun"], correct: 1 },
    { q: "59. Which item in a kitchen is considered a countable noun?", options: ["Milk", "Spoon", "Flour"], correct: 1 },
    { q: "60. 'The atmospheric traffic was caused by heavy rain.' - The word 'traffic' is:", options: ["Countable", "Uncountable", "Collective Noun"], correct: 1 },
    { q: "61. Identify the countable noun from the list:", options: ["Rice", "Sand", "Grain"], correct: 2 },
    { q: "62. 'She has long, beautiful hair.' - The word 'hair' is generally treated as:", options: ["Countable", "Uncountable", "Plural only"], correct: 1 },
    { q: "63. 'We listened to some classical music.' - The word 'music' is:", options: ["Countable Noun", "Uncountable Noun", "Abstract Countable"], correct: 1 },
    { q: "64. 'The suitcase is quite heavy.' - The word 'suitcase' is:", options: ["Countable Noun", "Uncountable Noun", "Material Noun"], correct: 0 },
    { q: "65. 'The company lost a lot of money last quarter.' - The word 'money' is:", options: ["Countable", "Uncountable", "Common Plural"], correct: 1 },
    { q: "66. Which abstract noun can actually be counted in specific scenarios?", options: ["Idea", "Honesty", "Patience"], correct: 0 },
    { q: "67. 'He showed immense patience during the crisis.' - The word 'patience' is:", options: ["Countable Noun", "Uncountable Noun", "Common Noun"], correct: 1 },
    { q: "68. 'The boys are carrying their bags.' - The word 'bags' is a:", options: ["Countable Noun", "Uncountable Noun", "Material Noun"], correct: 0 },
    { q: "69. Find the uncountable noun related to weather conditions:", options: ["Cloud", "Raindrop", "Weather"], correct: 2 },
    { q: "70. 'Pour some oil into the frying pan.' - The word 'oil' is an:", options: ["Uncountable Noun", "Countable Noun", "Abstract Noun"], correct: 0 },
    { q: "71. Which of the following can be counted?", options: ["Oxygen", "Cylinder", "Air"], correct: 1 },
    { q: "72. 'The library bought several new dictionaries.' - The word 'dictionaries' is:", options: ["Countable", "Uncountable", "Abstract"], correct: 0 },
    { q: "73. 'The landscape was covered with thick snow.' - The word 'snow' is:", options: ["Countable Noun", "Uncountable Noun", "Collective Noun"], correct: 1 },
    { q: "74. 'The dynamic application requires high intelligence.' - 'intelligence' is:", options: ["Countable", "Uncountable", "Common"], correct: 1 },
    { q: "75. Identify the countable option:", options: ["Electricity", "Wire", "Power"], correct: 1 },
    { q: "76. 'The work must be completed before sunset.' - The word 'work' here is:", options: ["Countable", "Uncountable", "Action Verb only"], correct: 1 },
    { q: "77. 'The pipeline carries drinking water.' - The word 'water' is:", options: ["Countable", "Uncountable", "Proper Noun"], correct: 1 },
    { q: "78. 'I have a couple of questions to ask.' - The word 'questions' is:", options: ["Countable Noun", "Uncountable Noun", "Collective Noun"], correct: 0 },
    { q: "79. 'The old house was filled with dust.' - The word 'dust' is:", options: ["Countable", "Uncountable", "Abstract"], correct: 1 },
    { q: "80. 'She baked two loaves of bread.' - The word 'bread' itself is:", options: ["Countable", "Uncountable", "Plural count"], correct: 1 },
    { q: "81. Which noun is countable?", options: ["Poetry", "Poem", "Literature"], correct: 1 },
    { q: "82. 'The machinery in the factory is automated.' - The word 'machinery' is:", options: ["Countable", "Uncountable", "Plural Countable"], correct: 1 },
    { q: "83. 'He gave us a piece of information.' - The word 'information' is:", options: ["Countable", "Uncountable", "Collective Noun"], correct: 1 },
    { q: "84. Find the countable noun:", options: ["Luggage", "Baggage", "Bag"], correct: 2 },
    { q: "85. 'Progress requires continuous effort.' - The word 'Progress' is:", options: ["Countable", "Uncountable", "Common Noun"], correct: 1 },
    { q: "86. 'We have plenty of time left.' - The word 'time' in this context is:", options: ["Countable", "Uncountable", "Plural Noun"], correct: 1 },
    { q: "87. Which asset can be structurally counted?", options: ["Wealth", "Property asset", "Gold metal"], correct: 1 },
    { q: "88. 'The desert was filled with hot sand.' - The word 'sand' is:", options: ["Countable", "Uncountable", "Abstract Noun"], correct: 1 },
    { q: "89. 'The baby drank a bottle of juice.' - The word 'juice' is:", options: ["Countable Noun", "Uncountable Noun", "Material count"], correct: 1 },
    { q: "90. Find the countable item:", options: ["Software application", "Code syntax", "Data logic"], correct: 0 },
    { q: "91. 'Fear can paralyze actions.' - The word 'Fear' is an:", options: ["Uncountable Abstract Noun", "Countable Noun", "Proper Noun"], correct: 0 },
    { q: "92. 'The room has five windows.' - The word 'windows' is:", options: ["Countable", "Uncountable", "Material Noun"], correct: 0 },
    { q: "93. 'Sugar is sweet.' - The word 'Sugar' is a:", options: ["Countable Noun", "Uncountable Noun", "Abstract Noun"], correct: 1 },
    { q: "94. Identify the countable element:", options: ["Light wave", "Bulb", "Darkness"], correct: 1 },
    { q: "95. 'The team showed exceptional unity.' - The word 'unity' is:", options: ["Countable", "Uncountable", "Proper Noun"], correct: 1 },
    { q: "96. 'The worker carries a heavy load.' - The word 'load' is:", options: ["Countable", "Uncountable", "Abstract"], correct: 0 },
    { q: "97. 'He likes to consume hot soup.' - The word 'soup' is:", options: ["Countable", "Uncountable", "Common Plural"], correct: 1 },
    { q: "98. Find the countable noun:", options: ["Star", "Space", "Universe space"], correct: 0 },
    { q: "99. 'Losing hope is dangerous.' - The word 'hope' is:", options: ["Countable", "Uncountable", "Proper"], correct: 1 },
    { q: "100. 'The digital layout contains several icons.' - The word 'icons' is:", options: ["Countable", "Uncountable", "Material Noun"], correct: 0 },

    // BATCH 3: Noun Numbers & Genders (101 - 150)
    { q: "101. What is the plural form of the noun 'Knife'?", options: ["Knifes", "Knives", "Knifees"], correct: 1 },
    { q: "102. Choose the correct plural form of 'Child':", options: ["Childs", "Children", "Childrens"], correct: 1 },
    { q: "103. What is the plural form of the compound noun 'Commander-in-chief'?", options: ["Commanders-in-chief", "Commander-in-chiefs", "Commanders-in-chiefs"], correct: 0 },
    { q: "104. Select the singular form of 'Criteria':", options: ["Criterium", "Criterion", "Criterias"], correct: 1 },
    { q: "105. What is the plural form of 'Ox'?", options: ["Oxes", "Oxen", "Oxens"], correct: 1 },
    { q: "106. Find the plural form of the irregular noun 'Goose':", options: ["Gooses", "Gees", "Geese"], correct: 2 },
    { q: "107. What is the plural form of 'Phenomenon'?", options: ["Phenomena", "Phenomenons", "Phenomenas"], correct: 0 },
    { q: "108. Choose the correct plural of 'Step-son':", options: ["Step-sons", "Steps-son", "Steps-sons"], correct: 0 },
    { q: "109. What is the plural form of 'Deer'?", options: ["Deers", "Deer", "Deeres"], correct: 1 },
    { q: "110. Select the correct plural form of 'Thesis':", options: ["Theses", "Thesises", "Thesises"], correct: 0 },
    { q: "111. What is the feminine counterpart of the noun 'Wizard'?", options: ["Witch", "Wizardess", "Sorceress"], correct: 0 },
    { q: "112. Choose the feminine gender of 'Gander':", options: ["Goose", "Duck", "Hen"], correct: 0 },
    { q: "113. What is the feminine form of 'Monk'?", options: ["Nun", "Monkess", "Friar"], correct: 0 },
    { q: "114. Find the feminine gender of 'Czarin' or 'Czar':", options: ["Czarina", "Czarine", "Czars"], correct: 0 },
    { q: "115. What is the masculine gender of the noun 'Doe'?", options: ["Buck", "Stag", "Bull"], correct: 0 },
    { q: "116. Choose the feminine counterpart of 'Fox':", options: ["Vixen", "Foxess", "Bitch"], correct: 0 },
    { q: "117. What is the masculine gender of 'Ewe'?", options: ["Ram", "Stallion", "Boar"], correct: 0 },
    { q: "118. Select the feminine gender form of 'Emperor':", options: ["Emperess", "Empress", "Queen"], correct: 1 },
    { q: "119. What category of gender does the word 'Baby' belong to in modern general use?", options: ["Masculine", "Feminine", "Common Gender"], correct: 2 },
    { q: "120. A non-living thing like 'Computer' belongs to which type of gender?", options: ["Common Gender", "Neuter Gender", "Masculine Gender"], correct: 1 },
    { q: "121. What is the plural form of 'Man-servant'?", options: ["Man-servants", "Men-servants", "Men-servant"], correct: 1 },
    { q: "122. Find the plural form of 'Radius':", options: ["Radii", "Radiuses", "Radiusen"], correct: 0 },
    { q: "123. What is the plural form of 'Formula'?", options: ["Formulas", "Formulae", "Both options are correct"], correct: 2 },
    { q: "124. Choose the plural form of 'Passer-by':", options: ["Passers-by", "Passer-bys", "Passers-bys"], correct: 0 },
    { q: "125. What is the plural form of 'Focus'?", options: ["Focuses", "Foci", "Both options are correct"], correct: 2 },
    { q: "126. What is the feminine counterpart of 'Stag'?", options: ["Hind", "Mare", "Vixen"], correct: 0 },
    { q: "127. What is the feminine form of 'Nephew'?", options: ["Niece", "Nephewess", "Cousin"], correct: 0 },
    { q: "128. Choose the masculine form of 'Spinster'?", options: ["Bachelor", "Boy", "Widower"], correct: 0 },
    { q: "129. The word 'Doctor' is an example of which gender class?", options: ["Masculine", "Feminine", "Common Gender"], correct: 2 },
    { q: "130. Words like 'Table', 'Chair', and 'Pen' are categorized under:", options: ["Neuter Gender", "Common Gender", "Feminine Gender"], correct: 0 },
    { q: "131. What is the plural form of 'Mouse' (the rodent)?", options: ["Mouses", "Mice", "Mices"], correct: 1 },
    { q: "132. What is the plural form of 'Louse'?", options: ["Louses", "Lice", "Lices"], correct: 1 },
    { q: "133. Find the plural form of 'Tooth':", options: ["Tooths", "Teeth", "Teeths"], correct: 1 },
    { q: "134. Select the plural of 'Foot':", options: ["Foots", "Feet", "Feets"], correct: 1 },
    { q: "135. What is the plural form of 'Crisis'?", options: ["Crises", "Crisises", "Crisises"], correct: 0 },
    { q: "136. What is the feminine gender of 'Lord'?", options: ["Lady", "Lordess", "Duchess"], correct: 0 },
    { q: "137. What is the feminine form of 'Duke'?", options: ["Duchess", "Dukess", "Countess"], correct: 0 },
    { q: "138. Choose the feminine gender of 'Hero':", options: ["Heroine", "Heroess", "Actress"], correct: 0 },
    { q: "139. Find the masculine form of 'Bride':", options: ["Groom/Bridegroom", "Bachelor", "Man"], correct: 0 },
    { q: "140. Identify the common gender noun among these choices:", options: ["Cousin", "Uncle", "Aunt"], correct: 0 },
    { q: "141. What is the plural of 'Medium'?", options: ["Mediums", "Media", "Mediae"], correct: 1 },
    { q: "142. What is the plural of 'Index' in mathematics?", options: ["Indexes", "Indices", "Both options are correct"], correct: 2 },
    { q: "143. Find the plural of 'Matrix':", options: ["Matrices", "Matrixes", "Matrixen"], correct: 0 },
    { q: "144. Choose the singular of 'Data' in classical grammar context:", options: ["Datum", "Datam", "Datas"], correct: 0 },
    { q: "145. What is the plural form of 'Syllabus'?", options: ["Syllabi", "Syllabuses", "Both options are correct"], correct: 2 },
    { q: "146. Find the feminine of 'Hart':", options: ["Roe", "Hind", "Ewe"], correct: 0 },
    { q: "147. What is the feminine counterpart of 'Earl'?", options: ["Countess", "Duchess", "Lady"], correct: 0 },
    { q: "148. Identify the neuter gender noun:", options: ["Book", "Parent", "Servant"], correct: 0 },
    { q: "149. Nouns like 'Student' and 'Teacher' represent which gender framework?", options: ["Common Gender", "Neuter Gender", "Masculine Gender"], correct: 0 },
    { q: "150. What is the plural form of 'Alumnus'?", options: ["Alumni", "Alumnae", "Alumnuses"], correct: 0 },

    // BATCH 4: Advanced Syntax Rules & Noun Cases (151 - 200)
    { q: "151. Choose the correct sentence structure:", options: ["The sceneries of Kashmir are beautiful.", "The scenery of Kashmir is beautiful.", "The scenery of Kashmir are beautiful."], correct: 1 },
    { q: "152. Find the noun in the Nominative case: 'The teacher praised the boy.'", options: ["teacher", "boy", "praised"], correct: 0 },
    { q: "153. Identify the noun in the Objective case: 'She purchased a new computer.'", options: ["She", "computer", "purchased"], correct: 1 },
    { q: "154. Which option represents the correct Possessive structure?", options: ["The girls' school", "The girl's school", "Both can be correct depending on count"], correct: 2 },
    { q: "155. Fix the error: 'Mathematics are a highly logical subject.'", options: ["Mathematics is a highly logical subject.", "Mathematics are highly logical subjects.", "No error found."], correct: 0 },
    { q: "156. Complete the sentence: 'The cattle _______ grazing in the valley field.'", options: ["is", "are", "was"], correct: 1 },
    { q: "157. Identify the grammatically sound statement:", options: ["I have bought three dozen bananas.", "I have bought three dozens bananas.", "I have bought three dozens of bananas."], correct: 0 },
    { q: "158. 'The gentry of the town was present at the corporate function.' - Correct this sentence:", options: ["The gentry of the town were present...", "The gentries of the town was present...", "No correction required."], correct: 0 },
    { q: "159. Choose the option that displays correct noun usage:", options: ["All his family members are tech developers.", "All the members of his family are tech developers.", "His family members is tech developers."], correct: 1 },
    { q: "160. 'The committee was divided in its opinion.' - Why is 'was' correct here?", options: ["Because collective nouns always take singular verbs.", "Because the collective noun acts as a unified singular entity here.", "It is grammatically incorrect."], correct: 1 },
    { q: "161. 'The committee _______ divided in their opinions.' - Fill in the blank:", options: ["was", "were", "has"], correct: 1 },
    { q: "162. Identify the accurate sentence:", options: ["Mumps is a dangerous infectious disease.", "Mumps are a dangerous infectious disease.", "Mumps are dangerous infectious diseases."], correct: 0 },
    { q: "163. Complete the syntax logic: 'My spectacles _______ missing from the table desk.'", options: ["is", "are", "was"], correct: 1 },
    { q: "164. 'A pair of spectacles _______ been purchased by me.' - Fill the blank:", options: ["has", "have", "are"], correct: 0 },
    { q: "165. Choose the correct possessive form for joint ownership:", options: ["William and Mary's reign", "William's and Mary's reign", "William and Mary reign"], correct: 0 },
    { q: "166. Choose the correct possessive form for separate ownership:", options: ["John's and David's business cards", "John and David's business cards", "John and David business cards"], correct: 0 },
    { q: "167. Which sentence is free of noun syntax errors?", options: ["The poetry of Keats is phenomenal.", "The poetries of Keats are phenomenal.", "The poetries of Keats is phenomenal."], correct: 0 },
    { q: "168. 'He gave me two pieces of advice.' - Why do we use 'pieces of advice'?", options: ["Because advice is a collective noun.", "Because advice is uncountable and cannot be pluralized as advices.", "It is standard poetry style."], correct: 1 },
    { q: "169. Identify the correct statement regarding non-living possessives:", options: ["The table's leg was broken.", "The leg of the table was broken.", "Both are equally standard."], correct: 1 },
    { q: "170. 'He works out with two ten-pound dumbbells.' - Is this correct?", options: ["Yes, hyphenated compound adjectives remain singular.", "No, it must be ten-pounds dumbbells.", "No, it must be tens-pound dumbbells."], correct: 0 },
    { q: "171. Find the case of the underlined noun: 'The manager gave <u>the employee</u> a warning.'", options: ["Nominative Case", "Dative/Indirect Objective Case", "Possessive Case"], correct: 1 },
    { q: "172. 'A fleet of warships _______ moving towards the dynamic harbor.'", options: ["is", "are", "were"], correct: 0 },
    { q: "173. Select the error-free sentence variant:", options: ["He bought a new pair of trousers.", "He bought a new trousers.", "He bought new pairs of trouser."], correct: 0 },
    { q: "174. Complete the sentence: 'The dynamic politics of the region _______ volatile.'", options: ["is", "are", "has"], correct: 1 },
    { q: "175. 'Billions of dollars _______ spent on digital branding.'", options: ["was", "were", "is"], correct: 1 },
    { q: "176. Identify the correct objective complement case noun structure:", options: ["They elected him president.", "They elected him as president.", "They elected him for president."], correct: 0 },
    { q: "177. Choose the structurally correct option:", options: ["This is my brother-in-law's residential apartment.", "This is my brother's-in-law residential apartment.", "This is my brother-in-laws residential apartment."], correct: 0 },
    { q: "178. 'The criteria of selection _______ strict.' - Fill in the blank safely:", options: ["is", "are", "was"], correct: 1 },
    { q: "179. Identify the error-free form:", options: ["Economics is an interesting subject area.", "Economics are an interesting subject area.", "Economices is an interesting subject area."], correct: 0 },
    { q: "180. 'A series of dynamic lectures _______ been compiled in the system.'", options: ["has", "have", "were"], correct: 0 },
    { q: "181. Find the direct object noun in: 'The developer built a quiz application.'", options: ["developer", "application", "quiz"], correct: 1 },
    { q: "182. Choose the correct structure containing non-finite nouns:", options: ["Swimming is an amazing lifestyle asset.", "Swimmings are amazing lifestyle assets.", "To swimming is amazing."], correct: 0 },
    { q: "183. 'The gentry of this locality _______ highly cooperative.'", options: ["is", "are", "was"], correct: 1 },
    { q: "184. Identify the correct variant:", options: ["I want to verify two items of luggage.", "I want to verify two luggages.", "I want to verify two luggage items."], correct: 0 },
    { q: "185. 'Measles _______ a highly contagious viral medical condition.'", options: ["is", "are", "were"], correct: 0 },
    { q: "186. Find the case of the noun 'computer' in: 'The file was processed by the computer.'", options: ["Nominative Case", "Objective Case (Object of Preposition)", "Possessive Case"], correct: 1 },
    { q: "187. Choose the correct possessive form for a classic singular name ending in S:", options: ["Keats' poems", "Keats's poems", "Both variations are acceptable in modern syntax"], correct: 2 },
    { q: "188. 'The infantry _______ marching ahead systematically.'", options: ["was", "were", "is"], correct: 1 },
    { q: "189. 'Five hundred kilometers _______ a long distance to travel on foot.'", options: ["is", "are", "were"], correct: 0 },
    { q: "190. Identify the mistake: 'The team are in complete agreement over the logo design.'", options: ["It should be 'is' because the collective noun acts as a unified whole here.", "It should be 'am'.", "There is no error structural mismatch."], correct: 0 },
    { q: "191. Find the accurate noun case categorization for 'O King' in: 'Hear my words, O King!'", options: ["Objective Case", "Vocative Case", "Genitive Case"], correct: 1 },
    { q: "192. 'Our information technology infrastructure _______ upgrading.'", options: ["is", "are", "were"], correct: 0 },
    { q: "193. Choose the option without errors:", options: ["He took great pains to compile the code framework.", "He took great pain to compile the code framework.", "He took great paines to compile."], correct: 0 },
    { q: "194. 'The police _______ investigating the algorithmic data breach.'", options: ["is", "are", "was"], correct: 1 },
    { q: "195. Identify the correct possessive logic for an impersonal personified entity:", options: ["Nature's laws", "The laws of nature", "Both options are grammatically solid"], correct: 2 },
    { q: "196. 'Alms _______ distributed systematically among the poor.'", options: ["was", "were", "is"], correct: 1 },
    { q: "197. 'The dynamic mechanics of this puzzle game _______ complex.'", options: ["is", "are", "has"], correct: 1 },
    { q: "198. Select the structurally sound option:", options: ["The data collected are completely authentic.", "The data collected is completely authentic.", "Both are acceptable in modern computational English contexts"], correct: 2 },
    { q: "199. 'Deer _______ found in large numbers inside that sanctuary sanctuary.'", options: ["is", "are", "Both can be correct depending on meaning context"], correct: 2 },
    { q: "200. Which component represents the ultimate head parameter of a standard nominal expression syntax?", options: ["The Adjective link", "The Noun", "The Determiner element"], correct: 1 }
  ]
};
