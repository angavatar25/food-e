import { useEffect, useState } from "react";
import CloseIcon from "../../assets/icons/Close.svg";

const PassRecovery = () => {
  const [counter, setCounter] = useState(60);
  
  const [emailSent] = useState(true);

  const userEmail = "donbosco@gmail.com";

  useEffect(() => {
    if (counter <= 0) return;
    const timer = setTimeout(() => setCounter(counter - 1), 1000);
    return () => clearTimeout(timer);
  }, [counter]);
  return (
    <div className="min-h-screen px-6 py-8 bg-white relative">
      {/* Close button */}
      <button className="self-start mb-6 text-black">
        <img src={CloseIcon} alt="" />
      </button>

      {emailSent ? (
        <div>
          {/* Title */}
          <h1 className="text-3xl font-bold mb-4 font-bebas">EMAIL SENT</h1>
          {/* Description */}
          <p className="text-gray-600 text-sm mb-10">
            We’ve sent you an email at{' '}
            <span className="text-teal-500 font-medium">{userEmail}</span> for verification. Check your
            email for the verification link.
          </p>
  
          {/* Countdown Timer */}
          {counter > 0 && (
            <p className="text-orange-500 font-semibold text-sm mb-2">
              {String(Math.floor(counter / 60)).padStart(2, '0')}:
              {String(counter % 60).padStart(2, '0')}
            </p>
          )}
  
          {/* Resend Section */}
          <p className="text-sm text-gray-700 mb-1">Did not receive the email yet?</p>
          <button
            onClick={() => {
              // logic to resend verification
              setCounter(60);
            }}
            className="text-teal-500 text-sm font-medium mb-10"
            disabled={counter > 0}
          >
            Resend
          </button>
  
          {/* Open Email App Button */}
          <button className="w-full bg-teal-500 text-white font-bold rounded-full py-2 mt-auto font-bebas">
            OPEN EMAIL APP
          </button>
        </div>
      ) : (
        <div>
          {/* Title */}
          <h1 className="text-3xl font-bold font-bebas">Forgot Password</h1>
          <p className="text-left my-4 text-gray-700">
            We’ll send a password reset link to your email.
          </p>

          {/* Form */}
          <form className="flex flex-col gap-4 absolute items-center justify-center w-full h-full top-0 left-0  px-6">
            {/* Email */}
            <div className="w-full">
              <label className="font-semibold text-teal-500 uppercase font-bebas">Email</label>
              <input
                type="email"
                placeholder="johndoe@email.com"
                className="mt-1 w-full rounded-full px-4 py-2 bg-gray-100 outline-none"
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="mt-6 text-xl w-full bg-teal-500 text-white font-bold rounded-full py-2 font-bebas"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  )
};

export default PassRecovery;