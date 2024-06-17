import React from "react";
import "./FormularioRegistro.css"


const FormularioRegistro = ({props,setProps}) => {

    const handleChange = (evento) => {
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
                    <input type="text" name="firstName" value={props.firstName} onChange={handleChange} />
                </div>
                {
                   props.firstName.length > 0 && props.firstName.length < 2 ?
                    <span>First Name must be at least 2 characters</span> :
                    ''
                }
                <div className="inputContainer">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" value={props.lastName} onChange={handleChange} />
                </div>
                {
                   props.lastName.length > 0 && props.lastName.length < 2 ?
                    <span>Last Name must be at least 2 characters</span> :
                    ''
                }
                <div className="inputContainer">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={props.email} onChange={handleChange} />
                </div>
                {
                   props.email.length > 0 && props.email.length < 5 ?
                    <span>Email must be at least 5 characters</span> :
                    ''
                }
                <div className="inputContainer">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={props.password} onChange={handleChange} />
                </div>
                {
                   props.password.length > 0 && props.password.length < 8 ?
                    <span>Password must be at least 8 characters</span> :
                    ''
                }
                <div className="inputContainer">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" value={props.confirmPassword} onChange={handleChange} />
                </div>
                {
                   (props.confirmPassword !== props.password && props.confirmPassword.length > 7) ||
                   props.confirmPassword.length > props.password.length?
                    <span>Password must match</span> :
                    ''
                }
            </form>        
    );

}

export default FormularioRegistro;