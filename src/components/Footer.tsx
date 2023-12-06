import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white p-2 w-full flex items-center justify-between">
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

      <p>Copyright©2023 - Dan Emaas</p>
    </footer>
  );
};

export default Footer;
