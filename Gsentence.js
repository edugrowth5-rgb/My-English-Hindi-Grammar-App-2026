/**
 * Gsentence.js - English Grammar Topic
 * Updated: Fresh Look with Large Fonts
 */

if (typeof English === 'undefined') { window.English = {}; }

English.sentence = {
    title: "The Sentence: Complete Lesson & Quiz 📝",
    content: `
        <section style="text-align: left; padding: 10px;">
            <h2 style="color: #4D96FF; font-size: 2.2rem; border-bottom: 3px solid #4D96FF; display: inline-block;">1. What is a Sentence? (परिभाषा)</h2>
            <p style="font-size: 1.4rem; line-height: 1.8; margin-top: 15px;">A <b>Sentence</b> is a group of words arranged in a specific order that makes <b>complete sense</b> or expresses a complete thought.</p>
            
            <div style="background: #f0f7ff; padding: 25px; border-radius: 20px; border-left: 10px solid #4D96FF; margin: 25px 0; box-shadow: 5px 5px 15px rgba(0,0,0,0.05);">
                <b style="font-size: 1.5rem; color: #2c3e50;">Important Rules:</b>
                <ul style="font-size: 1.3rem; line-height: 1.8; margin-top: 10px;">
                    <li>A sentence always begins with a <b>Capital letter</b>.</li>
                    <li>It must have a <b>Subject</b> and a <b>Verb</b>.</li>
                    <li>It ends with a punctuation mark (Full stop <b>.</b> , Question mark <b>?</b> , or Exclamation mark <b>!</b>).</li>
                </ul>
                <p style="font-size: 1.3rem; background: white; padding: 10px; border-radius: 10px; display: inline-block;"><i>Example:</i> <b>The sun rises in the east.</b> ✨</p>
            </div>

            <h2 style="color: #6BCB77; font-size: 2rem; margin-top: 30px;">2. Parts of a Sentence</h2>
            <p style="font-size: 1.4rem;">Every complete sentence has two main parts:</p>
            <ul style="font-size: 1.4rem; line-height: 2;">
                <li><b style="color: #FF6B6B;">Subject:</b> The person or thing we are talking about.</li>
                <li><b style="color: #4D96FF;">Predicate:</b> The part that tells us something about the Subject (it contains the verb).</li>
            </ul>
            <p style="font-size: 1.4rem; background: #f9f9f9; padding: 15px; border-radius: 15px;"><i>Example:</i> <b>Rahul</b> (Subject) <b>is playing football</b> (Predicate).</p>

            <h2 style="color: #FF6B6B; font-size: 2rem; margin-top: 30px; border-bottom: 3px solid #FF6B6B; display: inline-block;">3. Kinds of Sentences (भेद)</h2>
            <p style="font-size: 1.4rem; margin-bottom: 20px;">There are four main types of sentences based on their purpose:</p>
            
            <div style="margin-bottom: 20px; background: #fff; padding: 20px; border-radius: 15px; border: 1px solid #eee; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
                <h3 style="color: #4D96FF; font-size: 1.6rem; margin-top:0;">(i) Assertive or Declarative Sentence</h3>
                <p style="font-size: 1.3rem;">A sentence that makes a simple statement or states a fact. It ends with a full stop (.).</p>
                <p style="font-size: 1.3rem;"><i>Example:</i> <b>I am a teacher.</b> or <b>Honesty is the best policy.</b></p>
            </div>

            <div style="margin-bottom: 20px; background: #fff; padding: 20px; border-radius: 15px; border: 1px solid #eee; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
                <h3 style="color: #4D96FF; font-size: 1.6rem; margin-top:0;">(ii) Interrogative Sentence</h3>
                <p style="font-size: 1.3rem;">A sentence that asks a question. It always ends with a question mark (?).</p>
                <p style="font-size: 1.3rem;"><i>Example:</i> <b>Where do you live?</b> or <b>Is it raining?</b></p>
            </div>

            <div style="margin-bottom: 20px; background: #fff; padding: 20px; border-radius: 15px; border: 1px solid #eee; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
                <h3 style="color: #4D96FF; font-size: 1.6rem; margin-top:0;">(iii) Imperative Sentence</h3>
                <p style="font-size: 1.3rem;">A sentence that expresses a command, an order, a request, or an advice.</p>
                <p style="font-size: 1.3rem;"><i>Example:</i> <b>Shut the door.</b> (Order) or <b>Please help me.</b> (Request)</p>
            </div>

            <div style="margin-bottom: 20px; background: #fff; padding: 20px; border-radius: 15px; border: 1px solid #eee; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
                <h3 style="color: #4D96FF; font-size: 1.6rem; margin-top:0;">(iv) Exclamatory Sentence</h3>
                <p style="font-size: 1.3rem;">A sentence that expresses strong or sudden feelings (joy, sorrow, surprise). It ends with an exclamation mark (!).</p>
                <p style="font-size: 1.3rem;"><i>Example:</i> <b>What a beautiful flowers!</b> or <b>Hurrah! We won the match.</b></p>
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
    quizData: [
        { q: "1. 'What a beautiful rose!' is which type?", options: ["Assertive", "Exclamatory", "Imperative"], correct: 1 },
        { q: "2. 'Do your homework.' is an...", options: ["Imperative", "Interrogative", "Assertive"], correct: 0 },
        { q: "3. Every sentence must start with a...", options: ["Small letter", "Full stop", "Capital letter"], correct: 2 },
        { q: "4. 'Where is my bag?' is which type?", options: ["Exclamatory", "Interrogative", "Imperative"], correct: 1 },
        { q: "5. A sentence that makes a statement is...", options: ["Assertive", "Optative", "Imperative"], correct: 0 },
        { q: "6. 'Please give me water' is a...", options: ["Command", "Request", "Question"], correct: 1 },
        { q: "7. The person we talk about is the...", options: ["Predicate", "Object", "Subject"], correct: 2 },
        { q: "8. 'Alas! He is no more' expresses...", options: ["Joy", "Sorrow", "Anger"], correct: 1 },
        { q: "9. 'Stand up!' is a...", options: ["Command", "Request", "Statement"], correct: 0 },
        { q: "10. Which sentence ends with a question mark?", options: ["Assertive", "Interrogative", "Exclamatory"], correct: 1 },
        { q: "11. 'Stars twinkle at night' is...", options: ["Assertive", "Imperative", "Exclamatory"], correct: 0 },
        { q: "12. What tells something about the subject?", options: ["Verb only", "Predicate", "Noun only"], correct: 1 },
        { q: "13. 'How cold the night is!' is...", options: ["Imperative", "Exclamatory", "Assertive"], correct: 1 },
        { q: "14. An Imperative sentence can express...", options: ["Order", "Advice", "Both"], correct: 2 },
        { q: "15. 'The sun rises in the east' is...", options: ["Statement", "Question", "Order"], correct: 0 },
        { q: "16. 'May God bless you' is which kind?", options: ["Assertive", "Optative", "Exclamatory"], correct: 1 },
        { q: "17. 'Don't make a noise' is...", options: ["Negative Imperative", "Assertive", "Interrogative"], correct: 0 },
        { q: "18. 'Bravo! You did well' shows...", options: ["Appreciation", "Fear", "Sadness"], correct: 0 },
        { q: "19. A sentence is a group of words that makes...", options: ["Partial sense", "Complete sense", "No sense"], correct: 1 },
        { q: "20. 'Are you coming?' is an...", options: ["Assertive", "Imperative", "Interrogative"], correct: 2 }
    ]
};
