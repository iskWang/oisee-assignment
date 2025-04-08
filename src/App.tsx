import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScene } from "@/Scene/Home/HomeScene";
import { PokemonListScene } from "@/Scene/Pokemon/List/PokemonListScene";
import { PokemonDetailScene } from "@/Scene/Pokemon/Detail/PokemonDetailScene";
import { DigimonListScene } from "@/Scene/Digimon/List/DigimonListScene";
import { DigimonDetailScene } from "@/Scene/Digimon/Detail/DigimonDetailScene";

import "./App.scss";

const App = () => {
  return (
    <Router basename="/oisee-assignment">
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<HomeScene />} />
          <Route path="/pokemon" element={<PokemonListScene />} />
          <Route path="/pokemon/:id" element={<PokemonDetailScene />} />
          <Route path="/digimon" element={<DigimonListScene />} />
          <Route path="/digimon/:id" element={<DigimonDetailScene />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
