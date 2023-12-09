import { useEffect, useState } from "react";

const NumberMatchingGame = () => {
  const [gridSize] = useState(4);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matches, setMatches] = useState<number[]>([]);
  const [moves, setMoves] = useState<number>(0);

  const generateShuffledNumbers = () => {
    const numbers = Array.from(
      { length: (gridSize * gridSize) / 2 },
      (_, index) => index + 1
    );
    const pairedNumbers = [...numbers, ...numbers];

    for (let i = pairedNumbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pairedNumbers[i], pairedNumbers[j]] = [
        pairedNumbers[j],
        pairedNumbers[i],
      ];
    }

    return pairedNumbers;
  };

  useEffect(() => {
    setNumbers(generateShuffledNumbers());
  }, []);

  const handleClick = (index: number) => {
    if (flippedIndices.length < 2 && !flippedIndices.includes(index)) {
      setFlippedIndices((prev) => [...prev, index]);
      setMoves((prev) => prev + 1);
    } else if (flippedIndices.length === 2) {
      const [index1, index2] = flippedIndices;
      if (numbers[index1] === numbers[index2]) {
        setMatches((prev) => [...prev, numbers[index1]]);
        setFlippedIndices([]);
      } else {
        setFlippedIndices([]);
      }
    }
  };

  return (
    <section className="w-full min-h-screen p-8 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-3xl text-center text-white font-semibold my-10">
        Number Matching Game
      </h1>
      <div>
        <p>Moves: {moves}</p>
      </div>
      <div
        className={`grid grid-cols-${gridSize} gap-5 w-[400px] mx-auto mt-5 place-items-center`}
      >
        {numbers.map((number, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            disabled={matches.includes(number)}
            className={`w-12 h-12 text-black border-2 border-white rounded-full cursor-pointer
              flex justify-center items-center ${
                flippedIndices.includes(index) || matches.includes(number)
                  ? "bg-transparent"
                  : "bg-white"
              }`}
          >
            {flippedIndices.includes(index) || matches.includes(number)
              ? number
              : ""}
          </button>
        ))}
      </div>
    </section>
  );
};

export default NumberMatchingGame;
