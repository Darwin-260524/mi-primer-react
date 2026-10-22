// Autor: Darwin - Curso con contador e inscrito
import { useState } from "react";

function Curso({ nombre, descripcion, detalles }) {
    const [interesados, setInteresados] = useState(0);
    const [inscrito, setInscrito] = useState(false);

    function mostrarInformacion() {
        alert(`📚 ${nombre}\n\nDescripción: ${descripcion}\n\nDetalles: ${detalles}\nDuración: 40 horas\nInteresados: ${interesados}\n${inscrito ? "Ya estás inscrito ✓" : "No inscrito"}`);
    }

    return (
        <div style={{ border: "1px solid #444", padding: "15px", borderRadius: "10px", background: "#1e1e1e", textAlign: "center" }}>
            <h3>Curso: {nombre}</h3>
            <p>{descripcion}</p>
            <p style={{ fontSize: "13px", color: "#aaa" }}>👥 {interesados} interesada(s)</p>
            <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
                <button onClick={mostrarInformacion}>Ver información</button>
                <button onClick={() => setInteresados(prev => prev + 1)}>Me interesa</button>
                <button onClick={() => setInscrito(true)} disabled={inscrito} style={inscrito ? { background: "#555", color: "#ccc" } : {}}>
                    {inscrito ? "Inscrito ✓" : "Inscribirme"}
                </button>
            </div>
        </div>
    );
}
export default Curso;