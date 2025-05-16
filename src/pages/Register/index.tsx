import { useState } from 'react';
import { Link } from 'react-router-dom'; // Optional: If using React Router

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen px-6 py-8 flex flex-col bg-white">
      {/* Close button */}
      <button className="self-start mb-6 text-black">
        Close
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 font-bebas">REGISTER</h1>

      {/* Form */}
      <form className="flex flex-col gap-4">
        {/* Full Name */}
        <div>
          <label className="font-semibold text-teal-500 uppercase font-bebas">Register</label>
          <input
            type="text"
            placeholder="John Doe"
            className="mt-1 w-full rounded-full px-4 py-2 bg-gray-100 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="font-semibold text-teal-500 uppercase font-bebas">Email</label>
          <input
            type="email"
            placeholder="johndoe@email.com"
            className="mt-1 w-full rounded-full px-4 py-2 bg-gray-100 outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="font-semibold text-teal-500 uppercase font-bebas">Phone</label>
          <input
            type="tel"
            placeholder="+00 123 456 7890"
            className="mt-1 w-full rounded-full px-4 py-2 bg-gray-100 outline-none"
          />
        </div>

        {/* Password */}
        {/* <div>
          <label className="text-xs font-semibold text-teal-500 uppercase">Password</label>
          <div className="mt-1 w-full flex items-center rounded-full px-4 py-2 bg-gray-100">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full bg-transparent outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div> */}

        {/* Register Button */}
        <button
          type="submit"
          className="mt-6 text-xl w-full bg-teal-500 text-white font-bold rounded-full py-2 font-bebas"
        >
          REGISTER
        </button>
      </form>

      {/* Bottom Text */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link to="/login" className="text-orange-500 font-semibold">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;