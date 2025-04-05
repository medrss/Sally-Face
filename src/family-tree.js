import React from "react";
import "./tree-styles.css";
import gizmoImg from "./images/gizmo.jpg";
import salImg from "./images/sally.jpg";
import henryImg from "./images/henry.jpg";
import dianaImg from "./images/diane.jpg";
import lisaImg from "./images/lisa.jpg";
import jimImg from "./images/jim.jpg";
import larryImg from "./images/larry.jpg";

const FamilyMember = ({ name, image, className }) => (
    <div className={`tree-node ${className}`}>
      <img src={image} alt={name} className="tree-photo" />
      <div>{name}</div>
    </div>
  );  

const FamilyTree = () => (
  <div className="family-tree-wrapper">
    <h1 className="tree-title">Генеалогическое древо Sally Face</h1>
    <div className="tree-manual">
    <svg className="tree-svg">
        {/* Линии между персонажами */}
        <line x1="660px" y1="170px" x2="660px" y2="400px" className="tree-line" /> {/* От Салли вниз */}
        <line x1="660px" y1="250px" x2="460px" y2="250px" className="tree-line" /> {/* прямая */}
        <line x1="460px" y1="250px" x2="460px" y2="400px" className="tree-line" /> {/* к Диане */}

        <line x1="1010" y1="170px" x2="1010" y2="250px" className="tree-line" /> {/* От Ларри вниз */}
        <line x1="880px" y1="250px" x2="1090px" y2="250px" className="tree-line" /> {/* прямая над Лизой и Джимом*/}
        <line x1="880" y1="250" x2="880" y2="300px" className="tree-line" /> {/* К Лизе */}
        <line x1="1090" y1="250" x2="1090" y2="300px" className="tree-line" /> {/* К Джиму */}

        <line x1="620px" y1="560px" x2="620px" y2="400px" className="tree-line" /> {/* от Генри к линии */}
        <line x1="900px" y1="560px" x2="900px" y2="400px" className="tree-line" /> {/* от Лизы к линии */}
        <line x1="620px" y1="560px" x2="900px" y2="560px" className="tree-line" /> {/* Брак Генри и Лизы */}
        <text x="50%" y="550px" className="tree-text">Брак после смерти супругов</text>

        <line x1="700px" y1="100px" x2="950px" y2="100px" className="tree-line" /> {/* Брак Генри и Лизы */}
        <text x="56%" y="90" className="tree-text">Сводные</text>
      </svg>
      <div className="tree-row">
        <FamilyMember name="Гизмо (кот)" image={gizmoImg} className="gizmo"/>
        <FamilyMember name="Сал Фишер" image={salImg} className="sal"/>
        <FamilyMember name="Ларри Джонсон" image={larryImg} />
      </div>
      <div className="tree-row">
        <FamilyMember name="Диана Фишер" image={dianaImg} />
        <FamilyMember name="Генри Фишер" image={henryImg} className="genry" />
        <FamilyMember name="Лиза Джонсон" image={lisaImg} className="lisa" />
        <FamilyMember name="Джим Джонсон" image={jimImg} />
      </div>
    </div>
  </div>
);

export default FamilyTree;
