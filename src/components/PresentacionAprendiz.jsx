// Autor: Darwin - Presentación con guardado temporal
import { useState } from "react";

function PresentacionAprendiz() {
    const [nombreInput, setNombreInput] = useState("");
    const [cursoInput, setCursoInput] = useState("");
    const [datosGuardados, setDatosGuardados] = useState(null);
    const [mensaje, setMensaje] = useState("");

    function manejarEnvio(e) {
        e.preventDefault();
        if (nombreInput.trim() === "" || cursoInput.trim() === "") {
            setMensaje("Completa los campos obligatorios.");
            return;
        }
        setDatosGuardados({ nombre: nombreInput, curso: cursoInput });
        setMensaje("Presentación enviada correctamente.");
        setNombreInput("");
        setCursoInput("");
    }

    function limpiarFormulario() {
        setNombreInput(""); setCursoInput(""); setDatosGuardados(null); setMensaje("");
    }

    return (
        <div style={{ padding: "20px", border: "1px solid #444", margin: "20px", borderRadius: "8px" }}>
            <h2>MI PERFIL DE APRENDIZ</h2>
            <form onSubmit={manejarEnvio}>
                <div><label>Nombre: </label><input type="text" value={nombreInput} onChange={e => setNombreInput(e.target.value)} placeholder="Ej: Darwin" /></div>
                <div><label>Curso: </label><input type="text" value={cursoInput} onChange={e => setCursoInput(e.target.value)} placeholder="Ej: React" /></div>
                <button type="submit">Enviar presentación</button>
                <button type="button" onClick={limpiarFormulario}>Limpiar formulario</button>
            </form>
            {mensaje && <p style={{ fontWeight: "bold" }}>{mensaje}</p>}
            {datosGuardados && (
                <div style={{ marginTop: "15px", background: "#222", padding: "10px", borderRadius: "5px" }}>
                    <p>Mi nombre es: <strong>{datosGuardados.nombre}</strong></p>
                    <p>Me interesa aprender: <strong>{datosGuardados.curso}</strong></p>
                </div>
            )}
        </div>
    );
}
export default PresentacionAprendiz;