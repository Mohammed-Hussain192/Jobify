import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

export default function AuthForm() {
  const [isSignup, setIsSignup] = useState(true);
  const [role, setRole] = useState("student"); // student or hr

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", { ...data, role, isSignup });
    alert(`${isSignup ? "Sign up" : "Login"} successful as ${role}`);
  };

  const password = watch("password");

  const handleGoogleSignup = () => {
    console.log("Google Signup Clicked!");
    // Add Google authentication logic here
  };

  return (
    <div className={`auth-container ${role}`}>
      {/* Jobify Navbar */}
      <nav className="jobify-navbar">
        <div className="nav-content">
          <div className="logo">
            <span className="logo-icon">💼</span>
            <span className="logo-text">Jobify</span>
          </div>
          <div className="nav-links">
           
          </div>
        </div>
      </nav>

      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="auth-header">
          <div className="role-selector">
            <button
              className={`role-btn ${role === "student" ? "active" : ""}`}
              onClick={() => setRole("student")}
              type="button"
            >
              <i className="icon-graduation-cap"></i>
              Student
            </button>
            <button
              className={`role-btn ${role === "hr" ? "active" : ""}`}
              onClick={() => setRole("hr")}
              type="button"
            >
              <i className="icon-briefcase"></i>
              HR Professional
            </button>
          </div>
          
          <h2>
            {isSignup 
              ? `Create your ${role === "student" ? "Student" : "HR"} Account` 
              : `Welcome Back, ${role === "student" ? "Future Innovator" : "HR Professional"}`}
          </h2>
          <p className="auth-subtitle">
            {isSignup 
              ? (role === "student" 
                  ? "Kickstart your career journey with us" 
                  : "Find the best talent for your organization")
              : (role === "student"
                  ? "Continue your journey to career success"
                  : "Access your HR dashboard and tools")
            }
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          {isSignup && (
            <div className="input-group">
              <input
                type="text"
                placeholder="Full Name"
                {...register("name", { required: true })}
                className={errors.name ? "error" : ""}
              />
              {errors.name && (
                <p className="error-message">Name is required</p>
              )}
            </div>
          )}

          <div className="input-group">
            <input
              type="email"
              placeholder="Email address"
              {...register("email", { 
                required: true,
                pattern: /^\S+@\S+$/i
              })}
              className={errors.email ? "error" : ""}
            />
            {errors.email && (
              <p className="error-message">Valid email is required</p>
            )}
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              {...register("password", { 
                required: true, 
                minLength: 8,
                validate: value => {
                  if (role === "hr") {
                    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(value) ||
                    "Password must include uppercase, lowercase, number, and special character";
                  }
                  return true;
                }
              })}
              className={errors.password ? "error" : ""}
            />
            {errors.password && (
              <p className="error-message">
                {errors.password.message || "Password must be at least 8 characters"}
              </p>
            )}
          </div>

          {isSignup && role === "student" && (
            <>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="College/University"
                  {...register("college", { required: true })}
                  className={errors.college ? "error" : ""}
                />
                {errors.college && (
                  <p className="error-message">
                    College/University is required
                  </p>
                )}
              </div>
              
              <div className="input-group">
                <select
                  {...register("major", { required: true })}
                  className={errors.major ? "error" : ""}
                >
                  <option value="">Select your major</option>
                  <option value="cs">Computer Science</option>
                  <option value="eng">Engineering</option>
                  <option value="bus">Business</option>
                  <option value="art">Arts & Humanities</option>
                  <option value="sci">Sciences</option>
                  <option value="other">Other</option>
                </select>
                {errors.major && (
                  <p className="error-message">Major is required</p>
                )}
              </div>
              
              <div className="input-group">
                <input
                  type="number"
                  placeholder="Expected Graduation Year"
                  {...register("graduationYear", { 
                    required: true,
                    min: new Date().getFullYear(),
                    max: new Date().getFullYear() + 5
                  })}
                  className={errors.graduationYear ? "error" : ""}
                />
                {errors.graduationYear && (
                  <p className="error-message">Valid graduation year is required</p>
                )}
              </div>
            </>
          )}

          {isSignup && role === "hr" && (
            <>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Company Name"
                  {...register("company", { required: true })}
                  className={errors.company ? "error" : ""}
                />
                {errors.company && (
                  <p className="error-message">Company name is required</p>
                )}
              </div>
              
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Job Title"
                  {...register("jobTitle", { required: true })}
                  className={errors.jobTitle ? "error" : ""}
                />
                {errors.jobTitle && (
                  <p className="error-message">Job title is required</p>
                )}
              </div>
              
              <div className="input-group">
                <select
                  {...register("companySize", { required: true })}
                  className={errors.companySize ? "error" : ""}
                >
                  <option value="">Company Size</option>
                  <option value="1-50">1-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501-1000">501-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
                {errors.companySize && (
                  <p className="error-message">Company size is required</p>
                )}
              </div>
              
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Employee ID (if applicable)"
                  {...register("employeeId")}
                />
              </div>
            </>
          )}

          {!isSignup && (
            <div className="remember-forgot">
              <label className="checkbox-container">
                <input type="checkbox" {...register("rememberMe")} />
                <span className="checkmark"></span>
                Remember me
              </label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>
          )}

          <motion.button
            type="submit"
            className="submit-btn"
            whileTap={{ scale: 0.95 }}
          >
            {isSignup ? "Create Account" : "Sign In"}
          </motion.button>
        </form>

        {/* Google Sign Up Button (only for sign up) */}
        {isSignup && (
          <>
            <div className="divider">
              <span>Or sign up with</span>
            </div>
            <div className="social-auth">
              <button
                
                className="google-btn"
              >
                <a href="http://localhost:5000/auth/google" onClick={handleGoogleSignup}>
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="google-icon"
                />
                Sign up with Google
                </a>
              </button>
            </div>
          </>
        )}

        {/* Switch Login/Signup */}
        <div className="auth-switch">
          <p>
            {isSignup 
              ? "Already have an account?" 
              : `Don't have an account as ${role === "student" ? "a student" : "an HR professional"}?`}{" "}
            <span
              onClick={() => setIsSignup(!isSignup)}
              className="switch-link"
            >
              {isSignup ? "Sign In" : "Sign Up"}
            </span>
          </p>
        </div>
      </motion.div>

      <style jsx>{`
        .auth-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 20px;
          transition: all 0.5s ease;
          flex-direction: column;
        }
        
        /* Jobify Navbar Styles */
        .jobify-navbar {
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 15px 0;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
        }
        
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          font-size: 24px;
          color: #2d3748;
        }
        
        .logo-icon {
          font-size: 28px;
        }
        
        .nav-links {
          display: flex;
          gap: 30px;
        }
        
        .nav-links a {
          text-decoration: none;
          color: #4a5568;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .nav-links a:hover {
          color: #4facfe;
        }
        
        .auth-container.hr .nav-links a:hover {
          color: #ff758c;
        }
        
        .auth-container.student {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          padding-top: 80px;
        }
        
        .auth-container.hr {
          background: linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%);
          padding-top: 80px;
        }
        
        .auth-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 500px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          margin-top: 20px;
        }
        
        .auth-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
        }
        
        .auth-container.hr .auth-card::before {
          background: linear-gradient(90deg, #ff758c 0%, #ff7eb3 100%);
        }
        
        .role-selector {
          display: flex;
          background: #f7fafc;
          border-radius: 12px;
          padding: 6px;
          margin-bottom: 24px;
        }
        
        .role-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          padding: 12px;
          border: none;
          background: transparent;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .role-btn.active {
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .auth-header {
          text-align: center;
          margin-bottom: 30px;
        }
        
        .auth-header h2 {
          font-size: 28px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 8px;
        }
        
        .auth-subtitle {
          color: #718096;
          font-size: 16px;
          max-width: 300px;
          margin: 0 auto;
        }
        
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .input-group {
          display: flex;
          flex-direction: column;
        }
        
        .input-group input, .input-group select {
          padding: 16px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 16px;
          transition: all 0.3s ease;
        }
        
        .input-group input:focus, .input-group select:focus {
          outline: none;
          border-color: #4facfe;
        }
        
        .auth-container.hr .input-group input:focus,
        .auth-container.hr .input-group select:focus {
          border-color: #ff758c;
        }
        
        .input-group input.error, .input-group select.error {
          border-color: #fc8181;
        }
        
        .error-message {
          color: #e53e3e;
          font-size: 14px;
          margin-top: 6px;
        }
        
        .remember-forgot {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .checkbox-container {
          display: flex;
          align-items: center;
          cursor: pointer;
          font-size: 14px;
        }
        
        .checkbox-container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }
        
        .checkmark {
          height: 20px;
          width: 20px;
          background-color: #eee;
          border-radius: 5px;
          margin-right: 10px;
          position: relative;
        }
        
        .checkbox-container input:checked ~ .checkmark {
          background-color: #4facfe;
        }
        
        .auth-container.hr .checkbox-container input:checked ~ .checkmark {
          background-color: #ff758c;
        }
        
        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }
        
        .checkbox-container input:checked ~ .checkmark:after {
          display: block;
          left: 7px;
          top: 3px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
        
        .forgot-link {
          color: #4facfe;
          text-decoration: none;
          font-size: 14px;
        }
        
        .auth-container.hr .forgot-link {
          color: #ff758c;
        }
        
        .forgot-link:hover {
          text-decoration: underline;
        }
        
        .submit-btn {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
          border: none;
          padding: 16px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .auth-container.hr .submit-btn {
          background: linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%);
        }
        
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        /* Divider Styles */
        .divider {
          display: flex;
          align-items: center;
          margin: 20px 0;
          color: #718096;
        }
        
        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e2e8f0;
        }
        
        .divider span {
          padding: 0 15px;
          font-size: 14px;
        }
        
        /* Google Button Styles */
        .social-auth {
          margin-bottom: 20px;
        }
        
        .google-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          padding: 14px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          background: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .google-btn:hover {
          border-color: #cbd5e0;
          background: #f7fafc;
        }
        
        .google-icon {
          width: 20px;
          height: 20px;
        }
        
        .auth-switch {
          text-align: center;
          color: #718096;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid #e2e8f0;
        }
        
        .switch-link {
          color: #4facfe;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        
        .auth-container.hr .switch-link {
          color: #ff758c;
        }
        
        .switch-link:hover {
          text-decoration: underline;
        }
        
        @media (max-width: 768px) {
          .nav-content {
            flex-direction: column;
            gap: 15px;
          }
          
          .nav-links {
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .auth-card {
            padding: 24px;
          }
          
          .auth-header h2 {
            font-size: 24px;
          }
          
          .remember-forgot {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
        
        /* Icons */
        .icon-graduation-cap:before {
          content: "🎓";
        }
        
        .icon-briefcase:before {
          content: "💼";
        }
      `}</style>
    </div>
  );
}