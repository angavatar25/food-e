const Restaurant = ({ icon }: { icon: string }) => {
  return (
    <div className="bg-white shadow-xl w-full p-3 min-h-28 h-full rounded-xl flex items-center justify-center">
      <img src={icon} alt="" />
    </div>
  )
};

export default Restaurant