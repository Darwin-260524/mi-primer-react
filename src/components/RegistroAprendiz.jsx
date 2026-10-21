import { useState } from "react";

function RegistroAprendiz() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Ingrese su nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>

            <div>
                <input
                    type="email"
                    placeholder="Ingrese su correo"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />
            </div>

            <div>
                <input
                    type="password"
                    placeholder="Ingrese su contraseña"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                />
            </div>

            <button onClick={() => alert(`¡Bienvenido ${nombre}!`)}>Registrarse</button>


            <p>Bienvenido {nombre}</p>
            <p>¡Gracias por registrarte!</p>

        </div>
    );
}

export default RegistroAprendiz