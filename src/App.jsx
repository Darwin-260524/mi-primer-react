import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Curso from './components/Curso';
import Footer from "./Components/Footer";
import RegistroAprendiz from "./components/RegistroAprendiz";
import PresentacionAprendiz from "./components/PresentacionAprendiz";

function App() {
  function saludar() {
    alert("¡Bienvenido a nuestro portal de formación!");
  }
  return (
    <div>
      <Header />
      <Navbar />
      <RegistroAprendiz />
      <PresentacionAprendiz />

      <main id="inicio">
        <h2>Bienvenidos a nuestro portal de formación</h2>

        <button onclick={saludar}>Ver cursos</button>

        <section id="cursos">
          <h2>Nuestros cursos</h2>
          <p>
            Ofrecemos una variedad de cursos para ayudarte a desarrollar tus
            habilidades y alcanzar tus metas profesionales.
          </p>

          <Curso
            nombre="Desarrollo Web"
            descripcion="Aprende a crear páginas web modernas y atractivas."
          />

          <Curso
            nombre="Bases de Datos"
            descripcion="Aprende a gestionar y manipular bases de datos."
          />

          <Curso
            nombre="Inteligencia Artificial"
            descripcion="Aprende a desarrollar soluciones basadas en inteligencia artificial."
          />
          <Curso
            nombre="programacion con java"
            descripcion="aprende a desarrollar aplicaciones y soluciones mediante el lenguaje java"
          />
          <Curso
            nombre="curso de python"
            descripcion="aprende a desarrollar aplicaciones mediante el entorno de python"
          />
        </section>

        <section id="nosotros">
          <h2>Sobre nosotros</h2>
          <p>
            Somos un centro de formación comprometido con el desarrollo de
            nuestros estudiantes y la excelencia educativa.
          </p>
        </section>

        <section id="contacto">
          <h2>Contacto</h2>
          <p>
            Puedes contactarnos a través de nuestro correo electrónico o número
            de teléfono para más información sobre nuestros cursos.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;