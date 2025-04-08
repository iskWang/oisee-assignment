import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { PokemonListScene } from "@/Scene/Pokemon/List/PokemonListScene";
import { PokemonDetailScene } from "@/Scene/Pokemon/Detail/PokemonDetailScene";
import { DigimonListScene } from "@/Scene/Digimon/List/DigimonListScene";
import { DigimonDetailScene } from "@/Scene/Digimon/Detail/DigimonDetailScene";

import "./App.scss";

const BaseRoute = () => (
  <Router basename="/oisee-assignment">
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Navigate to="/pokemons" replace />} />
        <Route path="/pokemons" element={<PokemonListScene />} />
        <Route path="/pokemon/:id" element={<PokemonDetailScene />} />
        <Route path="/digimons" element={<DigimonListScene />} />
        <Route path="/digimon/:id" element={<DigimonDetailScene />} />
      </Routes>
    </div>
  </Router>
);

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BaseRoute />
    </QueryClientProvider>
  );
};

export default App;
