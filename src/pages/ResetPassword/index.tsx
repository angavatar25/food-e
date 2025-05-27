import { useState } from "react";
import CloseIcon from "../../assets/icons/Close.svg";
import { Eye, EyeOff } from "lucide-react";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen px-6 py-8 flex flex-col bg-white">
      {/* Close button */}
      <button className="self-start mb-6 text-black">
        <img src={CloseIcon} alt="" />
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 font-bebas">Reset Password</h1>

      {/* Form */}
      <form className="flex flex-col gap-4">
        {/* Password */}
        <div>
          <label className="text-sm font-semibold text-teal-500 uppercase font-bebas">New Password</label>
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
        </div>

        <div>
          <label className="text-sm font-semibold text-teal-500 uppercase font-bebas">Confirm Password</label>
          <div className="mt-1 w-full flex items-center rounded-full px-4 py-2 bg-gray-100">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full bg-transparent outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="text-gray-400"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="mt-6 text-xl w-full bg-teal-500 text-white font-bold rounded-full py-2 font-bebas"
        >
          Reset Password
        </button>
      </form>
    </div>
  )
};

export default ResetPassword;