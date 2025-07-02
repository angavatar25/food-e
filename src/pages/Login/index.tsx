import { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import { Eye, EyeOff } from "lucide-react";

import CloseIcon from "../../assets/icons/Close.svg";
import { Link, useNavigate } from "react-router";
import Input from "../../components/Input";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/home');
      })
  };

  return (
    <div className="min-h-screen px-6 py-8 flex flex-col bg-white">
      {/* Close button */}
      <button className="self-start mb-6 text-black">
        <img src={CloseIcon} alt="" />
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 font-bebas">Login</h1>

      {/* Form */}
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        {/* Email */}
        <div className="w-full">
          <label className="font-semibold text-teal-500 uppercase font-bebas">Email</label>
          <Input
            inputType="email"
            onChange={setEmail}
            value={email}
            placeholder="johndoe@email.com"
          />
        </div>
        {/* Password */}
        <div>
          <label className="text-sm font-semibold text-teal-500 uppercase font-bebas">New Password</label>
          <div className="mt-1 w-full flex items-center rounded-full px-4 py-2 bg-gray-100">
            <Input
              inputType={showPassword ? 'text' : 'password'}
              onChange={setPassword}
              value={password}
              placeholder="Input password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="mt-6 text-xl w-full bg-teal-500 text-white font-bold rounded-full py-2 font-bebas"
        >
          Login
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <Link to="/register" className="text-orange-500 font-semibold">
          Register
        </Link>
      </p>
    </div>
  )
};

export default Login;