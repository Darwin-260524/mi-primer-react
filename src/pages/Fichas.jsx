import { useEffect, useState } from "react";

function Fichas() {
    const [fichas, setFichas] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error("No se pudo consultar la información.");
                }
                return respuesta.json();
            })
            .then((datos) => {
                // Tomamos solo las primeras 15 para mantener una buena presentación
                setFichas(datos.slice(0, 15));
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
            <h2>Fichas de Formación (datos de prueba)</h2>
            {cargando && <p>Cargando información...</p>}
            {error && <p style={{ color: "#ff6b6b" }}>{error}</p>}
            {!cargando && !error && (
                <div style={{ display: "grid", gap: "15px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
                    {fichas.map((ficha) => (
                        <article key={ficha.id} style={{ border: "1px solid #333", padding: "15px", borderRadius: "8px", background: "#161b22" }}>
                            <h3 style={{ textTransform: "capitalize", color: "#58a6ff" }}>📋 {ficha.title}</h3>
                            <p style={{ color: "#8b949e" }}>{ficha.body}</p>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Fichas;