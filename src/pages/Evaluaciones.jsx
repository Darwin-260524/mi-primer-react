import { useEffect, useState } from "react";

function Evaluaciones() {
    const [evaluaciones, setEvaluaciones] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error("No se pudo consultar la información.");
                }
                return respuesta.json();
            })
            .then((datos) => {
                setEvaluaciones(datos.slice(0, 12));
            })
            .catch(() => {
                setError("No fue posible cargar los datos. Intenta nuevamente.");
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);

    return (
        <section style={{ padding: "20px" }}>
            <h2>Evaluaciones (datos de prueba)</h2>
            {cargando && <p>Cargando información...</p>}
            {error && <p style={{ color: "#ff6b6b" }}>{error}</p>}
            {!cargando && !error && (
                <div style={{ display: "grid", gap: "15px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
                    {evaluaciones.map((evaluacion) => (
                        <article key={evaluacion.id} style={{ border: "1px solid #333", padding: "15px", borderRadius: "8px", background: "#161b22" }}>
                            <h3 style={{ fontSize: "16px", color: "#58a6ff" }}>📝 {evaluacion.name}</h3>
                            <p style={{ fontSize: "12px", color: "#8b949e" }}><strong>Por:</strong> {evaluacion.email}</p>
                            <p style={{ fontSize: "14px", marginTop: "10px" }}>"{evaluacion.body}"</p>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Evaluaciones;