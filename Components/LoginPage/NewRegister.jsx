import React, { useState } from "react";

export const NewRegister = (props) => {
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="Register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Username</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder=" " />
            <label htmlFor="password1">New Password</label>
            <input value={pass1} onChange={(e) => setPass1(e.target.value)} type="password" placeholder="" id="password" name="password" />
            <label htmlFor="password2">Confirm Password</label>
            <input value={pass2} onChange={(e) => setPass2(e.target.value)} type="password" placeholder=" " id="password" name="password" />
            
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Submit </button>
    </div>
    )
};
