import { useEffect, useState } from "react";

const MemoryGame = () => {
  const [isActive, setIsActive] = useState<number>();
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
            onClick={() => setIsActive(index)}
            key={index}
            className={`w-12 h-12 border-2 border-white rounded-full cursor-pointer
            flex justify-center items-center ${
              isActive === index ? active : inActive
            }`}
          >
            {number}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemoryGame;
