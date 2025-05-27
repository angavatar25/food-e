const Banner = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-teal-300 rounded-3xl shadow-md flex flex-col justify-center text-white font-bebas">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">
        GET <span className="text-black">50%</span> AS A JOINING BONUS
      </h2>
      <p className="mt-4 text-lg sm:text-xl font-semibold text-white">
        USE CODE ON CHECKOUT
      </p>
      <p className="text-4xl sm:text-5xl font-extrabold text-black mt-1">
        NEW50
      </p>
    </div>
  )
};

export default Banner;