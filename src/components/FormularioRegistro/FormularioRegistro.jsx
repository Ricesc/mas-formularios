import React from "react";
import "./FormularioRegistro.css"


const FormularioRegistro = ({props,setProps}) => {

    const manejarCambio = (evento) => {
        const { name, value } = evento.target;
        setProps(prevState => ({
          ...prevState,
          [name]: value
        }));
      };


    return(
            <form>
                <div className="inputContainer">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" value={props.firstName} onChange={manejarCambio} />
                </div>
                <div className="inputContainer">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" value={props.lastName} onChange={manejarCambio} />
                </div>
                <div className="inputContainer">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={props.email} onChange={manejarCambio} />
                </div>
                <div className="inputContainer">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={props.password} onChange={manejarCambio} />
                </div>
                <div className="inputContainer">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" value={props.confirmPassword} onChange={manejarCambio} />
                </div>
            </form>        
    );

}

export default FormularioRegistro;