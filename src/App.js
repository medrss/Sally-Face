import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import sally1 from './images/sally1.jpg';
import sally2 from './images/sally2.jpg';
import sally3 from './images/sally3.jpg';
import sally4 from './images/sally4.jpg';
import "tailwindcss/tailwind.css";
import "./fonts/font.css";
import "./styles.css";
import FamilyTree from "./family-tree";

const GameCard = () => {
  return (
    <motion.div className="flex flex-col items-center p-8 bg-gray-900 text-white rounded-xl shadow-lg w-3/4 mx-auto"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}>
      <h1>Sally Face</h1>
      <div className="game-description">
      <img src={sally1} alt="Screenshot 1" className="screenshotSally"/>
      <div className="game-text">
          <p>
            Sally Face — игра, где каждый уголок скрывает нечто большее, чем кажется на первый взгляд. В мире, полном тени и странных персонажей, ты следишь за Салли, подростком с необычным протезом лица, который раскрывает мрачные секреты своего окружения. Тайны, переплетенные с личной трагедией, превращают каждую встречу в шаг к неизведанному, а мир, казавшийся знакомым, быстро становится чем-то пугающим и неузнаваемым.
          </p>
          <div className="button-container">
          <a 
            href="https://store.steampowered.com/app/541570/Sally_Face__Episode_One/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button mt-4"
          >
            Хочу играть
          </a>
          </div>
        </div>
      </div>
      <h2 className="screenshot-discript">СКРИНШОТЫ ИГРЫ</h2>
      <div className="screenshot-container">
      <figure>
    <img src={sally2} alt="Screenshot 1" className="screenshot" />
    <figcaption>Странные соседи</figcaption>
</figure>

<figure>
    <img src={sally3} alt="Screenshot 2" className="screenshot" />
    <figcaption>Хороший пёсик?</figcaption>
</figure>

<figure>
    <img src={sally4} alt="Screenshot 3" className="screenshot" />
    <figcaption>Паранормальная зона</figcaption>
</figure>

</div>
    </motion.div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col items-center p-4 bg-gray-900 text-white min-h-screen">
        <nav className="mb-4 flex gap-4">
          <Link to="/" className="nav-button bg-blue-600 p-2 rounded">Игра</Link>
          <Link to="/tree" className="nav-button bg-green-600 p-2 rounded">Генеалогия</Link>
        </nav>
        <Routes>
          <Route path="/" element={<GameCard />} />
          <Route path="/tree" element={<FamilyTree />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
