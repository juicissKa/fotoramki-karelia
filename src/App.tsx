import React from "react";
import "./scss/styles.scss";
import Header from "./components/global/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
