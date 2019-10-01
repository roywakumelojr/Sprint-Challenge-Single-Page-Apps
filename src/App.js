import React from "react";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <main>
      <Header />
      <NavBar />
      <AppRouter />
    </main>
  );
}
