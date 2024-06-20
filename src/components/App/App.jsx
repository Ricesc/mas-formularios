import React, { useState } from "react";
import "./App.css";
import FormularioRegistro from "../FormularioRegistro/FormularioRegistro";
import DatosFormulario from "../DatosFormulario/DatosFormulario";

const App = () => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    return (
        <div className="App">
            <h1>Form</h1>
            <FormularioRegistro inputs={state} setInputs={setState} />
            <DatosFormulario data={state} />
        </div>
    );
};

export default App;
