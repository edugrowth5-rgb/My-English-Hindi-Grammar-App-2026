/**
 * Garticles.js - Total English Grammar Solution
 * Topic: Articles (Definite & Indefinite - Core Rules & Advanced Exceptions)
 */

if (typeof English === 'undefined') { window.English = {}; }

English.articles = {
    title: "Articles: A, An, The 🎯",
    content: `
        <section style="text-align: left; padding: 10px; font-family: 'Segoe UI', sans-serif;">
            
            <!-- 1. Core Introduction -->
            <div style="background: #fff7ed; padding: 25px; border-radius: 25px; border-left: 10px solid #f97316; margin-bottom: 30px;">
                <h2 style="color: #c2410c; font-size: 2.2rem; margin-top:0;">1. What are Articles?</h2>
                <p style="font-size: 1.3rem; line-height: 1.8;">
                    Articles are words used before a noun to show whether the noun is <b>specific</b> (particular) or <b>general</b> (any). They act like adjectives.
                    <br><br>
                    There are two types of articles: <b>Indefinite (A, An)</b> and <b>Definite (The)</b>.
                </p>
            </div>

            <!-- 2. Indefinite Articles (A vs An) -->
            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #f97316; display: inline-block; margin-bottom: 20px;">2. Indefinite Articles: A & An</h2>
            <p style="font-size: 1.2rem; line-height: 1.6;">Used before <b>singular countable nouns</b> when we talk about them in a general sense.</p>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                <div style="background: #f8fafc; padding: 20px; border-radius: 15px; border: 1px solid #cbd5e1;">
                    <h3 style="color: #334155; margin-top: 0;">Use 'A' (Consonant Sound)</h3>
                    <p style="font-size: 1.1rem;">Used when the next word begins with a <b>consonant sound</b>.</p>
                    <hr>
                    <i>Examples:</i> 
                    <ul>
                        <li><b>A</b> teacher</li>
                        <li><b>A</b> <u>u</u>niversity <span style="color:#f97316;">(Starts with vowel 'U' but sounds like 'Yoo')</span></li>
                        <li><b>A</b> <u>o</u>ne-eyed man <span style="color:#f97316;">(Sounds like 'Wa')</span></li>
                    </ul>
                </div>
                <div style="background: #f8fafc; padding: 20px; border-radius: 15px; border: 1px solid #cbd5e1;">
                    <h3 style="color: #334155; margin-top: 0;">Use 'An' (Vowel Sound)</h3>
                    <p style="font-size: 1.1rem;">Used when the next word begins with a <b>vowel sound</b> (A, E, I, O, U).</p>
                    <hr>
                    <i>Examples:</i> 
                    <ul>
                        <li><b>An</b> apple</li>
                        <li><b>An</b> <u>h</u>our <span style="color:#f97316;">('H' is silent, sounds like 'Au')</span></li>
                        <li><b>An</b> <u>M</u>.C.A. graduate <cite></cite> <span style="color:#f97316;">(Sounds like 'Em')</span></li>
                    </ul>
                </div>
            </div>

            <!-- 3. Definite Article (The) -->
            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #3b82f6; display: inline-block; margin-bottom: 20px;">3. Definite Article: The</h2>
            <p style="font-size: 1.2rem; line-height: 1.6;">Used before singular or plural nouns when the noun is <b>specific, unique, or has already been mentioned</b>.</p>

            <div style="background: white; padding: 20px; border-radius: 20px; border: 1px solid #eee; line-height: 1.8; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                <p style="font-size: 1.2rem;"><b>Key Rules for Using 'The':</b></p>
                <ul style="font-size: 1.15rem; padding-left: 20px;">
                    <li><b>Before Unique Things:</b> <i>The</i> sun, <i>The</i> sky, <i>The</i> earth.</li>
                    <li><b>Before Holy Books, Rivers, Mountains:</b> <i>The</i> Ramayana, <i>The</i> Ganges, <i>The</i> Himalayas.</li>
                    <li><b>Before Superlative Degrees:</b> He is <i>the</i> best boy in the class.</li>
                    <li><b>When repeating a noun:</b> I saw <b>a</b> boy. <b>The</b> boy was crying.</li>
                </ul>
            </div>

            <!-- 4. Zero Article (Omission of Articles) - High School/Higher Class Edge -->
            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #ef4444; display: inline-block; margin: 30px 0 20px 0;">4. Omission of Articles (High School Rules)</h2>
            <div style="background: #fef2f2; padding: 20px; border-radius: 15px; border-left: 5px solid #ef4444;">
                <p style="font-size: 1.15rem; margin: 0; line-height: 1.7;">
                    Do <b>NOT</b> use articles before:
                    <br>❌ <b>Proper Nouns:</b> Delhi, Prashant.
                    <br>❌ <b>Abstract Nouns (in general sense):</b> Honesty is the best policy.
                    <br>❌ <b>Languages or School Subjects:</b> He is learning English grammar.
                    <br>❌ <b>Meals:</b> Dinner is ready.
                </p>
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
    /* --- Garticles.js: 200 Pure Articles Questions --- */

quizData: [
    // BATCH 1: Basic Indefinite Articles - A vs An (1 - 50)
    { q: "1. Copper is _______ useful metal.", options: ["a", "an", "the"], correct: 0 },
    { q: "2. He returned after _______ hour.", options: ["a", "an", "no article"], correct: 1 },
    { q: "3. Sri Lanka is _______ island.", options: ["a", "an", "the"], correct: 1 },
    { q: "4. I saw _______ one-eyed man yesterday.", options: ["a", "an", "the"], correct: 0 },
    { q: "5. My friend is _______ university professor.", options: ["a", "an", "the"], correct: 0 },
    { q: "6. He is _______ honest officer.", options: ["a", "an", "the"], correct: 1 },
    { q: "7. She bought _______ umbrella for the rainy season.", options: ["a", "an", "the"], correct: 1 },
    { q: "8. This is _______ European custom.", options: ["a", "an", "the"], correct: 0 },
    { q: "9. Raman is _______ M.C.A. graduate.", options: ["a", "an", "the"], correct: 1 },
    { q: "10. He is _______ engineer in a software firm.", options: ["a", "an", "the"], correct: 1 },
    { q: "11. There is _______ union of workers in this factory.", options: ["a", "an", "the"], correct: 0 },
    { q: "12. She wants to buy _______ orange.", options: ["a", "an", "the"], correct: 1 },
    { q: "13. It was _______ unanimous decision by the jury.", options: ["a", "an", "the"], correct: 0 },
    { q: "14. We saw _______ elephant at the zoo.", options: ["a", "an", "the"], correct: 1 },
    { q: "15. I need _______ one-rupee coin.", options: ["a", "an", "the"], correct: 0 },
    { q: "16. Yesterday, _______ UFO was reportedly spotted.", options: ["a", "an", "the"], correct: 0 },
    { q: "17. He sent _______ S.O.S. signal into the air.", options: ["a", "an", "the"], correct: 1 },
    { q: "18. She is _______ heir to a massive property.", options: ["a", "an", "the"], correct: 1 },
    { q: "19. This is _______ historic occasion for the school.", options: ["a", "an", "the"], correct: 0 },
    { q: "20. Give me _______ inkpot from the shelf.", options: ["a", "an", "the"], correct: 1 },
    { q: "21. His brother is _______ MLA from this district.", options: ["a", "an", "the"], correct: 1 },
    { q: "22. The cat caught _______ ugly little mouse.", options: ["a", "an", "the"], correct: 1 },
    { q: "23. He lives in _______ humble cottage.", options: ["a", "an", "the"], correct: 0 },
    { q: "24. I received _______ e-mail from my principal.", options: ["a", "an", "the"], correct: 1 },
    { q: "25. He is _______ honorable gentleman.", options: ["a", "an", "the"], correct: 1 },
    { q: "26. Iron is _______ heavy metal.", options: ["a", "an", "the"], correct: 0 },
    { q: "27. She wants to become _______ air hostess.", options: ["a", "an", "the"], correct: 1 },
    { q: "28. Writing is _______ useful skill.", options: ["a", "an", "the"], correct: 0 },
    { q: "29. He wears _______ uniform to school.", options: ["a", "an", "the"], correct: 0 },
    { q: "30. The teacher asked _______ easy question.", options: ["a", "an", "the"], correct: 1 },
    { q: "31. It was _______ exciting football match.", options: ["a", "an", "the"], correct: 1 },
    { q: "32. I found _______ empty bottle on the desk.", options: ["a", "an", "the"], correct: 1 },
    { q: "33. France is _______ great European country.", options: ["a", "an", "the"], correct: 0 },
    { q: "34. My father is _______ B.A. graduate.", options: ["a", "an", "the"], correct: 0 },
    { q: "35. His uncle is _______ F.I.R. officer.", options: ["a", "an", "the"], correct: 1 },
    { q: "36. I have _______ unique plan to solve this puzzle.", options: ["a", "an", "the"], correct: 0 },
    { q: "37. He is _______ boy who broke the glass window.", options: ["a", "an", "the"], correct: 2 },
    { q: "38. She is _______ smart and intelligent student.", options: ["a", "an", "the"], correct: 0 },
    { q: "39. Bring me _______ open textbook.", options: ["a", "an", "the"], correct: 1 },
    { q: "40. This software has _______ user-friendly interface.", options: ["a", "an", "the"], correct: 0 },
    { q: "41. The children saw _______ ostrich in the park.", options: ["a", "an", "the"], correct: 1 },
    { q: "42. He made _______ mistake in his calculations.", options: ["a", "an", "the"], correct: 0 },
    { q: "43. Are you _______ member of this sports club?", options: ["a", "an", "the"], correct: 0 },
    { q: "44. She presented _______ wonderful idea.", options: ["a", "an", "the"], correct: 0 },
    { q: "45. It took us _______ year to complete the project.", options: ["a", "an", "the"], correct: 0 },
    { q: "46. He is _______ NCC cadet in his college.", options: ["a", "an", "the"], correct: 1 },
    { q: "47. There is _______ hotel near our railway station.", options: ["a", "an", "the"], correct: 0 },
    { q: "48. I always carry _______ notebook with me.", options: ["a", "an", "the"], correct: 0 },
    { q: "49. Give the baby _______ ice cube to play with.", options: ["a", "an", "the"], correct: 1 },
    { q: "50. He is studying in _______ X-ray laboratory.", options: ["a", "an", "the"], correct: 1 },

    // BATCH 2: Core and Advanced Use of Definite Article - The (51 - 100)
    { q: "51. _______ sun rises in the east.", options: ["A", "An", "The"], correct: 2 },
    { q: "52. He is _______ best boy in our classroom.", options: ["a", "an", "the"], correct: 2 },
    { q: "53. _______ Ganges is considered a holy river.", options: ["A", "An", "The"], correct: 2 },
    { q: "54. I read _______ Ramayana last month.", options: ["a", "an", "the"], correct: 2 },
    { q: "55. _______ Pacific Ocean is the deepest ocean.", options: ["A", "An", "The"], correct: 2 },
    { q: "56. This is _______ tallest building in the city.", options: ["a", "an", "the"], correct: 2 },
    { q: "57. _______ earth rotates on its own axis.", options: ["A", "An", "The"], correct: 2 },
    { q: "58. He plays _______ flute beautifully.", options: ["a", "an", "the"], correct: 2 },
    { q: "59. _______ Himalayas protect India from cold winds.", options: ["A", "An", "The"], correct: 2 },
    { q: "60. Draw _______ map of India on the blackboard.", options: ["a", "an", "the"], correct: 2 },
    { q: "61. _______ rich should always help the poor.", options: ["A", "An", "The"], correct: 2 },
    { q: "62. We visited _______ Taj Mahal last week.", options: ["a", "an", "the"], correct: 2 },
    { q: "63. _______ moon shines brightly tonight.", options: ["A", "An", "The"], correct: 2 },
    { q: "64. He is _______ Einstein of our school team.", options: ["a", "an", "the"], correct: 2 },
    { q: "65. Look at _______ stars in the dark sky.", options: ["a", "an", "the"], correct: 2 },
    { q: "66. _______ French defeated the Germans in the war.", options: ["A", "An", "The"], correct: 2 },
    { q: "67. This is _______ very book I was looking for.", options: ["a", "an", "the"], correct: 2 },
    { q: "68. Who is _______ President of the United States?", options: ["a", "an", "the"], correct: 2 },
    { q: "69. He was _______ first runner to reach the line.", options: ["a", "an", "the"], correct: 2 },
    { q: "70. _______ Bhagavad Gita contains timeless wisdom.", options: ["A", "An", "The"], correct: 2 },
    { q: "71. Which is _______ longest river in the world?", options: ["a", "an", "the"], correct: 2 },
    { q: "72. _______ Indian Ocean is named after our country.", options: ["A", "An", "The"], correct: 2 },
    { q: "73. He returned on _______ fifth of March.", options: ["a", "an", "the"], correct: 2 },
    { q: "74. _______ sky is covered with dark clouds.", options: ["A", "An", "The"], correct: 2 },
    { q: "75. She is _______ most talented girl in the choir.", options: ["a", "an", "the"], correct: 2 },
    { q: "76. The ship sailed across _______ Red Sea.", options: ["a", "an", "the"], correct: 2 },
    { q: "77. _______ Sahara is the largest hot desert.", options: ["A", "An", "The"], correct: 2 },
    { q: "78. He is reading _______ Times of India newspaper.", options: ["a", "an", "the"], correct: 2 },
    { q: "79. They went to explore _______ Andaman Islands.", options: ["a", "an", "the"], correct: 2 },
    { q: "80. This is _______ second time I am warning you.", options: ["a", "an", "the"], correct: 2 },
    { q: "81. _______ dark room needs plenty of ventilation.", options: ["A", "An", "The"], correct: 0 },
    { q: "82. I saw a dog. _______ dog was chasing a cat.", options: ["A", "An", "The"], correct: 2 },
    { q: "83. Switch off _______ television before sleeping.", options: ["a", "an", "the"], correct: 2 },
    { q: "84. _______ Arabian Nights is a collection of tales.", options: ["A", "An", "The"], correct: 2 },
    { q: "85. Meet me in _______ library at noon.", options: ["a", "an", "the"], correct: 2 },
    { q: "86. _______ United Kingdom consists of four nations.", options: ["A", "An", "The"], correct: 2 },
    { q: "87. He is _______ dark-skinned boy sitting in front.", options: ["a", "an", "the"], correct: 2 },
    { q: "88. They decided to cross _______ Atlantic Ocean.", options: ["a", "an", "the"], correct: 2 },
    { q: "89. Give me _______ book that is kept on the shelf.", options: ["a", "an", "the"], correct: 2 },
    { q: "90. _______ more you practice, the better you get.", options: ["A", "An", "The"], correct: 2 },
    { q: "91. He joined _______ Indian Navy last year.", options: ["a", "an", "the"], correct: 2 },
    { q: "92. Wisdom is _______ greatest virtue of a leader.", options: ["a", "an", "the"], correct: 2 },
    { q: "93. This is _______ only solution to our problem.", options: ["a", "an", "the"], correct: 2 },
    { q: "94. _______ higher we go, the cooler it becomes.", options: ["A", "An", "The"], correct: 2 },
    { q: "95. She works for _______ BBC news channel.", options: ["a", "an", "the"], correct: 2 },
    { q: "96. I love to watch _______ sun setting in the west.", options: ["a", "an", "the"], correct: 2 },
    { q: "97. Who is _______ cleverest boy in this section?", options: ["a", "an", "the"], correct: 2 },
    { q: "98. _______ dynamic interface of this app is great.", options: ["A", "An", "The"], correct: 2 },
    { q: "99. He belongs to _______ middle-class family.", options: ["a", "an", "the"], correct: 0 },
    { q: "100. _______ water in this bottle is completely pure.", options: ["A", "An", "The"], correct: 2 },

    // BATCH 3: Omission of Articles / Zero Article (101 - 150)
    { q: "101. _______ honesty is the best policy.", options: ["A", "The", "No article"], correct: 2 },
    { q: "102. I am currently learning _______ English grammar.", options: ["a", "the", "no article"], correct: 2 },
    { q: "103. _______ gold is a precious yellow metal.", options: ["A", "The", "No article"], correct: 2 },
    { q: "104. They regularly go to school to learn _______ mathematics.", options: ["a", "the", "no article"], correct: 2 },
    { q: "105. We generally have _______ lunch at 1:00 PM.", options: ["a", "the", "no article"], correct: 2 },
    { q: "106. _______ New Delhi is the capital city of India.", options: ["A", "The", "No article"], correct: 2 },
    { q: "107. Wisdom is better than _______ physical strength.", options: ["a", "the", "no article"], correct: 2 },
    { q: "108. He suffering from _______ malaria.", options: ["a", "the", "no article"], correct: 2 },
    { q: "109. _______ iron is highly useful for construction.", options: ["A", "The", "No article"], correct: 2 },
    { q: "110. They play _______ cricket every Sunday afternoon.", options: ["a", "the", "no article"], correct: 2 },
    { q: "111. _______ water is essential for human survival.", options: ["A", "The", "No article"], correct: 2 },
    { q: "112. She is an expert in teaching _______ physics.", options: ["a", "the", "no article"], correct: 2 },
    { q: "113. _______ platinum is rarer than gold.", options: ["A", "The", "No article"], correct: 2 },
    { q: "114. We went to visit him at _______ hospital.", options: ["a", "the", "no article"], correct: 2 },
    { q: "115. They communicate with each other in _______ Hindi.", options: ["a", "the", "no article"], correct: 2 },
    { q: "116. _______ virtue is its own reward.", options: ["A", "The", "No article"], correct: 2 },
    { q: "117. He was elected _______ chairman of our committee.", options: ["a", "the", "no article"], correct: 2 },
    { q: "118. Rice is the staple food of _______ Asians.", options: ["a", "the", "no article"], correct: 1 },
    { q: "119. They are invited to _______ dinner tonight.", options: ["a", "the", "no article"], correct: 2 },
    { q: "120. _______ copper is found in many regions.", options: ["A", "The", "No article"], correct: 2 },
    { q: "121. I love listening to _______ classical music.", options: ["a", "the", "no article"], correct: 2 },
    { q: "122. They live near _______ Mount Everest.", options: ["a", "the", "no article"], correct: 2 },
    { q: "123. _______ dynamic programming requires strategy.", options: ["A", "The", "No article"], correct: 2 },
    { q: "124. He loves to study _______ history of art.", options: ["a", "the", "no article"], correct: 1 },
    { q: "125. Plants release _______ oxygen during the day.", options: ["a", "the", "no article"], correct: 2 },
    { q: "126. Man is _______ social animal.", options: ["a", "the", "no article"], correct: 0 },
    { q: "127. _______ diamond is the hardest natural substance.", options: ["A", "The", "No article"], correct: 2 },
    { q: "128. He speaks _______ French exceptionally fluently.", options: ["a", "the", "no article"], correct: 2 },
    { q: "129. They have decided to study _______ science.", options: ["a", "the", "no article"], correct: 2 },
    { q: "130. Avoid _______ bad company at all times.", options: ["a", "the", "no article"], correct: 2 },
    { q: "131. The table is made of _______ solid oak wood.", options: ["a", "the", "no article"], correct: 2 },
    { q: "132. _______ corruption should be eradicated completely.", options: ["A", "The", "No article"], correct: 2 },
    { q: "133. They travel to work by _______ metro train.", options: ["a", "the", "no article"], correct: 2 },
    { q: "134. She prefers _______ green tea over black coffee.", options: ["a", "the", "no article"], correct: 2 },
    { q: "135. _______ youth is the springtime of life.", options: ["A", "The", "No article"], correct: 2 },
    { q: "136. Children love playing with _______ soft sand.", options: ["a", "the", "no article"], correct: 2 },
    { q: "137. He likes to play _______ football after school.", options: ["a", "the", "no article"], correct: 2 },
    { q: "138. _______ silver is cheaper than gold metal.", options: ["A", "The", "No article"], correct: 2 },
    { q: "139. He is a resident of _______ North America.", options: ["a", "the", "no article"], correct: 2 },
    { q: "140. We need to cultivate _______ good habits.", options: ["a", "the", "no article"], correct: 2 },
    { q: "141. They are going to serve _______ breakfast now.", options: ["a", "the", "no article"], correct: 2 },
    { q: "142. My brother works as _______ computer engineer.", options: ["a", "an", "the"], correct: 1 },
    { q: "143. _______ knowledge is power in modern times.", options: ["A", "The", "No article"], correct: 2 },
    { q: "144. They reside in _______ active city zone.", options: ["a", "an", "the"], correct: 1 },
    { q: "145. He owns _______ exceptionally beautiful house.", options: ["a", "an", "the"], correct: 1 },
    { q: "146. _______ time flies when you are happy.", options: ["A", "The", "No article"], correct: 2 },
    { q: "147. She prefers studying _______ biology in college.", options: ["a", "the", "no article"], correct: 2 },
    { q: "148. The ring is crafted out of _______ pure gold.", options: ["a", "the", "no article"], correct: 2 },
    { q: "149. He likes to drink _______ hot milk at night.", options: ["a", "the", "no article"], correct: 2 },
    { q: "150. _______ nature looks beautiful in spring.", options: ["A", "The", "No article"], correct: 2 },

    // BATCH 4: Comprehensive Mixed Practice and Exceptions (151 - 200)
    { q: "151. She is _______ untidy girl in our neighborhood.", options: ["a", "an", "the"], correct: 1 },
    { q: "152. I have bought _______ one-way ticket to London.", options: ["a", "an", "the"], correct: 0 },
    { q: "153. _______ umbrella is completely useless in a storm.", options: ["A", "An", "The"], correct: 1 },
    { q: "154. He wants to purchase _______ small utility vehicle.", options: ["a", "an", "the"], correct: 0 },
    { q: "155. This is _______ inkpot I bought yesterday evening.", options: ["a", "an", "the"], correct: 2 },
    { q: "156. The guide turned out to be _______ honest person.", options: ["a", "an", "the"], correct: 1 },
    { q: "157. He received _______ honorary master's degree.", options: ["a", "an", "the"], correct: 1 },
    { q: "158. He looks as stupid as _______ owl.", options: ["a", "an", "the"], correct: 1 },
    { q: "159. Have you ever seen _______ actual map of tracking?", options: ["a", "an", "the"], correct: 1 },
    { q: "160. This task is _______ exceptionally difficult one.", options: ["a", "an", "the"], correct: 1 },
    { q: "161. Mumbai is _______ Manchester of India.", options: ["a", "an", "the"], correct: 2 },
    { q: "162. He is _______ honor to his native country.", options: ["a", "an", "the"], correct: 1 },
    { q: "163. The boys are hiding behind _______ old wooden barn.", options: ["a", "an", "the"], correct: 2 },
    { q: "164. _______ lion is the king of the jungle.", options: ["A", "An", "The"], correct: 2 },
    { q: "165. The rich merchant gave away _______ bag of coins.", options: ["a", "an", "the"], correct: 0 },
    { q: "166. _______ brave soldiers never fear losing life.", options: ["A", "An", "The"], correct: 2 },
    { q: "167. I love to read _______ short stories of adventure.", options: ["a", "the", "no article"], correct: 2 },
    { q: "168. He can hit a ball across _______ stadium roof.", options: ["a", "an", "the"], correct: 2 },
    { q: "169. What _______ beautiful scenery it is!", options: ["a", "an", "the"], correct: 0 },
    { q: "170. This programmer designed _______ interactive quiz app.", options: ["a", "an", "the"], correct: 1 },
    { q: "171. The application requires _______ unique password key.", options: ["a", "an", "the"], correct: 0 },
    { q: "172. My father likes to read _______ holy Quran daily.", options: ["a", "an", "the"], correct: 2 },
    { q: "173. The cruise sailed across _______ Mediterranean Sea.", options: ["a", "an", "the"], correct: 2 },
    { q: "174. He climbed up to _______ top of the hill.", options: ["a", "an", "the"], correct: 2 },
    { q: "175. This is _______ historical turning point of tech.", options: ["a", "an", "the"], correct: 0 },
    { q: "176. Which country is _______ largest producer of gold?", options: ["a", "an", "the"], correct: 2 },
    { q: "177. The digital banner features _______ minimalist 3D logo.", options: ["a", "an", "the"], correct: 0 },
    { q: "178. The text requires _______ careful semantic alignment.", options: ["a", "an", "the"], correct: 0 },
    { q: "179. They went to visit _______ active volcanic zone.", options: ["a", "an", "the"], correct: 1 },
    { q: "180. He represents himself as _______ unified force.", options: ["a", "an", "the"], correct: 0 },
    { q: "181. They prefer to eat _______ organic green vegetables.", options: ["a", "the", "no article"], correct: 2 },
    { q: "182. She showed _______ great courage during the trial.", options: ["a", "the", "no article"], correct: 2 },
    { q: "183. They speak _______ fluent German language.", options: ["a", "the", "no article"], correct: 2 },
    { q: "184. The computer teacher provided _______ detailed tutorial.", options: ["a", "an", "the"], correct: 0 },
    { q: "185. I found _______ old notebook containing code structures.", options: ["a", "an", "the"], correct: 1 },
    { q: "186. Give the student _______ informative master journal.", options: ["a", "an", "the"], correct: 1 },
    { q: "187. The math application displays _______ progressive level.", options: ["a", "an", "the"], correct: 0 },
    { q: "188. They engineered _______ backend core for the system.", options: ["a", "an", "the"], correct: 1 },
    { q: "189. The system tracks _______ precise timeline of entries.", options: ["a", "an", "the"], correct: 0 },
    { q: "190. He is _______ honors diploma graduate in web.", options: ["a", "an", "the"], correct: 1 },
    { q: "191. They organized _______ structured evaluation pattern.", options: ["a", "an", "the"], correct: 0 },
    { q: "192. The client requested _______ simple corporate layout.", options: ["a", "an", "the"], correct: 0 },
    { q: "193. It requires _______ ultimate level of attention.", options: ["a", "an", "the"], correct: 1 },
    { q: "194. This operates on _______ absolute scale of values.", options: ["a", "an", "the"], correct: 1 },
    { q: "195. It was _______ error caused by variable mismatch.", options: ["a", "an", "the"], correct: 1 },
    { q: "196. The developer built _______ online medical platform.", options: ["a", "an", "the"], correct: 1 },
    { q: "197. The doctor works in _______ exceptionally busy clinic.", options: ["a", "an", "the"], correct: 1 },
    { q: "198. The software runs _______ execution loop continuously.", options: ["a", "an", "the"], correct: 0 },
    { q: "199. What _______ magnificent synchronization of elements!", options: ["a", "an", "the"], correct: 0 },
    { q: "200. This is _______ complete set of sample parameters.", options: ["a", "an", "the"], correct: 0 }
]
};
