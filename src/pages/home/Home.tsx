import { Link } from "react-router-dom";
import tictactoe from "../../assets/tictactoe.svg";
import wam from "../../assets/whackamole.svg";
import memoryGame from "../../assets/memory-game.svg";

const Home = () => {
  return (
    <section className="w-full min-h-screen bg-slate-600 text-white grid place-items-center">
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-2xl font-semibold">Play Mini Games</h2>
        <div className="flex items-center gap-3">
          <Link
            to="/games/tictactoe"
            className="border-2 border-transparent hover:border-cyan-500 p-1 rounded-md
            transition-all duration-300"
          >
            <img src={tictactoe} alt="tic-tac-toe icon" className="w-14 h-14" />
          </Link>
          <Link
            to="/games/whackamole"
            className="border-2 border-transparent hover:border-cyan-500 p-1 rounded-md
            transition-all duration-300"
          >
            <img src={wam} alt="whack-a-mole icon" className="w-14 h-14" />
          </Link>
          <Link
            to="/games/memory"
            className="border-2 border-transparent hover:border-cyan-500 p-1 rounded-md
            transition-all duration-300"
          >
            <img
              src={memoryGame}
              alt="memory game icon"
              className="w-14 h-14"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
