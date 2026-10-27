import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar({ setMostrarCursos }) {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <NavLink to="/">SENA APP</NavLink>
            </div>
            <ul className="navbar-links">
                <li><NavLink to="/" end>Inicio</NavLink></li>
                <li><NavLink to="/cursos" onClick={() => setMostrarCursos(true)}>Cursos</NavLink></li>
                <li><NavLink to="/registro">Registro</NavLink></li>
                <li><NavLink to="/gestion">Administrar</NavLink></li>
                <li><NavLink to="/aprendices">Aprendices</NavLink></li>
                <li><NavLink to="/instructores">Instructores</NavLink></li>
                <li><NavLink to="/fichas">Fichas</NavLink></li>
                <li><NavLink to="/competencias">Competencias</NavLink></li>
                <li><NavLink to="/evaluaciones">Evaluaciones</NavLink></li>
                <li><NavLink to="/acerca-de">Acerca de</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;