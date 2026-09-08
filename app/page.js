"use client";

import { useEffect, useMemo, useState } from "react";

const LESSONS = {
  paris: {
    city: "Paris",
    icon: "✦",
    color: "coral",
    description: "Saluer et se repérer dans la ville",
    words: [
      ["Bonjour", "Goedendag", "👋"],
      ["La gare", "Het station", "🚆"],
      ["La rue", "De straat", "🚶"],
      ["Le musée", "Het museum", "🖼️"],
      ["La tour", "De toren", "🗼"],
      ["À gauche", "Links", "⬅️"],
      ["À droite", "Rechts", "➡️"],
      ["Merci", "Dank je", "✨"]
    ]
  },
  bruxelles: {
    city: "Bruxelles",
    icon: "◆",
    color: "blue",
    description: "Commander et découvrir les monuments",
    words: [
      ["Une gaufre", "Een wafel", "🧇"],
      ["La place", "Het plein", "🏛️"],
      ["Le métro", "De metro", "🚇"],
      ["Le billet", "Het ticket", "🎫"],
      ["En haut", "Boven", "⬆️"],
      ["En bas", "Beneden", "⬇️"],
      ["S'il vous plaît", "Alstublieft", "🙂"],
      ["C'est combien ?", "Hoeveel kost het?", "💶"]
    ]
  }
};

const EMPTY_PROGRESS = { mastered: [], bestScores: {}, xp: 0, lastVisit: null };

function loadProgress() {
  if (typeof window === "undefined") return EMPTY_PROGRESS;
  try {
    return { ...EMPTY_PROGRESS, ...JSON.parse(localStorage.getItem("zr-progress") || "{}") };
  } catch {
    return EMPTY_PROGRESS;
  }
}

export default function Home() {
  const [view, setView] = useState("home");
  const [city, setCity] = useState("paris");
  const [progress, setProgress] = useState(EMPTY_PROGRESS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = loadProgress();
    setProgress({ ...saved, lastVisit: new Date().toISOString().slice(0, 10) });
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem("zr-progress", JSON.stringify(progress));
  }, [progress, ready]);

  const totalWords = Object.values(LESSONS).reduce((sum, item) => sum + item.words.length, 0);
  const completed = progress.mastered.length;
  const percent = Math.round((completed / totalWords) * 100);

  function openLesson(key) {
    setCity(key);
    setView("lesson");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openQuiz(key = city) {
    setCity(key);
    setView("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateScore(key, score, total) {
    const previous = progress.bestScores[key] || 0;
    const gained = score * 10;
    setProgress(current => ({
      ...current,
      xp: current.xp + gained,
      bestScores: { ...current.bestScores, [key]: Math.max(previous, Math.round((score / total) * 100)) }
    }));
  }

  return (
    <main>
      <Header view={view} setView={setView} />
      {view === "home" && (
        <Dashboard
          progress={progress}
          completed={completed}
          totalWords={totalWords}
          percent={percent}
          openLesson={openLesson}
          openQuiz={openQuiz}
        />
      )}
      {view === "lesson" && (
        <Lesson
          lessonKey={city}
          progress={progress}
          setProgress={setProgress}
          openQuiz={openQuiz}
        />
      )}
      {view === "quiz" && (
        <Quiz lessonKey={city} onComplete={updateScore} openLesson={openLesson} />
      )}
      <footer>
        <span className="brand-dot">Z · R</span>
        <p>Apprendre une langue, c'est déjà voyager.</p>
        <small>Progression enregistrée uniquement sur cet appareil.</small>
      </footer>
    </main>
  );
}

function Header({ view, setView }) {
  return (
    <header className="site-header">
      <button className="brand" onClick={() => setView("home")} aria-label="Accueil">
        <span className="brand-mark"><b>Z</b><b>R</b></span>
        <span><strong>Op reis met</strong><em>Zayd en Razan</em></span>
      </button>
      <nav aria-label="Navigation principale">
        <button className={view === "home" ? "active" : ""} onClick={() => setView("home")}>Accueil</button>
        <button className={view === "lesson" ? "active" : ""} onClick={() => setView("lesson")}>Leçons</button>
        <button className={view === "quiz" ? "active" : ""} onClick={() => setView("quiz")}>Quiz</button>
      </nav>
      <span className="private-badge"><i /> Espace privé</span>
    </header>
  );
}

function Dashboard({ progress, completed, totalWords, percent, openLesson, openQuiz }) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">FRANÇAIS · NÉERLANDAIS</span>
          <h1>Apprends le français.<br /><span>Voyage plus loin.</span></h1>
          <p>Pars en mission avec Zayd et Razan. Découvre les mots, écoute-les et gagne des étoiles à chaque étape.</p>
          <div className="hero-actions">
            <button className="primary" onClick={() => openLesson("paris")}>Continuer l'aventure <span>→</span></button>
            <span className="mini-progress"><b>{progress.xp}</b> points gagnés</span>
          </div>
        </div>
        <div className="travel-card" aria-label="Carte du voyage">
          <div className="sun" />
          <span className="cloud cloud-a" />
          <span className="cloud cloud-b" />
          <div className="route"><i /><i /><i /></div>
          <div className="tower">♜</div>
          <div className="atomium"><i /><i /><i /><i /><i /></div>
          <div className="travellers"><span>Z</span><span>R</span></div>
          <p>PARIS <b>→</b> BRUXELLES</p>
        </div>
      </section>

      <section className="progress-strip">
        <div>
          <span className="section-kicker">TA PROGRESSION</span>
          <strong>{percent}%</strong>
        </div>
        <div className="progress-main">
          <p><b>{completed} mots</b> maîtrisés sur {totalWords}</p>
          <div className="progress-track"><span style={{ width: `${percent}%` }} /></div>
        </div>
        <div className="stat"><span>★</span><p><b>{progress.xp}</b><small>points</small></p></div>
        <div className="stat"><span>✓</span><p><b>{Object.keys(progress.bestScores).length}</b><small>quiz terminés</small></p></div>
      </section>

      <section className="missions">
        <div className="section-heading">
          <div><span className="section-kicker">CHOISIS TA PROCHAINE ÉTAPE</span><h2>Les missions du voyage</h2></div>
          <p>Deux villes, seize mots essentiels et des défis rapides.</p>
        </div>
        <div className="mission-grid">
          {Object.entries(LESSONS).map(([key, lesson], index) => {
            const learned = lesson.words.filter(word => progress.mastered.includes(`${key}:${word[0]}`)).length;
            return (
              <article className={`mission-card ${lesson.color}`} key={key}>
                <div className="city-visual">
                  <span className="chapter">0{index + 1}</span>
                  <div className={key === "paris" ? "city-eiffel" : "city-atomium"}>{key === "paris" ? "♜" : "✣"}</div>
                  <span className="city-stamp">{key === "paris" ? "BONJOUR !" : "GOEIEDAG !"}</span>
                </div>
                <div className="mission-body">
                  <span className="lesson-label">MISSION {index + 1}</span>
                  <h3>{lesson.city}</h3>
                  <p>{lesson.description}</p>
                  <div className="lesson-meta"><span>{learned}/{lesson.words.length} mots</span><span>Score {progress.bestScores[key] || 0}%</span></div>
                  <div className="mini-track"><span style={{ width: `${(learned / lesson.words.length) * 100}%` }} /></div>
                  <div className="card-actions">
                    <button onClick={() => openLesson(key)}>Ouvrir la leçon</button>
                    <button className="icon-button" onClick={() => openQuiz(key)} aria-label={`Quiz ${lesson.city}`}>?</button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

function Lesson({ lessonKey, progress, setProgress, openQuiz }) {
  const lesson = LESSONS[lessonKey];
  const [flipped, setFlipped] = useState({});

  function wordId(word) { return `${lessonKey}:${word[0]}`; }

  function toggleMastered(word) {
    const id = wordId(word);
    setProgress(current => {
      const exists = current.mastered.includes(id);
      return {
        ...current,
        xp: exists ? current.xp : current.xp + 5,
        mastered: exists ? current.mastered.filter(item => item !== id) : [...current.mastered, id]
      };
    });
  }

  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";
    utterance.rate = 0.82;
    speechSynthesis.speak(utterance);
  }

  const learned = lesson.words.filter(word => progress.mastered.includes(wordId(word))).length;

  return (
    <section className="lesson-page">
      <div className="lesson-intro">
        <span className="eyebrow">MISSION · {lesson.city.toUpperCase()}</span>
        <h1>Les mots du voyage</h1>
        <p>Clique sur une carte pour la retourner, écoute le mot, puis marque-le comme appris.</p>
        <div className="lesson-progress"><span style={{ width: `${(learned / lesson.words.length) * 100}%` }} /></div>
        <small>{learned} sur {lesson.words.length} mots maîtrisés</small>
      </div>
      <div className="word-grid">
        {lesson.words.map((word, index) => {
          const id = wordId(word);
          const mastered = progress.mastered.includes(id);
          return (
            <article className={`word-card ${flipped[index] ? "flipped" : ""} ${mastered ? "mastered" : ""}`} key={word[0]}>
              <button className="flip-area" onClick={() => setFlipped(state => ({ ...state, [index]: !state[index] }))}>
                <span className="word-emoji">{word[2]}</span>
                <small>{flipped[index] ? "NÉERLANDAIS" : "FRANÇAIS"}</small>
                <strong>{flipped[index] ? word[1] : word[0]}</strong>
                <em>{flipped[index] ? word[0] : word[1]}</em>
              </button>
              <div className="word-actions">
                <button onClick={() => speak(word[0])} aria-label={`Écouter ${word[0]}`}>🔊</button>
                <button className={mastered ? "checked" : ""} onClick={() => toggleMastered(word)}>{mastered ? "✓ Appris" : "+ J'apprends"}</button>
              </div>
            </article>
          );
        })}
      </div>
      <div className="lesson-cta">
        <div><span>Prêt pour le défi ?</span><strong>Teste maintenant ta mémoire.</strong></div>
        <button className="primary" onClick={() => openQuiz(lessonKey)}>Commencer le quiz <span>→</span></button>
      </div>
    </section>
  );
}

function Quiz({ lessonKey, onComplete, openLesson }) {
  const lesson = LESSONS[lessonKey];
  const questions = useMemo(() => lesson.words.slice(0, 6).map((word, index) => {
    const distractors = lesson.words.filter(item => item[1] !== word[1]).slice(index % 3, (index % 3) + 3).map(item => item[1]);
    const options = [word[1], ...distractors].slice(0, 4).sort((a, b) => (a.charCodeAt(0) + index) % 7 - (b.charCodeAt(0) + index) % 7);
    return { prompt: word[0], answer: word[1], icon: word[2], options };
  }), [lessonKey]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setIndex(0); setScore(0); setSelected(null); setFinished(false);
  }, [lessonKey]);

  function choose(option) {
    if (selected) return;
    setSelected(option);
    if (option === questions[index].answer) setScore(value => value + 1);
  }

  function next() {
    if (index === questions.length - 1) {
      const finalScore = score + (selected === questions[index].answer ? 0 : 0);
      setFinished(true);
      onComplete(lessonKey, finalScore, questions.length);
    } else {
      setIndex(value => value + 1);
      setSelected(null);
    }
  }

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <section className="quiz-page result-page">
        <div className="result-medal">★</div>
        <span className="eyebrow">MISSION ACCOMPLIE</span>
        <h1>{percentage >= 80 ? "Magnifique !" : percentage >= 50 ? "Bien joué !" : "Continue l'aventure !"}</h1>
        <p>Tu as trouvé <b>{score} bonnes réponses sur {questions.length}</b> à {lesson.city}.</p>
        <div className="score-ring" style={{ "--score": `${percentage * 3.6}deg` }}><span>{percentage}%</span></div>
        <button className="primary" onClick={() => openLesson(lessonKey)}>Revoir les mots</button>
      </section>
    );
  }

  const question = questions[index];
  return (
    <section className="quiz-page">
      <div className="quiz-topline">
        <div><span className="eyebrow">QUIZ · {lesson.city.toUpperCase()}</span><h1>Choisis la bonne traduction</h1></div>
        <strong>{index + 1}<small> / {questions.length}</small></strong>
      </div>
      <div className="question-progress"><span style={{ width: `${((index + 1) / questions.length) * 100}%` }} /></div>
      <div className="quiz-card">
        <span className="quiz-icon">{question.icon}</span>
        <p>Que veut dire…</p>
        <h2>{question.prompt}</h2>
        <div className="answers">
          {question.options.map((option, optionIndex) => {
            let state = "";
            if (selected && option === question.answer) state = "correct";
            else if (selected === option) state = "wrong";
            return <button className={state} onClick={() => choose(option)} key={option}><span>{String.fromCharCode(65 + optionIndex)}</span>{option}<i>{state === "correct" ? "✓" : state === "wrong" ? "×" : ""}</i></button>;
          })}
        </div>
        {selected && (
          <div className={`feedback ${selected === question.answer ? "good" : "try"}`}>
            <span>{selected === question.answer ? "Bravo ! Bonne réponse." : `Presque ! La réponse est « ${question.answer} ».`}</span>
            <button onClick={next}>{index === questions.length - 1 ? "Voir mon score" : "Question suivante"} →</button>
          </div>
        )}
      </div>
    </section>
  );
}
