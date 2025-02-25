import React from 'react';
import {
 User,
 Lock,
 Google,
 Facebook,
 Mail,
} from "lucide-react";
import './Login.css'; // Import the CSS file


function Login() {
 return (
 <div className="login-container">
 <div className="login-form">
 <div className="logo">
 {/* Replace with your actual logo */}
 <h1>Logo</h1>
 </div>
 <h2>LOGIN</h2>
 <p>START YOUR JOURNEY NOW!!</p>


 <div className="input-group">
 <User className="input-icon" />
 <input type="text" placeholder="Username" />
 </div>


 <div className="input-group">
 <Lock className="input-icon" />
 <input type="password" placeholder="Password" />
 </div>


 <button className="login-button">Login Now</button>


 <div className="login-with-others">
 <p>Login with Others</p>
 <button className="google-login">
 <Google className="social-icon" />
 Login with Google
 </button>
 <button className="facebook-login">
 <Facebook className="social-icon" />
 Login with Facebook
 </button>
 </div>


 <div className="help-section">
 <p>HAVE A QUERY? <a href="#">CONTACT US</a></p>
 </div>
 </div>


 <div className="login-image">
 {/* Replace with your actual image */}
 <img src="your-image.jpg" alt="Login" />
 <div className="image-text">
 <h2>Opportunities are waiting for you</h2>
 <h2>Login Now!!!</h2>
 </div>
 </div>
 </div>
 );
}


export default Login;
