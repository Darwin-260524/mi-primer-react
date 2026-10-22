// Autor: Darwin - Registro con Base de Datos local
import { useState } from "react";

function RegistroAprendiz() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    // Esta es tu "base de datos" - un array donde guardamos a todos
    const [aprendices, setAprendices] = useState([]);

    function manejarRegistro(e) {
        e.preventDefault();

        // Validación
        if (!nombre.trim() || !correo.includes("@") || contrasena.length < 6) {
            alert("Verifica: nombre no vacío, correo con @ y contraseña de 6+ caracteres.");
            return;
        }

        // Creamos el nuevo aprendiz con fecha
        const nuevoAprendiz = {
            id: Date.now(), // ID único con la hora
            nombre: nombre,
            correo: correo,
            fecha: new Date().toLocaleString()
        };

        // Lo guardamos en la "base de datos"
        setAprendices(prev => [...prev, nuevoAprendiz]);

        // Limpiamos los campos - esto es lo que pediste
        setNombre("");
        setCorreo("");
        setContrasena("");

        alert(`¡Bienvenido ${nuevoAprendiz.nombre}! Te has registrado correctamente.`);
    }

    return (
        <div>
            <h2>Registro de Aprendiz</h2>

            <form onSubmit={manejarRegistro}>
                <div>
                    <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <input type="email" placeholder="Ingrese su correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                </div>
                <div>
                    <input type="password" placeholder="Ingrese su contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                </div>
                <button type="submit">Registrarse</button>
            </form>

            {/* Aquí mostramos la base de datos */}
            {aprendices.length > 0 && (
                <div style={{ marginTop: "20px", borderTop: "1px solid #555", paddingTop: "10px" }}>
                    <h3>Aprendices Registrados ({aprendices.length})</h3>
                    <p style={{ fontSize: "14px", color: "#aaa" }}>Base de datos temporal en memoria</p>

                    {aprendices.map((aprendiz) => (
                        <div key={aprendiz.id} style={{ border: "1px solid #444", padding: "8px", marginBottom: "8px", borderRadius: "5px", background: "#222" }}>
                            <p><strong>Nombre:</strong> {aprendiz.nombre}</p>
                            <p><strong>Correo:</strong> {aprendiz.correo}</p>
                            <p style={{ fontSize: "12px", color: "#888" }}>{aprendiz.fecha}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default RegistroAprendiz;