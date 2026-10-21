import { useState } from "react";

function Curso(props) {
    const [interesados, setInteresados] = useState(0);
    const [inscritos, setInscritos] = useState(0);

    function mostrarInformacion() {
        alert(`¡Información del curso ${props.nombre}!`);
    }

    function inscribirse() {
        setInscritos(inscritos + 1);
        alert(`¡Te has inscrito en el curso ${props.nombre}!`);
    }

    function agregarInteresado() {
        setInteresados(interesados + 1);
    }

    function registrarInscripcion() {
        setInscritos(inscritos + 1);
    }

    return (
        <div className="curso-card">
            <h3>{props.nombre}</h3>
            <p>{props.descripcion}</p>

            <p>Personas interesadas: {interesados}</p>

            <div>
                <button onClick={mostrarInformacion}>Ver información</button>
                <button onClick={inscribirse}>Inscribirme</button>
                <button onClick={agregarInteresado}>Me interesa</button>
            </div>

            <p>Inscripciones registradas: {inscritos}</p>

            <div>
                <button onClick={registrarInscripcion}>Registrar inscripción</button>
            </div>
        </div>
    );
}

export default Curso;