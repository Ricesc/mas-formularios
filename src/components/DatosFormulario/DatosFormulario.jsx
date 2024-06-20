import React from "react";

const DatosFormulario = ({ data }) => {
    const { firstName, lastName, email, password, confirmPassword } = data;
    return (
        <div>
            <h2>Your Form Data</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
};

export default DatosFormulario;
