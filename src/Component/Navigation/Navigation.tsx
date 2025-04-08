import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  return (
    <nav className="bg-white shadow-sm mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              to="/"
              className="flex items-center px-4 text-2xl font-bold text-gray-800"
            >
              Pokedex
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/pokemon"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  path === "pokemon"
                    ? "border-red-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Pokemon
              </Link>
              <Link
                to="/digimon"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  path === "digimon"
                    ? "border-red-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Digimon
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
