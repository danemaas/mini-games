import { useState, useEffect } from "react";
import hole from "../../assets/hole.png";
import mole from "../../assets/mole.png";

const INITIAL_GRID = [hole, hole, hole, hole, hole, hole, hole, hole, hole];

const WAM = () => {
  const [grid, setGrid] = useState<string[]>(INITIAL_GRID);
  const [timer, setTimer] = useState(30);
  const [start, setStart] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let timeout;
    if (start) {
      timeout = setTimeout(() => {
        setTimer((timer) => timer - 1);
        const randNum = Math.floor(Math.random() * 10);
        setGrid((grid) => {
          return grid.map((value, index) =>
            index === randNum && value === hole ? mole : hole
          );
        });
      }, 1000);
    }

    if (timer === 0) {
      setStart(false);
      setGrid(INITIAL_GRID);
      return clearTimeout(timeout);
    }
  }, [timer, start]);

  const handleClicks = (
    event: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    event.stopPropagation();
    if (grid[index] === mole) {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <section className="w-full min-h-screen text-white bg-slate-700 flex flex-col">
      <h2 className="text-center mt-10 text-3xl font-semibold">
        Whack-A-Mole Game
      </h2>
      {timer > 0 ? (
        <div className="w-full flex items-center justify-between p-5">
          <p>Score: {score}</p>
          <p>Timer: {timer}s</p>
        </div>
      ) : (
        <p className="text-center text-lg font-semibold">
          Your Score is {score}
        </p>
      )}

      <div className="grid grid-cols-3 gap-2 p-3">
        {grid.map((box, index) => (
          <div
            key={index}
            onClick={(e) => handleClicks(e, index)}
            className="cursor-pointer"
          >
            <img src={box} alt="hole/mole" />
          </div>
        ))}
      </div>

      <button
        disabled={start && timer > 0}
        onClick={() => (setStart(true), setTimer(30))}
        className="w-max self-center my-5 border-2 border-cyan-500 rounded-md p-2
        hover:bg-cyan-500 hover:text-black transition-all duration-300"
      >
        Start Game
      </button>
    </section>
  );
};

export default WAM;
