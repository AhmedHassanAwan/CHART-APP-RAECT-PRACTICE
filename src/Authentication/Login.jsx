


// import React, { useState } from 'react'
// import {  signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../config.js';
// import { Link, useNavigate } from 'react-router-dom';

// export default function Login() {
//     const [email,setemail] = useState("");
//     const [password,setpassword] = useState("");

//     const navigate = useNavigate()




// function btn(e) {

//     e.preventDefault()
//     console.log(email);
//     console.log(password);


//     signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log(user);

//     navigate("/home")

    
    
//   })
//   .catch((error) => {
//     const errorMessage = error.message;
//     console.log(errorMessage);
    
//   });

    
    

    
// }
//   return (
//     <>


//     <h1>hellow Login Page</h1>

//     <form>

//         <input onChange={(e)=> setemail(e.target.value)} type="email" placeholder='Enter Email' value={email} /><br />
//         <input onChange={(e)=> setpassword(e.target.value)} type="password" placeholder='Enter passward' value={password} /><br />

     

//         <p>create Account      <Link  to={"/sign"} > Sign UP</Link>    </p>

 

//   <button onClick={btn}>Login</button>
//     </form>
//     </>
//   )
// }
// // 

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config.js';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Create this CSS file

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/home");
        } catch (error) {
            setError(error.message);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h2>Welcome Back</h2>
                    <p>Login to your account</p>
                </div>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <i className="fas fa-envelope"></i>
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <i className="fas fa-lock"></i>
                    </div>

                    <div className="forgot-password">
                        <Link to="/forgot-password">Forgot password?</Link>
                    </div>

                    <button type="submit" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </form>

                <div className="login-footer">
                    <p>Don't have an account? <Link to="/sign">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
}