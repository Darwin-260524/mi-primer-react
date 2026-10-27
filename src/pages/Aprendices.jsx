import { useEffect, useState } from "react";

function Aprendices() {
    const [aprendices, setAprendices] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error("No se pudo consultar la información.");
                }
                return respuesta.json();
            })
            .then((datos) => {
                setAprendices(datos);
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
            <h2>Aprendices (datos de prueba)</h2>
            {cargando && <p>Cargando información...</p>}
            {error && <p style={{ color: "#ff6b6b" }}>{error}</p>}
            {!cargando && !error && (
                <div style={{ display: "grid", gap: "15px", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}>
                    {aprendices.map((aprendiz) => (
                        <article key={aprendiz.id} style={{ border: "1px solid #333", padding: "15px", borderRadius: "8px", background: "#161b22" }}>
                            <h3>{aprendiz.name}</h3>
                            <p><strong>Correo:</strong> {aprendiz.email}</p>
                            <p><strong>Ciudad:</strong> {aprendiz.address.city}</p>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Aprendices;