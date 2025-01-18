import { Route, Routes } from "react-router";
import { Home } from "./components/home/index";
import { Pokemon } from "./components/pokemon";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="pokemon" element={<Pokemon />} />
    </Routes>
  );
};
