
import { Link } from "react-router-dom";
import { Home, Info, Rabbit, Book } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-amber-100 py-4 border-b border-amber-200 sticky top-0 z-10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Rabbit className="text-amber-800 h-8 w-8" />
            <span className="text-2xl font-bold text-amber-800">СусликИнфо</span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-amber-800 hover:text-amber-600 flex items-center gap-1 font-medium">
              <Home className="h-4 w-4" />
              <span>Главная</span>
            </Link>
            <Link to="/habitat" className="text-amber-800 hover:text-amber-600 flex items-center gap-1 font-medium">
              <Info className="h-4 w-4" />
              <span>Среда обитания</span>
            </Link>
            <Link to="/species" className="text-amber-800 hover:text-amber-600 flex items-center gap-1 font-medium">
              <Book className="h-4 w-4" />
              <span>Виды</span>
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button className="text-amber-800 hover:text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
