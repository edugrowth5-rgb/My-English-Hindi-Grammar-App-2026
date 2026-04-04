/**
 * Gapp.js - Logic for Grammar App
 * Updated: Fixed Navigation, Score Persistence, Universal Restart & PWA Install Logic
 */

const sidebar = document.getElementById('G-sidebar');
const topicList = document.getElementById('topic-list');
const mainContent = document.getElementById('main-content');
const welcomeScreen = document.getElementById('welcome-screen');

let currentLang = 'eng';
let currentQIndex = 0;
let currentScore = 0;
let activeData = null; 
let deferredPrompt; // PWA Install प्रॉम्प्ट के लिए

// --- 1. PWA Install Logic ---
window.addEventListener('beforeinstallprompt', (e) => {
    // डिफ़ॉल्ट प्रॉम्प्ट को रोकें
    e.preventDefault();
    deferredPrompt = e;
    // इंस्टॉल बटन दिखाएँ
    showInstallButton();
});

function showInstallButton() {
    const topBar = document.querySelector('.G-topbar');
    if (topBar && !document.getElementById('G-install-btn')) {
        const btn = document.createElement('button');
        btn.id = 'G-install-btn';
        btn.innerText = "📲 Install App";
        btn.className = 'option-btn'; 
        btn.style.cssText = "width:auto; padding:5px 15px; font-size:1rem; background:#6BCB77; color:white; margin-left:10px; border:none; cursor:pointer;";
        
        btn.onclick = () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted install');
                    }
                    deferredPrompt = null;
                    btn.style.display = 'none';
                });
            }
        };
        topBar.appendChild(btn);
    }
}

window.addEventListener('appinstalled', (evt) => {
    alert("बधाई हो! Smart Class ऐप सफलतापूर्वक इंस्टॉल हो गया है। 🎉");
});

// --- 2. Sidebar & Language Logic ---
function toggleSidebar() {
    if (sidebar) sidebar.classList.toggle('closed');
}

function switchLang(lang) {
    currentLang = lang;
    renderTopics();
    if (mainContent) mainContent.innerHTML = '';
    if (welcomeScreen) welcomeScreen.style.display = 'block';
    if (window.innerWidth < 768) sidebar.classList.add('closed');
}

function renderTopics() {
    if (!topicList) return;
    topicList.innerHTML = '';
    const dataSrc = (currentLang === 'eng') ? (window.English || null) : (window.Hindi || null);

    if (!dataSrc || Object.keys(dataSrc).length === 0) {
        topicList.innerHTML = "<li style='color:#FF6B6B;'>डेटा लोड नहीं हुआ! ❌</li>";
        return;
    }

    Object.keys(dataSrc).forEach(key => {
        const item = dataSrc[key];
        const li = document.createElement('li');
        li.textContent = item.title;
        li.onclick = () => {
            displayData(item);
            if (window.innerWidth < 768) sidebar.classList.add('closed');
        };
        topicList.appendChild(li);
    });
}

// --- 3. Content Display & Quiz Engine ---
function displayData(data) {
    if (!welcomeScreen || !mainContent) return;
    activeData = data; 
    welcomeScreen.style.display = 'none';
    
    mainContent.innerHTML = `
        <div class="card animate-fade">
            <h2 style="color:var(--accent-color); border-bottom: 5px solid #FFD93D; padding-bottom: 10px; margin-bottom: 20px;">
                ${data.title}
            </h2>
            <div class="content-body">
                ${data.content}
            </div>
        </div>
    `;
    mainContent.scrollTop = 0;

    if (data.quizData) {
        setTimeout(() => startQuizEngine(data), 50);
    }
}

function startQuizEngine(data) {
    const storageKey = currentLang === 'eng' ? 'engQuizIdx' : 'hinQuizIdx';
    const scoreKey = currentLang === 'eng' ? 'engQuizScore' : 'hinQuizScore';
    
    const savedIndex = localStorage.getItem(storageKey);
    const savedScore = localStorage.getItem(scoreKey);

    if (savedIndex && savedIndex > 0 && savedIndex < data.quizData.length) {
        const msg = currentLang === 'eng' ? 
            "Want to resume from question " + (parseInt(savedIndex) + 1) + "?" : 
            "आपने पिछला क्विज़ प्रश्न " + (parseInt(savedIndex) + 1) + " पर छोड़ा था। क्या वहीं से शुरू करना चाहते हैं?";
        
        if (confirm(msg)) {
            currentQIndex = parseInt(savedIndex);
            currentScore = parseInt(savedScore) || 0;
        } else {
            resetScoreInternal(storageKey, scoreKey);
        }
    } else {
        resetScoreInternal(storageKey, scoreKey);
    }
    loadQuizQuestion();
}

function loadQuizQuestion() {
    if (!activeData || !activeData.quizData) return;
    
    const question = activeData.quizData[currentQIndex];
    const isEng = currentLang === 'eng';

    const qText = document.getElementById(isEng ? 'q-text' : 'hq-text');
    const qProgress = document.getElementById(isEng ? 'q-progress' : 'hq-progress');
    const qScore = document.getElementById(isEng ? 'q-score' : 'hq-score');
    const optionsBox = document.getElementById(isEng ? 'options-box' : 'h-options-box');

    if (!qText || !optionsBox) return;

    qText.innerText = question.q;
    qProgress.innerText = (isEng ? "Question: " : "प्रश्न: ") + (currentQIndex + 1) + " / " + activeData.quizData.length;
    qScore.innerText = (isEng ? "Score: " : "स्कोर: ") + currentScore;
    
    optionsBox.innerHTML = '';
    question.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.style.width = "100%";
        btn.innerText = opt;
        btn.onclick = () => {
            if (index === question.correct) {
                currentScore += 5;
                alert(isEng ? "Correct! ✨✅" : "बिल्कुल सही! ✨✅");
            } else {
                alert((isEng ? "Wrong! ❌ Correct answer was: " : "गलत जवाब! ❌ सही उत्तर था: ") + question.options[question.correct]);
            }
            window.nextQuestion(); 
        };
        optionsBox.appendChild(btn);
    });
}

function showFinalResult() {
    const isEng = currentLang === 'eng';
    const container = document.getElementById(isEng ? 'question-container' : 'h-question-container');
    const totalPossible = activeData.quizData.length * 5;
    
    container.innerHTML = `
        <div style="text-align:center; padding: 25px; border: 4px solid #6BCB77; border-radius: 25px; background: #f0fff0;">
            <h2 style="color:#6BCB77; font-size: 2.2rem;">${isEng ? "Quiz Completed!" : "क्विज़ पूरा हुआ!"}</h2>
            <p style="font-size: 2.8rem; margin: 20px 0;">
                ${isEng ? "Total Score: " : "कुल स्कोर: "} <b>${currentScore} / ${totalPossible}</b>
            </p>
            <button class="option-btn" style="background:#4D96FF; color:white; text-align:center;" onclick="window.resetQuiz()">
                ${isEng ? "Restart Quiz" : "फिर से शुरू करें"}
            </button>
        </div>
    `;
    const storageKey = currentLang === 'eng' ? 'engQuizIdx' : 'hinQuizIdx';
    const scoreKey = currentLang === 'eng' ? 'engQuizScore' : 'hinQuizScore';
    localStorage.setItem(storageKey, 0);
    localStorage.setItem(scoreKey, 0);
}

function resetScoreInternal(sKey, scKey) {
    currentQIndex = 0;
    currentScore = 0;
    if(sKey) localStorage.setItem(sKey, 0);
    if(scKey) localStorage.setItem(scKey, 0);
}

function saveProgress() {
    const storageKey = currentLang === 'eng' ? 'engQuizIdx' : 'hinQuizIdx';
    const scoreKey = currentLang === 'eng' ? 'engQuizScore' : 'hinQuizScore';
    localStorage.setItem(storageKey, currentQIndex);
    localStorage.setItem(scoreKey, currentScore);
}

// --- 4. Global Navigation Buttons ---
window.nextQuestion = window.nextHindiQuestion = function() {
    if (!activeData || !activeData.quizData) return;
    if (currentQIndex < activeData.quizData.length - 1) {
        currentQIndex++;
        saveProgress();
        loadQuizQuestion();
    } else {
        showFinalResult();
    }
};

window.prevQuestion = window.prevHindiQuestion = function() {
    if (currentQIndex > 0) {
        currentQIndex--;
        saveProgress();
        loadQuizQuestion();
    }
};

window.resetQuiz = window.resetHindiQuiz = function() {
    const msg = currentLang === 'eng' ? "Restart Quiz?" : "क्या आप क्विज़ शुरू से शुरू करना चाहते हैं?";
    if (confirm(msg)) {
        const storageKey = currentLang === 'eng' ? 'engQuizIdx' : 'hinQuizIdx';
        const scoreKey = currentLang === 'eng' ? 'engQuizScore' : 'hinQuizScore';
        resetScoreInternal(storageKey, scoreKey);
        displayData(activeData); 
    }
};

window.onload = () => {
    renderTopics();
    // अगर पहले से इंस्टॉल है तो चेक करें
    if (window.matchMedia('(display-mode: standalone)').matches) {
        console.log('App is running as standalone');
    }
};
