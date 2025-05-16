import Button from "../../components/Button";

const GetStarted = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-white px-6 py-10">
      {/* Header */}
      <div className="w-full text-left">
        <h1 className="text-2xl font-bold text-black">
          FOOD-<span className="text-teal-400">E</span>
        </h1>
        <div className="flex flex-col mt-10">
          <h2 className="text-3xl font-extrabold text-black font-bebas">
            GET <span className="text-teal-400">STARTED</span>
          </h2>
          <p className="text-left text-gray-700 mt-4 max-w-xs">
            Get started and enjoy the awesome local food right at your home.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full flex flex-col gap-4 mt-20">
        <Button
          text="LOGIN"
          bgColor="bg-teal-400"
          textColor="text-white"
        />
        <Button
          text="REGISTER"
          bordered={true}
        />
      </div>
    </div>
  );
};

export default GetStarted;