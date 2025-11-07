import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import app from "../firebase.config";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Eye, EyeOff } from "lucide-react";
import Loading from "./Loading";
import { toast } from "react-toastify";

const Login = () => {
  const { logIn, googleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await logIn(email, password);
      setLoading(false);
      navigate(from, { replace: true });
       toast.success("Login successful!");
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };

  const handleGoogle = async () => {
    setError("");
    try {
      await googleLogin();
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || "Google login failed");
    }
  };

  const handleForgot = async () => {
    if (!email) {
      setError();
      return;
    }
    const auth = getAuth(app);
    try {
      await sendPasswordResetEmail(auth, email);
      alert();
    } catch (err) {
      setError(err.message || "Password reset failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-md shadow">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Login</h2>
      
      <div className="">{loading? <Loading></Loading>:""}</div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded pr-20"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-2 top-2 text-sm px-2 py-1 rounded">
             {showPassword ? <Eye></Eye> : <EyeOff></EyeOff>}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-green-700 text-white rounded"
          >
            login
          </button>

          <button
            type="button"
            onClick={handleForgot}
            className="text-sm text-green-700 underline"
          >
            Forgot Password?
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm">Or login with</p>
          <div className="flex justify-center mt-2 gap-2">
            <button
              type="button"
              onClick={handleGoogle}
              className="px-3 py-2 border rounded"
            >
              Continue with Google
            </button>
          </div>
        </div>

        <p className="text-sm text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-700 underline">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
