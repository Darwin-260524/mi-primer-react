import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import RegistroAprendiz from "./components/RegistroAprendiz";
import Footer from "./components/Footer";
import GestionCursos from "./components/GestionCurso";


import Inicio from "./pages/Inicio";
import Cursos from "./pages/Cursos";
import AcercaDe from "./pages/AcercaDe";


import Aprendices from "./pages/Aprendices";
import Instructores from "./pages/Instructores";
import Fichas from "./pages/Fichas";
import Competencias from "./pages/Competencias";
import Evaluaciones from "./pages/Evaluaciones";

import "./App.css";

function Contenido() {
  const location = useLocation();
  const esAcercaDe = location.pathname === "/acerca-de";
  const [, setMostrarCursos] = useState(false);

  const [cursos, setCursos] = useState(() => {
    const cursosGuardados = localStorage.getItem("cursos");
    if (cursosGuardados) {
      try {
        return JSON.parse(cursosGuardados);
      } catch (error) {
        console.error("Error al parsear los cursos de localStorage", error);
      }
    }
    return [
      { id: 1, nombre: "Desarrollo Web", descripcion: "Aprende web moderna.", detalles: "HTML, CSS y JS." },
      { id: 2, nombre: "Bases de Datos", descripcion: "Gestionar BD.", detalles: "SQL." },
      { id: 3, nombre: "IA", descripcion: "Soluciones con IA.", detalles: "ML y Python." },
    ];
  });

  useEffect(() => {
    localStorage.setItem("cursos", JSON.stringify(cursos));
  }, [cursos]);

  return (
    <div className="App">
      <Navbar setMostrarCursos={setMostrarCursos} />
      {!esAcercaDe && <Header />}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cursos" element={<Cursos cursos={cursos} />} />
        <Route path="/gestion" element={<GestionCursos cursos={cursos} setCursos={setCursos} />} />
        <Route path="/registro" element={<RegistroAprendiz />} />
        <Route path="/aprendices" element={<Aprendices />} />
        <Route path="/instructores" element={<Instructores />} />
        <Route path="/fichas" element={<Fichas />} />
        <Route path="/competencias" element={<Competencias />} />
        <Route path="/evaluaciones" element={<Evaluaciones />} />

        <Route path="/acerca-de" element={<AcercaDe />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Contenido />
    </BrowserRouter>
  );
}

export default App;