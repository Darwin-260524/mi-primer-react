import { useEffect, useState } from "react";

function Competencias() {
    const [competencias, setCompetencias] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error("No se pudo consultar la información.");
                }
                return respuesta.json();
            })
            .then((datos) => {
                setCompetencias(datos.slice(0, 15));
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
            <h2>Competencias (datos de prueba)</h2>
            {cargando && <p>Cargando información...</p>}
            {error && <p style={{ color: "#ff6b6b" }}>{error}</p>}
            {!cargando && !error && (
                <div style={{ display: "grid", gap: "10px" }}>
                    {competencias.map((item) => (
                        <article key={item.id} style={{ border: "1px solid #333", padding: "12px", borderRadius: "6px", background: "#161b22", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span>🎯 {item.title}</span>
                            <span style={{ padding: "4px 8px", borderRadius: "4px", fontSize: "12px", backgroundColor: item.completed ? "#238636" : "#da3633", color: "white" }}>
                                {item.completed ? "Completada ✓" : "Pendiente ⏳"}
                            </span>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Competencias;