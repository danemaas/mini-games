import { useEffect, useState } from "react";

const MemoryGame = () => {
  const [isActive, setIsActive] = useState<number[]>([]);
  const [matches, setMatches] = useState<number>(0);
  const grid = 4;
  const totalCells = grid * grid;
  const pairs = totalCells / 2;
  const active = "bg-transparent text-black";
  const inActive = "bg-white text-white";

  const generateShuffledNumbers = () => {
    const numbers = Array.from({ length: pairs }, (_, index) => index + 1);
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

  const [shuffledNumbers, setShuffledNumbers] = useState(
    generateShuffledNumbers()
  );

  useEffect(() => {
    setShuffledNumbers(generateShuffledNumbers());
  }, []);

  const handleClicks = (indexClicked: number) => {
    if (isActive.length < 2) {
      setIsActive((prev) => [...prev, indexClicked]);
      handleMatches();
    } else {
      handleMatches();
      setIsActive([indexClicked]);
    }
  };

  const handleMatches = () => {
    if (isActive.length === 2) {
      if (shuffledNumbers[isActive[0]] === shuffledNumbers[isActive[1]]) {
        setMatches((prev) => prev + 1);
        setIsActive([]);
      } else {
        setIsActive([]);
      }
    }
  };

  return (
    <section className="w-full min-h-screen p-8 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-3xl text-center text-white font-semibold my-10">
        Memory Game
      </h1>
      <div
        className={`w-[300px] mx-auto grid gap-5 ${
          grid === 4 && "grid-cols-4"
        }`}
      >
        {shuffledNumbers.map((number, index) => (
          <div
            onClick={() => handleClicks(index)}
            id={index.toString()}
            key={index}
            className={`w-12 h-12 border-2 border-white rounded-full cursor-pointer
              flex justify-center items-center ${
                isActive.includes(index) ? active : inActive
              } ${
              isActive.length === 2 &&
              shuffledNumbers[isActive[0]] === shuffledNumbers[isActive[1]] &&
              isActive.includes(index)
                ? "matched"
                : ""
            }`}
          >
            {isActive.includes(index) ||
            (isActive.length === 2 && isActive.includes(index))
              ? number
              : ""}
          </div>
        ))}
      </div>
      <p>Matches: {matches}</p>
    </section>
  );
};

export default MemoryGame;
