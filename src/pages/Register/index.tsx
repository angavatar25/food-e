import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Eye, EyeOff } from 'lucide-react';

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { auth, db } from '../../firebase';

import CloseIcon from "../../assets/icons/Close.svg";
import Input from '../../components/Input';

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleRegister = async (e: any) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const { user } = userCredential;

      await updateProfile(user, {
        displayName: fullName,
      });

      await setDoc(doc(db, "users", user.uid), {
        displayName: fullName,
        email,
        phoneNumber,
        createdAt: new Date()
      })
      .then((res) => {
        navigate("/home");
      });

      alert("User registered successfully!");
    } catch (error: any) {
      console.error("Registration error", error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen px-6 py-8 flex flex-col bg-white">
      {/* Close button */}
      <button className="self-start mb-6 text-black">
        <img src={CloseIcon} alt="" />
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 font-bebas">REGISTER</h1>

      {/* Form */}
      <form
        onSubmit={handleRegister}
        className="flex flex-col gap-4"
      >
        {/* Full Name */}
        <div>
          <label className="font-semibold text-teal-500 uppercase font-bebas">Full Name</label>
          <Input
            inputType='text'
            placeholder='John Holder'
            value={fullName}
            onChange={setFullName}
          />
        </div>

        {/* Email */}
        <div>
          <label className="font-semibold text-teal-500 uppercase font-bebas">Email</label>
          <Input
            inputType='text'
            placeholder='john_holder@domain.com'
            value={email}
            onChange={setEmail}
          />
        </div>

        {/* Phone */}
        <div>
          <label className="font-semibold text-teal-500 uppercase font-bebas">Phone</label>
          <Input
            inputType='text'
            placeholder='+0012293949'
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-xs font-semibold text-teal-500 uppercase">Password</label>
          <div className="mt-1 w-full flex items-center rounded-full px-4 py-2 bg-gray-100">
            <Input
              inputType='password'
              placeholder='Input Password'
              value={password}
              onChange={setPassword}
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