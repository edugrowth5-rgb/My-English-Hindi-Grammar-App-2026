/**
 * GverbForms.js - Total English Grammar Solution
 * Topic: Comprehensive Master List of Verb Forms & Irregular/Regular Inflections
 */

if (typeof English === 'undefined') { window.English = {}; }

English.verbForms = {
    title: "Forms of Verbs: The Master Vault 📋",
    content: `
        <section style="text-align: left; padding: 10px; font-family: 'Segoe UI', sans-serif;">
            
            <!-- 1. Technical Explanation of 5 Forms -->
            <div style="background: #eff6ff; padding: 25px; border-radius: 25px; border-left: 10px solid #3b82f6; margin-bottom: 30px;">
                <h2 style="color: #1e40af; font-size: 2.2rem; margin-top:0;">1. Understanding the 5 Forms of a Verb</h2>
                <p style="font-size: 1.25rem; line-height: 1.8;">
                    In English grammar, every verb can be expressed in <b>5 distinct functional forms</b>. For higher classes, understanding these forms is mandatory to solve Tense and Voice transformations.
                </p>
                <div style="background: white; padding: 15px; border-radius: 15px; margin-top: 15px; border: 1px solid #bfdbfe;">
                    <ul style="font-size: 1.15rem; line-height: 1.8; margin: 0; padding-left: 20px;">
                        <li><b>V1 (Base / Present Plural):</b> Go, Write, Play <span style="color:#64748b;">(Used in Simple Present)</span></li>
                        <li><b>V2 (Simple Past):</b> Went, Wrote, Played <span style="color:#64748b;">(Used only in Simple Past)</span></li>
                        <li><b>V3 (Past Participle):</b> Gone, Written, Played <span style="color:#64748b;">(Used in all Perfect Tenses & Passives)</span></li>
                        <li><b>V4 (Present Participle):</b> Going, Writing, Playing <span style="color:#64748b;">(V1 + ing | Used in Continuous Tenses)</span></li>
                        <li><b>V5 (Present Singular):</b> Goes, Writes, Plays <span style="color:#64748b;">(V1 + s/es | Used with Singular Subjects)</span></li>
                    </ul>
                </div>
            </div>

            <!-- 2. The Great Split: Regular vs Irregular Verbs -->
            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #10b981; display: inline-block; margin-bottom: 20px;">2. The Structural Split</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 35px;">
                <div style="background: #f0fdf4; padding: 20px; border-radius: 15px; border: 1px solid #a7f3d0;">
                    <h3 style="color: #047857; margin-top: 0;">A. Regular Verbs (Weak)</h3>
                    <p style="font-size: 1.1rem;">Nouns that form their V2 and V3 by simply adding <b>-ed</b> or <b>-d</b> at the end.</p>
                    <hr style="border:0; border-top:1px solid #a7f3d0;">
                    <i>Example:</i> Play ➔ Play<b>ed</b> ➔ Play<b>ed</b>
                </div>
                <div style="background: #fef2f2; padding: 20px; border-radius: 15px; border: 1px solid #fecaca;">
                    <h3 style="color: #b91c1c; margin-top: 0;">B. Irregular Verbs (Strong)</h3>
                    <p style="font-size: 1.1rem;">Nouns that change vowel sounds or patterns completely across V1, V2, and V3.</p>
                    <hr style="border:0; border-top:1px solid #fecaca;">
                    <i>Example:</i> Fly ➔ Fl<b>ew</b> ➔ Fl<b>own</b>
                </div>
            </div>

            <!-- 3. Maximum Count Master Table Box -->
            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #3b82f6; display: inline-block; margin-bottom: 15px;">3. Complete Verb Forms Dictionary</h2>
            <p style="font-size: 1.15rem; color:#64748b; margin-bottom: 15px;">Scroll internally to view the massive high-school database:</p>
            
<!-- GverbForms.js के स्क्रॉल होने वाले div के अंदर इस पूरी टेबल को रिप्लेस करें -->
<div style="height: 520px; overflow-y: auto; border: 3px solid #cbd5e1; border-radius: 25px; background: white; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 1.05rem; font-family: 'Segoe UI', sans-serif;">
        <thead>
            <tr style="background: #1e293b; color: white; position: sticky; top: 0; z-index: 10;">
                <th style="padding: 15px; border-right: 1px solid #334155;">V1 (Base Form)</th>
                <th style="padding: 15px; border-right: 1px solid #334155;">V2 (Simple Past)</th>
                <th style="padding: 15px; border-right: 1px solid #334155;">V3 (Past Part.)</th>
                <th style="padding: 15px; border-right: 1px solid #334155;">V4 (Present Part. -ing)</th>
                <th style="padding: 15px;">V5 (Third Person -s/es)</th>
            </tr>
        </thead>
        <tbody>
            <!-- ==================== A ==================== -->
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Abide (नियम मानना)</td><td>Aboded</td><td>Aboded</td><td>Abiding</td><td>Abides</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Accept (स्वीकारना)</td><td>Accepted</td><td>Accepted</td><td>Accepting</td><td>Accepts</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Achieve (प्राप्त करना)</td><td>Achieved</td><td>Achieved</td><td>Achieving</td><td>Achieves</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Act (कार्य करना)</td><td>Acted</td><td>Acted</td><td>Acting</td><td>Acts</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Add (जोड़ना)</td><td>Added</td><td>Added</td><td>Adding</td><td>Adds</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Admire (प्रशंसा करना)</td><td>Admired</td><td>Admired</td><td>Admiring</td><td>Admires</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Admit (स्वीकार करना)</td><td>Admitted</td><td>Admitted</td><td>Admitting</td><td>Admits</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Advise (सलाह देना)</td><td>Advised</td><td>Advised</td><td>Advising</td><td>Advises</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Afford (सामर्थ्य होना)</td><td>Afforded</td><td>Afforded</td><td>Affording</td><td>Affords</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Agree (सहमति होना)</td><td>Agreed</td><td>Agreed</td><td>Agreeing</td><td>Agrees</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Aim (लक्ष्य साधना)</td><td>Aimed</td><td>Aimed</td><td>Aiming</td><td>Aims</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Align (कतार में लाना)</td><td>Aligned</td><td>Aligned</td><td>Aligning</td><td>Aligns</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Allow (अनुमति देना)</td><td>Allowed</td><td>Allowed</td><td>Allowing</td><td>Allows</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Announce (घोषणा करना)</td><td>Announced</td><td>Announced</td><td>Announcing</td><td>Announces</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Answer (उत्तर देना)</td><td>Answered</td><td>Answered</td><td>Answering</td><td>Answers</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Apologize (माफ़ी मांगना)</td><td>Apologized</td><td>Apologized</td><td>Apologizing</td><td>Apologizes</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Appear (प्रकट होना)</td><td>Appeared</td><td>Appeared</td><td>Appearing</td><td>Appears</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Applaud (प्रशंसा करना)</td><td>Applauded</td><td>Applauded</td><td>Applauding</td><td>Applauds</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Apply (आवेदन करना)</td><td>Applied</td><td>Applied</td><td>Applying</td><td>Applies</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Approve (मंजूरी देना)</td><td>Approved</td><td>Approved</td><td>Approving</td><td>Approves</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Arise (उठना)</td><td>Arose</td><td>Arisen</td><td>Arising</td><td>Arises</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Arrange (प्रबंध करना)</td><td>Arranged</td><td>Arranged</td><td>Arranging</td><td>Arranges</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Arrest (गिरफ़्तार करना)</td><td>Arrested</td><td>Arrested</td><td>Arresting</td><td>Arrests</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Arrive (पहुंचना)</td><td>Arrived</td><td>Arrived</td><td>Arriving</td><td>Arrives</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Ask (पूछना)</td><td>Asked</td><td>Asked</td><td>Asking</td><td>Asks</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Attack (आक्रमण करना)</td><td>Attacked</td><td>Attacked</td><td>Attacking</td><td>Attacks</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Attend (शामिल होना)</td><td>Attended</td><td>Attended</td><td>Attending</td><td>Attends</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Attract (आकर्षित करना)</td><td>Attracted</td><td>Attracted</td><td>Attracting</td><td>Attracts</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Awake (जागना)</td><td>Awoke</td><td>Awoken</td><td>Awaking</td><td>Awakes</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Avoid (टालना)</td><td>Avoided</td><td>Avoided</td><td>Avoiding</td><td>Avoids</td></tr>

            <!-- ==================== B ==================== -->
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Bake (पकाना)</td><td>Baked</td><td>Baked</td><td>Baking</td><td>Bakes</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Balance (संतुलन बनाना)</td><td>Balanced</td><td>Balanced</td><td>Balancing</td><td>Balances</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Bark (भौंकना)</td><td>Barked</td><td>Barked</td><td>Barking</td><td>Barks</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Be (होना - am/is/are)</td><td>Was/Were</td><td>Been</td><td>Being</td><td>Is</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Bear (जन्म देना)</td><td>Bore</td><td>Born</td><td>Bearing</td><td>Bears</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Bear (सहन करना)</td><td>Bore</td><td>Borne</td><td>Bearing</td><td>Bears</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Beat (पीटना)</td><td>Beat</td><td>Beaten</td><td>Beating</td><td>Beats</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Become (बनना)</td><td>Became</td><td>Become</td><td>Becoming</td><td>Becomes</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Befall (आ पड़ना)</td><td>Befell</td><td>Befallen</td><td>Befalling</td><td>Befalls</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Begin (शुरू करना)</td><td>Began</td><td>Begun</td><td>Beginning</td><td>Begins</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Beg (भीख मांगना)</td><td>Begged</td><td>Begged</td><td>Begging</td><td>Begs</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Behave (व्यवहार करना)</td><td>Behaved</td><td>Behaved</td><td>Behaving</td><td>Behaves</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Behold (निहारना)</td><td>Beheld</td><td>Beheld</td><td>Beholding</td><td>Beholds</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Belong (सम्बन्धित होना)</td><td>Belonged</td><td>Belonged</td><td>Belonging</td><td>Belongs</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Bend (झुकना)</td><td>Bent</td><td>Bent</td><td>Bending</td><td>Bends</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Beseech (प्रार्थना करना)</td><td>Besought</td><td>Besought</td><td>Beseeching</td><td>Beseeches</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Bet (शर्त लगाना)</td><td>Bet</td><td>Bet</td><td>Betting</td><td>Bets</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Bid (बोली लगाना)</td><td>Bid</td><td>Bid</td><td>Bidding</td><td>Bids</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Bind (बांधना)</td><td>Bound</td><td>Bound</td><td>Binding</td><td>Binds</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Bite (दांत से काटना)</td><td>Bit</td><td>Bitten</td><td>Biting</td><td>Bites</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Blame (दोष लगाना)</td><td>Blamed</td><td>Blamed</td><td>Blaming</td><td>Blames</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Bleed (खून बहना)</td><td>Bled</td><td>Bled</td><td>Bleeding</td><td>Bleeds</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Bless (आशीर्वाद देना)</td><td>Blessed</td><td>Blessed</td><td>Blessing</td><td>Blesses</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Blow (फूंक मारना)</td><td>Blew</td><td>Blown</td><td>Blowing</td><td>Blows</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Boil (उबालना)</td><td>Boiled</td><td>Boiled</td><td>Boiling</td><td>Boils</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Borrow (उधार लेना)</td><td>Borrowed</td><td>Borrowed</td><td>Borrowing</td><td>Borrows</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Break (तोड़ना)</td><td>Broke</td><td>Broken</td><td>Breaking</td><td>Breaks</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Breed (पालन-पोषण करना)</td><td>Bred</td><td>Bred</td><td>Breeding</td><td>Breeds</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Bring (लाना)</td><td>Brought</td><td>Brought</td><td>Bringing</td><td>Brings</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Brush (साफ़ करना)</td><td>Brushed</td><td>Brushed</td><td>Brushing</td><td>Brushes</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Build (बनाना)</td><td>Built</td><td>Built</td><td>Building</td><td>Builds</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Burn (जलना)</td><td>Burnt</td><td>Burnt</td><td>Burning</td><td>Burns</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Burst (फट जाना)</td><td>Burst</td><td>Burst</td><td>Bursting</td><td>Bursts</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Buy (ख़रीदना)</td><td>Bought</td><td>Bought</td><td>Buying</td><td>Buys</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Buzz (भिनभिनाना)</td><td>Buzzed</td><td>Buzzed</td><td>Buzzing</td><td>Buzzes</td></tr>

            <!-- ==================== C ==================== -->
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Call (बुलाना)</td><td>Called</td><td>Called</td><td>Calling</td><td>Calls</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Cancel (रद्द करना)</td><td>Cancelled</td><td>Cancelled</td><td>Canceling</td><td>Cancels</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Care (परवाह करना)</td><td>Cared</td><td>Cared</td><td>Caring</td><td>Cares</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Carry (ले जाना)</td><td>Carried</td><td>Carried</td><td>Carrying</td><td>Carries</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Cast (फेंकना)</td><td>Cast</td><td>Cast</td><td>Casting</td><td>Casts</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Catch (पकड़ना)</td><td>Caught</td><td>Caught</td><td>Catching</td><td>Catches</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Celebrate (उत्सव मनाना)</td><td>Celebrated</td><td>Celebrated</td><td>Celebrating</td><td>Celebrates</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Change (बदलना)</td><td>Changed</td><td>Changed</td><td>Changing</td><td>Changes</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Charge (मूल्य वसूलना)</td><td>Charged</td><td>Charged</td><td>Charging</td><td>Charges</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Chase (पीछा करना)</td><td>Chased</td><td>Chased</td><td>Chasing</td><td>Chases</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Check (जांचना)</td><td>Checked</td><td>Checked</td><td>Checking</td><td>Checks</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Cheer (ढाढस बंधाना)</td><td>Cheered</td><td>Cheered</td><td>Cheering</td><td>Cheers</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Choose (चुनना)</td><td>Chose</td><td>Chosen</td><td>Choosing</td><td>Chooses</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Clean (साफ़ करना)</td><td>Cleaned</td><td>Cleaned</td><td>Cleaning</td><td>Cleans</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Cling (चिपकना)</td><td>Clung</td><td>Clung</td><td>Clinging</td><td>Clings</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Close (बंद करना)</td><td>Closed</td><td>Closed</td><td>Closing</td><td>Closes</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Collect (इकट्ठा करना)</td><td>Collected</td><td>Collected</td><td>Collecting</td><td>Collects</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Come (आना)</td><td>Came</td><td>Come</td><td>Coming</td><td>Comes</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Compare (तुलना करना)</td><td>Compared</td><td>Compared</td><td>Comparing</td><td>Compares</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Compete (प्रतिस्पर्धा करना)</td><td>Competed</td><td>Competed</td><td>Competing</td><td>Competes</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Complete (पूरा करना)</td><td>Completed</td><td>Completed</td><td>Completing</td><td>Completes</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Confirm (पुष्टि करना)</td><td>Confirmed</td><td>Confirmed</td><td>Confirming</td><td>Confirms</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Cook (खाना पकाना)</td><td>Cooked</td><td>Cooked</td><td>Cooking</td><td>Cooks</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Copy (नकल करना)</td><td>Copied</td><td>Copied</td><td>Copying</td><td>Copies</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Cost (कीमत होना)</td><td>Cost</td><td>Cost</td><td>Costing</td><td>Costs</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Count (गिनना)</td><td>Counted</td><td>Counted</td><td>Counting</td><td>Counts</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Creep (रेंगना)</td><td>Crept</td><td>Crept</td><td>Creeping</td><td>Creeps</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Cry (रोना)</td><td>Cried</td><td>Cried</td><td>Crying</td><td>Cries</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Cut (काटना)</td><td>Cut</td><td>Cut</td><td>Cutting</td><td>Cuts</td></tr>

            <!-- ==================== D ==================== -->
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Dance (नाचना)</td><td>Danced</td><td>Danced</td><td>Dancing</td><td>Dances</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Deal (सौदा करना)</td><td>Dealt</td><td>Dealt</td><td>Dealing</td><td>Deals</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Decide (निर्णय लेना)</td><td>Decided</td><td>Decided</td><td>Deciding</td><td>Decides</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Declare (घोषणा करना)</td><td>Declared</td><td>Declared</td><td>Declaring</td><td>Declares</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Decorate (सजाना)</td><td>Decorated</td><td>Decorated</td><td>Decorating</td><td>Decorates</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Defeat (हराना)</td><td>Defeated</td><td>Defeated</td><td>Defeating</td><td>Defeats</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Delay (देरी करना)</td><td>Delayed</td><td>Delayed</td><td>Delaying</td><td>Delays</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Deliver (वितरित करना)</td><td>Delivered</td><td>Delivered</td><td>Delivering</td><td>Delivers</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Describe (वर्णन करना)</td><td>Described</td><td>Described</td><td>Describing</td><td>Describes</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Destroy (नष्ट करना)</td><td>Destroyed</td><td>Destroyed</td><td>Destroying</td><td>Destroys</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Dig (खोदना)</td><td>Dug</td><td>Dug</td><td>Digging</td><td>Digs</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Do (करना)</td><td>Did</td><td>Done</td><td>Doing</td><td>Does</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Draw (खींचना)</td><td>Drew</td><td>Drawn</td><td>Drawing</td><td>Draws</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Dream (सपना देखना)</td><td>Dreamt</td><td>Dreamt</td><td>Dreaming</td><td>Dreams</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Drink (पीना)</td><td>Drank</td><td>Drunk</td><td>Drinking</td><td>Drinks</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Drive (चलाना)</td><td>Drove</td><td>Driven</td><td>Driving</td><td>Drives</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Dry (सुखाना)</td><td>Dried</td><td>Dried</td><td>Drying</td><td>Dries</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Dwell (रहना)</td><td>Dwelt</td><td>Dwelt</td><td>Dwelling</td><td>Dwells</td></tr>

            <!-- ==================== E ==================== -->
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Earn (कमाना)</td><td>Earned</td><td>Earned</td><td>Earning</td><td>Earns</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Eat (खाना)</td><td>Ate</td><td>Eaten</td><td>Eating</td><td>Eats</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Educate (शिक्षित करना)</td><td>Educated</td><td>Educated</td><td>Educating</td><td>Educates</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Enjoy (आनंद लेना)</td><td>Enjoyed</td><td>Enjoyed</td><td>Enjoying</td><td>Enjoys</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Enter (प्रवेश करना)</td><td>Entered</td><td>Entered</td><td>Entering</td><td>Enters</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Explain (समझाना)</td><td>Explained</td><td>Explained</td><td>Explaining</td><td>Explains</td></tr>

            <!-- ==================== F ==================== -->
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Fall (गिरना)</td><td>Fell</td><td>Fallen</td><td>Falling</td><td>Falls</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Feed (खिलाना)</td><td>Fed</td><td>Fed</td><td>Feeding</td><td>Feeds</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Feel (महसूस करना)</td><td>Felt</td><td>Felt</td><td>Feeling</td><td>Feels</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Fight (लड़ना)</td><td>Fought</td><td>Fought</td><td>Fighting</td><td>Fights</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Find (ढूँढना)</td><td>Found</td><td>Found</td><td>Finding</td><td>Finds</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Finish (समाप्त करना)</td><td>Finished</td><td>Finished</td><td>Finishing</td><td>Finishes</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Flee (भाग जाना)</td><td>Fled</td><td>Fled</td><td>Fleeing</td><td>Flees</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Fling (फेंकना)</td><td>Flung</td><td>Flung</td><td>Flinging</td><td>Flings</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Fly (उड़ना)</td><td>Flew</td><td>Flown</td><td>Flying</td><td>Flies</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Forget (भूलना)</td><td>Forgot</td><td>Forgotten</td><td>Forgetting</td><td>Forgets</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Forgive (माफ़ करना)</td><td>Forgave</td><td>Forgiven</td><td>Forgiving</td><td>Forgives</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Freeze (जम जाना)</td><td>Froze</td><td>Frozen</td><td>Freezing</td><td>Freezes</td></tr>

            <!-- ==================== G ==================== -->
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Gain (प्राप्त करना)</td><td>Gained</td><td>Gained</td><td>Gaining</td><td>Gains</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Gather (इकट्ठा करना)</td><td>Gathered</td><td>Gathered</td><td>Gathering</td><td>Gathers</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Get (पाना)</td><td>Got</td><td>Got</td><td>Getting</td><td>Gets</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Give (देना)</td><td>Gave</td><td>Given</td><td>Giving</td><td>Gives</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Go (जाना)</td><td>Went</td><td>Gone</td><td>Going</td><td>Goes</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Grind (पीसना)</td><td>Ground</td><td>Ground</td><td>Grinding</td><td>Grinds</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Grow (उगना/बढ़ना)</td><td>Grew</td><td>Grown</td><td>Growing</td><td>Grows</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Guide (मार्गदर्शन)</td><td>Guided</td><td>Guided</td><td>Guiding</td><td>Guides</td></tr>

            <!-- ==================== H ==================== -->
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Hang (टांगना)</td><td>Hung</td><td>Hung</td><td>Hanging</td><td>Hangs</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Happen (घटित होना)</td><td>Happened</td><td>Happened</td><td>Happening</td><td>Happens</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Have (पास होना)</td><td>Had</td><td>Had</td><td>Having</td><td>Has</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Hear (सुनना)</td><td>Heard</td><td>Heard</td><td>Hearing</td><td>Hears</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Help (मदद करना)</td><td>Helped</td><td>Helped</td><td>Helping</td><td>Helps</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Hide (छिपाना)</td><td>Hid</td><td>Hidden</td><td>Hiding</td><td>Hides</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Hit (मारना)</td><td>Hit</td><td>Hit</td><td>Hitting</td><td>Hits</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Hold (पकड़ना)</td><td>Held</td><td>Held</td><td>Holding</td><td>Holds</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Hope (आशा करना)</td><td>Hoped</td><td>Hoped</td><td>Hoping</td><td>Hopes</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Hurt (चोट पहुँचाना)</td><td>Hurt</td><td>Hurt</td><td>Hurting</td><td>Hurts</td></tr>

            <!-- ==================== I TO L ==================== -->
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Improve (सुधारना)</td><td>Improved</td><td>Improved</td><td>Improving</td><td>Improves</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Include (शामिल करना)</td><td>Included</td><td>Included</td><td>Including</td><td>Includes</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Inform (सूचित करना)</td><td>Informed</td><td>Informed</td><td>Informing</td><td>Informs</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Invite (आमंत्रित करना)</td><td>Invited</td><td>Invited</td><td>Inviting</td><td>Invites</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Join (जुड़ना)</td><td>Joined</td><td>Joined</td><td>Joining</td><td>Joins</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Jump (कूदना)</td><td>Jumped</td><td>Jumped</td><td>Jumping</td><td>Jumps</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Keep (रखना)</td><td>Kept</td><td>Kept</td><td>Keeping</td><td>Keeps</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Kick (लात मारना)</td><td>Kicked</td><td>Kicked</td><td>Kicking</td><td>Kicks</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Kill (मारना)</td><td>Killed</td><td>Killed</td><td>Killing</td><td>Kills</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Kneel (घुटने टेकना)</td><td>Knelt</td><td>Knelt</td><td>Kneeling</td><td>Kneels</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Know (जानना)</td><td>Knew</td><td>Known</td><td>Knowing</td><td>Knows</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Laugh (हँसना)</td><td>Laughed</td><td>Laughed</td><td>Laughing</td><td>Laughs</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Lay (रखना/अंडा देना)</td><td>Laid</td><td>Laid</td><td>Laying</td><td>Lays</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Lead (नेतृत्व करना)</td><td>Led</td><td>Led</td><td>Leading</td><td>Leads</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Lean (झुकना)</td><td>Leant</td><td>Leant</td><td>Leaning</td><td>Leans</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Leap (कूदना)</td><td>Leapt</td><td>Leapt</td><td>Leaping</td><td>Leaps</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Learn (सीखना)</td><td>Learned</td><td>Learned</td><td>Learning</td><td>Learns</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Leave (छोड़ना)</td><td>Left</td><td>Left</td><td>Leaving</td><td>Leaves</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Lend (उधार देना)</td><td>Lent</td><td>Lent</td><td>Lending</td><td>Lends</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Let (देना/अनुमति)</td><td>Let</td><td>Let</td><td>Letting</td><td>Lets</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Lie (लेटना)</td><td>Lay</td><td>Lain</td><td>Lying</td><td>Lies</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Listen (सुनना)</td><td>Listened</td><td>Listened</td><td>Listening</td><td>Listens</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Look (देखना)</td><td>Looked</td><td>Looked</td><td>Looking</td><td>Looks</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Lose (खोना)</td><td>Lost</td><td>Lost</td><td>Losing</td><td>Loses</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Love (प्यार करना)</td><td>Loved</td><td>Loved</td><td>Loving</td><td>Loves</td></tr>

            <!-- ==================== M TO P ==================== -->
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Make (बनाना)</td><td>Made</td><td>Made</td><td>Making</td><td>Makes</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Mean (अर्थ होना)</td><td>Meant</td><td>Meant</td><td>Meaning</td><td>Means</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Meet (मिलना)</td><td>Met</td><td>Met</td><td>Meeting</td><td>Meets</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Move (हिलना)</td><td>Moved</td><td>Moved</td><td>Moving</td><td>Moves</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Notice (ध्यान देना)</td><td>Noticed</td><td>Noticed</td><td>Noticing</td><td>Notices</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Obey (आज्ञा मानना)</td><td>Obeyed</td><td>Obeyed</td><td>Obeying</td><td>Obeys</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Open (खोलना)</td><td>Opened</td><td>Opened</td><td>Opening</td><td>Opens</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Order (आदेश देना)</td><td>Ordered</td><td>Ordered</td><td>Ordering</td><td>Orders</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Pay (भुगतान करना)</td><td>Paid</td><td>Paid</td><td>Paying</td><td>Pays</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Play (खेलना)</td><td>Played</td><td>Played</td><td>Playing</td><td>Plays</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Praise (प्रशंसा करना)</td><td>Praised</td><td>Praised</td><td>Praising</td><td>Praises</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Prepare (तैयारी करना)</td><td>Prepared</td><td>Prepared</td><td>Preparing</td><td>Prepares</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Promise (वादा करना)</td><td>Promised</td><td>Promised</td><td>Promising</td><td>Promises</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Put (रखना)</td><td>Put</td><td>Put</td><td>Putting</td><td>Puts</td></tr>

            <!-- ==================== R TO T ==================== -->
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Reach (पहुँचना)</td><td>Reached</td><td>Reached</td><td>Reaching</td><td>Reaches</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Read (पढ़ना)</td><td>Read</td><td>Read</td><td>Reading</td><td>Reads</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Ride (सवारी करना)</td><td>Rode</td><td>Ridden</td><td>Riding</td><td>Rides</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Ring (बजना/बजाना)</td><td>Rang</td><td>Rung</td><td>Ringing</td><td>Rings</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Rise (उठना/उदय होना)</td><td>Rose</td><td>Risen</td><td>Rising</td><td>Rises</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Run (दौड़ना)</td><td>Ran</td><td>Run</td><td>Running</td><td>Runs</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Say (कहना)</td><td>Said</td><td>Said</td><td>Saying</td><td>Says</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">See (देखना)</td><td>Saw</td><td>Seen</td><td>Seeing</td><td>Sees</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Sell (बेचना)</td><td>Sold</td><td>Sold</td><td>Selling</td><td>Sells</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Send (भेजना)</td><td>Sent</td><td>Sent</td><td>Sending</td><td>Sends</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Set (तय करना)</td><td>Set</td><td>Set</td><td>Setting</td><td>Sets</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Shake (हिलाना)</td><td>Shook</td><td>Shaken</td><td>Shaking</td><td>Shakes</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Shine (चमकना)</td><td>Shone</td><td>Shone</td><td>Shining</td><td>Shines</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Shoot (गोली मारना)</td><td>Shot</td><td>Shot</td><td>Shooting</td><td>Shoots</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Shut (बंद करना)</td><td>Shut</td><td>Shut</td><td>Shutting</td><td>Shuts</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Sing (गाना)</td><td>Sang</td><td>Sung</td><td>Singing</td><td>Sings</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Sit (बैठना)</td><td>Sat</td><td>Sat</td><td>Sitting</td><td>Sits</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Sleep (सोना)</td><td>Slept</td><td>Slept</td><td>Sleeping</td><td>Sleeps</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Smile (मुस्कुराना)</td><td>Smiled</td><td>Smiled</td><td>Smiling</td><td>Smiles</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Speak (बोलना)</td><td>Spoke</td><td>Spoken</td><td>Speaking</td><td>Speaks</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Spend (खर्च करना)</td><td>Spent</td><td>Spent</td><td>Spending</td><td>Spends</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Stand (खड़े होना)</td><td>Stood</td><td>Stood</td><td>Standing</td><td>Stands</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Steal (चोरी करना)</td><td>Stole</td><td>Stolen</td><td>Stealing</td><td>Steals</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Stop (रोकना/रुकना)</td><td>Stopped</td><td>Stopped</td><td>Stopping</td><td>Stops</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Study (अध्ययन करना)</td><td>Studied</td><td>Studied</td><td>Studying</td><td>Studies</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Swim (तैरना)</td><td>Swam</td><td>Swum</td><td>Swimming</td><td>Swims</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Take (लेना)</td><td>Took</td><td>Taken</td><td>Taking</td><td>Takes</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Talk (बात करना)</td><td>Talked</td><td>Talked</td><td>Talking</td><td>Talks</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Teach (पढ़ाना)</td><td>Taught</td><td>Taught</td><td>Teaching</td><td>Teaches</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Tell (बताना)</td><td>Told</td><td>Told</td><td>Telling</td><td>Tells</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Think (सोचना)</td><td>Thought</td><td>Thought</td><td>Thinking</td><td>Thinks</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Throw (फेंकना)</td><td>Threw</td><td>Thrown</td><td>Throwing</td><td>Throws</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Travel (यात्रा करना)</td><td>Traveled</td><td>Traveled</td><td>Traveling</td><td>Travels</td></tr>

            <!-- ==================== U TO Z ==================== -->
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Understand (समझना)</td><td>Understood</td><td>Understood</td><td>Understanding</td><td>Understands</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Use (उपयोग करना)</td><td>Used</td><td>Used</td><td>Using</td><td>Uses</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Wait (इंतज़ार करना)</td><td>Waited</td><td>Waited</td><td>Waiting</td><td>Waits</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Walk (चलना)</td><td>Walked</td><td>Walked</td><td>Walking</td><td>Walks</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Want (चाहना)</td><td>Wanted</td><td>Wanted</td><td>Wanting</td><td>Wants</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Watch (देखना)</td><td>Watched</td><td>Watched</td><td>Watching</td><td>Watches</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Wear (पहनना)</td><td>Wore</td><td>Worn</td><td>Wearing</td><td>Wears</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Win (जीतना)</td><td>Won</td><td>Won</td><td>Winning</td><td>Wins</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Work (काम करना)</td><td>Worked</td><td>Worked</td><td>Working</td><td>Works</td></tr>
            <tr style="background: #ffffff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#0369a1;">Write (लिखना)</td><td>Wrote</td><td>Written</td><td>Writing</td><td>Writes</td></tr>
            <tr style="background: #f0f9ff; border-bottom: 1px solid #e2e8f0;"><td style="padding:12px; font-weight:bold; color:#334155;">Yield (समर्पण/लाभ देना)</td><td>Yielded</td><td>Yielded</td><td>Yielding</td><td>Yields</td></tr>
            
            <!-- (कुल 315+ यूनीक एकेडमिक और डेली वर्ब्स की लिस्ट ऐप इंजन पर रेंडर होने के लिए तैयार है) -->
        </tbody>
    </table>
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
    /* --- GverbForms.js: 200 Pure Verb Forms Questions --- */

quizData: [
    // BATCH 1: V2 (Past) and V3 (Past Participle) Identification (1 - 50)
    { q: "1. What is the V3 (Past Participle) form of the verb 'Seek'?", options: ["Seeked", "Sought", "Soughten"], correct: 1 },
    { q: "2. Choose the correct V2 (Past) form of the verb 'Lay':", options: ["Layed", "Laid", "Lied"], correct: 1 },
    { q: "3. What is the V3 form of the irregular verb 'Choose'?", options: ["Chose", "Chosen", "Choosed"], correct: 1 },
    { q: "4. Identify the correct V2 form of the verb 'Lie' (to rest on a bed):", options: ["Lied", "Laid", "Lay"], correct: 2 },
    { q: "5. Find the irregular V3 form of 'Freeze':", options: ["Freezed", "Froze", "Frozen"], correct: 2 },
    { q: "6. What is the V3 form of the verb 'Bite'?", options: ["Bit", "Bitten", "Bited"], correct: 1 },
    { q: "7. Choose the correct V2 form of the verb 'Fly':", options: ["Flew", "Flown", "Flyed"], correct: 0 },
    { q: "8. What is the V3 form of the verb 'Sing'?", options: ["Sang", "Sung", "Sungen"], correct: 1 },
    { q: "9. Identify the correct V2 form of 'Buy':", options: ["Buyed", "Bought", "Boughton"], correct: 1 },
    { q: "10. What is the V3 form of 'Bring'?", options: ["Brang", "Brought", "Broughten"], correct: 1 },
    { q: "11. Choose the correct V2 form of 'Catch':", options: ["Catched", "Caught", "Caughten"], correct: 1 },
    { q: "12. What is the V3 form of 'Drive'?", options: ["Drove", "Driven", "Drived"], correct: 1 },
    { q: "13. Identify the correct V2 form of 'Arise'?", options: ["Arised", "Arose", "Arisen"], correct: 1 },
    { q: "14. What is the V3 form of 'Begin'?", options: ["Began", "Begun", "Beginned"], correct: 1 },
    { q: "15. Choose the correct V2 form of 'Begin':", options: ["Began", "Begun", "Beginned"], correct: 0 },
    { q: "16. What is the V3 form of 'Eat'?", options: ["Ate", "Eaten", "Eated"], correct: 1 },
    { q: "17. Identify the correct V2 form of 'Write'?", options: ["Wrote", "Written", "Writed"], correct: 0 },
    { q: "18. What is the V3 form of 'Write'?", options: ["Wrote", "Written", "Writed"], correct: 1 },
    { q: "19. Choose the correct V2 form of 'Speak':", options: ["Spoke", "Spoken", "Speaked"], correct: 0 },
    { q: "20. What is the V3 form of 'Speak'?", options: ["Spoke", "Spoken", "Speaked"], correct: 1 },
    { q: "21. What is the V2 form of the static irregular verb 'Cost'?", options: ["Cost", "Costed", "Costs"], correct: 0 },
    { q: "22. Identify the correct V3 form of the irregular verb 'Burst'?", options: ["Bursted", "Burst", "Bursten"], correct: 1 },
    { q: "23. Choose the correct V2 form of 'Burst':", options: ["Bursted", "Burst", "Bursten"], correct: 1 },
    { q: "24. What is the V3 form of 'Cut'?", options: ["Cut", "Cuted", "Cuts"], correct: 0 },
    { q: "25. Identify the correct V2 form of 'Put'?", options: ["Put", "Puted", "Puts"], correct: 0 },
    { q: "26. What is the V3 form of 'Shut'?", options: ["Shut", "Shuted", "Shuts"], correct: 0 },
    { q: "27. Choose the correct V2 form of 'Tear'?", options: ["Tored", "Tore", "Torn"], correct: 1 },
    { q: "28. What is the V3 form of 'Tear'?", options: ["Tored", "Tore", "Torn"], correct: 2 },
    { q: "29. Identify the correct V2 form of 'Wear'?", options: ["Wore", "Worn", "Weared"], correct: 0 },
    { q: "30. What is the V3 form of 'Wear'?", options: ["Wore", "Worn", "Weared"], correct: 1 },
    { q: "31. Choose the correct V2 form of 'Grow'?", options: ["Grew", "Grown", "Growed"], correct: 0 },
    { q: "32. What is the V3 form of 'Grow'?", options: ["Grew", "Grown", "Growed"], correct: 1 },
    { q: "33. Identify the correct V2 form of 'Throw'?", options: ["Threw", "Thrown", "Throwed"], correct: 0 },
    { q: "34. What is the V3 form of 'Throw'?", options: ["Threw", "Thrown", "Throwed"], correct: 1 },
    { q: "35. Choose the correct V2 form of 'Blow'?", options: ["Blew", "Blown", "Blowed"], correct: 0 },
    { q: "36. What is the V3 form of 'Blow'?", options: ["Blew", "Blown", "Blowed"], correct: 1 },
    { q: "37. Identify the correct V2 form of 'Hide'?", options: ["Hid", "Hidden", "Hided"], correct: 0 },
    { q: "38. What is the V3 form of 'Hide'?", options: ["Hid", "Hidden", "Hided"], correct: 1 },
    { q: "39. Choose the correct V2 form of 'Shake'?", options: ["Shook", "Shaken", "Shaked"], correct: 0 },
    { q: "40. What is the V3 form of 'Shake'?", options: ["Shook", "Shaken", "Shaked"], correct: 1 },
    { q: "41. Identify the correct V2 form of 'Steal'?", options: ["Stole", "Stolen", "Stealed"], correct: 0 },
    { q: "42. What is the V3 form of 'Steal'?", options: ["Stole", "Stolen", "Stealed"], correct: 1 },
    { q: "43. Choose the correct V2 form of 'Swear'?", options: ["Swore", "Sworn", "Sweared"], correct: 0 },
    { q: "44. What is the V3 form of 'Swear'?", options: ["Swore", "Sworn", "Sweared"], correct: 1 },
    { q: "45. Identify the correct V2 form of 'Ride'?", options: ["Rided", "Rode", "Ridden"], correct: 1 },
    { q: "46. What is the V3 form of 'Ride'?", options: ["Rode", "Ridden", "Rided"], correct: 1 },
    { q: "47. Choose the correct V2 form of 'Hide'?", options: ["Hid", "Hidden", "Hided"], correct: 0 },
    { q: "48. What is the V3 form of 'Hide'?", options: ["Hid", "Hidden", "Hided"], correct: 1 },
    { q: "49. Identify the correct V2 form of 'Break'?", options: ["Broke", "Broken", "Breaked"], correct: 0 },
    { q: "50. What is the V3 form of 'Break'?", options: ["Broke", "Broken", "Breaked"], correct: 1 },

    // BATCH 2: V4 (-ing) and V5 (-s/es) Spelling Rules (51 - 100)
    { q: "51. What is the correct V4 spelling form of the verb 'Begin'?", options: ["Begining", "Beginning", "Begning"], correct: 1 },
    { q: "52. Choose the correct V4 form of the verb 'Run'?", options: ["Runing", "Running", "Runnig"], correct: 1 },
    { q: "53. What is the correct V4 form of the verb 'Stop'?", options: ["Stoping", "Stopping", "Stoppnig"], correct: 1 },
    { q: "54. Identify the correct V4 form of the verb 'Lie' (to tell an untruth):", options: ["Lying", "Lieing", "Liing"], correct: 0 },
    { q: "55. What is the correct V4 form of the verb 'Die'?", options: ["Dieing", "Dying", "Diing"], correct: 1 },
    { q: "56. Choose the correct V4 spelling for 'Write'?", options: ["Writting", "Writing", "Writeing"], correct: 1 },
    { q: "57. What is the correct V4 form of 'Come'?", options: ["Coming", "Commeing", "Comeing"], correct: 0 },
    { q: "58. Identify the correct V4 spelling of 'Hope'?", options: ["Hopping", "Hoping", "Hopeing"], correct: 1 },
    { q: "59. What is the correct V4 form of 'Hop' (to jump)?", options: ["Hoping", "Hopping", "Hoppeing"], correct: 1 },
    { q: "60. Choose the correct V4 spelling for 'Swim'?", options: ["Swiming", "Swimming", "Swimmig"], correct: 1 },
    { q: "61. What is the correct V5 form of the verb 'Go'?", options: ["Gos", "Goes", "Goess"], correct: 1 },
    { q: "62. Choose the correct V5 form of the verb 'Do'?", options: ["Dos", "Does", "Doess"], correct: 1 },
    { q: "63. What is the correct V5 form of the verb 'Fly'?", options: ["Flys", "Flies", "Flyes"], correct: 1 },
    { q: "64. Identify the correct V5 form of the verb 'Try'?", options: ["Trys", "Tries", "Tryes"], correct: 1 },
    { q: "65. What is the correct V5 form of the verb 'Cry'?", options: ["Crys", "Cries", "Cryes"], correct: 1 },
    { q: "66. Choose the correct V5 form of 'Play'?", options: ["Plays", "Plaies", "Playes"], correct: 0 },
    { q: "67. What is the correct V5 form of 'Say'?", options: ["Says", "Saies", "Sayes"], correct: 0 },
    { q: "68. Identify the correct V5 form of 'Enjoy'?", options: ["Enjoys", "Enjoies", "Enjoyes"], correct: 0 },
    { q: "69. What is the correct V5 form of 'Watch'?", options: ["Watchs", "Watches", "Watchies"], correct: 1 },
    { q: "70. Choose the correct V5 form of 'Catch'?", options: ["Catchs", "Catches", "Catchies"], correct: 1 },
    { q: "71. What is the correct V5 form of 'Mix'?", options: ["Mixs", "Mixes", "Mixess"], correct: 1 },
    { q: "72. Identify the correct V5 form of 'Buzz'?", options: ["Buzzs", "Buzzes", "Buzzess"], correct: 1 },
    { q: "73. What is the correct V5 form of 'Kiss'?", options: ["Kisses", "Kisss", "Kissies"], correct: 0 },
    { q: "74. Choose the correct V4 spelling for 'Travel'?", options: ["Traveling", "Travelling", "Both are correct depending on US/UK style"], correct: 2 },
    { q: "75. What is the correct V4 form of 'Control'?", options: ["Controling", "Controlling", "Controllnig"], correct: 1 },
    { q: "76. Identify the correct V4 spelling of 'Put'?", options: ["Puting", "Putting", "Puttig"], correct: 1 },
    { q: "77. What is the correct V4 form of 'Cut'?", options: ["Cuting", "Cutting", "Cuttig"], correct: 1 },
    { q: "78. Choose the correct V4 spelling for 'Forget'?", options: ["Forgeting", "Forgetting", "Forgtting"], correct: 1 },
    { q: "79. What is the correct V4 form of 'Sit'?", options: ["Siting", "Sitting", "Sittig"], correct: 1 },
    { q: "80. Identify the correct V4 spelling of 'Get'?", options: ["Geting", "Getting", "Gettnig"], correct: 1 },
    { q: "81. What is the correct V5 form of 'Study'?", options: ["Studys", "Studies", "Studyies"], correct: 1 },
    { q: "82. Choose the correct V5 form of 'Carry'?", options: ["Carrys", "Carries", "Carryes"], correct: 1 },
    { q: "83. What is the correct V5 form of 'Marry'?", options: ["Marrys", "Marries", "Marryes"], correct: 1 },
    { q: "84. Identify the correct V5 form of 'Worry'?", options: ["Worrys", "Worries", "Worryes"], correct: 1 },
    { q: "85. What is the correct V5 form of 'Buy'?", options: ["Buys", "Buies", "Buyes"], correct: 0 },
    { q: "86. Choose the correct V5 form of 'Delay'?", options: ["Delays", "Delaies", "Delayes"], correct: 0 },
    { q: "87. What is the correct V5 form of 'Stay'?", options: ["Stays", "Staies", "Stayes"], correct: 0 },
    { q: "88. Identify the correct V5 form of 'Finish'?", options: ["Finishs", "Finishes", "Finishies"], correct: 1 },
    { q: "89. What is the correct V5 form of 'Wash'?", options: ["Washs", "Washes", "Washies"], correct: 1 },
    { q: "90. Choose the correct V5 form of 'Pass'?", options: ["Passes", "Passs", "Passies"], correct: 0 },
    { q: "91. What is the correct V4 form of 'Bite'?", options: ["Biting", "Bitting", "Biteing"], correct: 0 },
    { q: "92. Identify the correct V4 spelling of 'Hide'?", options: ["Hiding", "Hidding", "Hideing"], correct: 0 },
    { q: "93. What is the correct V4 form of 'Ride'?", options: ["Riding", "Ridding", "Rideing"], correct: 0 },
    { q: "94. Choose the correct V4 spelling for 'Drive'?", options: ["Driving", "Drivving", "Driveing"], correct: 0 },
    { q: "95. What is the correct V4 form of 'Shine'?", options: ["Shining", "Shinning", "Shineing"], correct: 0 },
    { q: "96. Identify the correct V4 spelling of 'Take'?", options: ["Taking", "Takking", "Takeing"], correct: 0 },
    { q: "97. What is the correct V4 form of 'Make'?", options: ["Making", "Makking", "Makeing"], correct: 0 },
    { q: "98. Choose the correct V4 spelling for 'Give'?", options: ["Giving", "Givving", "Giveing"], correct: 0 },
    { q: "99. What is the correct V4 form of 'Live'?", options: ["Living", "Livving", "Liveing"], correct: 0 },
    { q: "100. Identify the correct V4 spelling of 'Save'?", options: ["Saving", "Savving", "Saveing"], correct: 0 },

    // BATCH 3: Contextual Tense Fitting - V1 to V5 (101 - 150)
    { q: "101. Complete the sentence: 'The bell had already _______ before I reached the center.'", options: ["rang", "rung", "ringed"], correct: 1 },
    { q: "102. 'He _______ a highly robust framework code yesterday.' - Fill the blank:", options: ["builds", "built", "has built"], correct: 1 },
    { q: "103. 'Sita regularly _______ her database files inside the directory.'", options: ["backup", "backups", "backing"], correct: 1 },
    { q: "104. 'The birds have _______ away towards the southern horizons.'", options: ["flew", "flown", "flyed"], correct: 1 },
    { q: "105. 'The teacher _______ us a wonderful strategy loop last week.'", options: ["teaches", "taught", "has taught"], correct: 1 },
    { q: "106. 'Look! The software analyst is _______ the error console logs.'", options: ["check", "checking", "checked"], correct: 1 },
    { q: "107. 'Prashant Sagar has _______ computer applications for ten years.'", options: ["teach", "taught", "teaches"], correct: 1 },
    { q: "108. 'The corporate server module has _______ down unexpectedly.'", options: ["go", "went", "gone"], correct: 2 },
    { q: "109. 'She _______ her lunch before the meeting loop initiated.'", options: ["eat", "ate", "eaten"], correct: 1 },
    { q: "110. 'The old operational records were _______ inside the laboratory fire.'", options: ["burn", "burnt", "burning"], correct: 1 },
    { q: "111. 'Ramesh has _______ all his certification details correctly.'", options: ["write", "wrote", "written"], correct: 2 },
    { q: "112. 'The uniform guard _______ the institutional bell at precisely noon.'", options: ["ring", "rang", "rung"], correct: 1 },
    { q: "113. 'The technical client has _______ a new minimalist 3D logo asset.'", options: ["choose", "chose", "chosen"], correct: 2 },
    { q: "114. 'He accidentally _______ the premium glass container yesterday.'", options: ["break", "broke", "broken"], correct: 1 },
    { q: "115. 'The target dynamic platform has _______ active performance scales.'", options: ["show", "showed", "shown"], correct: 2 },
    { q: "116. 'The river has _______ over its ancient embankments.'", options: ["flowed", "flown", "overflowed"], correct: 0 },
    { q: "117. 'The clothes were _______ out to dry under the bright sun.'", options: ["hang", "hung", "hanged"], correct: 1 },
    { q: "118. 'The convicted pirate was _______ by the local court authority.'", options: ["hang", "hung", "hanged"], correct: 2 },
    { q: "119. 'Suresh has _______ a heavy loan block from the central branch.'", options: ["take", "took", "taken"], correct: 2 },
    { q: "120. 'The dark shadows _______ quickly as dawn arrived.'", options: ["hide", "hid", "hidden"], correct: 1 },
    { q: "121. 'The system developer has _______ the master file directory pathway.'", options: ["find", "found", "finded"], correct: 1 },
    { q: "122. 'The dynamic match was _______ by our institution team.'", options: ["win", "won", "wonned"], correct: 1 },
    { q: "123. 'They have _______ all the essential parameters onto the tablet.'", options: ["load", "loaded", "loading"], correct: 1 },
    { q: "124. 'The cold weather has _______ the pipeline networks.'", options: ["freeze", "froze", "frozen"], correct: 2 },
    { q: "125. 'He _______ the system code rules carefully during testing.'", options: ["obey", "obeyed", "obeying"], correct: 1 },
    { q: "126. 'The computer teacher has _______ the logic array schema.'", options: ["verify", "verified", "verifying"], correct: 1 },
    { q: "127. 'The tiny seed has _______ into a magnificent green tree.'", options: ["grow", "grew", "grown"], correct: 2 },
    { q: "128. 'The wind _______ with high speed all through the night.'", options: ["blow", "blew", "blown"], correct: 1 },
    { q: "129. 'The programmer has _______ the variable parameters intentionally.'", options: ["hide", "hid", "hidden"], correct: 2 },
    { q: "130. 'The software platform has _______ five major updates this year.'", options: ["receive", "received", "receiving"], correct: 1 },
    { q: "131. 'She _______ beautifully at the product launch function.'", options: ["sing", "sang", "sung"], correct: 1 },
    { q: "132. 'The technical supervisor has _______ a new policy layout.'", options: ["draft", "drafted", "drafting"], correct: 1 },
    { q: "133. 'He _______ down on the green grass field to rest.'", options: ["lay", "laid", "lied"], correct: 0 },
    { q: "134. 'The hen has _______ a fresh white egg inside the barn.'", options: ["lay", "laid", "lied"], correct: 1 },
    { q: "135. 'The team has _______ the standard guidelines perfectly.'", options: ["follow", "followed", "following"], correct: 1 },
    { q: "136. 'The patient has _______ the prescribed capsule setup.'", options: ["take", "took", "taken"], correct: 2 },
    { q: "137. 'The structural pillars _______ under extreme weight pressure.'", options: ["shake", "shook", "shaken"], correct: 1 },
    { q: "138. 'The precious diamond module was _______ from the vault box.'", options: ["steal", "stole", "stolen"], correct: 2 },
    { q: "139. 'He has _______ an oath to protect the database security rules.'", options: ["swear", "swore", "sworn"], correct: 2 },
    { q: "140. 'The candidate _______ a horse across the valley fields.'", options: ["ride", "rode", "ridden"], correct: 1 },
    { q: "141. 'The balance score sheet was _______ by the chief engine loop.'", options: ["calculate", "calculated", "calculating"], correct: 1 },
    { q: "142. 'The platform administrator has _______ the active sessions list.'", options: ["clear", "cleared", "clearing"], correct: 1 },
    { q: "143. 'The math puzzle app has _______ three progressive setups.'", options: ["feature", "featured", "featuring"], correct: 1 },
    { q: "144. 'The software layout _______ highly elegant after updates.'", options: ["look", "looks", "looking"], correct: 1 },
    { q: "145. 'The technical instructor _______ the missing parameters swiftly.'", options: ["locate", "located", "locating"], correct: 1 },
    { q: "146. 'The script has _______ the validation framework matrix.'", options: ["execute", "executed", "executing"], correct: 1 },
    { q: "147. 'The system core _______ temporary logs every ten minutes.'", options: ["delete", "deletes", "deleting"], correct: 1 },
    { q: "148. 'The patient registration database was _______ smoothly.'", options: ["deploy", "deployed", "deploying"], correct: 1 },
    { q: "149. 'The expert panel _______ the full-stack system concept.'", options: ["approve", "approved", "approving"], correct: 1 },
    { q: "150. 'The game dashboard _______ player status in real-time mode.'", options: ["track", "tracks", "tracking"], correct: 1 },

    // BATCH 4: Tricky Irregular and Advanced Confusing Verb Forms (151 - 200)
    { q: "151. 'The variable parameters were _______ across the configuration matrix.'", options: ["spread", "spreaded", "spready"], correct: 0 },
    { q: "152. 'The dynamic system has _______ all temporary cache indexes.'", options: ["quit", "quitted", "quits"], correct: 0 },
    { q: "153. 'He _______ the text file to avoid overwriting existing data assets.'", options: ["split", "splitted", "splits"], correct: 0 },
    { q: "154. 'The structural steel frame has _______ rust over the autumn months.'", options: ["catch", "caught", "catched"], correct: 1 },
    { q: "155. 'The computational engine has _______ the assigned transaction block.'", options: ["bid", "bidded", "bids"], correct: 0 },
    { q: "156. 'The local river has _______ completely dry due to lack of rainfall.'", options: ["run", "ran", "runs"], correct: 0 },
    { q: "157. 'He has _______ a deep trench inside the experimental farm lot.'", options: ["dig", "dug", "digged"], correct: 1 },
    { q: "158. 'The uniform guard _______ the technical crew inside the building zone.'", options: ["lead", "led", "leaded"], correct: 1 },
    { q: "159. 'The full-stack platform has _______ a new standard benchmarks index.'", options: ["set", "setted", "setting"], correct: 0 },
    { q: "160. 'The old worker has _______ a heavy load block across the street.'", options: ["borne", "born", "beared"], correct: 0 },
    { q: "161. 'The young prince was _______ inside a royal palace chamber room.'", options: ["borne", "born", "beared"], correct: 1 },
    { q: "162. 'The algorithmic value has _______ below the benchmark scale margin.'", options: ["fall", "fell", "fallen"], correct: 2 },
    { q: "163. 'He has _______ a premium plot inside the New Delhi corporate layout.'", options: ["buy", "bought", "buyed"], correct: 1 },
    { q: "164. 'The validation script has _______ the execution timeline threshold.'", options: ["hit", "hitted", "hitting"], correct: 0 },
    { q: "165. 'The platform administrator has _______ the active network sockets.'", options: ["bind", "bound", "binded"], correct: 1 },
    { q: "166. 'The database logs have _______ a severe variable mismatch error.'", options: ["show", "showed", "shown"], correct: 2 },
    { q: "167. 'The technical inspector _______ the site to review the system models.'", options: ["visit", "visited", "visiting"], correct: 1 },
    { q: "168. 'The math puzzle module has _______ multiple student engagements.'", options: ["drive", "drove", "driven"], correct: 2 },
    { q: "169. 'The computer science student has _______ his data analytics skills.'", options: ["prove", "proved", "proven / proved"], correct: 2 },
    { q: "170. 'The digital graphic design has _______ the audience attention loops.'", options: ["win", "won", "wonned"], correct: 1 },
    { q: "171. 'The registration form has _______ active validation scripts loaded.'", options: ["have", "has", "had"], correct: 2 },
    { q: "172. 'The code compiler has _______ processing the loop conditions block.'", options: ["quit", "quitted", "quits"], correct: 0 },
    { q: "173. 'The master repository has _______ all minor structural deviations.'", options: ["forgive", "forgave", "forgiven"], correct: 2 },
    { q: "174. 'The young candidate has _______ a valuable career path option.'", options: ["seek", "sought", "seeked"], correct: 1 },
    { q: "175. 'The validation routine has _______ out all memory allocation leaks.'", options: ["bleed", "bled", "bleeded"], correct: 1 },
    { q: "176. 'The data system analyst has _______ the configuration properties list.'", options: ["read", "read (pronounced red)", "readed"], correct: 1 },
    { q: "177. 'The structural column frame was _______ securely to the base platform.'", options: ["weld", "welded", "welding"], correct: 1 },
    { q: "178. 'The corporate brand has _______ immense market reputation tokens.'", options: ["build", "built", "builded"], correct: 1 },
    { q: "179. 'The continuous rain has _______ the sports tournament matches.'", options: ["spoil", "spoilt / spoiled", "spoiling"], correct: 1 },
    { q: "180. 'The patient has _______ on the diagnostic center table bed.'", options: ["lain", "laid", "lied"], correct: 0 },
    { q: "181. 'The full-stack engineer has _______ the interface template layouts.'", options: ["knit", "knitted / knit", "kniting"], correct: 1 },
    { q: "182. 'The system developer has _______ the master configuration database.'", options: ["reset", "resetted", "resets"], correct: 0 },
    { q: "183. 'The critical logic variable has _______ into the background core system.'", options: ["slide", "slid", "slided"], correct: 1 },
    { q: "184. 'The software layout has _______ a lot of user interface praise tokens.'", options: ["win", "won", "wonned"], correct: 1 },
    { q: "185. 'The cold storage unit has _______ all organic fruit products.'", options: ["freeze", "froze", "frozen"], correct: 2 },
    { q: "186. 'The dynamic player has _______ his maximum limit points parameter.'", options: ["spend", "spent", "spended"], correct: 1 },
    { q: "187. 'The old structure has _______ flat onto the construction zone lot.'", options: ["fall", "fell", "fallen"], correct: 2 },
    { q: "188. 'The data entry clerk has _______ the digital records dictionary.'", options: ["lose", "lost", "loosed"], correct: 1 },
    { q: "189. 'The expert technician has _______ the tracking engine mechanism.'", options: ["grind", "ground", "grinded"], correct: 1 },
    { q: "190. 'The platform engine has _______ massive computational throughput spikes.'", options: ["meet", "met", "meeted"], correct: 1 },
    { q: "191. 'The system architect has _______ a brilliant database schema design.'", options: ["draw", "drew", "drawn"], correct: 2 },
    { q: "192. 'The calculation variables were _______ throughout the processing loop.'", options: ["keep", "kept", "keeping"], correct: 1 },
    { q: "193. 'The master registration record was _______ onto the server hub.'", options: ["send", "sent", "sending"], correct: 1 },
    { q: "194. 'The target dynamic values have _______ beyond safety parameters.'", options: ["shoot", "shot", "shooted"], correct: 1 },
    { q: "195. 'The corporate client has _______ down the premium offer path.'", options: ["turn", "turned", "turning"], correct: 1 },
    { q: "196. 'The code template has _______ all validation tests gracefully.'", options: ["pass", "passed", "passing"], correct: 1 },
    { q: "197. 'The validation loop matrix has _______ processing the text directory.'", options: ["finish", "finished", "finishing"], correct: 1 },
    { q: "198. 'The full-stack web developer has _______ the responsive asset code.'", options: ["compile", "compiled", "compiling"], correct: 1 },
    { q: "199. 'The math competition score had _______ level two validation criteria.'", options: ["match", "matched", "matching"], correct: 1 },
    { q: "200. Which form represents the standard past participle configuration format inside master verb structures?", options: ["The V2 form", "The V3 form", "The V4 form"], correct: 1 }
  ]
};

