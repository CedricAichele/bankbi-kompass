import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { decisions } from "../lib/decisions";
export function DecisionTools() {
  const [selected, setSelected] = useState(decisions[0].id);
  const [choice, setChoice] = useState<number | null>(null);
  const decision = decisions.find((x) => x.id === selected)!;
  return (
    <section className="decision section">
      <span className="eyebrow">EINE KLEINE ENTSCHEIDUNGSHILFE</span>
      <h2>Welche Methode passt?</h2>
      <label>
        Thema
        <select
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
            setChoice(null);
          }}
        >
          {decisions.map((x) => (
            <option value={x.id} key={x.id}>
              {x.titel}
            </option>
          ))}
        </select>
      </label>
      <h3>{decision.frage}</h3>
      <div className="decision-options">
        {decision.options.map((x, i) => (
          <button
            key={x.label}
            aria-pressed={choice === i}
            onClick={() => setChoice(i)}
          >
            {choice === i && <Check size={16} />} {x.label}
          </button>
        ))}
      </div>
      {choice !== null && (
        <div className="decision-answer" role="status">
          <p>{decision.options[choice].answer}</p>
          <Link to={"/wissen/" + decision.options[choice].link}>
            Hintergrund nachlesen <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </section>
  );
}
