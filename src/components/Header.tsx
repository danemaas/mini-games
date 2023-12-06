import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-800 text-white p-2 w-full flex items-center justify-between">
      <Link to="/" className="w-max flex items-center gap-1">
        <div className="w-10 h-10 overflow-hidden">
          <img
            src="/src/assets/logo.svg"
            alt="controller logo"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="font-semibold">Mini-Games</h2>
      </Link>

      <nav>
        <ul className="flex items-center gap-3">
          <li className="text-sm md:text-lg font-semibold hover:text-cyan-500">
            <Link to="/games">Play</Link>
          </li>
          <li className="text-sm md:text-lg font-semibold hover:text-cyan-500">
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
