// Autor: Darwin - App Final Completo
import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Curso from "./components/Curso";
import Footer from "./components/Footer";
import PresentacionAprendiz from "./components/PresentacionAprendiz";
import RegistroAprendiz from "./components/RegistroAprendiz";

function App() {
  const [mostrarCursos, setMostrarCursos] = useState(true);

  const cursos = [
    { id: 1, nombre: "Desarrollo Web", descripcion: "Aprende a crear páginas web modernas y atractivas.", detalles: "HTML5, CSS3, JS y React. 5 proyectos reales. 40 horas. Certificación SENA." },
    { id: 2, nombre: "Bases de Datos", descripcion: "Aprende a gestionar y manipular bases de datos.", detalles: "SQL, MySQL, PostgreSQL. Modelado de datos. Nivel básico-intermedio." },
    { id: 3, nombre: "Inteligencia Artificial", descripcion: "Desarrolla soluciones basadas en IA.", detalles: "Python, Machine Learning y Chatbots. 40 horas con proyecto final." },
    { id: 4, nombre: "Programación con Java", descripcion: "Desarrolla aplicaciones con Java.", detalles: "POO, Spring Boot y APIs REST. Certificación oficial." },
    { id: 5, nombre: "Curso de Python", descripcion: "Desarrolla aplicaciones con Python.", detalles: "Desde cero hasta Django. Backend y análisis de datos." },
  ];

  return (
    <div>
      <Header />
      <Navbar />
      <PresentacionAprendiz />
      <RegistroAprendiz />

      <main id="inicio" style={{ textAlign: "center", padding: "20px" }}>
        <h2>Bienvenidos a nuestro portal de formación</h2>
        <button onClick={() => setMostrarCursos(!mostrarCursos)}>
          {mostrarCursos ? "Ocultar cursos" : "Ver cursos"}
        </button>

        {mostrarCursos && (
          <section id="cursos" style={{ marginTop: "20px" }}>
            <h2>Nuestros cursos</h2>
            <p>Ofrecemos una variedad de cursos para ayudarte a desarrollar tus habilidades.</p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "15px",
              maxWidth: "1000px",
              margin: "20px auto",
              textAlign: "left"
            }}>
              {cursos.map((c) => (
                <Curso key={c.id} nombre={c.nombre} descripcion={c.descripcion} detalles={c.detalles} />
              ))}
            </div>
          </section>
        )}

        <section id="nosotros"><h2>Sobre nosotros</h2><p>Centro de formación comprometido con la excelencia.</p></section>
        <section id="contacto"><h2>Contacto</h2><p>Contáctanos por correo o teléfono.</p></section>
      </main>
      <Footer />
    </div>
  );
}
export default App;