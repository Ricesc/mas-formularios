import React from "react";
import "./FormularioRegistro.css";

const FormularioRegistro = ({ inputs, setInputs }) => {
    const handleChange = (evento) => {
        const { name, value } = evento.target;
        setInputs((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <form>
            <div className="inputContainer">
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={inputs.firstName}
                    onChange={handleChange}
                />
            </div>
            {inputs.firstName.length > 0 && inputs.firstName.length < 2 ? (
                <span>First Name must be at least 2 characters</span>
            ) : (
                ""
            )}
            <div className="inputContainer">
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={inputs.lastName}
                    onChange={handleChange}
                />
            </div>
            {inputs.lastName.length > 0 && inputs.lastName.length < 2 ? (
                <span>Last Name must be at least 2 characters</span>
            ) : (
                ""
            )}
            <div className="inputContainer">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                />
            </div>
            {inputs.email.length > 0 && inputs.email.length < 5 ? (
                <span>Email must be at least 5 characters</span>
            ) : (
                ""
            )}
            <div className="inputContainer">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={inputs.password}
                    onChange={handleChange}
                />
            </div>
            {inputs.password.length > 0 && inputs.password.length < 8 ? (
                <span>Password must be at least 8 characters</span>
            ) : (
                ""
            )}
            <div className="inputContainer">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={inputs.confirmPassword}
                    onChange={handleChange}
                />
            </div>
            {(inputs.confirmPassword !== inputs.password &&
                inputs.confirmPassword.length > 7) ||
            inputs.confirmPassword.length > inputs.password.length ? (
                <span>Password must match</span>
            ) : (
                ""
            )}
        </form>
    );
};

export default FormularioRegistro;
