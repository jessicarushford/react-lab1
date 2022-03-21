import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [cVotes, setCVotes] = useState(0);
  const [vVotes, setVVotes] = useState(0);
  const [sVotes, setSVotes] = useState(0);

  const increaseCVotes = (): void => {
    setCVotes((prev) => prev + 1);
  };
  const increaseVVotes = (): void => {
    setVVotes((prev) => prev + 1);
  };
  const increaseSVotes = (): void => {
    setSVotes((prev) => prev + 1);
  };

  const totalVotes: number = cVotes + vVotes + sVotes;
  const calcPercentage = (category: number): string => {
    if (totalVotes) {
      return `${((category / totalVotes) * 100).toFixed(2)}%`;
    } else {
      return "0%";
    }
  };

  return (
    <section className="Votes">
      <h2>Vote Here</h2>
      <div>
        <button onClick={increaseCVotes}>Chocolate</button>
        <button onClick={increaseVVotes}>Vanilla</button>
        <button onClick={increaseSVotes}>Strawberry</button>
      </div>
      <h3>
        Chocolate: {cVotes} ({calcPercentage(cVotes)})
      </h3>
      <div
        style={{ width: calcPercentage(cVotes) }}
        className="percentage chocolate"
      ></div>
      <h3>
        Vanilla: {vVotes} ({calcPercentage(vVotes)})
      </h3>
      <div
        style={{ width: calcPercentage(vVotes) }}
        className="percentage vanilla"
      ></div>
      <h3>
        Strawberry: {sVotes} ({calcPercentage(sVotes)})
      </h3>
      <div
        style={{ width: calcPercentage(sVotes) }}
        className="percentage strawberry"
      ></div>
    </section>
  );
};

export default Votes;
